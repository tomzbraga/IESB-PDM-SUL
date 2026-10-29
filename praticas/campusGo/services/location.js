import * as Location from "expo-location";

export async function getCurrentPlace() {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") return null;

  const pos = await Location.getCurrentPositionAsync({});
  const { latitude, longitude } = pos.coords;

  let label = `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`;
  try {
    const [endereco] = await Location.reverseGeocodeAsync({ latitude, longitude });
    if (endereco) {
      const partes = [
        endereco.street,
        endereco.streetNumber,
        endereco.district,
        endereco.city,
      ].filter(Boolean);
      if (partes.length) label = partes.join(", ");
    }
  } catch {
    // sem endereço: mantém as coordenadas
  }

  return { latitude, longitude, label };
}