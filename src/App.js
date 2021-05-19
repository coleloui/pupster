import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import About from './pages/About';
import Search from './pages/Search';
import Discover from './pages/Discover';
import Navbar from './components/Navbar.js'



function App() {
  return (
   <Router>
     <div>
       <Navbar />
       <Route exact path='/'>
         <About />
       </Route>
       <Route exact path='/about'>
         <About />
       </Route>
       <Route exact path='/search'>
         <Search />
       </Route>
       <Route exact path='/discover'>
         <Discover />
       </Route>
     </div>
   </Router>
  );
}

export default App;
