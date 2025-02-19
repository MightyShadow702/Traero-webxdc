var metadata = {}

var search_string = "";

var objects = []

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
      "summary": item_count + " items",
      "info": window.webxdc.selfName + " updated the list in Traero"
    },
    window.webxdc.selfName + " updated the list in Traero"
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
         if (!metadata[name].active)
        {
          delete_timer = setInterval(function(){
          obj.dom.remove();
          delete metadata[name];
          objects.splice(objects.indexOf(obj), 1);
          save_metadata();
          clearInterval(delete_timer);
          }, 1000);
        }
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

function input_onkeydown(obj, event)
{
  if (obj.value != "" && event.key == "Enter")
  {
    if (!(obj.value in metadata))
    {
      var content = obj.value.split(",").map(i => i.trim())
      metadata[obj.value] = {"active": true, "title": content[0], "meta": content.slice(1).join(", ")};
    }
    else
    {
        metadata[obj.value].active = true;
    }
    save_metadata();
    obj.value = "";
    search_string = "";
    update_search();
  }
}

function update_search()
{
    if (search_string != "")
    {
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

function change_language(lang)
{
  if (lang in languages)
  {
    document.getElementById("buy_title").innerHTML = languages[lang].buy;
    document.getElementById("last_title").innerHTML = languages[lang].last;
    document.getElementById("new_item_input").placeholder = languages[lang].search;
  }
}

function onload()
{
  change_language(navigator.language.split("-")[0]);
  window.webxdc.setUpdateListener(update_handler);
}
