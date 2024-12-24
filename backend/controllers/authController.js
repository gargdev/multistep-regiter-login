const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.registerUser = async (req, res) => {
  try {
    const { fullName, email, password, purpose, role, experience } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      fullName,
      email,
      password,
      purpose,
      role: role || null,
      experience: experience || null,
    });

    res.status(201).json({ message: 'User registered successfully', userId: user._id, fullName:user.fullName, purpose:user.purpose, role:user.role, experience:user.experience });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};


exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Normalize email to lowercase
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      console.log('User not found:', email);
      return res.status(404).json({ message: 'User not found' });
    }

    // Log details for debugging
    console.log('Found user:', { email: user.email, hashedPassword: user.password });

    // Compare entered password with stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id, purpose:user.purpose, role:user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
};
