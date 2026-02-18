import { Home } from "./pages/Home";
// import { AboutPomodoro } from "./pages/AboutPomodoro";
// import { NotFound } from "./pages/NotFound";

import { TaskContextProvider } from "./contexts/TaskContext";

import "./styles/theme.css";
import "./styles/global.css";

export const App = () => {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
};
