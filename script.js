document.addEventListener("DOMContentLoaded", () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAwBsCvre-wGlY3VFtqdbXg_PeB7cPjyZM",
    authDomain: "coming-soon-landing-page-43193.firebaseapp.com",
    projectId: "coming-soon-landing-page-43193",
    storageBucket: "coming-soon-landing-page-43193.appspot.com",
    messagingSenderId: "120035215670",
    appId: "1:120035215670:web:0287cf13f7f1176f468b97",
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  const inputBox = document.getElementById("inputBox");
  const submitBtn = document.getElementById("submitBtn");

  submitBtn.addEventListener("click", () => {
    const text = inputBox.value;

    db.collection("email")
      .add({
        text: text,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        console.log("Data successfully written!");
        inputBox.value = "";
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  });
});
