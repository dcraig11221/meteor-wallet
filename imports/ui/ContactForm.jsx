import React, { useState} from "react";
import { Meteor } from "meteor/meteor";

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [imageUrl, setImageUrl] = useState('');
   
    const saveContact = () => {
      Meteor.call('contacts.insert', { name, email, imageUrl }, (errorResponse) => {
        if(errorResponse) {
           alert(errorResponse.error)
        }
      });
      Array.from(document.querySelectorAll('input')).forEach(input => input.value = '');
      setName('');
      setEmail('');
      setImageUrl('');
    }
  
    const handleChange = (e) => {
     e.target.id == 'name' ? setName(e.target.value)
     : e.target.id == 'email' ? setEmail(e.target.value)
     : setImageUrl(e.target.value);
    }
  
      return (
          <form>
          <div>
              <label htmlFor="name">Name</label>  
              <input value={name}  id="name" type="text" onChange={handleChange} />
              {/* value={} will insert the state value to clear after submit */}
          </div>    
  
          <div>
            <label htmlFor="email"> Email </label>
            <input value={email}  id='email'  type="email" onChange={handleChange} />
          </div>
  
          <div>
            <label htmlFor="imageUrl"> Image URL </label>
            <input value={imageUrl}  id='imageUrl' type="text" onChange={handleChange} />
          </div>
  
          <div>
            <button type="button" onClick={saveContact}>Save Contact</button>
          </div>
        </form>
      )
}