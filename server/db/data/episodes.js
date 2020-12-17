// 1-4 are the seasons

const episodes = [
    [
        {
            title: "To You, in 2000 Years",
            subtitle: "The Fall of Shiganshina, Part 1",
            desc: ""
        },
        {
            title: "That Day",
            subtitle: "The Fall of Shiganshina, Part 2",
            desc: ""
        },
        {
            title: "A Dim Light Amid Despair",
            subtitle: "Humanity's Comeback, Part 1",
            desc: ""
        },
        {
            title: "The Night of the Closing Ceremony",
            subtitle: "Humanity's Comeback, Part 2",
            desc: ""
        },
        {
            title: "First Battle",
            subtitle: "The Struggle for Trost, Part 1",
            desc: ""
        },
        {
            title: "The World the Girl Saw",
            subtitle: "The Struggle for Trost, Part 2",
            desc: ""
        },
        {
            title: "Small Blade",
            subtitle: "The Struggle for Trost, Part 3",
            desc: ""
        },
        {
            title: "I Can Hear His Heartbeat",
            subtitle: "The Struggle for Trost, Part 4",
            desc: ""
        },
        {
            title: "Whereabouts of His Left Arm",
            subtitle: "The Struggle for Trost, Part 5",
            desc: ""
        },
        {
            title: "Response",
            subtitle: "The Struggle for Trost, Part 6",
            desc: ""
        },
        { title: "Idol", subtitle: "The Struggle for Trost, Part 7", desc: "" },
        {
            title: "Wound",
            subtitle: "The Struggle for Trost, Part 8",
            desc: ""
        },
        {
            title: "Primal Desire",
            subtitle: "The Struggle for Trost, Part 9",
            desc: ""
        },
        { title: "Since That Day", subtitle: "", desc: "" },
        {
            title: "Can't Look into His Eyes Yet  ",
            subtitle: "Eve of the Counterattack, Part 1",
            desc: ""
        },
        {
            title: "Special Operations Squad",
            subtitle: "Eve of the Counterattack, Part 2",
            desc: ""
        },
        {
            title: "What Needs to be Done Now",
            subtitle: "Eve of the Counterattack, Part 3",
            desc: ""
        }
        // { title: "", subtitle: "", desc: "" },
        // { title: "", subtitle: "", desc: "" },
        // { title: "", subtitle: "", desc: "" }
    ],
    [
        { title: "s2e1", subtitle: "s2e1", desc: "" },
        { title: "s2e2", subtitle: "s2e2", desc: "" },
        { title: "s2e3", subtitle: "s2e3", desc: "" }
    ],
    [
        { title: "s3e1", subtitle: "s3e1", desc: "" },
        { title: "s3e2", subtitle: "s3e2", desc: "" },
        { title: "s3e3", subtitle: "s3e3", desc: "" }
    ]
];

let formattedEpisodes = [];

let seasonNum = 0;
for (let season of episodes) {
    seasonNum++;
    let episodeNum = 0;

    for (let episode of season) {
        episodeNum++;
        const { title, subtitle, desc } = episode;
        formattedEpisodes.push({
            season: seasonNum,
            episode: episodeNum,
            title,
            subtitle,
            desc
        });
    }
}

module.exports = formattedEpisodes;
