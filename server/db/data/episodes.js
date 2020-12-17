// 1-4 are the seasons

const episodes = [
    [
        {
            title: "To You, in 2000 Years",
            subtitle: "The Fall of Shiganshina, Part 1",
            desc:
                "The citizens worry they will be at the Titans' mercy after many years of peace."
        },
        {
            title: "That Day",
            subtitle: "The Fall of Shiganshina, Part 2",
            desc: "The Shiganshina citizens are under attack from the Titans."
        },
        {
            title: "A Dim Light Amid Despair",
            subtitle: "Humanity's Comeback, Part 1",
            desc:
                "Eren butt heads with Jean Kirschtein, a cadet who wants to be in the Military Police Regiment. Berholt and Reiner help Eren learn during training."
        },
        {
            title: "The Night of the Closing Ceremony",
            subtitle: "Humanity's Comeback, Part 2",
            desc:
                "There are shocking revelations on graduation day as well as an outbreak of sudden violence. Annie proves that she has the skills to spar and Jan has dreams of serving beside the King."
        },
        {
            title: "First Battle",
            subtitle: "The Struggle for Trost, Part 1",
            desc:
                "Eren faces off against the Colossal Titan after it appears out of nowhere and knocks a strategic hole in the Rose Wall gate. As Titans swarm the city, the newly graduated cadets are called in to fight in a brutal battle."
        },
        {
            title: "The World the Girl Saw",
            subtitle: "The Struggle for Trost, Part 2",
            desc:
                "After the Titans massacre Amin's squad, he must come to terms with the loss of his friends and allies. Meanwhile, tragic memories are brought to the fore when Mikasa takes out several monsters."
        },
        {
            title: "Small Blade",
            subtitle: "The Struggle for Trost, Part 3",
            desc:
                "Cadets do not have enough fuel to return after the retreat bell sounds. Mikasa's will to fight is fuelled by a new type of titan."
        },
        {
            title: "I Can Hear His Heartbeat",
            subtitle: "The Struggle for Trost, Part 4",
            desc:
                "The Cadets try to take back their headquarters from the Titans, though the plan is not without risk. Getting back into the building is tricky, but getting back out alive is the most difficult part."
        },
        {
            title: "Whereabouts of His Left Arm",
            subtitle: "The Struggle for Trost, Part 5",
            desc:
                "Eren can't remember why he is considered as an enemy to humankind, or if he is even human or Titan. He is greeted with anger and fear despite his miraculous return from inside the stomach of a monster."
        },
        {
            title: "Response",
            subtitle: "The Struggle for Trost, Part 6",
            desc:
                "The cadets respond with fear and doubt following Eren's terrifying transformation. Armin tries to convince the commander that Eren's powers can be used for the good of humans."
        },
        { title: "Idol", subtitle: "The Struggle for Trost, Part 7", desc: "" },
        {
            title: "Wound",
            subtitle: "The Struggle for Trost, Part 8",
            desc:
                "The team tries to seal the hole in the wall using Eren's powers, hopefully allowing them to reclaim Trost, but humankind faces a threat that could be as dangerous as the Titans."
        },
        {
            title: "Primal Desire",
            subtitle: "The Struggle for Trost, Part 9",
            desc:
                "Eren's newfound powers turn him into a mindless giant, scuppering the plan to reclaim Trost; Titans continue to swarm the city."
        },
        { title: "Since That Day", subtitle: "", desc: "" },
        {
            title: "Can't Look into His Eyes Yet  ",
            subtitle: "Eve of the Counterattack, Part 1",
            desc:
                "Jean tries to replace his broken manoeuvring device, taking desperate measures; with the help of his fellow cadets, Eren manages to plug the hole in the wall."
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
