const postPredict = require('../server/handler');
const getPredictHistories = require('../server/handler');

const routes = [
  {
    path: '/predict',
    method: 'POST',
    handler: postPredict,
    options: {
      payload: {
        allow: 'multipart/form-data',
        multipart: true,
      },
    },

    path: '/predict/histories',
    method: 'GET',
    handler: getPredictHistories,
  },
];

export default routes;
