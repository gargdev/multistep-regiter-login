const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const { getUserById, updateUser } = require('../controllers/userController');
const { validateRegister } = require('../middleware/validate');

const router = express.Router();

router.post('/register', validateRegister, registerUser);
router.post('/login', loginUser);
router.get('/user/:id', getUserById);
router.put('/user/:id', updateUser);

module.exports = router;
