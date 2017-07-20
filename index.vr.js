import React from 'react';
import {
    AppRegistry,
    asset,
    Pano,
    Text,
    View,
    Cylinder,
    VrButton,
    Image,
} from 'react-vr';

/* myself components*/
import Playground from './components/Playground';
import TimerMixin from './components/TimerMixin'

export default class ReactVR extends React.Component {
    constructor(props){
        super(props);
        this.state={
            textColor:'white'
        };
    }
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
          <Text
              style={{
                  color: this.state.textColor,
                  layoutOrigin: [0.5, 0.5],
                  paddingLeft: 0.2,
                  paddingRight: 0.2,
                  textAlign: 'center',
                  textAlignVertical: 'center',
                  transform: [{translate: [0, 0, -1]}],
              }}
              onEnter={() => this.setState({textColor: 'red'})}
              onExit={() => this.setState({textColor: 'white'})}
          >
              barret 此事你怎么看
          </Text>
          <TimerMixin/>
          <Playground/>
      </View>
    );
  }
};

AppRegistry.registerComponent('ReactVR', () => ReactVR);
