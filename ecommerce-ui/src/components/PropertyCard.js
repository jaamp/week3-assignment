import React from 'react';

class PropertyCard extends React.Component {

  render() {
    let superString = ""
    if (this.props.items.host.isSuperhost) {
      superString = "Superhost"
    }
    return(
      <div className="card">
        <img className="card-img" src={this.props.items.image} alt="view of the property" />
        <div className="card-container">
          <h2 className="card-title">{this.props.items.title}</h2>
          <p className="card-title">House Type: {this.props.items.houseType}</p>
          <p className="card-title">{this.props.items.location.city}</p>
          <p className="card-title">{this.props.items.location.country}</p>
          <p className="card-title">${this.props.items.payment.cost} per night</p>
          <p className="card-title">{this.props.items.payment.description}</p>
          <p className="card-title">{this.props.items.host.name}</p>
          <p className="card-superhost">{superString}</p>
          <p className="card-title">{this.props.items.rating.stars}</p>
          <p className="card-title">{this.props.items.rating.reviews}</p>
          <button onClick={() => this.props.addRental(this.props.items.title)}>Rent Me</button>
        </div>
      </div>
    )
  }
}


export default PropertyCard;