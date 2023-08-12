import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import {Signup} from './signup';
import Land from './land';
import {Plans} from './plans';
import Payment from './paymentPicker';
import Home from './Home';


const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Land/>} />
        <Route path="plans" element={<Plans/>} />
        <Route path="signup" element={<Signup/>} />
        <Route path="paymentPicker" element={<Payment/>} />
        <Route path="Home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
