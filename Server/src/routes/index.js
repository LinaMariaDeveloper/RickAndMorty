const express = require('express');
const router = express.Router();
const { getCharById } = require('../controllers/getCharById');
const login = require('../controllers/login');
const postFav = require('../controllers/postFav')
const postUser = require('../controllers/postUser')
const deleteFav = require('../controllers/deleteFav');
const createUser = require("../controllers/createUser")
const postRegister = require('../controllers/postRegister');

router.get("/character/:id", getCharById)
router.get("/login", login)
router.post("/login", postUser)
router.get("/register", createUser)
router.post("/register", postRegister)
router.post("/fav", postFav)
router.delete("/fav/:id", deleteFav)

module.exports = router;

