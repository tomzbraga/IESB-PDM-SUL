import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const CATEGORIAS = ["Alimentação", "Transporte", "Lazer", "Contas"];

export default function GerenciarDespesa({ navigation }) {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [data, setData] = useState(new Date());
  const [categoria, setCategoria] = useState("");

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

  const formularioValido =
    descricao.trim() !== "" && Number(valor) > 0 && categoria !== "";

  const handleSalvar = () => {
    if (!formularioValido) {
      return;
    }
    navigation.goBack();
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
        <Text style={styles.label}>Categoria</Text>
        <View style={styles.categorias}>
          {CATEGORIAS.map((item) => (
            <Pressable
              key={item}
              onPress={() => setCategoria(item)}
              style={[
                styles.categoria,
                categoria === item && styles.categoriaSelecionada,
              ]}
            >
              <Text
                style={[categoria === item && styles.categoriaTextoSelecionado]}
              >
                {item}
              </Text>
            </Pressable>
          ))}
        </View>
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
      <Pressable
        onPress={handleSalvar}
        disabled={!formularioValido}
        style={[styles.botao, !formularioValido && styles.botaoDesabilitado]}
      >
        <Text style={styles.botaoTexto}>Salvar</Text>
      </Pressable>
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
  categorias: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  categoria: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  categoriaSelecionada: {
    backgroundColor: "#3f51b5",
    borderColor: "#3f51b5",
  },
  categoriaTextoSelecionado: {
    color: "white",
  },
  botao: {
    backgroundColor: "#3f51b5",
    padding: 12,
    alignItems: "center",
    marginHorizontal: 4,
    marginTop: 8,
  },
  botaoDesabilitado: {
    opacity: 0.4,
  },
  botaoTexto: {
    color: "white",
    fontWeight: "bold",
  },
});
