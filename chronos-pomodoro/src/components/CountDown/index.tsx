import {useTaskContext} from "../../hooks/useTaskContext.ts";

import styles from './styles.module.css';

export const CountDown = () => {
  const { state } = useTaskContext()

  return (
    <div className={styles.container}>{state.formattedSecondsRemaining}</div>
  )
}