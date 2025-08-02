import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
 

const Addcource = () => {
  const [value, setValue] = useState('');
  const [Imageurl, setImageurl] = useState(null)
  const [CourseName, setCourseName] = useState('');
  const [Price, setPrice] = useState('');
  const [Discount, setDiscount] = useState('');
    
  // const [Profilepic, setProfilepic] = useState(null)
  const filehandlder = (e) => {

    // setProfilepic(e.target.files[0])
    setImageurl(URL.createObjectURL(e.target.files[0]))
  }
  const submithandler = (e) => {
    e.preventDefault();
    console.log(CourseName, Price, Discount, value)
  }
  return (
    <div className='add-Course-wrapper'>
      <form onSubmit={submithandler} className='add-Course-form'>
        <input onChange={(e) => { setCourseName(e.target.value) }} placeholder='Course Name'></input>
        <input onChange={(e) => { setPrice(e.target.value) }} placeholder='Price' />
        <input onChange={(e) => { setDiscount(e.target.value) }} placeholder='Discount %' />
        <ReactQuill theme="snow" value={value} onChange={setValue} />
        <br />
        <input id="input-file" className="chhosefile" onChange={filehandlder} type="file" />
        <div className="thmab-nav">
          <button onClick={() => { document.getElementById("input-file").click() }} type="file">Upload Thambnail</button>
          {/* {Imageurl == null? <img className='thamb-nail' alt="profilepic" src={require('../assets/image.png')} />
                       : <img alt="profilepic" src={Imageurl} />} */}
          {Imageurl && <img className='thamb-nail' alt="profilepic" src={Imageurl} />}
        </div>
        {<button onClick={submithandler} type='submit'>Add Course</button>}
      </form>

    </div>
  )
}

export default Addcource;
