import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Gap = ({height, width}: Partial<{height: number; width: number}>) => {
  return <View style={{height: height, width: width}}></View>;
};

export default Gap;
