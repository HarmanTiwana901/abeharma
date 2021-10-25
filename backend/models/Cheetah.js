import mongoose from 'mongoose';

const cheetahSchema = new mongoose.Schema(
    {
        name: String,
        pattern: String,
        speed: Number,
        country: String
    }
);


//
export default mongoose.models.Cheetah || mongoose.model('Cheetah', cheetahSchema);