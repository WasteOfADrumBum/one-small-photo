const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator')

// load Model
const inboxModel = require('../models/inboxModel')

// @Route   GET api/inbox/
// @Desc    Read All Inbox Entries
// @Action  readAllInboxEntries()
// @Access  Private
router.get('/', async (req, res) => {
  try {
    /* Sort Entries by Last Name */
    const inbox = await inboxModel.find().sort('lastName')
    if (inbox.length <= 0) {
      return res.status(400).json({
        errors: [{ msg: 'No inbox was found' }],
      })
    }

    return res.json(inbox)
  } catch (err) {
    console.error(err.message)
    return res.status(500).send('Server Error')
  }
})

// @Route   GET api/inbox/:id
// @Desc    Read InboxEntry by ID
// @Action  readInboxEntry()
// @Access  Private
router.get('/:id', async (req, res) => {
  try {
    const inbox = await inboxModel.findOne({ _id: req.params.id })
    if (!inbox) {
      return res.status(400).json({
        errors: [{ msg: 'No inbox was found' }],
      })
    }

    return res.json(inbox)
  } catch (err) {
    console.error(err.message)
    return res.status(500).send('Server Error')
  }
})

// @Route   POST api/inbox/create-inbox
// @Desc    Create InboxEntry
// @Action  createInboxEntry()
// @Access  Private
router.post(
  '/create-inbox',
  [
    // Form Validation
    body('firstName')
      .not()
      .isEmpty()
      .trim()
      .escape()
      .withMessage('Enter a First Name'),
    body('lastName')
      .not()
      .isEmpty()
      .trim()
      .escape()
      .withMessage('Enter a Last name'),
    body('email').isEmail().withMessage('Enter a valid email'),
    body('phone').isMobilePhone().withMessage('Enter a valid phone number'),
    body('type').not().isEmpty().withMessage('Enter a session type'),
    body('location')
      .not()
      .isEmpty()
      .withMessage('Enter a location (atleast a city)'),
    body('method')
      .not()
      .isEmpty()
      .withMessage('Select a preferred method of contact'),
  ],
  async (req, res) => {
    console.log(req.body)
    const {
      firstName,
      lastName,
      email,
      phone,
      instagramHandle,
      comment,
      type,
      date,
      budget,
      location,
      referral,
      read,
      method,
    } = req.body

    const newEntry = {
      contactInfo: {
        name: {
          first: firstName,
          last: lastName,
        },
        email: email,
        phone: phone,
        contactMethod: method,
        instagramHandle: instagramHandle,
      },
      request: {
        comment: comment,
        type: type,
        date: date,
        budget: budget,
        location: location,
      },
      referral: referral,
      read: read,
    }

    try {
      const errors = validationResult(req)
      //Check if there are errors
      if (!errors.isEmpty()) {
        console.log(errors)
        //If so Send response status with the error message'
        return res.status(500).json({ success: false, data: errors.array() })
      }

      let inbox = new inboxModel(newEntry)
      await inbox.save()
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

// @Route   PUT api/inbox/update-inbox/:id
// @Desc    Update InboxEntry
// @Action  updateInboxEntry()
// @Access  Private
router.post('/update-inbox/:id', async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    instagramHandle,
    comment,
    type,
    date,
    budget,
    location,
    referral,
    read,
  } = req.body

  const newEntry = {
    contactInfo: {
      name: {
        first: firstName,
        last: lastName,
      },
      email: email,
      phone: phone,
      instagramHandle: instagramHandle,
    },
    request: {
      comment: comment,
      type: type,
      date: date,
      budget: budget,
      location: location,
    },
    referral: referral,
    read: read,
  }

  try {
    let inbox = await inboxModel.findById(req.params.id)
    // Check if it exsists
    if (!inbox) {
      return res.status(400).json({
        errors: [{ msg: 'Inbox entry does not exist' }],
      })
    }

    inbox = await inboxModel.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: newEntry },
      { new: true },
    )
    res.json(inbox)
  } catch (err) {
    console.error('Update Inbox Entry Route: ', err.message)
    res.status(500).send('Server Error')
  }
})

// @Route   PUT api/inbox/update-inbox-status/:id
// @Desc    Update Inbox Status Only
// @Action  updateInboxStatus()
// @Access  Private
router.post('/update-inbox-status/:id', async (req, res) => {
  const { read } = req.body
  try {
    let inbox = await inboxModel.findById(req.params.id)
    // Check if it exsists
    if (!inbox) {
      return res.status(400).json({
        errors: [{ msg: 'Entry does not exist' }],
      })
    }

    inbox = await inboxModel.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: { read: read } },
      { new: true },
    )
    res.json(inbox)
  } catch (err) {
    console.error('updateInbox Route: ', err.message)
    res.status(500).send('Server Error')
  }
})

// @Route   DELTE api/inbox/delete-inbox/:id
// @Desc    Delete InboxEntry
// @Action  deleteInboxEntry()
// @Access  Private
router.delete('/delete-inbox/:id', async (req, res) => {
  try {
    const inbox = await inboxModel.findOneAndRemove({
      _id: req.params.id,
    })
    if (!inbox) {
      return res.status(400).json({
        errors: [{ msg: 'Inbox entry was not found' }],
      })
    }
    const allInboxEntries = await inboxModel.find()
    if (allInboxEntries.length <= 0) {
      return res.status(400).json({
        errors: [{ msg: 'No inbox entry was found' }],
      })
    }
    res.json(allInboxEntries)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
