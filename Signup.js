import { useState } from "react";
 
import { Link} from 'react-router-dom';

const Signup = () => {
    const [FullName, setFullName] = useState('');
    const [About, setAbout] = useState('');
    const [Qualification, setQualification] = useState('');
    const [Experience, setExperience] = useState('')
    const [Email, setEmail] = useState('')
    const [Phone, setPhone] = useState('')
    const [Password, setPassword] = useState('')
    const [Confirm, setConfirm] = useState('')
    const [Profilepic, setProfilepic] = useState(null)
    const [Imageurl,setImageurl] = useState(null)
    
    const filehandlder = (e) => {
        
        setProfilepic(e.target.files[0])
        setImageurl(URL.createObjectURL(e.target.files[0]))
    }

    const submithandler = (e) => {
        e.preventDefault();
        console.log(FullName, About, Qualification, Experience, Email, Phone, Password, Confirm)
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
                    <h2 style={{ color: "white", textAlign: "left" }}>Create Your Account</h2>
                    <input onChange={(e) => { setFullName(e.target.value) }} required placeholder="FullName"></input>
                    <textarea className="area" onChange={(e) => { setAbout(e.target.value) }} placeholder="About me..."></textarea>
                    <input onChange={(e) => { setQualification(e.target.value) }} required placeholder="Highest Qualification"></input>
                    <input onChange={(e) => { setExperience(e.target.value) }} required placeholder="Experience"></input>
                    <input onChange={(e) => { setEmail(e.target.value) }} required type="email" placeholder="Email"></input>
                    <input onChange={(e) => { setPhone(e.target.value) }} required type="number" placeholder="Phone"></input>
                    <input onChange={(e) => { setPassword(e.target.value) }} required type="password" placeholder="Password"></input>
                    <input onChange={(e) => { setConfirm(e.target.value) }} required type="password" placeholder="Confirm Password"></input>
                    {Password.length>0 && Confirm.length>0 && Confirm !== Password && <p className="error-msg">Password and confirm password not match</p>}
                    <input id="input-file" className="chhosefile" onChange={filehandlder} type="file" />
                    <div className="botom-nav">
                        <button onClick={()=>{document.getElementById("input-file").click()}} type="file">Upload Profile pic</button>
                        {Imageurl == null? <img alt="profilepic" src={require('../assets/image.png')} />
                       : <img alt="profilepic" src={Imageurl} />}
                    </div>
                      <button onClick={submithandler}  className="signup-btn" type="file" >submit</button>
                    <Link to={'/login'} className="link">I have already Account</Link>
                </form>
            </div>
        </div>
    )
}

export default Signup
