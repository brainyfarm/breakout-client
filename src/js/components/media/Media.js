import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { addRating, getMedia } from '../../actions/Actions'
import { isLoggedIn } from '../../helpers/isLoggedIn';

class Media extends Component {
    constructor(props) {
        super(props);
        console.log(props);        
        this.media_id = props.match.params.media_id;
        this.props.getMedia(this.media_id);
    }

    rateMedia(event, value) {
        const media_id = this.media_id;
        const score = parseInt(value);

        this.props.addRating(this.media_id, { media_id, score })
    }

    render() {
        const { media, comments, ratings } = this.props.media;

        const mediaData = media ? media : {};
        const allComments = comments ? comments.map((comment, index) => {
            return (
                <li key={index}><span className="comment__author"> <strong> { comment.firstname  } </strong> </span> <p> {comment.text} </p> </li>
            )
        }) : null
        return (
            <div className="container text-center">

                <div className="mx-auto videoContainer media-container">
                    <iframe width="1920" height="1080" src="https://www.youtube.com/embed/5I1v7aXYitI" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    <div className="position-relative video-author-div">
                        <span> 
                            <span> { mediaData.title } </span> <br />
                            <strong> By { mediaData.username } </strong>
                        </span>
                    </div>
                </div>

                <div className="container text-center">
                    <div className="review__stars">
                        <input type="radio" name="rating" onClick={(event) => this.rateMedia(event, 1, ) } id="star-5" required />
                        <label htmlFor="star-5"></label>
                        <input type="radio" name="rating" onClick={(event) => this.rateMedia(event, 2) } id="star-4" required />
                        <label htmlFor="star-4"></label>
                        <input type="radio" name="rating" onClick={(event) => this.rateMedia(event, 3) }  id="star-3" required />
                        <label htmlFor="star-3"></label>
                        <input type="radio" name="rating" onClick={(event) => this.rateMedia(event, 4) }  id="star-2" required />
                        <label htmlFor="star-2"></label>
                        <input type="radio" name="rating" onClick={(event) => this.rateMedia(event, 5) }  id="star-1" required />
                        <label htmlFor="star-1"></label>
                    </div>
                </div>

                <div className="review-box col-12 col-md-8 mx-auto position-relative mt-5">
                    <textarea name="" id="video-review" cols="30" rows="10" placeholder="Leave a review"></textarea>
                    <div className="review__section">
                        <div className="col-12 p-0">
                            <button className="btn btn-tertiary btn-block review-btn">Submit Review</button>
                        </div>
                    </div>
                </div>

                <div className="review-comments mt-5  col-12 col-md-8 mx-auto position-relative">
                    <h3>Reviews</h3>
                    <ul className="comment-list">
                        { this.props.media.comments ? allComments : null }
                    </ul>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        media: state.Media.media
    }
}
// const map
export default connect(mapStateToProps, { getMedia, addRating })(Media);