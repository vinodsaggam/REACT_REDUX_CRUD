
import React from 'react'
import SaleForceScn from './components/SaleForceScn';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Disclosure from './components/CSR/Disclosure';
import Home from './components/Home';
import Crud from './components/Crud';



function App() {
  return (
    <div>
      <Router>
      <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path='/auth_form' element={< SaleForceScn />}></Route>
              <Route exact path='/crud' element={<Crud />}></Route>
              <Route exact path='/disclosure' element={<Disclosure />}></Route>
      </Routes>
      </Router>
    </div>
  )
}

export default App