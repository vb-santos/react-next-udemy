import {PlayCircleIcon} from "lucide-react";

import { Input } from "../Input";
import { Button } from "../Button";
import { Cycle } from "../Cycle";

export const MainForm = () => {
  return (
    <form className="form" action="">
      <div className="formRow">
        <Input
          type="text"
          id="task"
          labelText="Task"
          placeholder="Informe uma task."
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