/**
 * Created by Lutz on 2017/7/20.
 */

import React from 'react';
import { Text } from 'react-vr';

const RandomColor = () =>{
    return `rgba(${Math.floor(Math.random()*(255+1))},${Math.floor(Math.random()*(255+1))},${Math.floor(Math.random()*(255+1))},${Math.random()})`;
}

export default class TimerMixin extends React.Component{
    constructor(props) {
        super(props);
        this.state={color:RandomColor()};
    }

    componentDidMount(){
        this.timer = setInterval(()=>{
            this.setState({color:RandomColor()})
        },500);
    }

    componentWillUnmount(){
        this.timer && clearInterval(this.timer);
    }

    render(){
        return (
            <Text
                style={{
                    flex:1,
                    width:1,
                    height:1,
                    color:this.state.color,
                    transform:[
                        {translate: [1, 1, -3]}
                    ]
                }}
            >
                这里会变色哦！！
            </Text>
        );
    }
}