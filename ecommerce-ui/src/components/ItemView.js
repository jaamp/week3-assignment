import React from 'react';
import PropertyCard from './PropertyCard';
import itemData from './airbnbs.json';
import Header from './Header';

class ItemView extends React.Component {
  state = {
    selectedProperty: [{key: 1, title:"", cost:0}],
    stateKey: 1
  }

  addRental = (title) => {

    itemData.map(items => {

      if (title === items.title){
        const newKey = this.state.stateKey + 1;
        const selectedProp = {title:items.title, cost:items.payment.cost, key: newKey}
        this.setState(prevState => {
          return {
            stateKey: prevState.stateKey + 1,
            selectedProperty: [...prevState.selectedProperty, selectedProp]
          }
        })
      }
      return {items}
  })
  }

  removeRental = (idx) => {
        this.setState(prevState => {
         
            const selectedProperty = [...prevState.selectedProperty];
            selectedProperty.splice(idx,1);
          return {
            selectedProperty
          }
        })
      }





  render() {
    const newProperty = itemData.map(items => <PropertyCard addRental = {this.addRental} key={items.title} items={items} />)   
  
    return (
    <div>
      <Header removeRental = {this.removeRental} rentals={this.state.selectedProperty} />
      <div className="card-parent" style={{display: 'flex', flexWrap: 'wrap'}}>
        {newProperty}
      </div>
    </div>
    )
  }
}

export default ItemView;