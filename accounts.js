import express from "express";
const router = express.Router();

router.post('/login', (req, res) => {
    const {fname, lname} = req.body;
})

router.get('/register', (req, res) => {
    res.status(200).json({message: 'Hello'})
})

export default router;