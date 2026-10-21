import { StyleSheet, Text, View } from "react-native";

import DespesaSaida from "../components/despesa/DespesaSaida";

export default function DespesasRecentes() {
  function filterLast7Days(expenses) {
    const today = new Date();
    const lastSevenDays = new Date();
    lastSevenDays.setDate(today.getDate() - 7);

    return expenses.filter((expense) => {
      return expense.date >= lastSevenDays && expense.date <= today;
    });
  }

  const DUMMY_EXPENSES = [
    {
      id: "1",
      description: "Conta de luz",
      price: 100.99,
      category: "Contas",
      date: new Date(2026, 9, 12),
    },
    {
      id: "2",
      description: "Conta de agua",
      price: 40.99,
      category: "Contas",
      date: new Date(2026, 7, 9),
    },
  ];
  return (
    <DespesaSaida
      expenses={filterLast7Days(DUMMY_EXPENSES)}
      period={"Últimos 7 dias"}
    />
  );
}
