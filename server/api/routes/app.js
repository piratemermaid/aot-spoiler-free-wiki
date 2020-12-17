const { Router } = require("express");
const models = require("../models/bookshelf_models");

const router = new Router();

router.get("/episodes", async (req, res) => {
    const results = await models.Episode.fetchAll();

    res.send(
        results.toJSON().map(({ season, episode, title, subtitle, desc }) => {
            return { season, episode, title, subtitle, desc };
        })
    );
});

router.get("/seasons", async (req, res) => {
    const results = await models.Episode.fetchAll();

    const episodes = results.toJSON();

    let seasons = { 1: [], 2: [], 3: [], 4: [] };

    for (let ep of episodes) {
        const { season, title, subtitle, desc } = ep;
        seasons[ep.season].push({ title, subtitle, desc });
    }

    res.send(seasons);
});

module.exports = router;
