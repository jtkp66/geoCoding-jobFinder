import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
    { text: 'Slide 1', color: '#03A9F4' },
    { text: 'Slide 2!', color: '#009688' },
    { text: 'Slide 3', color: '#03A9F4' }
];

class WelcomeScreen extends Component {
    
    onSlidesComplete = () => {
        this.props.navigation.navigate('auth');
    }

    render() {
        return (
           <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
        );
    }
}

export default WelcomeScreen;
