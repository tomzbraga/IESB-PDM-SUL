import { View, Text, Button, Share } from "react-native";
import { useExpenses } from "../../store/expenses-context";

export default function Bolso() {
  const { expenses } = useExpenses();

  const total = (expenses ?? []).reduce(
    (soma, item) => soma + Number(item.amount || 0),
    0
  );

  async function compartilharResumo() {
    try {
      await Share.share({
        message: `Gastei R$ ${total.toFixed(2)} neste semestre.`,
      });
    } catch (erro) {
      console.log("Erro ao compartilhar:", erro.message);
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 16 }}>
      <Text style={{ fontSize: 18 }}>Total gasto</Text>
      <Text style={{ fontSize: 28, fontWeight: "bold" }}>R$ {total.toFixed(2)}</Text>
      <Button title="Compartilhar resumo" onPress={compartilharResumo} />
    </View>
  );
}