import React from "react";
import { useCart } from "react-use-cart";
import { RxCrossCircled } from "react-icons/rx";

const Cart = () => {
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) {
    <h1>Add Something to your Cart</h1>;
  }

  return (
    <div className="w-screen h-screen  ">
      <div className="w-[180vh] h-[80vh] m-auto mt-11">
        <h1 className="text-4xl flex justify-center">Checkout</h1>
        <table className="m-auto table-auto">
          <tbody>
            {items.map((item, index) => {
              return (
                <div>
                  <th>
                    <td> {}</td>
                    <td>Product</td>
                    <td> </td>
                    <td>Price</td>
                    <td>Quantity</td>
                  </th>
                  <tr key={index}>
                    <button onClick={() => removeItem(item.id)}>
                      <RxCrossCircled />
                    </button>
                    <td>
                      <img src={item.img} alt="" style={{ height: "6rem" }} />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td> ({item.quantity})</td>
                    <td>
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </td>
                  </tr>
                </div>
              );
            })}
          </tbody>
        </table>
        <hr className="bg-black h-3"></hr>
        <div>
          <h2>Total Cost : {cartTotal}</h2>
        </div>
        <div>
          <h2 onClick={() => emptyCart()}>Clear Cart</h2>
        </div>
        <div>
          <button>BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
