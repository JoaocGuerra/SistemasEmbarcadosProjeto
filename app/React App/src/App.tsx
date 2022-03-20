import React, { useEffect, useMemo, useState } from "react";
import ElevateAppBar from "./components/ElevateAppBar";
import firebaseApp from "./database";

import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import ContainerBody from "./components/ContainerBody";
import SingleDataCard from "./components/SingleDataCard";
import InlineViewFlex from "./components/InlineViewFlex";
import { blue, green } from "@mui/material/colors";
import { LineChart } from "./components/LineChart";
import ContainerCards from "./components/ContainerCards";
import ContainerCenter from "./components/ContainerCenter";
import CircularIndeterminate from "./components/CircularIndeterminate";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(),
  },
  palette: {
    primary: {
      main: blue[800],
    },
    secondary: {
      main: green[700],
    },
  },
});

function App() {
  const [temperatures, setTemperatures] = useState<number[]>([]);
  const [humidities, setHumidities] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const lastTemperature = useMemo(() => {
    const size = temperatures.length;
    return temperatures.at(size - 1);
  }, [temperatures]);

  const averageTemperature = useMemo(() => {
    const total = temperatures.length;
    let sum = 0;
    temperatures.forEach((data) => {
      sum += data;
    });

    const average = (sum / total).toFixed(2);
    return average;
  }, [temperatures]);

  const lastHumidity = useMemo(() => {
    const size = humidities.length;
    return humidities.at(size - 1);
  }, [humidities]);

  const averageHumidity = useMemo(() => {
    const total = humidities.length;
    let sum = 0;
    humidities.forEach((data) => {
      sum += data;
    });

    const average = (sum / total).toFixed(2);
    return average;
  }, [humidities]);

  const sizeData = useMemo(() => {
    const totalHumidities = humidities.length;
    const totalTemperatures = temperatures.length;
    return totalHumidities + totalTemperatures;
  }, [humidities, temperatures]);

  useEffect(() => {
    const fetchData = async () => {
      firebaseApp
        .database()
        .ref("/DHT11/")
        .child("Humidity")
        .once("value")
        .then(function (snapshot) {
          const exists = snapshot.val() !== null;
          if (exists) {
            const data = snapshot.val();
            const HumidityArr = Object.values<number>(data);
            setHumidities(HumidityArr);
          }
        });

      firebaseApp
        .database()
        .ref("/DHT11/")
        .child("Temperature")
        .once("value")
        .then(function (snapshot) {
          const exists = snapshot.val() !== null;
          if (exists) {
            const data = snapshot.val();
            const temperatureArr = Object.values<number>(data);
            setTemperatures(temperatureArr);
          }
        });
    };

    const interval = setInterval(function () {
      fetchData();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (
      lastHumidity &&
      lastTemperature &&
      averageHumidity &&
      averageTemperature &&
      sizeData
    ) {
      setLoading(false);
    }
  }, [
    temperatures,
    humidities,
    lastHumidity,
    lastTemperature,
    averageHumidity,
    averageTemperature,
    sizeData,
  ]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <React.Fragment>
        <ElevateAppBar />
        {loading ? (
          <ContainerCenter>
            <CircularIndeterminate />
          </ContainerCenter>
        ) : (
          <ContainerBody>
            <InlineViewFlex>
              <ContainerCards>
                <SingleDataCard
                  title="Temperatura Mais Recente"
                  data={`${lastTemperature} ºC`}
                />
                <SingleDataCard
                  title="Humidade Mais Recente"
                  data={`${lastHumidity} %`}
                />
                <SingleDataCard
                  title="Tempetura Média"
                  data={`${averageTemperature} ºC`}
                />
                <SingleDataCard
                  title="Humidade Média"
                  data={`${averageHumidity} %`}
                />
                <SingleDataCard
                  title="Total de Leituras"
                  data={`${sizeData}`}
                />
              </ContainerCards>
            </InlineViewFlex>

            {temperatures && (
              <InlineViewFlex>
                <LineChart
                  data={temperatures}
                  label={
                    "Registros de medição da temperatura do Longo do Tempo em (ºC)"
                  }
                  titleChart={"Historico de Leitura de Temperaturas (ºC)"}
                />
              </InlineViewFlex>
            )}

            {humidities && (
              <InlineViewFlex>
                <LineChart
                  data={humidities}
                  label={
                    "Registros de medição da Humidade ao Longo do Tempo (%)"
                  }
                  titleChart={"Historico de Leitura de Humidade (%) "}
                />
              </InlineViewFlex>
            )}
          </ContainerBody>
        )}
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
