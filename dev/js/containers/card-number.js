
import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getNumber,randomize} from '../actions/index';

class CardNum extends React.Component {

    componentWillMount(){
        console.log("Inside componentWillMount");
        var j = 1; var count = 0; var val = 1;
        while(j<=8)
        {
            if(count==2){
                count = 0;
                val++;
            }
                {this.props.getNumber(val)}
                j++;
                count++;
        }

    }
    toRender(){
            return this.props.num.map((ele) => {
                return (
                    <div className="card">
                        <div className="numAlign">
                            <b>{ele}</b>
                        </div>
                    </div>
                );
            });
    }

    render(){
        return(
        <div>
            <div className="btn-align">
                <input type="button" className="btn" value="Let's Play" onClick={() => this.props.randomize(this.props.num)}/>
            </div>
            <div className="clearFloat"></div>
            {this.toRender()}
            {this.props.num}
        </div>
        )
    }
}

function matchDispatchToProps(dispatch){
    console.log("bla bla")
    return bindActionCreators({getNumber: getNumber,randomize: randomize},dispatch);
}

function mapStateToProps(state){
    return {
        num:state.number
    }
}


export default connect(mapStateToProps,matchDispatchToProps)(CardNum);