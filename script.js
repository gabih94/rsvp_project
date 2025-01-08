import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD01GTyIGpGR7NFwjxn1ijH5Q96ZgyyQ08",
  authDomain: "rsvp-project-d7d1b.firebaseapp.com",
  databaseURL: "https://rsvp-project-d7d1b-default-rtdb.firebaseio.com",
  projectId: "rsvp-project-d7d1b",
  storageBucket: "rsvp-project-d7d1b.firebasestorage.app",
  messagingSenderId: "991119201634",
  appId: "1:991119201634:web:2046d38e706835d45ec83b",
  measurementId: "G-2ECVY5LYK2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

document.getElementById('rsvpForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  const nome = document.getElementById('nome').value;
  const presenca = document.getElementById('presenca').value;
  const mensagem = document.getElementById('mensagem');

  mensagem.textContent = `Obrigado, ${nome}! Sua presença foi registrada como "${presenca}".`;
});
