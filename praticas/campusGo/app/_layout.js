import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const ABAS = [
  { name: "index", title: "Início", icon: "home" },
  { name: "tasks", title: "Tarefas", icon: "checkbox" },
  { name: "wallet", title: "Bolso", icon: "wallet" },
  { name: "profile", title: "Perfil", icon: "person" },
];

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#007AFF" }}>
      {ABAS.map((aba) => (
        <Tabs.Screen
          key={aba.name}
          name={aba.name}
          options={{
            title: aba.title,
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? aba.icon : `${aba.icon}-outline`}
                size={size}
                color={color}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}