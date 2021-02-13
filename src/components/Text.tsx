import * as React from "react";

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  ok?: boolean; // ? means the field/props is optional
  int?: number;
  fn?: (ben: string) => string;
  obj?: {
    f1: string;
    f2: boolean;
  };
  person: Person;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// interface TextNode {
//   text: string;
// }

const Text: React.FC<Props> = ({ text, handleChange }) => {
  const [count, setCount] = React.useState<number>(5); //stored type will be
  // const [count1, setCount1] = React.useState<TextNode>({ text: "hello" }); // with obj

  const inputRef = React.useRef<HTMLInputElement>(null);

  const divRef = React.useRef<HTMLDivElement>(null);

  return (
    <>
      <div ref={divRef}>
        <input ref={inputRef} onChange={handleChange} />
        <h1>{text}</h1>
      </div>

      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount((c) => c + 1)}>increment</button>
      </div>
    </>
  );
};

export default Text;
