import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'



  //  const submit = (values) => {
  //       console.log('submit inside form');
  //       console.log(values);
  //   }
    class ContactForm extends Component {
      render() {
        return(
            // <ContactForm onSubmit={this.submit} />
            <div>
              <h3>Привет, а я компонента Contact Form, передаюсь в компоненту Home, а затем в App</h3>
            </div>
        );
    }
    }
    // const ContactFormFunc = ({ handleSubmit }) => (
        // <form onSubmit={handleSubmit(submit)}>
        //   <div>
        //     <label htmlFor="firstName">First Name</label>
        //     <Field name="firstName" component="input" type="text" />
        //   </div>
        //   <div>
        //     <label htmlFor="lastName">Last Name</label>
        //     <Field name="lastName" component="input" type="text" />
        //   </div>
        //   <div>
        //     <label htmlFor="email">Email</label>
        //     <Field name="email" component="input" type="email" />
        //   </div>
        //   <button type="submit">Submit</button>
        // </form>
        
    // );

        

// const ContactForm = reduxForm({
//   // a unique name for the form
//   form: 'contact'
// })(ContactFormFunc)

export default ContactForm;