function Header() {
  return (
    <header>
      <h1>
        <a href="">WEB</a>
      </h1>
    </header>
  );
}

function Navigator() {
  return (
    <nav>
      <ol>
        <li>
          <a href="/read/1">html</a>
        </li>
        <li>
          <a href="/read/2">css</a>
        </li>
        <li>
          <a href="/read/3">js</a>
        </li>
      </ol>
    </nav>
  );
}

function Article() {
  return (
    <article>
      <h2>Welcom</h2>
      Hello, react
    </article>
  );
}

export default function App2() {
  return (
    <>
      <Header />
      <Navigator />
      <Article />
      <Article />
      <Article />
    </>
  );
}
