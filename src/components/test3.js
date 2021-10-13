import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './test3.css'


const Container = styled.div`
    
    width: 100%;
    height: 1000px;
    min-width: 1300px;
    background: gray;
    margin: auto;
`

const Wrapper = styled.div`
    width: 50%;
    height: 100px;
    background: white;
    float: left;
    background: skyblue;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        width: 50px;
        height: 70px;
        position: relative;
        top: -5px;
    }
    
`

const Wrapper2 = styled.div`
    width: 50%;
    height: 100px;
    background: white;
    float: left;
    background: green;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
        width: 50px;
        height: 70px;
        position: relative;
        top: -10px;
    }
`




function Test3() {
    return(
        <Container>
            <Wrapper>
                <div className='inputWrapper'>
                    <div>
                        <label  for='col'>col</label>
                        <input  id='col' ></input>
                    </div> 
                    <div>
                        <label  for='row'>row</label>
                        <input  id='row'></input>
                    </div>
                    
                </div>
                <button>책상생성</button> 
                
                
            </Wrapper>
            <Wrapper2>
                <div className='inputWrapper2'>
                    <div className='numberInput'>
                        <label for='start'>시작번호</label>
                        <input id='start'></input>
                        ~
                        <label for='end'>끝번호</label>
                        <input id='end'></input>
                    </div>
                    <div>
                        <label for='ex'>제외번호</label>
                        <input id='ex'></input>
                    </div>
                </div>
                <button>번호생성</button>
            </Wrapper2>
        </Container>
    )
}

export default Test3