import Link from 'next/link';

import styles from '../styles/Home.module.css';

export default function Layout({ children }) {
  return (
    <div>
      <header className={styles.header}>
        <h1>Random thoughts, not just tech</h1>
      </header>

      <div>{children}</div>

      <footer className={styles.footer}>
        <p>Copyright 2021 :)</p>
      </footer>
    </div>
  );
}
