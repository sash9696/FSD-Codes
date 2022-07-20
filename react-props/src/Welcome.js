import Greet from "./Greet";

function Welcome({ title, name, age }) {
  return (
    <div>
      <Greet title={title} name={name} age={age} />
    </div>
  );
}

export default Welcome;
