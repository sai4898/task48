import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



import './App.css';
import Sidebar from './pages/Sidebar';
import Home from './pages/Home';
import Navbar from './components/Navbar'
import ContactForm from './pages/ContactForm'
import LineGraph from './pages/LineGraph'
import EditUser from './pages/EditUser';
import Mains from './pages/Mains';


const App = () => {

 
  return (
    <div >
      <BrowserRouter>
      <Navbar />
        <div className="sai">
         <div className='doddi'>
            <Sidebar />

         </div>
      
         
          <div
            // className={
            //   activeMenu
            //     ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
            //     : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            // }
          >
            {/* <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div> */}
            <div className='kumar'>
             

              <Routes>
                {/* dashboard  */}
               
                <Route path="/" element={<Home />} />
                <Route path="/form" element={<ContactForm />} />
                <Route path="/contact" element={<Mains />} />
                <Route path="/edit/:id" element={<EditUser />} />



              </Routes>
            </div>
          
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;