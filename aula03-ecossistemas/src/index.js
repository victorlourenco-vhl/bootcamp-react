import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./styles.css"

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      clock: 1000, 
      copo: 'água'
    }
  }

  componentDidMount(){
    window.setTimeout(() => {
      this.setState({
        copo: 'suco'
      })
    }, 2000)
    
  }

  alterarCopo = () => {
    this.setState({
    })
    this.state.copo = 'refrigerante';
  } 
  render(){
    const {clock, copo} = this.state;
    return(
      <div>
        <h1>{clock}</h1>
        <button onClick={() => this.alterarCopoalterarCopo()}><h1>{copo}</h1></button>
      </div>
    )
  }
}

// const App = () => {
//   return(
//     <div className='App'>
//       Olá, Mundo!
//     </div>
//   )
// }
const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);