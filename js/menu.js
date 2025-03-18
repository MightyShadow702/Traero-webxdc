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

  var title_adding = document.createElement("p");
  title_adding.innerHTML = translate("control_add");
  title_adding.classList.add("title");
  content.appendChild(title_adding);
  var title_deleting = document.createElement("p");
  title_deleting.classList.add("title");
  title_deleting.innerHTML = translate("control_delete");
  content.appendChild(title_deleting);


  var adding_img = document.createElement("img");
  adding_img.src = "assets/controls/adding.gif";
  adding_img.style.borderRadius = "25px";
  content.appendChild(adding_img);
  var remove_img = document.createElement("img");
  remove_img.src = "assets/controls/deleting.gif";
  remove_img.style.borderRadius = "25px";
  content.appendChild(remove_img);
}
