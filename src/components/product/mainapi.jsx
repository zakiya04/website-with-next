
async function API() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return products;
}

export default API;
