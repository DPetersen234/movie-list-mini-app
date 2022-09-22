import React, {useState, useEffect, useContext} from 'react';
import { MainContext } from '../App';
import styled from 'styled-components'

const MainDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%
    height: 100vh;
    justify-content: center;
    text-align: center;
    

`
const Card = styled.div`
    display:flex;
    flex-direction:column;
    width: 250px;
    height: 250px;
    text-align: center;
    justify-content: center;
    margin: 10px;
    border: 1px solid black;
    border-radius: 10%;
    
    &:hover{
        transform: scale(1.1);
    }
`
const TitleDiv = styled.div`
    width: 250px;
    height: 50px;
    text-align: center;
    border-bottom:1px solid red;
`
const DescDiv = styled.div`
    width: 225px;
    height: 25px;
    text-align: center;
    justify-content:center;
    padding-top:20px;
`

const MovieResult = () =>{
    const{url, movies, setUrl, setMovies} = useContext(MainContext)
    useEffect (()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setMovies(data))
      }, [])

      return(
        <MainDiv>
            {movies.map((entry) =>{
                return (
                    <Card>
                        <TitleDiv><h4>{entry.title}</h4></TitleDiv>
                        <DescDiv><h4>{entry.description}</h4></DescDiv>
                        
                    </Card>
                )
            })}
        </MainDiv>
      )
}

export default MovieResult;