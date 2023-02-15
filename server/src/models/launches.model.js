const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27, 2030"),
  target: "Kepler-442 b",
  customer: ["Random user1", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    launch.flightNumber,
    Object.assign(launch, {
      flightNumber: latestFlightNumber,
      customers: ['Randomuser2', 'NASA'],
      upcoming: true,
      success: true
    })
  );
}

function getAllLaunches() {
  return Array.from(launches.values());
}

module.exports = {
  getAllLaunches,
  addNewLaunch
};
