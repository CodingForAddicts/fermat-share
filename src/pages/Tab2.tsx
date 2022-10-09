import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';

import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage> // Initialisation de Ionic
      <IonHeader>  // La bannière en haut de l'app
        <IonToolbar> // ce qui est marqué dans la bannière en haut de l'app
          <IonTitle>100% made in Fermât</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      // début Carte 1 : UNICEF
        <IonCard button={true} href="https://instagram.com/unicef_fermat_?igshid=YmMyMTA2M2Y=">
          <img src="./pictures/projects/unicef-cover.png" /> //  Url du compte instagram du projet
          <IonCardHeader> // Tout ce qui concerne titre + Sous-titre
            <IonCardSubtitle>Lycée Pierre de Fermat +</IonCardSubtitle>
            <IonCardTitle>UNICEF</IonCardTitle>
          </IonCardHeader>
          <IonCardContent> // Le corps de la carte
            Sensibilisation des élèves au sein du lycée (mise en place d'un stand spécial Unicef); 
            Conjonction avec le club écodélégation pour combattre le changement climatique; 
            Vente de roses pour la saint valentin et versement de l'argent collecté à l'Unicef; 
            Sorties visant à sensibiliser les élèves aux cause défendues par l'organisation ( cinéma, conférence.) ;
            Tout autre projet sera retenu ! Que vous soyez membre ou pas ! ;
            Proposez vos idées en tapant (bien fort) sur cette carte !!!!
          </IonCardContent>
        </IonCard> // fin Carte 1 : UNICEF
        
      // début Carte 2 : Tutorat 
        <IonCard button={true} href="https://www.tutorat-fermat.fr">
          <img src="./pictures/projects/tutorat-cover.png" /> //  Url du site du projet
          <IonCardHeader> // Tout ce qui concerne titre + Sous-titre
            <IonCardSubtitle>Lycée Pierre de Fermat +</IonCardSubtitle>
            <IonCardTitle>Tutorat</IonCardTitle>
          </IonCardHeader>
          <IonCardContent> // Le corps de la carte
            Sans doute une des meilleures idées qu'un élève ait pu avoir... La solidarité. Bref, ce projet vous permet d'être aidé ou d'aider gratuitement d'autre élèves ! Et ce, dans toutes les matières à tous les niveaux (du lycée). Vous pouvez vous inscrire au tutorat en appuyant bien fort sur cette carte !
          </IonCardContent>
        </IonCard>  // fin Carte 2 : Tutorat
        
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
