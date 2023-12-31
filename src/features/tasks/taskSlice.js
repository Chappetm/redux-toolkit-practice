import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Task 1 description",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    description: "Task 2 description",
    completed: false,
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      //Redux toolkit permite esto, aunque el estado sigue siendo inmutable
      state.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload;

      const taskFound = state.find((task) => task.id === id);

      if (taskFound) {
        taskFound.title = title;
        taskFound.description = description;
      }
    },
    deleteTask: (state, action) => {
      // Esta opción también es válida, solo que devuelve un nuevo array filtrado
      // return state.filter((task) => task.id !== action.payload);

      const taskFound = state.find((task) => task.id === action.payload);

      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1);
      }
    },
  },
});

export const { addTask, editTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
