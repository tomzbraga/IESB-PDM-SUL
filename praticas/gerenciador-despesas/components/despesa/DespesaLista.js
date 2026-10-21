import { Text, FlatList, View } from "react-native";

import DespesaItem from "./DespesaItem";
//Se nós estamos renderizando a partir do DespesaItem, por que ainda temos a renderDespesaItem? Parece ser apenas uma etapa das atividades que pode ser descartada agora.
function renderDespesaItem(itemDate) {
  return (
    <View>
      <Text>{itemDate.item.description}</Text>
      <Text>{itemDate.item.price}</Text>
    </View>
  );
}

export default function DespesaLista({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={DespesaItem}
      keyExtractor={(item) => item.id}
    />
  );
}
