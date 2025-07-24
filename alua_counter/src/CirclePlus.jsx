import styled from "styled-components";

const CirclePlus=({handlePlus})=>{
    return (
        <CicleWrapper2 onClick={handlePlus}> 
                <PlusSign>
                    +                    
                </PlusSign>
        </CicleWrapper2>
    );
};
export default CirclePlus; 

const CicleWrapper2=styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid #FCC2C2;
  justify-content: center;
  cursor: pointer;
`;

const PlusSign=styled.div`
  font-size: 32px;
  font-weight: bold;
`;

