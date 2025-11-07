function onClick(event) {
  event.preventDefault();

  let t1 = document.getElementById("number");
  let t2 = document.getElementById("goods");
  let res = document.getElementById("result");
  let regex = /^\d+$/;
  let isValid = regex.test(t1.value);
  if(isValid && parseInt(t2.value) != 0)
  {
  alert("Вычисления окончены");
  let quantity = parseInt(t1.value);
  let price = parseInt(t2.value);
  let total = quantity * price; 
  res.innerHTML = "Общая стоимость: " + total + " руб.";
  }
  else
  {
    alert("ОШИБКА!")
  }
}

window.addEventListener('DOMContentLoaded', function (event) {
  console.log("DOM fully loaded and parsed");
  let b = document.getElementById("my-button");
  b.addEventListener("click", onClick);
})
