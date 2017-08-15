import * as mongoose from 'mongoose';

const heroSchema = new mongoose.Schema({
    name: String
});

const Hero = mongoose.model('Hero', heroSchema);

export default Hero;
