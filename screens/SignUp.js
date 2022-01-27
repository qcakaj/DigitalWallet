/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    TextInput,
    Modal,
    FlatList,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    StatusBar,
    SafeAreaView,
} from 'react-native';

import { COLORS, SIZES, FONTS, icons, images } from '../constants';
import LinearGradient from 'react-native-linear-gradient';
import { Button, Header, Logo } from '../components';

const SignUp = ({navigation,route}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                const countriesData = data.map(item => {
                    return {
                        code: item.cca2,
                        name: item.name.official,
                        callingCode: `${item.idd.root}${item.idd.suffixes}`,
                        flag: item.flags.png,
                    };
                });
                setCountries(countriesData);
                if (countriesData.length > 0) {
                    const selectedCountry = countriesData.filter(country => country.code == 'XK');
                    if (selectedCountry.length > 0) {
                        setSelectedCountry(selectedCountry[0]);
                    }
                }
            });
    }, []);
    const CountriesModal = () => {
        return (
            <Modal
            animationType='fade'
            transparent={true}
            onRequestClose={()=> setModalVisible(false)}
            visible={modalVisible}>
                <TouchableWithoutFeedback
                onPress={()=>{setModalVisible(false)}}>
                   <View 
                   style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <View
                    style={{
                        height:SIZES.height * 0.8,
                        width:SIZES.width * 0.8,
                        backgroundColor:COLORS.lightGreen,
                        borderRadius:SIZES.radius * 0.3,
                    }}>
                        <FlatList
                            data={countries}
                            renderItem={({item}) => {
                                return (
                              <TouchableOpacity
                              style={{padding:SIZES.padding,flexDirection:'row', justifyContent:'center',alignItems:'center'}}
                              onPress= {()=>{
                                  setSelectedCountry(item);
                                  setModalVisible(false);
                              }}>
                                 <Image
                                     source={{uri:item.flag}}
                                     style = {{
                                         width:30,
                                         height:30,
                                         marginRight:10,
                                     }}
                                 />
                                 <Text style={{flex:1,color:COLORS.black,...FONTS.body4}}>{item.name}</Text>
                              </TouchableOpacity>
                                );
                            }}
                            keyExtractor={(item) => item.code}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{
                                padding:SIZES.padding * 2,
                                marginBottom: SIZES.padding * 2,
                            }}
                        />
                    </View>
                   </View>
                </TouchableWithoutFeedback>
            </Modal>
        );
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                style={{
                    flex: 1,
                }}>
                <LinearGradient
                    colors={[COLORS.lime, COLORS.emerald]}
                    style={{
                        flex: 1,
                    }}
                >
                    <StatusBar translucent={true} backgroundColor="transparent" />
                    <Header title="Sign Up" />
                    <ScrollView>

                        <Logo />
                        {/* FORM */}
                        <View
                            style={{
                                marginTop: SIZES.padding * 3,
                                marginHorizontal: SIZES.padding * 3,
                            }}>
                            {/* FULL NAME */}
                            <View style={{ marginTop: SIZES.padding * 3 }}>
                                <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}> Full Name</Text>
                                <TextInput
                                    style={{
                                        marginVertical: SIZES.padding,
                                        borderBottomColor: COLORS.white,
                                        borderBottomWidth: 1,
                                        height: 40,
                                        color: COLORS.white,
                                        ...FONTS.body3,
                                    }}
                                    placeholder="Enter Full Name"
                                    placeholderTextColor={COLORS.white}
                                    selectionColor={COLORS.white} />
                            </View>

                            {/* PHONE NUMBER */}
                            <View
                                style={{
                                    marginTop: SIZES.padding * 2,
                                }}>
                                <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>Phone Number</Text>
                                <View style={{
                                    flexDirection: 'row',
                                }}>
                                    {/* COUNTRY CODY */}
                                    <TouchableOpacity
                                        style={{
                                            width: 100,
                                            height: 50,
                                            marginHorizontal: 5,
                                            borderBottomColor: COLORS.white,
                                            borderBottomWidth: 1,
                                            flexDirection: 'row',
                                            ...FONTS.body2,
                                        }}
                                        onPress={() => { setModalVisible(true); }}>
                                        <View style={{ justifyContent: 'center' }}>
                                            <Image
                                                source={icons.down}
                                                style={{
                                                    width: 10,
                                                    height: 10,
                                                    tintColor: COLORS.white,
                                                }}
                                            />
                                        </View>
                                        <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                                            <Image
                                                source={{ uri: selectedCountry?.flag }}
                                                style={{
                                                    resizeMode: 'contain',
                                                    width: 30,
                                                    height: 30,
                                                    textAlign: 'center',
                                                }}
                                            />
                                        </View>
                                        <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                                            <Text style={{ color: COLORS.white, ...FONTS.body3 }}>{selectedCountry?.callingCode}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    {/* PHONE NUMBER */}
                                    <TextInput
                                        style={{
                                            flex: 1,
                                            marginVertical: SIZES.padding,
                                            borderBottomWidth: 1,
                                            borderBottomColor: COLORS.white,
                                            height: 40,
                                            color: COLORS.white,
                                            ...FONTS.body3,
                                        }}
                                        placeholder="Enter Phone Number"
                                        placeholderTextColor={COLORS.white}
                                        selectionColor={COLORS.white}
                                    />
                                </View>
                            </View>
                            {/* Password */}
                            <View style={{ marginTop: SIZES.padding * 2 }}>
                                <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>Password</Text>
                                <TextInput
                                    secureTextEntry={!showPassword}
                                    style={{
                                        flex: 1,
                                        marginVertical: SIZES.padding,
                                        borderBottomWidth: 1,
                                        borderBottomColor: COLORS.white,
                                        height: 40,
                                        color: COLORS.white,
                                        ...FONTS.body3,
                                    }}
                                    placeholder="Enter Password"
                                    placeholderTextColor={COLORS.white}
                                    selectionColor={COLORS.white}
                                />
                                <TouchableOpacity
                                    style={{
                                        position: 'absolute',
                                        right: 0,
                                        bottom: 10,
                                        height: 30,
                                        width: 30,
                                    }}
                                    onPress={() => { setShowPassword(!showPassword); }}>
                                    <Image source={showPassword ? icons.disable_eye : icons.eye}
                                        style={{
                                            height: 20,
                                            width: 20,
                                            tintColor: COLORS.white,
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                            {/* Button */}
                            <Button onPress={()=>{navigation.navigate("Home")}} text="Continue" style={{ marginTop: SIZES.padding }} />
                        </View>

                    </ScrollView>
                   <CountriesModal/>
                </LinearGradient>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};
export default SignUp;
