import React, { Component } from 'react';
class Profile extends Component {
    render() {
        return (
            <div className="container">
                <div className="mt-5 profile col-12 col-md-8 mx-auto position-relative">
                    <h3 className="text-center">Olawale's Profile</h3>
                    <div className="row px-2 mt-5">
                        <div className="col-12 col-md-12 profile-box">
                            <p>Name: Olawale</p>
                            <p>Username: Brainyfarm</p>
                            <p>Joined: Aug 12, 2013</p>
                            <p>Last Login: Jan 25, 2018</p>

                            <div className="row mt-5 media-detail">
                                <div className="col-12 col-sm-6">
                                    <h5>Media Shared</h5>
                                    <ul>
                                        <li><a href="#">Kill em all</a></li>
                                        <li><a href="#">Kill em all</a></li>
                                        <li><a href="#">Kill em all</a></li>
                                    </ul>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <h5>Media Reviewed</h5>
                                    <ul>
                                        <li><a href="#">Kill em all</a></li>
                                        <li><a href="#">Kill em all</a></li>
                                        <li><a href="#">Kill em all</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MediaList