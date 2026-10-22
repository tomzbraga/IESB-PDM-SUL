import { StyleSheet, Text, View } from "react-native";
import { useExpenses } from "../store/expenses-context";

import DespesaSaida from "../components/despesa/DespesaSaida";

export default function DespesasRecentes() {
  const { expenses } = useExpenses();

  const today = new Date();
  const lastSevenDays = new Date();
  lastSevenDays.setDate(today.getDate() - 7);

  const recent = expenses.filter(
    (e) => e.date >= lastSevenDays && e.date <= today
  );

  return (
    <DespesaSaida
      expenses={recent}
      period={"Últimos 7 dias"}
    />
  );
}