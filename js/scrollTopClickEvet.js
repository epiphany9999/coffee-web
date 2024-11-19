
const scrollTopBtns = document.querySelector(".scrollTopBtns");

if(scrollTopBtns){

  

  let initialTop = 200;
  window.addEventListener("scroll" , () => {

    let windowTopScrollY = document.documentElement.scrollTop || document.documentElement.pageYOffset;

     if(windowTopScrollY > initialTop){
      scrollTopBtns.classList.add("active");
     }
     else{
       scrollTopBtns.classList.remove("active");
     }
    
     initialTop = windowTopScrollY;

    
     
   });

   scrollTopBtns.addEventListener("click" , () => {

      window.scrollTo(0,0);

   })
}