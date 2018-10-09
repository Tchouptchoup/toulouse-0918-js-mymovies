import React, { Component } from 'react';
import './Slider.css';

import Affiches from "./Affiches"
// import affichesData from "./affichesData"

function divideData(tab) {
    let dataTabFinal = [];
    for (let i = 0; i < tab.length; i += 4) {
        const dataTab = tab.slice(i, i + 4)
        dataTabFinal.push(dataTab)
    }
    return dataTabFinal
}


class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliceNumber: 0,
            slices: [],
        };
    }

    componentDidMount() {
        fetch(this.props.url)
            .then(response => response.json())
            .then(data => {
                const slices = divideData(data.results)
                this.setState({
                    slices: slices
                })
            });
    }

    handleClickPrev = () => {
        let prevSliceNumber = this.state.sliceNumber - 1
        if (prevSliceNumber < 0) {
            prevSliceNumber = this.state.slices.length - 1
        }
        this.setState({ sliceNumber: prevSliceNumber });
    };
    handleClickNext = () => {
        let nextSliceNumber = this.state.sliceNumber + 1
        if (nextSliceNumber >= this.state.slices.length) {
            nextSliceNumber = 0
        }
        this.setState({ sliceNumber: nextSliceNumber });
    };
    render() {
        const sliceNumber = this.state.sliceNumber
        return (
            <div className="container-fluid slice-marge pt-3">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="false">
                    <div className="carousel-inner">
                        {
                            this.state.slices.map((slice, index) =>
                                <div key={index} className={((sliceNumber === index) ? "active" : "") + "carousel-item text-center"}>
                                    <Affiches affiches={slice} />
                                </div>
                            )
                        }
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" onClick={this.handleClickPrev} >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" onClick={this.handleClickNext} >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Slider;