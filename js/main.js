// sec1 슬라이드
const swiper = new Swiper(".main_sec1_box", {
    spaceBetween: 30,
    effect: "fade",
    centeredSlides: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".pagination_box",
      clickable: true,
      renderBullet: function (index, className) {
        return `
                  <div class="bullet-container" data-index="${index}">
                      <span class="red_dot"></span>
                      <span class="bullet-text">${
                        [
                          "인사말",
                          "슬로건",
                          "솔루션",
                          "친환경",
                        ][index]
                      }</span>
                      <span class="${className}" id="bullet-${index}"></span>
                  </div>
              `;
      },
    },
    on: {
      init: function () {
        const paginationContainer = document.querySelector(".pagination_box");
        paginationContainer.addEventListener("click", function (e) {
          let target = e.target;
          while (target !== paginationContainer) {
            if (target.matches(".bullet-container")) {
              const index = parseInt(target.getAttribute("data-index"), 10);
              swiper.slideTo(index);
              return;
            }
            target = target.parentNode;
          }
        });
  
        setActiveClass1(this.activeIndex);
        this.on("slideChange", function () {
          setActiveClass1(this.activeIndex);
        });
      },
    },
  });
  
  function setActiveClass1(activeIndex) {
    document.querySelectorAll(".bullet-container").forEach((container, index) => {
      if (index === activeIndex) {
        container.classList.add("active");
      } else {
        container.classList.remove("active");
      }
    });
  }
  
  // sec2 슬라이드 부분
  
  const roller = document.querySelector(".main_sec2 .rolling-list");
  roller.classList.add("roller1");
  
  // 복제본 생성 및 설정
  const clone = roller.cloneNode(true);
  clone.classList.remove("roller1");
  clone.classList.add("roller2");
  const slideWrapBox = document.querySelector(".sec2_slide_wrap_box");
  slideWrapBox.appendChild(clone);
  
  //  내용 스크롤 이벤트
  
  const pTags = document.querySelectorAll(
    ".sec2_slide_wrap, .sec2_contents_wrap, .sec2_contents_content, .sec2_contents_wrap h2, .main_sec3, .sec4_phrase_wrap, .sec4_business, .sec4_business .last, .sec5_phrase, .main_sec5_wrap_newsroom, .main_sec6"
  );
  
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  };
  
  function isMobile() {
    return window.innerWidth <= 1024; 
  }
  
  // 일반 요소에 대한 옵저버
  const generalObserver = new IntersectionObserver(observerCallback, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3
  });
  
  // main_sec3에 대한 옵저버
  const mainSec3Observer = new IntersectionObserver(observerCallback, {
    root: null,
    rootMargin: "0px",
    threshold: isMobile() ? 0.1 : 0.3 
  });
  
  // 각 요소를 적절한 옵저버에 연결
  pTags.forEach(pTag => {
    if (pTag.classList.contains('main_sec3')) {
      mainSec3Observer.observe(pTag);
    } else {
      generalObserver.observe(pTag);
    }
  });
  
  // sec3 swiper
  const swiper2 = new Swiper(".main_sec3_box", {
    spaceBetween: 30,
    effect: "fade",
    centeredSlides: true,
    pagination: {
      el: ".pagination_box2",
      clickable: true,
      // autoplay: {
      //     delay: 2500,
      // },
      renderBullet: function (index) {
        return `
                  <div class="sec3_bullet_container" data-index="${index}">
                      <span class="sec3_red_dot"></span>
                      <p class="sec3_bullet_box">
                        <span class="sec3_bullet_title">${
                          [
                            "화이트 초콜릿 모카",
                            "아몬드 카푸치노",
                            "페퍼민트 모카",
                          ][index]
                        }</span>
                        <span class="sec3_bullet_line"></span>
                        <span class="sec3_bullet_content">
                        ${
                          [
                            "단계 5재료<br> 크리스마스 음료",
                            "5단계 4재료<br> 식물성",
                            '5단계 5재료<br> 크리스마스 음료',
                          ][index]
                        }
                        </span>
                      </p>
                  </div>
              `;
      },
    },
    on: {
      init: function () {
        const paginationContainer = document.querySelector(".pagination_box2");
        paginationContainer.addEventListener("click", function (e) {
          let target = e.target;
          while (target !== paginationContainer) {
            if (target.matches(".sec3_bullet_container")) {
              const index = parseInt(target.getAttribute("data-index"), 10);
              swiper2.slideTo(index);
              return;
            }
            target = target.parentNode;
          }
        });
  
        setActiveClass2(this.activeIndex);
        this.on("slideChange", function () {
          setActiveClass2(this.activeIndex);
        });
      },
    },
  });
  function setActiveClass2(activeIndex) {
    const bullets = document.querySelectorAll(".sec3_bullet_container");
    bullets.forEach((bullet, index) => {
      if (index === activeIndex) {
        bullet.classList.add("active");
      } else {
        bullet.classList.remove("active");
      }
    });
  }
  
  // 메인 4번째 섹션 스크롤 이벤트
  gsap.registerPlugin(ScrollTrigger);
  
  document.querySelectorAll('[data-gsap="fade-in-up"]').forEach((element) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 70%",
        end: "top center",
        toggleActions: "play none none none",
        markers: false,
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power1.out",
    });
  });
  
  document.querySelectorAll('[data-gsap="color-change"]').forEach((element) => {
    element.classList.add("default-color");
  
    ScrollTrigger.create({
      trigger: element,
      start: "top 50%",
      end: "bottom 50%",
      onEnter: () => {
        element.classList.remove("light-color");
        element.classList.add("default-color");
      },
      onLeave: () => {
        element.classList.remove("default-color");
        element.classList.add("light-color");
      },
      onEnterBack: () => {
        element.classList.remove("light-color");
        element.classList.add("default-color");
      },
      onLeaveBack: () => {
        element.classList.remove("default-color");
        element.classList.add("light-color");
      },
      markers: false,
    });
  });
  
  // 메인 5번째 섹션 스와이퍼
  const swiper4 = new Swiper(".main_sec5_box", {
    spaceBetween: 30,
    // loop: true,
    slidesPerView: 2.4,
    navigation: {
      nextEl: ".next2",
      prevEl: ".prev2",
    },
    breakpoints: {
      300: {
        slidesPerView: 1.1,
        spaceBetween: 12,
      },
      400: {
        slidesPerView: 1.4,
        spaceBetween: 12,
      },
      550: {
        slidesPerView: 1.9,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 2.4,
        spaceBetween: 30,
      },
      2000: {
        slidesPerView: 3.1,
        spaceBetween: 30,
      },
    },
  });
  
  const swiper5 = new Swiper(".main_sec5_box2", {
    spaceBetween: 30,
    // loop: true,
    slidesPerView: 2.4,
    navigation: {
      nextEl: ".next3",
      prevEl: ".prev3",
    },
    breakpoints: {
      300: {
        slidesPerView: 1.1,
        spaceBetween: 12,
      },
      400: {
        slidesPerView: 1.4,
        spaceBetween: 12,
      },
      550: {
        slidesPerView: 1.9,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 2.4,
        spaceBetween: 30,
      },
      2000: {
        slidesPerView: 3.1,
        spaceBetween: 30,
      },
    },
  });
  
  const btnNewsroom = document.querySelector(".btn_newsroom");
  const btnNotice = document.querySelector(".btn_notice");
  const sec5Newsroom = document.querySelector(".sec5_newsroom");
  const sec5Notice = document.querySelector(".sec5_notice");
  const btnswrap1 = document.querySelector(".sec5_btn_wrap");
  const btnswrap2 = document.querySelector(".sec5_btn_wrap2");
  
  btnNewsroom.addEventListener("click", function () {
    sec5Newsroom.classList.add("on");
    sec5Notice.classList.remove("on");
    btnNewsroom.classList.add("on");
    btnNotice.classList.remove("on");
    btnswrap1.classList.add("on");
    btnswrap2.classList.remove("on");
  });
  
  btnNotice.addEventListener("click", function () {
    sec5Notice.classList.add("on");
    sec5Newsroom.classList.remove("on");
    btnNotice.classList.add("on");
    btnNewsroom.classList.remove("on");
    btnswrap1.classList.remove("on");
    btnswrap2.classList.add("on");
  });
  
  function page_move(url) {
    document.location.href = url;
  }
  
  














// 셀렉트

