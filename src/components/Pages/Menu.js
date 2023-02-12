import React from 'react'
import { Link } from "react-router-dom";

const Menu = () => {
  const textStyle = {
        textAlign: "center",
        fontSize: "40px",
    }
    const linkStyle = {
        color:  "black",
        fontSize: "40px",
    }
    return (
        <>
            <h1 style={textStyle}>This "Menu" page is wok in progress.</h1>
            <p style={textStyle}>Maybe next week will be done the <Link to="/Menu" style={linkStyle}>Menu</Link> page to book a table.</p>
        </>
    );
}

export default Menu