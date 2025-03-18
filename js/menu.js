function toggle_menu()
{
  var obj = document.getElementById("menucontent");
  if (!document.getElementById("menu").classList.contains("menu_open"))
  {
    document.getElementById("menu").classList.add("menu_open");
    document.getElementById("menu").classList.remove("menu_close");
  }
  else
  {
    document.getElementById("menu").classList.add("menu_close");
    document.getElementById("menu").classList.remove("menu_open");
  }
}

function show_activity(title=undefined)
{
  var frame = document.createElement("div");
  frame.id = "activity";
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

function show_about()
{
  show_activity(translate("about_title"));
}

function show_controls()
{
  var content = show_activity(translate("controls_title"));
  content.classList.add("control_viewer");

  function add_image(title, src)
  {
    var element = document.createElement("div");
    element.classList.add("image");
    var title_txt = document.createElement("p");
    title_txt.innerHTML = title;
    element.appendChild(title_txt);
    var img = document.createElement("img");
    img.src = src;
    element.appendChild(img);
    content.appendChild(element);
  }

  add_image(translate("control_add"), "assets/controls/adding.gif");
  add_image(translate("control_delete"), "assets/controls/deleting.gif");
  content.appendChild(remove_img);
}
