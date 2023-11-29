function guardarItems() {
  const lista = document.querySelector("#lista");
  localStorage.setItem("items", lista.innerHTML);
}

function agregarItem(event) {
  event.preventDefault();

  const lista = document.querySelector("#lista");
  const item = document.createElement("li");

  item.innerHTML = `
    <div class="d-flex justify-content-between shadow-sm my-2 p-2 rounded">
      <p class="text-break pe-2">${event.target.item.value}</p>
      <div class="d-flex">
        <button class="btn p-0 me-2" onClick="marcarItem(event)">
          <img src="iconos/check.svg"></img>
        </button>
        <button class="btn p-0" onClick="borrarItem(event)">
          <img src="iconos/delete.svg"></img>
        </button>
      </div>
    </div>
  `;

  lista.prepend(item);
  guardarItems();

  event.target.reset();
};

function borrarItem(event) {
  event.target.closest("li").remove();
  guardarItems();
}

function marcarItem(event) {
  event.target.closest("li").querySelector("p").classList.toggle("text-decoration-line-through");
  guardarItems();
}

document.querySelector("form").addEventListener("submit", agregarItem);

document.addEventListener("DOMContentLoaded", function () {
  const lista = document.querySelector("#lista");
  const items = localStorage.getItem("items");

  if (items != null) {
    lista.innerHTML = items;
  }
});
