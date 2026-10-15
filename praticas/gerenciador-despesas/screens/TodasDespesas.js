import { StyleSheet, View } from "react-native";

import DespesaSaida from "../components/despesa/DespesaSaida";

export default function TodasDespesas() {
  const DUMMY_DESPESAS = [
    {
      id: "1",
      descricao: "Conta de luz",
      valor: 100.99,
      data: new Date(2026, 10, 9),
    },
    {
      id: "2",
      descricao: "Conta de Água",
      valor: 40.99,
      data: new Date(2026, 7, 9),
    },
  ];

  return (
    <View>
      <DespesaSaida despesas={DUMMY_DESPESAS} periodo={"Total"} />
    </View>
  );
}
