import React from "react";
import ReactDOM  from "react-dom";
import{ List} from './containers/List.jsx'
import 'bootswatch/dist/lux/bootstrap.min.css'

function app (){
   return(
      <main>
         
      </main>
   )
}

ReactDOM.render(
   <>
      <h1>Hello world </h1>
      <List/>
   </>
   ,
   document.getElementById('root')
)