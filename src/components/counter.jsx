import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'




class Counter extends Component {
    // state = { count:this.props.count } 
//}

    render() {
        return (<div className="text-center"  >
            <button onClick={() => this.props.onInc(this.props.counter)} className='btn btn-success m-2 '><font face="Comic sans MS">+</font></button>
            <font className="text-white" face="Comic sans MS"><span className={this.getClass()} >{this.props.name}:{this.formatCount()}</span></font>
            <button onClick={() => this.props.onDec(this.props.counter)} className='btn btn-danger m-2 ' ><font face="Comic sans MS">-</font></button>
            <div>
            <button onClick={() => this.props.onDelete(this.props.id)} className='btn btn-danger m-2'><font face="Comic sans MS">X</font></button>
            </div>
        </div>);
    }

    formatCount() {
        return this.props.count === 0 ? 'zero' : this.props.count 
    }

    getClass() {
        return this.props.count === 0 ? 'btn btn-primary' : 'btn btn-warning'


    }
    

}

export default Counter;

