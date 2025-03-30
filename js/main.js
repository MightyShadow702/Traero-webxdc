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
      "info": window.webxdc.selfName + " " + translate("update_message")
    },
    window.webxdc.selfName + " " + translate("update_message")
  );
}

function update_handler(data)
{
  var payload = data.payload;
  metadata = payload.metadata;
  update_list();
}

function onload()
{
  update_language();
  window.webxdc.setUpdateListener(update_handler);
}
