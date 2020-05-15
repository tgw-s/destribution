import React, { FC, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import firebase from '../firebase';
import TopHeader from '../components/topPage/TopHeader';
import { TileData } from '../types/types';

const useStyle = makeStyles(() =>
  createStyles({
    tileImage: {
      width: '436px',
      height: '436px',
    },
  })
);

const DownloadPage: FC = () => {
  const { keyword } = useParams();
  const history = useHistory();
  const classes = useStyle();
  const [data, setData] = useState<TileData[]>([]);

  useEffect(() => {
    getData(keyword);
  }, []);

  const getData = async (searchWord: string | undefined) => {
    const db = firebase.firestore();
    const tileDataRef = db.collection('tileData');
    const searchedData = tileDataRef.where(
      'keyword',
      'array-contains',
      searchWord
    );

    const snapShot = await searchedData.get();
    console.log(snapShot);
    const tempData: object[] = [];

    snapShot.docs.map((doc: any) => {
      tempData.push(doc.data());
    });
    setData(tempData as TileData[]);
  };

  const displayImage = () => {
    return (
      <div>
        {data.map((tile) => (
          <div className={classes.tileImage}>
            <img src={tile.image} alt={tile.title} />
            <Button onClick={() => history.push('/')}>Back</Button>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div>
      <TopHeader />
      {displayImage()}
    </div>
  );
};

export default DownloadPage;
