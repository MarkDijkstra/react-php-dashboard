import React from "react";

export class Logout extends React.Component {
    render() {
        return <div className="form__logout">
            <div className="x3_card">
                <div className="x3_row x3_mb--6">
                    <div className="x3_col">
                        <h3>You have been logged out.</h3>
                    </div>
                </div>
                <div className="x3_row">
                    <div className="x3_col">
                    <a href="login">Login here.</a>
                    </div>
                </div> 
            </div>       
        </div>;
    }

}