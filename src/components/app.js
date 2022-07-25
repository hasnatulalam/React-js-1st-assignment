import  { Component } from "react";
 import 'bootstrap/dist/css/bootstrap.min.css';
import Box from './box.js'

class App extends Component {
    state = {
        boxes : [ 1, 2, 3, 4, 5]
    }
    getBoxes =()=>this.state.boxes.map(()=>(
        <div>
            <Box/>
            <br/>
        </div>

    ));
    
    render (){
        return (
             <div style = { {margin: '50px'}}>
               {this.getBoxes()}
            </div> 
          

        )

        
    }
}

    

export default App;