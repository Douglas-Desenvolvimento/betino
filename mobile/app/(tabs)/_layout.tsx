import { Tabs } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { View, Text } from 'react-native';
import tw from "tailwind-react-native-classnames";
;
import { getSportsData } from '../../services/api';


export default function TabLayout() {
  const colorScheme = useColorScheme() ?? "light"; // Garante um valor padrão
  const [data, setData] = useState(null);
  console.log("tw2",tw);
  console.log("Testando Tailwind:", tw.style("p-4"));
  useEffect(() => {
    getSportsData()
      .then(setData)
      .catch((err) => {
        console.error("Erro ao buscar dados esportivos:", err);
        setData(null); // Evita erro ao tentar acessar um objeto indefinido
      });
  }, []);
  return (
    <>
    {/* <View style={tw.style("p-4 bg-gray-100")}>
      <Text style={tw`text-2xl font-bold text-blue-600`}>Assistente de Apostas</Text>
      <Text style={tw.style("mt-2 text-gray-700")}>Bem-vindo ao sistema de análise de apostas!</Text>
    </View>
    <View style={tw.style("flex-1 p-4 bg-gray-100")}>
      <Text style={tw.style("text-2xl font-bold text-blue-600")}>Dados Esportivos</Text>
      <Text style={tw.style("mt-2 text-gray-700")}>
        {data ? JSON.stringify(data, null, 2) : 'Carregando...'}
      </Text>
    </View> */}
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"]?.tint ?? "#000",
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
    </>
  );
}
