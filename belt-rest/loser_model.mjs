import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);


// Connect to to the database
const db = mongoose.connection;

// The open event is called when the database connection successfully opens
db.once("open", () => {
    console.log("connected to db");
});

/**
 * Define the schema
 */
 const loserSchema = mongoose.Schema({
    loser: { type: String, required: true },
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    next: { type: String, required: true}
});

/**
 * Compile the model from the schema. This must be done after defining the schema.
 */


const findLosersBySeason = async (season) => {
    const Loser = mongoose.model(season, loserSchema);
    const query = await Loser.find().sort({ start: 1 });
    return query;
};

const teamsBySeason = async (season) => {
    const input = season + 'teams';
    const Loser = mongoose.model(input, loserSchema);
    const query = await Loser.find().sort({ team: 1 });
    return query;
};

const teamHexCodes = async () => {
    const Loser = mongoose.model('teamhex', loserSchema);
    const query = await Loser.find().sort({team: 1});
    return query;
};

const currentTeam = async () => {
    const Loser = mongoose.model('curteam', loserSchema);
    const query = await Loser.find();
    return query;
};

export { findLosersBySeason, teamsBySeason, teamHexCodes, currentTeam };