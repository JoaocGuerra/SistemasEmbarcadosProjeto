import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import styled from "styled-components";
import { dateFormatter } from "../../utils/date";

const StyledToolBar = styled(Toolbar)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export default function ElevateAppBar() {
  return (
    <React.Fragment>
      <AppBar>
        <StyledToolBar>
          <ThermostatIcon />
          <Typography variant="subtitle1">
            Embedded Monitor - Humidity and Temperature
          </Typography>
          <Typography variant="body1">
            {dateFormatter.format(new Date())}
          </Typography>
        </StyledToolBar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
