import React, { useState } from 'react';
import { 
  View, Text, ScrollView, TextInput, TouchableOpacity, 
  SafeAreaView, Modal, StatusBar 
} from 'react-native';
import { 
  Search, Cpu, Crown, Zap, ShieldCheck, Check, X, Bell, 
  ArrowUpRight, ArrowRight, LogOut, Activity, LayoutDashboard, User as UserIcon
} from 'lucide-react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

export default function App() {
  const [user, setUser] = useState<any>(null);
  const [showMembership, setShowMembership] = useState(false);

  if (!user) {
    return (
      <SafeAreaView className="flex-1 bg-[#020617] justify-center px-8">
        <StyledView className="items-center mb-10">
          <StyledView className="bg-indigo-600 p-6 rounded-[2.5rem]">
            <Cpu size={48} color="white" />
          </StyledView>
        </StyledView>
        <StyledText className="text-4xl font-black text-white text-center mb-10">Terminal Login</StyledText>
        <TextInput 
          className="bg-slate-900 p-5 rounded-3xl text-white mb-4"
          placeholder="Email Address"
          placeholderTextColor="#475569"
        />
        <TouchableOpacity 
          onPress={() => setUser({ name: 'User', tier: 'Standard' })}
          className="bg-indigo-600 p-6 rounded-3xl items-center"
        >
          <StyledText className="text-white font-black">INITIALIZE SESSION</StyledText>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-[#020617]">
      <StatusBar barStyle="light-content" />
      <ScrollView className="flex-1 p-6">
        <StyledView className="flex-row justify-between items-center mb-8">
          <StyledText className="text-3xl font-black text-white">StockAI</StyledText>
          <Bell color="white" size={24} />
        </StyledView>

        <StyledView className="bg-white/5 p-8 rounded-[3rem] border border-white/10 mb-6">
          <StyledText className="text-slate-500 font-bold">RELIANCE.NS</StyledText>
          <StyledText className="text-5xl font-black text-white">₹2,984.50</StyledText>
          <StyledView className="bg-emerald-500/10 self-start px-3 py-1 rounded-full mt-2">
            <StyledText className="text-emerald-400">+1.20%</StyledText>
          </StyledView>
        </StyledView>

        <TouchableOpacity 
          onPress={() => setShowMembership(true)}
          className="bg-amber-500 p-6 rounded-3xl flex-row justify-center items-center"
        >
          <Crown color="black" size={20} />
          <StyledText className="font-black ml-2">UPGRADE TO PRO</StyledText>
        </TouchableOpacity>
      </ScrollView>

      {/* Logout Button */}
      <TouchableOpacity onPress={() => setUser(null)} className="p-6 items-center">
        <StyledText className="text-rose-500 font-bold">TERMINATE SESSION</StyledText>
      </TouchableOpacity>
    </SafeAreaView>
  );
}