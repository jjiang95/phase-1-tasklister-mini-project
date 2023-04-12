document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    handleToDo(e.target["new-task-description"].value);
    form.reset();
  })
});

function handleToDo(input) {
  let li = document.createElement("li");
  let button = document.createElement("button");
  button.addEventListener("click", function (e) {
    e.target.parentNode.remove();
  })
  button.textContent = "x";
  li.textContent = `${input} `;
  li.appendChild(button);
  document.querySelector("#tasks").appendChild(li);
}