import React ,{Fragment}from 'react'
import Header from './Header'
import Footer from './Footer';

function Main(props) {
  return (
    <Fragment>
        <Header/>
        <div className="container">
        {props.children}
        </div>
        <Footer/>
    </Fragment>
  )
}
export default  Main
