import React, { useState, useEffect , useContext } from 'react';
import { Button} from "@material-ui/core";
import { AppContext } from "./context";


  function Button2() {
    const [state, setState] = useContext(AppContext);

  const handleClick = () => {
    console.log(state)
    setState(state + 1)
  }



    
    
  return (

<div>
      <Button onClick={handleClick} color="primary" variant="contained">
        Test Context
      </Button>
    </div>);
    }


    export default Button2;
