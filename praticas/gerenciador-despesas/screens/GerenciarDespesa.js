import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function GerenciarDespesa() {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [data, setData] = useState(new Date());

  const [showPicker, setShowPicker] = useState(false);
  const onChange = (e, selectedDate) => {
    const currentDate = selectedDate || data;
    setShowPicker(false);
    setData(currentDate);
  };

  const handleChangeValor = (text) => {
    const cleanText = text.replace(",", ".");

    const match = cleanText.match(/^\d*\.?\d{0,2}$/);

    if (match) {
      setValor(cleanText);
    }
  };

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
          maxLength={10}
          value={valor}
          onChangeText={handleChangeValor}
        ></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Data da despesa</Text>
        <Pressable onPress={() => setShowPicker(true)} style={styles.input}>
          <Text>{data.toLocaleDateString("pt-BR")}</Text>
        </Pressable>
        {showPicker && (
          <DateTimePicker
            value={data}
            mode="date"
            display="default"
            onChange={onChange}
          />
        )}
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
