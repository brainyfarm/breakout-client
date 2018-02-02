import React, { Component } from 'react';
import { isLoggedIn, getTokenData } from '../../helpers/isLoggedIn';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentWillMount() {
        if (isLoggedIn()) {
            this.setState({
                tokenData: getTokenData(),
            })
        console.log(this.state)
        }
    }

    render() {
        return (
            <div className="nav">
                <header className="container mb-3">
                    <nav className="navbar navbar-expand-sm navbar-light bg-transparent">
                        <a className="navbar-brand" href="./">Breakout</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {
                            this.state.tokenData ?
                                <div className="collapse navbar-collapse" id="navbarToggle">
                                    <div className="navbar-nav ml-md-auto d-md-flex">
                                        <a className="nav-item nav-link" href="/profile/{{ prop.user.user_id }}">
                                            My Profile
                            </a>
                                        <a className="nav-item nav-link" href="/submit" data-toggle="modal" data-target="#submitModal">
                                            New Media
                            </a>
                                    </div>
                                </div> :
                                <div className="collapse navbar-collapse" id="navbarToggle">
                                    <div className="navbar-nav ml-md-auto d-md-flex">
                                        <a className="nav-item nav-link" href="./login">
                                            Login
                                    </a>
                              
                                    </div>
                                </div>
                        }

                    </nav>
                </header>
            </div>
        )
    }
}

export default Header
