import React from "react";

const BestsInfo = () => {
    return (
        <>
            <div className="col-xxl-5 col-xl-5 col-lg-12 col-md-12 BestsInfo">
                <h4 className="row bets_title">Personal Bests</h4>
                <div className="personal__bets ">
                    <div className="row bets_info mb-2">
                        <div className="col-6 my-auto pe-0">
                            <p className="text-center">Fastest 5K Run: 22min</p>
                        </div>
                        <div className="col-6 my-auto ps-0 text-end">
                            <img
                                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/242bbd8c-aaf8-4aee-a3e4-e0df62d1ab27"
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 binfo binfo-1">
                            <p>Longest Distance Cycling: 4 miles</p>
                            <img
                                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/a3b3cb3a-5127-498b-91cc-a1d39499164a"
                                alt=""
                            ></img>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 binfo binfo-2">
                            <p>Longest Roller-Skating: 2 hours</p>
                            <img
                                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e0ee8ffb-faa8-462a-b44d-0a18c1d9604c"
                                alt=""
                            ></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BestsInfo;
