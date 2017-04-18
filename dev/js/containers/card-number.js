import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getNumber} from '../actions/index';

class CardNum extends React.Component {

    componentDidMount(){
        console.log("Inside componentWillMount");
        for(var j=0;j<8;j++){
            {this.props.getNumber()}
        }

    }
    render(){
        var toRender=null;
        for(var i=0;i<8;i++){
            console.log("kkkkkkkkkkkk");
            toRender+=<div className="card"><div className="numAlign">
                                     <b>{this.props.num[i]}</b>
                                 </div></div>
        }

        return(
        <div>
            {toRender}
        </div>
        )
    }
}

function matchDispatchToProps(dispatch){
    console.log("bla bla")
    return bindActionCreators({getNumber: getNumber},dispatch);
}

function mapStateToProps(state){
    return {
        num:state.number
    }
}


export default connect(mapStateToProps,matchDispatchToProps)(CardNum);
