'use strict';

/**
 * Created by Erick Cellani
 */

const ESClient = require('./../infrastructure/elasticsearch')
const CursoModel = require('./../model/curso')

const CursoServices = {
    get: (cb, idCurso) => {
        console.debug('%s start CursoServices.get', new Date().toJSON().slice(0, 23))
        try {
            ESClient.search({
                index: 'cursos'
                , type: 'doc'
                , body: {
                    query: {
                        match: {
                            'idCurso': idCurso
                        }
                    }
                }
            }, (error, response, status) => {
                if (error) {
                    console.error('search error: %s', error)
                    cb(error)
                }
                CursoModel.anticorrupcao(cb, response, () => {
                    try {
                        cb(null, response)
                    } catch (ex) {
                        cb(ex)
                    }
                })
            })
        } catch (ex) {
            cb(ex)
        } finally {
            console.debug('%s end CursoServices.get', new Date().toJSON().slice(0, 23))
        }
    }
}
module.exports = CursoServices
