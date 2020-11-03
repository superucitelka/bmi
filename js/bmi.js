/* Využití pole objektů k zachycení tabulky BMI podle věkových kategorií */
const bmiCategories = [
    /* Každý objekt v poli obsahuje atribut age (určení věkové kategorie) 
       a atribut weight (hraniční váhy pro označení stavu, v němž se dotyčná osoba nachází).
       V případě atributu weight bylo opět využito pole, aby mohly být na jednom místě shromážděny všechny hodnoty. */
    { age: '18-24', weight: [19, 24, 29, 39] },
    { age: '25-34', weight: [20, 25, 30, 40] },
    { age: '35-44', weight: [21, 26, 31, 41] },
    { age: '45-54', weight: [22, 27, 32, 42] },
    { age: '55-64', weight: [23, 28, 33, 43] },
    { age: '65+', weight: [24, 29, 34, 44] }
];

/* Testovací příklady, jak v poli bmiCategories najít objekt pro určitou věkovou kategorii. */
/* a) Varianta s použitím tzv. callback funkce předané metodě find. */
console.log(bmiCategories.find(function(obj) { return obj.age === '18-24'} ));
/* b) Novější "zkrácená" varianta využívající tzv. arrow funkce */
console.log(bmiCategories.find(obj => obj.age === '65+'));