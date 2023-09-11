import { Component, ReactNode } from 'react';
import updateComponent, { HOCState } from './hocComponent';

export interface ClickCounterProps {
  count: number;
  incrementCount: () => {};
  propForClickCounterComponent: string;
}

class ClickCounter extends Component<ClickCounterProps, HOCState> {
  render(): ReactNode {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>
          Trigger method in Higher order component
        </button>
        <h4>count from HOC state {count}</h4>
        <p>{this.props.propForClickCounterComponent}</p>
      </div>
    );
  }
}

export default updateComponent(ClickCounter, 5);
