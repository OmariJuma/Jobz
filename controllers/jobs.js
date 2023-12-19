const Job = require('../models/Job')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')

const getAllJobs = async (req, res) => {
  res.send("hi")
}

const createJob = async (req, res) => {
  res.json(req.user)}

const updateJob = async (req, res) => {
  res.send("hi")

}

const deleteJob = async (req, res) => {
  res.send("hi")

}
const getJob = async (req, res) => {
  res.send("hi")

}

module.exports = {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  getJob,
}
