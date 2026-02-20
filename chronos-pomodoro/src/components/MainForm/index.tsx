import * as React from "react";
import { useState } from "react";
import { PlayCircleIcon } from "lucide-react";

import { useTaskContext } from "../../hooks/useTaskContext.ts";

import type { TaskModel } from "../../models/TaskModel.ts";

import { getNextCycle } from "../../utils/getNextCycle.ts";

import { Input } from "../Input";
import { Button } from "../Button";
import { Cycle } from "../Cycle";


export const MainForm = () => {
  const [taskName, setTaskName] = useState("")

  const { setState, state } = useTaskContext();

  const nextCycle = getNextCycle(state.currentCycle);

  const handleCreatNewTask = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (taskName.trim() === "") {
      alert("Digite o nome da tarefa!");
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: 1,
      type: "workTime",
    }

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: "00:00",
        tasks: [...prevState.tasks, newTask],
        config: { ...prevState.config },
      }
    });
  }

  return (
    <form onSubmit={handleCreatNewTask} className="form" action="">
      <div className="formRow">
        <Input
          type="text"
          id="task"
          labelText="Task"
          placeholder="Informe uma task."
          value={taskName}
          onChange={e => setTaskName(e.target.value)}
        />
      </div>

      <div className="formRow">
        <p>Próximo intervalo é de 25min.</p>
      </div>

      <div className="formRow">
        <Cycle />
      </div>

      <div className="formRow">
        <Button icon={<PlayCircleIcon />} />
      </div>
    </form>
  )
}