const scrollEvent = () => {
    const allSection = document.querySelectorAll('.aboutSkinMedWrap section');


    window.addEventListener('scroll', function(){
        const originScrT = document.querySelector('html').scrollTop;
        const scrT = Math.floor(originScrT);

        // 각각 section의 top값
        allSection.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrT > sectionTop - 600) {
                section.classList.add('sectionAni');

                if (scrT > sectionTop + sectionHeight) {
                    section.classList.remove('sectionAni');
                }
            } else if (scrT < sectionTop - 600) {
                section.classList.remove('sectionAni');
            }
        });


    });
}
scrollEvent();


const section02LineEvent = () => {
    const circleBox = document.querySelector('.aboutSkinMedWrap .section02 .circleBox');


    if (window.innerWidth <=1024) {
        // 두 원을 감싸는 circlebox의 width
        var circleBoxWidth = circleBox.offsetWidth;

        const leftDottedline = document.querySelector('.aboutSkinMedWrap .section02 .dottedLinebox .leftDottedline');
        const rightDottedline = document.querySelector('.aboutSkinMedWrap .section02 .dottedLinebox .rightDottedline');
        leftDottedline.style.width = `calc((100vw - ${circleBoxWidth}px) / 2)`
        rightDottedline.style.width = `calc((100vw - ${circleBoxWidth}px) / 2)`

    }
        // svg 변경

        const dottedLineboxSvg = document.querySelectorAll('.aboutSkinMedWrap .section02 .dottedLinebox svg');

        dottedLineboxSvg.forEach((dottedLineboxSvg) => {
            // dottedLineboxSvg 부모들
            const dottedLineboxSvgParentContainer = dottedLineboxSvg.parentElement;

            // 각각 container들의 width와 height
            const containerWidth = dottedLineboxSvgParentContainer.offsetWidth;
            const containerHeight = dottedLineboxSvgParentContainer.offsetHeight;

            // SVG의 viewBox 업데이트
            // dottedLineboxSvg.setAttribute("viewBox", `0 0 ${containerWidth} ${containerHeight}`);

            // line 요소 업데이트
            const line = dottedLineboxSvg.querySelector('line');
            if (dottedLineboxSvgParentContainer.classList.contains('leftDottedline') || dottedLineboxSvgParentContainer.classList.contains('rightDottedline')) {
                line.setAttribute("x1", -100);
                line.setAttribute("y1", 10);
                line.setAttribute("x2", containerWidth+100);
                line.setAttribute("y2", 10);
            } else if (dottedLineboxSvgParentContainer.classList.contains('bottomDottedline')) {
                line.setAttribute("x1", 8.5);
                line.setAttribute("y1", 0);
                line.setAttribute("x2", 8.5);
                line.setAttribute("y2", containerHeight - 10);

                const circles = dottedLineboxSvg.querySelectorAll('circle');
                const circle01 = circles[0];
                circle01.setAttribute("cy", containerHeight - 10);
            }
            
            dottedLineboxSvg.setAttribute("viewBox", `0 0 ${containerWidth} ${containerHeight}`);
        });

};

section02LineEvent();

window.addEventListener('resize', section02LineEvent);

const bottomDottedEvent = () => {
    // section02
    const section02 = document.querySelector('.aboutSkinMedWrap .section02');
    const section02Height = section02.offsetHeight;
    const skinMedCircle = document.querySelector('.aboutSkinMedWrap .section02 .skinMedCircle')
    const skinMedCircleHeight = skinMedCircle.offsetHeight;
    const skinMedCircleTop = skinMedCircle.offsetTop;
    const skinMedCircleBottom = (skinMedCircleHeight/2)+ skinMedCircleTop;
    // section03의 text
    const section03PointText = document.querySelector('.aboutSkinMedWrap .section03 .pointText');
    const section03PointTextTop = section03PointText.offsetTop;
    const circleBox = document.querySelector('.aboutSkinMedWrap .section02 .circleBox');
    const circleBoxHeight = circleBox.offsetHeight;

    const dottedLinebox = document.querySelector('.aboutSkinMedWrap .section02 .dottedLinebox')
    const dottedLineboxHeight = dottedLinebox.offsetHeight;
    const dottedLineboxTop = dottedLinebox.offsetTop;
    const dottedLineboxbottom = dottedLineboxTop + dottedLineboxHeight;
    const bottomDottedline = document.querySelector('.aboutSkinMedWrap .section02 .dottedLinebox .bottomDottedline');

    
    // bottomDottedline 높이구하기
    const section02BottomEmpty = section02Height - skinMedCircleBottom; 
    const DottedBottomHeight = section02BottomEmpty + section03PointTextTop;

    if(window.innerWidth <= 1024) {
        // bottomDottedline의 top값 구하기
        bottomDottedline.style.top = `${circleBoxHeight / 4}px`;
        bottomDottedline.style.height = '102px';
    } else {
        bottomDottedline.style.top = `${skinMedCircleBottom - dottedLineboxbottom}px`;
        bottomDottedline.style.height = DottedBottomHeight +'px';
    }
        
}
bottomDottedEvent();

