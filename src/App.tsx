import * as React from "react";
import { Counter } from "./components/Counter";
import Reducer from "./components/Reducer";
import Text from "./components/Text";

const App: React.FC = () => {
  return (
    <div>
      <Counter>
        {({ count, setCount }) => (
          <div>
            {count}
            <button onClick={() => setCount((c) => c + 1)}>+</button>
          </div>
        )}
      </Counter>
      <Text
        text="blyat"
        person={{ firstName: "ben", lastName: "awad" }}
        handleChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <Reducer />
    </div>
  );
};

export default App;
