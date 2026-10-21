import { Text, View, Pressable, StyleSheet } from "react-native";

function getFormatedDate(date) {
  return (
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
  );
}

export default function DespesaItem({ item }) {
  return (
    <Pressable>
      <View style={styles.itemContainer}>
        <View style={styles.itemText}>
          <Text>{getFormatedDate(item.date)}</Text>
          <View style={styles.category}>
            <Text style={styles.textCategory}>{item.category}</Text>
          </View>
        </View>
        <View style={styles.itemText}>
          <Text>{item.description}</Text>
        </View>
        <View style={styles.itemText}>
          <Text>{item.price}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 5,
    backgroundColor: "lightgray",
    flexDirection: "row",
  },
  itemText: {
    flex: 1,
    padding: 2,
    marginVertical: 2,
    marginHorizontal: 2,
    alignContent: "left",
  },
  category: {
    alignSelf: "flex-start",
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 8,
    marginTop: 4,
  },
  textCategory: {
    fontSize: 11,
  },
});
