/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View,Image} from 'react-native';
import { SIZES,images} from '../constants';

    export default () => {
        return (
            <View
                style={{
                    marginTop: SIZES.padding * 5,
                    height: 100,
                    alignItems: 'center',
                    justifyContent: 'center',

                }}>
                <Image
                source={images.wallieLogo}
                style={{
                    resizeMode: 'contain',
                    width:'60%',
                }} />
            </View>
        );
    };