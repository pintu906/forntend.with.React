import React from 'react'

const StudentProfile = () => {
    const student = {
        personalDetails: {
            name: 'pintu kumar',
            email: 'pk@gmail.com',
            phone: '91+ 9065335807',
            dob: '02-02-2003',
            profilepic: 'https://play-lh.googleusercontent.com/vco-LT_M58j9DIAxlS1Cv9uvzbRhB6cYIZJS7ocZksWRqoEPat_QXb6fVFi77lciJZQ=w526-h296-rw'
        },
        address: {
            at: 'Barki Pona',
            city: 'Ramgarh',
            dist: 'Ramgarh',
            state: 'Jharkhand',
            country: 'indida',
            pin: '825101'
        },
        eduction: {
            qualification: 'IIT',
            unversity: 'IIT madras',
            state: 'Tamil Nadu',
            skill:'Web Development',
            country: "india"
        }
    }
    return (
        <div className='dp-wrappwer'>
            <div className='sp-header'>
                <img alt='profile' src={student.personalDetails.profilepic} />
                <div className='sp-text-AREA'>
                    <h1> {student.personalDetails.name}</h1>
                    <p>D.O.B :- {student.personalDetails.dob}</p>
                    <p>Email :- {student.personalDetails.email}</p>
                    <p>Phone :- {student.personalDetails.phone}</p>
                </div>

            </div>
           <div className='adress-education-box'>
             <div className='addrress-box'>
                <h2>Address</h2>
                <p>At :- {student.address.at}</p>
                <p>City :- {student.address.city}</p>
                <p>Dict :- {student.address.dist}</p>
                <p>State :- {student.address.state}</p>
                <p>Country :- {student.address.country}</p>
                <p>Pin :- {student.address.pin}</p>
            </div>
            <div className='education-box'>
                <h2>Education</h2>
                <p>qualification :- {student.eduction.qualification}</p>
                <p>Collage/Unversity :- {student.eduction.unversity}</p>
                <p>State :- {student.eduction.state}</p>
                <p>Country :- {student.eduction.country}</p>
                <p>Skill :- {student.eduction.skill}</p>

            </div>
           </div>

        </div>
    )
}

export default StudentProfile
