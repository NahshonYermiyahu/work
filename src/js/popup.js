// "use strict"

//#region // ! Раскрытие popup
function renderPopup(id) {
  return (location.href = id);
}
//#endregion

//#region // ! Выделение строки в popup
const items = document.getElementsByClassName("item");
for (let item of items) {
  item.addEventListener("click", () => {
    item.classList.toggle("selected");
  });
}
//#endregion

//#region // ! Активация кнопок popup6
const tabsBtns = document.getElementsByClassName("popup-edit__btn");
for (let btn of tabsBtns) {
  btn.addEventListener("click", () => {
    const btnIndex = Array.prototype.indexOf.call(
      btn.parentElement.children,
      btn
    );

    for (let b of tabsBtns) {
      b.classList.remove("popup-edit__btn-active");
    }

    for (let i of btn.parentElement.parentElement.children) {
      if (i.classList.contains("tab")) {
        i.classList.remove("tab-active");
      }
    }

    btn.parentElement.parentElement.children[1 + btnIndex].classList.toggle(
      "tab-active"
    );

    btn.classList.toggle("popup-edit__btn-active");
  });
}
//#endregion

//#region //! Включение режима редактировaния
const checkEdit = document.getElementById("eс__isactive-edit-btn");
const closeBtn = document
  .getElementById("popup6")
  .getElementsByClassName("popup__close")[0];

const tabs_view = [
  document.getElementById("tab-all-info__view"),
  document.getElementById("tab-staff__view"),
  document.getElementById("tab-docs__view"),
];
const tabs_edit = [
  document.getElementById("tab-all-info__edit"),
  document.getElementById("tab-staff__edit"),
  document.getElementById("tab-docs__edit"),
];

checkEdit.addEventListener("change", () => {
  toggleClassViewEdit();
});

closeBtn.addEventListener("click", () => {
  if (checkEdit.checked) {
    checkEdit.checked = !checkEdit.checked;
  }
  toggleClassViewEdit();
});

function toggleClassViewEdit() {
  if (checkEdit.checked) {
    for (let tab of tabs_edit) {
      if (!tab.classList.contains("tab-isactive")) {
        tab.classList.add("tab-isactive");
      }
    }
    for (let tab of tabs_view) {
      if (tab.classList.contains("tab-isactive")) {
        tab.classList.remove("tab-isactive");
      }
    }
  } else {
    for (let tab of tabs_view) {
      if (!tab.classList.contains("tab-isactive")) {
        tab.classList.add("tab-isactive");
      }
    }
    for (let tab of tabs_edit) {
      if (tab.classList.contains("tab-isactive")) {
        tab.classList.remove("tab-isactive");
      }
    }
  }
}
//#endregion

//#region //! Обработка селекта
const dropdownBtns = document.getElementsByClassName("dropdown__button");
// TODO Клик по кнопке, Открытие\Закрытие select
for (let btn of dropdownBtns) {
  const ddList = inList(btn);
  btn.addEventListener("click", () => {
    ddList.classList.toggle("dropdown__list--visible");
    btn.classList.toggle("dropdown__button--active");
  });
  document.addEventListener("click", (e) => {
    if (e.target !== btn) {
      btn.classList.remove("dropdown__button--active");
      ddList.classList.remove("dropdown__list--visible");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Tab" || e.key === "Escape") {
      btn.classList.remove("dropdown__button--active");
      ddList.classList.remove("dropdown__list--visible");
    }
  });
}

// TODO Выбор элемента списка, Запоминание выбранного значение, Закрытие дропдауна
function inList(btn) {
  let inputHidden;
  for (let input of btn.parentElement.children) {
    if (input.classList.contains("dropdown__input-hidden")) {
      inputHidden = input;
    }
  }
  for (let list of btn.parentElement.children) {
    if (list.classList.contains("dropdown__list")) {
      for (let listItem of list.children) {
        listItem.addEventListener("click", (e) => {
          e.stopPropagation();
          btn.innerText = listItem.innerText;
          btn.focus();
          inputHidden.value = listItem.dataset.value;
          list.classList.remove("dropdown__list--visible");
          btn.classList.remove("dropdown__button--active");
        });
      }
      return list;
    }
  }
}
//#endregion

//#region //! Добавить сотрудника
function addStaff() {
  document.getElementById("addStaff").classList.toggle("addStaffActive");
}
//#endregion
