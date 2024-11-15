const express = require('express');
const router = express.Router();
const contactController = require('../controllers/ContactController');

// Route to create a new contact form submission
router.post('/contact', contactController.createContact);

// Route to get all contact form submissions
router.get('/contacts', contactController.getContacts);

// Route to update a specific contact form submission
router.put('/contact/:id', contactController.updateContact);

// Route to delete a specific contact form submission
router.delete('/contact/:id', contactController.deleteContact);

module.exports = router;
