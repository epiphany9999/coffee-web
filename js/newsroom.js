// 공지사항 타이틀 시간차 스크롤
const pTags1 = document.querySelectorAll(
  ".newsroom_sec1 > h1, .newsroom_sec1 > p, .newsroom_sec2"
);

let observer1 = new IntersectionObserver(
  (entries1, observer1) => {
    entries1.forEach((entry1) => {
      if (entry1.isIntersecting) {
        const index1 = parseInt(entry1.target.dataset.index, 10);
        setTimeout(() => {
          entry1.target.classList.add("visible");
        }, index1 * 300); 
        observer1.unobserve(entry1.target);
      }
    });
  },
  {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  }
);

pTags1.forEach((pTag1) => observer1.observe(pTag1));


// 페이지네이션
// const pageCountEvet = () => {

//     const pageCountBtn = document.querySelectorAll(".pagenation_box_newsroom .pageCountBoxs p");
//     pageCountBtn.forEach((btn) => {
//          pageCountBtn[0].classList.add("active");
//          btn.addEventListener(("click") , () => {
//                pageCountBtn.forEach((otherBtn) => { otherBtn.classList.remove("active"); })
//                btn.classList.toggle("active");
//          })

//     })   
// }
// pageCountEvet();

function notice_page(page) {
    document.location.href = "?page="+page;
}