import React, {useState, useRef} from 'react';
import {SafeAreaView, View, Text, Image, Pressable, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import {useDispatch} from 'react-redux';

import {login, setUserEmail} from '../redux/slices/userSlice';

const logo = require('../assets/logo.jpeg');

function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const authenticate = () => {
    dispatch(setUserEmail(email));
    dispatch(login());
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#1a0b21'}}>
      <View style={{flex: 1, paddingTop: '5%', paddingHorizontal: '5%'}}>
        <View style={{alignItems: 'center'}}>
          <Image style={{height: 200}} source={logo} resizeMode="contain" />
        </View>
        <View style={{}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#fff',
              marginBottom: 20,
              marginLeft: 10,
            }}>
            Faça o Login{' '}
          </Text>
          <FloatingLabelInput
            value={email}
            label="Email"
            keyboardType="email-address"
            textContentType="username"
            autoCapitalize="none"
            returnKeyType="next"
            onSubmit={() => {
              passwordRef.current?.focus();
            }}
            minLength={6}
            maxLength={100}
            selectionColor={'#f6584e'}
            onChangeText={text => setEmail(text)}
            containerStyles={{
              borderWidth: 1,
              paddingHorizontal: 5,
              backgroundColor: '#24132a',
              borderColor: '#f6584e',
              borderRadius: 8,
              height: 50,
            }}
            customLabelStyles={{
              leftFocused: 5,
              colorBlurred: '#605263',
              colorFocused: '#605263',
            }}
            labelStyles={{
              paddingHorizontal: 5,
            }}
            inputStyles={{
              color: '#fff',
              paddingHorizontal: 10,
            }}
          />
          <View style={{height: 20}} />
          <FloatingLabelInput
            value={password}
            ref={passwordRef}
            label="Senha"
            keyboardType="email-address"
            textContentType="password"
            autoCapitalize="none"
            returnKeyType="done"
            onSubmit={() => authenticate()}
            isPassword
            togglePassword={false}
            minLength={4}
            maxLength={16}
            onChangeText={text => setPassword(text)}
            containerStyles={{
              borderWidth: 1,
              paddingHorizontal: 5,
              backgroundColor: '#24132a',
              borderColor: '#f6584e',
              borderRadius: 8,
              height: 50,
            }}
            customLabelStyles={{
              leftFocused: 5,
              colorBlurred: '#605263',
              colorFocused: '#605263',
            }}
            labelStyles={{
              paddingHorizontal: 5,
            }}
            inputStyles={{
              color: '#fff',
              paddingHorizontal: 10,
            }}
          />
          <View style={{height: 50}} />
        </View>
        <LinearGradient
          style={styles.loginButtonContainer}
          colors={['#f67b5b', '#f6584e', '#f53f43']}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 1}}>
          <Pressable
            style={({pressed}) => [
              {
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                borderRadius: 20,
              },
              Platform.OS === 'ios' && pressed && {backgroundColor: '#f53f43'},
            ]}
            android_ripple={{color: '#f53f43', borderless: false}}
            onPress={() => authenticate()}>
            <Text
              style={{
                fontSize: 16,
                textAlign: 'center',
                color: '#FFF',
                fontWeight: 'bold',
              }}>
              Login
            </Text>
          </Pressable>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
loginButtonContainer: {
  width: '60%',
  height: 50,
  borderRadius: 20,
  alignSelf: 'center',
  shadowColor: '#f67458',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.3,
  shadowRadius: 10,
  elevation: 5,
},
});

export default Login;
