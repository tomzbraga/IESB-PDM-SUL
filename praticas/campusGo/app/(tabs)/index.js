import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Button,
  StyleSheet,
} from "react-native";
import { useNotices } from "../../hooks/useNotices";
import FadeIn from "../../components/FadeIn";

export default function Inicio() {
  const { notices, isLoading, error, reload } = useNotices();

  if (isLoading && notices.length === 0) {
    return (
      <View style={styles.centro}>
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 12 }}>Carregando avisos...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centro}>
        <Text style={styles.erro}>{error}</Text>
        <Button title="Tentar novamente" onPress={reload} />
      </View>
    );
  }

  return (
    <FlatList
      data={notices}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={{ padding: 16, gap: 12, flexGrow: 1 }}
      refreshing={isLoading}
      onRefresh={reload}
      ListEmptyComponent={
        <View style={styles.centro}>
          <Text>Nenhum aviso por enquanto.</Text>
        </View>
      }
      renderItem={({ item, index }) => (
        <FadeIn delay={index * 60} style={styles.card}>
          <Text style={styles.titulo}>{item.title}</Text>
          <Text>{item.body}</Text>
        </FadeIn>
      )}
    />
  );
}

const styles = StyleSheet.create({
  centro: { flex: 1, justifyContent: "center", alignItems: "center", padding: 24, gap: 12 },
  erro: { color: "#c0392b", textAlign: "center", fontSize: 16 },
  card: { backgroundColor: "#f2f4f7", borderRadius: 10, padding: 14, gap: 6 },
  titulo: { fontWeight: "bold", fontSize: 16, textTransform: "capitalize" },
});