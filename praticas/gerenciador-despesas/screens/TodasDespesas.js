import { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

import DespesaSaida from "../components/expense/DespesaSaida";

const CATEGORIES = ["Alimentação", "Transporte", "Lazer", "Contas"];

export default function TodasDespesas() {
  const [categoryFilter, setCategoryFilter] = useState("");

  const DUMMY_EXPENSES = [
    {
      id: "1",
      description: "Conta de luz",
      price: 100.99,
      category: "Contas",
      date: new Date(2026, 10, 9),
    },
    {
      id: "2",
      description: "Conta de Água",
      price: 40.99,
      category: "Contas",
      date: new Date(2026, 7, 9),
    },
    {
      id: "3",
      description: "Mercado",
      price: 187.45,
      category: "Alimentação",
      date: new Date(2026, 9, 5),
    },
    {
      id: "4",
      description: "Uber",
      price: 32.9,
      category: "Transporte",
      date: new Date(2026, 9, 8),
    },
    {
      id: "5",
      description: "Cinema",
      price: 60,
      category: "Lazer",
      date: new Date(2026, 9, 10),
    },
  ];

  function filterCategory(expenses, category) {
    if (category === "") {
      return expenses;
    }
    return expenses.filter((expense) => expense.category === category);
  }

  return (
    <View>
      <View style={styles.filters}>
        {["", ...CATEGORIES].map((item) => (
          <Pressable
            key={item}
            onPress={() => setCategoryFilter(item)}
            style={[
              styles.filter,
              categoryFilter === item && styles.selectedFilter,
            ]}
          >
            <Text
              style={[
                categoryFilter === item && styles.selectedTextFilter,
              ]}
            >
              {item === "" ? "Todas" : item}
            </Text>
          </Pressable>
        ))}
      </View>
      <DespesaSaida
        expenses={filterCategory(DUMMY_EXPENSES, categoryFilter)}
        period={categoryFilter === "" ? "Total" : categoryFilter}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  filters: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginHorizontal: 5,
    marginTop: 10,
  },
  filter: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  selectedFilter: {
    backgroundColor: "#3f51b5",
    borderColor: "#3f51b5",
  },
  selectedTextFilter: {
    color: "white",
  },
});
