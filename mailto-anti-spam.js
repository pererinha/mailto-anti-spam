/**
 * Hide mailto from spam-robots
 * By Daniel Camargo (http://twitter.com/pererinha | http://danielcamargo.com.br/)
 * Copyright (c) 2009
 * Released under the MIT license (MIT-LICENSE.txt)
 * Demo: http://www.danielcamargo.com.br/stuffs/hide-mailto-spam-robot/
 * 2009-07-06
 */
var config = {

	at : '@',

	domain : 'gmail',

	comercial : 'com',
	dot : '.'

}

function MailtoAntiSpam(destiny){

	document.write(unescape('%3Cstrong%3E%3Ca%20href%3D%22mailto:' + destiny + config.at + config.domain + config.dot + config.comercial + '%22%3E' + destiny + config.at + config.domain + config.dot + config.comercial + '%3C/a%3E%3C/strong%3E'));

}