import { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';


class Box extends Component {
    state = {
          number : 6,
          className: 'btn btn-primary'
    }

    increment = () => {
           const newNumber =this.state.number+1;
           const newState = { number : newNumber, className : 'btn btn-primary'}
           this.setState(newState)

    }
    decrement = () =>{
        const number = this.state.number
        if ( number === 0){
            const newClassName = 'btn btn-secondary'
            const newState = { number : this.state.number, className : newClassName}
            this.setState(newState)

        }
        else {
            const newNumber =this.state.number-1;
            const newState = { number : newNumber, className : 'btn btn-danger'}
            this.setState(newState)
        }
    }

     render () {
        return (
            <div>
                <button type="button" class = {this.state.className} onClick ={ this.decrement}> -</button>
                <span class = "p-3"> {this.state.number}</span>
                <button type="button" class = 'btn btn-primary' onClick ={ this.increment}> +</button>

            </div>
        );
     }
}
export default Box;