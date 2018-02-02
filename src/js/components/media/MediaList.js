import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { getAllMedia } from '../../actions/Actions'
import { isLoggedIn } from '../../helpers/isLoggedIn';

class MediaList extends Component {

    constructor(props) {
        super(props);
        this.props.getAllMedia();
        this.state = {
        }
    }

    render() {
        const AllMediaList = this.props.allMedia.map((media, index) => {
            return (
                <div className="col-sm-6 my-3" key={index}>
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text"> { media.title } </p>
                            <a href={`./media/${media.media_id}`} className="btn btn-secondary"> View </a>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className="media-list">
                <div className="container">
                    <div className="review-comments mt-5 col-12 col-md-8 mx-auto position-relative">
                        <h3 className="text-center text-success"> Recent Media </h3>
                        <div className="row">
                            { AllMediaList }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        allMedia: state.AllMedia.allMedia
    }
}
// const map
export default connect(mapStateToProps, { getAllMedia })(MediaList);