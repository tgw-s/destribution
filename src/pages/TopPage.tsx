// FCはfunctional componentを作るためのモジュール
import React, { FC } from 'react';
import TopHeader from '../components/topPage/TopHeader';
import TopMain from './TopMain';

const TopPage: FC = () => {
  return (
    <>
      <TopHeader />
      <TopMain />
    </>
  );
};

export default TopPage;
