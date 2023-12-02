import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const MedicationItem = ({ medication, onDelete }) => {
  return (
    <View style={styles.todayMed}>
      <View style={styles.medInfo}>
        <Text style={styles.medName}>{medication.nome}</Text>
        <View style={styles.timeContainer}>
        <Text style={styles.time}>{medication.horarioInicial}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(medication.id)}>
        <FontAwesome5 name='trash' size={30} color="red"></FontAwesome5>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  todayMed: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#BFDAD3',
    height: 65,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  medInfo: {
    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
  },
  medName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 10,
  },
  timeContainer: {
    position: 'absolute',
    right: 10,
  },
  time: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
  },
  deleteButton: {
    borderRadius: 5,
    padding: 5,
  },
});

export default MedicationItem;
