import { useState } from "react";
import { CognitoUser, CognitoUserPool, AuthenticationDetails, CognitoUserAttribute } from "amazon-cognito-identity-js";
import { useNavigate } from "react-router-dom"; // For redirection

import {} from "amazon-cognito-identity-js";
import { cognitoConfig } from "../auth/cognitoConfig";

const userPool = new CognitoUserPool({
  UserPoolId: cognitoConfig.userPoolId,
  ClientId: cognitoConfig.clientId,
});

export default function Verify() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Hook to navigate after verification

  const handleVerify = () => {
    const user = new CognitoUser({ Username: email, Pool: userPool });

    user.confirmRegistration(code, true, (err, result) => {
      if (err) {
        setMessage(err.message || "Verification failed");
      } else {
        setMessage("Verification successful! Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000); // Redirect to login after success
      }
    });
  };

  return (
    <div>
      <h2>Verify Your Account</h2>
      <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="text" placeholder="Enter verification code" value={code} onChange={(e) => setCode(e.target.value)} required />
      <button onClick={handleVerify}>Verify</button>
      {message && <p>{message}</p>}
    </div>
  );
}
