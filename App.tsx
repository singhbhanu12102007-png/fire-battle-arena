import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={s.c}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={s.sc}>
        <Text style={s.e}>🔥</Text>
        <Text style={s.t}>Fire Battle Arena</Text>
        <Text style={s.st}>Play. Compete. Win Real Money.</Text>
        <View style={s.cd}>
          <Text style={s.ct}>🎮 Fire Battle Cup #127</Text>
          <Text style={s.ci}>Squad • Bermuda • 36/48</Text>
          <View style={s.r}>
            <View style={s.i}><Text style={s.il}>Prize</Text><Text style={s.g}>₹2,500</Text></View>
            <View style={s.i}><Text style={s.il}>Kill</Text><Text style={s.o}>₹15</Text></View>
            <View style={s.i}><Text style={s.il}>Entry</Text><Text style={s.w}>₹50</Text></View>
          </View>
          <TouchableOpacity style={s.b}><Text style={s.bt}>JOIN NOW</Text></TouchableOpacity>
        </View>
        <View style={s.cd}>
          <Text style={s.ct}>🎯 Daily Free Fire #45</Text>
          <Text style={s.ci}>Squad • Purgatory • 28/48</Text>
          <View style={s.r}>
            <View style={s.i}><Text style={s.il}>Prize</Text><Text style={s.g}>₹500</Text></View>
            <View style={s.i}><Text style={s.il}>Kill</Text><Text style={s.o}>₹5</Text></View>
            <View style={s.i}><Text style={s.il}>Entry</Text><Text style={s.g}>FREE</Text></View>
          </View>
          <TouchableOpacity style={s.bf}><Text style={s.bft}>JOIN FREE</Text></TouchableOpacity>
        </View>
        <View style={s.cd}>
          <Text style={s.ct}>👑 Premium Elite Cup #12</Text>
          <Text style={s.ci}>Squad • Bermuda • 42/48</Text>
          <View style={s.r}>
            <View style={s.i}><Text style={s.il}>Prize</Text><Text style={s.g}>₹10,000</Text></View>
            <View style={s.i}><Text style={s.il}>Kill</Text><Text style={s.o}>₹40</Text></View>
            <View style={s.i}><Text style={s.il}>Entry</Text><Text style={s.w}>₹200</Text></View>
          </View>
          <TouchableOpacity style={s.b}><Text style={s.bt}>JOIN NOW</Text></TouchableOpacity>
        </View>
        <View style={s.cd}>
          <Text style={s.ct}>⚔️ Solo Showdown #89</Text>
          <Text style={s.lv}>🔴 LIVE • Kalahari</Text>
          <View style={s.r}>
            <View style={s.i}><Text style={s.il}>Prize</Text><Text style={s.g}>₹1,500</Text></View>
            <View style={s.i}><Text style={s.il}>Kill</Text><Text style={s.o}>₹10</Text></View>
            <View style={s.i}><Text style={s.il}>Entry</Text><Text style={s.w}>₹30</Text></View>
          </View>
        </View>
        <View style={s.n}>
          <Text style={s.nt}>🛡️ Fair Play Guaranteed</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  c: { flex: 1, backgroundColor: '#0A0E1A' },
  sc: { padding: 20, paddingBottom: 40 },
  e: { fontSize: 60, textAlign: 'center', marginTop: 20 },
  t: { color: '#FFF', fontSize: 28, fontWeight: '800', textAlign: 'center', marginTop: 8 },
  st: { color: '#00F0FF', fontSize: 14, textAlign: 'center', marginTop: 4, marginBottom: 24 },
  cd: { backgroundColor: '#1A1F35', borderRadius: 14, borderWidth: 1, borderColor: 'rgba(0,240,255,0.2)', padding: 16, marginBottom: 12 },
  ct: { color: '#FFF', fontSize: 16, fontWeight: '700', marginBottom: 4 },
  ci: { color: '#8B8FA3', fontSize: 12, marginBottom: 12 },
  lv: { color: '#FF3366', fontSize: 12, fontWeight: '700', marginBottom: 12 },
  r: { flexDirection: 'row', backgroundColor: '#0A0E1A', borderRadius: 10, padding: 12, marginBottom: 12 },
  i: { flex: 1, alignItems: 'center' },
  il: { color: '#5A5E73', fontSize: 10, marginBottom: 2 },
  g: { color: '#00FF88', fontSize: 14, fontWeight: '700' },
  o: { color: '#FF6B00', fontSize: 14, fontWeight: '700' },
  w: { color: '#FFF', fontSize: 14, fontWeight: '700' },
  b: { backgroundColor: '#00F0FF', borderRadius: 10, paddingVertical: 10, alignItems: 'center' },
  bt: { color: '#0A0E1A', fontSize: 14, fontWeight: '700' },
  bf: { backgroundColor: 'rgba(0,255,136,0.2)', borderWidth: 1, borderColor: '#00FF88', borderRadius: 10, paddingVertical: 10, alignItems: 'center' },
  bft: { color: '#00FF88', fontSize: 14, fontWeight: '700' },
  n: { backgroundColor: 'rgba(0,255,136,0.08)', borderWidth: 1, borderColor: 'rgba(0,255,136,0.2)', borderRadius: 10, padding: 12, marginTop: 8 },
  nt: { color: '#8B8FA3', fontSize: 12, textAlign: 'center' },
});
