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
      style={[styles.card, selected === fullDate && { backgroundColor: '#fff' }]}>

      <Text style={[styles.big, selected === fullDate && { color: '#1a0b21' }]}>
        {day}
      </Text>
      <View style={{ height: 10 }} />
      <Text
        style={[
          styles.medium,
          selected === fullDate && {
            color: '#1a0b21',
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
    backgroundColor: '#24132a',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#f6584e',
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
