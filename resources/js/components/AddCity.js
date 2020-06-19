import React, { Component } from 'react';
import FormErrors from './FormErrors';

class AddCity extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formErrors: {
                latitude: '',
                longitude: '',
                number_inhabit: '',
            },
            name_city: '',
            latitude: '',
            longitude: '',
            number_inhabit: '',
            formValid: false,

            latitudeValid: false,
            longitudeValid: false,
            number_inhabitValid: false,

            newCity: {
                name_city: '',
                latitude: '',
                longitude: '',
                number_inhabit: '',
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }




    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let latitudeValid = this.state.latitudeValid;
        let longitudeValid = this.state.longitudeValid;
        let number_inhabitValid = this.state.number_inhabitValid;

      switch(fieldName) {
          case 'latitude':
            latitudeValid = value.match(/^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/);
            fieldValidationErrors.latitude = latitudeValid ? '' : 'Введите широту в формате xx.xxx';
            break;
          case 'longitude':
            longitudeValid = value.match(/^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/);
            fieldValidationErrors.longitude = longitudeValid ? '': 'Введите долготу в формате xx.xxx';
            break;
        case 'number_inhabit':
            number_inhabitValid = value.match(/^[ 0-9]+$/);
            fieldValidationErrors.number_inhabit = number_inhabitValid ? '': 'Введите целое число';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        latitudeValid: latitudeValid,
                        longitudeValid: longitudeValid,
                        number_inhabitValid: number_inhabitValid,
                      }, this.validateForm);
      }
      
      validateForm() {
        this.setState({formValid: this.state.latitudeValid &&
                                  this.state.longitudeValid &&
                                  this.state.number_inhabitValid});
      }


    handleInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, 
            () => { this.validateField(name, value) });
      }

    handleSubmit(e) {
        e.preventDefault();
       if(this.state.formValid) {
        const city = {
            name_city: this.state.name_city,
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            number_inhabit: this.state.number_inhabit,
        }
        this.props.onAdd(city);
       }
    }
    render() {
        return(
            <div>
                <FormErrors formErrors = {this.state.formErrors} />
                <form className="formData" onSubmit={this.handleSubmit}>
                    <p />Название города<input type="text" name="name_city" onChange={this.handleInput} /><br />
                    <p />Широта<input type="text" name="latitude" value={this.state.latitude} onChange={this.handleInput} /><br />
                    <p />Долгота<input type="text" name="longitude" value={this.state.longitude} onChange={this.handleInput} /><br />
                    <p />Количество населения<input type="text" name="number_inhabit" value={this.state.number_inhabit} onChange={this.handleInput} /><br />
                    <input id="getRequest" type="submit" value="Отправить"/>
                </form>
            </div>
        )
    }
}

export default AddCity;