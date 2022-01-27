/* eslint-disable prettier/prettier */
import React from 'react';
import { View,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, FONTS, SIZES } from '../constants';


export default ({onPress,text, style}) => {
return(<View>
    <TouchableOpacity
    style={[{
        height:60,
        backgroundColor:COLORS.black,
        borderRadius:SIZES.radius / 1.5,
        alignItems: 'center',
        justifyContent: 'center',
    },style]}
    onPress={onPress}>
        <Text style={{color:COLORS.white,...FONTS.h3}}>{text}</Text>
    </TouchableOpacity>
</View>);
};
