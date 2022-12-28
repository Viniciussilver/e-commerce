import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 27px;
  margin: 50px 0;

  .line {
    height: 65px;
    border-radius: 5px;
    border-left: 3px solid rgba(0, 0, 0, 0.5);
  }
`;

export const ContainerItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Image = styled.img`
  width: 95px;
`;

export const InfoShipping = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    font-weight: 600;
    font-size: 15.5px;
    color: rgba(0, 0, 0, 0.7);
  }

  span {
    font-weight: bold;
    font-size: 20px;
  }
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.7);
`;

export const Card = styled.div`
  width: 80px;
  height: 50px;
  border-radius: 10px;
  border: 4px solid #282b34;
  position: relative;

  .card-item {
    width: 74px;
    height: 10px;
    background-color: #282b34;
    position: absolute;
    top: 7px;
    left: -1px;
  }

  .points {
    position: absolute;
    bottom: 3px;
    left: 3px;

    .point-1 {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: #282b34;
    }
    .point-2 {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #282b34;
      position: absolute;
      top: -1.2px;
      right: -14px;
      border: 2px solid ${props => props.theme.colors.primary};
    }
  }
`;
