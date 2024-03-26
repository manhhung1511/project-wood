// import React from "react"
// import { Navbar, Nav } from 'react-bootstrap';

// const Test = () => {
//     return (
//         <Navbar bg="light" expand="lg">
//         <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mr-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     );
// }

// export default Test;

import React, { useState } from 'react';

const YourComponent = () => {
  // const [cart, setCart] = useState([
  //   { id: 1, number: 5 },
  //   { id: 2, number: 10 },
  //   // ... other items in the cart
  // ]);

  // const handleAddNumber = (id, action) => {
  //   let updatedCart = [...cart];
  //   const productIndex = updatedCart.findIndex(item => item.id === id);
    
  //   if (productIndex !== -1) {
  //     if (action === 'increment') {
  //       updatedCart[productIndex].number += 1;
  //     } else if (action === 'decrement' && updatedCart[productIndex].number > 0) {
  //       updatedCart[productIndex].number -= 1;
  //     }
  //     setCart(updatedCart);
  //   } else {
  //     console.log("Product not found in cart");
  //   }
  // };

  return (
    // <div>
    //   {/* Display number for each item in the cart */}
    //   <ul>
    //     {cart.map(item => (
    //       <li key={item.id}>
    //         <span>Item ID: {item.id}</span>
    //         <span> - Number: {item.number}</span>
    //         {/* Buttons to increment and decrement for each item */}
    //         <button onClick={() => handleAddNumber(item.id, 'increment')}>Increment</button>
    //         <button onClick={() => handleAddNumber(item.id, 'decrement')}>Decrement</button>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <div>
      <form action="/action_page.php">
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname" value="John"/>
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname" value="Doe"/>
        <input type="submit" value="Submit"/>
    </form>
    </div>
  );
};

export default YourComponent;

