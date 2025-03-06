import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Amplify } from 'aws-amplify';
import { authCognitoConfig } from "./auth/cognitoConfig"; // Ensure this file exists and contains your Cognito configuration
import { BrowserRouter } from "react-router-dom";

Amplify.configure(authCognitoConfig);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
