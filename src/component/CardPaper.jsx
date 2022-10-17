import React from 'react'
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CountUp from "react-countup";
import cx from "classnames";
import styles from "./CardPaper.module.css";



const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

 export const CardPaper = ({data}) => {
 const {confirmed,recovered,deaths} = data
 const classes = useStyles();
 

     return (
       <div>
    <Grid container spacing={4}>
    <Card xs={12} xl={4} className={cx(classes.root,styles.confirmed)} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
        <CountUp
        start={0}
        end= {confirmed && confirmed.value}
        duration={2.5}
        seperator=","
         />
        </Typography>
        <Typography className={classes.pos} >
          INFECTED
        </Typography>
        <Typography variant="body2" component="p">
          the no of people infected in covid 
        </Typography>
      </CardContent>
    </Card>
    <Card className={cx(classes.root,styles.recovered)} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
        <CountUp
        start={0}
        end= {recovered && recovered.value}
        duration={2.5}
        seperator=","
         />
        </Typography>
        <Typography className={classes.pos}  >
          RECOVERED
        </Typography>
        <Typography variant="body2" component="p">
        The no of people who recovered
        </Typography>
      </CardContent>
    </Card>
    <Card className={cx(classes.root,styles.deaths)} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
        <CountUp
        start={0}
        end= {deaths && deaths.value}
        duration={2.5}
        seperator=","
         />
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          DEATHS
        </Typography>
        <Typography variant="body2" component="p">
        the no of people who died
        </Typography>
      </CardContent>
    </Card>
    </Grid>
       </div>
     )}
