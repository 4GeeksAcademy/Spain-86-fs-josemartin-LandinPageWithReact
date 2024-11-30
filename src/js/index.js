//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from 'react'

// include your styles into the webpack bundle
import "../styles/navbar.css";
import "../styles/pictures.css";
import "../styles/card.css";

//import your own components
import Navbar from "./component/navbar.jsx";
import Pictures from "./component/pictures.jsx";
import Card from "./component/card.jsx";

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(
    <StrictMode>
        <Navbar />
        <Pictures />
        <Card />
    </StrictMode>,
  )


