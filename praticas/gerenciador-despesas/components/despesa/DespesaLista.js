import { Text, FlatList, View } from "react-native";

import DespesaItem from "./DespesaItem";
//Se nós estamos renderizando a partir do DespesaItem, por que ainda temos a renderDespesaItem? Parece ser apenas uma etapa das atividades que pode ser descartada agora.
function renderDespesaItem(itemData) {
  return (
    <View>
      <Text>{itemData.item.descricao}</Text>
      <Text>{itemData.item.valor}</Text>
    </View>
  );
}

export default function DespesaLista({ despesas }) {
  return (
    <FlatList
      data={despesas}
      renderItem={DespesaItem}
      keyExtractor={(item) => item.id}
    />
  );
}
