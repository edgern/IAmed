import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import Calendar from '../components/calendar/Calendar';
import { useSelector } from 'react-redux';
import messaging from '@react-native-firebase/messaging';

const HomeScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const medList = useSelector(state => state.med.medList);

  useEffect(() => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
    checkUserToken();
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert(
        remoteMessage.notification.title,
        remoteMessage.notification.body,
      );
    });

    return unsubscribe;
  }, []);

  const checkUserToken = async () => {
    const firebaseMessageToken = await messaging().getToken();
    if (firebaseMessageToken)
      console.log('firebaseMessageToken', firebaseMessageToken);
  };

  const keyExtractor = item => item.id;

  const renderItem = ({ item }) => {
    return (
      <View style={styles.todayMed}>
        <Text>{item.nome}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1a0b21' }}>
      <Calendar
        onSelectDate={date => setSelectedDate(date)}
        selected={selectedDate}
      />

      <View
        style={{
          flex: 1,
          paddingHorizontal: 10,
        }}>
        <FlatList
          data={medList}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
        <LinearGradient
          style={styles.addButtonContainer}
          colors={['#f67b5b', '#f6584e', '#f53f43']}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}>
          <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddMed')}>
            <Entypo name="plus" size={50} color="#fff" />
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 1,
  },
  todayMed: {
    padding: 5,
    backgroundColor: '#fff',
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    borderRadius: 100,
    width: 75,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#f67458',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 4,
  },

  addButton: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    margin: 0,
    alignSelf: 'center',
    lineHeight: 75,
    padding: 0,
    backgroundColor: 'black',
    fontSize: 70,
    color: '#fff',
  },
});

export default HomeScreen;
