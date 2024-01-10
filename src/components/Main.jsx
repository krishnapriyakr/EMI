import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Main.css"
function Main() {

    const [amount, SetAmount] = useState()
    const [tenture, setTenture] = useState()
    const [rate,setRate] =useState()
    const[result,setResult] =useState()
    const catculate = (e) => {
        const set= amount * rate*(1+rate)^tenture/((1+rate)^rate-1)
        setResult(set)
    }

  return (
      <div className='container d-flex align-item-center '>
          <div className="text align-item-center ">
              <label htmlFor="" >Loan Amount</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <TextField id="standard-basic" label="Loan amount" onChange={(e)=>SetAmount(e.target.value)} variant="standard" />
          </div> 
          
          <div className="text1 align-item-center"> 
          <label htmlFor="">Tenure</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <TextField id="standard-basic" label="Tenure" variant="standard" onChange={(e)=>setTenture(e.target.value)} /> 
          </div>
          <TextField id="outlined-basic" className='rate' label="Interest Rate" onChange={(e)=>setRate(e.target.value)} variant="outlined" />
          <div className="btn">
          <Button variant="contained"  onClick={e=>catculate(e)}>Calculate</Button>
          </div>
          <p>Your Monthly Loan EMI is:{result}</p>
    </div>
  ) 
}

export default Main