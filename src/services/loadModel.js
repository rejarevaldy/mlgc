import tf from '@tensorflow/tfjs-node';

async function loadModel() {
  return tf.loadGraphModel(process.env.MODEL_URL);
}

export default loadModel;
