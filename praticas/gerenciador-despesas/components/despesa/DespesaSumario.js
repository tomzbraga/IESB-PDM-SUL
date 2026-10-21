import { View, Text, StyleSheet } from "react-native";

export default function DespesaSumario({ expenses, period }) {
  const sumExpenses = expenses.reduce((total, expense) => {
    return total + expense.price;
  }, 0);
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemText}>
        <Text>{period}</Text>
      </View>
      <View style={styles.itemText}></View>
      <Text style={sumExpenses > 200 && styles.highValue}>
        R$ {sumExpenses.toFixed(2)}
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
  highValue: {
    color: "red",
  },
});
