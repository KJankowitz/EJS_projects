import express from "express";

const port= 3000;
const app= express();

app.get("/", (req, res) => {
    const d = new Date();
    const day = d.getDay();

    let type = "a weekday";
    let line = "work hard!";

    if (day == 0 || day == 6) {
        type = "the weekend";
        line = "have some fun!";
    }

    res.render("index.ejs", {
        dayType: type,
        advice: line,
    });
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});