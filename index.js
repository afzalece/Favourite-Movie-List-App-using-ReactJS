import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import './style.css';
import Moviedata from './Moviedata';

 
console.log(Moviedata[0].sname);

// function mcard(val){
//   return(
//     <Card
//   sname = {val.sname}
//   imgsrc={val.imgsrc}
//   title = {val.title}
//   link = {val.link}
//   />
//   )
// }



ReactDOM.render(
  <>
  <h1 className='heading_style'>Top Rated Movies & TV shows</h1>

   
  {Moviedata.map((val) =>{
   
    return(
      <Card
      sname = {val.sname}
      imgsrc={val.imgsrc}
      title = {val.title}
      link = {val.link}
      />
    )
  })}
  
  </>

  ,document.getElementById('root')
);