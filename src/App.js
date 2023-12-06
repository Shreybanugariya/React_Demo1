// /* eslint-disable jsx-a11y/anchor-is-valid */
// import { useState } from 'react';
// import './App.css';
// import About from './components/About';
// import Navbar from './components/Navbar';
// import TextForms from './components/TextForms';
// import Alerts from './components/Alerts';
// import React from 'react'
// import {
//     Routes,
//     Route,
// } from "react-router-dom";;

// function App() {
//   const [mode, setmode] = useState('light')
//   const toggleMode = () => {
//      if(mode === 'light') {
//       setmode('dark')
//       document.body.style.backgroundColor = '#001d3a'
//     }
//      else { setmode('light'); document.body.style.backgroundColor = 'white' }
//   }

//   return (
//     <>
//       <Navbar mode={mode} toggleMode={toggleMode}/>
//       <Alerts message='Welcome, Add and Check yout TODOs' />
//       <div className='container my-3'>
//       <Routes>
//           <Route path='/about' element={<About />}></Route>
//           <Route path='/' > <TextForms heading = "Enter Your Thoughts" mode={mode}/> </Route>
//       </Routes>
//       </div>
//     </>
//   );
// }

// export default App;


/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
// import Alerts from './components/Alerts';
import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  const toggleMode = () => {
     if(mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#001d3a'
    }
     else { setmode('light'); document.body.style.backgroundColor = 'white' }
  }

  // const guide = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Navbar mode={mode} toggleMode={toggleMode}/> ,
  //     element: <TextForms heading = "Enter Your Thoughts" mode={mode}/>,
  //     children: [
  //       { path: "/about", element: <About /> },
  //       { path: "/todos", element: <TextForms heading = "Enter Your Thoughts" mode={mode}/>},
  //     ]
  //   }
  // ]);
  return (
    <>
      {/* <RouterProvider router={guide} /> */}
          <BrowserRouter>
            <Navbar mode={mode} toggleMode={toggleMode}/> 
            <Routes>
              {/* <Route path="/" element={<Navbar mode={mode} toggleMode={toggleMode} />}> */}
              {/* </Route> */}
              <Route exact path="/about" element={<About />} />
              <Route exact path="/todos" element={<TextForms heading="Enter Your Thoughts" mode={mode} />} />
            </Routes>
          </BrowserRouter>
    </>
  );
}

export default App;
