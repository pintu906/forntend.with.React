import React from 'react'
import { useNavigate } from 'react-router-dom'

const Studentlist = () => {
    const naviagte =useNavigate('')
    const studentsList = [
        {
            id:1,
            FullName:"pintu kumar",
            phone:'9065335807',
            email:'pk@gmail.com',
            profilepic:'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAzL2ZyZWVpbWFnZXNjb21wYW55X3Bob3RvX29mX3lvdW5nX2luZGlhbl9naXJsX2hvbGRpbmdfc3R1ZGVudF9iYV8zN2QyNjU4Yi0yOWIwLTQyZmQtODhmYy04OGU3ZTcxYmVlNDcucG5n.png'
        },
         {
            id:2,
            FullName:"komal kumari",
            phone:'6453212257',
            email:'kk@gmail.com',
            profilepic:'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAzL2ZyZWVpbWFnZXNjb21wYW55X3Bob3RvX29mX3lvdW5nX2luZGlhbl9naXJsX2hvbGRpbmdfc3R1ZGVudF9iYV8zN2QyNjU4Yi0yOWIwLTQyZmQtODhmYy04OGU3ZTcxYmVlNDcucG5n.png'
        },
         {
            id:3,
            FullName:"ritesh kumar",
            phone:'9065335807',
            email:'pk@gmail.com',
            profilepic:'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAzL2ZyZWVpbWFnZXNjb21wYW55X3Bob3RvX29mX3lvdW5nX2luZGlhbl9naXJsX2hvbGRpbmdfc3R1ZGVudF9iYV8zN2QyNjU4Yi0yOWIwLTQyZmQtODhmYy04OGU3ZTcxYmVlNDcucG5n.png'
        },
         {
            id:4,
            FullName:"pappu kumar",
            phone:'9065335807',
            email:'pk@gmail.com',
            profilepic:'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAzL2ZyZWVpbWFnZXNjb21wYW55X3Bob3RvX29mX3lvdW5nX2luZGlhbl9naXJsX2hvbGRpbmdfc3R1ZGVudF9iYV8zN2QyNjU4Yi0yOWIwLTQyZmQtODhmYy04OGU3ZTcxYmVlNDcucG5n.png'
        },
         {
            id:5,
            FullName:"ankit kumar",
            phone:'9065335807',
            email:'pk@gmail.com',
            profilepic:'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAzL2ZyZWVpbWFnZXNjb21wYW55X3Bob3RvX29mX3lvdW5nX2luZGlhbl9naXJsX2hvbGRpbmdfc3R1ZGVudF9iYV8zN2QyNjU4Yi0yOWIwLTQyZmQtODhmYy04OGU3ZTcxYmVlNDcucG5n.png'
        },
         {
            id:6,
            FullName:"nitish kumar",
            phone:'9065335807',
            email:'pk@gmail.com',
            profilepic:'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAzL2ZyZWVpbWFnZXNjb21wYW55X3Bob3RvX29mX3lvdW5nX2luZGlhbl9naXJsX2hvbGRpbmdfc3R1ZGVudF9iYV8zN2QyNjU4Yi0yOWIwLTQyZmQtODhmYy04OGU3ZTcxYmVlNDcucG5n.png'
        },
         {
            id:7,
            FullName:"Taposh kumar",
            phone:'9065335807',
            email:'pk@gmail.com',
            profilepic:'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAzL2ZyZWVpbWFnZXNjb21wYW55X3Bob3RvX29mX3lvdW5nX2luZGlhbl9naXJsX2hvbGRpbmdfc3R1ZGVudF9iYV8zN2QyNjU4Yi0yOWIwLTQyZmQtODhmYy04OGU3ZTcxYmVlNDcucG5n.png'
        },
         {
            id:8,
            FullName:"rahul kumar",
            phone:'9065335807',
            email:'pk@gmail.com',
            profilepic:'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAzL2ZyZWVpbWFnZXNjb21wYW55X3Bob3RvX29mX3lvdW5nX2luZGlhbl9naXJsX2hvbGRpbmdfc3R1ZGVudF9iYV8zN2QyNjU4Yi0yOWIwLTQyZmQtODhmYy04OGU3ZTcxYmVlNDcucG5n.png'
        }
    ]
  return (
    <div className='student-list-wrapper'>
   <input className='search-box' placeholder='Search srudents list'></input>
   <div className='sl-box'>
    <table>
        <thead>
             <tr>
                <th>Profile Pic</th>
                <th>FullName</th>
                <th>phone</th>
                <th>Details</th>
                <th>Edit</th>
                <th>delete</th>
             </tr>
        </thead>
        <tbody>
            {
                studentsList.map((student)=>{
                    return(
                        <tr key={student.id}>
                            <td><img alt='thamb' src={student.profilepic}></img></td>
                            <td>{student.FullName}</td>
                            <td>{student.phone}</td>
                            <td><button className='sl-view' onClick={()=>{naviagte('/DashBoard/student-profile/' + student.id)}}>View Details</button></td>
                            <td><button className='sl-edit'>Edit</button></td>
                            <td><button className='sl-delete'>Delete</button></td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>

   </div>
    </div>
  )
}

export default Studentlist
