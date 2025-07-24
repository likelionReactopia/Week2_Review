import styled from "styled-components";

const CircleMinus=({handleMinus})=>{
    return (
        <CicleWrapper onClick={handleMinus}> 
                <MinusSign>
                    -                    
                </MinusSign>
        </CicleWrapper>
    );
};
export default CircleMinus; 

const CicleWrapper=styled.div`
  width: 100px;
  height: 100px;
  border: 3px solid #FCC2C2;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
`;

const MinusSign=styled.div`
  font-size: 32px;
  font-weight: bold;
`;

