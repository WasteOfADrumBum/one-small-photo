const express = require('express')
const router = express.Router()

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
router.post('/create-inbox', async (req, res) => {
  const { firstName, lastName, email, comment, type, date, read } = req.body

  const newEntry = {
    contactInfo: {
      name: {
        first: firstName || '',
        last: lastName || '',
      },
      email: email || '',
    },
    request: {
      comment: comment || '',
      type: type || '',
      date: date || '',
    },
    read: read || false,
  }

  try {
    let inbox = new inboxModel(newEntry)
    await inbox.save()
    res.status(200).send('Success')
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @Route   PUT api/inbox/update-inbox/:id
// @Desc    Update InboxEntry
// @Action  updateInboxEntry()
// @Access  Private
router.post('/update-inbox/:id', async (req, res) => {
  const { firstName, lastName, email, comment, type, date, read } = req.body

  const newEntry = {
    contactInfo: {
      name: {
        first: firstName || '',
        last: lastName || '',
      },
      email: email || '',
    },
    request: {
      comment: comment || '',
      type: type || '',
      date: date || '',
    },
    read: read || false,
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
