import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle,  IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { IonCardTitle } from '@ionic/react';
import { IonNav, IonNavLink, IonRouterOutlet } from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import { wifi, wine, document, pencil, calculator, telescope, earth } from 'ionicons/icons';
import Francais from './Francais';
import Tab2 from './Tab2';
import './Tab1.css';


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
                <IonIcon icon={pencil} slot="start" />
              <IonLabel>Francais</IonLabel>
            </IonItem>
         
            <IonItem href="./Francais">
              <IonIcon icon={document} slot="start" />
              <IonLabel>Histoire</IonLabel>
            </IonItem>
          
            <IonItem href="./Francais" >
              <IonIcon icon={telescope} slot="start" />
              <IonLabel>Physique</IonLabel>
            </IonItem>
          
            <IonItem href="#">
              <IonIcon icon={telescope} slot="start" />
              <IonLabel>Chimie</IonLabel>
            </IonItem>
         
            <IonItem href="#">
              <IonIcon icon={document} slot="start" />
              <IonLabel>SES</IonLabel>
            </IonItem>
           
            <IonItem href="#">
              <IonIcon icon={earth} slot="start" />
              <IonLabel>ES</IonLabel>
            </IonItem>
          
            <IonItem href="#">
              <IonIcon icon={document} slot="start" />
              <IonLabel>Anglais</IonLabel>
            </IonItem>
         
            <IonItem href="#">
              <IonIcon icon={document} slot="start" />
              <IonLabel>Espagnol</IonLabel>
            </IonItem>
          
        </IonCard>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
