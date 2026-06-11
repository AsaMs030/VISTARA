// ============================================
// Firebase Configuration
// ============================================

// قم باستبدال هذه البيانات ببيانات مشروعك
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

let auth, db, storage;
let currentUser = null;

// Initialize Firebase
try {
    firebase.initializeApp(firebaseConfig);
    auth = firebase.auth();
    db = firebase.firestore();
    storage = firebase.storage();
    
    // Monitor auth state
    firebase.auth().onAuthStateChanged(user => {
        currentUser = user;
        console.log('User:', user);
    });
} catch (error) {
    console.warn('Firebase not configured yet. Please add your credentials to firebase-config.js');
}

// ============================================
// Auth Functions
// ============================================

async function signUp(email, password) {
    try {
        const result = await auth.createUserWithEmailAndPassword(email, password);
        return result.user;
    } catch (error) {
        throw error;
    }
}

async function login(email, password) {
    try {
        const result = await auth.signInWithEmailAndPassword(email, password);
        return result.user;
    } catch (error) {
        throw error;
    }
}

async function logout() {
    try {
        await auth.signOut();
        currentUser = null;
    } catch (error) {
        throw error;
    }
}

function getCurrentUser() {
    return currentUser;
}

// ============================================
// Firestore Functions
// ============================================

async function saveFavorite(itemId, itemData) {
    if (!currentUser) throw new Error('User not logged in');
    try {
        await db.collection('users').doc(currentUser.uid).collection('favorites').doc(itemId).set({
            ...itemData,
            savedAt: new Date()
        });
    } catch (error) {
        throw error;
    }
}

async function getFavorites() {
    if (!currentUser) return [];
    try {
        const snapshot = await db.collection('users').doc(currentUser.uid).collection('favorites').get();
        const favorites = [];
        snapshot.forEach(doc => {
            favorites.push({ id: doc.id, ...doc.data() });
        });
        return favorites;
    } catch (error) {
        throw error;
    }
}

async function removeFavorite(itemId) {
    if (!currentUser) throw new Error('User not logged in');
    try {
        await db.collection('users').doc(currentUser.uid).collection('favorites').doc(itemId).delete();
    } catch (error) {
        throw error;
    }
}
