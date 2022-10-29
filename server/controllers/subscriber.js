const subscriberRouter = require('express').Router()
const Subscriber = require('../models/subscriberSchema')

subscriberRouter.post('/', async (req, res) => {
  const { name, email } = req.body

  const subscriber = new Subscriber({
    name,
    email,
    requaired: true
  })

  await subscriber.save().then(savedSubscriber => {
    res.status(201).json(savedSubscriber)
  })
})

module.exports = subscriberRouter
