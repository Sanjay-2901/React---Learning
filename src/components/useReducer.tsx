import { useContext } from 'react';
import { ContextExample } from '../App';

function UseReducer() {
  const contextFromAppComponent: any = useContext(ContextExample);
  return (
    <>
      <h1>
        useReducer with useContext Example{' '}
        {contextFromAppComponent.currentState.number}
      </h1>
      <button
        onClick={() => {
          contextFromAppComponent.dispatch({ type: 'increment' });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          contextFromAppComponent.dispatch({ type: 'decrement' });
        }}
      >
        Decrement
      </button>
    </>
  );
}

export default UseReducer;
