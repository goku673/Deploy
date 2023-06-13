const {Router} = require('express');
const { postActivity,getActivity } = require('../../Handlers/ActivityHandlers');

const ActivityRouter  = Router();

ActivityRouter.post('/',postActivity);
ActivityRouter.get('/',getActivity);

module.exports =  ActivityRouter ; 