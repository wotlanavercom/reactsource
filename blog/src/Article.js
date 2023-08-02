export default function Article(props) {
  return (
    <article>
      <h2 style={{ color: props.color }}>Welcom</h2>
      Hello, {props.name}
    </article>
  );
}
