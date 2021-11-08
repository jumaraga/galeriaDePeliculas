import React from "react";
import { Card } from "../components/card.jsx";

/* export  const List =()=>
{
  return(
   <Card/>   
  )
  
} */

const API ='http://www.omdbapi.com/?i=tt3896198&apikey=7f2c0644'

export class List extends React.Component{
   constructor(){
      super();
      this.state={
         data:[],
         searchTerm:'',
         error:'',
      }
   }
   /* el elmneto componentDidMount se ejecuta apenas el componente a sido mostrado en pantalla */
   async componentDidMount(){
      const res = await fetch(`${API}&s=batman`);
      const resJson =await res.json();
      this.setState({data: resJson.Search})
      console.log(resJson)
   }

   async handlerSubmit(e){
      e.preventDefault();
      if(!this.state.searchTerm){
         return this.setState({error: 'please insert a valid input'})
      }
     const res= await fetch(`${API}&s=${this.state.searchTerm}`)
     const data= await res.json()
     console.log(data)
      if(!data.Search){
         return this.setState({error:'no hay resultados disponibles'})
      }

     this.setState({data: data.Search, error:'',searchTerm:''})

   }

   render(){
      return(
         <>
            <div className='col-md-4 offset-md-4 p-4'>
               <form onSubmit={(e)=>this.handlerSubmit(e)}>
                  <input 
                  className='form-control' placeholder="Search" 
                  type="text"
                  onChange={e=>this.setState({searchTerm: e.target.value})}
                  value={this.state.searchTerm} 
                  />
               </form>
               <p className='text-red' id='respuesta'>{this.state.error?this.state.error:''}</p>
            </div>
            <div className="row">
            {
            this.state.data.map(dato=>
            <Card dato={dato} key={1} />)
            }
         </div>
         </>
      )
   }
}
