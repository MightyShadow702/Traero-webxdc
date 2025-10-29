class traero_popup
{
  add(object)
  {
    this.content.appendChild(object);
  }
  add_button(name, func)
  {
    var bt = document.createElement("button");
    bt.innerHTML = name;
    if (func)
    {
      bt.onclick = function(event) {func(bt, event);};
    }
    this.add(bt);
  }
  close()
  {
    this.dom.remove();
  }
  constructor(title, classes=[])
  {
    var dom = document.createElement("div");
    this.dom = dom;
    dom.id = "popup";
    dom.setAttribute("onkeyup", "popup_onkeyup(event)");
    var bt_close = document.createElement("button");
    bt_close.id = "bt_close";
    bt_close.innerHTML = "X";
    bt_close.onclick = function()
    {
      dom.remove();
    }
    dom.appendChild(bt_close);
    if (title)
    {
      var txt_title = document.createElement("p");
      this._title = txt_title;
      txt_title.id = "title";
      txt_title.setAttribute("role", "heading");
      txt_title.setAttribute("aria-level", 2);
      txt_title.innerHTML = title;
      dom.appendChild(txt_title);
    }
    var content = document.createElement("div");
    this.content = content;
    content.id = "content";
    content.setAttribute("role", "dialog");
    content.setAttribute("aria-labelledby", "title");
    content.setAttribute("tabindex", -1);
    dom.appendChild(content);
    for (var i in classes)
    {
      content.classList.add(classes[i]);
    }
    document.body.appendChild(dom);
    content.focus();
    content.click();
  }
}


function show_popup(title=undefined)
{
  var frame = document.createElement("div");
  frame.id = "popup";
  frame.setAttribute("onkeyup", "popup_onkeyup(event)");
  var bt_close = document.createElement("button");
  bt_close.id = "bt_close";
  bt_close.innerHTML = "X";
  bt_close.onclick = function()
  {
    frame.remove();
  }
  frame.appendChild(bt_close);
  if (title)
  {
    var txt_title = document.createElement("p");
    txt_title.id = "title";
    txt_title.setAttribute("role", "heading");
    txt_title.setAttribute("aria-level", 2);
    txt_title.innerHTML = title;
    frame.appendChild(txt_title);
  }
  var content = document.createElement("div");
  content.id = "content";
  content.setAttribute("role", "dialog");
  content.setAttribute("tabindex", -1);
  content.setAttribute("aria-labelledby", "title");
  frame.appendChild(content);
  document.body.appendChild(frame);
  return content;
}

function popup_onkeyup(event)
{
  if (event.key == "Escape")
  {
    document.getElementById("bt_close").click();
    document.getElementById("new_item_input").focus();
  }
}
