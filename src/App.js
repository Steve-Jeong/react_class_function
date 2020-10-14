import React, {Component, useState} from 'react';
import './App.css';


const FuncComp = (props) => {
  let [number, setNumber] = useState(props.initNumber)
  let [date, setDate] = useState((new Date()).getTime())
  return (
    <div className="container">
      <h1>Function Component</h1>
      <p>Number : {number}</p>
      <input type="button" value="random" onClick={function(){
          setNumber(Math.random())
        }}></input>
      <p>Date : {date}</p>
      <input type="button" value="Date" onClick={function(){
        setDate((new Date()).getTime())
      }}></input>
    </div>
  )
}

let classStyle = 'color:red'
let classNum = 0
class ClassComp extends Component {
  state={
    number:this.props.initNumber,
    date:(new Date()).getTime()
  }

  componentWillMount() {
    console.log('%cclass => componentWillMount ' + (++classNum), classStyle)
  }

  componentDidMount() {
    console.log('%cclass => componentDidMount ' + (++classNum), classStyle)
  }

  shouldComponentUpdate() {
    console.log('%cclass => shouldComponentUpdate ' + (++classNum), classStyle)
    return true
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('%cclass => componentWillUpdate ' + (++classNum), classStyle)
  }

  componentDidUpdate(nextProps, nextState) {
    console.log('%cclass => componentDidUpdate ' + (++classNum), classStyle)
  }

  render() {
    console.log('%cclass => render ' + (++classNum), classStyle)
    return (
      <div className="container">
        <h1>Class Component</h1>
        <p>Number : {this.state.number}</p>
        <input type="button" value="random" onClick={function(){
          this.setState({number:Math.random()})
        }.bind(this)}></input>
        <p>Date : {this.state.date}</p>
        <input type="button" value="Date" onClick={function(){
          this.setState({date:(new Date()).getTime()})
        }.bind(this)}></input>
      </div>
    )
  }
}


function App() {
  return (
    <div className="container">
      <h1>Hello world</h1>
      <FuncComp initNumber={5}></FuncComp>
      <ClassComp initNumber={5}></ClassComp>
    </div>
  );
}

export default App;
