const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const items = localStorage.getItem("items");

if (!items) {
  localStorage.setItem("items", JSON.stringify([]));
} else {
  for (let i of JSON.parse(items)) {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const button = document.createElement("button");
    p.append(i);
    button.append("Delete");
    button.classList.add("remove");
    li.append(p);
    li.append(button);
    ul.append(li);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let value = input.value;
  const newItems = [...JSON.parse(items), value];
  localStorage.setItem("items", JSON.stringify(newItems));
  value = "";
  window.location.reload();
});

if (document.querySelectorAll(".remove")) {
  for (let i of document.querySelectorAll(".remove")) {
    i.addEventListener("click", function () {
      // Works without LS
      // const listItem = this.parentNode;
      // const ul = listItem.parentNode;
      // ul.removeChild(listItem);

      // With LS
      const listItem = this.parentNode;
      const value = listItem.innerText.split("\n")[0];
      const updateItems = JSON.parse(items).filter((val) => val !== value);
      localStorage.setItem("items", JSON.stringify(updateItems));
      window.location.reload();
    });
  }
}
