// Code your solution here:
// const bluePenguinUsers = filter(users, function (user) { return user.favoriteColor === 'Blue' && user.favoriteAnimal === 'Penguin'; });
// const equippedEngineers = newEngineers.map(function(eng) {
//    return Object.assign({}, eng, { equipment: 'Laptop' });
// });

function driversWithRevenueOver(drivers, dollas){
  const aboveDollas = drivers.filter(function(driver) {return driver['revenue'] > dollas});

  return aboveDollas
}

function driverNamesWithRevenueOver(drivers, dollas){
  const meetsRev =  driversWithRevenueOver(drivers, dollas)
  return meetsRev.map(function (driver) {
    return driver.name
  }
)
}

function exactMatch(drivers, attr){

  key = Object.keys(attr)
  value = attr[key]
  result = drivers.filter(function(driver) {

    return driver[key] === attr[key] && driver[value] === attr[value]
  })
  return result
}

function exactMatchToList(drivers, attr){
  filtered = exactMatch(drivers, attr)
  return filtered.map(function(driver) {return driver.name})
}
