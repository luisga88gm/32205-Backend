// import { Router } from "express"

// const router = Router()

// router.get('/', (req, res) => {
//     res.send('Router User')
// })

// router.get('/info', (req, res) => {
//     res.send('Info User')
// })

// export default router


import { Router } from "express"

const router = Router()
const users = []

router.get('/', (req, res) => {
    res.json({ users })
})

router.post('/', (req, res) => {
    const user = req.body
    users.push(user)
    
    res.json({status: "success"})
})

export default router