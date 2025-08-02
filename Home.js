import React from 'react'
import {ResponsiveContainer,BarChart,Bar,XAxis,YAxis} from 'recharts';

const Home = () => {
  const transferData = [
  { date: 'January', amount: 2000 },
  { date: 'Febuary', amount: 5000 },
  { date: 'March', amount: 3000 },
  { date: 'April', amount: 3000 },
  { date: 'May', amount: 3000 },
  { date: 'June', amount: 7000 },
  { date: 'Julay', amount: 1500 },
  { date: 'August', amount: 3000 },
  { date: 'Sept', amount: 6000 },
  { date: 'Oct', amount: 10000 },
  { date: 'Nov', amount: 9000 },
  { date: 'Dec', amount: 3000 },
];
  const course = [
    {
      id: 1,
      CourseName: 'Complete C++',
      Price: 2999,
      Discount: 10,
      Thambnail: 'https://courses.iid.org.in/public//uploads/media_manager/612.jpg',
      description: "<h2>course Details:-</h2><ul><li>this is full stack web develop ment</li></ul>"
    },
    {
      id: 2,
      CourseName: 'Python Zero to Hero',
      Price: 3999,
      Discount: 15,
      Thambnail: 'https://i.ytimg.com/vi/BO6LjtEOGZw/maxresdefault.jpg',
      description: "<p>Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together. Python's simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. Python supports modules and packages, which encourages program modularity and code reuse. The Python interpreter and the extensive standard library are available in source or binary form without charge for all major platforms, and can be freely distributed.</p><p>Often, programmers fall in love with Python because of the increased productivity it provides. Since there is no compilation step, the edit-test-debug cycle is incredibly fast. Debugging Python programs is easy: a bug or bad input will never cause a segmentation fault. Instead, when the interpreter discovers an error, it raises an exception. When the program doesn't catch the exception, the interpreter prints a stack trace. A source level debugger allows inspection of local and global variables, evaluation of arbitrary expressions, setting breakpoints, stepping through the code a line at a time, and so on. The debugger is written in Python itself, testifying to Python's introspective power. On the other hand, often the quickest way to debug a program is to add a few print statements to the source: the fast edit-test-debug cycle makes this simple approach very effective.</p>"
    },
    {
      id: 3,
      CourseName: 'JawaScript',
      Price: 5999,
      Discount: 10,
      Thambnail: 'https://newdev.io/images/blog/javascript-functions-for-beginners/thumbnail.webp',
      description: "<p>Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together. Python's simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. Python supports modules and packages, which encourages program modularity and code reuse. The Python interpreter and the extensive standard library are available in source or binary form without charge for all major platforms, and can be freely distributed.</p><p>Often, programmers fall in love with Python because of the increased productivity it provides. Since there is no compilation step, the edit-test-debug cycle is incredibly fast. Debugging Python programs is easy: a bug or bad input will never cause a segmentation fault. Instead, when the interpreter discovers an error, it raises an exception. When the program doesn't catch the exception, the interpreter prints a stack trace. A source level debugger allows inspection of local and global variables, evaluation of arbitrary expressions, setting breakpoints, stepping through the code a line at a time, and so on. The debugger is written in Python itself, testifying to Python's introspective power. On the other hand, often the quickest way to debug a program is to add a few print statements to the source: the fast edit-test-debug cycle makes this simple approach very effective.</p>"

    }];
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
        }   
    ]
 
  return (
    <div className='home-wrapper'>
      <div className='home-header'>
        <div className='box-1'>
          <img alt='pic' src={require('../assets/books.jpeg')} />
          <div className='course'>
            <h1>125</h1>
            <p>Courses</p>
          </div>
        </div>

        <div className='box-2'>
          <img alt='pho' src={require('../assets/profile.avif')} />
          <div className='students'>
            <h1>1256</h1>
            <p>Students</p>

          </div>
        </div>

        <div className='box-3'>
          <img alt='book' src={require('../assets/money.png')} />
          <div className='total'>
            <h1>122365</h1>
            <p>Total Transacition</p>
          </div>
        </div>
      </div>

      <div className='home-box'>
        <div className='chat-graph'>
          <ResponsiveContainer width="100%" aspect={2}>
            <BarChart data={transferData} width={600}height={1000}>
              <XAxis dataKey="date"/>
              <YAxis></YAxis>
              <Bar dataKey="amount" fill='royalblue'/>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className='home-content'>
          <div className='student-hm'>
            <table>
              <tbody>
                {
                   studentsList.map((student)=>{
                    return(
                        <tr key={student.id}>
                            <td><img alt='thamb' src={student.profilepic}></img></td>
                            <td>{student.FullName}</td>
                            <td>{student.phone}</td>
                             
                        </tr>
                    )
                })
                }
              </tbody>
            </table>
          </div>
          <div className='course-hm'>
            <table>
              <tbody>
                {
                  course.map((course) => {
                    return (
                      <tr key={course.id}>
                        <td><img alt='pic' src={course.Thambnail}></img></td>
                        <td>{course.CourseName}</td>
                        <td>{course.Price}</td>
                      </tr>
                    )
                  })
                }

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
