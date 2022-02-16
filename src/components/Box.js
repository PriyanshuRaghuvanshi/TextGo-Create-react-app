import React,{useState} from 'react';


export default function Box(props) {

   const uppercase=()=>{
let newText =text.toUpperCase();
setText(newText)
props.showAlert("converted to uppercase","success");
   }

   const lowercase=()=>{
       let newText =text.toLocaleLowerCase();
       setText(newText)
       props.showAlert("converted to lowercase","success");
   }

//    const removeSymbols =()=>{
//       const regex = /[0-9/A-Z/a-z/ ]/g;

//       const letters = text.match(regex);
//       const res1 = letters.join('');
//       setText(res1)
//       }


// //to extract only the numbers in the text:
// const extractNumbers =()=>{
//       const regex = /[0-9/ ]/g;

//       const digits = text.match(regex);
//       const res = digits.join('');
//      setText(res)
//       }
      // const copy=()=>{
      //    var text =document.getElementById("mybox");
      //    text.select();
      //    navigator.clipboard.writeText(text.value);
      // }
      const clearAll=()=>{
         let newText=('');
         setText(newText)
      }

   const whenChanged=(event)=>{
       setText(event.target.value)
    }


    const [text, setText] = useState('Hey');
  return <>
  <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
     <h1>{props.heading}</h1>
     <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter here</label>
          <textarea className="form-control" value={text} onChange={whenChanged} style={{backgroundColor:props.mode==='dark'?'#13499e':'white' , 
          color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
     </div>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-2" onClick={uppercase}>convert to uppercase</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-2" onClick={lowercase}>convert to lowercase</button>
        {/* <button type="button" className="btn btn-primary mx-2" onClick={removeSymbols}>Remove Symbols</button>
        <button type="button" className="btn btn-primary mx-2" onClick={extractNumbers}>Extract Numbers</button> */}
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-2" onClick={clearAll}>Clear</button>
        {/* <button type="button" className="btn btn-primary mx-2" onClick={copy}>Copy Text</button> */}
 </div>
  
  
  <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>SUMMARY</h1>
      <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p> Time to read = {0.008* text.split("").filter((element)=>{return element.length!==0}).length} minutes </p>
      <h1> PREVIEW</h1>
      <p> {text} </p>
   </div>
  </>
}
