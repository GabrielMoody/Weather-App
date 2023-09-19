import React from 'react';
import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import Weather from '../components/Weather';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class='ion-text-center'>Weather App</IonTitle>
          <IonText class='ion-text-center'><p>By: Gabriel Moody Waworundeng</p></IonText>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Weather></Weather>
      </IonContent>
    </IonPage>
  );
};

export default Home;
