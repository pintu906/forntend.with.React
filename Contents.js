import { isVisible } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'

const Contents = () => {
  const [isVisibile,setVisibile] = useState(false)
  const contents = [
    {
      id: 1,
      title: 'Lecture 1',
      decription: 'Introduction to MERN Stack Development',
      thambnails: 'https://i.ytimg.com/vi/ruQb8jzkGyQ/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBOZKJ97hkDPES_b8R2WFemxgKhDQ'
    },
    {
      id: 2,
      title: 'Lecture 2',
      decription: 'Introduction to MERN Stack Development',
      thambnails: 'https://i.ytimg.com/vi/ruQb8jzkGyQ/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBOZKJ97hkDPES_b8R2WFemxgKhDQ'
    },
    {
      id: 3,
      title: 'Lecture 3',
      decription: 'Introduction to MERN Stack Development',
      thambnails: 'https://i.ytimg.com/vi/ruQb8jzkGyQ/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBOZKJ97hkDPES_b8R2WFemxgKhDQ'

    },
    {
      id: 4,
      title: 'Lecture 4',
      decription: 'Introduction to MERN Stack Development',
      thambnails: 'https://i.ytimg.com/vi/ruQb8jzkGyQ/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBOZKJ97hkDPES_b8R2WFemxgKhDQ'

    },
    {
      id: 5,
      title: 'Lecture 5',
      decription: 'Introduction to MERN Stack Development',
      thambnails: 'https://i.ytimg.com/vi/ruQb8jzkGyQ/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBOZKJ97hkDPES_b8R2WFemxgKhDQ'

    },
    {
      id: 6,
      title: 'Lecture 6',
      decription: 'Introduction to MERN Stack Development',
      thambnails: 'https://i.ytimg.com/vi/ruQb8jzkGyQ/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBOZKJ97hkDPES_b8R2WFemxgKhDQ'

    },
    {
      id: 7,
      title: 'Lecture 7',
      decription: 'Introduction to MERN Stack Development',
      thambnails: 'https://i.ytimg.com/vi/ruQb8jzkGyQ/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBOZKJ97hkDPES_b8R2WFemxgKhDQ'

    },
    {
      id: 8,
      title: 'Lecture 8',
      decription: 'Introduction to MERN Stack Development',
      thambnails: 'https://i.ytimg.com/vi/ruQb8jzkGyQ/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBOZKJ97hkDPES_b8R2WFemxgKhDQ'

    },
  ]
  return (
    <div className='contents-wrapper'>
      <div className='content-header'>
        <h1>MERN Stack Development</h1>
       {!isVisibile  && <button onClick={()=>{setVisibile(true)}}>Upload Content</button>}
      </div>
     {isVisibile  && <form className='add-Course-form' style={{ width: '95%', height: '200px',marginLeft:'30px',marginBottom:'20px' }}>
        <input placeholder='video Title'></input>
        <textarea style={{ height: '40px' }} placeholder='Decription'></textarea>
        <input type='file'></input>
        <div className='submit-close'>
          <button style={{ backgroundColor: 'royalblue' }} type='submit'>Submit</button>
          <button onClick={()=>{setVisibile(false)}} style={{ backgroundColor: 'red' }} >Close</button>
        </div>
      </form>}

      <div className='content-dash'>
        {
          contents.map((video) => {
            return (
              <div className='video-contents' key={video.id}>
                <img alt='thambnails' src={video.thambnails}></img>
                <div className='title-drecription'>
                  <h3>{video.title}</h3>
                  <p>{video.decription}</p>
                </div>
                <div className='edit-delete'>
                  <button style={{ backgroundColor: 'royalblue' }}>Edit</button>
                  <button style={{ backgroundColor: 'red' }}>Delete</button>
                </div>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Contents
