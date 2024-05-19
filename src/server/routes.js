import postPredict from '../server/handler';
import getPredictHistories from '../server/handler';

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
