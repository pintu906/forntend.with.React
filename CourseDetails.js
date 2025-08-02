import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const CourseDetails = () => {
    const { id } = useParams();
    const location = useLocation();
    const naviagte = useNavigate('');
    console.log(location.state)
    console.log(id)
    return (
        <div className='course-details-wrapper'>
            <div className='course-details'>
                <div className='cd-left-heading'>
                    <h2>Complete c++ programming</h2>
                    <p>Created At :-08/05/2025</p>
                    <div className='course-left-btn'>
                        <button className='edit-course'>Edit Course</button>
                        <button onClick={()=>{naviagte('/DashBoard/students-list/' +id)}} className='all-students'>View All Students</button>
                        <button className='delete-course'>Delete Course</button>
                    </div>
                    <div className='discount-price-box'>
                        <div className='price'>
                          <p>Price</p>
                           <h3>RS.{location.state.Price}</h3>
                        </div>
                        <div className='price'>
                           <p>Discount</p>
                           <h3>{location.state.Discount}%</h3>
                        </div>
                    </div>
                </div>
                <div className='cd-right-heading'>
                    <img className='cd-thamb' alt='cd-thambnail' src={location.state.Thambnail} />
                    <button onClick={()=>{naviagte('/DashBoard/contents/' +id)}} className='manage-content'>Manage Content</button>

                </div>
            </div>
            <div className='Description-box'>
                <h2 className='decription-heading'>Course Description</h2>
                <div className='description-details' dangerouslySetInnerHTML={{ __html: location.state.description }}>

                </div>

            </div>
        </div>
    )
}

export default CourseDetails
