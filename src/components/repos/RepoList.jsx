import { PropTypes } from 'prop-types';
const RepoList = ({ repos }) => {
  return (
    <div className='rounded-lg shadow-lg card bg-base-100'>
      <div className='card-body'>
        <h2 className='my-4 text-3xl font-bold card-title'>
          Latest Repositories
        </h2>
        {repos.map((repo) => (
          <h3>{repo.name}</h3>
        ))}
      </div>
    </div>
  );
};

// PropTypes
RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};
export default RepoList;