window.addEventListener('resize', bottomDottedEvent);

// section05 textbox 스크롤 감지 이벤트
const scrollingEvent = () => {
    const hoverTextbox = document.querySelectorAll('.aboutSkinMedWrap .section05 .contentsCard .hoverTextbox');

    hoverTextbox.forEach((textbox) => {
        const textboxHeight = textbox.offsetHeight;

        // 전체 초기화
        textbox.classList.remove('scrollingY');

        //  만약에 style로 지정한 max-height보다 가지고 있는 height이 더 크다면
        if (105 < textboxHeight) {
            textbox.classList.add('scrollingY');
        } else {
            textbox.classList.remove('scrollingY');
        }
    })
}
scrollingEvent();


/* swiper 이벤트 */

const swiperTitles = {
     
      swiperBigTities : ["피부염의 억제 또는 개선용 조성물 특허증", "펩타이드 한국 특허증", "펩타이드 미국 특허증", "펩타이드 일본 특허증", "펩타이드 중국 특허증", "펩타이드 한국 특허증" , "펩타이드 러시아 특허증", "펩타이드 일본 특허증" , "펩타이드 한국 특허증",
        "펩타이드 한국 특허증", "펩타이드 한국 특허증", "DDS 한국 특허증", "DDS 미국 특허증", "DDS 유럽 특허증" , "DDS 일본 특허증", "DDS 중국 특허증", "DDS 한국 특허증", "DDS 한국 특허증", "DDS 러시아 특허증" , "DDS 인도 특허증" , "DDS 일본 특허증",
        "DDS 중국 특허증", "DDS 한국 특허증" , "DDS 한국 특허증" , "기업부설연구소 인정서" , "벤처기업확인서" , "의료기기 제조 및 품질관리 기준 적합인정서" , "의료기기 제조업 허가증" , "스킨메드 중소기업 확인서", "화장품 제조업 등록필증" , "화장품 제조판매업 등록필증",
        "화장품 책임판매업 등록필증" , "스킨메드 ISO 9001 인증서(국문)" , "스킨메드 ISO 22716 인증서(국문)"
      ],

      swiperSubContents : ["피지 과다분비 또는 지루성피부염 억제 또는 개선용 조성물 특허증" , "아세틸콜린수용체 결합 펩타이드 한국 특허증" , "아세틸콜린수용체 결합 펩타이드 미국 특허증", "아세틸콜린수용체 결합 펩타이드 일본 특허증" , "아세틸콜린수용체 결합 펩타이드 중국 특허증",
        "아세틸콜린수용체 결합 펩타이드 한국 특허증", "아세틸콜린수용체 저해 펩타이드 및 이의 용도 러시아 특허증", "아세틸콜린수용체 저해 펩타이드 및 이의 용도 일본 특허증", "아세틸콜린수용체 저해 펩타이드 및 이의 용도 한국 특허증", "아세틸콜린수용체 저해 펩타이드 및 이의 용도 한국 특허증",
        "아세틸콜린수용체 저해 펩타이드 및 이의 용도 한국 특허증", "키토산-플루로닉 복합체 및 이를 포함하는 나노운반체 한국 특허증", "키토산-플루로닉 복합체 및 이를 포함하는 나노운반체 미국 특허증", "키토산-플루로닉 복합체 및 이를 포함하는 나노운반체 유럽 특허증", "키토산-플루로닉 복합체 및 이를 포함하는 나노운반체 일본 특허증",
        "키토산-플루로닉 복합체 및 이를 포함하는 나노운반체 중국 특허증", "키토산을 유효성분으로 포함하는 피부상태 개선용 조성물 및 이의 제조방법 한국 특허증", "키토산으로 코팅된 나노캡슐 및 이의 용도 한국 특허증", "키토산으로 코팅된 나노캡슐 및 이의 용도 러시아 특허증", "키토산으로 코팅된 나노캡슐 및 이의 용도 인도 특허증",
        "키토산으로 코팅된 나노캡슐 및 이의 용도 일본 특허증", "키토산으로 코팅된 나노캡슐 및 이의 용도 중국 특허증", "키토산으로 코팅된 나노캡슐 및 이의 용도 한국 특허증", "레티놀 또는 레티놀 유도체를 포함하는 키토산이 코팅된 나노캡슐 및 이의 용도 한국 특허증", "기초연구 진흥 및 기술개발자원에 관한 법률에 따라 기업부설 연구소로 인정",
        "벤처기업육성에 관한 특별조치법에 의거해 벤처기업임을 인정", "의료기기 제조 및 품질관리기준에 적합함을 인정", "의료기기법에 따라 제조업을 허가", "중소기업기본법 제2조에 의해 중소기업임을 확인", "화장품법 제 3조에 따라 화장품 제조업을 증명", "화장품법 제 3조에 따라 화장품 제조판매업을 증명", 
        "화장품법 제 3조에 따라 화장품 책임판매업을 증명", "피부 임상시험 및 효능평가 서비스, 연구개발 기술지원을 인증", "기초화장품 (토너, 로션, 크림, 에센스, 클리너, 워시)의 생산을 인증"


      ],

      swiperBackgroundImage : ["aboutCertification01.png", "aboutCertification02.png" ,"aboutCertification03.png", "aboutCertification04.png", "aboutCertification05.png","aboutCertification06.png","aboutCertification07.png","aboutCertification08.png",
        "aboutCertification09.png","aboutCertification10.png","aboutCertification11.png","aboutCertification12.png","aboutCertification13.png","aboutCertification14.png","aboutCertification15.png","aboutCertification16.png","aboutCertification17.png",
        "aboutCertification18.png","aboutCertification19.png","aboutCertification20.png","aboutCertification21.png","aboutCertification22.png","aboutCertification23.png","aboutCertification24.png","aboutCertification25.png","aboutCertification26.png",
        "aboutCertification27.png","aboutCertification28.png","aboutCertification29.png","aboutCertification30.png","aboutCertification31.png","aboutCertification32.png","aboutCertification33.png","aboutCertification34.png"]
}


