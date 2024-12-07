import mongoose, { Document } from "mongoose";

export interface Team extends Document {
  id: number;
  name: string;
  logo: string;
  league: mongoose.Types.ObjectId;
  stats?: mongoose.Types.ObjectId;
  currentSeason?: number;
  fixtures?: mongoose.Types.ObjectId[];
}
