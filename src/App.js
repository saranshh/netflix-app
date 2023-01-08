import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar"
import Sdata from "./Data";

const favSeries = "amazon"

const FavS = () => {
  if(favSeries === "netflix"){
    return (
    <Card
      key = {Sdata[0].id}
      imgsrc={Sdata[0].imgsrc}
      title={Sdata[0].title}
      sname={Sdata[0].sname}
      link={Sdata[0].links}
    />
    );
  }
  else{
    return (
      <Card
      key = {Sdata[4].id}
      imgsrc={Sdata[4].imgsrc}
      title={Sdata[4].title}
      sname={Sdata[4].sname}
      link={Sdata[4].links}
    />
    );
  }
}

function nCard(val) {
  return (
    <Card
      key={val.id}
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.links}
    />
  );
}

const App = () => (
  <>
  <Navbar/>
  <h1 className="heading_style">List of top 10 Netflix Series in 2022</h1>
  <div className="main-div">
  {/* <FavS /> */}
  {Sdata.map(nCard)}

  {/* <Card
      imgsrc={Sdata[0].imgsrc}
      title={Sdata[0].title}
      sname={Sdata[0].sname}
      link={Sdata[0].links}
    />
    <Card
      imgsrc={Sdata[1].imgsrc}
      title={Sdata[1].title}
      sname={Sdata[1].sname}
      link={Sdata[1].links}
    />
    <Card
      imgsrc={Sdata[2].imgsrc}
      title={Sdata[2].title}
      sname={Sdata[2].sname}
      link={Sdata[2].links}
    />
    <Card
      imgsrc={Sdata[3].imgsrc}
      title={Sdata[3].title}
      sname={Sdata[3].sname}
      link={Sdata[3].links}
    />
    <Card
      imgsrc={Sdata[4].imgsrc}
      title={Sdata[4].title}
      sname={Sdata[4].sname}
      link={Sdata[4].links}
    />
    <Card
      imgsrc={Sdata[5].imgsrc}
      title={Sdata[5].title}
      sname={Sdata[5].sname}
      link={Sdata[5].links}
    />
    <Card
      imgsrc={Sdata[6].imgsrc}
      title={Sdata[6].title}
      sname={Sdata[6].sname}
      link={Sdata[6].links}
    />
    <Card
      imgsrc={Sdata[7].imgsrc}
      title={Sdata[7].title}
      sname={Sdata[7].sname}
      link={Sdata[7].links}
    />
    <Card
      imgsrc={Sdata[8].imgsrc}
      title={Sdata[8].title}
      sname={Sdata[8].sname}
      link={Sdata[8].links}
    />
    <Card
      imgsrc={Sdata[9].imgsrc}
      title={Sdata[9].title}
      sname={Sdata[9].sname}
      link={Sdata[9].links}
    />
    <Card
      imgsrc={Sdata[10].imgsrc}
      title={Sdata[10].title}
      sname={Sdata[10].sname}
      link={Sdata[10].links}
    /> */}

   </div>
  </>
);

export default App; 


