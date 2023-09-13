import useInput from '../hooks/useInput';

function CustomHookComponent() {
  const [value, bind, reset] = useInput('');
  const [value1, bind1, reset1] = useInput('default value');

  const submit = (event: any) => {
    event.preventDefault();
    alert(`${value}, ${value1}`);
    reset();
    reset1();
  };

  return (
    <div>
      <hr />
      <h1>Custom Hook Component Example</h1>
      <form onSubmit={submit}>
        <input type='text' {...bind} />
        <input type='text' {...bind1} />
        <button type='submit'>submit</button>
      </form>
      <hr />
    </div>
  );
}

export default CustomHookComponent;
