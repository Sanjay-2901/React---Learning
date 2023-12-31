import { useState } from 'react';

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const bind = {
    value: value,
    onChange: (event) => setValue(event.target.value),
  };

  const reset = () => {
    setValue(initialValue);
  };

  return [value, bind, reset];
}

export default useInput;
