import React from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {BrowserRouter as Router } from "react-router-dom";
import Leave from './Leave';
import Left from './Left';
import  Leaveone  from './Leaveone';


const Status = () =>
{
    return(
        <Router>
        <main>
            <Left/>
            <Leave/>
            {/* <Leaveone/> */}
        </main>
        </Router>
    );
}

export default Status;