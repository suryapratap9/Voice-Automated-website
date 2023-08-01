import React from 'react'
import "./body.css"
import { Link,BrowserRouter,Route,Routes } from 'react-router-dom';
export default function Body() {
    return (
        
        <div className='body-parent'>
            <div className="box">
                <div className='button' onClick={
                    ()=>{
                        window.location.href = 'https://huggingface.co/spaces/remotewith/dented_final';
                    }
                }>
                    <h2 >Detect Crack/Dent</h2>
                </div>
            </div>
            <div className="box">
                <div className='button' onClick={
                    ()=>{
                        window.location.href = 'http://localhost:3000/contact';
                    }
                }>
                    <h2>Contact</h2>                    
                </div>
            </div>
            <div className="box">
                <div className='button' onClick={
                    ()=>{
                        window.location.href = 'http://localhost:3000/arch';
                    }
                }>
                    <h2>Design</h2>
                </div>
            </div>
            <div className="box">
                <div className='button' onClick={
                    ()=>{
                        window.location.href = 'http://localhost:3000/problem';
                    }
                }>
                    <h2>Problems</h2>
                </div>
            </div>
        </div>
    )
}
