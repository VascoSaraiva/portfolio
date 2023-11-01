import { Schema, model, models } from 'mongoose';

const WorkShema = new Schema({
    type: [String],
    title: String,
    features: [String],
    description: String,
    year: String,
    madeAt: String,
    link: String,
    thumbnail: {
        src: String,
        alt: String,
    },
    imgs: [
        {
            src: String,
            alt: String,
        },
    ],
})

const Work = models.Work || model('Work', WorkShema)

export default Work