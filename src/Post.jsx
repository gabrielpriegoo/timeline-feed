export function Post(props) {
  return (
    <article>
      <header>
        <strong>{props.author}</strong>
      </header>
      <p>{props.content}</p>
    </article>
  );
}
