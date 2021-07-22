import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0;
  height: 68px;
  background: #303030;
  padding: 0 20px 0px;

  img {
    height: 35px;
    width: 90px;
  }

  a {
    transition: opacity 0.2s;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
      opacity: 0.7;
      font-size: 18px;
    }
    
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  text-align: center;
  margin-right: 10px;

    span {
      font-size: 15px;
      color: #999;
      margin-left: 8px;
      margin: 20px;
      cursor: pointer;

      &:hover {
        color: #ffff;
      }
    }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  div {
    text-align: right;
    margin-right: 10px;

    span {
      font-size: 12px;
      color: #999;
      margin-left: 8px;
    }
  }
`;


