import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
    
     
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const navigate = useNavigate(); 
    const submithandler = (e)=> {
         e.preventDefault();
        console.log(Email,Password)
    }
    return (
        <div className="signup-wrapper">
            <div className="signup-dash">
                <div className="signup-dash-left">
                    <img alt="books" src={require("../assets/books.jpeg")}></img>
                    <div className="left-text">
                        <h1>SBS ONLINE CLASSES</h1>
                        <p>Learn About this course....</p>
                    </div>
                </div>
                <form onSubmit={submithandler} className="signup-dash-right">
                    <h2 style={{ color: "white", textAlign: "left"}}>Login Your Account</h2> 
                    <input onChange={(e) => { setEmail(e.target.value) }} required type="email" placeholder="Email"></input>
                    <input onChange={(e) => { setPassword(e.target.value) }} required type="password" placeholder="Password"></input>
                    <button onClick={()=>{navigate('/DashBoard')}} className="signup-btn">submit</button>
                    <Link to={'/signup'} className="link">I have no Account</Link>
                </form>
            </div>
        </div>
    )
}

export default Login;
