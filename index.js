const express = require('express');

const app = express();
app.use(express.json());

const router = express.Router();


router.get("/", (req, res) => {
    res.json({
        hello: "hi! 123"
    });
});


router.get("/link/:id([0-9]+)", (req, res) => {
    res.json({
        hello: "hi! 1234",
        id: req?.params?.id
    });
});

app.use('/', router);

app.listen(9000, () => { });