import React, { Component } from 'react';

const  Search = (props)=>{
        const {handleChange ,handleSubmit ,search } = props;

        return <div className = "Container">
                <div className = "row ">
                    <div className = "col-10 mx-auto col-md-8 mt-5 text-center">
                        <h1 className = "text-slanted text-capitalize">
                            search details with {" "}<strong className = "text-orange" >Employee Id</strong>
                        </h1>
                        <form className = "mt-4 ">
                            <div className= "input-group">
                                <input type = "text" name = "search" className = "form-control form-control-lg" placeholder = "type" value = {search} onChange = {handleChange} />
                                <div className = "input-group-append">
                                    <button type = "submit" onClick = {handleSubmit} className = "input-group-text bg-primary text-white">
                                        <i className = "fas fa-search"/>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
} 

export default Search;