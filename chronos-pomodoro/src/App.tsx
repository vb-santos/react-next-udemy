import { PlayCircleIcon } from "lucide-react";

import { Container } from "./components/Container";
// import { Heading } from "./components/Heading";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { Input } from "./components/Input";
import { Cycle } from "./components/Cycle";
import { Button } from "./components/Button";

import "./styles/theme.css";
import "./styles/global.css";

export const App = () => {
  return (<>
    <Container>
      <Logo />
    </Container>

    <Container>
      <Menu />
    </Container>

    <Container>
      <CountDown />
    </Container>

    <Container>
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
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="formRow">
          <Cycle />
        </div>

        <div className="formRow">
          <Button icon={<PlayCircleIcon />} />
        </div>
      </form>
    </Container>
  </>);
};
