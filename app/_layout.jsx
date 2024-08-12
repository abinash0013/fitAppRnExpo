import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="exercises" options={{
        presentation: 'fullScreenModal'
      }} />
    </Stack>
  );
}

const styles = StyleSheet.create({})

export default Layout;
