'use client'
import HandleCart from "../product/CartContext";
import Link from "next/link";

function CartUi() {
  const {cart} = HandleCart();
  console.log(cart)
  return (
    <div className="text-white">
      <h1>My Cart</h1>
      {cart.forEach(item =>{
        <div>
          <div>
            <Image/>
            <p>{item.title}</p>
          </div>
          <div>
            <p>{item.price}</p>
            <div>
              <button>-</button>
              <p></p>
              <button>+</button>
            </div>
          </div>
          <hr/>
        </div>
      })}
      <div>
        <div>
          <p>Taxes</p>
          <p></p>
          <hr/>
        </div>
        <div>
          <p>Shipping</p>
          <p>Calculated at checkout</p>
          <hr/>
        </div>
        <div>
          <p>Total</p>
          <p></p>
          <hr/>
        </div>
      </div>
      <Link href='/checkout'>Proceed to checkout</Link>
    </div>
  )
}

export default CartUi
