import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';

const AddMedButton = ({ onPress }) => {
  return (
    <LinearGradient
      style={styles.addButtonContainer}
      colors={['#018576', '#1a9183', '#339d91']}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}>
      <TouchableOpacity
        style={styles.addButton}
        onPress={onPress}>
        <Entypo name="plus" size={50} color="#fff" />
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  addButtonContainer: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    borderRadius: 100,
    width: 75,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#018576',
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

export default AddMedButton;
