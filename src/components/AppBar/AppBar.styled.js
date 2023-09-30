import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const LinkContainer = styled.div`
  display: flex;
  gap: 40px;
`;

export const StyledLink = styled(NavLink)`
  font-weight: 700;

  &.active {
    color: tomato;
  }
`;
