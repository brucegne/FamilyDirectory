
  
   const firebaseConfig = {
    apiKey: "AIzaSyBFTDAUZWhpPkKGGiE1DvILAlI0yV-msNw",
    authDomain: "family-863a0.firebaseapp.com",
    databaseURL: "https://family-863a0.firebaseio.com",
    projectId: "family-863a0",
    storageBucket: "family-863a0.appspot.com",
    messagingSenderId: "692970311427",
    appId: "1:692970311427:web:cf095ed0201c76e17d2336"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
ref = firebase.database().ref();
ref2 = ref.child('/Starter');

ref2.on('value', function(snap){
      document.getElementById('batstat').innerHTML=snap.val();
});

document.addEventListener("online", onOnline, false);
 
function onOnline() {
    alert("You is online");
}

