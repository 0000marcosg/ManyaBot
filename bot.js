var token = process.env.TOKEN_API;

var Bot = require('node-telegram-bot-api'),
    ManyaBot = new Bot(token, { polling: true });
//Esto es peñarol PAPAAAAAA
//var esp = ['esto','es','peñarol'];
var esp = ['Serás eterno como el tiempo y florecerás en cada primavera',
'Peñarol se rebeló contra el país del no te metas',
'Antes de ser uruguayo soy jugador de Peñarol',
'O juego en Peñarol o dejo el fútbol',
'Me sabían peñarolense y depuse mi enojo para servir a la querida causa',
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
'Durante toda mi vida le guardaré cariño a la parcialidad peñarolense',
'Me querían de Nacional pero yo preferí ir al club de mis amores que es Peñarol',
'Yo estoy en Peñarol para ganar, porque es lo que me enseñaron desde que llegué',
'En Peñarol uno no juega para ganar, vive para ganar',
'En Uruguay soy de Peñarol porque es pueblo',
'Que lindo es ser de Peñarol',
'Yo quería que fuéramos campeones en la cancha',
'No me pregunte cómo anduve en mi debut con Peñarol, solo recuerdo que hice tres goles',
'Yo desde niño había sido de Peñarol, y además fanático',
'Solo beso el escudo de Peñarol y Uruguay',
'Vestir la camiseta de Peñarol y Uruguay es lo más grande',
'La Copa Libertadores impulsó a Peñarol a nivel mundial',
'Mis respetos siempre a la hinchada de Peñarol, que es como decir gran parte del pueblo uruguayo. Gracias por el apoyo incondicional',
'Tuve la suerte de participar en el Quinquenio, que es una de las cosas más grandes que tiene Peñarol',
'Cuando Peñarol jugaba una final con Nacional tenía un plus',
'Cuando debuté y me comparaban con Mazurkiewicz, dije que era una barbaridad. Él había debutado contra el Santos de Pelé y yo apenas contra Nacional',
'Recuerdo que hice el gol y no supe más nada',
'Peñarol te enseña a luchar hasta el último segundo',
'Hice goles importantes pero estos que le hice a Nacional para dar vuelta los clásicos son los más trascendentes de mi carrera',
'Yo pedí que me lo dejaran porque era gol',
'Fue en ese partido que yo vi tanta comunión entre el esfuerzo de los hombres que estaban adentro de la cancha y el aliento de la gente que estaba afuera. Nadie dejó de alentar, había como un convencimiento de que el esfuerzo de los jugadores era lo que la hinchada quería ver',
'Ganar a lo Peñarol es algo que viene del pasado, de que Peñarol nunca bajaba los brazos. Se lograban cosas importantísimas en los últimos minutos',
'Me dijeron que íbamos 10 puntos debajo de Nacional en la Anual, les dije que lo íbamos a dar vuelta y salir campeones',
'Yo debuté en un clásico, sentía la confianza de Gregorio y mis compañeros, por eso me fue bien',
'Estoy muy agradecido a Peñarol por haberme brindado mucho, y a su hinchada por el cariño de siempre',
'Mi noche soñada fue en una Liguilla, un clásico, ganamos 5 a 1 y yo hice tres goles. Inolvidable',
'Peñarol es una religión aunque los de afuera no lo puedan entender',
'No puedo olvidar que Peñarol fue todo para mí, me dejó recuerdos imborrables',
'Lo más importante de aquel Peñarol era que luchábamos todos juntos sin actitudes solitarias',
'Lo que hizo Peñarol en Santiago no tiene igual, es un recuerdo imborrable',
'Crucé la mitad del campo y me senté en la pelota, mientras escuchaba los gritos del estadio ¡Peñarol! ¡Peñarol!',
'En Peñarol me hice jugador de fútbol',
'Llegar a Peñarol fue una locura y mi debut también, vencimos 7 a 0 a Estudiantes de La Plata',
'En Peñarol había que ganar. Mi padre me llevó al club porque era un peñarolense de ley, ganábamos en inferiores y en Primera también',
'En Peñarol integré un gran equipo, logramos el Quinquenio, la Libertadores y la Intercontinental',
'El Peñarol de 1949 no tenía grandes secretos, teníamos grandes individualidades, logramos éxitos y triunfos en cadena',
'Cuando pasaban los minutos y veíamos que no salían, ya intuíamos el desenlace. La hinchada nuestra era un infierno. Sinceramente creo que fue una de mis mayores satisfacciones',
'Fue ahí cuando tuve otra gran muestra de cariño del pueblo uruguayo. De Peñarol todo. Los socios firmaron un libro “Por la recuperación de Hohberg”, todavía lo guardo. Volví… Estábamos muy atrás de Nacional, descontamos y salimos campeones en 1958, 59 y 60',
'Haber logrado el título de campeón del mundo con Peñarol es mi mayor satisfacción',
'Siempre fui de Peñarol y estoy orgulloso de haberle dado algunas alegrías',
'La gloria está en el corazón de cada hincha. Nace con él',
'Festejamos más ganarle a River la Libertadores que a Real Madrid la Intercontinental',
'Aquel Peñarol tenía un vestuario bárbaro, por eso se lograron tantos objetivos',
'Se venía Juan Ramón Verón…Lo colgué contra el alambrado y me expulsaron. Pero merecía cadena perpetua',
'A 24 horas de ese momento, vuelvo a vivirlo y reafirmo el concepto inicial: el fútbol es único. Pero a la sentencia le hace falta un cierre que lo perfeccione y le otorgue justicia: Peñarol también es único',
'Jugar la Libertadores con la camiseta de Peñarol es un compromiso, y colmar las ilusiones de miles de personas, mucho más',
'Me siento parte de Peñarol o Peñarol es parte de mí',
'En el fútbol de la década del 30 no sabíamos lo que era el pase atrás, siempre íbamos para adelante',
'Lo que yo trato de inculcarle a los jugadores es el respeto a la profesión, a Peñarol',
'A todos los héroes que hicieron posible tu gloriosa historia, a los que sudaron esta camiseta de oro y carbón, a los más famosos, a los más humildes, la hinchada les brinda el cálido aliento de su corazón',
'Mi ideal era jugar en Peñarol, qué gran club. Logré jugar con los mejores',
'Ser hincha de Peñarol es estar abrazado a la gloria para toda la vida',
'No hay título más grande que el de Campeón Del Siglo',
'Peñarol es un sentimiento que se arraiga al cuerpo',
'Siempre vivo pendiente de Peñarol, no pensé que sucediera tantos años después',
'Por la historia el jugador de Peñarol tiene el deber de ganar',
'Es muy curioso, hice muchos goles importantes en mi carrera contra el arco de la Amsterdam, debe ser porque ahí está la hinchada de Peñarol',
'Peñarol. Un ideal deportivo que florece en un país generoso y bueno'
];

