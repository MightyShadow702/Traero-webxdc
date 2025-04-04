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
  var about_dialog = new traero_popup(translate("about_title"), ["about_screen"]);
  var img = document.createElement("img");
  img.id = "appicon";
  img.src = "icon.png";
  about_dialog.add(img);
  var title = document.createElement("p");
  title.id = "apptitle";
  title.innerHTML = "Traero";
  about_dialog.add(title);
  var version_number = document.createElement("p");
  version_number.innerHTML = "Version: 0.7.1";
  about_dialog.add(version_number);
  var license_txt = document.createElement("p");
  license_txt.id = "license_title";
  license_txt.innerHTML = "License";
  about_dialog.add(license_txt);
  var license = document.createElement("iframe");
  license.id = "license_view"
  license.src = "LICENSE";
  about_dialog.add(license);
}

function show_languages()
{
  var languages_dialog = new traero_popup(translate("language_title"));
  function setLanguage(lang)
  {
    if (lang == null)
    {
        delete localStorage.selectedLanguage;
    }
    else
    {
      localStorage.selectedLanguage = lang;
    }
    update_language();
    languages_dialog.close();
  }
  languages_dialog.add_button(translate("bt_automatic") + " ("+translate("language_name")+")", () => setLanguage(null));
  for (var code in languages)
  {
    function lambda(lang_code, lang_name)
    {
      languages_dialog.add_button(lang_name, () => setLanguage(lang_code));
    }
    lambda(code, languages[code].language_name);
  }
}

function show_tutorial()
{
  window.location.replace("/tutorial.html");
}
