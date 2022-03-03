const firebaseConfig = {
    apiKey: "AIzaSyBY8P4A4JRJKR0rowuNlU4It03h-srewfc",
    authDomain: "peny-count.firebaseapp.com",
    databaseURL: "https://peny-count-default-rtdb.firebaseio.com",
    projectId: "peny-count",
    storageBucket: "peny-count.appspot.com",
    messagingSenderId: "858572938439",
    appId: "1:858572938439:web:9da98cba5c1ba0926bf2e2"
};
firebase.initializeApp(firebaseConfig);
const penycountform = firebase.database().ref("penycountform");
document.getElementById("penycountform").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    var name = getElementval("name");
    var email = getElementval("email");
    var phone = getElementval("phone");
    savemessages(name, email, phone);
    document.querySelector(".alert").style.display = "block";
    document.getElementById("penycountform").reset();
};
const savemessages = (name, email, phone) => {
    var newpenycountform = penycountform.push();
    newpenycountform.set({
        name: name,
        email: email,
        phone: phone,
    });
};
const getElementval = (id) => {
    return document.getElementById(id).value;
};
const penycountformbottom = firebase.database().ref("penycountform");
document.getElementById("penycountformbottom").addEventListener("submit", submitFormbottom);

function submitFormbottom(e) {
    e.preventDefault();
    var name = getElementval("bname");
    var email = getElementval("bemail");
    var phone = getElementval("bphone");
    savemessages(name, email, phone);
    document.querySelector(".alertbottom").style.display = "block";
    document.getElementById("penycountformbottom").reset();
};
const savemessagesbottom = (name, email, phone) => {
    var newpenycountform = penycountformbottom.push();
    newpenycountform.set({
        name: name,
        email: email,
        phone: phone,
    });
};