"use strict";
;
class Mechanic {
    technicalInspection(car) { return true; }
}
let mechanic = new Mechanic();
let someCar = { engine: { horsepower: 350, type: 'diesel' }, tires: { model: 'BRIT', airPressure: 33 }, body: { material: 'aluminum' } }; //! yes
let notACar = { vroom: false }; //! no
let maybeCar = { tires: { model: 'BRIT' }, body: { material: 'aluminum' } }; // ! no
let maybeCar2 = { engine: { horsepower: 220 }, tires: { model: 'BRIT', wear: 'High', airPressure: 33 }, body: { material: 'aluminum' } }; //! yes
let maybeCar3 = { engine: { horsepower: 250 }, tires: { model: 'Nie' } }; // ! no
let maybeCar4 = { engine: { horsepower: 220, type: 'electric' }, tires: { model: 'BRIT' }, body: { material: 'steel', weight: 2670 } }; // ! no
let maybeCar5 = { engine: { horsepower: '220', type: 'electric' }, tires: { model: 'BRIT', airPressure: 28 }, body: { material: 'steel', weight: 2670 } }; // ! no
mechanic.technicalInspection(someCar); //ok
mechanic.technicalInspection(maybeCar2); //ok
// mechanic.technicalInspection(maybeCar4);    //TS Error
// mechanic.technicalInspection(notACar);      //TS Error
// mechanic.technicalInspection(maybeCar);     //TS Error
// mechanic.technicalInspection(maybeCar3);    //TS Error
// mechanic.technicalInspection(maybeCar5);    //TS Error
//# sourceMappingURL=03.js.map