import React, { useRef } from "react";
import FileInputUI from "../view/FileInputUI";
import { SetBackendValidation } from "../../validation/BackendValidtion/CustomValidation";

const FileInputContainer = (props) => {
  const inputRef = useRef(null);
  const onFramClick = () => {
    inputRef.current.click();
    console.log(inputRef, "heloooo");
  };
  const handleChange = (e) => {
    const fileList = Array.from(e.target.files);
    if (fileList?.length < 1) {
      return SetBackendValidation(
        props.setError,
        props.name,
        props.errorMessage
      );
    }
    const checkType = fileList.every((file) => file.type.startsWith("image/"));
    if (!checkType) {
      return SetBackendValidation(
        props.setError,
        props.name,
        props.typeErrorMessage
      );
    }
    props.setValue(props.name, fileList);
    props.clearErrors(props.name);
    console.log(fileList);
  };
  return (
    <FileInputUI
      {...props}
      name={props.name}
      control={props.control}
      onChangeInput={props.onChange ? props.onChange : handleChange}
      label={props.label}
      errors={props.errors}
      setValue={props.setValue}
      setError={props.setError}
      inputRef={inputRef}
      onFramClick={onFramClick}
    />
  );
};

export default FileInputContainer;
