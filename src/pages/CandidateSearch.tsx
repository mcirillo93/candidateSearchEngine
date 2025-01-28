import { searchGithub, searchGithubUser } from '../api/API';

searchGithub().then((data) => {
  console.log(data);
}
);

searchGithubUser('react').then((data) => {
  console.log(data);
}
);

const CandidateSearch = () => {
  return <h1>CandidateSearch</h1>;
};

export default CandidateSearch;
