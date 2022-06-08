const button = document.querySelector("button")
const form = document.querySelector("form")

const container = document.getElementById("container")
const input = document.querySelector("input")


form.addEventListener("submit", (eo) => {

  eo.preventDefault();
  const task = `<div class="task">
    <span class="icon-star icon"> </span>
    <p class="task-text">${input.value}</p>

    <div>
      <span class="icon-trash icon"> </span>

      <span class="icon-angry2 icon"> </span>
    </div>

    <!-- <span class="icon-heart">   </span> -->
  </div>`

  container.innerHTML += task
  input.value=""


})
//this is for clicking the buttons (heart ,trash icon)
container.classList.add("red")
container.addEventListener("click", (eo) => {
  if (eo.target.className == "icon-trash icon") {
    eo.target.parentElement.parentElement.remove()

  }
  else if (eo.target.className == "icon-angry2 icon") {

    eo.target.classList.add("dn")


    const heart = `<span class="icon-heart"></span>`

    eo.target.parentElement.parentElement
      .getElementsByClassName("task-text")[0]
      .classList.add("finish");


    eo.target.parentElement.innerHTML += heart

  }
  else if (eo.target.className == "icon-heart") {
    eo.target.parentElement.parentElement
      .getElementsByClassName("task-text")[0]
      .classList.remove("finish");

    const addAngr = `<span class="icon-angry2 icon"> </span>`
    eo.target.classList.add("dn")
    eo.target.parentElement.innerHTML += addAngr;


  }
  else if (eo.target.className == "icon-star icon") {
    eo.target.classList.add("orange")
    container.prepend(eo.target.parentElement)
  }else if (eo.target.className=="icon-star icon orange"){
    eo.target.classList.remove("orange")


  }

})