import { Router } from "express";
import mongoose from "mongoose";
import { z } from "zod";
import { asyncHandler } from "../utils/asyncHandler.js";
import { requireAuth, requireRole, type AuthRequest } from "../middleware/auth.js";
import FactoryProfileModel from "../models/FactoryProfile.js";
import JobModel from "../models/Job.js";
import WorkerProfileModel from "../models/WorkerProfile.js";
import ApplicationModel from "../models/Application.js";

const router = Router();

// ...

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;

    if (!id || !mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid job id" });
    }

    const job = await JobModel.findById(id).populate(
      "factoryProfile",
      "companyName hrName industrialAreas description"
    );

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    return res.json(job);
  })
); export default router;