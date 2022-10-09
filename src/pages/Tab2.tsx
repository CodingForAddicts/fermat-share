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
        <IonCard button={true} href="https://instagram.com/unicef_fermat_?igshid=YmMyMTA2M2Y=">
          <img src="./assets/madison.jpg" />
          <IonCardHeader>
            <IonCardSubtitle>Lycée Pierre de Fermat +</IonCardSubtitle>
            <IonCardTitle>UNICEF</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Unicef
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
