import { useEffect, useState } from "react";
import { View, Text, Image, Pressable, Button, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { pickImage, takePhoto } from "../../services/media";

const CHAVE = "@profile-photo";

export default function Perfil() {
  const [foto, setFoto] = useState(null);

  useEffect(() => {
    async function carregar() {
      try {
        const salva = await AsyncStorage.getItem(CHAVE);
        if (salva) setFoto(salva);
      } catch (e) {
        console.log("Erro ao ler a foto:", e.message);
      }
    }
    carregar();
  }, []);

  async function salvar(uri) {
    if (!uri) return;
    setFoto(uri);
    try {
      await AsyncStorage.setItem(CHAVE, uri);
    } catch (e) {
      console.log("Erro ao salvar a foto:", e.message);
    }
  }

  return (
    <View style={styles.tela}>
      <Pressable onPress={async () => salvar(await pickImage())}>
        {foto ? (
          <Image source={{ uri: foto }} style={styles.avatar} />
        ) : (
          <View style={[styles.avatar, styles.vazio]}>
            <Ionicons name="person" size={60} color="#999" />
          </View>
        )}
      </Pressable>

      <Text>Toque na foto para escolher da galeria</Text>
      <Button title="Tirar foto" onPress={async () => salvar(await takePhoto())} />
    </View>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, justifyContent: "center", alignItems: "center", gap: 16 },
  avatar: { width: 140, height: 140, borderRadius: 70 },
  vazio: { backgroundColor: "#e6e8eb", justifyContent: "center", alignItems: "center" },
});