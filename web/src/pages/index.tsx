import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/pages/Index.module.css';

export default function Index () {
  const router = useRouter();

  function login () {
    router.push('/home');
  }

  return (
    <div className={styles.loginContainer}>
      <Head>
        <title>Login | Move.it</title>
      </Head>

      <div className={styles.loginPanel}>
        <h1><img src="logo-login.svg" alt="move.it" /></h1>
        <h2>Bem-vindo</h2>
        <p>
          <img src="icons/github.svg" alt="Github" />
          <span>Faça login com seu Github para começar</span>
        </p>
        <div className={styles.loginUsername}>
          <input type="text" placeholder="Digite seu username" />
          <button type="button" onClick={login}>
            <img src="icons/arrow.svg" alt="&gt;" />
          </button>
        </div>
      </div>
    </div>
  )
}
