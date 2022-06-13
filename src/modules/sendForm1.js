const sendForm1 = () => {
  const form = document.querySelector("form");
  const inputs = form.querySelectorAll("input[type='text']");

  const inputName = form.querySelector("input[name='fio']");
  const inputTel = form.querySelector("input[name='tel']");

  const regexpText = /[^а-яА-я- ]/;
  const regexpTel = /[^\d\+\(\)\-\ ]/;

  let nameVal;
  let telVal;

  window.addEventListener("DOMContentLoaded", function () {
    [].forEach.call(document.querySelectorAll(".tel"), function (input) {
      var keyCode;
      function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function (a) {
            return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
          });
        i = new_value.indexOf("_");
        if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i);
        }
        var reg = matrix
          .substr(0, this.value.length)
          .replace(/_+/g, function (a) {
            return "\\d{1," + a.length + "}";
          })
          .replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (
          !reg.test(this.value) ||
          this.value.length < 5 ||
          (keyCode > 47 && keyCode < 58)
        )
          this.value = new_value;
        if (event.type == "blur" && this.value.length < 5) this.value = "";
      }

      input.addEventListener("input", mask, false);
      input.addEventListener("focus", mask, false);
      input.addEventListener("blur", mask, false);
      input.addEventListener("keydown", mask, false);
    });
  });

  const message = {
    loading: "Зашрузка...",
    success: "Спасибо! С вами свяжутся!",
    failure: "Что-то пошло не так...",
  };

  const validateName = (name) => {
    let reg = /^([А-Яа-я]{1}[А-Яа-я ]{1,})$/;
    return reg.test(String(name));
  };

  const validateTel = (tel) => {
    let reg = /[\d\+\-\(\)\ ]{16,}/;
    return reg.test(String(tel));
  };

  const clearInputs = () => {
    inputs.forEach((elem) => {
      elem.value = "";
    });
  };

  const postData = async (url, data) => {
    document.querySelector(".status").textContent = message.loading;

    let res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await res.json();
  };

  inputName.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(regexpText, "");
    nameVal = e.target.value;

    if (e.target.classList.contains("error") && validateName(e.target.value)) {
      e.target.classList.remove("error");
    }
  });

  inputTel.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(regexpTel, "");
    telVal = e.target.value;

    if (e.target.classList.contains("error") && validateTel(e.target.value)) {
      e.target.classList.remove("error");
    }
  });

  inputName.addEventListener("invalid", (e) => {
    e.preventDefault();
    e.target.classList.add("error");
  });

  inputTel.addEventListener("invalid", (e) => {
    e.preventDefault();
    e.target.classList.add("error");
  });

  try {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!validateName(nameVal)) {
        inputName.classList.add("error");
      }

      if (!validateTel(telVal)) {
        inputTel.classList.add("error");
      }

      const statusMess = document.createElement("div");
      statusMess.classList.add("status");
      form.append(statusMess);

      const formData = new FormData(form);
      const formBody = {};

      formData.forEach((val, key) => {
        formBody[key] = val;
      });

      if (
        inputName.classList.contains("error") ||
        inputTel.classList.contains("error")
      ) {
        statusMess.textContent = message.failure;
        setTimeout(() => {
          statusMess.remove();
        }, 5000);
      } else {
        postData("https://jsonplaceholder.typicode.com/posts", formBody)
          .then((res) => {
            statusMess.textContent = message.success;
          })
          .catch((error) => {
            statusMess.textContent = message.failure;
          })
          .finally(() => {
            clearInputs();
            setTimeout(() => {
              statusMess.remove();
            }, 5000);
          });
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm1;
