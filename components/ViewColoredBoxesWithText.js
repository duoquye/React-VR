/**
 * Created by Lutz on 2017/7/20.
 */

import React from 'react';
import { View, Text} from 'react-vr';

export default class ViewColoredBoxesWithText extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <View style={{
                flexDirection:'row',
                height:1,
                padding:0.2,
                transform: [{translate: [0, 1, -4]}],
            }}
            >
                <View style={{backgroundColor:'blue',flex:0.3}} />
                <View style={{backgroundColor:'red',flex:0.5}} />
                <Text>Hello Lutz!</Text>
            </View>
        );
    }
}