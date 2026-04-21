import mongoose from "mongoose";

const { Schema } = mongoose;

const ApplicationSchema = new Schema(
  {
    job: { type: Schema.Types.ObjectId, ref: "Job", required: true },
    workerUser: { type: Schema.Types.ObjectId, ref: "User", required: true },
    status: {
      type: String,
      enum: ["APPLIED", "SHORTLISTED", "HIRED", "REJECTED"],
      default: "APPLIED",
    },
  },
  { timestamps: true }
);

const ApplicationModel =
  mongoose.models.Application ||
  mongoose.model("Application", ApplicationSchema);

export default ApplicationModel;