import styled from 'styled-components';

export const Container = styled.div`
  /* margin: 0 auto; */
  display: flex;
  gap: 40px;
  align-items: center;
`;

export const LogoutBtn = styled.button`
  padding: 4px 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-color: #fff;
  border-color: transparent;
  width: fit-content;
  border-radius: 8px;

  &:hover,
  &:focus {
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  }
`;
