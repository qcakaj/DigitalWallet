/* eslint-disable prettier/prettier */
import React, { useState, useEffect,useRef, forwardRef } from 'react';
import { StyleSheet, Text, View, Platform, SafeAreaView, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { useIsFocused  } from '@react-navigation/native';
import { SIZES, images, icons, COLORS, FONTS } from '../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Snackbar from 'react-native-snackbar';

const Scan = () => {
  const isFocused = useIsFocused();
    // ref
    const cameraRef = useRef(null);
  //  camera permissions
  const [hasCameraPermission, setHasCameraPermission] = useState(null);

  const [barcodeData,setBarcodeData] = useState(null);

  
  useEffect(() => {
    async function getCameraStatus() {
      const { status } = await Camera.requestCameraPermissionsAsync().catch(e => console.log(e));
      setHasCameraPermission(status === 'granted');
    }
    getCameraStatus();
  }, []);

  const ScanHeader = ()=> {
    return(
      <View style={{ flexDirection: 'row', marginTop: SIZES.padding * 4, paddingHorizontal: SIZES.padding * 3,alignItems:'center' }}>
              <TouchableOpacity
                style={{ width: 45, alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  source={icons.close}
                  style={{
                    height: 20,
                    width: 20,
                    tintColor: COLORS.white
                  }}
                />
              </TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{ color: COLORS.white, ...FONTS.body3 }}>Scan for Payment</Text>
              </View>
              <TouchableOpacity
                style={{
                  height: 45,
                  width: 45,
                  backgroundColor: COLORS.green,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={icons.info}
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: COLORS.white
                  }}
                />
              </TouchableOpacity>
            </View>
    )
  }
  const PaymentMethods = () => {
    return(
      <View
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height:SIZES.height * 0.2,
        padding: SIZES.padding * 3,
        borderTopLeftRadius:SIZES.radius,
        borderTopRightRadius: SIZES.radius,
        backgroundColor:COLORS.white
      }}>
         <Text style={{color:COLORS.black,...FONTS.h4}}>Other Payment Methods</Text>
         <View
         style={{
           flex:1,
           flexDirection: 'row',
           alignItems:'flex-start',
           marginTop:SIZES.padding * 2,
         }}>
<TouchableOpacity
style={{
  flexDirection:'row',
  alignItems:'center',
}}>
<View
style={{
  width:40,
  height:40,
  backgroundColor:COLORS.lightpurple,
  alignItems: 'center',
  justifyContent:'center',
  borderRadius:10,
}}>
<Image
source={icons.phone}
style={{
  resizeMode: 'cover',
  height:25,
  width:25,
  tintColor:COLORS.purple
}} />

</View>
<Text style={{color:COLORS.black,marginLeft:SIZES.padding,...FONTS.body4}}> Phone Number</Text>
</TouchableOpacity>
<TouchableOpacity
style={{
  flexDirection: 'row',
  alignItems:'center',
  marginLeft:SIZES.padding * 2,
}}>
<View
style={{
  width:40,
  height:40,
  backgroundColor:COLORS.lightGreen,
  alignItems:'center',
  justifyContent:'center',
  borderRadius:10,
}}>
  <Image
    source={icons.barcode}
    style={{
      resizeMode: 'cover',
      height:25,
      width:25,
      tintColor:COLORS.primary
    }}
  />
</View>
<Text style={{color:COLORS.black,marginLeft:SIZES.padding,...FONTS.body4}}>Barcode</Text>
</TouchableOpacity>
         </View>
      </View>
    )
  }

const ScanFocus = () => {
  return (
<View
style={{
  flex:1,
  alignItems: 'center',
  justifyContent:'center',
}}>
  <Image
    source={images.focus}
    style={{
      resizeMode:'stretch',
      marginTop:"-55%",
      width:SIZES.width*0.5,
      height:SIZES.height*0.3,
    }}
  />
</View>
  );
}

  const CameraComponent = forwardRef(({onBarcodeRead},ref) => {
    const screenWidth = SIZES.width;
    const height = Math.round((screenWidth * 16) / 9);
    return (
      <Camera
        ratio="16:9"
        autoFocus={'on'}
        ref={ref}
        onBarCodeScanned = {onBarcodeRead}
        style={{
          height: height,
          width: "100%",
          ...styles.cameraPreview
        }}
      >
        <ScanHeader/>
        <ScanFocus/>
        <PaymentMethods/>
      </Camera>
    );
  });
  
  const onBarcodeRead = ({data}) => {
    console.log(data)
    setBarcodeData(data);
    if(data){
       cameraRef?.current.pausePreview();
       Snackbar.show({
        text: `${data}`,
        duration: Snackbar.LENGTH_INDEFINITE,
        action: {
          text: 'OK',
          textColor: 'green',
          onPress: () => {
             setBarcodeData(null);
             cameraRef?.current.resumePreview();
            },
        },
      });
      }
   
  };

  if (hasCameraPermission === null) {
    return (
      <View style={styles.information}>
        <Text>Waiting for camera permissions</Text>
      </View>
    );
  } else if (hasCameraPermission === false) {
    return (
      <View style={styles.information}>
        <Text>No access to camera</Text>
      </View>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
      {console.log(isFocused)}
        {isFocused === true ?
        <CameraComponent onBarcodeRead={onBarcodeRead} ref={cameraRef}/>
   
          : null }

      </SafeAreaView>
    );
  }
};
const styles = StyleSheet.create({
  information: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  cameraPreview: {
    flex: 1,
  },
});
export default Scan;
