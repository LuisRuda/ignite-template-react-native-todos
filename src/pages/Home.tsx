import React, { useState } from 'react';
import {View, StyleSheet} from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  function handleAddTask(newTaskTitle: string) {
    if (newTaskTitle === '') return;

    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    }

    setTasks((oldState: Task[]) => [...oldState, newTask])
  }

  function handleMarkTaskAsDone(id: number) {
    const tempTasks = tasks.map((task: Task) => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    })

    setTasks(tempTasks)
  }

  function handleRemoveTask(id: number) {
    const tempTasks = tasks.filter((task: Task) => task.id !== id);

    setTasks(tempTasks);
  }

  return (
    <View style={[styles.container, darkMode && styles.containerDark]}>
      <Header darkMode={darkMode} onChangeDarkMode={setDarkMode} />

      <TodoInput addTask={handleAddTask} darkMode={darkMode} />

      <MyTasksList 
        tasks={tasks} 
        darkMode={darkMode}
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  containerDark : {
    backgroundColor: '#1F1F1F'
  }
})