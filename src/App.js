import React,{Component} from 'react';

class App extends Component {

  constructor(props){
    super(props)
    // thay doi mot state o ben ngaoi neu khong luu vao state
    // cac truong hop data flow ngoai react
    this.localVideoRef = React.createRef();
  }
 
  render(){
    const constraint = { audio: true, video: { facingMode: { exact: "environment" } } }

    const success = (stream)=>{
      this.localVideoRef.current.srcObject = stream
    }
    const failure = (er)=>{
      console.log('===========>failure',er)
    }

    navigator.getUserMedia(constraint, success, failure);

    return (
      <div className="App">
        <h1>this is a video</h1>
           <video ref={this.localVideoref} autoPlay/>
      </div>
    );
  }
}

export default App;
