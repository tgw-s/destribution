import React, { FC } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import family from '../assets/family.jpg';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const useStyle = makeStyles(() =>
  createStyles({
    background: {
      backgroundImage: `url(${family})`,
      height: '100vh',
      backgroundSize: 'cover',
    },
    paper: {
      position: 'relative',
      marginLeft: 'auto',
      marginRight: 'auto',
      top: '33%',
      width: '45%',
    },
  })
);

const TopMain: FC = () => {
  const classes = useStyle();
  return (
    <div className={classes.background}>
      <Paper className={classes.paper}>
        <IconButton type="submit">
          <SearchIcon />
        </IconButton>
        <InputBase placeholder="search for free materials" />
      </Paper>
    </div>
  );
};

export default TopMain;
