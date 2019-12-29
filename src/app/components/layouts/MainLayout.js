import React from "react";

import {Header} from "./Header";
import {Footer} from "./Footer";

//main layout 
export const MainLayout = (props) => {
    return <div>
                <Header/>
                <div className="content-main">
                    <div className="content-main__inner">
                        {props.children}
                    </div>
                </div>
                <Footer/>
            </div>
};