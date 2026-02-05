const select = document.getElementById("productName");

products.forEach(product => {
  const option = document.createElement("option");
  option.textContent = product.name;
  option.value = product.id;
  select.appendChild(option);
});