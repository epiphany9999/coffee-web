const scrollTopBtnEvet = () => {
   
    let scrollTopCont = document.querySelector(".scrollTopBoxs");
    let scrollTophtmlFilePath = '../scrollTop.html'; // 삽입할 HTML 파일 경로
 
    if(scrollTopCont){
 
    let xhr = new XMLHttpRequest();
    xhr.open('GET', scrollTophtmlFilePath, true);
    xhr.onreadystatechange = function() {
 
    if (xhr.readyState == 4 && xhr.status == 200) {
 
       try{
             scrollTopCont.innerHTML = xhr.responseText;
             let scrollTopscripts =  scrollTopCont.getElementsByTagName('script');
 
             for (let i = 0; i < scrollTopscripts .length; i++) {
                   let scrollScript = document.createElement('script');
                   scrollScript.src = scrollTopscripts[i].src || ''; // src가 있는 경우
                   scrollScript.textContent = scrollTopscripts[i].textContent;
 
                   // 스크립트 로드 완료 후 실행
                   scrollScript.onload = () => { console.log(`스크롤 스크립트 ${i + 1} 로드 완료`);};
 
                   // 에러 핸들링
                   scrollScript.onerror = () => { console.error(`스크롤 스크립트 ${i + 1} 로드 실패`);};
                   
                   // document.body.appendChild(script).parentNode.removeChild(script);
                   document.body.appendChild(scrollScript); // 스크립트를 body에 추가하여 실행
             }
          }catch (error) {
             console.log('scrollTop 연결 오류:', error);
         }
      }
 
    };
 
    xhr.send();
    console.log('scrollTop작동');
 
   }
 
 }
 
 
 
 export { scrollTopBtnEvet }