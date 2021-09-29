const PORT = process.env.PORT || 3000;

const express = require("express");
const app = express();
app.use(express.json());

app.get("/", function(req, res) {
    res.send("Project Home");
});
// serving data
app.get('/api/', (req, res) => {
    res.json({hello: "Hello World"})
})

app.listen(PORT, function() {
    console.log(`Listening on Port ${PORT}`);
});
