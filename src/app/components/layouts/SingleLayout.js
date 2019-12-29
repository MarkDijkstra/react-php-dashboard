import React from "react";

// single page layout, for login/logout and such
export const SingleLayout = (props) => {
     return <div>               
                <div className="content-main">
                    <div className="content-main__inner">
                        {props.children}
                    </div>
                </div>            
            </div>
};