// create 5 burgers (at least 3 should be beef)
db.burgers.insertMany([
  {
    status: 'pickedup',
    meat: 'beef',
    cheese: 'yes',
    toppings: 'tomato, pickles'
  },
  {
    status: 'delivered',
    meat: 'turkey',
    cheese: 'yes',
    toppings: 'guacamole, french Fies, ketchup'
  },
  {
    status: 'delivered',
    meat: 'beef',
    cheese: 'no',
    toppings: 'olives, french Fies, ketchup'
  },
  { status: 'delivered', meat: 'chicken', cheese: 'yes', toppins: 'mushrooms' },
  { status: 'pickedup', meat: 'beef', cheese: 'yes', toppings: 'french Fies' }
])

// find all the burgers
db.burgers.find()

// show just the meat of each burger
db.burgers.find({}, { meat: 1 })

// show just the toppings of each burger
db.burgers.find({}, { toppings: 1 })

// show everything but the cheese
db.burgers.find({ cheese: { $ne: 'yes' } })

// find all the burgers with beef
db.burgers.find({ meat: 'beef' })

// find all the burgers that are not beef
db.burgers.find({ meat: { $ne: 'beef' } })

// find the first burger with cheese
db.burgers.findOne({ cheese: 'yes' })

// find one and update the first burger with cheese
db.burgers.updateOne({ cheese: 'no' }, { $set: { cheese: 'yes' } })

// to have a property of 'double cheese'
db.burgers.updateOne({ cheese: 'yes' }, { $set: { cheess: 'double cheese' } })

// find the burger you updated to have double cheese
db.burgers.find({ cheess: 'double cheese' })

// find and update all the beef burgers to be 'veggie'
db.users.updateMany({ meat: 'beef' }, { $set: { meat: 'veggie' } })

// delete one of your veggie burgers
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})
db.burgers.deleteOne({ meat: 'veggie' })

// drop the collection
//Expected Output
//true
db.burgers.deleteMany({})

// drop the database
//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }
db.dropDatabase()

//
// Bonus
//recreate your burgers database and your burger collection
//copy paste your insert burgers from above to reseed your database
db.burgers.insertMany([
  {
    status: 'pickedup',
    meat: 'beef',
    cheese: 'yes',
    toppings: 'tomato, pickles'
  },
  {
    status: 'delivered',
    meat: 'turkey',
    cheese: 'yes',
    toppings: 'guacamole, french Fies, ketchup'
  },
  {
    status: 'delivered',
    meat: 'beef',
    cheese: 'no',
    toppings: 'olives, french Fies, ketchup'
  },
  { status: 'delivered', meat: 'chicken', cheese: 'yes', toppins: 'mushrooms' },
  { status: 'pickedup', meat: 'beef', cheese: 'yes', toppings: 'french Fies' }
])

// Change the name of the key cheese to 'pumpkinSpice'
db.burgers.updateMany({}, { $rename: { cheese: 'pumkinSpice' } })

// find all the burgers with ketchup (or another topping you used at least once)
db.burgers.find({ toppings: 'ketchup' })

// find all the burgers with pickles (or a topping you used more than once) and remove the pickles
db.burgers.find({ toppings: 'pickles' })

// add a topping of 'eggs' to all the beef burgers
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact
db.burgers.updateMany({ meat: 'beef' }, { $set: { toppings: 'eggs' } })

//Add a price to each burger, start with $5.00 for each burger
db.burgers.updateMany({}, { $set: { price: '$5.00' } })
