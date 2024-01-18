import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import Navigation from "../Layout/Navigation";
import UnderConstraction from "../components/UnderConstraction";

const profile = () => {
    return (
        <div className="container-fluid">
            <div className="main__container">
                <div className="left__main">
                    <Navigation />
                </div>
                {/* // ============================================================
                //                Main Layout Start
                // ============================================================= */}
                <div className="right__main">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="left__sitebar pt-0 mt-2">
                                <UnderConstraction />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default profile;
