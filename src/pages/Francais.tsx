import React from 'react';
import {
  IonBackButton,
  IonButtons,
  IonButton,
  IonHeader,
  IonContent,
  IonNavLink,
  IonToolbar,
  IonTitle,
} from '@ionic/react';


function Francais() {
  return (
	<>
	  <IonHeader >
		<IonToolbar>
		  <IonButtons slot="start">
			<IonBackButton></IonBackButton>
		  </IonButtons>
		</IonToolbar>
	  </IonHeader>
	  <IonContent>
		<iframe src="https://fermatshare.ddns.net/index.php/s/a9bKAjAFL7kQp3H" width="100%" height="100%" frameBorder="0"></iframe>
	  </IonContent>
	  
	</>
  );
}

export default Francais;