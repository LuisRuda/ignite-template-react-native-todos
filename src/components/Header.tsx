import React, {useState} from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity, Image } from 'react-native';

import dayModeIcon from '../assets/icons/sunny.png';
import nightModeIcon from '../assets/icons/night-mode.png';

interface IHeader {
  darkMode: boolean;
  onChangeDarkMode: (value: boolean) => void;

}

export function Header({darkMode, onChangeDarkMode}: IHeader) {
  function handleDarkMode() {
    onChangeDarkMode(!darkMode);
  }

  return (
    <View style={[styles.header, darkMode && styles.headerDark]}>
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      <TouchableOpacity style={styles.screenModeButton} onPress={handleDarkMode}>
        <Image source={!darkMode ? dayModeIcon : nightModeIcon} style={styles.screenModeIcon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',
  },
  headerDark: {
    backgroundColor: '#483C67',
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  screenModeButton: {
    padding: 16,
    position: 'absolute',
    right: 6
  },
  screenModeIcon: {
    width: 26,
    resizeMode: 'contain'
  }
});
