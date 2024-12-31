import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Login from './authentication/login';
import Signup from './authentication/signup';
import AddProject from './admin/addproject';
import FetchProjects from './admin/fetchproject';
import Home from './page/home';

import Footer from './components/footer';
import Projects from './page/project';
import ContactUs from './page/contact';
import AboutUs from './page/about';
import FetchFeedback from './admin/fetchfeedback';
import Admin from './page/admin';

import Headerpage from './components/headerpage';
import AdminHeaderpage from './components/adminheader';






function App() {
  return (
    
    <div >

            <Router>
                     
                <Routes>
            
                
                    
                    <Route path='/login'  element ={<Login/>}/>
                    <Route path='/signup'  element ={<Signup/>}/>
                    <Route path='/addproject'  element ={<AddProject/>}/>
                    <Route path='/fetchproject'  element ={<FetchProjects/>}/>
                    <Route path='/'  element ={<Home/>}/>
                    
                    <Route path='/footer'  element ={<Footer/>}/>
                    <Route path='/project'  element ={<Projects/>}/>
                    <Route path='/contact'  element ={<ContactUs/>}/>
                    <Route path='/about'  element ={<AboutUs/>}/>
                    <Route path='/fetchfeedback'  element ={<FetchFeedback/>}/>
                    <Route path='/admin'  element ={<Admin/>}/>
                    <Route path='/adminheader'  element ={<AdminHeaderpage/>}/>
                    <Route path='/headerpage'  element ={<Headerpage/>}/>

                    
                    

                  
                </Routes>
                
            
            </Router>

    </div>

    

    
  )
}

export default App
