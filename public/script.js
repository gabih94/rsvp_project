import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, push, serverTimestamp } from "firebase/database";

// Sua configuração do Firebase
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

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Inicializa o Realtime Database
const db = getDatabase(app);

// Selecionando o formulário
const form = document.getElementById("rsvpForm");

// Adicionando o evento de submit ao formulário
form.addEventListener("submit", (e) => {
  e.preventDefault();  // Impede o envio tradicional do formulário

  // Coletando os valores do formulário
  const nome = document.getElementById("nome").value;
  const presenca = document.getElementById("presenca").value;

  // Coletando os acompanhantes (se houver)
  const acompanhantes = [];
  const inputsAcompanhantes = document.querySelectorAll('input[name="acompanhante[]"]');
  
  inputsAcompanhantes.forEach(input => {
    if (input.value.trim() !== "") {
      acompanhantes.push(input.value.trim());
    }
  });

  // Referência ao nó "rsvps" no Realtime Database
  const ref = ref(db, "rsvps");

  // Adicionando os dados no Realtime Database
  push(ref, {
    nome: nome,
    presenca: presenca,
    acompanhantes: acompanhantes,
    timestamp: serverTimestamp(),  // Adiciona o timestamp automaticamente
  })
  .then(() => {
    // Exibe uma mensagem de sucesso
    document.getElementById("mensagem").textContent = "Sua resposta foi enviada com sucesso!";
    form.reset();  // Reseta o formulário
  })
  .catch((error) => {
    // Exibe uma mensagem de erro
    document.getElementById("mensagem").textContent = "Ocorreu um erro ao enviar sua resposta.";
    console.error("Erro ao salvar resposta:", error);
  });
});
