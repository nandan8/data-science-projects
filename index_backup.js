import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function OperatorDropDown() {
  return(
    <select id="operator">
      <option value="Fenics-NY4">Fenics-NY4</option>
      <option value="Fenics-LD4">Fenics-LD4</option>
      <option value="Cantor-Algo-NY4">Cantor-Algo-NY4</option>
    </select>
  );
}
function SymbolDropDown() {
  return(
    <select id="symbol">
      <option value="EUR/USD">EUR/USD</option>
      <option value="EUR/USD">NZD/USD</option>
      <option value="EUR/USD">GBP/USD</option>
      <option value="EUR/USD">AUD/USD</option>
      <option value="EUR/USD">USD/CHF</option>
      <option value="EUR/USD">USD/JPY</option>
      <option value="EUR/USD">USD/CAD</option>
      <option value="EUR/USD">USD/HUF</option>
      <option value="EUR/USD">USD/ZAR</option>
    </select>
  );
}
class Mdui extends React.Component {
  constructor (props) {
    super(props);
    this.snap = true;
  }
// Add hover tooltip to the buttons
  render() {
    return (
      <div>
        <div className = "Header"> LumeFX Market Data </div>
        <div className = "EmptyRow"> <br/> </div>
        <div className="typeOfMD" >
          <span>
            <button onClick = { () => this.switchUI("Snap")} > Snap  </button>  
            <button onClick = { () => this.switchUI("Raw")} > Raw  </button>
          </span>
        </div>
        <div className = "EmptyRow"> <br/> </div>
        <div className="typeOfMD" >
        </div>
        <div className="op-dropdown" >
          <OperatorDropDown />
        </div>
        <div className = "EmptyRow"> <br/> </div>
        <div className="sym-dropdown" >
          <SymbolDropDown />
        </div>
        <div className = "EmptyRow"> <br/> </div>
        <div id = "TimeInput">
         <span>
            Date/Time : 
            <input type="time" step="0.001" id="time" name="appt"
               min="9:00" max="18:00" required />
         </span>
        </div>
        <div className = "EmptyRow"> <br/> </div>
        <div className="submit">
          <button onClick = { () => this.submit()} > Submit  </button>
        </div>
      </div>
    );
  }
  submit() {
    var obj = document.getElementById("operator");
    var oper = (obj.options[obj.selectedIndex].text);
    console.log(oper);
    var symObj = document.getElementById("symbol");
    var symbol = (symObj.options[symObj.selectedIndex].text);
    console.log(symbol);
    var dtObj = document.getElementById("time");
    var dt = (dtObj.options[dtObj.selectedIndex].text);
    console.log(dt);
   
  }
  switchUI(type) {
  }
}

ReactDOM.render(
  <Mdui />,
  document.getElementById('root')
);
