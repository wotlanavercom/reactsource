export default function Navigator(props) {
  //   console.log(props);
  // 배열
  //   const lis = [];

  //   for (let index = 0; index < props.topics.length; index++) {
  //     let topic = props.topics[index];
  //     // 배열 삽입
  //     lis.push(
  //       <li key={topic.id}>
  //         <a href={"/read/" + topic.id}>{topic.title}</a>
  //       </li>
  //     );
  //   }

  let { topics, onChangeMode } = props;

  return (
    <nav>
      <ol>
        {topics.map((topic) => (
          <li key={topic.id}>
            <a
              id={topic.id}
              href={"/read/" + topic.id}
              onClick={(e) => {
                e.preventDefault();
                onChangeMode(e.target.id);
              }}
            >
              {topic.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
