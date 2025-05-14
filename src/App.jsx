import { useState } from 'react'
import './App.css'
import Bookshelf from './components/Bookshelf/Bookshelf';

const App = () => {
  return (
    <>
      <h1>My Bookshelf</h1>
      <h2>Welcome to my bookshelf! Here you can add and view your favorite books.</h2>
      <h3>Instructions:</h3>
      <p>1. To add a book, fill in the title and author in the form below.</p>
      <Bookshelf />
    </>
  );
};

export default App;
