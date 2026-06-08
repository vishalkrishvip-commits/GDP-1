const products = [
  { id: 1, name: "Apple", price: 120 },
  { id: 2, name: "Milk", price: 60 },
  { id: 3, name: "Rice", price: 80 },
  { id: 4, name: "Tomato", price: 40 },
];

let cart = [];

function displayProducts(list) {
  const container = document.getElementById("productList");
  container.innerHTML = "";

  list.forEach((p) => {
    container.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add</button>
      </div>
    `;
  });
}

function addToCart(id) {
  const item = products.find((p) => p.id === id);
  cart.push(item);
  document.getElementById("cartCount").innerText = cart.length;
  renderCart();
}

function renderCart() {
  const cartDiv = document.getElementById("cartItems");
  cartDiv.innerHTML = "";

  cart.forEach((c, i) => {
    cartDiv.innerHTML += `
      <p>${c.name} - ₹${c.price}</p>
    `;
  });
}

document.getElementById("search").addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const filtered = products.filter((p) => p.name.toLowerCase().includes(value));
  displayProducts(filtered);
});

function checkout() {
  alert("Order placed successfully 🚚");
  cart = [];
  renderCart();
  document.getElementById("cartCount").innerText = 0;
}

displayProducts(products);
