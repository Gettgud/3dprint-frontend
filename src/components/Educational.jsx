import React from "react";
import printer from '../images/printer.png'
import additive from '../images/additive-subtractive.png'
import extruder from '../images/extruder.png'
import types from '../images/printer-types.png'

function Educational() {
  return (
    <div className="educational">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-10">
            <h1 className="font-weight-light">3D Printing</h1>
            <img src={printer} class="rounded mx-auto d-block" alter="3D printer"/>
            <p>
            Google defines 3D printing as the action or process of making a physical object
            from a three-dimensional digital model, typically by laying down many thin layers
            of a material in succession. 
            </p>
            <p>3D printing is part of a branch of manufacturing called additive manufacturing. 
            Additive, meaning that the material is added layer by layer, or piece by piece, to 
            eventually create a final product (think sewing machine). Subtractive manufacturing 
            would be the opposite. The material starts out in a block or sheet, and material is
            cut away or out (think machining) Additive manufacturing is great to reduce waste 
            and create complex designs. 
            </p>

            <img src={additive} class="rounded mx-auto d-block" alt="additive-subtractive"/>

            <p>
            Much like a hot glue gun, 3D printing typically takes a solid material at room temperature, 
            heats it up to its melting point, extrudes the molten material through a nozzle of a smaller 
            diameter, and then deposits the plastic onto a plate to specified X,Y,Z locations. This kind 
            of printing is called FDM (Fused Deposition Modeling) and is the most widely used printing method 
            for hobbyists like myself. All movements are robotically controlled and there is little to no interference 
            once the print has started. 
            </p>

            <img src={extruder} class="rounded mx-auto d-block" alt="FDM Extruder Diagram"/>

            <h2 className="font-weight-light">What other kinds of printers are there?</h2>
            <p>Yes, there are plenty of other methods. For example, Resin printers take a vat of liquid resin and harden
            it selectively with a UV laser. They also print everything upside down! SLS printers, or Selective Laser Sintering,
            use a powder form of plastic. This powder plastic undergoes “Laser Sintering” to harden its specified layers. 
            All other sections stay in powder form and they can be used for the next print. There are many other types too 
            including SLA, Injet, Direct Ink Writing, SDM, and more. </p>

            <img src={types} class="rounded mx-auto d-block" alter="Other types of printers"/>

            <h2 className="font-weight-light">How much does a 3D printer cost to buy?</h2>
            <p>3D printers in general cost as little as $100 and as much as $1,000,000+. However, anything over $5,000 is 
            usually considered an industrial 3D printer and anything under $5,000 is usually considered a hobbyist printer. 
            Most hobbyist printers cost less than $1,000 and can be found on various websites like Amazon, Ebay, Banggood and 
            more.</p>

            <img class="rounded mx-auto d-block" alter="Add cheap vs expensive printer pics"/>

            <h2 className="font-weight-light">How much does a 3D printer cost to use?</h2>
            <p>The biggest expense by far goes to material, or more specifically, filament. Filaments typically cost about $20 
            per kilogram or 2.2 lbs. A typical item may be 50 grams, or cost $1 in material. But there also is time in set-up, 
            slicing (computer preparation), 3D printer replacement parts and upgrades, tools, failed prints that need to be 
            redone, electricity, time and research.   
            </p>

            <img class="rounded mx-auto d-block" alter="Add filament pic"/>

            <h2 className="font-weight-light">What is PLA?</h2> 
            <p>PLA or polylactic acid is a vegetable-based plastic material, which commonly uses cornstarch as a raw material. 
            PLA is the most commonly used plastic for 3D printers and if often the plastic of choice for myself. The monomer is 
            usually made from fermented plant starch. This material is a thermoplastic aliphatic polyester and it is the primary 
            natural raw material used in 3D printing. PLA is a fully biodegradable thermoplastic polymer consisting of renewable 
            raw materials. 
            </p>

            <img class="rounded mx-auto d-block" alter="Add PLA pic"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Educational;