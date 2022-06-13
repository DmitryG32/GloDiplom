const sendForm1 = () => {
  const form = document.querySelector("form");
  const inputs = form.querySelectorAll("input[type='text']");

  const inputName = form.querySelector("input[name='fio']");
  const inputTel = form.querySelector("input[name='tel']");

  const regexpText = /[^а-яА-я- ]/;
  const regexpTel = /[^\d+]/;

  let namelVal;
  let telVal;

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
    let reg = /^([\+]{0,1}[\d]{6,16})$/;
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
    namelVal = inputName.value;
    inputName.classList.remove("error");
  });

  inputTel.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(regexpTel, "");
    telVal = inputTel.value;
    inputTel.classList.remove("error");
  });

  inputName.addEventListener("invalid", (e) => {
    e.preventDefault();
    if (!validateName(namelVal)) {
      inputName.classList.add("error");
      inputName.setCustomValidity("Ошибка в телефоне");
    }
  });

  inputTel.addEventListener("invalid", (e) => {
    e.preventDefault();
    if (!validateTel(telVal)) {
      inputTel.classList.add("error");
      inputName.setCustomValidity("Ошибка в имени");
    }
  });

  try {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

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
