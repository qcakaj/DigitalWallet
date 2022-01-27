/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';
import {COLORS, SIZES, FONTS, icons} from '../constants';

export default ({title}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.padding * 4,
        paddingHorizontal: SIZES.padding * 2,
        paddingBottom: SIZES.padding * 2,
      }}
      onPress={() => {}}>
      <Image
        source={icons.back}
        style={{
          resizeMode: 'contain',
          width: 20,
          height: 20,
          tintColor: COLORS.white,
        }}
      />
      <Text
        style={{
          marginLeft: SIZES.padding * 1.5,
          color: COLORS.white,
          ...FONTS.h4,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
