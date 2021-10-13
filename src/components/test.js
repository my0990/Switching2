import React,{useState, useEffect, useRef, forwardRef, useImperativeHandle} from 'react';
import styled from 'styled-components';
import {useTransition, animated, useSpring, to , useSpringRef} from 'react-spring'
import { Link } from 'react-router-dom';
import {Button,Modal} from 'react-bootstrap';
import { style } from 'dom-helpers';
import useMeasure from 'react-use-measure';
import DeskInput from './deskInput';
// 모달창 테스트
const Container = styled.div`
    display: flex;
    height: 500px;
    justify-content: center;
    align-items: center;
    cursor: pointer;

`

const pages = [
  ({style}) => <div className='item2'>2</div>,
  ({style}) => <div className='item2'>2</div>,
  ({style}) => <div className='item3'>3</div>,
]




function Test(){
  const [index,set] = useState(0)
  const transition = useTransition(index,{
    from: {x: 100 , opacity: 0, position: 'absolute'},
    enter: {x: 0, opacity: 1},
    leave: {x: -100, opacity: 0}
  })



  return (
  <Container>
    {transition((style,item)=>{
      const Page = pages[item]
      return (
      <animated.div style={style} >
        <Page  />
      </animated.div>
      )
    })}
    
    
    
  </Container>
  )
}



export default Test;