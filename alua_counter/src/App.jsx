import "./App.css";
import styled from "styled-components";
import  CirclePlus  from "./components/CirclePlus";
import  CircleMinus  from "./components/CircleMinus";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const handlePlus=(count)=>{
    setCounter((count)=>count+1);
  };
  const handleMinus=(count)=>{
    setCounter((count)=>count-1);
  };
  const handleUpdate = ()=>{
    setCounter(0);
  };
  return (
    <AppContainer>
      <Text>{"Welcome to counter app!"}</Text>
      <Number>{counter}</Number>
      <Button>
        <CircleMinus handleMinus={handleMinus}/>
        <CirclePlus handlePlus ={handlePlus} />
      </Button>
      <Updatebut 
      onClick={handleUpdate} >
        Reset
      </Updatebut>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #FFD8D8;
  min-height: 100vh;
  padding-top: 60px;
  gap: 40px;
`;

const Text = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Number = styled.div`
  font-size: 90px;
  font-weight: bold;
  padding-top: 35px;
`;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
  align-items: center;
  justify-content: center;
  padding-top: 35px;
`;

const Updatebut = styled.div`
  font-weight: bold;
  cursor: pointer;
`;

