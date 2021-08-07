import React from 'react';
import { useState } from 'react'
import TodoList from './components/TodoList';
import Header  from './components/Header';
import Footer from './components/Footer';

function App() {



  return (
    <div>

      {/* header section */}
      <Header></Header>
      
      <TodoList></TodoList>

      {/* footer section */}
      <Footer></Footer>
    </div>
  );
}

export default App;
