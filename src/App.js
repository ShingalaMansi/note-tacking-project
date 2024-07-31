// // import logo from './logo.svg';
// import './App.css';
// import Navbar from './component/Navbar';
// import Form from './component/Form';
// import About from './component/About';
// import React, { useState } from 'react';
// import Alert from './component/alert';
// // import TextForm from './component/TextForm';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// // let name = "Mansi";
// function App() {
//   const [mode,setmode] = useState('light');
//   const [alert,setalert] = useState(null);
//   const [color,setcolor] = useState(null);

//   const colorPicker =(blue)=>{
//       setcolor(blue);
//       document.body.style.backgroundColor=blue;
//   }

//   const showAlert =(message, type)=>{
//     setalert({
//       msg : message,
//       type: type
//     })
//     setTimeout(()=>{
//       setalert(null)
//     },3000)
//   }

//   const togglemode = () => {
//     if(mode === 'light'){
//       setmode('dark');
//       document.body.style.backgroundColor = 'grey';
//       showAlert("Dark mode has been enabled","success");
//     }else{
//       setmode('light');
//       document.body.style.backgroundColor = 'White';
//       showAlert("Light mode has been enabled","success");
//     }
//   }

//   return (
//     <>
//       {/* <nav>
//         <li>Home</li>
//         <li>About</li>
//         <li>Contact</li>
//       </nav>

//       <img src="" alt=""></img>

//       <div classNameName='container'>
//         <h1>Hello {name}</h1>
//         <p>Lorem ipsum</p>
//       </div> */}
//   <Router>
//       {/* <Navbar title="Text Utils"  abouttext="About Textutils" /> */}
//       <Navbar title="TextUtils" mode={mode} togglemode={togglemode} color={color} colorPicker={colorPicker}/>
//       {/* <Navbar/> */}
//       <Alert alert={alert}/>
//       <div className="container mt-3">
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/">
//             <Form showAlert={showAlert} heading="Enter the text to anlyze" mode={mode}/>
//           </Route>
//         </Switch>
//       </div>
//     </Router>

//       {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="/">Navbar</a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="/">Home</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="/">About</a>
//               </li>
//             </ul>
//             <form className="d-flex" role="search">
//               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//               <button className="btn btn-outline-success" type="submit">Search</button>
//             </form>
//           </div>
//         </div>
//       </nav> */}
//     </>
//   );
// }

// export default App;


import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Form from './component/Form';
// import About from './component/About';
import Alert from './component/alert';
import './App.css';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState(null);

  const colorPicker = (blue) => {
    setColor(blue);
    document.body.style.backgroundColor = blue;
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    console.log(mode);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert('Dark mode has been enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    }
  };

  return (
    <>
    // <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} color={color} colorPicker={colorPicker} />
      <Alert alert={alert} />
      <div className="container mt-3">
        {/* <Routes> */}
          {/* <Route exact path="/about" element={<About />} /> */}
          {/* <Route path="/" element={<Form showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} /> */}
        {/* </Routes> */}
        <Form showAlert={showAlert} heading="Enter the text to anlyze" mode={mode}/>
      </div>
    // </Router>
    </>
  );
}

export default App;
