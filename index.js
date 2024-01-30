const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
let items = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let value = input.value;

  if (!value) return;

  items.push(value);

  input.value = "";
  ul.innerHTML = "";

  for (let i of items) {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const button = document.createElement("button");
    p.append(i);
    button.append("Delete");
    button.classList.add("remove");
    li.append(p);
    li.append(button);
    ul.append(li);

    button.addEventListener("click", () => {
      items = items.filter((i) => i !== value);
      const listItem = li;
      ul.removeChild(listItem);
    });
  }
});
