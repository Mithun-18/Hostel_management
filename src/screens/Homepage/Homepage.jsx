import React from 'react'
import Navbarheader from './component/Navbar'
import Footer from '../../component/common/Footer'
import Mainbody from '../Adminpage/component/Mainbody'
import Homepagebody from './component/Homepagebody'

function Homepage() {
  return (
    <div>
      <Navbarheader/>
    <Homepagebody/>
    <Footer/>
    </div>
  )
}

export default Homepage