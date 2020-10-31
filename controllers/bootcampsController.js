// @desc Get all bootcamps
// @route GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: 'true', data: [{ id: 1 }, { id: 2 }] });
};

// @desc Get single bootcamp
// @route GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ success: 'true', data: `Bootcamp ${req.params.id}` });
};

// @desc  Create a  bootcamp
// @route POST /api/v1/bootcamps/
// @access Private
exports.postBootcamp = (req, res, next) => {
  res.status(201).json({ success: 'true', msg: 'Created' });
};

// @desc  Update a  bootcamp
// @route PUT /api/v1/bootcamps/:id
// @access Private
exports.putBootcamp = (req, res, next) => {
  res.status(200).json({
    success: 'true',
    msg: `Updated bootcamp ${req.params.id}`,
  });
};

// @desc  Delete a  bootcamp
// @route DELETE /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: 'true', msg: `Deleted bootcamp ${req.params.id}` });
};
