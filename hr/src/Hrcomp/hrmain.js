import 'bootstrap/dist/css/bootstrap.min.css';

import React , {Component, useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Result from './result'
import { getHrPosts } from '../actions/crud';
// import RecipieList from './RecipieList';
// import Search from './search';
import Search from './search';
// import {recipieData} from './Export'

const {REACT_APP_APIKEY} = process.env;

// class Recipies extends Component
const Recipies = () =>
{
    // constructor(props){
    //     super(props);
    //     this.getRecipies = this.getRecipies.bind(this);
    // }
    // state = {
    //     recipies:[],
    //     loading :true,
    //     search:'',
    //     url : `https://api.spoonacular.com/recipes/complexSearch?apiKey=${REACT_APP_APIKEY}&query=`,
    //     base_url : `https://api.spoonacular.com/recipes/complexSearch?apiKey=${REACT_APP_APIKEY}&query=`,
    // };
    const dispatch = useDispatch();
    const [recipies,setRecipies] = useState([]);
    const [loading,setLoading] = useState(true);
    const [ search,setSearch] = useState('');
    

    const getRecipies  = async() =>{
        try {
            const hi = {Emp_Id : search};
            dispatch(getHrPosts(hi));
            // const data = await fetch(this.state.url);
            // console.log(this.state.url);
            // const jsondata = await data.json();
            // console.log(jsondata);
            // this.setState({
            //     recipies:jsondata.results,
            // })
            console.log(search);
        }
        catch(error){
            console.log(error);
        }
    }

    // componentDidMount(){
    //     this.getRecipies();
    // }


    const hello = useSelector((state) => state.crud.data);
    console.log(hello);

    useEffect(() => {
        if(hello){
            setLoading(false);
        }
    },[hello]);

    const handleChange = (e) =>{
        // this.setState({
        //     search:e.target.value
        // });
        setSearch(e.target.value);
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        // const {base_url, search} = this.state;
        // history.pushState({search} , '' , url);
        console.log("search :" , search);
        getRecipies();
        setSearch("");
        // this.setState (
        //     {
        //         url:`${base_url}${search}`,
        //         search : "",
        //     },
        //     () => this.getRecipies()
        // )
    }
        if(loading ){
            return(
                <Search
                search = {search}
                handleChange = {handleChange}
                handleSubmit = {handleSubmit} 
            />
            //     <div className = "contatiner">
            //         <div className = "row">
            //             <div className = "col-10 mx-auto col-md-6 my-3">
            //                 <h2 className = "text-uppercase text-orange text-center">
            //                     Loading recipie 
            //                 </h2>
            //             </div>
            //         </div>
            //     </div>
            );

        }
        else if(hello){
            return(
                <>
                    <Search
                        search = {search}
                        handleChange = {handleChange}
                        handleSubmit = {handleSubmit} 
                    />

                    <Result edata = {hello}/>
                    

                    {/* <RecipieList recipies = {this.state.recipies}/> */}
                </>
            );
        }
    };

export default Recipies;