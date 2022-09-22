import Axios from "axios";
import React, { useState } from "react";
import styled from 'styled-components'
import Form from 'react-bootstrap/Form';

const MainDiv = styled.div`
    display:flex;
    justify-content:center;
`
const FormDiv = styled.div`
    width: 40%;
    height: auto;
    margin-top: 5%;

`
// const Form = styled.form`
//     width: 100%;
//     height: auto;
//     border-radius: 10%;

// `

export default function App() {

    const [title, setTitle] = useState("");
    const [deleteStatus, setDeleteStatus] = useState("");

    const updatePostId = (e) => setTitle(e.target.value);
    const deleteMovie = async (e) => {
        e.preventDefault();
        try {
            await Axios.delete(`http://localhost:5867/movie/${title}`);
            setDeleteStatus("Post successfully deleted");
            setTimeout(() => setDeleteStatus(""), 3000);
        } catch (err) {
            setDeleteStatus("Post deletion failed");
        }
    };
    return (
        <MainDiv>
            <FormDiv>
                <h1>Enter a Movie Title to be Removed</h1>
                <form onSubmit={deleteMovie}>
                    <div className= 'form-group'>
                    <input onChange={updatePostId} value={title} placeholder='Movie Title...' />
                    <input type="submit" value="Delete from Library" />
                    </div>
                </form>
                {deleteStatus && <p>{deleteStatus}</p>}
            </FormDiv>
        </MainDiv>
    );
}