import { Text } from "react-native";
import { View } from "react-native";

import DespesaSumario from "./DespesaSumario";
import DespesaLista from "./DespesaLista";

//Interessante o que eu percebi: quando criamos um componente (<DespesaSumario /> por exemplo), podemos criar "atributos personalizados" como "despesas"
//que nada mais é do que a props que tem dentro do próprio componente, ou seja, o componente "pede" uma props e você passa.
//Porém tenho uma dúvida: igualar os nomes é adequado? Ainda me é estranho colocar despesas={despesas}, por mais que eu entenda, ainda levo um tempo para raciocinar.

export default function DespesaSaida({ despesas, periodo }) {
  return (
    <View>
      <DespesaSumario despesas={despesas} periodo={periodo} />
      <DespesaLista despesas={despesas} />
    </View>
  );
}
