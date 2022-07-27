import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {


    render() {
        return (<div className='row'>

            {
                this.props.nxc.map(item => <div  >
                    <Counter
                        key={item.id}
                        id={item.id} 
                        name={item.name}
                        count={item.number}
                        counter={item}
                        onDelete={this.props.del}
                        onInc={this.props.in}
                        onDec={this.props.de}
                        
                    />

                </div>)
            }
        </div>
        );
    }
}

export default Counters;
