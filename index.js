import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import './style.css';
import Moviedata from './Moviedata';

 
console.log(Moviedata[0].sname);
ReactDOM.render(
  <>
  <h1 className='heading_style'>Top Rated TV shows</h1>

  <Card
  sname = {Moviedata[0].sname}
  imgsrc={Moviedata[0].imgsrc}
  title = {Moviedata[0].title}
  link = {Moviedata[0].link}
  />

   <Card
  sname = {Moviedata[1].sname} 
  imgsrc={Moviedata[1].imgsrc}
  title ={Moviedata[1].title}
  link = {Moviedata[1].link}
  />

  <Card
    sname = {Moviedata[2].sname}
    imgsrc={Moviedata[2].imgsrc}
    title ={Moviedata[2].title}
    link = {Moviedata[2].link}
    />

  <Card 
  sname = {Moviedata[3].sname}
  imgsrc= {Moviedata[3].imgsrc} 
  title = {Moviedata[3].title}
  link =  {Moviedata[3].link}
  />

  <Card 
  sname = {Moviedata[4].sname}
  imgsrc= {Moviedata[4].imgsrc} 
  title = {Moviedata[4].title}
  link =  {Moviedata[4].link}
  />

  <Card 
  sname = {Moviedata[5].sname}
  imgsrc= {Moviedata[5].imgsrc} 
  title = {Moviedata[5].title}
  link =  {Moviedata[5].link}
  />

 
 
  
  </>

  ,document.getElementById('root')
);