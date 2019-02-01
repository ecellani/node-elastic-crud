# node-elastic-crud

## Importante
***Este código é apenas um exemplo!!!!***


***http get http://localhost:3000/cursos/837871***

```
» http get http://localhost:3000/cursos/837871
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 67
Content-Type: application/json; charset=utf-8
Date: Fri, 01 Feb 2019 17:28:47 GMT
ETag: W/"43-2P7We/qqTAu0Q4ZN4Vte1ZETGW4"
X-Powered-By: Express

{
    "curso": "Direito - Bacharelado",
    "duracao": 10,
    "id": 837871,
    "tipo": 1
}
```

## Logging

```
listening port 3000
2019-02-01T17:28:46.353 start request cursos
2019-02-01T17:28:46.353 start CursoServices.get
2019-02-01T17:28:46.357 end CursoServices.get
2019-02-01T17:28:46.357 end request cursos
2019-02-01T17:28:47.313 start CursoModel.anticorrupcao
Curso do ES
{
	"took": 2,
	"timed_out": false,
	"_shards": {
		"total": 5,
		"successful": 5,
		"skipped": 0,
		"failed": 0
	},
	"hits": {
		"total": 1,
		"max_score": 1,
		"hits": [
			{
				"_index": "cursos",
				"_type": "doc",
				"_id": "837871-OLIMPO",
				"_score": 1,
				"_source": {
					"dsCurso": "Direito - Bacharelado",
					"dsDuracao": 10,
					"idCurso": 837871,
					"idTipo": 1
				}
			}
		]
	}
}
2019-02-01T17:28:47.314 start CursoModel.Construct
2019-02-01T17:28:47.314 end CursoModel.Construct
Result: {
	"curso": "Direito - Bacharelado",
	"duracao": 10,
	"id": 837871,
	"tipo": 1
}
2019-02-01T17:28:47.321 end CursoModel.anticorrupcao
```
