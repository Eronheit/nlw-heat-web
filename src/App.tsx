import styles from './App.module.scss';
import { LoginBox } from './components/LoginBox/index.';

export function App() {
  return (
    <main className={styles.contentWrapper}>
      <div />
      <LoginBox />
    </main>
  )
}