var img = ['https://media.giphy.com/media/2dmXKAg6zvHqU6iQOa/giphy.gif'/*Gordo de la colombes*/,
'https://media.giphy.com/media/3LCOW3kEOKUvJyGgig/giphy.gif'/*peñarol con el bebe*/,
'https://media.giphy.com/media/25R4DKLa1i9BBtVQTo/giphy.gif'/*peñarol inteligencia*/];

var palabras_clave = ["peñarol", "manya", "peñarolense", "carbonero", "aurinegro"];

console.log('iniciando ManyaBot...');


ManyaBot.on('message', (msg) => {
var mensaje = msg.text.toString().toLowerCase();
var separators = [' ', '\\\+', '-', '\\\(', '\\\)', '\\*', '/', ':', '\\\?', '\\\,', '\\\.', '\\\!','\\\"'];
//console.log(separators.join('|'));
var spl = mensaje.split(new RegExp(separators.join('|'), 'g'));
//console.log(spl);
//console.log(mensaje);

for(var i = 0; i < spl.length; i++){
  for (var j = 0; j < palabras_clave.length; j++){
    if (spl[i] == palabras_clave[j]){
      ManyaBot.sendMessage(msg.chat.id, "Pero " + msg.from.first_name + ", " + esp[Math.floor(Math.random() * esp.length)]);
      //console.log("SI!");
    }
  }
}
if (mensaje.search("buena idea") !== -1)
{
	ManyaBot.sendDocument(msg.chat.id,img[Math.floor(Math.random()*img.length)]);
}

var date = new Date();
var d = date.getDate();
var m = date.getMonth() + 1;

if ((mensaje.search("daniela") !== -1) &&(d == 15) && (m == 9)){

	//ManyaBot.sendMessage(msg.chat.id, "Bo, esto me hace acordar de algo: hoy, 21 de agosto es la graduacion de Lucia!");
	ManyaBot.sendMessage(msg.chat.id, "Ya que estamos hablando del tema, me gustaría saludar a Daniela en su cumpleaños. ¡Feliz cumpleaños, Dani! Serás eterna como el tiempo y floreceras en cada primavera, como Peñarol. ¡Felicidades! ¡Oro y Carbón!");
	//ManyaBot.sendDocument(msg.chat.id,img[2]);

}
	
	if ((mensaje.search("despedida") !== -1) &&(d <= 28) && (m == 12)){

	//ManyaBot.sendMessage(msg.chat.id, "Bo, esto me hace acordar de algo: hoy, 21 de agosto es la graduacion de Lucia!");
	//ManyaBot.sendMessage(msg.chat.id, "¿Importante? Importante es que el miércoles se hace una despedida de verdad en Emprender. Seguramente en la casa de Enzo, pero se confirma después. ¡Vamos Peñarol!");
	ManyaBot.sendMessage(msg.chat.id, "¡Despedida, papá! Es el 28, gurises. ¿En la casa de Dani?, ¿En algun bar? Quien sabe, la cosa es que C A C ¡Vamos Peñarol!");		
	ManyaBot.sendDocument(msg.chat.id,img[2]);

}
	
//var msj = mensaje.search("manya");
//var msj2 = mensaje.search("peñarol");

/*if ((msj !== -1) || (msj2 !== -1)) {
    ManyaBot.sendMessage(msg.chat.id, "Pero " + msg.from.first_name + ", " + esp[Math.floor(Math.random() * 82)]);
}*/
});
