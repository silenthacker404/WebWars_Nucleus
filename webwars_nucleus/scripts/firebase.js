// FIREBASE CONFIG
const firebaseConfig = {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
};

// FIREBASE
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// lOGIN/ REGISTER lOGIC
document.getElementById("sign-in").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    auth.signInWithEmailAndPassword(email, password)
        .then(() => alert("Signed In Successfully!"))
        .catch((error) => alert(error.message));
});

document.getElementById("sign-up").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    auth.createUserWithEmailAndPassword(email, password)
        .then(() => alert("Account Created!"))
        .catch((error) => alert(error.message));
});
