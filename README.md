# Raspberry Pi - Firebase Tutorial

---

### Google

1. Creeaza un cont Google
2. Logheaza-te in contul tau google

### Firebase

1. Conecteaza-te la https://console.firebase.google.com
2. Creeaza un nou proiect (e intuitiv, ii pui un nume si il legi la contul tau de google)
3. Din panoul din stanga alegi **Database** -> **Rules** si pui asta
   `{ "rules": { ".read": "auth == null", ".write": "auth == null" } }`

### RPi

##### Instaleaza urmatoarele

`sudo pip install requests`
`sudo pip install python-firebase`

###### In fisierul tau **.py**, importa **firebase** :

`from firebase import firebase`

###### Copiezi de pe https://console.firebase.google.com/ -> Database -> Data, ai un link (la mine e asa https://raspberry-sorin.firebaseio.com/ ), iar in fisierul tau **.py** :

`firebase = firebase.FirebaseApplication("https://raspberry-sorin.firebaseio.com/", None)`

##### Insereaza in baza de date:

In exemplul video eu foloseam rezultatul (distanta intre senzor si obiect) si era salvat in variabila **distance** .
`result = firebase.post('distances', { "distance": distance})`

###### distances e colectia

###### distance e numele proprietatii din obiect

###### ultimul distance, e variabila mea (cea mentionata mai sus)

Ar trebui dupa ce rulezi fisierul cu python, sa iti trimita in baza de date rezultatul tau (ar trebui sa il vezi live aici https://console.firebase.google.com/ -> Database -> Data )

Daca totul a mers bine esti pregatita pentru ultima parte

### Web

Descarca cele 3 fisiere de aici **index.html**, **script.js** si **style.css**
