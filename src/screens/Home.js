import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Calendar from '../components/calendar/Calendar';

const HomeScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: '#394d69' }}>
        <Calendar
          onSelectDate={(date) => setSelectedDate(date)}
          selected={selectedDate}
        />
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#394d69',
        }}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('NewMed')}>
          <Entypo name="plus" size={50} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 1,
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    borderRadius: 100,
    backgroundColor: '#9dd1bb',
    width: 75,
    height: 75,
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
