import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Footer = styled.footer`
  display: flex;
  padding: 20px 60px;
  background: #303030;
  position: fixed;
  justify-content: center;
  align-items:center;
  bottom: 0;
  width: 100%;
  left: 0;
  right: 0;

  a {
    text-decoration: none;
  }

  span {
    color: #fff;
    margin-right: 20px;
    transition: 0.3s;

    &:hover {
      font-size: 15px;
    }
  }
`;
