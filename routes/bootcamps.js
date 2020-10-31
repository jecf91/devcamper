const express = require('express');
const {
  getBootcamp,
  getBootcamps,
  postBootcamp,
  putBootcamp,
  deleteBootcamp,
} = require('../controllers/bootcampsController');

const router = express.Router();

router.route('/').get(getBootcamps).post(postBootcamp);
router.route('/:id').get(getBootcamp).put(putBootcamp).delete(deleteBootcamp);

module.exports = router;
