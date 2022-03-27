import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigation from './navigation';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NativeBaseProvider>
          <Navigation />
        <StatusBar style="auto" />
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
}

