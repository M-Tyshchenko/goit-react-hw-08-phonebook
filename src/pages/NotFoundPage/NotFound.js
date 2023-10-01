import { NotFoundMessage } from './NotFound.styled';

const NotFound = () => {
  return (
    <NotFoundMessage>
      Page not found{' '}
      <span role="img" aria-label="NotFound icon">
        🤷‍♀️
      </span>
    </NotFoundMessage>
  );
};

export default NotFound;
