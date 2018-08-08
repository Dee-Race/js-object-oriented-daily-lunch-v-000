// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

class Neighborhood {
  constructor(name) {
    this.name = name
    this.id = ++neighborhoodId

    store.neighborhoods.push(this)
  }
  deliveries() {
    return store.deliveries.filter(delivery => {
      return delivery.neighborhoodId === this.id
    })
  }
  customers() {
    return store.customers.filter(customer => {
      return customer.neighborhoodId === this.id
    })
  }
  meals() {
    return store.meals.uniq(meal => {
      return meal.neighborhoodId === this.id
    })
  }
}
