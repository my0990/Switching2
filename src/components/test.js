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

    //번호생성
    const [startNumber,setStartNumber] = useState(1);
    const [lastNumber,setLastNumber] = useState(0);
    const [NumberGroup,setNumberGroup] = useState([]);
    const [exclusionNumber,setExclusionNumber] = useState();
    const [exclusionNumberArr,setExclusionNumberArr] = useState([]);
    const createNumber = () => {
        setNumberGroup([]);
        setExclusionNumberArr([]);
        if(exclusionNumber!= null){
            setExclusionNumberArr(exclusionNumber.split(','));
        }
        for(let i = startNumber; i< parseInt(lastNumber) + 1; i++){
            setNumberGroup(NumberGroup => [...NumberGroup, i]);
        }
        //NumberGroup에서 exclusionNumber 제외시키기
        
        
    }

    const CreatingDesk = () => {
        if(col>0 && isNaN(col)==false){
        setColValue(col)
        };
        if(row>0 && isNaN(row)==false){
        setRowValue(row)
        };
    }

    const test = () => {
        console.log('startnumber: ' + startNumber);
        console.log('lastnumber: ' + lastNumber);
        console.log('NumberGroup: ' + NumberGroup);
        console.log('typeofNumbergroup: ' + typeof(NumberGroup))
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
                    <label for='startNumber' >시작번호</label>
                    <input id='startNumber' onChange={(e)=>{setStartNumber(e.target.value)}}></input>
                    <label for='endNumber' >끝번호</label>
                    <input id='endNumber' onChange={(e)=>{setLastNumber(e.target.value)}}></input>
                    <label for='exceptNumber' >제외번호</label>
                    <input id='exceptNumber' onChange={(e)=>{setExclusionNumber(e.target.value)}}></input>
                    <button onClick={()=>{createNumber()}}>번호생성</button>
                </BtnStyle>
                <BtnStyle>
                    <label style={{margin: '10px'}}>무작위번호부여</label>
                    <button>click</button>
                </BtnStyle>
                <BtnStyle>
                    <h3 style={{margin: '0'}}>생성된 번호목록</h3>
                    {NumberGroup.map((a,i)=>{
                        return(
                            a+ '/'
                        )
                    })}
                </BtnStyle>
                <BtnStyle>
                <h3 style={{margin: '0'}}>제외된 번호목록</h3>
                    {exclusionNumberArr.map((a,i)=>{
                        return(
                            a+ '/'
                        )
                    })}
                </BtnStyle>
                <button onClick={()=>{test()}}>test</button>
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