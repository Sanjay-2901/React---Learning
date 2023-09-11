import React from 'react';
import { Component } from 'react';

export interface WelcomeComponentState {
  text: string;
  count: number;
  inputText: string;
  title: string;
}

export interface WelcomeProps {
  talkWithChild: (valueFromChild: string) => void;
}

class Welcome extends Component<WelcomeProps, WelcomeComponentState> {
  inputRef: any;
  constructor(props: WelcomeProps) {
    super(props);
    this.state = {
      text: 'Hello from class component',
      count: 0,
      inputText: '',
      title: '',
    };
    this.inputRef = React.createRef();
  }

  changeText(): void {
    this.setState(
      (prevState) => ({
        ...prevState,
        count: prevState.count + 1,
      }),
      () => {
        console.log('state changed', this.state.count);
        console.log(this.inputRef.current.value);
      }
    );
  }

  changeInputText = (event: any) => {
    this.setState({
      ...this.state,
      inputText: event.target.value,
      title: event.target.value,
    });
  };

  submitForm = (event: any) => {
    console.log(this.state.inputText);
    event.preventDefault();
  };

  componentDidMount(): void {
    this.inputRef.current.focus();
    document.title = this.state.title;
  }

  componentDidUpdate(): void {
    document.title = this.state.title;
  }

  render() {
    return (
      <>
        <h1 style={{ color: 'blue' }}>{this.state.text}</h1>
        <h4>{this.state.count}</h4>
        <button
          onClick={() => {
            this.changeText();
            this.props.talkWithChild('This is a value from child');
          }}
        >
          Click me
        </button>
        <form onSubmit={this.submitForm}>
          <input
            type='text'
            value={this.state.inputText}
            onChange={this.changeInputText}
            ref={this.inputRef}
          />
          <button type='submit'>submit</button>
        </form>
      </>
    );
  }
}

export default Welcome;
