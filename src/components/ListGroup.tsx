import { ReactNode, useState } from 'react';
import Welcome from './welcome';

export interface ListProps {
  name: string;
  age: number;
  getName: (name: string) => void;
  children: ReactNode;
}

function ListGroup({ name, age, getName, children }: ListProps) {
  const [selectedNum, setSelectedNum] = useState(0);
  const b = useState(1);

  function talkWithChild(valueFromChild: string): void {
    console.log(valueFromChild);
  }

  return (
    <>
      <h1>Hello From Function component</h1>
      <h3>{selectedNum}</h3>

      <button
        onClick={() => {
          setSelectedNum(selectedNum + 1);
          getName(name);
        }}
      >
        click me
      </button>
      <div>{children}</div>
      <Welcome talkWithChild={talkWithChild} />
    </>
  );
}

export default ListGroup;
