
/*The function is usually use to read file from the desire location which is given in parameter */

async function readFile(address) {
    const response = await fetch(address);
    const data = await response.text();
    return data;
}
/*firebase config*/
const firebaseConfig = {
    apiKey: "AIzaSyABuFMPznlx28wBHZ82tX08L1a96GjgUIo",
    authDomain: "lovcal37326.firebaseapp.com",
    projectId: "lovcal37326",
    storageBucket: "lovcal37326.appspot.com",
    messagingSenderId: "732857041113",
    appId: "1:732857041113:web:5afaddf9d92f29e521fec8",
    measurementId: "G-4241DDM9XN"
};