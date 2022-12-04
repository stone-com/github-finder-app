import { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';
import { searchUsers } from '../../context/github/GithubActions';

const UserSearch = () => {
  const [text, setText] = useState('');

  const { dispatch, users, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something!', 'error');
    } else {
      const users = await searchUsers(text);
      dispatch({ type: 'SET_LOADING' });
      dispatch({ type: 'GET_USERS', payload: users });
    }
  };

  return (
    <div className='grid grid-cols-1 gap-8 mb-8 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input
                value={text}
                onChange={handleChange}
                placeholder='search'
                type='text'
                className='w-full pr-40 text-black bg-gray-200 input input-lg'
              />
              <button
                type='submit'
                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button onClick={clearUsers} className='btn btn-ghost btn-lg'>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
