import React from 'react'
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody,CardImgOverlay } from 'reactstrap'

function Movie({movie:{poster_path,title,overview}}) {
  //console.log(movie)
  let path = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2'
  return (
  
     <div className="col-lg-5  card-item card my-3 mx-3" >
  <div className="row no-gutters">
    <div className="col-md-4">
      <img className="card-item-img" src={path+poster_path} className="card-img" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <div className="card-item-header">
        <h5 className="card-title card-item-title"><strong>{title}</strong></h5>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
        <p className="card-text card-item-text">{overview}</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>



     
       
  
  )
}

export default Movie;
