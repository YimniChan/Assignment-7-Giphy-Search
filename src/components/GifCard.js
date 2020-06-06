import React, { Component } from "react";
import './GifCard.css';

class GifCard extends Component {

    render() {
        return (
            <div className="image">
                <p>{this.props.imagetitle}</p>
                <div class="image" >
                <img
                class="imageDetail"
                src={this.props.imageSource}
                alt="gif"/>
                </div>
            </div>
        );
    }
}

export default GifCard;