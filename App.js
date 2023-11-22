import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigations/Navigation';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Navigation />
    </NavigationContainer>
  );
}
