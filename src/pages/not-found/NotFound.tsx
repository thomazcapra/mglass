import React from 'react';
import _404 from 'assets/images/404.png';

export const NotFound: React.FC = () => {
  return (
    <>
      <img src={_404} alt={'Página não encontrada!'} />
      <div> Not Found Works! </div>{' '}
    </>
  );
};
