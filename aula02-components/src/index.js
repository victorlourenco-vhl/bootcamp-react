import React from "react";
import ReactDOM from "react-dom";
import Button from './Button.jsx'
import ComponenteA from './ComponenteA'
import ComponenteB from './ComponenteB'
import "./styles.css"

function soma(a, b){
  alert(a+b)
}

function App() {

  return (
    <div className="App">
      Hello World
      <Button onClick={() => soma(15,10)} name= "Teste 2"/>
      <ComponenteA>
        <ComponenteB>
          <Button onClick={() => soma(20,50)} name= "Teste 1"/>
        </ComponenteB>
      </ComponenteA>
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement)