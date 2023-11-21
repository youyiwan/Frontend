import ReactDOM from "react-dom/client";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Layout from "./pages/Layout";
import Index from "./pages/Index";
import image from './images/login_image.jpg';
import Transfer from "./pages/Transfer";
import Logout from "./pages/Logout";


import './App.css';

function App() {
  // Create States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Hardcode user login info for demo
  const database = [
    {
      username: "admin",
      password: "123"
    }
  ];

  const errors = {
    uname: "Invalid Username",
    pass: "Invalid Password"
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div style={{ textAlign: 'center' }}>
                 <img src={image} height={'45%'} width={'45%'} alt={'cover image'} />
        </div>
        <div className="input-container">
            <div style={{ textAlign: 'center' , fontSize: '20px'}}>
              <label >USERNAME </label>
              <input 
              type="text" 
              name="uname" 
              required={true}
              style={{ width: '200px' }}
              placeholder="Enter your username" 
              />
              {renderErrorMessage("uname")}
          </div>
        </div>
        <div className="input-container">
          <div style={{ textAlign: 'center', fontSize: '20px' }}>
              <label>PASSWORD </label>
              <input 
              type="password" 
              name="pass" 
              required={true} 
              style={{ width: '200px' }}
              placeholder="Enter your password"
              />
              {renderErrorMessage("pass")}
          </div>
        </div>
        <div className="button-container">
          <div style={{ textAlign: 'center' , fontSize: '30px' }}>
              <input type="submit" 
              style={{ width: '80px' }}
              />
          </div>

        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">

        <div style={{ textAlign: 'center' }}>
          <h1>Bank of Asia</h1>
        </div>

        {isSubmitted ? 
          <div>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Index />} />
                  <Route path="Index" element={<Index />} />
                  <Route path="Transfer" element={<Transfer />} />
                  <Route path="Logout" element={<Logout />} />
              </Route>
              </Routes>
            </BrowserRouter>
          </div> : renderForm}
      </div>
    </div>
  );
}


export default App;




