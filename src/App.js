import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import { useState } from 'react';



function App() {

  //const [imageUpload, setImageUpload]  = useState(null);
  //const uploadFile = () => {};

  return (

    // Autenticação

    <div className="App">
      <Header/>
      <Sidebar/>
      

    </div>
  );
}

export default App;
