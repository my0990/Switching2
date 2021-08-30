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

const BtnStyle = styled.div`
    width: 1100px;
    height: 50px;
    background: skyblue;
    input {
        width: 40px;
        margin: 15px;
    }
    button {
        margin: 15px;
        width: 70px;
        height: 25px;
    }
    border-bottom: 1px solid #eee;
    
`

function Test(){

    

    const [col,setCol] = useState(0);
    const [row,setRow] = useState(0);
    const [colValue,setColValue] = useState(0);
    const [rowValue,setRowValue] = useState(0);
    const colArr = [...Array(parseInt(colValue))]
    const rowArr = [...Array(parseInt(rowValue))]

    const CreatingDesk = () => {
        if(col>0 && isNaN(col)==false){
        setColValue(col)
        };
        if(row>0 && isNaN(row)==false){
        setRowValue(row)
        };
    }
    
    

    return (
        
        <SwitchingContainer>
            <BtnWrapper >
                <BtnStyle>
                    <label for='col'>Col</label>
                    <input id='col' onChange={(e)=>{setCol(e.target.value)}}></input>
                    <label for='row'>Row</label>
                    <input id='row' onChange={(e)=>{setRow(e.target.value)}}></input>
                    <button onClick={() => {CreatingDesk()}}>자리생성</button>
                </BtnStyle>
                <BtnStyle>
                    <label for='startNumber'>시작번호</label>
                    <input id='startNumber'></input>
                    <label for='endNumber'>끝번호</label>
                    <input id='endNumber'></input>
                    <label for='exceptNumber'>제외번호</label>
                    <input id='exceptNumber'></input>
                    <button>번호생성</button>
                </BtnStyle>
                <BtnStyle>
                    <label style={{margin: '10px'}}>무작위번호부여</label>
                    <button>click</button>
                </BtnStyle>
                <br />
                
            </BtnWrapper>
            <DeskWrapper>
                <table>
                {colArr.map((a,i)=> {
                    return(
                        <tr>
                        {rowArr.map((a,i)=>{
                            return(
                                <td><Desk></Desk></td>
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