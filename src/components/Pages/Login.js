import React from 'react'
import {Link} from 'react-router-dom'
const Login = () => {
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
            <h1 style={textStyle}>This "Login" page is work in progress.</h1>
            <p style={textStyle}>Maybe next week will be done the <Link to="/Login" style={linkStyle}>Login</Link> page to book a table.</p>
        </>
    )
}

export default Login