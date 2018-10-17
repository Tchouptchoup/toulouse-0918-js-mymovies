import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';
import './Slider.css';
import Affiches from "./Affiches"

function divideData(tab, nb) {
    let dataTabFinal = [];
    for (let i = 0; i < tab.length; i += nb) {
        const dataTab = tab.slice(i, i + nb)
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
            data: []
        };
    }

    updateDimensions() {
        let nbAffiches = 4;
        if (window.innerWidth > 1041 && window.innerWidth < 1372) {
            nbAffiches = 3
        }
        else if (window.innerWidth > 709 && window.innerWidth < 1040) {
            nbAffiches = 2
        }
        else if (window.innerWidth < 708) {
            nbAffiches = 1
        }
        this.setState({
            slices: divideData(this.state.data, nbAffiches)
        });
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions.bind(this));
        fetch(this.props.url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data: data.results
                },
                () => this.updateDimensions()
                )
            });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
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
        const slides = this.state.slices.map((slice, index) =>
            <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={index}
          >
                <Affiches affiches={slice} />
            </CarouselItem>
        )
        return (
            <div className="container-fluid text-center pt-3">

                <Carousel interval={false}
                    activeIndex={sliceNumber}
                    next={this.handleClickNext}
                    previous={this.handleClickPrev}
                >
                    {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} /> */}
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.handleClickPrev} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.handleClickNext} />
                </Carousel>
                
            </div>
        );
    }
}

export default Slider;