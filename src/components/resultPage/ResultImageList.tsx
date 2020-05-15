import React, { FC, useState, useEffect } from 'react';
import firebase from '../../firebase';
import { useParams, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { TileData } from '../../types/types';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(() =>
  createStyles({
    tileImage: {
      height: '218px',
      width: '218px',
    },
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '80%',
      textAlign: 'center',
      marginTop: '2%',
    },
  })
);

const ResultImageList: FC = () => {
  const classes = useStyle();
  const history = useHistory();
  const { keyword } = useParams();

  useEffect(() => {
    getData(keyword);
  }, []);

  const [data, setData] = useState<TileData[]>([]);
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

  return (
    <div className={classes.root}>
      {data.map((tile) => (
        <div key={tile.title}>
          <Button onClick={() => history.push(`/download/${tile.title}`)}>
            <img
              className={classes.tileImage}
              src={tile.image}
              alt={tile.title}
            />
          </Button>
          <h3>{tile.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default ResultImageList;
