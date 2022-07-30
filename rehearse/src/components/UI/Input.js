import classes from "./Input.module.css";
import React, { useRef, useImperativeHandle } from "react";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();
  const activate = () => {
    inputRef.current.focus();
  };
  useImperativeHandle(() => {
    return {
      focus: activate,
    };
  }, ref);

  return (
    <div className={classes.control}>
      <label>label</label>
      <input
        ref={inputRef}
        id={props.id}
        type={props.type}
        value={props.value}
        onBlur={props.onBlur}
        onChange={props.onChange}
      ></input>
    </div>
  );
});

export default Input;
