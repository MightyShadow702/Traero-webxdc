function traero_toast(msg, mstime, closeable=false, button_onclick=undefined)
{
  var toast = document.createElement("div");
  toast.id = "toast";
  var timer_ui = document.createElement("div");
  timer_ui.id = "timer_bg";
  timer_ui.style.width = "0px";
  toast.appendChild(timer_ui);
  var text = document.createElement("p");
  text.id = "message";
  text.innerHTML = msg;
  toast.appendChild(text);
  if (closeable)
  {
    var bt_close = document.createElement("button");
    bt_close.innerHTML = "X";
    bt_close.id = "bt_close";
    toast.appendChild(bt_close);
  }

  var current_time = 0;
  var timer_updater = setInterval(function(){
    current_time += 10;
    timer_ui.style.width = ((current_time/mstime) * 100) + "%";
  }, 10);
  document.body.appendChild(toast);
  var id = setInterval(function(){
    clearInterval(id);
    clearInterval(timer_updater);
    toast.remove();
  }, mstime+100);
  text.onclick = function()
  {
    clearInterval(id);
    clearInterval(timer_updater);
    toast.remove();
    if (button_onclick != undefined)
    {
      button_onclick();
    }
  }
  if (closeable)
  {
    bt_close.onclick = function()
    {
      clearInterval(id);
      clearInterval(timer_updater);
      toast.remove();
    }
  }
}
