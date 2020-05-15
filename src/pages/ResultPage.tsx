import React, { FC } from 'react';
import TopHeader from '../components/topPage/TopHeader';
import ResultImageList from '../components/resultPage/ResultImageList';

const ResultPage: FC = () => {
  return (
    <div>
      <TopHeader />
      <ResultImageList />
    </div>
  );
};

export default ResultPage;
