import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 27px;
  background-color: #f5f5f5;

  .line {
    height: 65px;
    border-radius: 5px;
    border-left: 3px solid rgba(0, 0, 0, 0.5);

    @media screen and (max-width: 895px) {
      display: none;
    }
  }

  @media screen and (max-width: 895px) {
    margin: 0;
  }
`

export const ContainerItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media screen and (max-width: 895px) {
    display: none;
  }
`

export const ImgMethods = styled.img`
  width: 100%;

  @media screen and (min-width: 895px) {
    display: none;
  }
`

export const Image = styled.img`
  width: 95px;
`

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
`

export const Title = styled.div`
  font-weight: 500;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.7);
`

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
      top: -2px;
      right: -14px;
      border: 2px solid #fff;
    }
  }
`

export const AreaAbout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 70px 0;
  gap: 70px;
  padding: 100px 0;

  .text {
    font-weight: 400;
    font-size: 18.7px;
    color: ${props => props.theme.colors.texts.primary};

    @media screen and (max-width: 1090px) {
      text-align: center;
    }
  }

  @media screen and (max-width: 1090px) {
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
  }

  @media screen and (max-width: 680px) {
    padding-top: 68px;
    gap: 20px;
  }
`

export const SubTitle = styled.p`
  font-weight: 700;
  font-size: 27px;
  color: ${props => props.theme.colors.texts.primary};
  padding: 7px 14px;
  padding-left: 0;
  width: max-content;
  border-bottom: 2px solid ${props => props.theme.colors.background.contrast};

  @media screen and (max-width: 1090px) {
    width: auto;
    text-align: center;
  }
`

export const Box = styled.div`
  width: 420px;
  height: 420px;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #040f16, #2a2a72);
  color: #fff;
  font-size: 20px;
  transform: rotate(-6deg);

  @media screen and (max-width: 1090px) {
    width: 340px;
    height: 340px;
    transform: none;
  }
`

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 500px;
  padding: 0 15px;
`
