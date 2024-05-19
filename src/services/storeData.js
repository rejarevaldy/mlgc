import { Firestore } from '@google-cloud/firestore';

async function storeData(id, data) {
  const db = new Firestore();

  const predictCollection = db.collection('predictions');
  return predictCollection.doc(id).set(data);
}

export default storeData;
