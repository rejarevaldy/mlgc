import { Firestore } from '@google-cloud/firestore';

const db = new Firestore();
const getData= db.collection('predictions');

export default {getData}
