import { useState } from 'react';
const useInput = () => {
  const INITIAL_STATE = {
    username: '',
    email: '',
  };
  const [state, setState] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return { handleChange, state };
};

export default useInput;
