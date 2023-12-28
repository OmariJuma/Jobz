const Job = require("../models/Job");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllJobs = async (req, res) => {
  const myJob = await Job.find({ createdBy: req.user.userId });
  if (!myJob) {
    throw new NotFoundError("You have not applied for any jobs");
  }
  res.status(StatusCodes.OK).json({ myJob, count: myJob.length });
};

const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json(job);
};

const updateJob = async (req, res) => {
  const {
    params: { id },
    body: { position, company },
    user: { userId },
  } = req;

  if (position === "" || company === "") {
    throw new BadRequestError("Company and position can't be empty");
  }
  const updatedJob = await Job.findByIdAndUpdate(
    { _id: id, createdBy: userId },
    { position, company },
    { runValidators: true, new: true }
  );
  if(!updatedJob){
    throw new NotFoundError(`Job with id of ${id} was not found`)
  }
  res.status(StatusCodes.OK).json(updateJob);
};

const deleteJob = async (req, res) => {
  res.send("hi");
};
const getJob = async (req, res) => {
  res.send("hi");
};

module.exports = {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  getJob,
};
