import React from 'react';


export default class Header extends React.Component {

  render(){  
    



  return (
    <div>
      <div className="cart">
        <h1>Your Current Reservations</h1>
        <ul className="cart-ul">
        <li>{this.props.items.title}</li>
        </ul>
        <hr/>
      </div>
      <div className="cart-total">
        <h1>Your Current Total</h1>
        <h3>{this.props.items.cost}</h3> 
        <hr/>
      </div>
    </div>
  );
}
}
