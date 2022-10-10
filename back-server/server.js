const express = require('express');
const cors = require('cors');
const bolly_data = require('./Data/Bollywooddata.json')
const holly_data = require('./Data/Hollywooddata.json')
const fitness_data = require('./Data/Fitnessdata.json')
const food_data = require('./Data/Fooddata.json')
const technology_data = require('./Data/Technologydata.json')
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

app.get('/', (req, res) => {
    res.send("finally my project is done")
})
app.get("/bollywood", (req, res) => {
    res.send(bolly_data)
})

app.get("/hollywood", (req, res) => {
    res.send(holly_data)
})
app.get("/fitness", (req, res) => {
    res.send(fitness_data)
})
app.get("/food", (req, res) => {
    res.send(food_data)
})
app.get("/technology", (req, res) => {
    res.send(technology_data)
})
app.listen(port, () => {
    console.log(`server is running at port 4000 ${port}`);
})