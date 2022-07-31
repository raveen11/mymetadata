import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { Helmet } from 'react-helmet'

const Home = () => (
  <div>
    <h2>Home</h2>
    <Helmet>
      <title>Hello title</title>
               <meta name="description" content="Lorem ipsum dolor sit amet" />
 </Helmet>
    <p>
      This is the home page!
    </p>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
    <p>
      This is the about page!
    </p>
  </div>
)

const Contact = ({ match }) => (
  <div>
    <h2>Contact</h2>
    <p>
      This is the contact us page!
    </p>
  </div>
)

const App = () => (
  // <Router>
  //   <div>
  //     <ul>
  //       <li><Link to="/">Home</Link></li>
  //       <li><Link to="/about">About</Link></li>
  //       <li><Link to="/contact">Contact</Link></li>
  //     </ul>

  //     <hr/>

  //     <Route exact path="/" component={Home}/>
  //     <Route path="/about" component={About}/>
  //     <Route path="/contact" component={Contact}/>
  //   </div>
  // </Router>
  <div>Hello</div>
)
export default App;