const swiperRollingEvet = () => {

     const swiperWrappers = document.querySelector(".pcAboutSwiper .swiper-wrapper");
     let swiperContentsBoxs = ``;
     
     swiperTitles.swiperBigTities.forEach((list, index) => {

          if(swiperTitles.swiperBigTities){
          
            swiperContentsBoxs += ` <div class="swiper-slide pcAboutSwiperSlides0${index+1}" style="background-image: url(../asset/images/about/certifications/${swiperTitles.swiperBackgroundImage[index]});">
                    <div class="aboutSwiperCertification">
                        <h3>${list}</h3>
                        <p>${swiperTitles.swiperSubContents[index]}</p>
                    </div>
            </div>`
          }
     })

     swiperWrappers.innerHTML = swiperContentsBoxs;


}

swiperRollingEvet();



/* swiper 마우스 이벤트 */

const swiperMouseEvet = () => {
    
    const aboutSwiperSlides = document.querySelectorAll(".pcAboutSwiper .swiper-slide .aboutSwiperCertification");
    const windowInnerWidth = window.innerWidth;

    //pc버전일때 이벤트
    const aboutMouseEvet = () => {
        aboutSwiperSlides.forEach((content) => {
            content.addEventListener("mouseover" , () => {
                content.classList.add("active");
            });

            content.addEventListener("mouseout" , () => {
                content.classList.remove("active");
            })

       });

      console.log('mouseEvet');
    }

    //모바일버전일때 이벤트
    const aboutTouchEvet = () => {

        aboutSwiperSlides.forEach((content) => {

            content.addEventListener("touchstart" , () => {
                content.classList.add("active");
            });
            content.addEventListener("touchend" , () => {
                content.classList.remove("active");
            })
       });

      console.log('touchEvet');

    }

    if(aboutSwiperSlides){

         if(windowInnerWidth <= 768){
             return aboutTouchEvet();
         }else{
            return aboutMouseEvet();
         }
        //  if(windowInnerWidth > 768){

        //      return aboutMouseEvet();
        //  }
         
    }
}
swiperMouseEvet();


window.addEventListener("resize" , () => {swiperMouseEvet();});
