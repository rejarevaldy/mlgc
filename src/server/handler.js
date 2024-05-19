const predictClassification = require('../services/inferenceService');
const crypto = require('crypto');
const storeData = require('../services/storeData');
const getData = require('../services/getData');

async function postPredict(request, h) {
  const { image } = request.payload;
  const { model } = request.server.app;

  const { confidenceScore, label, explanation, suggestion } =
    await predictClassification(model, image);
  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();

  const data = {
    id: id,
    result: label,
    explanation: explanation,
    suggestion: suggestion,
    confidenceScore: confidenceScore,
    createdAt: createdAt,
  };

  await storeData(id, data);

  return h
    .response({
      status: 'success',
      message:
        confidenceScore > 99
          ? 'Model is predicted successfully.'
          : 'Model is predicted successfully but under treshold. Please use the correct picture.',
      data,
    })
    .code(201);
}

async function getPredictHistories(request, h) {
  const histories = (await getData.get()).docs.map((doc) => doc.data());
  const data = histories.map((item) => ({
    id: item.id,
    history: item,
  }));
  return h.response({ status: 'success', data }).code(200);
}

(module.exports = postPredict), getPredictHistories;