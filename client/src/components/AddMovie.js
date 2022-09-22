import React, {useState, useEffect, useContext} from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import axios from 'axios'

const MainDiv = styled.div`
    display:flex;
    justify-content:center;
`
const FormDiv = styled.div`
    width: 40%;
    height: auto;
    margin-top: 5%;

`


const AddMovie = () =>{
    const [values, setValues] = useState({title:''})

    const handleSubmit = async (e) => {
    e.preventDefault();

    const { title } = values;
    const inputMovie = {title};

    await axios.post('http://localhost:5867/add_movie', inputMovie);        
    };

    const handleChange = title => e => {
        setValues({ [title]: e.target.value });
    };
    return (
        <MainDiv>
            <FormDiv>
                <h3>Add a New Movie</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                        value={values.title}
                        onChange={handleChange('title')}
                        type="text"
                        className="form-control"
                        placeholder="New Movie Title"
                        />
                        <input type="submit" value="Add to Library" />
                    </div>
                </form>
            </FormDiv>
        </MainDiv>
    )
    }


export default AddMovie;

// const handleChange = name => e => {
//     setValues({ ...values, [name]: e.target.value });
// };

// const showLoading = () => (loading ? <div className="alert alert-info">Loading...</div> : '');

// const signupForm = () => {
//     return (
//         <form onSubmit={handleSubmit}>
//             <div className="form-group">
//                 <input
//                     value={values.username}
//                     onChange={handleChange('username')}
//                     type="text"
//                     className="form-control"
//                     placeholder="Type your username"
//                 />
//             </div>