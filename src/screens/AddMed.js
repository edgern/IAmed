import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

const AddMed = () => {
  const [mensagens, setMensagens] = useState([]);
  const [perguntas, setPerguntas] = useState([
    'Qual o nome do medicamento?',
    'Qual o dia que começou a tomar o medicamento? Ex: 05/11/2022',
    'Que horas tomou pela primeira vez? Ex: 15:00',
  ]);
  const [respostaAtual, setRespostaAtual] = useState('');

  useEffect(() => {
    adicionarPergunta('esquerda');
  }, []);

  const adicionarPergunta = (lado) => {
    if (perguntas.length > 0) {
      setMensagens((prevMensagens) => [
        ...prevMensagens,
        { texto: perguntas[0], lado },
      ]);
      setPerguntas((prevPerguntas) => prevPerguntas.slice(1));
    }
  };

  const handleResponderPress = () => {
    if (respostaAtual.trim() !== '') {
      setMensagens((prevMensagens) => [
        ...prevMensagens,
        { texto: respostaAtual, lado: 'direita' },
      ]);
      adicionarPergunta('esquerda');
      setRespostaAtual('');
    }
  };

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: '#f0f0f0' }}>
      <ScrollView contentContainerStyle={styles.conversaContainer}>
        {mensagens.map((mensagem, index) => (
          <View
            key={index}
            style={[
              styles.mensagemContainer,
              {
                justifyContent: mensagem.lado === 'esquerda' ? 'flex-start' : 'flex-end',
                backgroundColor: mensagem.lado === 'esquerda' ? '#b3e0f0' : '#e0f0b3',
                borderTopLeftRadius: mensagem.lado === 'esquerda' ? 16 : 0,
                borderTopRightRadius: mensagem.lado === 'direita' ? 16 : 0,
                borderBottomLeftRadius: 16,
                borderBottomRightRadius: 16,
              },
            ]}
          >
            <Text>{mensagem.texto}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.entradaContainer}>
        <TextInput
          style={styles.input}
          value={respostaAtual}
          onChangeText={setRespostaAtual}
          placeholder="Digite sua resposta..."
          placeholderTextColor="#666"
        />
        <Button title="Responder" onPress={handleResponderPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conversaContainer: {
    paddingBottom: 16,
  },
  mensagemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  entradaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  input: {
    flex: 1,
    marginRight: 8,
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    borderColor: '#ccc',
  },
});

export default AddMed;
