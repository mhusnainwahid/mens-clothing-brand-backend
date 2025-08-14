import express from 'express'
import { addMessage } from '../controllers/contact.js'

const contactRoutes = express.Router()

contactRoutes.post('/send', addMessage)

export default contactRoutes