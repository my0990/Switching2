import React, {useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: block;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
   
`
const Desk = styled.div`
    width: 60px;
    height: 35px;
    background: skyblue;
    border-radius: 5px;
    &:hover {
        cursor: pointer
    }
    margin: 5px;
 
`

//disabled Desk 스타일
const Desk2 = styled.div`
    width: 60px;
    height: 35px;
    background: white;
    border-radius: 5px;
    &:hover {
        cursor: pointer
    }
    margin: 5px;
`

function DeskInput(props){
    const [doubleArr,setDoubleArr] = useState(props.arr)
     
    const deskClicked = (i,j) => {
        
            let copy = [...doubleArr];
            if(copy[i][j]===1){
                copy[i].splice(j,1,0)
            } else {
                copy[i].splice(j,1,1)
            }
            
            setDoubleArr([...copy])
        
        console.log(doubleArr)
    }


    return(
        <Container>
            <table>
            {/* 이차원 배열과 map함수로 desk 만들기 */}
            {doubleArr.map((a,i)=>{
                return(
                    <tr>
                        {doubleArr[i].map((a,j)=>{
                            if(a===1){
                                return(
                                    <td>
                                        <Desk onClick={()=>{deskClicked(i,j)}}>
                                          
                                            
                                        </Desk>
                                    </td>
                                )
                            } else {
                              
                                return (
                                    <td>
                                        <Desk2 onClick={()=>{deskClicked(i,j)}}>
                                            
                                        </Desk2>
                                    </td>
                                )
                            }
                            
                        })}
                    </tr>
                )
            })}
            
            </table> 
            
        </Container>
    )
}

export default DeskInput