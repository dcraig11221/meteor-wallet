import React from 'react';
import { ContactList } from './ContactList';
import { ContactForm } from './ContactForm';


export const App = () => (
  <div>
    <h1>Meteor Wallet!</h1>
    < ContactForm />
    <h4>Contact list will appear below.</h4>
    < ContactList />
    
  </div>
);