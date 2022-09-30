import React, { useState } from 'react' 

import '../App.css'

const Calculte = () => {
    const [inputValue, SetInputValue] = useState("")
  return (
    <div>
    <table class="calculator" >
  <tr>
    <td colspan="3"> <input class="display-box" type="text"  value={inputValue} onChange={(e)=>{SetInputValue(e.target.value)}} /> </td>
    <td> <input type="button" value="CE" onClick={(e)=>{SetInputValue(" ")}}   /> </td>
    <td> <input type="button" value="Ac" onClick={(e)=>{SetInputValue(inputValue.slice(0,-1))}} /> </td>
  </tr>
  <tr>
   
    <td> <input type="button" value="1" onClick={(e)=>{SetInputValue(inputValue + e.target.value)}}/></td>
    <td> <input type="button" value="2"  onClick={(e)=>{ SetInputValue(inputValue + e.target.value)}}/></td>
    <td> <input type="button" value="3" onClick={(e)=>{ SetInputValue(inputValue + e.target.value)}} /></td>
    <td> <input type="button" value="/"  onClick={(e)=>{ SetInputValue(inputValue + e.target.value)}}/></td>
  </tr>
  <tr>
    <td> <input type="button" value="4" onClick={(e)=>{ SetInputValue(inputValue + e.target.value)}}/></td>
    <td> <input type="button" value="5" onClick={(e)=>{ SetInputValue(inputValue + e.target.value)}}/></td>
    <td> <input type="button" value="6" onClick={(e)=>{ SetInputValue(inputValue + e.target.value)}}/></td>
    <td> <input type="button" value="-" onClick={(e)=>{ SetInputValue(inputValue + e.target.value)}}/></td>
  </tr>
  <tr>
    <td> <input type="button" value="7" onClick={(e)=>{ SetInputValue(inputValue + e.target.value)}}/></td>
    <td> <input type="button" value="8" onClick={(e)=>{ SetInputValue(inputValue + e.target.value)}}/></td>
    <td> <input type="button" value="9" onClick={(e)=>{ SetInputValue(inputValue + e.target.value)}}/></td>
    <td> <input type="button" value="+" onClick={(e)=>{ SetInputValue(inputValue + e.target.value)}}/></td>
  </tr>
  <tr>
    <td> <input type="button" value="." onClick={(e)=>{ SetInputValue(inputValue + e.target.value)}}/></td>
    <td> <input type="button" value="0" onClick={(e)=>{ SetInputValue(inputValue + e.target.value)}}/></td>
    <td> <input type="button" value="="  onClick={(e)=>{
     
        try{
          SetInputValue(eval(inputValue))
        }
        catch{
          console.log('Error')
        }

    }} /> </td>
    <td> <input type="button" value="*" onClick={(e)=>{SetInputValue(inputValue + e.target.value)}} /> </td>
   
  </tr>
</table>
    </div>
  )
}

export default Calculte