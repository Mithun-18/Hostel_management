import React from 'react'
import Navbarheader from '../Homepage/component/Navbar'
import Mainbody from './component/Mainbody'
import Footer from '../../component/common/Footer'
import Navbarlogin from '../common/Navbarlogin'

function Adminpage() {
  return (
    <div>
        <Navbarlogin/>
        <Mainbody/>
        <Footer/>
    </div>
  )
}

export default Adminpage