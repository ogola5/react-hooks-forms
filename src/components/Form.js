import React, { useState } from "react";

function Form(prop) {
  return(
    <form>
      <input
      type={"text"}
      onChange={PaymentResponse.handleFirstNameChange}
      value={prop.firsName}
      />
      <input
      type={"text"}
      onChange={PaymentResponse.handleLasttNameChange}
      value={prop.lastname}
      />
      <button type="submit">Submit</button>
    </form>
  )
  
}

export default Form;
