import { Tilt_Prism } from "next/font/google";
import { useEffect, useState } from "react";

export default function InputValue (props){
    const {lable, id, defineInput, defineBase} = props;
    const [comumBase, setComumBase] = useState(0);
    const [knownBase, setknownBase] = useState(2);
    const [baseValue, setbaseValue] = useState(10);
  
    const handleBase = (type) => () => {
      setComumBase(type);
    }
    const handleAll = (type) => () => {
        setknownBase(type);
        defineBase(type);
    }

    return(
        <>
            <label htmlFor="firstValue">{lable}</label><br></br>
            <input id="firstValue" type="text" onChange={(e)=>defineInput(e.target.value)}></input><br />

            <input onClick={handleBase(0)} type="radio" id={"comumBase"+id} name={"baseType"+id} value="comumBase" checked={comumBase === 0 ? true : false} />
            <label htmlFor={"comumBase"+id}>Bases Comuns</label><br />
            <input onClick={handleBase(1)} type="radio" id={"specificBase"+id} name={"baseType"+id} value="specificBase" checked={comumBase !== 0 ? true : false} />
            <label htmlFor={"specificBase"+id}>Base Especifica</label><br />
         
            {comumBase === 0 ?
                <>
                <input onClick={handleAll(2)} type="radio" id={"basetwo"+id} name={"knownBase"+id} value="knownBase" checked={knownBase === 2 ? true : false} />
                <label htmlFor={"basetwo"+id}>Base 2</label><br />
                <input onClick={handleAll(8)} type="radio" id={"baseeight"+id} name={"knownBase"+id} value="knownBase" checked={knownBase === 8 ? true : false} />
                <label htmlFor={"baseeight"+id}>Base 8</label><br />
                <input onClick={handleAll(10)} type="radio" id={"baseten"+id} name={"knownBase"+id} value="knownBase" checked={knownBase === 10 ? true : false} />
                <label htmlFor={"baseten"+id}>Bases 10</label><br />
                <input onClick={handleAll(16)} type="radio" id={"basesixteen"+id} name={"knownBase"+id} value="knownBase" checked={knownBase === 16 ? true : false} />
                <label htmlFor={"basesixteen"+id}>Base 16</label><br />
                <input onClick={handleAll(32)} type="radio" id={"basethirtytwo"+id} name={"knownBase"+id} value="knownBase" checked={knownBase === 32 ? true : false} />
                <label htmlFor={"basethirtytwo"+id}>Base 32</label><br />
                <input onClick={handleAll(64)} type="radio" id={"basesixtyfour"+id} name={"knownBase"+id} value="knownBase" checked={knownBase === 64 ? true : false} />
                <label htmlFor={"basesixtyfour"+id}>Base 64</label><br />
                </> :
                <>
                <label htmlFor={"firstValue"+id}>O tipo da base do primeiro valor:</label><br></br>
                <input id="firstValue" onChange={(e)=>defineBase(e.target.value)} type="number"></input><br />
                </>
            }
        </>
    )
}