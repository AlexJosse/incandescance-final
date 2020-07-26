import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import shuffle from 'shuffle-array';
import Gallery from './Gallery';
import CheckButton from './CheckButton';
import Real1 from "../../assets/realisation/real1.jpg";
import Real2 from "../../assets/realisation/real2.jpg";
import Real3 from "../../assets/realisation/real3.jpeg";
import Real4 from "../../assets/realisation/real4.jpeg";
import Real5 from "../../assets/realisation/real5.jpg";
import Real6 from "../../assets/realisation/real6.jpg";
import Real7 from "../../assets/realisation/real7.jpg";
import Real8 from "../../assets/realisation/real8.jpg";
import Real9 from "../../assets/realisation/real9.jpg";
import Real10 from "../../assets/realisation/real10.jpg";
import Real11 from "../../assets/realisation/real11.png";
import Real12 from "../../assets/realisation/real12.jpg";

class PhotoGallery extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            images: this.props.images,
            selectAllChecked: false
        };

        this.onSelectImage = this.onSelectImage.bind(this);
        this.getSelectedImages = this.getSelectedImages.bind(this);
        this.onClickSelectAll = this.onClickSelectAll.bind(this);
    }

    allImagesSelected (images){
        var f = images.filter(
            function (img) {
                return img.isSelected == true;
            }
        );
        return f.length == images.length;
    }

    onSelectImage (index, image) {
        var images = this.state.images.slice();
        var img = images[index];
        if(img.hasOwnProperty("isSelected"))
            img.isSelected = !img.isSelected;
        else
            img.isSelected = true;

        this.setState({
            images: images
        });

        if(this.allImagesSelected(images)){
            this.setState({
                selectAllChecked: true
            });
        }
        else {
            this.setState({
                selectAllChecked: false
            });
        }
    }

    getSelectedImages () {
        var selected = [];
        for(var i = 0; i < this.state.images.length; i++)
            if(this.state.images[i].isSelected == true)
                selected.push(i);
        return selected;
    }

    onClickSelectAll () {
        var selectAllChecked = !this.state.selectAllChecked;
        this.setState({
            selectAllChecked: selectAllChecked
        });

        var images = this.state.images.slice();
        if(selectAllChecked){
            for(var i = 0; i < this.state.images.length; i++)
                images[i].isSelected = true;
        }
        else {
            for(var i = 0; i < this.state.images.length; i++)
                images[i].isSelected = false;

        }
        this.setState({
            images: images
        });
    }

    render () {
        return (
          <>
                <div style={{
                    padding: "2px",
                    color: "#666"
                }}>{this.getSelectedImages().toString()}</div>
                <div style={{
                    display: "block",
                    minHeight: "1px",
                    width: "100%",
                    overflow: "auto"}}>
                <Gallery
            images={this.state.images}
            onSelectImage={this.onSelectImage}
            showLightboxThumbnails={true}/>
                </div>
                </>
        );
    }
}

PhotoGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            srcset: PropTypes.array,
            caption: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.element
            ]),
            thumbnailWidth: PropTypes.number.isRequired,
            thumbnailHeight: PropTypes.number.isRequired,
            isSelected: PropTypes.bool
        })
    ).isRequired
};

PhotoGallery.defaultProps = {
    images: shuffle([
        {
            src: Real1,
            thumbnail: Real1,
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            caption: ""
        },
        {
            src: Real2,
            thumbnail: Real3,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
        },
        {
            src: Real4,
            thumbnail: Real4,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: ""
        },
        {
            src: Real5,
            thumbnail: Real5,
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            caption: ""
        },
        {
            src: Real6,
            thumbnail: Real6,
            thumbnailWidth: 320,
            thumbnailHeight: 183,
            caption: ""
        },
        {
            src: Real7,
            thumbnail: Real7,
            thumbnailWidth: 240,
            thumbnailHeight: 320,
            caption: ""
        },
        {
            src: Real8,
            thumbnail: Real8,
            thumbnailWidth: 320,
            thumbnailHeight: 190,
            caption: ""
        },
        {
            src: Real9,
            thumbnail: Real9,
            thumbnailWidth: 320,
            thumbnailHeight: 148,
            caption: ""
        },
        {
            src: Real10,
            thumbnail: Real10,
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            caption: ""
        },
        {
            src: Real11,
            thumbnail: Real11,
            thumbnailWidth: 248,
            thumbnailHeight: 320,
            caption: ""
        },
        {
            src: Real12,
            thumbnail: Real12,
            thumbnailWidth: 320,
            thumbnailHeight: 113,
            caption: ""
        },
        {
            src: Real12,
            thumbnail: Real12,
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            caption: ""
        }
    ]).splice(0,15)
};

export default PhotoGallery;
