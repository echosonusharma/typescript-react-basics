import React, { useState } from "react";

interface FormProps<T> {
  values: T;
  children: (values: T) => JSX.Element;
}

const Form = <T extends {}>({ values, children }: FormProps<T>) => {
  return children(values);
};

interface Props {
  name: string;
}

const App: React.FC<Props> = ({ name }) => {
  const [state] = useState<{ fullName: string | null }>({ fullName: "blyat" });
  // useState take generics and you can explicitly define the types

  return (
    <>
      <Form<{ firstName: string | null }> values={{ firstName: "bob" }}>
        {(values) => <div>{values.firstName}</div>}
      </Form>
      <div>hello {name}</div>
      <div>hello {state.fullName}</div>
    </>
  );
};

export default App;

// generics in react
