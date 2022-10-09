import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';

import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>100% made in Fermât</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <img src="./assets/madison.jpg" />
          <IonCardHeader>
            <IonCardSubtitle>Lycée Pierre de Fermat +</IonCardSubtitle>
            <IonCardTitle>UNICEF</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the
            Wisconsin Territory in 1836.
          </IonCardContent>
        </IonCard>
        <IonCard>
          <img src="./assets/madison.jpg" />
          <IonCardHeader>
            <IonCardSubtitle>foo</IonCardSubtitle>
            <IonCardTitle>Foo</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the
            Wisconsin Territory in 1836.
          </IonCardContent>
        </IonCard>
        <IonCard>
          <img src="./assets/madison.jpg" />
          <IonCardHeader>
            <IonCardSubtitle>foo</IonCardSubtitle>
            <IonCardTitle>Foo</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the
            Wisconsin Territory in 1836.
          </IonCardContent>
        </IonCard>
        <IonCard>
          <img src="./assets/madison.jpg" />
          <IonCardHeader>
            <IonCardSubtitle>foo</IonCardSubtitle>
            <IonCardTitle>Foo</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the
            Wisconsin Territory in 1836.
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
