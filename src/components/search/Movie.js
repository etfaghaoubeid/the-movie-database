import React from 'react'
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody,CardImgOverlay } from 'reactstrap'

function Movie({movie:{poster_path,title,overview,release_date}}) {
  //console.log(movie)
  let path = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2'
  return (
  
     <div className="col-lg-5  card-item card my-2 mx-3" >
  <div className="row no-gutters">
    <div className="col-md-4">
      <img className="card-item-img" src={path+poster_path} className="card-img" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <div className="card-item-header">
        <p className="card-title "><strong className="card-item-title">{title}</strong>  <br/>
        <span className="card-item-date">{release_date}</span>
         </p>
        
        
      </div>
        <p className="card-text card-item-text">{overview.substr(0,90)}...</p>
        <hr></hr>
        <div class="card-item-more-info">More info</div>
      </div>
    </div>
  </div>
</div>



     
       
  
  )
}

export default Movie;
