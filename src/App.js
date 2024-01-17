import './App.css';
import React,{useState} from 'react';


function App() {
  const [height,setHeigth]= useState(0);
  const [weight,setWeight]= useState(0);
  const [bmi,setBMI]= useState("");
  const [message,setMessage]= useState("");


  const calculate = (e)=>{
    e.preventDefault();
    if(height===0 || weight===0){
      alert("enter valid input");
    }
    else{
      let bmi= (weight/(height*height)*703);
      setBMI(bmi.toFixed(1));

      if(bmi<25){
        setMessage("You are under weight");
      }
      else if(bmi>=25 && bmi<30){
        setMessage("you are healthy");
      }
      else{
        setMessage("you are overweight");
      }
    }

  }


  let reset= ()=>{
    window.location.reload();
  }
  
  return (
    <div className='app'>
        <h2 className='heading'>BMI Calculator</h2>
         <div className='container'>
              <form >
                  <div className='col'>
                    <label>Height</label>
                    <input type='text' placeholder='enter height' value={height} onChange= {(e) => setHeigth(e.target.value)}/>
                  </div>
                  <div className='col'>
                    <label>Weight</label>
                    <input type='text' placeholder='enter weight' value={weight} onChange= {(e) => setWeight(e.target.value)}/>
                  </div>
                  <div className='col'>
                      <button  type="submit" onClick={calculate}>Submit</button>
                      <button type="reset" value="reset" onClick={reset}>Reload</button>
                    
                  </div>
              </form>

              <div className='display'>
                  <h3 className='result'>Your BMI is :{bmi} </h3>
                  <h3> You are: {message}</h3>
              </div>
         </div>
          <h4 className='last'>Made by mansi</h4>
    </div>
  );
}

export default App;
