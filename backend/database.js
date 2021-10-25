import { MongoClient, MongoCursorInUseError } from "mongodb";
import { Mongoose } from "mongoose";

import Cheetah from './models/Cheetah';

//const uri = 'mongodb+srv://flamingo:Xp92tRG2rgmSHTkC@cluster0.ketvc.mongodb.net/sample_mflix?retryWrites=true&w=majority?retryWrites=true&w=majority';

const uri = process.env.DATABASE_URL;

export async function getCheetahs(){
  const client = new Mongoose.connect(uri);

  const cheetahs = await Cheetah.find();

  return cheetahs;

  
}

export function createCheetah(name, pattern, speed, country) {
  const cheetah = new Cheetah(
    {
      name,
      pattern,
      speed,
      country
    }
  )

  return cheetah.save()
}


