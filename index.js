import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getDatabase, ref, set, get, child} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";

const firebaseConfig = {
apiKey: "AIzaSyB2HNQTbtlDEAQHSNuUpyOSyzQbVmxOMPM",
authDomain: "todo-e99d6.firebaseapp.com",
projectId: "todo-e99d6",
storageBucket: "todo-e99d6.appspot.com",
messagingSenderId: "411321445587",
appId: "1:411321445587:web:5a2be1a0c34576f742b826"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase(app);

const signUp = document.getElementById('signup');

function writeUserData(Username, email, Password){
    set(ref(db, 'user/' + Username), {
        username: Username,
        email: email,
        password: password
    });
}

signUp.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up successfully
            const user = userCredential.user;
            alert('User created!');
            
            writeUserData(username, email, password);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
});

const loginButton = document.getElementById('login');

loginButton.addEventListener('click', async (e) => {
    e.preventDefault(); 

var email = document.getElementById('email').value;
var password = document.getElementById('password').value;

 try {
const userCredential = await signInWithEmailAndPassword(auth, email, password);
// Logged in successfully
const user = userCredential.user;
alert('Logged in successfully!');

window.location.href = 'neww.html'; 
} catch (error) {
const errorMessage = error.message;
alert(errorMessage);
}
});

