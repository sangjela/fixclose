// 自windowを閉じる
function windowCloseForce(){

  let ua = navigator.userAgent;
  console.log("UA = ", ua);

  if( ua.indexOf("Chrome") >= 0 ){
    console.log("go chrome end");
    console.log("window.self is ", window.self);
    console.log("window.top is ", window.top);
  }else{
    //ie case?
    console.log("go try close");
    console.log("window.self is ", window.self);
    console.log("window.top is ", window.top);
    open('about:blank', '_self').close(); //一度再表示してからClose
  }
}