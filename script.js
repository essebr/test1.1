const wrapper = document.querySelector('.wrapper');
const registerLink = document. querySelector('.register-link');
const loginLink = document. querySelector('.login-link');

registerLink.onclick = () => {
	wrapper.classList.add('active');
}

loginLink.onclick = () => {
	wrapper.classList.remove('active');
}
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
import { getFirestore, collection, addDoc} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey : "AIzaSyDHO7Hkt7KKcNYmEXByqyyz3BYyO20XmYg" , 
  authDomain : "something-78fba.firebaseapp.com" , 
  projectId : "something-78fba" , 
  storageBucket : "something-78fba.appspot.com" , 
  messagingSenderId : "988588103721" , 
  appId : "1:988588103721:web:c2b6a6473ab592e2d66438"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const onclickk = document.getElementById('btn-submit-login');
        console.log('onclickk : ', onclickk );
        onclickk.addEventListener('click',  (i) => {
            i.preventDefault();
             let emailValue = 
            document.getElementById("email-login").value;
          let passwordValue = 
            document.getElementById("password-login").value;
            createUserWithEmailAndPassword(auth, emailValue, passwordValue)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
              alert("User sign up successfully with", user.email);
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              alert(errorMessage);
            });
            get
})

createUserWithEmailAndPassword(auth, data_signup.email, data_signup.password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("User sign up successfully with", user.email);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });