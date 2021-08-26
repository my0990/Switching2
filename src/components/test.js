import React,{useState} from 'react';
import styled from 'styled-components';



const SwitchingContainer = styled.div`
        width: 100%;
        background: skyblue;
    `

const BtnWrapper = styled.div`
    width: 1100px;
    background: white;
    margin: 0 auto;
`

const DeskWrapper = styled.div`
    width: 1100px;
    background: white;
    margin: 0 auto;
    
    
    
`
const DeskStyle = styled.div`
    width: 100px;
    height: 50px;
    background: skyblue;
    border-radius: 5px;
    
    
`

function Test(){

    

    const [col,setCol] = useState(0);
    const [row,setRow] = useState(0);
    const colArr = [...Array(parseInt(col))]
    const rowArr = [...Array(parseInt(row))]
    
    

    return (
        
        <SwitchingContainer>
            <BtnWrapper >
                <div>hello</div>
                <label>Col</label>
                <input onChange={(e)=>{setCol(e.target.value)}}></input>
                <label>Row</label>
                <input onChange={(e)=>{setRow(e.target.value)}}></input>
                <button>입력</button>
                <button onClick={()=>{console.log(colArr)}}>test</button>
            </BtnWrapper>
            <DeskWrapper>
                <table>
                {colArr.map((a,i)=> {
                    return(
                        <tr>
                        {rowArr.map((a,i)=>{
                            return(
                                <td><Desk>a</Desk></td>
                            )
                        })}
                        </tr>
                    )
                })}
                </table>
            </DeskWrapper>
            
        </SwitchingContainer>
        
    )
}

const Desk = ({children}) => {

    
    return(
        <DeskStyle>
            {children}
        </DeskStyle>
    )
}

export default Test;