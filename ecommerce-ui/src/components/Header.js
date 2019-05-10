import React from 'react';


export default class Header extends React.Component {

  render(){ 
    const newRentals = this.props.rentals.map((rental, idx) => {
      if (rental.key !== 1) {      return (
          <li key={idx}>{rental.title}  <button onClick={() => this.props.removeRental(idx)}>Remove</button></li>
      );
      }
  })


const newCost = this.props.rentals;
let totCost = 0;

for (let i=0; i < newCost.length; i++) {
totCost = totCost + newCost[i].cost;
}

  return (
    <div>
      <div className="cart">
        <h1>Your Current Reservations</h1>
        <ul className="cart-ul">
          {newRentals}
        </ul>
        <hr/>
      </div>
      <div className="cart-total">
        <h1>Your Current Total</h1>
          <h3>${totCost.toFixed(2)}</h3>
        <hr/>
      </div>
    </div>
  );
}
}
