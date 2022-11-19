const express= require('express')

const router= express.Router()

const { homePage, notFound }= require('../controllers/rootController')

router.route('^/$|/index(.html)?')
    .get(homePage)

router.route('^*$|(.html)?')
    .get(notFound)

module.exports= router