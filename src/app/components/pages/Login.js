import React from "react";

export class Login extends React.Component {
    render() {
        return <div className="form__login">

                <form action="/" type="post">
                    <fieldset>
                        <div className="x3_row x3_mb--6">
                            <div className="x3_col">
                                <h3>Login here</h3>
                            </div>
                        </div>
                        <div className="x3_form__group">
                            <label for="name">Username:</label>
                            <input type="text" id="name" name="name" className="x3_form__field x3_form__field--xl"/>
                        </div>

                        <div className="x3_form__group">
                            <label for="email">E-mail:</label>
                            <input type="email" id="email" name="email" className="x3_form__field x3_form__field--xl"/>
                        </div>

                        <button type="submit" className="x3_btn x3_btn--primary x3_btn--xl">Login</button>               
                        
                    </fieldset>
                </form>
        </div>;
    }

}