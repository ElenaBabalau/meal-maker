const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],
    
    get appetizers() {
      return this._appetizers;
    },
    set appetizers(appetizersIn) {
      this._appetizers = appetizersIn;
    },
    get mains() {
      return this._mains;
    },
    set mains(mainsIn) {
      this._mains = mainsIn;
    },
    get desserts() {
      return this._desserts;
    },
    set desserts(dessertsIn) {
      this._desserts = dessertsIn;
    },
  },
  
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts,
    };
},
  
  ///===============================================================
  
  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    
    this._courses[courseName].push(dish);
  },
  
  getRandomDishFromCourse (courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    
    return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is ${totalPrice.toFixed(2)} MDL.`;
  },
};

menu.addDishToCourse('appetizers', 'PATE DIN FICAT DE PUI CU CEAPĂ CARAMELIZATĂ, MIX DE SALATĂ ȘI CIABATTA', 76.00);
menu.addDishToCourse('appetizers', 'BRUSCHETTE CROCANTE CU ROŞII, RUCOLA ŞI PARMEZAN', 40.00);
menu.addDishToCourse('appetizers', 'MIX DE BRUSCHETTE CROCANTE', 69.00);
menu.addDishToCourse('appetizers', 'CIABATTA PROASPĂT COAPTĂ', 12.00);

menu.addDishToCourse('mains', 'MIDII ÎN SOS CREMOS DE FRIȘCĂ', 239.00);
menu.addDishToCourse('mains', 'CEAFĂ DE PORC SOUS-VIDE, CU LEGUME PE GRILL', 164.00);
menu.addDishToCourse('mains', 'RAVIOLI CU SPANAC ȘI BRÂNZĂ RICOTTA', 79.00);
menu.addDishToCourse('mains', 'BAVETTINE CU FRUCTE DE MARE', 172.00);

menu.addDishToCourse('desserts', 'TARTĂ DE MURE CU CREMĂ DE VANILIE', 61.00);
menu.addDishToCourse('desserts', 'CHEESECAKE DE CIOCOLATĂ CU CARAMELĂ ȘI SARE DE HIMALAYA', 67.00);
menu.addDishToCourse('desserts', 'TIRAMISU CLASIC', 61.00);
menu.addDishToCourse('desserts', 'PRĂJITURĂ RAW CU ULEI NATURAL DE COCOS, NUCI CAJU, SMOCHINE ŞI CIOCOLATĂ NEAGRĂ', 80.00);

let meal = menu.generateRandomMeal();

console.log(meal);
