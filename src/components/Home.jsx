import React from "react";
import Item from "./Item";
import printer from "../images/printer.png"
import charmander from "../images/charmander.jpg"
import dino from "../images/dino.jpg"
import dog from "../images/dog.jpg"
import dragon from "../images/dragon.jpg"
import flower from "../images/flower.jpg"
import groot from "../images/groot.jpg"
import heart from "../images/heart.jpg"
import shape from "../images/shape.jpg"
import skulls from "../images/skulls.jpg"
import vase from "../images/vase.jpg"


function Home() {

  var itemsObject = [
    { name : "Charmander", img: charmander },
    { name : "Dino", img: dino },
    { name : "Dog", img: dog },
    { name : "Dragon", img: dragon },
    { name : "Flower", img: flower },
    { name : "Groot", img: groot },
    { name : "Heart", img: heart },
    { name : "Shape", img: shape },
    { name : "Skulls", img: skulls },
    { name : "Vase", img: vase },
  ]

  var items = itemsObject.map(item => {
    return <div className="col" key={item.name}>
          <Item name={item.name} img={item.img} itemWidth="250px" itemHeight={"250px"}/>
    </div>
  })

  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
        {items}
        </div>
      </div>
    </div>
  );
}

export default Home;