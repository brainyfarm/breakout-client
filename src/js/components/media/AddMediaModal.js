import React, { Component } from 'react';
class AddMediaModal extends Component {
    render() {
        return (
            <div className="modal fade" id="submitModal" tabindex="-1" role="dialog" aria-labelledby="submitModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Media</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="px-3 py-5">
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text"><i className="ion ion-ios-musical-note"></i></div>
                                        </div>
                                        <input type="text" className="form-control form-control-sm" id="title" required placeholder="Title" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text"><i className="ion ion-ios-videocam"></i></div>
                                        </div>
                                        <select required className="custom-select custom-select-sm">
                                            <option selected>YouTube</option>
                                            <option value="1">Vimeo</option>
                                            <option value="2">DailyMotion</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text"><i className="ion ion-link"></i></div>
                                        </div>
                                        <input type="url" className="form-control form-control-sm" id="link" required placeholder="Link" />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-tertiary btn-block">Add Media</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddMediaModal
