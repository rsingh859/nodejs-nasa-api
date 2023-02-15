const launchesModel = require("../../models/launches.model");

function getAllLaunches(req, res) {
  return res.status(200).json(launchesModel.getAllLaunches());
}

function httpAddNewLaunch(req, res) {
  const launch = req.body;
  if (
    !launch.mission ||
    !launch.launchDate ||
    !launch.rocket ||
    !launch.target
  ) {
    return res.status(400).json({
      error: "Missing required launch property",
    });
  }

  launch.launchDate = new Date(launch.launchDate);
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: "Invalid date",
    });
  }
  launchesModel.addNewLaunch(launch);
  return res.status(201).json(launch);
}

function httpAbortLaunch(req, res) {
  const launchId = +req.params.id;

  if (!launchesModel.launchExists(launchId)) {
    return res.status(404).json({
      error: "Launch not found!!!",
    });
  }

  const aborted = launchesModel.abortByLaunchId(launchId);
  return res.status(200).json(aborted);
}

module.exports = {
  getAllLaunches,
  httpAddNewLaunch,
  httpAbortLaunch,
};
