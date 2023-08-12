import React from "react";
import ReactDOM from "react-dom";
import App from './files/App';
import './index.css'
import 'tailwindcss/tailwind.css';
import {browserRouter, Router} from 'react-router-dom';

ReactDOM.render(
  <browserRouter>
    <App/>
  </browserRouter>,
  document.getElementById("root")
);
