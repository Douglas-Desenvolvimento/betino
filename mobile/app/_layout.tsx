import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState  } from 'react';
import 'react-native-reanimated';
import { View, Text } from 'react-native';
//import tw from './config/tailwind';
import tw from "tailwind-react-native-classnames";

import { getSportsData } from '../services/api';


import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme() ?? "light"; // Garante um valor padrão
  console.log("tw1",tw);
  console.log("Testando Tailwind:", tw.style("p-4"));
  const [data, setData] = useState(null);
  
  useEffect(() => {
    getSportsData()
      .then(setData)
      .catch((err) => {
        console.error("Erro ao buscar dados esportivos:", err);
        setData(null); // Evita erro ao tentar acessar um objeto indefinido
      });
  }, []);
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
      <View style={tw.style("p-4 bg-gray-100")}>
      <Text style={tw`text-2xl font-bold text-blue-600`}>Assistente de Apostas</Text>
      <Text style={tw.style("mt-2 text-gray-700")}>Bem-vindo ao sistema de análise de apostas!</Text>
    </View>
    <View style={tw.style("flex-1 p-4 bg-gray-100")}>
      <Text style={tw.style("text-2xl font-bold text-blue-600")}>Dados Esportivos</Text>
      <Text style={tw.style("mt-2 text-gray-700")}>
        {data ? JSON.stringify(data, null, 2) : 'Carregando...'}
      </Text>
    </View>
    </ThemeProvider>
    
    
    
  );
}
