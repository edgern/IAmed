import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import Calendar from '../components/calendar/Calendar';
import AddMedButton from '../components/buttons/AddMedButton';
import MedicationItem from '../components/medications/MedicationItem';
import {useSelector} from 'react-redux';
import messaging from '@react-native-firebase/messaging';

const HomeScreen = ({navigation}) => {
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
      <MedicationItem
        medication={item}
        onDelete={(medicationId) => handleDeleteMedication(medicationId)}
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#1a0b21'}}>
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
        <AddMedButton onPress={() => navigation.navigate('AddMed')} />
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
});

export default HomeScreen;
