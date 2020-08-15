import React, { Component } from 'react';
import mainLogo from'../public/homeImage.png';


class HomeImage extends Component {
    render() {
        return (
            <div className="HomeImage">
                <img src= {mainLogo} />
            </div>
        )
    }
}

export default HomeImage;