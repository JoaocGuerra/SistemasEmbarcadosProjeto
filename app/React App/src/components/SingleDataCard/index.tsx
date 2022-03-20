import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { createStyles, makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import { blueGrey, blue } from "@mui/material/colors";

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      flex: 1,
      margin: 10,
      minWidth: 200,
    },

    box: {
      width: 45,
      height: 7,
      backgroundColor: blue[700],
      borderRadius: 5,
      marginTop: 10,
    },
  })
);

interface Props {
  title?: string;
  data?: string;
  icon?: any;
}

export default function SingleDataCard(props: Props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography color={blueGrey[700]} gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="h5" color="primary">
          {props.data}
        </Typography>
        <Box className={classes.box} />
      </CardContent>
    </Card>
  );
}
