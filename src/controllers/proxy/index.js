const { Router: router } = require('express');
const { post } = require('./post');
const { get } = require('./get');

module.exports = () => {
    const api = router();
  
    api.post('/', post());
    api.get('/', get());
 
    return api;
};
