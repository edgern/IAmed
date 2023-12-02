import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import moment from 'moment';

const DateComponent = ({ date, onSelectDate, selected }) => {
  const day = moment(date).format('ddd');
  const dayNumber = moment(date).format('D');
  const fullDate = moment(date).format('YYYY-MM-DD');

  useEffect(() => {
    const currentDate = moment().format('YYYY-MM-DD');
    onSelectDate(currentDate);
  }, []);

  return (
    <TouchableOpacity
      onPress={() => onSelectDate(fullDate)}
      style={[styles.card, selected === fullDate && { backgroundColor: '#339d91' }]}>

      <Text style={[styles.big, selected === fullDate && { color: '#fff' }]}>
        {day}
      </Text>
      <View style={{ height: 10 }} />
      <Text
        style={[
          styles.medium,
          selected === fullDate && {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 24,
          },
        ]}>
        {dayNumber}
      </Text>
    </TouchableOpacity>
  );
};

export default DateComponent;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#DFDFDF',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#66b5ac',
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    height: 90,
    width: 80,
    marginHorizontal: 5,
  },
  big: {
    color:'#605263',
    fontWeight: 'bold',
    fontSize: 20,
  },
  medium: {
    color:'#605263',
    fontSize: 16,
  },
});
