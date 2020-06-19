import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// import Home from './Home';
// import Table from './Table';
import AddCity from './AddCity';

class App extends Component {

  constructor() {
    super();
    this.state = {
      cities: [],
      currentCity: null
    }
    this.handleAddCity = this.handleAddCity.bind(this);
  }

  componentDidMount() {
    fetch('/api/cities')
    .then(response => {
      return response.json();
    })
    .then (cities => {
      this.setState({ cities });
    });
  }


  handleAddCity(city) {
    
    fetch( '/api/cities/',{
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(city)
    })
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then( data => {
      this.setState((prevState)=> ({
        cities: prevState.cities.concat(data),
        currentCity : data
      }))
    })
  }



  renderCities() {
    return this.state.cities.map(tasks => {
      return (
        <tr>
          <td key={tasks.id} >{tasks.name_city}</td>
          <td>{tasks.latitude}</td>
          <td>{tasks.longitude}</td>
          <td>{tasks.number_inhabit}</td>
        </tr>
      );
    })
  }

  render() { 
     return (
    <div className="App">   
      <AddCity onAdd={this.handleAddCity}/>
        <table id="getRequestData">
            <tr>
                <th>Название города</th>
                <th>Широта</th>
                <th>Долгота</th>
                <th>Количество населения</th>
            </tr>
            { this.renderCities() }
        </table>
    </div>
  );
  }
}

export default App; 

ReactDOM.render(<App />, document.getElementById('root'));
