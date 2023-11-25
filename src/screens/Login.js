import React, { useState, useRef } from 'react';
import { SafeAreaView, View, Text, Image, Pressable } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { useDispatch } from 'react-redux';

import { login, setUserEmail } from '../redux/slices/userSlice'

const logo = require('../assets/logo.jpeg');

function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const authenticate = () => {
    dispatch(setUserEmail(email))
    dispatch(login())
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
      <View style={{ flex: 1, paddingTop: '5%', paddingHorizontal: '5%' }}>
        <View style={{ alignItems: 'center' }}>
          <Image style={{ height: 200 }} source={logo} resizeMode='contain' />
        </View>
        <View style={{}}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000', marginBottom: 20, marginLeft: 10 }}>Faça o Login </Text>
          <FloatingLabelInput
            value={email}
            label='Email'
            keyboardType='email-address'
            textContentType='username'
            autoCapitalize='none'
            returnKeyType='next'
            onSubmit={() => { passwordRef.current?.focus() }}
            minLength={6}
            maxLength={100}
            selectionColor={'#02A89D'}
            onChangeText={text => setEmail(text)}
            containerStyles={{
              borderWidth: 1,
              paddingHorizontal: 5,
              borderColor: '#02A89D',
              borderRadius: 8,
              height: 50
            }}
            customLabelStyles={{
              leftFocused: 5,
              colorBlurred: '#05675F',
              colorFocused: '#05675F'
            }}
            labelStyles={{
              paddingHorizontal: 5
            }}
            inputStyles={{
              color: '#000',
              paddingHorizontal: 10
            }}
          />
          <View style={{ height: 20 }} />
          <FloatingLabelInput
            value={password}
            ref={passwordRef}
            label='Senha'
            keyboardType='email-address'
            textContentType='password'
            autoCapitalize='none'
            returnKeyType='done'
            onSubmit={() => authenticate()}
            isPassword
            togglePassword={false}
            minLength={4}
            maxLength={16}
            onChangeText={text => setPassword(text)}
            containerStyles={{
              borderWidth: 1,
              paddingHorizontal: 5,
              borderColor: '#02A89D',
              borderRadius: 8,
              height: 50
            }}
            customLabelStyles={{
              leftFocused: 5,
              colorBlurred: '#05675F',
              colorFocused: '#05675F'
            }}
            labelStyles={{
              paddingHorizontal: 5
            }}
            inputStyles={{
              color: '#000',
              paddingHorizontal: 10
            }}
          />
          <View style={{ height: 50 }} />
        </View>
        <Pressable
          style={({ pressed }) => [
            { alignSelf: 'center', justifyContent: 'center', width: '60%', height: 50, borderRadius: 20, backgroundColor: '#05675F' },
            Platform.OS === 'ios' && pressed && { backgroundColor: '#02A89D' }
          ]}
          android_ripple={{ color: '#02A89D', borderless: false }}
          onPress={() => authenticate()}
        >
          <Text style={{ fontSize: 16, textAlign: 'center', color: '#FFF', fontWeight: 'bold' }}>Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Login;