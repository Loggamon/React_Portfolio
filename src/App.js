// import logo from "./logo.svg";
// import "./App.css";
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <p>Testing...</p>
//       </header>
//     </div>
//   );
// }
const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Footer />
    </React.Fragment>
  )
}

export default App;
