var metadata = {}

var search_string = "";

var objects = {};

var editing = false;
var name_backup = "";

var mouse_x = -1;
var mouse_y = -1;

//drag current position (touch)
document.addEventListener('touchmove', function(event) {
  if (event.changedTouches && event.changedTouches.length > 0) {
      var touch = event.changedTouches[0];
      mouse_x = touch.pageX;
      mouse_y = touch.pageY;
  }
});

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
    metadata[this.name].timestamp = Date.now();
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
      var start_mouse_x = mouse_x;
      var start_mouse_y = mouse_y;
      delete_timer = setInterval(function(){
        //check if screen moved (touch), else just true
        if (Math.abs(start_mouse_x - mouse_x) < 5 && Math.abs(start_mouse_y - mouse_y) < 5)
        {
          obj.dom.remove();
          if (metadata[name].active)
          {
            editing = true;
            name_backup = name;
            search_string = name;
            document.getElementById("new_item_input").value = name;
            document.getElementById("new_item_input").focus();
            update_search();
          }
          else
          {
              var old_toast = document.getElementById("toast");
              if (old_toast)
              {
                  old_toast.remove();
              }
              const undo_element = structuredClone(metadata[name]);
              traero_toast(translate("toast_undo"), 3000, true, ()=>{
                  metadata[name] = undo_element;
                  metadata[name].timestamp = Date.now();
                  save_metadata();
              });
          }
          metadata[name].active = null;
          metadata[name].timestamp = Date.now();
          save_metadata();
        }
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
    metadata[name] = {"active": true, "title": content[0], "meta": content.slice(1).join(", "), "timestamp": Date.now()};
  }
  else
  {
      metadata[name].active = true;
      metadata.timestamp = Date.now();
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
    add_item(name_backup);
    editing = false;
  }
  obj.value = "";
  search_string = "";
  update_search();
}

function cleanup_metadata()
{
  for (const name in metadata)
  {
    if (metadata[name].active == null)
    {
      delete metadata[name];
    }
  }
}

function import_metadata()
{
  window.webxdc.importFiles({
    mimeTypes: ["applcation/json"],
    extensions: [".json"],
  }).then((files) => {
    files[0].text().then(text => {
      var timestamp = Date.now();
      for (const [name, data] of Object.entries(JSON.parse(text)))
      {
        data.timestamp = timestamp;
        metadata[name] = data;
      }
      save_metadata();
    });
  });
}

function export_metadata()
{
  cleanup_metadata();
  var file = {};
  for (const [name, data] of Object.entries(metadata))
  {
    file[name] = {active: data.active, title: data.title, meta: data.meta}
  }
  window.webxdc.sendToChat({
      file: {plainText: JSON.stringify(file), name: "Traero.json"},
      text: translate("export_message")
  });
}

function update_list()
{
  for (const name in metadata)
  {
    if (!(name in objects))
    {
      if (metadata[name].active != null)
      {
        var obj = new Item(name, metadata[name].title, metadata[name].meta);
        objects[name] = obj;
        obj.Update();
      }
      else
      {
        delete metadata[name];
      }
    }
    else
    {
      if (metadata[name].active == true)
      {
        objects[name].toActive();
      }
      else if (metadata[name].active == false)
      {
        objects[name].toLast();
      }
      else
      {
        objects[name].remove();
        delete metadata[name];
      }
    }
  }
  update_search();
}
