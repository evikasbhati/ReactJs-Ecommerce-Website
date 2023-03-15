import { useState } from "react";
import './InputField.css'

const InputField = (props) => {
    const {placeholder, handleFunction, label, errormessage, pattern, type="text"}=props;
    const [focus,setFocus]=useState(false)
    const handleFocus=(e)=>{
        setFocus(!focus)
    }
   
    return (
  
      <>
        <div className="input_container">
          <input
            className="input_field"
            type={type}
            placeholder={placeholder}
            onChange={handleFunction}
            required={true}
            errormessage={errormessage}
            pattern={pattern}
            onBlur={handleFocus}
            focus={focus.toString()}
          />
          <span className="input_error">{label}</span>
        </div>
      </>
    );
  };
  export default InputField;