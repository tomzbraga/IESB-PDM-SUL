import { View, Text, StyleSheet } from "react-native";

export default function DespesaSumario({ despesas, periodo }) {
  const somaDespesas = despesas.reduce((total, despesa) => {
    return total + despesa.valor;
  }, 0);
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemText}>
        <Text>{periodo}</Text>
      </View>
      <View style={styles.itemText}></View>
      <Text style={somaDespesas > 200 && styles.valorAlto}>
        R$ {somaDespesas.toFixed(2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    padding: 5,
    marginVertical: 10,
    marginHorizontal: 5,
    backgroundColor: "darkgray",
    flexDirection: "row",
  },
  itemText: {
    flex: 1,
    padding: 2,
    marginVertical: 2,
    marginHorizontal: 2,
    alignContent: "left",
  },
  valorAlto: {
    color: "red",
  },
});
