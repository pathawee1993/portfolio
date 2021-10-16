// import { useState } from 'react'
// import logo from './logo.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Hello Vite + React!</p>
//         <p>
//           <button type="button" onClick={() => setCount((count) => count + 1)}>
//             count is: {count}
//           </button>
//         </p>
//         <p>
//           Edit <code>App.jsx</code> and save to test HMR updates.
//         </p>
//         <p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//           {' | '}
//           <a
//             className="App-link"
//             href="https://vitejs.dev/guide/features.html"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Vite Docs
//           </a>
//         </p>
//       </header>
//     </div>
//   )
// }

// export default App

import './App.css';
import NavBar from './components/NavBar'

// Contents
import Home from'./contents/Home'
import About from'./contents/About'
import Education from'./contents/Education'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Skills from './contents/Skills';
import Contact from './contents/Contact';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/showcase'>
          <About />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/education'>
          <Education />
        </Route>
        <Route exact path='/skills'>
          <Skills />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
      </div>
    </Router>
  );
}

export default App;
