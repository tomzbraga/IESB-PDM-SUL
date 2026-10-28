import { View, Text, Button } from "react-native";
import { Link, useRouter } from "expo-router";

export default function Tarefas() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 16 }}>
      <Text style={{ fontSize: 20 }}>Tarefas</Text>

      <Button title="Nova tarefa" onPress={() => router.push("/new-task")} />

      <Link href="/task/42" style={{ color: "#007AFF", fontSize: 18 }}>
        Abrir tarefa 42
      </Link>
    </View>
  );
}