import React from 'react';
import PropertyCard from './PropertyCard';
import itemData from './airbnbs.json';
import Header from './Header';

class ItemView extends React.Component {
  state = {
    selectedProperty: [{title: "One", cost: 10,}, {title: "two", cost: 25,}]
  }

  render() {
    const newRental = this.state.selectedProperty.map(items => <Header key={items.title} items={items} />)
    const newProperty = itemData.map(items => <PropertyCard clickHandler = {this.clickHandler} key={items.title} items={items} />)   
  
    return (
    <div>
      {newRental}
      <div className="card-parent" style={{display: 'flex', flexWrap: 'wrap'}}>
        {newProperty}
      </div>
    </div>
    )
  }
}

export default ItemView;