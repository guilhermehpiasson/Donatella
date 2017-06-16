/**
 * Arquivo: index.js
 * Author: Guilherme Henrique Piasson
 * Description: GET home page.
 * Data: 15/06/2017
 */

exports.index = function(req, res){
  res.render('index', { title: 'Donatella' });
};