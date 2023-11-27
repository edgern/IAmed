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
import moment from 'moment';

const AddMed = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [horarioInicial, setHorarioInicial] = useState('');
  const [intervalo, setIntervalo] = useState('');
  const [quantidadeDoses, setQuantidadeDoses] = useState('');
  const [compartimento, setCompartimento] = useState('');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const handleAddMedication = () => {
    // Add your logic to handle adding medication
    // You can use the values of nome, horarioInicial, intervalo, quantidadeDoses, compartimento
    // For example, you can log them for now
    console.log({
      nome,
      horarioInicial,
      intervalo,
      quantidadeDoses,
      compartimento,
    });

    // Add navigation logic to go back to the previous screen
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
            color: '#000',
            paddingHorizontal: 10,
            marginTop: 10,
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
        placeholder={{ label: 'Intervalo entre doses', value: '' }}
        onValueChange={(value) => setIntervalo(value)}
        items={[
          { label: '4 em 4 horas', value: 4 },
          { label: '6 em 6 horas', value: 6 },
          { label: '8 em 8 horas', value: 8 },
          { label: '12 em 12 horas', value: 12 },
          { label: '24 em 24 horas', value: 24 },
        ]}
        value={intervalo}
        useNativeAndroidPickerStyle={false}
        textInputProps={{ height: 40, marginBottom: 10, paddingHorizontal: 10, borderWidth: 1, borderRadius: 5, borderColor: '#CCC' }}
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
        textInputProps={{ height: 40, marginBottom: 10, paddingHorizontal: 10, borderWidth: 1, borderRadius: 5, borderColor: '#CCC' }}
      />

      <RNPickerSelect
        placeholder={{ label: 'Compartimento', value: '' }}
        onValueChange={(value) => setQuantidadeDoses(value)}
        items={[
          { label: 'A', value: 1 },
          { label: 'B', value: 2 },
          { label: 'C', value: 3 },
          { label: 'D', value: 4 },
          { label: 'E', value: 5 },
          { label: 'F', value: 6 },
        ]}
        value={quantidadeDoses}
        useNativeAndroidPickerStyle={false}
        textInputProps={{ height: 40, marginBottom: 10, paddingHorizontal: 10, borderWidth: 1, borderRadius: 5, borderColor: '#CCC' }}
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
