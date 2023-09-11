import './App.css';
import AxiosComponent from './components/AxiosComponent';
import ClickCounter from './components/ClickCounter';
import ListGroup from './components/ListGroup';

const detail = { name: 'sanjay', age: 22 };

const getName = (name: string) => {
  console.log('Iam triggered from child component (output)', name);
};

function App() {
  return (
    <div>
      <ListGroup name={detail.name} age={detail.age} getName={getName}>
        <h1 style={{ color: 'red' }}>Hello iam Html content as children</h1>
      </ListGroup>
      <ClickCounter propForClickCounterComponent='This is prop data for the ClickCounter component' />
      <AxiosComponent></AxiosComponent>
    </div>
  );
}

export default App;
