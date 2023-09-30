import { MainTitleContainer } from './Home.styled';

const Home = () => {
  return (
    <MainTitleContainer>
      <h1>
        Phonebook manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </MainTitleContainer>
  );
};

export default Home;
