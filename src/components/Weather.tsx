import { IonIcon, IonInput, IonText } from "@ionic/react"
import axios from "axios";
import React, { useEffect, useState } from 'react'
import { closeCircleOutline } from 'ionicons/icons';
import "./Weather.css";

interface WeatherData {
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
}

const Weather: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const [kota, setKota] = useState("manado");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const APIKey = "0889104349ef5330aa1d7667fb2af6c3";

  useEffect(() => {
    setLoading(true)
    setError(false)
    axios
      .get<WeatherData>(
        `https://api.openweathermap.org/data/2.5/weather?q=${kota}&units=metric&appid=${APIKey}`
      )
      .then((response) => {
        setWeatherData(response.data);
        setLoading(false)
      })
      .catch((error) => {
        setError(true)
        setLoading(false)
      });
  }, [kota]);

  if (loading) {
    return <div>Loading weather data...</div>;
  }

  return (
    <>
        <IonInput 
        label="Kota" 
        placeholder="Masukkan nama kota" 
        labelPlacement="floating"
        fill="outline"
        onIonChange={(e: any) => setKota(e.detail.value)}></IonInput>
      { error ? 
        <>
          <div className="error">
            <IonIcon icon={closeCircleOutline} size="normal" color="danger" className="icon-close"></IonIcon>
            <IonText color="danger"> Nama kota tidak ditemukan</IonText>
          </div>
        </>
        : 
        <>
          <IonText className="ion-text-center">
            <div className="img">
              <img src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@4x.png`} alt={weatherData?.weather[0].description}></img>
            </div>
            <h2 className="city">{kota}</h2>
            <p className="deg">{weatherData?.main.temp} &deg;C</p>
            <p>{weatherData?.weather[0].description}</p>
          </IonText>
        </>
      }
      
    </>
  );
};

export default Weather;