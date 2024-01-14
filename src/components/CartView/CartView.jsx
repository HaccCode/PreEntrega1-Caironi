import { useCart } from "../../context/CartContext/CartContext";
import { Link } from "react-router-dom";

const CartView = () => {
  const { cart, total, removeItem } = useCart();

  return (
    <>
      <h1>Carrito de Compra</h1>
      <div>
        {cart.map((prod) => {
          return (
            <div
              key={prod.id}
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-around",
              }}
            >
              <h2>{prod.name}</h2>
              <h3>Cantidad:{prod.quantity}</h3>
              <h3>Precio: ${prod.price}</h3>
              <h3>Subtotal: ${prod.quantity * prod.price}</h3>
              <button onClick={() => removeItem(prod.id)}>Eliminar</button>
            </div>
          );
        })}
      </div>

      <h1>Total de la Compra: ${total}</h1>
      <Link to='/checkout'>CheckOut</Link>
    </>
  );
};

export default CartView;