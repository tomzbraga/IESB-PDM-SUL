import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export async function setupNotifications() {
  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "CampusGo",
      importance: Notifications.AndroidImportance.DEFAULT,
    });
  }

  const atual = await Notifications.getPermissionsAsync();
  let status = atual.status;
  if (status !== "granted") {
    const pedido = await Notifications.requestPermissionsAsync();
    status = pedido.status;
  }
  return status === "granted";
}

export async function scheduleReminder(title, seconds) {
  const permitido = await setupNotifications();
  if (!permitido) return null;

  return Notifications.scheduleNotificationAsync({
    content: { title: "CampusGo", body: title },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds,
      channelId: "default",
    },
  });
}