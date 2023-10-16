
import React from "react";
import Card from "./Cards";
import "./index.css";
import Sdata from "./Sdata";

function ncard(val){
  console.log(val);
  return (
    <Card
    key={val.id}
     imgsrc={val.imgsrc}
     title={val.title}
     sname={val.sname}
     link={val.link}
   />
  );
}
const App=()=>(
  <>
  <h1 className="heading_style">List of 5 Top Netflix Web series</h1>
    {Sdata.map(ncard)}
    </>
);
export default App;