import express from "express" 
const router = express.Router()

// Register
router.post("/Register", (request, response) => {
    const user = request.body
    response.status(201).json(user)
})

export default router