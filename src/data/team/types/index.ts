import mongoose from "mongoose";

import { MongoDocument } from "../../.shared/types/mongoDocument";

export interface Team extends MongoDocument {
  id: number;
  name: string;
  logo: string;
  league: mongoose.Types.ObjectId;
  stats?: mongoose.Types.ObjectId;
  currentSeason?: number;
  fixtures?: mongoose.Types.ObjectId[];
}
