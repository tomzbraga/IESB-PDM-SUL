import * as ImagePicker from "expo-image-picker";
import { Alert, Linking } from "react-native";

const OPCOES = { allowsEditing: true, aspect: [1, 1], quality: 0.7 };

export async function pickImage() {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ["images"],
    ...OPCOES,
  });
  if (result.canceled) return null;
  return result.assets[0].uri;
}

export async function takePhoto() {
  const { status } = await ImagePicker.requestCameraPermissionsAsync();

  if (status !== "granted") {
    Alert.alert(
      "Permissão da câmera",
      "Sem permissão não é possível tirar a foto. Você pode liberar nos ajustes.",
      [
        { text: "Agora não", style: "cancel" },
        { text: "Abrir ajustes", onPress: () => Linking.openSettings() },
      ]
    );
    return null;
  }

  const result = await ImagePicker.launchCameraAsync(OPCOES);
  if (result.canceled) return null;
  return result.assets[0].uri;
}