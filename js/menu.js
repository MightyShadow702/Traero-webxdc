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
  var content = show_activity(translate("about_title"));
  content.classList.add("about_screen");
  var img = document.createElement("img");
  img.id = "appicon";
  img.src = "icon.png";
  content.appendChild(img);
  var title = document.createElement("p");
  title.id = "apptitle";
  title.innerHTML = "Traero";
  content.appendChild(title);
  var version_number = document.createElement("p");
  version_number.innerHTML = "Version: 0.7.0";
  content.appendChild(version_number);
  var license_txt = document.createElement("p");
  license_txt.id = "license_title";
  license_txt.innerHTML = "License";
  content.appendChild(license_txt);
  var license = document.createElement("iframe");
  license.id = "license_view"
  license.src = "LICENSE";
  content.appendChild(license);
}

function show_tutorial()
{
  window.location.replace("/tutorial.html");
}
