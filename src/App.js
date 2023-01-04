
import React from 'react'
import SaleForceScn from './components/CSR/SaleForceScn';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Disclosure from './components/CSR/Disclosure';
import Home from './components/Home';
import Crud from './components/Crud';
import MemberLogin from './components/CSR/MemberLogin';
import DRSrn from './components/CSR/DRSrn';



function App() {
  return (
    <div>
      <Router basename="/REACT_REDUX_CRUD>
      <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path='/auth_form' element={< SaleForceScn />}></Route>
              <Route exact path='/crud' element={<Crud />}></Route>
              <Route exact path='/disclosure' element={<Disclosure />}></Route>
              <Route exact path='/memberlogin' element={<MemberLogin />}></Route>
              <Route exact path='/dr_form' element={<DRSrn />}></Route>
      </Routes>
      </Router>
    </div>
  )
}

export default App
