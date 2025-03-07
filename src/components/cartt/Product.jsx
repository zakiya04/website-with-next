import API from "../product/mainapi";
import ProductInfo from "./showProduct";

async function ProductUi({params}) {
    const { id } = params;
    const products = await API();
    const product = products.find((item) => item.id == Number(id));
  return (
    <div>
      <ProductInfo product={product}/>
    </div>
  )
}

export default ProductUi
