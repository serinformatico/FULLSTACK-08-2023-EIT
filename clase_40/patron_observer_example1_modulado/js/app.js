import CanalPublisher from "./CanalPublisher.js";
import SuscriptorYoutubeObserver from "./SuscriptorYoutubeObserver.js";
import SuscriptorTwitchObserver from "./SuscriptorTwitchObserver.js";

const juana = new SuscriptorYoutubeObserver("Juana", "Pérez");
const pedro = new SuscriptorYoutubeObserver("Pedro", "Páez");
const mariana = new SuscriptorYoutubeObserver("Mariana", "Ortega");
const pablo = new SuscriptorTwitchObserver(125480, "Pablo A. Rivero", true);
const leonel = new SuscriptorTwitchObserver(250444, "Leonel M. Medina", true);

const miCanal = new CanalPublisher("Mi Canal de POO");
miCanal.subscribe(juana);
miCanal.subscribe(pedro);
miCanal.subscribe(mariana);
miCanal.subscribe(pablo);
miCanal.subscribe(leonel);

miCanal.notifyNewVideo("Aprendiendo el patrón State");
miCanal.unsubscribe(juana);
miCanal.notifyNewVideo("Aprendiendo el patrón Observer");
miCanal.unsubscribe(pablo);
miCanal.notifyNewVideo("Aprendiendo el patrón Strategy");
console.log(miCanal);