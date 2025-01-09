import React, { useState, useEffect } from "react";
import { View, Image, Text, AppState } from "react-native";

import { SIZES, FONTS, COLORS, SHADOWS, assets } from "../constants";

const personImages = [
  assets.person02,
  assets.person03,
  assets.person04,
  assets.person05,
  assets.person06,
  assets.person07,
  assets.person08,
  assets.person09,
];

const generateRandomTime = () => {
  const hours = Math.floor(Math.random() * 12) + 2;
  const minutes = Math.floor(Math.random() * 60);
  return { hours, minutes };
};

export const NFTTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: subTitleSize,
          color: COLORS.primary,
        }}
      >
        by {subTitle}
      </Text>
    </View>
  );
};

export const EthPrice = ({ price }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        source={assets.eth}
        resizeMode="contain"
        style={{ width: 20, height: 20, marginRight: 2 }}
      />
      <Text
        style={{
          fontFamily: FONTS.medium,
          fontSize: SIZES.font,
          color: COLORS.primary,
        }}
      >
        {price}
      </Text>
    </View>
  );
};

const ImageCmp = ({ imgUrl, index }) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
};

export const People = ({ bids = [] }) => {
  // Reverse the array first, then take the first 3
  const recentBidders = [...bids]
    .reverse()
    .slice(0, 3)
    .reverse();  // Reverse again to get correct order

  return (
    <View style={{ flexDirection: "row" }}>
      {recentBidders.map((bid, index) => (
        <ImageCmp 
          imgUrl={bid.image} 
          index={index} 
          key={`Bidder-${bid.id}`} 
        />
      ))}
    </View>
  );
};

export const EndDate = ({ timeLeft }) => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: "50%",
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.primary,
        }}
      >
        Ending in
      </Text>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.medium,
          color: COLORS.primary,
        }}
      >
        {`${timeLeft.hours}h ${timeLeft.minutes}m`}
      </Text>
    </View>
  );
};

export const SubInfo = ({ bids = [], timeLeft }) => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <People bids={bids} />
      <EndDate timeLeft={timeLeft} />
    </View>
  );
};
