const Contact = require('../models/Contact');

// Create a new contact form submission
exports.createContact = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newContact = new Contact({
      name,
      email,
      message
    });

    await newContact.save();
    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully!',
      contact: newContact
    });
  } catch (error) {
    console.error('Error creating contact form submission:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating contact form submission',
      error: error.message
    });
  }
};

// Get a list of all contact form submissions
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json({
      success: true,
      message: 'Contacts fetched successfully',
      contacts
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching contacts',
      error: error.message
    });
  }
};
