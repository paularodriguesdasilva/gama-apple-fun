import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

const Footer = (): JSX.Element => {

  return (
    <S.Footer>
        <a target="_blank" href="https://github.com/olucasklein">
        <span> Desenvolvido por Lucas Klein &copy;</span>
        <span> Desafio #2 Hiring Coders</span>
        </a>
    </S.Footer>
  );
};

export default Footer;
