import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { auth, database } from '@/firebase/firebase';
import { ref } from 'firebase/database';
import { useObject } from 'react-firebase-hooks/database';

interface Props {
  email: string;
}

const ForgotPassword: React.FC<Props> = ({ email }) => {
  const [sendPasswordResetEmail, resetEmail, resetError] = useSendPasswordResetEmail(auth);

  const [snapshot, Emailloading, Emailerror] = useObject(ref(database, 'Client'));
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    if (snapshot && snapshot.exists() && snapshot.hasChildren()) {
      const tempChildDataArray: any[] = [];
      snapshot.forEach((childSnapshot) => {
        tempChildDataArray.push(childSnapshot.val());
      });
      setData(tempChildDataArray);
    }
  }, [snapshot]);

  const handleForgotPassword = async () => {
    if (data.some(item => item.email === email)){
      sendPasswordResetEmail(email);
      displayAlertTrue("Redefinição de senha enviada para o seu e-mail");
    } else {
      displayAlertFalse("Digite um e-mail existente!");
    }
  };

  const displayAlertTrue = (messageTrue: string) => {
    const alertElement = document.createElement("div");
    alertElement.className = `fixed top-0 left-0 w-full h-full flex items-start justify-center mt-32`;
    alertElement.innerHTML = `
    <div class="bg-green-700  w-80 p-8 text-center animaTranslateY transform transition-transform duration-200 ease-in">
    <p class="text-lg text-white">${messageTrue}</p>
  </div>
    `;
    document.body.appendChild(alertElement);
    setTimeout(() => {
      alertElement.remove();
    }, 3500);
  };

  const displayAlertFalse = (messageFalse: string) => {
    const alertElement = document.createElement("div");
    alertElement.className = `fixed top-0 left-0 w-full h-full flex items-start justify-center mt-32`;
    alertElement.innerHTML = `
    <div class="bg-red-700  w-80 p-8 text-center animaTranslateY transform transition-transform duration-200 ease-in">
    <p class="text-xl text-white">${messageFalse}</p>
  </div>
    `;
    document.body.appendChild(alertElement);
    setTimeout(() => {
      alertElement.remove();
    }, 2000);
  };

  return (
    <>
      <p className="text-blue-500 hover:underline" onClick={handleForgotPassword}>
        Esqueceu sua senha?
      </p>    
      </>
  );
};

export default ForgotPassword;
