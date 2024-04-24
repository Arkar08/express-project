import { Router } from "express";
import * as workoff from "../controllers/workoutController.js";

const router = Router();

// get router
router.get("/", workoff.getWorkout);

// get id router
router.get("/:id", workoff.getIdWorkout);

// post router
router.post("/", workoff.postWorkout);

// patch router
router.patch("/:id", workoff.patchWorkout);

// delete router
router.delete("/:id", workoff.deleteWorkout);

export default router;
