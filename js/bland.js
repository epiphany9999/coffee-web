// 섹션1 순차적인 애니메이션

const pTags1 = document.querySelectorAll(
  ".bland_sec1_title_1, .bland_sec1_title_2, .bland_sec1_main > img, .bland_sec1_contents"
);

// 최대 data-index 값을 찾습니다.
const maxIndex = Array.from(pTags1).reduce((max, el) => {
  const currentIndex = parseInt(el.dataset.index, 10);
  return currentIndex > max ? currentIndex : max;
}, 0);

let observer1 = new IntersectionObserver(
  (entries1, observer1) => {
    entries1.forEach((entry1) => {
      if (entry1.isIntersecting) {
        const dataIndex = parseInt(entry1.target.dataset.index, 10);
        const isLastElement = dataIndex === maxIndex;

        if (window.innerWidth <= 768 && entry1.target.classList.contains('bland_sec1_contents')) {
          entry1.target.classList.add("visible");
        } else {
          const delay = isLastElement ? 900 : dataIndex * 300;
          setTimeout(() => {
            entry1.target.classList.add("visible");
          }, delay);
        }

        observer1.unobserve(entry1.target);
      }
    });
  },
  {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  }
);

// 모든 요소를 관찰
pTags1.forEach((pTag1) => observer1.observe(pTag1));

//  내용 스크롤 이벤트

const pTags = document.querySelectorAll(
  ".bland_sec2_title, .bland_sec2_img_wrap, .bland_sec3_slide_wrap, .bland_sec3_contents_wrap, .bland_sec4_title, .bland_sec4_total_mo > li,.bland_sec5_title , .bland_sec5_total, .bland_sec5_total_mo > li , .bland_sec6_slide_wrap, .bland_sec6_contents "
);

let observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 요소가 뷰포트에 진입했을 때
        entry.target.classList.add("visible");
        // 옵저버 종료 (한 번만 실행되게)
        observer.unobserve(entry.target);
      }
    });
  },
  {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  }
);

// 모든 요소를 관찰
pTags.forEach((pTag) => observer.observe(pTag));

// sec2 롤링 슬라이드 부분

const roller = document.querySelector(".bland_sec3 .rolling-list");
roller.classList.add("roller1");

// 복제본 생성 및 설정
const clone = roller.cloneNode(true);
clone.classList.remove("roller1");
clone.classList.add("roller2");
const slideWrapBox = document.querySelector(".bland_sec3_slide_wrap_box");
slideWrapBox.appendChild(clone);

// sec4 순차적으로 나오게
const container = document.querySelector(".bland_sec4_total");
const elements = container.querySelectorAll("[data-index]");

let observer2 = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        elements.forEach((element, index) => {
          setTimeout(() => {
            element.classList.add("visible");
          }, index * 300);
        });
        observer.unobserve(entry.target);
      }
    });
  },
  {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  }
);

observer2.observe(container);

// sec5 순차적으로 나오게
const container2 = document.querySelector(".bland_sec5_total");
const elements2 = container2.querySelectorAll("[data-index]");

let observer3 = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        elements2.forEach((element, index) => {
          setTimeout(() => {
            element.classList.add("visible");
          }, index * 300);
        });
        observer.unobserve(entry.target);
      }
    });
  },
  {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  }
);

observer3.observe(container2);

// sec6 롤링 슬라이드 부분

const roller2 = document.querySelector(".bland_sec6 .rolling-list");
roller2.classList.add("roller3");

// 복제본 생성 및 설정
const clone2 = roller2.cloneNode(true);
clone2.classList.remove("roller3");
clone2.classList.add("roller4");
const slideWrapBox2 = document.querySelector(".bland_sec6_slide_wrap_box");
slideWrapBox2.appendChild(clone2);

