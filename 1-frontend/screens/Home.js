import React, { useState, useEffect } from "react";
import { View, SafeAreaView, FlatList, AppState } from "react-native";

import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, NFTData } from "../constants";

const generateRandomTime = () => {
  const hours = Math.floor(Math.random() * 12) + 2;
  const minutes = Math.floor(Math.random() * 60);
  return { hours, minutes };
};

const Home = () => {
  const [nftData, setNftData] = useState(
    NFTData.map(nft => ({
      ...nft,
      timeLeft: generateRandomTime()
    }))
  );
  const [appState, setAppState] = useState(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      setAppState(nextAppState);
    });

    const timer = setInterval(() => {
      if (appState === 'active') {  // Only update if app is active
        setNftData(prevData => 
          prevData.map(nft => ({
            ...nft,
            timeLeft: nft.timeLeft.minutes === 0 
              ? nft.timeLeft.hours === 0
                ? generateRandomTime()
                : { hours: nft.timeLeft.hours - 1, minutes: 59 }
              : { ...nft.timeLeft, minutes: nft.timeLeft.minutes - 1 }
          }))
        );
      }
    }, 60000);  // Updates every minute

    return () => {
      clearInterval(timer);
      subscription.remove();
    };
  }, [appState]);

  const handleSearch = (value) => {
    if (value.length === 0) {
      setNftData(prevData => NFTData.map(nft => ({
        ...nft,
        timeLeft: prevData.find(item => item.id === nft.id)?.timeLeft || generateRandomTime()
      })));
      return;
    }

    const filteredData = nftData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
  
    if (filteredData.length === 0) {
      setNftData(prevData => NFTData.map(nft => ({
        ...nft,
        timeLeft: prevData.find(item => item.id === nft.id)?.timeLeft || generateRandomTime()
      })));
    } else {
      setNftData(filteredData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View
            style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;