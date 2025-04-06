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
      "info": translate("update_message", [window.webxdc.selfName])
    },
    translate("update_message", [window.webxdc.selfName])
  );
}

function update_handler(data)
{
  var payload = data.payload;
  metadata = payload.metadata;
  update_list();
}

function update_language()
{
  document.getElementById("buy_title").innerHTML = translate("buy");
  document.getElementById("last_title").innerHTML = translate("last");
  document.getElementById("new_item_input").placeholder = translate("search");

  document.getElementById("bt_about").innerHTML = translate("about_title");
  document.getElementById("bt_tutorial").innerHTML = translate("tutorial_title");
  document.getElementById("bt_language").innerHTML = translate("language_title");
  document.getElementById("bt_themes").innerHTML = translate("themes_title");
  document.getElementById("bt_export").innerHTML = translate("bt_export");
  document.getElementById("bt_import").innerHTML = translate("bt_import");
}

function onload()
{
  update_language();
  if (localStorage.selectedTheme != undefined)
  {
    changeTheme(themes[localStorage.selectedTheme]);
  }

  window.webxdc.setUpdateListener(update_handler);

  if (localStorage.firstSession == undefined)
  {
    localStorage.firstSession = false;
    traero_toast(translate("toast_fist_start"), 5000, true, ()=>window.location.replace("/tutorial.html"));
  }
}
