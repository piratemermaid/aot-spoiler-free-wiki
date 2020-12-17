import _ from "lodash";
import React, { Component } from "react";
import axios from "axios";

// TODO: display 4 seasons as accordions,
// can select to expand & then select the ep

class SelectFurthest extends Component {
    constructor(props) {
        super(props);

        this.state = { episodes: null, showIds: [] };
    }

    async componentDidMount() {
        const res = await axios({
            method: "get",
            url: "/api/app/seasons"
        });

        this.setState({ episodes: res.data });
    }

    toggleDesc({ epId }) {
        const { showIds } = this.state;
        const shown = showIds.includes(epId);
        if (shown) {
            const index = _.indexOf(showIds, epId);
            showIds.splice(index, 1);
        } else {
            showIds.push(epId);
        }

        this.setState({ showIds });
    }

    renderEpisodes() {
        const { episodes } = this.state;

        let epUI = [];

        let seasons = [1, 2, 3, 4];

        for (let season of seasons) {
            let ep = 0;
            epUI.push(
                <div key={season}>
                    <h3 className="left">Season {season}</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Description (click to show)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {episodes[season].map(
                                ({ title, subtitle, desc }) => {
                                    const epId = `s${season}e${ep}`;
                                    ep++;
                                    return (
                                        <tr key={epId}>
                                            <td>{ep}</td>
                                            <td>
                                                {title}
                                                {subtitle
                                                    ? `: ${subtitle}`
                                                    : null}
                                            </td>
                                            <td
                                                onClick={() =>
                                                    this.toggleDesc({ epId })
                                                }
                                            >
                                                <span
                                                    id={epId}
                                                    className={
                                                        !this.state.showIds.includes(
                                                            epId
                                                        )
                                                            ? "hide"
                                                            : null
                                                    }
                                                >
                                                    {desc}
                                                </span>
                                            </td>
                                        </tr>
                                    );
                                }
                            )}
                        </tbody>
                    </table>
                </div>
            );
        }

        return epUI;
    }

    render() {
        return (
            <div>
                <h2>select where you're at</h2>
                {this.state.episodes ? this.renderEpisodes() : null}
            </div>
        );
    }
}

export default SelectFurthest;
