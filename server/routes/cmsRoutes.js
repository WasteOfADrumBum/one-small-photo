const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator')

// load Model
const cmsModel = require('../models/cmsModel')

// @Route   GET api/cms/
// @Desc    Read All CMS Entries
// @Action  readAllCMSEntries()
// @Access  Private
router.get('/', async (req, res) => {
  try {
    /* Sort Entries by imgCategory */
    const cms = await cmsModel.find().sort('imgCategory')
    if (cms.length <= 0) {
      return res.status(400).json({
        errors: [{ msg: 'No cms was found' }],
      })
    }

    return res.json(cms)
  } catch (err) {
    console.error(err.message)
    return res.status(500).send('Server Error')
  }
})

// @Route   GET api/cms/:id
// @Desc    Read CMSEntry by ID
// @Action  readCMSEntry()
// @Access  Private
router.get('/:id', async (req, res) => {
  try {
    const cms = await cmsModel.findOne({ _id: req.params.id })
    if (!cms) {
      return res.status(400).json({
        errors: [{ msg: 'No cms was found' }],
      })
    }

    return res.json(cms)
  } catch (err) {
    console.error(err.message)
    return res.status(500).send('Server Error')
  }
})

// @Route   POST api/cms/create-cms
// @Desc    Create CMSEntry
// @Action  createCMSEntry()
// @Access  Private
router.post(
  '/create-cms',
  [
    // Form Validation
    body('imgSubject').not().isEmpty().trim().withMessage('Enter a subject'),
    body('imgCaption').not().isEmpty().trim().withMessage('Enter a caption'),
    body('imgCategory').not().isEmpty().trim().withMessage('Select a category'),
    body('imgOrientation')
      .not()
      .isEmpty()
      .trim()
      .withMessage('Select an orientation'),
    body('imgPolaroid')
      .not()
      .isEmpty()
      .trim()
      .withMessage('Can this be used as a polaroid?'),
    body('imgLandingPage')
      .not()
      .isEmpty()
      .trim()
      .withMessage('Can this be used on the landing page?'),
    body('source').not().isEmpty().trim().withMessage('Enter a AWS S3 url'),
  ],
  async (req, res) => {
    const {
      imgSubject,
      imgCaption,
      imgCategory,
      imgOrientation,
      imgPolaroid,
      imgLandingPage,
      source,
    } = req.body

    const newEntry = {
      imgSubject: imgSubject,
      imgCaption: imgCaption,
      imgCategory: imgCategory,
      imgOrientation: imgOrientation,
      imgPolaroid: imgPolaroid,
      imgLandingPage: imgLandingPage,
      source: source,
    }

    try {
      const errors = validationResult(req)
      //Check if there are errors
      if (!errors.isEmpty()) {
        console.log(errors)
        //If so Send response status with the error message'
        return res.status(500).json({ success: false, data: errors.array() })
      }

      let cms = new cmsModel(newEntry)
      await cms.save()
      res.status(200).json({
        success: true,
        message: 'Entry submitted successfully',
      })
    } catch (error) {
      console.error(error.message)
      res.status(500).json({ status: false, error: error.message })
    }
  },
)

// @Route   PUT api/cms/update-cms/:id
// @Desc    Update CMSEntry
// @Action  updateCMSEntry()
// @Access  Private
router.post(
  '/update-cms/:id',
  [
    // Form Validation
    body('imgSubject').not().isEmpty().trim().withMessage('Enter a subject'),
    body('imgCaption').not().isEmpty().trim().withMessage('Enter a caption'),
    body('imgCategory').not().isEmpty().trim().withMessage('Select a category'),
    body('imgOrientation')
      .not()
      .isEmpty()
      .trim()
      .withMessage('Select an orientation'),
    body('imgPolaroid')
      .not()
      .isEmpty()
      .trim()
      .withMessage('Can this be used as a polaroid?'),
    body('imgLandingPage')
      .not()
      .isEmpty()
      .trim()
      .withMessage('Can this be used on the landing page?'),
    body('source').not().isEmpty().trim().withMessage('Enter a AWS S3 url'),
  ],
  async (req, res) => {
    const {
      imgSubject,
      imgCaption,
      imgCategory,
      imgOrientation,
      imgPolaroid,
      imgLandingPage,
      source,
    } = req.body

    const newEntry = {
      imgSubject: imgSubject,
      imgCaption: imgCaption,
      imgCategory: imgCategory,
      imgOrientation: imgOrientation,
      imgPolaroid: imgPolaroid,
      imgLandingPage: imgLandingPage,
      source: source,
    }

    try {
      let cms = await cmsModel.findById(req.params.id)
      // Check if it exsists
      if (!cms) {
        return res.status(400).json({
          errors: [{ msg: 'CMS entry does not exist' }],
        })
      }

      cms = await cmsModel.findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: newEntry },
        { new: true },
      )
      res.json(cms)
    } catch (err) {
      console.error('Update CMS Entry Route: ', err.message)
      res.status(500).send('Server Error')
    }
  },
)

// @Route   DELTE api/cms/delete-cms/:id
// @Desc    Delete CMSEntry
// @Action  deleteCMSEntry()
// @Access  Private
router.delete('/delete-cms/:id', async (req, res) => {
  try {
    const cms = await cmsModel.findOneAndRemove({
      _id: req.params.id,
    })
    if (!cms) {
      return res.status(400).json({
        errors: [{ msg: 'CMS entry was not found' }],
      })
    }
    const allCMSEntries = await cmsModel.find()
    if (allCMSEntries.length <= 0) {
      return res.status(400).json({
        errors: [{ msg: 'No cms entry was found' }],
      })
    }
    res.json(allCMSEntries)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
