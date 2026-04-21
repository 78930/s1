import { Router } from "express";
import mongoose from "mongoose";
import { asyncHandler } from "../utils/asyncHandler.js";
import WorkerProfileModel from "../models/WorkerProfile.js";

const router = Router();

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;

    if (!id || !mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid worker id" });
    }

    const worker = await WorkerProfileModel.findById(id);

    if (!worker) {
      return res.status(404).json({ message: "Worker not found" });
    }

    return res.json(worker);
  })
);

export default router;