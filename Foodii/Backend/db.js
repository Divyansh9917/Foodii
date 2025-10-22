const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://Divyansh:Ansh312$@cluster0.kjpku1n.mongodb.net/FOODII?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = () => {
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected!!!"))
    .catch(err => console.error("MongoDB connection error:", err));
}

module.exports = mongoDB;
