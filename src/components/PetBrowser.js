import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {



  render() {

    let pets = this.props.pets.map((pet, index) => {
      return <Pet key={index} onAdoptPet={this.props.onAdoptPet} pet={pet}/>
    })

    return <div className="ui cards">{pets}</div>
  }
}
 
export default PetBrowser
