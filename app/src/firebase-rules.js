service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
  }
}

firebase-database.js
{
  "rules": {
    ".read": false,
    ".write": false
  }
}
