import React from "react";
import Item from "./Item";
import printer from "../images/printer.png"


function Home() {

  var names = [
    "Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8"
  ]
  var items = names.map(itemName => {
    return <div className="col" key={itemName}>
          <Item name={itemName} img={printer} itemWidth="250px"/>
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