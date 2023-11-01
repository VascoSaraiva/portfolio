import { Schema, model, models } from 'mongoose';

const AboutShema = new Schema({
    img: String,
    description: String,
})

const About = models.About || model('About', AboutShema)

export default About