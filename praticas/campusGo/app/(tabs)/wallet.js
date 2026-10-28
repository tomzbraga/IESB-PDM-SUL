import { View, Text } from "react-native";
import { useExpenses } from "../../store/expenses-context";

export default function Bolso() {
  const { expenses } = useExpenses();

  const total = (expenses ?? []).reduce(
    (soma, item) => soma + Number(item.amount || 0),
    0
  );

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 8 }}>
      <Text style={{ fontSize: 18 }}>Total gasto</Text>
      <Text style={{ fontSize: 28, fontWeight: "bold" }}>
        R$ {total.toFixed(2)}
      </Text>
    </View>
  );
}