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

function show_about()
{
  var content = show_popup(translate("about_title"));
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
  version_number.innerHTML = "Version: 0.7.1";
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
