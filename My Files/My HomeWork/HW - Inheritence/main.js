import SportsEvent, { Athletics, Swimming } from './sportModul.js';


const AthleticEvent = new Athletics("Running",10,"1st Of January","Field","100 Meters")
AthleticEvent.printVariables();
AthleticEvent.printAtheltics();


const swimmingEvent = new Swimming("Swimming",10,"1st Of January","Something","50 Meters")
swimmingEvent.printVariables();
swimmingEvent.printSwimming();