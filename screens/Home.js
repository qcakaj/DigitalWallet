/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, SafeAreaView, StatusBar, Image, FlatList, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, FONTS, icons, images } from '../constants';

const Home = () => {
  const featuresData = [
    {
      id: 1,
      icon: icons.reload,
      color: COLORS.purple,
      backgroundColor: COLORS.lightpurple,
      description: 'Top Up',
    },
    {
      id: 2,
      icon: icons.send,
      color: COLORS.yellow,
      backgroundColor: COLORS.lightyellow,
      description: 'Transfer',
    },
    {
      id: 3,
      icon: icons.internet,
      color: COLORS.primary,
      backgroundColor: COLORS.lightGreen,
      description: 'Internet',
    },
    {
      id: 4,
      icon: icons.wallet,
      color: COLORS.red,
      backgroundColor: COLORS.lightRed,
      description: 'Wallet',
    },
    {
      id: 5,
      icon: icons.bill,
      color: COLORS.yellow,
      backgroundColor: COLORS.lightyellow,
      description: 'Bill',
    },
    {
      id: 6,
      icon: icons.game,
      color: COLORS.primary,
      backgroundColor: COLORS.lightGreen,
      description: 'Games',
    },
    {
      id: 7,
      icon: icons.phone,
      color: COLORS.red,
      backgroundColor: COLORS.lightRed,
      description: 'Mobile Prepaid',
    },
    {
      id: 8,
      icon: icons.more,
      color: COLORS.purple,
      backgroundColor: COLORS.lightpurple,
      description: 'More',
    },
  ];

  const specialPromoData = [
    {
      id: 1,
      img: images.promoBanner,
      title: 'Bonus Cashback1',
      description: "Don't miss it. Grab it now!",
    },
    {
      id: 2,
      img: images.promoBanner,
      title: 'Bonus Cashback2',
      description: "Don't miss it. Grab it now!",
    },
    {
      id: 3,
      img: images.promoBanner,
      title: 'Bonus Cashback3',
      description: "Don't miss it. Grab it now!",
    },
    {
      id: 4,
      img: images.promoBanner,
      title: 'Bonus Cashback4',
      description: "Don't miss it. Grab it now!",
    },
  ];

  const [features, setFeatures] = React.useState(featuresData);
  const [specialPromos, setSpecialPromos] = React.useState(specialPromoData);


  const PromoItem = ({ item }) => {
    console.log(item)
    return (

      <TouchableOpacity
        style={{
          marginVertical: SIZES.base,
          width: SIZES.width / 2.5
        }}
        onPress={() => { }}>
        <View
          style={{
            height: 80,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: COLORS.primary,
          }}>
          <Image
            source={images.promoBanner}
            style={{
              resizeMode: 'cover',
              width: "100%",
              height: "100%",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          />
        </View>
        <View
          style={{
            padding: SIZES.padding,
            backgroundColor: COLORS.lightGray,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}>
          <Text style={{ color: COLORS.black, ...FONTS.h4 }}>{item.title}</Text>
          <Text
            style={{ color: COLORS.black, ...FONTS.body4 }}>{item.description}</Text>
        </View>
      </TouchableOpacity>

    );
  }
  const PromoItemHeader = () => {
    return (
      <View>
      {/* HEADER */}
        <View style={{ flexDirection: 'row', marginVertical: SIZES.padding * 2, marginTop: SIZES.padding * 4,}}>
          <View style={{ flex: 1 }}>
            <Text style={{ color: COLORS.black, ...FONTS.h1 }}>Hello</Text>
            <Text style={{ color: COLORS.gray, ...FONTS.body2 }}>Qendrim</Text>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity
              style={{
                height: 40,
                width: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={icons.bell}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: COLORS.secondary,
                }} />
              <View
                style={{
                  position: 'absolute',
                  top: 7,
                  right: 7,
                  height: 10,
                  width: 10,
                  backgroundColor: COLORS.red,
                  borderRadius: 5,
                }}
              >

              </View>
            </TouchableOpacity>
          </View>

        </View>
        {/* //BANNER */}
        <View
          style={{ height: SIZES.height * 0.2, borderRadius: 20, }}>
          <Image
            source={images.banner}
            style={{
              resizeMode: 'cover',
              width: "100%",
              height: '100%',
              borderRadius: 20,

            }}
          />
        
        </View>
          {/* FEATURES */}
          <FlatList
          ListHeaderComponent={<FeaturesItemHeader/>}
            data={features}
            numColumns={4}
            columnWrapperStyle={{justifyContent:'space-between'}}
            keyExtractor={item => `${item.id}`}
            renderItem={({item}) => <FeaturesItem item={item}/>}
            contentContainerStyle={{
              marginTop:SIZES.padding * 2,
            }}
          />
          <View
          style={{
            flexDirection:'row',
            marginBottom:SIZES.padding,

          }}>
           <View style={{flex:1}}>
               <Text style={{color:COLORS.black,...FONTS.h3}}>Special Promos</Text>

           </View>
           <TouchableOpacity
           onPress={()=>{}}>
             <Text style={{color:COLORS.gray,...FONTS.body4}}>View All</Text>
           </TouchableOpacity>
          </View>
      </View>
    );
  }
  const FeaturesItem = ({item}) => {
    console.log(item)
         return (
       <TouchableOpacity
       style={{marginBottom: SIZES.padding * 2,width: 60,alignItems:'center'}}
       onPress={()=>{}}>
       <View style={{
         height:50,
         width:50,
         marginBottom:5,
         borderRadius:20,
         backgroundColor:item.backgroundColor,
         alignItems: 'center',
         justifyContent: 'center',
       }}>
        <Image
          source={item.icon}
          style={{
            resizeMode:'contain',
            height:20,
            width:20,
            tintColor:item.color
          }}
        />
       </View>
        <Text
        style={{textAlign:'center',flexWrap:'wrap',...FONTS.body4,color:COLORS.black}}>{item.description}</Text>
       </TouchableOpacity>
         );
  }
  const FeaturesItemHeader = () => {
    return(
      <View style={{marginBottom:SIZES.padding * 2,marginTop: SIZES.padding * 2}}>
         <Text style={{color:COLORS.black,...FONTS.h3}}>Features</Text>
      </View>
    )
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FlatList
        ListHeaderComponent={<PromoItemHeader />}
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding * 3,
        }}
      
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        data={specialPromos}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => <PromoItem item={item} />}
        showsVerticalScrollIndicator={false}
        overScrollMode='never'
      />

    </SafeAreaView>
  );
};
export default Home;
