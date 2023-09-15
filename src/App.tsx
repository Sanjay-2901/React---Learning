import { createContext, useEffect, useReducer, useRef, useState } from 'react';
import './App.css';
import AxiosComponent from './components/AxiosComponent';
import ClickCounter from './components/ClickCounter';
import ListGroup from './components/ListGroup';
import UseReducer from './components/useReducer';
import CustomHookComponent from './components/CustomHookComponent';

const detail = { name: 'sanjay', age: 22 };

const getName = (name: string) => {
  console.log('Iam triggered from child component (output)', name);
};

const initialState = {
  number: 0,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'increment':
      return { ...state, number: state.number + 1 };
    case 'decrement':
      return { ...state, number: state.number - 1 };
  }
};

export const ContextExample: any = createContext({});

function App() {
  const [currentState, dispatch] = useReducer(reducer, initialState);
  const [timer, increaseTimer] = useState(0);
  let interval: any = useRef();

  useEffect(() => {
    interval.current = setInterval(() => {
      increaseTimer((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div>
      <ListGroup name={detail.name} age={detail.age} getName={getName}>
        <h1 style={{ color: 'red' }}>Hello iam Html content as children</h1>
      </ListGroup>
      <ClickCounter propForClickCounterComponent='This is prop data for the ClickCounter component from App component' />
      <AxiosComponent />
      <ContextExample.Provider
        value={{ currentState: currentState, dispatch: dispatch }}
      >
        <UseReducer />
      </ContextExample.Provider>
      <CustomHookComponent />
      {timer}
      <button
        onClick={() => {
          clearInterval(interval.current);
        }}
      >
        clear
      </button>
    </div>
  );
}

export default App;
