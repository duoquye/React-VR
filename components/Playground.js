/**
 * Created by Lutz on 2017/7/20.
 */
import React from 'react';
import { Animated, asset } from 'react-vr'

export default class Playground extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bounceValue:new Animated.Value(0),
        }
    }

    componentDidMount(){
        this.state.bounceValue.setValue(1.5);
        Animated.spring(
            this.state.bounceValue,
            {
                toValue:0.8,
                friction:1,
            }
        ).start();
    }

    render(){
        return (
            <Animated.Image
                source={asset('heh.gif')}
                style={{
                    flex:1,
                    width:1,
                    height:1,
                    transform:[
                        {scale:this.state.bounceValue},
                        {translate: [0, 0, -5]}
                    ]
                }}
            />
        );
    }
}