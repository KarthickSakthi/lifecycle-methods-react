import logo from './logo.svg';
import React, {Component} from "react";
import randomcolor from 'randomcolor'
import './App.css';

class App extends Component {
constructor(){
  super()
  this.state={
       count :0,
       color:""
  }
}

/*static getDerivedStateFromProps(props, state) {
        // return the new, updated state based upon the props
        // https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
        // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
    }
    
    getSnapshotBeforeUpdate() {
        // create a backup of the current way things are
        // https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
    }
    
    // componentWillMount() {
        
    // }
    
    componentDidMount() {
        // GET the data I need to correctly display
    }
    
    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.whatever !== this.props.whatever) {
    //         // do something important here
    //     }
    // }
    
    shouldComponentUpdate(nextProps, nextState) {
        // return true if want it to update
        // return false if not
    }
    
    // componentWillUpdate() {
        
    // }
    
    componentWillUnmount() {
        // teardown or cleanup your code before your component disappears
        // (E.g. remove event listeners)
    } */
    componentDidMount(){
      console.log("DidMount")
    }
    componentDidUpdate(prevProps,previState){
      console.log("DidUpdate")
      if(previState.count !== this.state.count){
        const newclr= randomcolor()
        this.setState({color:newclr})
      }


    }
    increment=()=>{
      this.setState(previousState=>{
               return{
                 count:previousState.count+1
               }
      })
   }
   decrement=()=>{
    this.setState(previousState=>{
             return{
               count:previousState.count-1
             }
    })
 }
  render(){
    console.log("Render")
  return (
    <div className="App">
     <h1 style={{color : this.state.color}}>{this.state.count}</h1>
      <button onClick={this.increment}>Increment</button>
      <button onClick={this.decrement}>Decrement</button>
    </div>
  );
  }
}

export default App;
