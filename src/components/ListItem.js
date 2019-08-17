import React from 'react';
import View from 'components/AnimatedView';
import { Text, TouchableOpacity } from 'react-native';
import useTheme from 'hooks/useTheme';

export default function ListItem() {
  const theme = useTheme();
  return <View style={{
    marginLeft: 8,
    marginRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    alignItems: "center", borderBottom: `1px solid ${theme.borderLight}`, flexDirection: 'row'
  }}>
    <View style={{ paddingLeft: 8, paddingRight: 8, }}>
      <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', borderRadius: '50%', border: `1px solid ${theme.borderLight}`, height: 72, width: 72 }} >
        <View style={{ width: 24, height: 24, backgroundColor: theme.mainColor, borderRadius: 2 }} />
      </TouchableOpacity>
    </View>
    <View style={{ flex: 1, paddingLeft: 8, paddingRight: 8, }}>
      <Text style={{ fontSize: 24 }}>Download 1</Text>
      <View style={{ backgroundColor: theme.borderLight, width: '100%', height: 4, marginTop: 4, marginBottom: 4 }}>
        <View style={{ backgroundColor: theme.mainColor, width: '50%', height: 4, }} />
      </View>
      <View>
        <Text>Downloading * 69.6% * 1h 52 m * 5/14</Text>
      </View>
      <View>
        <Text>3.5GB/5GB * 0.0KB/s</Text>
      </View>
    </View>
  </View>
}