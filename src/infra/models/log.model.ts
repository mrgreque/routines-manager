import mongoose, { Schema } from "mongoose";
import { ILog } from "../dtos/log.dto";

const LogSchema = new Schema<ILog>({
    project: { type: String, required: true },
    log: { type: String, required: true },
    error: { type: Boolean, required: true },
}, { timestamps: true });

const LogModel = mongoose.model<ILog>("Appointment", LogSchema);

export { LogModel };
