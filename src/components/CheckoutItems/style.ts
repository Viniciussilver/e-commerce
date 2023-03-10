import styled from 'styled-components';

// import { IoIosArrowUp } from 'react-icons/io';

export const ContainerListProducts = styled.div`
  width: 500px;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 30px 40px;

  border-radius: 2px;
  border: 1px solid #ccc;
`;
export const Title = styled.h2`
  color: ${props => props.theme.colors.texts.primary};
`;

export const SubTitle = styled.p`
  font-weight: 700;
  font-size: 19.4px;
  color: ${props => props.theme.colors.texts.primary};
`;

export const TextTotal = styled.p`
  font-weight: 700;
  font-size: 19.3px;
  color: red;
`;

export const Header = styled.div`
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
`;

// export const ArrowUp = styled(IoIosArrowUp)`
//   width: 26px;
//   height: 26px;
//   color: #000;
// `;

export const TextName = styled.p`
  font-weight: 300;
  font-size: 15.7px;
  color: ${props => props.theme.colors.texts.secundary};
`;
export const TextQuantity = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #97a1a9;
  color: ${props => props.theme.colors.texts.primary};
`;

export const TextTotalProduct = styled.p`
  font-weight: 600;
  font-size: 16.5px;
  color: ${props => props.theme.colors.texts.secundary};
`;

export const AreaProducts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 7px;

  ::-webkit-scrollbar {
    width: 9px;
    background-color: #f5f5f5;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #7f7f7f;
  }
`;

export const ProductItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 10px 0;
`;

export const Image = styled.img`
  width: 90px;
  height: 95px;
  border-radius: 5px;
`;

export const InfoProducts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 7px;
`;
