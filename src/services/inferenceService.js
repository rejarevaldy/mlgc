const tf = require('@tensorflow/tfjs-node');
const InputError = require('../exceptions/InputError');
async function predictClassification(model, image) {
  try {
    const tensor = tf.node
      .decodeJpeg(image)
      .resizeNearestNeighbor([224, 224])
      .expandDims()
      .toFloat();

    const prediction = model.predict(tensor);
    const score = await prediction.data();
    const resultScore = Math.max(...score) * 100;
    const result = resultScore > 50 ? 'Cancer' : 'Non-cancer';

    const suggestion =
      result === 'Cancer' ? 'Segera periksa ke dokter!' : 'Anda sehat!';

    return { resultScore, result, suggestion };
  } catch (error) {
    throw new InputError('Terjadi kesalahan dalam melakukan prediksi');
  }
}

export default predictClassification;
