var token = '647032251:AAFrDzy2LeprLwcGfBJMHlCuRwtLh2bDrlQ';

var Bot = require('node-telegram-bot-api'),
    bot = new Bot(token, { polling: true });

//var esp = ['esto','es','peñarol'];
var esp = ['Serás eterno como el tiempo y florecerás en cada primavera',
'Peñarol se rebeló contra el país del no te metas','Antes de ser uruguayo soy jugador de Peñarol',
'O juego en Peñarol o dejo el fútbol','Me sabían peñarolense y depuse mi enojo para servir a la querida causa',
'Me queda poco, pero ese poco está al servicio de Peñarol',
'Tiempos de Gradín y Campolo… ¡Peñarol! Tardes de lluvia y de sol',
'Vengo a salir campeón de América y del Mundo con Peñarol',
'Peñarol es parte de mi vida, mi casa se llama Grape, gracias Peñarol',
'Lloré por Peñarol, óigame, no me da vergüenza. Lloré por los colores',
'Peñarol es un sueño, siempre va a ser un sueño y su hinchada la más grande',
'Yo no vine a salir segundo, vine a salir campeón',
'Llegar a Peñarol desde Salto era increíble, era mi cuadro',
'Me preguntan por Boca o River. A mí lo único que me importa es Peñarol',
'Mamá, deciles que soy de Peñarol. ¡En otro cuadro no juego!',
'Me enseñaron a no dar una pelota por perdida, porque eso es lo que le gusta al hincha de Peñarol',
'Como en mi pueblo cuando era niño, volví a llorar por Peñarol',
'Con la camiseta de Peñarol uno representa a un pueblo. Hay que responder, hay que ganar',
'Nací por mi viejo y muero por estos colores',
'La diferencia a favor de Peñarol es la hinchada. Todos los equipos trabajan bien pero nosotros tenemos a la hinchada',
'Ese impulsar a su equipo de la parcialidad lo considero de un tremendo poder psicológico',
'En Peñarol estábamos acostumbrados a ganar',
'En mi casa éramos todos de Peñarol',
'Hacía goles clásicos en Argentina y gritaba por Peñarol',
'En mi casa todo lo que importaba era Peñarol, todos tenemos nombres de jugadores de Peñarol',
];


console.log('iniciando bot...');

// hello command
/*bot.onText(/^\/say_hello (.+)$/, function (msg, match) {
  var name = match[1];
  bot.sendMessage(msg.chat.id, 'Hello ' + name + '!').then(function () {
    // reply sent!
  });
});

// sum command
bot.onText(/^\/sum((\s+\d+)+)$/, function (msg, match) {
  var result = 0;
  match[1].trim().split(/\s+/).forEach(function (i) {
    result += (+i || 0);
  })
  bot.sendMessage(msg.chat.id, result).then(function () {
    // reply sent!
  });
});
*/
bot.on('message', (msg) => {
var mensaje = msg.text.toString().toLowerCase();
var msj = mensaje.search("manya");
var msj2 = mensaje.search("peñarol");
if ((msj !== -1) || (msj2 !== -1)) {
    //bot.sendMessage(msg.chat.id, esp[Math.floor(Math.random() * 3)] + " " + esp[Math.floor(Math.random() * 3)] + " " + esp[Math.floor(Math.random() * 3)] + "," + " " + msg.from.first_name);
    bot.sendMessage(msg.chat.id, "Pero " + msg.from.first_name + ", " + esp[Math.floor(Math.random() * 25)]);
    //console.log('si');
}
});
