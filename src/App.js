import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListView from "./view/ListView";
import RegisterView from "./view/RegisterView";
import { Provider } from "react-redux";
import store from "./redux/configStore";


function App() {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <ListView/> }/>
          <Route path="/register" element={ <RegisterView/> }/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
