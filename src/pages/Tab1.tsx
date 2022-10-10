import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle,  IonCardContent, IonItem, IonIcon, IonLabel } from '@ionic/react';
import { IonCardTitle } from '@ionic/react';
import {  document, pencil, calculator, language, telescope, earth, hourglass, receipt, cash, logoReact } from 'ionicons/icons';
import './Tab1.css';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";

// Get the Frontend API from the environment
const frontendApi = process.env.REACT_APP_CLERK_FRONTEND_API;

const Tab1: React.FC = () => {
  return (
    <IonPage> 
      <IonHeader>
        <IonToolbar> 
          <IonTitle>Cloud</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen> 
      <IonHeader collapse="condense">
        <IonToolbar> 
          <IonTitle size="large">Cloud</IonTitle>
        </IonToolbar>
      </IonHeader>
        <IonCard button={true} href="https://www.instagram.com/fermat_share/">
          <IonCardHeader> 
            <IonCardSubtitle>informations</IonCardSubtitle>
            <IonCardTitle>Version Alpha de FermatShare</IonCardTitle>
          </IonCardHeader>
          
          <IonCardContent> 
            Vous avez intallé FermatShare ! Bravo. Cette version de FermatShare n'est absolument pas définitive et subira de multiples mises à jour. Si vous rencontrez un bug, n'hésitez pas à le signaler sur le compte instagram de l'appli !
            (ou en cliquant sur cette carte !)
          </IonCardContent>
        </IonCard> 
        
      
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Introduction</IonCardSubtitle>
            <IonCardTitle>Qu'est ce que le cloud ?</IonCardTitle>
          </IonCardHeader>
   
          <IonCardContent> 
            C'est un espace de partage collaboratif -               
            C'est un lieu d'entraide -          
            C'est un moyen de s'améliorer                           
          </IonCardContent>
        </IonCard>
        
      
        <IonCard>          
          <IonCardHeader> 
            <IonCardTitle>Matières</IonCardTitle>
          </IonCardHeader>  
          
              <IonItem button href="./Francais">
                <IonIcon icon={receipt} slot="start" />
              <IonLabel>Francais</IonLabel>
            </IonItem>
            
            <IonItem href="./HLP">
              <IonIcon icon={pencil} slot="start" />
              <IonLabel>HLP</IonLabel>
            </IonItem>
         
            <IonItem href="./Histoire">
              <IonIcon icon={hourglass} slot="start" />
              <IonLabel>Histoire</IonLabel>
            </IonItem>
            
            <IonItem href="./Maths" >
              <IonIcon icon={calculator} slot="start" />
              <IonLabel>Maths</IonLabel>
            </IonItem>
          
            <IonItem href="./spé Physique" >
              <IonIcon icon={telescope} slot="start" />
              <IonLabel>Physique</IonLabel>
            </IonItem>
          
            <IonItem href="./spé Physique">
              <IonIcon icon={logoReact} slot="start" />
              <IonLabel>Chimie</IonLabel>
            </IonItem>
         
            <IonItem href="#">
              <IonIcon icon={cash} slot="start" />
              <IonLabel>SES</IonLabel>
            </IonItem>
           
            <IonItem href="#">
              <IonIcon icon={earth} slot="start" />
              <IonLabel>ES</IonLabel>
            </IonItem>
          
            <IonItem href="./Anglais">
              <IonIcon icon={language} slot="start" />
              <IonLabel>Anglais</IonLabel>
            </IonItem>
         
            <IonItem href="./Espagnol">
              <IonIcon icon={language} slot="start" />
              <IonLabel>Espagnol</IonLabel>
            </IonItem>
            
            <IonItem href="./Allemand">
              <IonIcon icon={language} slot="start" />
              <IonLabel>Allemand</IonLabel>
            </IonItem>
          
        </IonCard>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
