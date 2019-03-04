// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

// Id for each Class: Neighborhood, Customer, Meal, Deliveries
let neighborhoodId = 0;
let customerId = 0;
let mealId = 0;

class Neighborhood {
  constructor(name) {
    this.name = name;
    this.id = ++neighborhoodId;
    
    // add new instance of Neighborhood to store's neighborhoods array
    store.neighborhoods.push(this);
  }
  
  // returns a list of all deliveries placed in a Neighborhood
  deliveries() {
    return store.deliveries
  }
  // returns all of the customers that live in a particular neighborhood
  
  // returns a unique list of meals that have been ordered in a particular neighborhood
}

class Customer {
  constructor(name) {
    this.name = name;
    this.id = ++customerId;
    
    // add new instance of Customer to store's customers array
    store.customers.push(this);
  }
  
}

class Meal {
  
  constructor(title, price) {
    this.title = title;
    this.price = price;
    this.id = ++mealId;
    
    // add new instance of Meal to store's meals array
    store.meals.push(this);
  }
  
  // Class method, so use keyword -> static
  static byPrice() {
    // how to sort in descending order
    // var points = [40, 100, 1, 5, 25, 10];
    // points.sort(function(a, b){return b-a});
    return store.meals.sort(function(a, b) {return b.price - a.price});
  }
  
}

class Delivery {
  constructor(mealId, neighborhoodId, customerId) {
    this.mealId = mealId;
    this.neighborhoodId = neighborhoodId;
    this.customerId = customerId;
    
    // add new instance of Delivery to store's deliveries array
    store.deliveries.push(this);
  }
}