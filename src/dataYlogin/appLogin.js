function registrar() {
    const email = document.getElementById("email").value;
    const contraseña = document.getElementById("contraseña").value;
    firebase.auth().createUserWithEmailAndPassword(email, contraseña)
        .then(function () {
            verificar();
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            // ...
        });
}

function ingreso() {
    const email2 = document.getElementById("email2").value;
    const contraseña2 = document.getElementById("contraseña2").value;
    firebase.auth().signInWithEmailAndPassword(email2, contraseña2).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
    });

}

function observador() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            aparece(user);
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            console.log(user.emailVerified);
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            console.log(" existe usuario activo");
            // ...
        } else {
            // User is signed out.
            // ...
            console.log("no existe usuario activo");
        }
    });
}
observador();

function aparece(user) {
    var user = user;
    if (user.emailVerified) {
        var contenido = document.getElementById('contenido');
        contenido.innerHTML = ` 
    <p>bienvenido</p>
    <button onclick="cerrar()">cerrar sesion</button>`;
    }
}

function cerrar() {
    firebase.auth().signOut()
        .then(function () {
            console.log("saliendo");

        })
        .catch(function (error) {
            console.log(error)
        })
}


function verificar() {

    var user = firebase.auth().currentUser;
    user.sendEmailVerification().then(function () {
            //email.sent
            console.log("enviando correo");
        })
        .catch(function (error) {
            //an error happend
            console.log(error);
        });
}