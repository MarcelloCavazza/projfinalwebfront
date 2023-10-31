import { useEffect, useState } from "react"
import InputValue from "./InputValue";
import { convertBase } from "simple-base-converter";

export default function Teste() {

  const [resultado, setResultado] = useState("");
  const [firstInputValue, setfirstInputValue] = useState("");
  const [firstInputBase, setfirstInputBase] = useState(2);
  const [secondInputValue, setsecondInputValue] = useState("");
  const [secondInputBase, setsecondInputBase] = useState(2);
  const [outputBase, setoutputBase] = useState(2);

  const defineOutput = (type) => () =>{
    setoutputBase(type);
  }

  useEffect(()=>{
    if(firstInputValue !== "" && secondInputValue !== ""){
      const firstInput = parseInt(convertBase(firstInputValue, firstInputBase, 10));
      const secondInput = parseInt(convertBase(secondInputValue, secondInputBase, 10));
      const result = convertBase(firstInput + secondInput, 10, outputBase);
      setResultado(result)
    }
  },[firstInputValue, firstInputBase, secondInputValue, secondInputBase, outputBase])

  return (
    <main>
      <InputValue lable="O primeiro numero:" id={1} defineBase={setfirstInputBase} defineInput={setfirstInputValue}/>
      <hr></hr>
      <InputValue lable="O segundo numero:" id={2} defineBase={setsecondInputBase} defineInput={setsecondInputValue}/>
      <hr></hr>
      <label htmlFor="outputBase">Base de output:</label><br></br>
            <input id="firstValue" type="text" onChange={(e)=>defineOutput(e.target.value)}></input><br />
    <hr>
    </hr>

      <div>
        O resultado eh: {resultado}
      </div>
    </main>
  )
}