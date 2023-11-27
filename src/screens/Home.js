import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Calendar from '../components/calendar/Calendar';
import { useSelector } from 'react-redux';

const HomeScreen = ({ navigation }) => {
  const medList = useSelector(state => state.med.medList);

  const [selectedDate, setSelectedDate] = useState(null);

  const keyExtractor = (item) => item.id;

  const renderItem = ({ item }) => {
    return (
      <View style={{ backgroundColor: '#aaa' }}>
        <Text>{item.nome}</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#394d69' }}>
      <Calendar
        onSelectDate={date => setSelectedDate(date)}
        selected={selectedDate}
      />

      <View
        style={{
          flex: 1,
          paddingHorizontal: 10,
          backgroundColor: '#394d69',
        }}>
        <FlatList
          data={medList}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddMed')}>
          <Entypo name="plus" size={50} color="#fff" />
        </TouchableOpacity>
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
