//  내용 스크롤 이벤트

const pTags = document.querySelectorAll(
  ".contact_sec3"
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

pTags.forEach((pTag) => observer.observe(pTag));


// 스크롤 순서 이벤트
const pTags1 = document.querySelectorAll(
  ".contact_sec1 > h1, .contact_sec1 > p, .contact_sec2"
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
    threshold: 0.3,
  }
);

pTags1.forEach((pTag1) => observer1.observe(pTag1));

// 체크박스
document.querySelectorAll('.contact_sec2 ul li').forEach(function(li) {
    li.addEventListener('click', function(event) {
        if (event.target.type !== 'checkbox' && event.target.tagName !== 'LABEL') {
            const checkbox = li.querySelector('.contact_sec2_checkbox');

            checkbox.checked = !checkbox.checked;
            checkbox.dispatchEvent(new Event('change'));
        }
    });
});

document.querySelectorAll('.contact_sec2_checkbox').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        const li = this.closest('li');
        const textElements = li.querySelectorAll('.contact_sec2_check_title_name, .contact_sec2_check_title_sub, .contact_sec2_check_title_email');

        document.querySelectorAll('.contact_sec2_checkbox').forEach(function(other) {
            if (other !== checkbox) {
                other.checked = false;
                other.closest('li').classList.remove('active_bg');
                const otherTextElements = other.closest('li').querySelectorAll('.contact_sec2_check_title_name, .contact_sec2_check_title_sub, .contact_sec2_check_title_email');
                otherTextElements.forEach(element => element.classList.remove('active_text'));
            }
        });

        if (checkbox.checked) {
            li.classList.add('active_bg');
            textElements.forEach(element => element.classList.add('active_text'));
        } else {
            li.classList.remove('active_bg');
            textElements.forEach(element => element.classList.remove('active_text'));
        }
    });
});

// 체크박스 클릭시 섹션이동
const checkboxes2 = document.querySelectorAll(".contact_sec2_checkbox");

checkboxes2.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
     if (this.checked) { 
      const className = this.getAttribute("data-target");
      const targetSection = document.querySelector(`.${className}`);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });
});

// 셀렉트
const createPopCustomLicreatePopupAppResult = () => {
  const popSelectWrapItems = document.querySelectorAll(".sec3_email_SelectWrap");

  popSelectWrapItems.forEach((contentItem) => {
    const nowIssueSelectBox = contentItem.querySelector("select");
    if (!nowIssueSelectBox) return;

    const popCustomSelectBox = contentItem.querySelector(
      ".sec3_email_CustomSelectBox"
    );
    const popCustomSelectBtns = popCustomSelectBox.querySelector(
      ".sec3_email_CustomSelectBtns"
    );

    for (let i = 0; i < nowIssueSelectBox.length; i++) {
      const optionValue = nowIssueSelectBox.options[i].value;
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.classList.add("sec3_email_MoreSelectBtn");
      button.type = "button";
      button.textContent = optionValue;
      li.appendChild(button);
      popCustomSelectBtns.appendChild(li);
    }
  });
};
createPopCustomLicreatePopupAppResult();

const customSelectView = document.querySelectorAll(".sec3_email_CustomSelectView");

customSelectView.forEach((btn) => {
  btn.addEventListener("click", function () {
    btn.classList.toggle("active");
    if (btn.nextElementSibling) {
      btn.nextElementSibling.classList.toggle("active");
    }
  });
});

const PopupMoreSelectBtn = document.querySelectorAll(".sec3_email_MoreSelectBtn");

PopupMoreSelectBtn.forEach((moreBtn) => {
  moreBtn.addEventListener("click", function () {
    const moreBtnText = moreBtn.innerText;
    console.log(moreBtnText);
    const parentMoreBtn = moreBtn.closest(".sec3_email_CustomSelectBtns");
    const editViewBtn = parentMoreBtn.previousElementSibling;

    while (editViewBtn.firstChild) {
      editViewBtn.removeChild(editViewBtn.firstChild);
    }

    const textNode = document.createTextNode(moreBtnText);
    editViewBtn.appendChild(textNode);

    editViewBtn.classList.remove("active");
    parentMoreBtn.classList.remove("active");

    const nearByContent = moreBtn.closest(".sec3_email_SelectWrap");
    const nearBySelectBox = nearByContent.querySelector("select");
    nearBySelectBox.value = moreBtn.textContent;

    nearBySelectBox.dispatchEvent(new Event('change', { bubbles: true, cancelable: true }));

    console.log(`Selected value: ${nearBySelectBox.value}`);
  });
});

// 체크 안할시 회색버튼
const inputs = document.querySelectorAll('.contact_sec3_form input[type="text"], .contact_sec3_form input[type="tel"], .contact_sec3_form input[type="email"], .contact_sec3_form textarea');
const sec2Checkboxes = document.querySelectorAll('.contact_sec2_checkbox');
const sec3Checkbox = document.querySelector('.contact_sec3_checkbox');
const queryButton = document.querySelector('.contact_btn_wrap button');
const selectElement = document.querySelector('.contact_sec3_form select'); // select 요소 선택

function updateButtonState() {
    let allInputsFilled = true;
    let anySec2CheckboxChecked = Array.from(sec2Checkboxes).some(checkbox => checkbox.checked);
    let sec3CheckboxChecked = sec3Checkbox.checked;
    let isSelectValid = selectElement.value !== "선택하세요"; // select 요소의 값 검사

    // 모든 입력 필드가 채워져 있는지 확인
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            allInputsFilled = false;
        }
    });

    // 모든 필수 입력이 채워져 있고, sec2 체크박스 중 하나라도 선택되어 있으며, sec3 체크박스도 선택되어야 하며, select 요소의 값이 '선택하세요'가 아니어야 버튼 활성화
    let shouldEnableButton = allInputsFilled && anySec2CheckboxChecked && sec3CheckboxChecked && isSelectValid;

    queryButton.disabled = !shouldEnableButton;
    if (shouldEnableButton) {
        queryButton.style.backgroundColor = '#000000';
        queryButton.style.cursor = 'pointer';
    } else {
        queryButton.style.backgroundColor = '#7E7E7E';
        queryButton.style.cursor = 'default';
    }
}

// 모든 체크박스, 입력 필드, select 요소에 이벤트 리스너 추가
[...sec2Checkboxes, sec3Checkbox].forEach(checkbox => {
    checkbox.addEventListener('change', updateButtonState);
});
inputs.forEach(input => {
    input.addEventListener('input', updateButtonState);
});
selectElement.addEventListener('change', updateButtonState); // select 요소에 대한 변경도 감지

// 페이지 로드 시 버튼 상태 초기화
updateButtonState();
