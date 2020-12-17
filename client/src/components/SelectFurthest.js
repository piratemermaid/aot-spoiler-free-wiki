import React, { Component } from "react";
import axios from "axios";

// TODO: display 4 seasons as accordions,
// can select to expand & then select the ep
// TODO: toggle show/hide descriptions

class SelectFurthest extends Component {
    constructor(props) {
        super(props);

        this.state = { episodes: null };
    }

    async componentDidMount() {
        const res = await axios({
            method: "get",
            url: "/api/app/seasons"
        });

        this.setState({ episodes: res.data });
    }

    renderEpisodes() {
        const { episodes } = this.state;

        let epUI = [];

        let seasons = [1, 2, 3, 4];

        for (let season of seasons) {
            let ep = 0;
            epUI.push(
                <div>
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
                                    ep++;
                                    return (
                                        <tr>
                                            <td>{ep}</td>
                                            <td>
                                                {title}
                                                {subtitle
                                                    ? `: ${subtitle}`
                                                    : null}
                                            </td>
                                            <td>{desc}</td>
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
