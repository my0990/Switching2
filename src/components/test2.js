import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Modal,Button} from 'react-bootstrap';
import './test.css';
import {useTransition, animated, useSpring, to , useSpringRef} from 'react-spring';
import DeskInput from './deskInput';






//전체 컨테이너

const Container = styled.div`
    width: 100%;
    position: relative;
    min-width: 600px;
    
    background: #eee; 
    
    
`

//책상 래퍼
const DeskWrapper = styled.div`
    width: 100%;
    background: white;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
`

//책상인풋 wrapper




//책상 스타일
const Desk = styled(animated.div)`
    width: 140px;
    height: 70px;
    background: skyblue;
    border-radius: 5px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
`

//disabled Desk 스타일
const Desk2 = styled.div`
    width: 140px;
    height: 70px;
    background: white;
    border-radius: 5px;
    margin: 10px;
`
//생성,제외된 숫자 컨테이너
const NumberContainer = styled.div`
    width: 90%;
    height: 50%;
    display: block;
    background: white;
    margin: 40px auto;
    border-radius: 10px;
    h4 {
        text-align: left;
        padding-left: 20px;
        
    }
    
    div div{
        font-size: 1.5em;
        width: 610px;
        overflow: overlay;
        height: 60%;
        margin: 10px;
        word-break:break-all;
    }
    
`







