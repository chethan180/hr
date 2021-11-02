import React from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {BrowserRouter as Router } from "react-router-dom";
import Leave from './Leave';
import Left from './Left';


const Status = () =>
{
    return(
        <Router>
        <main>
            <Left/>
            <Leave/>
        </main>
        </Router>
    );
}

export default Status;