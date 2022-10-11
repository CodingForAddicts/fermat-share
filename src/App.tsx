import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, cloud, rocket } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Francais from './pages/Francais';
import Allemand from './pages/Allemand';
import Espagnol from './pages/Espagnol';
import Geographie from './pages/géographie';
import Histoire from './pages/Histoire';
import Anglais from './pages/Anglais';
import Spemat from './pages/Maths';
import Spepy from './pages/spé Physique';
import HLP from './pages/HLP';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';


setupIonicReact();


const App: React.FC = () => (
  
  <IonApp>
    

    <IonReactRouter>
      
      <IonTabs>
        
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/Francais">
            <Francais />
          </Route>
          <Route exact path="/Allemand">
            <Allemand />
          </Route>
          <Route exact path="/Espagnol">
            <Espagnol />
          </Route>
          <Route exact path="/Anglais">
            <Anglais />
          </Route>
          <Route exact path="/Maths">
            <Spemat />
          </Route>
          <Route exact path="/spé Physique">
            <Spepy />
          </Route>
          <Route exact path="/HLP">
            <HLP />
          </Route>
          <Route exact path="/géographie">
            <Geographie />
          </Route>
          <Route exact path="/Histoire">
            <Histoire />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        
        <IonTabBar translucent={true} slot="bottom">
          
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={cloud} />
            <IonLabel>Cloud</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={rocket} />
            <IonLabel>Projets</IonLabel>
          </IonTabButton>
          
        </IonTabBar>
        
      </IonTabs>
      
    </IonReactRouter>
    
  </IonApp>

);

export default App;
