import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import moment from 'moment';
import 'moment/locale/pt-br';
import Date from './Date';

const Calendar = ({ onSelectDate, selected }) => {
  const [dates, setDates] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentMonth, setCurrentMonth] = useState();

  const flatlistRef = useRef(null);

  const getDates = () => {
    const _dates = [];
    for (let i = -3; i < 4; i++) {
      const date = moment().add(i, 'days').toDate();
      _dates.push(date);
    }
    setDates(_dates);
  };

  useEffect(() => {
    getDates();
  }, []);

  useEffect(() => {
    if (dates.length > 0 && flatlistRef.current) {
      flatlistRef.current.scrollToIndex({
        animated: false,
        index: 3,
        viewOffset: Dimensions.get('window').width / 2.5,
      });
    }
  }, [dates]);

  const getCurrentMonth = () => {
    moment.locale('pt-BR');

    const month = moment(dates[0])
      .add(scrollPosition / 60, 'days')
      .format('MMMM, YYYY');
    setCurrentMonth(month);
  };

  useEffect(() => {
    getCurrentMonth();
  }, [scrollPosition]);

  return (
    <>
      <View style={styles.centered}>
        <Text style={styles.title}>{currentMonth}</Text>
      </View>
      <View style={styles.dateSection}>
        <View style={styles.scroll}>
          <FlatList
            ref={flatlistRef}
            data={dates}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Date date={item} onSelectDate={onSelectDate} selected={selected} />
            )}
            getItemLayout={(data, index) => ({ length: 90, offset: 90 * index, index: index })}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  centered: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  title: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  dateSection: {
    width: '100%',
    padding: 0,
  },
  scroll: {
    height: 150,
  },
});
