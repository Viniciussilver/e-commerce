import styled from 'styled-components';

import { MdOutlineCancel } from 'react-icons/md';

export const ContainerItems = styled.div<{ header?: boolean }>`
  max-width: 1550px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  margin: 0 auto;
  margin-top: 50px;

  gap: 30px;

  ${props =>
    props.header &&
    `
      width: 75%;
      justify-content: space-between;
      gap: 10px;
      padding: 10px 17px;
      border-radius: 6px;
      background-color: #fff;
      // border: 1px solid #000;
  `};
`;

export const Back = styled(MdOutlineCancel)`
  width: 26px;
  height: 26px;
  color: #222226;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const Container = styled.div`
  /* padding: 25px 40px;
  background-color: #fff;
  border-radius: 10px; */
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.p`
  color: #000;
  font-weight: 400;
  font-size: 18px;
`;

export const NotFoundText = styled.p`
  color: #000;
  font-weight: 700;
  font-size: 19px;
`;

export const Li = styled.li`
  color: #222226;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 3px;

  a {
    color: #00a8ff;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const Ul = styled.ul`
  padding-left: 17px;
`;

export const AreaSearchNotFound = styled.div`
  padding: 25px 40px;
  background-color: #fff;
  border-radius: 4px;

  margin-top: 40px;

  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Button = styled.button`
  padding: 4px 6px;
  background-color: ${props => props.theme.colors.background.contrast};
  border-radius: 5px;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
