import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GithubContext from '../context/github/GithubContext';

const User = () => {
  const { user, getUser } = useContext(GithubContext);
  const params = useParams();
  useEffect(() => {
    getUser(params.login);
    // getUserRepos(params.login);
  }, []);
  return <div>{user.login}</div>;
};

export default User;
