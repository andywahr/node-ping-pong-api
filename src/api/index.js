const express = require('express');

// list of controllers here
const proxy = require('../controllers/proxy');

const routersInit = () => {
  const router = express();

  // register api points
  router.use('/proxy', proxy());

  return router;
};

module.exports = routersInit;