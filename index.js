// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

// Id for each Class: Neighborhood, Customer, Meal, Deliveries
let neighborhoodId = 0;
let customerId = 0;
let mealId = 0;
let deliveryId = 0;

class Neighborhood {
  constructor(name) {
    this.name = name;
    this.id = ++neighborhoodId;
    
    // add new instance of Neighborhood to store's neighborhoods array
    store.neighborhoods.push(this);
  }
  
  // returns a list of all deliveries placed in a Neighborhood
  // Neighborhood has deliveries
  deliveries() {
    return store.deliveries.filter(
      function(delivery) {
        return delivery.neighborhoodId === this.id;
      }.bind(this));
  }
  // deliveries(functionToBeCopied, thisvalue){
  //    return functionToBeCopied.bind(thisValue);
  // }
  // deliveries(functionToBeCopied, this){
  //    return functionToBeCopied.bind(this);
  // }
  // function returnNewFunctionOf(functionToBeCopied, thisValue){
  //  return functionToBeCopied.bind(thisValue);
  // }
  
  
  // returns all of the customers that live in a particular neighborhood
  // Neighborhood has customers
  customers() {
    return store.customers.filter(
      function(customer) {
        return customer.neighborhoodId === this.id;
      }.bind(this));
  }
  // returns a unique list of meals that have been ordered in a particular neighborhood
}

class Customer {
  constructor(name, neighborhoodId) {
    this.name = name;
    this.neighborhoodId = neighborhoodId;
    this.id = ++customerId;
    
    // add new instance of Customer to store's customers array
    store.customers.push(this);
  }
  
  // Customer has deliveries
  deliveries() {
    return store.deliveries.filter(
      function(delivery) {
        return delivery.customerId === this.id;
      }.bind(this));
  }
  
  // Customer has meals
  meals() {
    return store.meals.filter(
      function(meal) {
        return meal.customerId === this.id;
      }.bind(this));
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
  
  // Meal has deliveries
  deliveries() {
    return store.deliveries.filter(
      function(delivery) {
        return delivery.mealId === this.id;
      }.bind(this));
  }
  
  // Meal has unique customers (repeat customers aren't listed more than once)
  customers() {
    return this.deliveries().map(function(delivery) {
      return delivery.customerId;
    });
  }
  
}

class Delivery {
  constructor(mealId, neighborhoodId, customerId) {
    this.mealId = mealId;
    this.neighborhoodId = neighborhoodId;
    this.customerId = customerId;
    this.id = ++deliveryId;
    
    // add new instance of Delivery to store's deliveries array
    store.deliveries.push(this);
  }
  
  // Delivery belongs to a Meal
  meal() {
    return store.meals.find(function(meal) {return meal.id === this.mealId}.bind(this));
  }
  
  // Delivery belongs to a Customer
  customer() {
    return store.customers.find(function(customer) {return customer.id === this.customerId}.bind(this));
  }
  
  // returns Neighborhood that Delivery was placed in
  delivery() {
    const thisId = this.customer().neighborhoodId;
    return store.neighborhoods.find(function(neighborhood) {return neighborhood.id === this.thisId}.bind(this));
  }
  
}