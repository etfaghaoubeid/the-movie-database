import React ,{Fragment}from 'react'
import Header from './Header'
import Footer from './Footer';

function Main(props) {
  return (
    <Fragment>
        <Header/>
        {props.children}
        <Footer/>
    </Fragment>
  )
}
export default  Main
