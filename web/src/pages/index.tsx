import { useContext, useEffect, useRef } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { UserContext } from '../contexts/UserContext';
import styles from '../styles/pages/Index.module.css';

export default function Index () {
  const { login } = useContext(UserContext);
  const router = useRouter();
  const $usernameInput = useRef(null);

  function submit (event) {
    event.preventDefault();

    login($usernameInput.current.value);
    router.push('/home');
  }

  useEffect(() => {
    $usernameInput.current.focus();
  }, [])

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
        <form className={styles.loginInput} onSubmit={submit}>
          <input ref={$usernameInput} type="text" placeholder="Digite seu username" />
          <button type="submit">
            <img src="icons/arrow.svg" alt="&gt;" />
          </button>
        </form>
      </div>
    </div>
  )
}
