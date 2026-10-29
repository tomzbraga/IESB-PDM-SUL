import { View, Text, Button, Alert, StyleSheet } from "react-native";
import { Link, useRouter } from "expo-router";
import * as Haptics from "expo-haptics";
import { useState } from "react";
import { getCurrentPlace } from "../../services/location";
import { scheduleReminder } from "../../services/notifications";

export default function Tarefas() {
  const router = useRouter();
  const [lugar, setLugar] = useState(null);

  async function estudeiAqui() {
    try {
      const place = await getCurrentPlace();
      if (!place) {
        Alert.alert(
          "Localização",
          "Sem permissão de localização não consigo registrar o check-in."
        );
        return;
      }
      setLugar(place.label);
    } catch {
      Alert.alert("Localização", "Não foi possível obter sua localização agora.");
    }
  }

  async function lembrar() {
    try {
      const id = await scheduleReminder("Hora de estudar!", 10);
      if (!id) {
        Alert.alert("Notificações", "Permissão negada. Libere nos ajustes do celular.");
        return;
      }
      Alert.alert("Lembrete agendado", "Você será avisado em 10 segundos.");
    } catch {
      Alert.alert("Notificações", "Não foi possível agendar o lembrete.");
    }
  }

  async function concluir() {
    try {
      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } catch {
      // sem vibração (emulador): segue normalmente
    }
    Alert.alert("Tarefa concluída");
  }

  return (
    <View style={styles.tela}>
      <Text style={styles.titulo}>Tarefas</Text>

      <Button title="Nova tarefa" onPress={() => router.push("/new-task")} />

      <Link href="/task/42" style={styles.link}>
        Abrir tarefa 42
      </Link>

      <Button title="Estudei aqui" onPress={estudeiAqui} />
      {lugar && <Text style={styles.lugar}>📍 {lugar}</Text>}

      <Button title="Lembrar em 10 s" onPress={lembrar} />
      <Button title="Concluir" onPress={concluir} />
    </View>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, justifyContent: "center", alignItems: "center", gap: 14, padding: 20 },
  titulo: { fontSize: 22, fontWeight: "bold" },
  link: { color: "#007AFF", fontSize: 18 },
  lugar: { textAlign: "center", fontSize: 15 },
});