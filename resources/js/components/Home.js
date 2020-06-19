import React, { Component } from 'react';
import ContactForm from './ContactForm';

class Home extends Component {
   
    render() {
        return(
             <div>
                <h2>Привет, а я компонента Home, передаюсь в компоненту App</h2>
                <ContactForm />
            </div>
        );
    }
}

export default Home;