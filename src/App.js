
import UserForm from './components/user-form/UserForm';
import Header from './components/Header/Header';

import './App.css';
import { useState } from 'react';

function App() {
  const [ currenTab , setCurrentTab] =useState(' user-form')
  return (
    <div className="App">
      <Header setCurrentTab={setCurrentTab}/>
      currenTab{currenTab}
      <UserForm/>
      </div>
  );
}

export default App;
