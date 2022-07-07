import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Counter from "../features/counter/Counter";
import styles from "../styles/Home.module.css";

const IndexPage: NextPage = () => {
  const router = useRouter();

  const handleSubmit = (value: any) => {
    console.log(value);
    router.push(`http://localhost:8000/login`);
  };

  const handleFetch = () => {
    const config = {
      withCredentials: true,
    };
    axios.get(`http://localhost:8000/v1/me`, config).then((response: any) => {
      setUserInfo(response);
    });
  };

  const [userInfo, setUserInfo] = useState({});

  return (
    <div className={styles.container}>
      <Head>
        <title>Redux Toolkit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img src="/logo.svg" className={styles.logo} alt="logo" />
        <button onClick={handleSubmit}>login</button>
        <button onClick={handleFetch}>fetch</button>
        <div>Data: {JSON.stringify(userInfo)}</div>
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className={styles.link}
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className={styles.link}
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className={styles.link}
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className={styles.link}
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
};

export default IndexPage;
