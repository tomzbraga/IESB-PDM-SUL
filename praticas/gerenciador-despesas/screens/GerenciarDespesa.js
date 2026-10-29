import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useExpenses } from "../store/expenses-context";

const CATEGORIES = ["Alimentação", "Transporte", "Lazer", "Contas"];

export default function GerenciarDespesa({ navigation }) {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [data, setDate] = useState(new Date());
  const [category, setCategory] = useState("");

  const { addExpense } = useExpenses();

  const [showPicker, setShowPicker] = useState(false);
  const onChange = (e, selectedDate) => {
    const currentDate = selectedDate || data;
    setShowPicker(false);
    setDate(currentDate);
  };

  const handleChangePrice = (text) => {
    const cleanText = text.replace(",", ".");

    const match = cleanText.match(/^\d*\.?\d{0,2}$/);

    if (match) {
      setPrice(cleanText);
    }
  };

  const validForm =
    description.trim() !== "" && Number(price) > 0 && category !== "";

  function handleSave() {
    addExpense({
      description: description,
      amount: parseFloat(price),
      date: date,
      category: 'Outros'
    });
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={styles.input}
          maxLength={20}
          value={description}
          onChangeText={setDescription}
        ></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Valor</Text>
        <TextInput
          style={styles.input}
          keyboardType="decimal-pad"
          maxLength={10}
          value={price}
          onChangeText={handleChangePrice}
        ></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Categoria</Text>
        <View style={styles.categories}>
          {CATEGORIES.map((item) => (
            <Pressable
              key={item}
              onPress={() => setCategory(item)}
              style={[
                styles.category,
                category === item && styles.selectedCategory,
              ]}
            >
              <Text
                style={[category === item && styles.selectedTextCategory]}
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
        onPress={handleSave}
        disabled={!validForm}
        style={[styles.button, !validForm && styles.unabledButton]}
      >
        <Text style={styles.textButton}>Salvar</Text>
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
  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  category: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  selectedCategory: {
    backgroundColor: "#3f51b5",
    borderColor: "#3f51b5",
  },
  selectedTextCategory: {
    color: "white",
  },
  button: {
    backgroundColor: "#3f51b5",
    padding: 12,
    alignItems: "center",
    marginHorizontal: 4,
    marginTop: 8,
  },
  unabledButton: {
    opacity: 0.4,
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
  },
});
