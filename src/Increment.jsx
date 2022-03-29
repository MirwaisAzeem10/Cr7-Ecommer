// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';

// export default function Cart({ cart, setCart }) {
//   const getTotalSum = () => {
//     return cart.reduce(
//       (sum, { cost, quantity }) => sum + cost * quantity,
//       0
//     );
//   };
//   const RemoveFromCart = productToRemove => {
//     setCart(cart.filter(product => product !== productToRemove));
//   };
//   const clearCart = () => {
//     setCart([])
//   }

//   const setQuantity = (product, amount) => {
//     const newCart = [...cart];
//     newCart.find(item => item.name === product.name)
//       .quantity = amount;
//     setCart(newCart)
//   };

//   let valueCal =(v)=>{
//     console.log(v)
//     return v++
//   }
//   let decrement =(v)=>{
//     console.log(v)
//     return v--
//   }

//   return (
//     <>
//       <h1>Cart</h1>
//       {cart.length > 0 && (<button onClick={clearCart}>Clear Cart</button>)}
//       <div className="products">
//         {cart.map((product, idx) => (
//           <div className="product" key={idx}>
//             <h3>{product.name}</h3>
//             <h4>RS: {product.cost}</h4>

//             <img src={product.image} alt={product.name} />
//             Quantity: {product.quantity}
//             <button
//               value={product.quantity}
//               onClick={(e) =>
//                 setQuantity(
//                   product,
//                   parseInt(valueCal(e.target.value))
//                 )
//               }
//             >Add</button>
//             <button
//               value={product.quantity}
//               onClick={(e) =>
//                 setQuantity(
//                   product,
//                   parseInt(decrement(e.target.value))
//                 )
//               }
//             >
//               Drop
//             </button>
//             <button onClick={() => RemoveFromCart(product)}>
//               Remove
//         </button>
//           </div>
//         ))}
//       </div>
//       <div>
//         Total cost: Rs: {getTotalSum()}
//       </div>
//     </>
//   )
// }
