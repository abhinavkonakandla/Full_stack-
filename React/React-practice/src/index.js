//var react = require("react");
//var reactDOM = require("react-dom");

import react from "react";
import reactDom from "react-dom";
/*
reactDom.render(
  <div>
    <h1 id="head">My favorite fruits.</h1>
    <ul>
      <li>Banana</li>
      <li>Apple</li>
      <li>Guava</li>
    </ul>
  </div>,
  document.querySelector("#root")
);
*/
// The above code is a challenge to insert a h1 element and ul.
/*let age = 22;
let name = "Abhinav";
let lastName = "kumar";
reactDom.render(
  <div>
    <h1>My name is {name + " " + lastName}</h1>
    <p>age: {age}</p>
  </div>,
  document.querySelector("#root")
);*/

/*let myName = "Abhinav";
let currDate = new Date();
let year = currDate.getFullYear();
reactDom.render(
  <div>
    <p>Created by {myName}</p>
    <p>Copyright year {year}</p>
  </div>,
  document.querySelector("#root")
);*/
/*
reactDom.render(
  <div>
    <h1>my favourite foods</h1>
    <img
      className="img"
      src="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/DA2CE7B2-213D-47CD-BC65-8746BF251207/Derivates/ac919776-333a-491f-adeb-f584db66502f.jpg"
    />
    <img
      className="img"
      src="https://salasdaily.com/cdn/shop/products/VegFriedRice_460x@2x.jpg?v=1637640487"
    />
    <img
      className="img"
      src="https://www.allrecipes.com/thmb/SIgWrOI85-BlVbtGgUeew-77B7o=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/AR-141169-Easy-Indian-Butter-Chicken-DDMFS-4x3-beauty-588ff54d1e0f4a0788906e851e27d540.jpg"
    />
  </div>,
  document.querySelector("#root")
);
*/
/*
const customHeading = {
  color: "red",
  fontSize: "40px",
  border: "2px solid black",
  backgroundColor: "gray",
  color: "white",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  padding: "10px",
  margin: "5px 30px",
  borderRadius: "1rem",
  boxShadow: "2px 4px 0 0 black",
  fontFamily: "sans-serif",
};
reactDom.render(
  <div>
    <h1 style={customHeading}>Hi Abhinav</h1>
    <p>i'm trying out css styles.</p>
  </div>,
  document.querySelector(".item")
);
*/

/*
const Morning = {
  color: "red",
};
const Afternoon = {
  color: "red",
};
const evening = {
  color: "red",
};
const time = new Date();
const msg = time.getHours();
function getTime() {
  if (msg >= "1" && msg <= "12") {
    return (
      <h1 className="Morning" style={Morning}>
        Good Morning
      </h1>
    );
  } else if (msg > "12" && msg <= "18") {
    return <h1 style={Afternoon}>Good Afternoon</h1>;
  } else {
    return <h1 style={evening}>Good evening</h1>;
  }
}
reactDom.render(getTime(), document.querySelector("#root"));
*/
// This above code prints msg according to the time.
