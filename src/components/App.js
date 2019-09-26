import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  } 

  changeType = (value) => {
    debugger
    this.setState({...this.state.pets, filters: {type: value}})
  }

  fetchPets = () => {
    let endPoint = '/api/pets'

    if(this.state.filters.type !== 'all'){
      endPoint += `?type=${this.state.filters.type}`
    }

    fetch(endPoint)
      .then(res => res.json())
      .then(pets => this.setState({pets}) )

  }

  adoptPet = (id) => {
      //GOAL: selected pet's adopted attribute is changed from flase to true
      //1. Select the right pet by iterating over pets array based on ID or something 
      let changedPets = this.state.pets.map((pet) => {
        if(pet.id === id){
      //2. Access and change the attribute
          return {...pet, isAdopted: true}
        } else {
          return pet
        }
      })
    
      //3. Change the state to the updated array 

    this.setState((prevState, prevProps) => {
      return {...prevState, pets: changedPets}
    })

  }


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.changeType} onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
