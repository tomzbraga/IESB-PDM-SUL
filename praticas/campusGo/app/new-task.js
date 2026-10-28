import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function NovaTarefa() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 16 }}>
      <Text style={{ fontSize: 20 }}>Nova tarefa</Text>
      <Button title="Fechar" onPress={() => router.back()} />
    </View>
  );
}