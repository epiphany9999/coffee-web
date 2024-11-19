import { manageHeaderEvent } from "./header.js";
import { manageFooterEvent } from "./footer.js";
import { scrollTopBtnEvet } from "./scrollTop.js";


window.addEventListener("load", () => {
  //header함수 실행
  manageHeaderEvent();
  //footer함수 실행
  manageFooterEvent();
  scrollTopBtnEvet(); //스크롤탑이벤트 실행

  window.scrollTo(0,0);

});


