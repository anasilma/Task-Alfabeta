import React from 'react';
import { View, Text } from 'react-native';

const styles = {
 textStyle: {
  fontSize: 20,
    color: 'white'
 },
 headerStyle: {
  backgroundColor: '#3F51B5',
  justifyContent: 'center',
  alignItems: 'center',
        height: 60,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2
 }
};

const AppHeader = (props) => {
    const { textStyle, headerStyle } = styles;
    return (
        <View style={headerStyle}>
            <Text style={textStyle}>{props.title}</Text>
        </View>
    );
};

export default AppHeader;