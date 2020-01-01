import React from "react";

export class Login extends React.Component {

    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            redirectToReferrer: false
       };
       this.login    = this.login.bind(this);
       this.onChange = this.onChange.bind(this);
    }

    login() {
    //API Action Here
    }       
       
    onChange(e){
       this.setState({[e.target.name]:e.target.value});
    }

    render() {
        return <div className="form__login">

                <form action="/" type="post">
                    <fieldset>
                        <div className="x3_row x3_mb--6">
                            <div className="x3_col">
                                <h3>Welcome</h3>
                            </div>
                        </div>
                        <div className="x3_form__group">
                            <label for="name">Username:</label>
                            <input type="text" id="name" name="name" className="x3_form__field x3_form__field--xl"/>
                        </div>

                        <div className="x3_form__group">
                            <label for="email">Password:</label>
                            <input type="password" id="password" name="password" className="x3_form__field x3_form__field--xl"/>
                        </div>

                        <button type="submit" className="x3_btn x3_btn--primary x3_btn--xl">Login</button>

                        <a href="#" className="x3_float--right x3_mt--2">forgot password</a>               
                        
                    </fieldset>
                </form>
        </div>;
    }

}