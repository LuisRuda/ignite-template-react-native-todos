import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet } from 'react-native';

interface IFlatListHeaderComponente {
  darkMode: boolean;
}

function FlatListHeaderComponent({darkMode}: IFlatListHeaderComponente) {
  return (
    <View>
      <Text style={[styles.header, darkMode && styles.headerDark]}>Minhas tasks</Text>
    </View>
  )
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  darkMode: boolean;
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({ tasks, onLongPress, onPress, darkMode }: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
            style={item.done ? [styles.taskButtonDone, darkMode && styles.taskButtonDoneDark] : styles.taskButton}
          >
            <View 
              testID={`marker-${index}`}
              style={item.done ? [styles.taskMarkerDone, darkMode && styles.taskMarkerDoneDark] : [styles.taskMarker, darkMode && styles.taskMarkerDark]}
            />
            <Text 
              style={item.done ? styles.taskTextDone : styles.taskText}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent darkMode={darkMode} />}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={[styles.list, darkMode && styles.listDark]}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    marginTop: 32,
    marginHorizontal: 24,
    backgroundColor: '#fff',
  },
  listDark: {
    backgroundColor: '#1F1F1F'
  },
  header: {
    color: '#3D3D4D',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  headerDark: {
    color: '#67E480'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10
  },
  taskMarkerDark: {
    borderColor: '#67E480',
  },
  taskText: {
    color: '#3D3D4D',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskButtonDoneDark : {
    backgroundColor: 'rgba(68, 71, 90, 0.1)',
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#273FAD',
    marginRight: 10
  },
  taskMarkerDoneDark: {
    backgroundColor: '#67E480',
  },
  taskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through'
  }
})