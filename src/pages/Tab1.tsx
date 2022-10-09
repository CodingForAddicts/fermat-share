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
    <IonPage> // Initialisation de Ionic
      <IonHeader> // La bannière en haut de l'app
        <IonToolbar> // ce qui est marqué dans la bannière en haut de l'app
          <IonTitle>Cloud</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen> // mode fullscreen pour une meilleure optimisation
        // Carte 1 : Notes de version + Compte de l'appli
        <IonCard button={true} href="https://www.instagram.com/fermat_share/"> //  Url du compte instagram du projet
          <IonCardHeader> // Tout ce qui concerne titre + Sous-titre
            <IonCardSubtitle>informations</IonCardSubtitle>
            <IonCardTitle>Version Alpha de FermatShare</IonCardTitle>
          </IonCardHeader>
          
          <IonCardContent> // Le corps de la carte
            Vous avez intallé FermatShare ! Bravo. Cette version de FermatShare n'est absolument pas définitive et subira de multiples mises à jour. Si vous rencontrez un bug, n'hésitez pas à le signaler sur le compte instagram de l'appli !
            (ou en cliquant sur cette carte !)
          </IonCardContent>
        </IonCard> // Fin Carte 1
        
        // Carte 2 : Explication du projet 
        <IonCard>
          <IonCardHeader> // Tout ce qui concerne titre + Sous-titre
            <IonCardSubtitle>Introduction</IonCardSubtitle>
            <IonCardTitle>Qu'est ce que le cloud ?</IonCardTitle>
          </IonCardHeader>
   
          <IonCardContent> // Le corps de la carte
            <a>C'est un espace de partage collaboratif</a>
            <a>C'est un lieu d'entraide</a>
            <a>C'est un moyen de s'améliorer</a>
          </IonCardContent>
        </IonCard> // Fin Carte 2
        
        // Carte 3 : Le cloud 
        <IonCard>          
          <IonCardHeader> // Tout ce qui concerne le titre
            <IonCardTitle>Matières</IonCardTitle>
          </IonCardHeader>  
            // Menu liste des matières du cloud
              //Français
              <IonItem button href="./Francais">
                <IonIcon icon={pencil} slot="start" />
              <IonLabel>Francais</IonLabel>
            </IonItem>
            // Histoire
            <IonItem href="./Francais">
              <IonIcon icon={document} slot="start" />
              <IonLabel>Histoire</IonLabel>
            </IonItem>
            // Physique
            <IonItem href="./Francais" >
              <IonIcon icon={telescope} slot="start" />
              <IonLabel>Physique</IonLabel>
            </IonItem>
            // Chimie
            <IonItem href="#">
              <IonIcon icon={telescope} slot="start" />
              <IonLabel>Chimie</IonLabel>
            </IonItem>
            // SES
            <IonItem href="#">
              <IonIcon icon={document} slot="start" />
              <IonLabel>SES</IonLabel>
            </IonItem>
            // ES
            <IonItem href="#">
              <IonIcon icon={earth} slot="start" />
              <IonLabel>ES</IonLabel>
            </IonItem>
            // Anglais  
            <IonItem href="#">
              <IonIcon icon={document} slot="start" />
              <IonLabel>Anglais</IonLabel>
            </IonItem>
            // Espagnol
            <IonItem href="#">
              <IonIcon icon={document} slot="start" />
              <IonLabel>Espagnol</IonLabel>
            </IonItem>
          // Fin du menu liste des matières du cloud  
        </IonCard> // Fin Carte 3 
        
      </IonContent>
    </IonPage>
  );
};

export default Tab1; // On exporte tout l'onglet 1 en tant que fonction par défaut