function Test2() {




    // 테스트
   let numToggle = 0;


    // 책상 만들기 기본 인풋 세팅
    const [col,setCol] = useState(); 
    const [row,setRow] = useState();
    const colRef = useRef();
    const rowRef = useRef();

    //배열 기본 세팅
    const [doubleArr,setDoubleArr] = useState([]); 


    // 배열만들기
    const createArr = () => {
        if(!isStarted){
            if(colRef.current.value>10 || rowRef.current.value > 10){
                alert('10이하 숫자를 입력해주세요');
                colRef.current.value = '';
                rowRef.current.value = '';
            } else {
        let arr = [];
        for(let i=0;i<colRef.current.value;++i){
            let Row = [];
            for(let j=0;j<rowRef.current.value;++j){
                Row[j] = 1;
            }
            arr[i] = Row;
        }
        setDoubleArr([...arr])
        setCol(parseInt(colRef.current.value))
        setRow(parseInt(rowRef.current.value))
    }}
    }




    //start toggle 번호 부여후 토글 바뀜
    const [isStarted,setIsStarted] = useState(false)



    // 번호생성
    // 번호생성 셋팅

    // 인풋 ref
    const startRef = useRef();
    const lastRef = useRef();
    const exRef = useRef();

    //입력값 스테이트
    //순서가 바뀐 생성번호
    const [numArr,setNumArr] = useState([]);

    //순서가 정렬된 생성번호
    const [modalNumArr,setModalNumArr] = useState([]);

    //무작위 번호
    const [exNumArr,setExNumArr] = useState([]);
    
    //번호생성 함수
    const createNumArr = () => {
        if(!isStarted){
        let exArr = exRef.current.value.split(',').map(Number); //제외번호 배열이 number타입으로 저장됨
        console.log(...exArr)
        setExNumArr([...exArr])
        
        let tempArr = []; 
        // 시작번호부터 끝번호까지 제외번호 제외하고 tempArr에 저장
        for(let i=startRef.current.value;i<parseInt(lastRef.current.value)+1;++i){
            if(!exArr.includes(i)){
               
            tempArr.push(parseInt(i));
            }
            
        };
       
        setModalNumArr([...tempArr])
        //번호 랜덤으로 배치
        tempArr.sort(()=>Math.random()-0.5);

        setNumArr([...tempArr])
        
    }
    }


    //reset버튼
    const resetConfirm = () => {
        if(window.confirm('정말 초기화하실거에요?')){
            reset();
            window.location.reload();
        }else{
            console.log('변화없음')
        }
    }
    const reset = () => {
        setIsStarted(false);
        let arr = [];
        setDoubleArr([...arr]);
        setExNumArr([...arr]);
        setNumArr([...arr]);
        setModalNumArr([...arr]);
        
    }

    //start버튼
    const start = () => {
        if(doubleArr.length !=0 && numArr.length !=0){
            setIsStarted(true)
        } else {
            alert('책상과 번호를 생성해주세요~')
        }
    }

    //transition
    const [index,set] = useState(0)
    const transition = useTransition(index,{
      from: {x: 100 , opacity: 0, position: 'absolute'},
      enter: {x: 0, opacity: 1},
      leave: {x: -50, opacity: 0}
    })


    function nextClicked(e){
        set(state => (state + 1)%2);
        
    }
    //페이지 배열
    const pages = [
        ({style}) => 
        <div  className="item1" style={{transform: 'translateX(' +  (window.innerWidth/2-500) + 'px)', }}>
            <div style={{padding:'20px'}}>
                <div>
                    <input  ref={colRef}  id='col' placeholder='col'></input>
                </div>
                <div>
                    <input  ref={rowRef} id='row' placeholder='row'></input>
                </div>
            </div>
            <Button variant="danger" onClick={()=>{createArr()}}>책상생성</Button>
            <div className='smallDesk'>
            <DeskInput arr={doubleArr} propsFunction={nextClicked}/>
            

                
            </div>
            <Button variant='danger' onClick={() => {nextClicked()}}>다음</Button>
        </div>,
        ({style}) =>  
        <div  className="item2" style={{transform: 'translateX(' +  (window.innerWidth/2-350) + 'px)'}}> 
        <div>
            <div style={{padding: '25px 50px', display: 'flex', justifyContent: 'space-between'}}>

                <input id='start' placeholder='시작번호' ref={startRef}></input>

                <input id='end' placeholder='끝번호' ref={lastRef}></input>

                <input id='ex'placeholder='제외번호 콤마로 구분' ref={exRef}></input>
            </div>
        </div>
        <Button variant="danger" onClick={()=>createNumArr()}>번호생성</Button>
        <NumberContainer>
            <div style={{height: '50%'}}>
                <h4>생성된 번호</h4>
                <div>{modalNumArr.map((a,i)=>{
                    
                    if(i!=modalNumArr.length-1){
                    return(
                        a + ','
                        
                    )} else {
                        return (
                            a
                        )
                    }
                    
                })}</div>
            </div>
            <div style={{height: '50%'}}>
            <h4>제외된 번호</h4>
                <div>{exNumArr.map((a,i)=>{
                    if(a===0){
                        return(
                            '없음'
                        )
                    }
                    else if(i!=exNumArr.length-1){
                    return(
                        a + ','
                    )} else {
                        return (
                            a
                        )
                    }
                    
                })}</div>
            </div>
        </NumberContainer>
        <Button variant='danger' onClick={() => {is확인clicked(true)}}>확인</Button>
        </div>,
        
      ]
      //최종 확인버튼 눌림
      const [확인,set확인] = useState(false);
      const is확인clicked = () => {
        set확인(true)
      }

      const transition2 = useTransition(확인,{
        enter: {opacity: 1},
        leave: {opacity: 0}

    })

    //숫자 애니메이션
    const transition3 = useTransition(isStarted,{
        from: {opacity: 0},
        enter: {opacity: 1}
    })


   
    return(
     
        <Container style={{height: window.innerHeight}}>
            
            {transition2((style,item)=>{
                return(
                    !item ?
                    <animated.div style={style}>
                       
                        {transition((style,item)=>{
                        const Page = pages[item]
                        return (
                            <animated.div style={style}>
                                <Page></Page>
                            </animated.div>
                        )
                        })}

                    </animated.div>
                    : isStarted
                        ?<Button className='btnStyle' variant='danger' onClick={()=>{resetConfirm()}}>reset</Button>
                        :<Button className='btnStyle' variant='danger' onClick={()=>{start()}}>start</Button>
                    
                )
               
            
                
            
            })}
            

  









               
            
                {확인 ?
                <DeskWrapper style={{height: window.innerHeight * 9/10}}>
                <table>

                    {/* 이차원 배열과 map함수로 desk 만들기 */}
                    {doubleArr.map((a,i)=>{
                        return(
                            <tr>
                                {doubleArr[i].map((a,j)=>{
                                    if(a===1){
                                        return(
                                            <td>
                                                <Desk>
                                                    {transition3((style,item)=>{
                                                        return(
                                                        item?
                                                        <animated.div style={style}>
                                                            {numArr[i*row + j - numToggle]}
                                                            </animated.div>
                                                        : null)
                                                    })}
                                                    </Desk>
                                                    {/* {isStarted?
                                                    numArr[i*row + j - numToggle]
                                                : null} */}
                                                   
                                                
                                            </td>
                                            
                                        )
                                    } else {
                                        {numToggle++;}
                                        return (
                                            <td>
                                                <Desk2>
                                                    
                                                </Desk2>
                                            </td>
                                        )
                                    }
                                    
                                })}

                            </tr>
                        )
                    })}
                </table>
                </DeskWrapper>
                : ''}
            
            {/* {isStarted
                ?<Button variant='danger' onClick={()=>{resetConfirm()}}>reset</Button>
                :<Button variant='danger' onClick={()=>{start()}}>start</Button>} */}

            
            <div>


                        

                
            
            </div>
            




            
        </Container>
        
    )
}


export default Test2;