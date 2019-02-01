'use strict';

/**
 * Created by Erick Cellani
 */

var config = require('config')
var elasticsearch = require('elasticsearch')

var ESClient = new elasticsearch.Client({
    hosts: [config.get('elastic.host')]
})
module.exports = ESClient;
