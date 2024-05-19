import { Firestore } from '@google-cloud/firestore';

const db = new Firestore();

export default getData = db.collection('predictions');
