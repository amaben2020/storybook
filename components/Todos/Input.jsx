import useInput from './hooks/use-input';

const Input = () => {
  const { state, handleChange } = useInput();
  return (
    <div>
      <label htmlFor=''>
        <input
          onChange={handleChange}
          type='text'
          name='username'
          placeholder='Please enter your username'
          value={state.username}
        />
        <input
          onChange={handleChange}
          type='email'
          placeholder='Please enter your email'
          name='email'
          value={state.email}
        />
      </label>

      <div>
        <span style={{ color: 'red' }}> {state.username} </span>

        {state.email}
      </div>
    </div>
  );
};

export default Input;
