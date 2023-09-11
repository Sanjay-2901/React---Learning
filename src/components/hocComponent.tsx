import { Component } from 'react';

export interface HOCState {
  count: number;
}

const updateComponent = (WrappedComponent: any, countByValue: number) => {
  class UpdateComponent extends Component<any, HOCState> {
    constructor(props: any) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    clickMethodFromHoc = () => {
      this.setState((prevState: HOCState) => {
        return { count: prevState.count + countByValue };
      });
    };

    render() {
      return (
        <>
          <hr />
          <h1>Higher Order Component Example</h1>
          <WrappedComponent
            count={this.state.count}
            incrementCount={this.clickMethodFromHoc}
            {...this.props}
          />
          <hr />
        </>
      );
    }
  }

  return UpdateComponent;
};

export default updateComponent;
