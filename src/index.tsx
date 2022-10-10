import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ClerkProvider } from "@clerk/clerk-react";
import {
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";


import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const frontendApi = process.env.REACT_APP_CLERK_FRONTEND_API;
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  
  <React.StrictMode>
    
    <ClerkProvider frontendApi={frontendApi}>
   <SignedIn>
      <App/>
    </SignedIn>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
    </ClerkProvider>
    
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
