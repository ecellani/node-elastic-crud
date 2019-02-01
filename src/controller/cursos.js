'use strict';

/**
 * Created by Erick Cellani
 */

const utils = require('./../utils/utils')
const router = require('express').Router()
const CursoServices = require('./../service/cursos')

router.get('/:id', (req, res) => {
    console.info('%s start request cursos', new Date().toJSON().slice(0, 23))
    var id = req.params.id
    CursoServices.get((err, data) => {
        try {
            if (err) throw err
            utils.returnJSON(req, res, null, data)
        } catch (ex) {
            console.error(ex)
            utils.returnJSON(req, res, ex)
        }
    }, id)

    console.info('%s end request cursos', new Date().toJSON().slice(0, 23))
});
module.exports = router
