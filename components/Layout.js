import style from './Layout.module.scss';

export default function Layout({ children }) {
  return (
    <>
      <header className={style.header}>
        <h1>Random thoughts, not just tech</h1>
      </header>

      <main>{children}</main>

      <footer className={style.footer}>
        <p>Copyright © 2021</p>
      </footer>
    </>
  );
}
