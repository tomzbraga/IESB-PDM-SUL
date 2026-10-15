import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function GerenciarDespesa() {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [data, setData] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={styles.input}
          maxLength={20}
          value={descricao}
          onChangeText={setDescricao}
        ></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Valor</Text>
        <TextInput
          style={styles.input}
          keyboardType="decimal-pad"
          value={valor}
          onChangeText={setValor}
        ></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Data</Text>
        <TextInput
          style={styles.input}
          placeholder="DD/MM/AAAA"
          maxLength={10}
          value={data}
          onChangeText={setData}
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 16,
  },
  label: {
    fontSize: 12,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
  },
});
