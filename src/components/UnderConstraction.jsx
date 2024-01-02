import React from "react";

const UnderConstraction = () => {
    return (
        <div className="underConstraction">
            <div class="object">
                <div class="object-rope"></div>
                <div class="object-shape">
                    Coming <span class="soon">Soon</span>
                </div>
            </div>

            <div class="content">
                {/* <img
                    class="logo"
                    src="https://s3-ap-southeast-2.amazonaws.com/images.fitseeker.com.au/logo.svg"
                /> */}

                <p class="message">
                    This page will be launching in 2024. Shoot
                    us an email if you want to get in contact (remove spaces).
                </p>

                <p class="mailtoaddress">
                    <em>admin @ iTechEys.com</em>
                </p>
            </div>
        </div>
    );
};

export default UnderConstraction;
