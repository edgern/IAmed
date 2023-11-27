import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Keyboard
} from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import RNPickerSelect from 'react-native-picker-select';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import moment from 'moment';

import { addMed } from '../redux/slices/medSlice'

const AddMed = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [horarioInicial, setHorarioInicial] = useState('');
  const [intervalo, setIntervalo] = useState('');
  const [quantidadeDoses, setQuantidadeDoses] = useState('');
  const [compartimento, setCompartimento] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const dispatch = useDispatch();

  const handleAddMedication = () => {
    const med = {
      id: uuid(),
      nome,
      horarioInicial,
      intervalo,
      quantidadeDoses,
      compartimento,
    }

    dispatch(addMed(med));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar</Text>

      <View style={{ marginBottom: 10 }}>
        <FloatingLabelInput
          value={nome}
          label='Nome'
          returnKeyType='done'
          onSubmit={() => { Keyboard.dismiss() }}
          onChangeText={setNome}
          containerStyles={{
            borderWidth: 1,
            borderColor: '#CCC',
            borderRadius: 5,
            height: 40
          }}
          customLabelStyles={{
            leftFocused: 5,
            colorBlurred: '#CCC',
            colorFocused: '#CCC'
          }}
          labelStyles={{
            paddingHorizontal: 5
          }}
          inputStyles={{
            height: 40,
            paddingHorizontal: 10,
            marginTop: 10,
            color: '#000'
          }}
        />
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode='time'
        onConfirm={time => {
          setHorarioInicial(moment(time).format('HH:mm'))
          setDatePickerVisibility(false)
        }}
        onCancel={() => setDatePickerVisibility(false)}
      />

      <TouchableOpacity
        style={[styles.input, { justifyContent: 'center' }]}
        onPress={() => setDatePickerVisibility(true)}
      >
        <Text style={{ color: horarioInicial ? '#000' : '#CCC' }}>{horarioInicial ? horarioInicial : 'Horário inicial'}</Text>
      </TouchableOpacity>

      <RNPickerSelect
        placeholder={{ label: 'Intervalo', value: '' }}
        onValueChange={(value) => setIntervalo(value)}
        items={[
          { label: '1', value: 1 },
          { label: '2', value: 2 },
          { label: '3', value: 4 },
          { label: '3', value: 6 },
          { label: '3', value: 8 },
          { label: '3', value: 12 },
          { label: '3', value: 24 },
        ]}
        value={intervalo}
        useNativeAndroidPickerStyle={false}
        textInputProps={{ height: 40, marginBottom: 10, paddingHorizontal: 10, borderWidth: 1, borderRadius: 5, borderColor: '#CCC', color: '#000' }}
      />

      <RNPickerSelect
        placeholder={{ label: 'Quantidade de doses', value: '' }}
        onValueChange={(value) => setCompartimento(value)}
        items={[
          { label: '1', value: 1 },
          { label: '2', value: 2 },
          { label: '3', value: 3 },
        ]}
        value={compartimento}
        useNativeAndroidPickerStyle={false}
        textInputProps={{ height: 40, marginBottom: 10, paddingHorizontal: 10, borderWidth: 1, borderRadius: 5, borderColor: '#CCC', color: '#000' }}
      />

      <RNPickerSelect
        placeholder={{ label: 'Compartimento', value: '' }}
        onValueChange={(value) => setQuantidadeDoses(value)}
        items={[
          { label: '1', value: 1 },
          { label: '2', value: 2 },
          { label: '3', value: 3 },
          { label: '4', value: 4 },
          { label: '5', value: 5 },
          { label: '6', value: 6 },
        ]}
        value={quantidadeDoses}
        useNativeAndroidPickerStyle={false}
        textInputProps={{ height: 40, marginBottom: 10, paddingHorizontal: 10, borderWidth: 1, borderRadius: 5, borderColor: '#CCC', color: '#000' }}
      />

      <TouchableOpacity style={styles.addButton} onPress={handleAddMedication}>
        <Text style={styles.addButtonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  addButton: {
    backgroundColor: '#9dd1bb',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default AddMed;
