import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle,  IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { IonCardTitle } from '@ionic/react';
import { IonNav, IonNavLink, IonRouterOutlet } from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import { wifi, wine } from 'ionicons/icons';
import Francais from './Francais';
import Tab2 from './Tab2';

import './Tab1.css';


export function Example() {
  return <IonNav root={() => <Francais />}></IonNav>;
}


const Tab1: React.FC = () => {
  return (
    <>
    
  
    <Example/>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cloud</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Introduction</IonCardSubtitle>
            <IonCardTitle>Qu'est ce que le cloud ?</IonCardTitle>
          </IonCardHeader>
          <IonNavLink routerDirection="forward" component={() => <Francais />}>
            <IonButton>Go to Page Two</IonButton>
          </IonNavLink>
        
          <IonCardContent>
            <p>C'est un espace de partage collaboratif</p>
            <p>C'est un lieu d'entraide</p>
            <p>C'est un moyen de s'améliorer</p>
            
      </IonCardContent>
      
                
        <IonCardHeader>
          <IonCardTitle>Matières</IonCardTitle>
          
            <IonItem button href="./Francais">
              <IonIcon icon={wifi} slot="start" />
              <IonLabel>Francais</IonLabel>
            </IonItem>
            
            <IonItem href="./Francais">
              <IonIcon icon={wine} slot="start" />
              <IonLabel>Histoire</IonLabel>
            </IonItem>
          
            <IonItem href="./Francais" >
              <IonIcon icon={wifi} slot="start" />
              <IonLabel>Physique</IonLabel>
            </IonItem>
          
          <IonItem href="#">
            <IonIcon icon={wine} slot="start" />
            <IonLabel>Chimie</IonLabel>
          </IonItem>
          
          <IonItem href="#">
            <IonIcon icon={wine} slot="start" />
            <IonLabel>SES</IonLabel>
          </IonItem>
          
          <IonItem href="#">
            <IonIcon icon={wine} slot="start" />
            <IonLabel>ES</IonLabel>
          </IonItem>
          
          <IonItem href="#">
            <IonIcon icon={wine} slot="start" />
            <IonLabel>Anglais</IonLabel>
          </IonItem>
          
          <IonItem href="#">
            <IonIcon icon={wine} slot="start" />
            <IonLabel>Espagnol</IonLabel>
          </IonItem>
          </IonCardHeader>
        
        </IonCard>
      </IonContent>
    </IonPage>
    </>
  );
};

export default Tab1;
