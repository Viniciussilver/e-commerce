import styled from 'styled-components';
import { MdOutlineClose } from 'react-icons/md';
import { IoIosArrowUp } from 'react-icons/io';
import { FaBoxOpen } from 'react-icons/fa';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  padding-top: 140px;
`;

export const ContainerItem = styled.div`
  max-width: 1000px;
  width: 100%;

  margin: 0 20px;
  display: flex;
  flex-direction: column;
`;

export const ContainerOrders = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  border-radius: 5px;

  height: 550px;
  overflow: hidden;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 9px;
    background-color: #f5f5f5;
    border-radius: 33px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #808080;
    border-radius: 3.8px;
  }
`;

export const Title = styled.p`
  color: #0058a1;
  padding: 0 10px;
  font-size: 27.6px;
  font-weight: 700;
`;

export const Header = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  /* border-bottom: 2.5px solid #0058a1; */
  margin-bottom: 10px;
  padding-right: 10px;
`;

export const LoadingBox = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4.5px;

  p {
    position: relative;
    bottom: 4px;
    font-weight: 500;
    font-size: 17px;
    color: #2e2d2d;
  }
`;

export const Back = styled(MdOutlineClose)`
  width: 36px;
  height: 36px;
  color: white;
  cursor: pointer;
  position: absolute;
  top: 40px;
  right: 40px;

  &:hover {
    opacity: 0.9;
  }
`;

export const BoxOpen = styled(FaBoxOpen)`
  width: 35px;
  height: 35px;
  color: #0058a1;
`;

export const ArrowUp = styled(IoIosArrowUp)<{ showOrder: boolean }>`
  color: #585555;
  width: 18px;
  height: 18px;
  transform: ${props => (props.showOrder ? 'none' : 'rotate(180deg)')};
`;

export const Order = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  /* background-color: #eee; */
`;

export const OrderHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 2px solid #7f7f7f;
  cursor: pointer;
  transition: 0.1s linear;

  &:hover {
    background-color: #e5e5e5;
  }
`;

export const OrderInfo = styled.div<{ showOrder: boolean }>`
  display: ${props => (props.showOrder ? 'flex' : 'none')};
  flex-direction: column;
  padding: 10px 13px;
`;

export const P = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #808080;
`;

export const StatusArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
`;

export const Points = styled.div`
  display: flex;
  align-items: center;
`;

export const Line = styled.div<{ status: boolean }>`
  width: 180px;
  height: 7px;
  background-color: ${props => (props.status ? '#0058a1' : '#ccc')};
  position: relative;
`;

export const Image = styled.img`
  width: 70px;
  height: 70px;
`;

export const BoxImage = styled.div`
  padding: 12px 15px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 1.3px;
  width: max-content;
`;

export const TextStatus = styled.p<{ status: boolean }>`
  color: ${props => (props.status ? '#0058a1' : '#808080')};
  font-weight: 400;
  font-size: 16.8px;
  width: max-content;
`;

export const Div = styled.div`
  margin: 5px auto;
  width: 545px;
  display: flex;
  justify-content: space-between;
`;

export const Point = styled.div<{ status: boolean }>`
  padding: 5.5px;
  background-color: ${props => (props.status ? '#11114e' : 'white')};
  border: 4px solid ${props => (props.status ? '#0058a1' : '#ccc')};
  box-shadow: 0 0 5px ${props => (props.status ? 'black' : '#333')};
  border-radius: 50%;
`;

export const ProductsArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TableProducts = styled.div``;

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  color: #292929;
  font-size: 16px;
  font-weight: 400;

  .table-cell.collum-1 {
    grid-column: 1 / span 2;
    padding-right: 15px;
  }

  .table-cell {
    padding: 5px 0;
    display: flex;
    gap: 5px;
    font-weight: 400;
    font-size: 16px;
    color: #2c2a2a;
  }
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  font-weight: 400;
  font-size: 16px;
  color: #808080;

  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;

  .table-header.collum-1 {
    grid-column: 1 / span 2;
  }
`;

export const DetailsHeader = styled.p`
  width: 100%;

  font-weight: 400;
  font-size: 16px;
  color: #808080;

  border-bottom: 1px solid #ccc;
`;

export const DetailsBox = styled.div`
  display: flex;
  gap: 35px;
  padding: 14px 0;
`;

export const DetailsColumn = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2px;
`;

export const ItemDescription = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #2c2a2a;
  display: flex;
  gap: 5px;
`;
export const ItemText = styled.p`
  font-weight: 400;
  font-size: 15.6px;
  color: #808080;
`;

export const WarningText = styled.p`
  font-weight: 500;
  font-size: 19px;
  color: #2e2d2d;
`;
