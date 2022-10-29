const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
  name: String,
  email: String,
  requaired: Boolean
})

subscriberSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Subscriber = mongoose.model('Subscriber', subscriberSchema)

module.exports = Subscriber