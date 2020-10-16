import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Home from './Pages/Home/Home';
import Events from './Pages/Events/Events';
import Team from './Pages/Team/Team';
import Sponsors from './Pages/Sponsors/Sponsors';
import Contact from './Pages/Contact/Contact';
import ParticlesBackground from "./ParticlesBackground/ParticlesBackground";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    return (
    <Router>
    <div className="app-container">
        <Navbar />
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/evenimente' component={Events}/>
            <Route path='/echipa' component={Team} />
            <Route path='/sponsori' component={Sponsors}/>
            <Route path='/contact' component={Contact}/>
        </Switch>
        <Footer />
        <ParticlesBackground />
        <script src="three.r119.min.js"></script>
    </div>
    </Router>);
}

export default App;