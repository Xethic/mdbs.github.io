use sensorReadingsDatabase;

db.readings.insertMany([
   { _id: 1, station: "A", day: 1, temperature: 10},
   { _id: 2, station: "B", day: 2, temperature: 13},
   { _id: 3, station: "A", day: 2, temperature: 14},
]);

var mapFunction = function() {
   emit(this.station, this.temperature);
};

var reduceFunction = function(stationKey, temperatureArray) {
   return (stationKey, Math.max(...temperatureArray));
};

db.readings.mapReduce(
   mapFunction,
   reduceFunction,
   { out: "map_reduce_temperatures" }
);

db.map_reduce_temperatures.find();
