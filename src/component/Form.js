// import React from 'react'

// export default function Form(props) {
//   return (
//     <div>
//         <h1>{props.heading}</h1>
//         <div className="mb-3">  
//             {/* <label htmlFor="myBox" className="form-label">Example Textarea</label> */}
//             <textarea className="form-control" id="myBox" rows="8"></textarea>
//         </div>
//     </div>
//   )
// }

import React, { useState } from 'react'

export default function Form(props) {
    const [text,setText] = useState(''); 

    const handleuppclick = () => {
        console.log("Uppercase");
        setText(text.toUpperCase());
        props.showAlert("conver to UpperCase!","success");
    }
    const handlelowclick = () => {
        console.log("lowercase");
        setText(text.toLowerCase());
        props.showAlert("conver to LowerCase!","success");
    }

    const handlecleclick = () => {
        console.log("click");
        setText('') ;
        props.showAlert("Text Clear!","success");
    }

    const handlecopyclick = () => {
        console.log("copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copy!","success");
    }

    const handleremoveclick = () => {
        console.log("Remove space");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra space remove!","success");
    }

    const handleonchage = (e) =>{
        setText(e.target.value)
        console.log("change");
    }
  return (
    <div style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
      <h1>{props.heading}</h1>
      <textarea className="form-control" value={text} onChange={handleonchage} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white',color: props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
        <div className="mb-3">  
            <button type="button" onClick={handleuppclick} className="btn btn-secondary my-3 mx-2">convert to uppercase</button>
            <button type="button" onClick={handlelowclick} className="btn btn-secondary my-3 mx-2">convert to LowerCase</button>
            <button type="button" onClick={handlecleclick} className="btn btn-secondary my-3 mx-2">Clear</button>
            <button type="button" onClick={handlecopyclick} className="btn btn-secondary my-3 mx-2">Copy text</button>
            <button type="button" onClick={handleremoveclick} className="btn btn-secondary my-3 mx-2">Remove Extra space</button>
        </div>

        <div className='container'>
            <h2>Text Summary</h2>
            <p>{text === "" ? 0  :text.trim().split(" ").length} words and {text.length} character</p>
            <p>{0.008 * text.split(" ").length} Read Time</p>
            <h4>Preview</h4>
            <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
        </div>
    </div>
  )
}
