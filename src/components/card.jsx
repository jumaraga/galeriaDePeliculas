import React from 'react'


export function Card({dato}){
   return(
      <section className="col-md-4">
         <div className="card">
         <img src={dato.Poster} alt={dato.Title} className='card-img-top' />
         <div className='card-body'>
         <h4>{dato.Title}</h4>
         <p>{dato.Type}</p>
         </div>
         sxdas
      </div>
      </section>
   )
}