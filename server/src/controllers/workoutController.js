import Workout from "../models/workout.js";

// get workcontroller
export const getWorkout = async (req, res) => {
  try {
    const work = await Workout.find({});
    return res.status(200).json({ data: work });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
// post workcontroller
export const postWorkout = async (req, res) => {
  const { name, weight, height } = req.body;
  if (!name || !weight || !height) {
    return res.status(404).json("Plz fill out the actual value");
  }
  try {
    const newWork = await Workout.create({ name, weight, height });
    return res.status(201).json(newWork);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
// get Id workcontroller
export const getIdWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    const workId = await Workout.findById({ _id: id });
    return res.status(200).json(workId);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
// patch workcontroller
export const patchWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    const patchwork = await Workout.findOneAndUpdate(
      { _id: id },
      { ...req.body }
    );
    return res.status(200).json(patchwork);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
// delete workcontroller
export const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    const deletework = await Workout.findOneAndDelete({ _id: id });
    return res.status(200).json(deletework);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
