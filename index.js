// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

// Id for each Class: Neighborhood, Customer, Meal, Deliveries
let neighborhoodId = 0;
let customerId = 0;

class Neighborhood {
  constructor(name) {
    this.name = name;
    this.id = ++neighborhoodId;
    
    // add new instance of Neighborhood to store's neighborhoods array
    store.neighborhoods.push(this);
  }
  
  // returns a list of all deliveries placed in a Neighborhood
  
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