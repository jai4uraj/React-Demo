import React from 'react';

export class Footer extends React.Component {
    render() {
        return (
            <footer>
                <hr className="featurette-divider" />
                <p className="float-right"><a href="#">Back to top</a></p>
                <p>© 2017 Company, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
            </footer>
        )
    }
}