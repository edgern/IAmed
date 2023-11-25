import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const AddMed = ({navigation}) => {
  const [nome, setNome] = useState('');
  const [horarioInicial, setHorarioInicial] = useState('');
  const [intervalo, setIntervalo] = useState('');
  const [quantidadeDoses, setQuantidadeDoses] = useState('');
  const [compartimento, setCompartimento] = useState('');

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
      <TextInput
        style={styles.input}
        placeholder="Nome"
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Horario inicial"
        onChangeText={setHorarioInicial}
      />
      <TextInput
        style={styles.input}
        placeholder="Intervalo"
        onChangeText={setIntervalo}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade de doses"
        onChangeText={setQuantidadeDoses}
      />
      <TextInput
        style={styles.input}
        placeholder="Compartimento"
        onChangeText={setCompartimento}
        value={compartimento}
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
