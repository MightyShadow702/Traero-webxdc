var metadata = {}

var search_string = "";

var objects = []

var editing = false;

function save_metadata()
{
    var item_count = 0;
  for (var i in metadata)
  {
      if (metadata[i].active)
      {
          item_count++;
      }
  }
  window.webxdc.sendUpdate(
    {
      "payload": {
        "metadata": metadata
      },
      "summary": item_count + " " + translate(item_count == 1 ? "update_item_txt" : "update_items_txt"),
      "info": window.webxdc.selfName + " " + translate("update_message")
    },
    window.webxdc.selfName + " " + translate("update_message")
  );
}

class Item
{
  remove()
  {
    this.dom.remove();
  }
  show()
  {
      this.dom.style.display = "unset";
  }
  hide()
  {
      this.dom.style.display = "none";
  }
  toLast()
  {
    if (this.dom in document.getElementById("current_items").children)
    {
      document.getElementById("current_items").removeChild(this.dom);
    }
    document.getElementById("last_items").appendChild(this.dom);
  }
  toActive()
  {
    if (this.dom in document.getElementById("last_items").children)
    {
      document.getElementById("last_items").removeChild(this.dom);
    }
    document.getElementById("current_items").appendChild(this.dom);
  }
  Update()
  {
    if (metadata[this.name].active)
    {
      this.toActive();
    }
    else
    {
      this.toLast();
    }
  }
  Toggle()
  {
    metadata[this.name].active = !metadata[this.name].active;
    this.Update();
    save_metadata();
  }
  constructor(name, title, meta=null)
  {
    this.name = name;
    this.dom = document.createElement("button");
    this.dom.id = "item";
    var title_obj = document.createElement("p");
    title_obj.id = "title";
    title_obj.innerHTML = title;
    this.dom.appendChild(title_obj);
    var meta_obj = document.createElement("p");
    meta_obj.id = "meta";
    meta_obj.innerHTML = meta;
    this.dom.appendChild(meta_obj);
    var obj = this;
    this.dom.onclick = function(){
      obj.Toggle();
    }
    var delete_timer = -1;
    function startPress()
    {
      delete_timer = setInterval(function(){
      obj.dom.remove();
      if (metadata[name].active)
      {
        editing = true;
        search_string = name;
        document.getElementById("new_item_input").value = name;
        document.getElementById("new_item_input").focus();
        update_search();
      }
      delete metadata[name];
      objects.splice(objects.indexOf(obj), 1);
      save_metadata();
      clearInterval(delete_timer);
      }, 1000);
    }
    function cancelPress()
    {
      if (delete_timer != -1)
      {
        clearInterval(delete_timer);
      }
    }
    this.dom.addEventListener("mousedown", startPress);
    this.dom.addEventListener("mouseup", cancelPress);
    this.dom.addEventListener("mouseleave", cancelPress);
    this.dom.addEventListener("touchstart", startPress);
    this.dom.addEventListener("touchend", cancelPress);
    this.dom.addEventListener("touchcancel", cancelPress);
  }
}

function add_item(name)
{
  if (!(name in metadata))
  {
    var content = name.split(",").map(i => i.trim())
    metadata[name] = {"active": true, "title": content[0], "meta": content.slice(1).join(", ")};
  }
  else
  {
      metadata[name].active = true;
  }
  save_metadata();
}

function input_onkeydown(obj, event)
{
  if (obj.value != "" && event.key == "Enter")
  {
    editing = false;
    add_item(obj.value.trim());
    obj.value = "";
    search_string = "";
    update_search();
  }
}

function update_search()
{
    if (search_string != "")
    {
        document.getElementById("input_clear").style.display = "block";
        for (var i in objects)
        {
            var item = objects[i];
            if (item.name.toLowerCase().includes(search_string.toLowerCase()))
            {
                item.show()
            }
            else
            {
                item.hide()
            }
        }
    }
    else
    {
        document.getElementById("input_clear").style.display = "";
        for (var i in objects)
        {
            objects[i].show();
        }
    }
}

function input_oninput(obj)
{
    search_string = obj.value.trim();
    update_search();
}

function input_clear()
{
  var obj = document.getElementById("new_item_input");
  if (editing)
  {
    add_item(obj.value.trim());
    editing = false;
  }
  obj.value = "";
  search_string = "";
  update_search();
}

function update_handler(data)
{
  var payload = data.payload;
  metadata = payload.metadata;
  var existing = Object.fromEntries(objects.map(i => [i.name, i]));
  for (var i in metadata)
  {
    if (!(i in existing))
    {
      var obj = new Item(i, metadata[i].title, metadata[i].meta);
      objects.push(obj);
      obj.Update();
    }
    else
    {
      if (metadata[i].active)
      {
        existing[i].toActive();
      }
      else
      {
        existing[i].toLast();
      }
    }
  }
  for (var i in objects)
  {
    if (!(objects[i].name in metadata))
    {
      objects[i].remove();
      objects.splice(i, 1);
    }
  }
  update_search();
}

function import_metadata()
{
  window.webxdc.importFiles({
    mimeTypes: ["applcation/json"],
    extensions: [".json"],
  }).then((files) => {
    files[0].text().then(text => {
      Object.assign(metadata, JSON.parse(text));
      save_metadata();
    });
  });
}

function export_metadata()
{
  window.webxdc.sendToChat({
      file: {plainText: JSON.stringify(metadata), name: "Traero.json"},
      text: translate("export_message")
  });
}

function update_language(lang)
{
  document.getElementById("buy_title").innerHTML = translate("buy");
  document.getElementById("last_title").innerHTML = translate("last");
  document.getElementById("new_item_input").placeholder = translate("search");

  document.getElementById("bt_about").innerHTML = translate("about_title");
  document.getElementById("bt_controls").innerHTML = translate("controls_title");
  document.getElementById("bt_export").innerHTML = translate("bt_export");
  document.getElementById("bt_import").innerHTML = translate("bt_import");
}

function onload()
{
  update_language();
  window.webxdc.setUpdateListener(update_handler);
}
