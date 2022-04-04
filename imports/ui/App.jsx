import React from 'react';
import { ContactList } from './ContactList';
import { ContactForm } from './ContactForm';


export const App = () => (
  <div>
    <h1>Contacts Manager Plus!</h1>
    < ContactForm />
    <h4>Changes committed at 1:45pm</h4>
    < ContactList />
    
  </div>
);
