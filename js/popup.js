class traero_popup
{
  add(object)
  {
    this.dom.appendChild(object);
  }
  constructor(title)
  {
    var dom = document.createElement("div");
    this.dom = dom;
    dom.id = "popup";
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
      txt_title.id = "title";
      txt_title.innerHTML = title;
      dom.appendChild(txt_title);
    }
    var content = document.createElement("div");
    content.id = "content";
    dom.appendChild(content);
    document.body.appendChild(dom);
  }
}
function show_popup(title=undefined)
{
  var frame = document.createElement("div");
  frame.id = "popup";
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
    txt_title.innerHTML = title;
    frame.appendChild(txt_title);
  }
  var content = document.createElement("div");
  content.id = "content";
  frame.appendChild(content);
  document.body.appendChild(frame);
  return content;
}
