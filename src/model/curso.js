'use strict';

/**
 * Created by Erick Cellani
 */

const CursoModel = {
    Construct: (curso, duracao, id, tipo) => {
        console.debug('%s start CursoModel.Construct', new Date().toJSON().slice(0, 23))
        var obj = {}
        obj.curso = curso
        obj.duracao = duracao
        obj.id = id
        obj.tipo = tipo

        // isso não pode acontecer pq a linguagem é async
        console.debug('%s end CursoModel.Construct', new Date().toJSON().slice(0, 23))
        return obj
        // isso não pode acontecer pq a linguagem é async
    },
    anticorrupcao: (cb, data) => {
        console.debug('%s start CursoModel.anticorrupcao', new Date().toJSON().slice(0, 23))
        try {
            console.log('Curso do ES \n%s', JSON.stringify(data, null, '\t'))

            var objES = data.hits.hits[0]._source // eca! que feio!
            var curso = CursoModel.Construct(objES.dsCurso, objES.dsDuracao, objES.idCurso, objES.idTipo)

            console.log('Result: %s', JSON.stringify(curso, null, '\t'))
            cb(null, curso)

        } catch (ex) {
            console.error(ex)
            cb(ex)
        } finally {
            console.debug('%s end CursoModel.anticorrupcao', new Date().toJSON().slice(0, 23))
        }
    }
}
module.exports = CursoModel
