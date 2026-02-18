import * as React from "react";
import { createContext, useState } from "react";

import type { TaskStateModel } from "../../models/TaskStateModel.ts";
import { initialTaskState } from "./initialTaskState.ts";

type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
}

type TaskContextProviderProps = {
  children: React.ReactNode;
}

const initialContextValue = {
  state: initialTaskState,
  setState: () => {},
}

export const TaskContext = createContext<TaskContextProps>(initialContextValue)

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
  const [state, setState] = useState(initialTaskState);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
  )
}
