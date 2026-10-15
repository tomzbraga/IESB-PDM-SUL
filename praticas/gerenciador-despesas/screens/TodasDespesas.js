import { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

import DespesaSaida from "../components/despesa/DespesaSaida";

const CATEGORIAS = ["Alimentação", "Transporte", "Lazer", "Contas"];

export default function TodasDespesas() {
  const [categoriaFiltro, setCategoriaFiltro] = useState("");

  const DUMMY_DESPESAS = [
    {
      id: "1",
      descricao: "Conta de luz",
      valor: 100.99,
      categoria: "Contas",
      data: new Date(2026, 10, 9),
    },
    {
      id: "2",
      descricao: "Conta de Água",
      valor: 40.99,
      categoria: "Contas",
      data: new Date(2026, 7, 9),
    },
    {
      id: "3",
      descricao: "Mercado",
      valor: 187.45,
      categoria: "Alimentação",
      data: new Date(2026, 9, 5),
    },
    {
      id: "4",
      descricao: "Uber",
      valor: 32.9,
      categoria: "Transporte",
      data: new Date(2026, 9, 8),
    },
    {
      id: "5",
      descricao: "Cinema",
      valor: 60,
      categoria: "Lazer",
      data: new Date(2026, 9, 10),
    },
  ];

  function filtrarPorCategoria(despesas, categoria) {
    if (categoria === "") {
      return despesas;
    }
    return despesas.filter((despesa) => despesa.categoria === categoria);
  }

  return (
    <View>
      <View style={styles.filtros}>
        {["", ...CATEGORIAS].map((item) => (
          <Pressable
            key={item}
            onPress={() => setCategoriaFiltro(item)}
            style={[
              styles.filtro,
              categoriaFiltro === item && styles.filtroSelecionado,
            ]}
          >
            <Text
              style={[
                categoriaFiltro === item && styles.filtroTextoSelecionado,
              ]}
            >
              {item === "" ? "Todas" : item}
            </Text>
          </Pressable>
        ))}
      </View>
      <DespesaSaida
        despesas={filtrarPorCategoria(DUMMY_DESPESAS, categoriaFiltro)}
        periodo={categoriaFiltro === "" ? "Total" : categoriaFiltro}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  filtros: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginHorizontal: 5,
    marginTop: 10,
  },
  filtro: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  filtroSelecionado: {
    backgroundColor: "#3f51b5",
    borderColor: "#3f51b5",
  },
  filtroTextoSelecionado: {
    color: "white",
  },
});
