import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import Navigation from "../Layout/Navigation";
import BestsInfo_1 from "../components/BestsInfo_1";
import BestsInfo from "../components/BestsInfo";

const Home = () => {
    const percentage = 85;
    return (
        <>
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
                            <div className="col-xxl-9 col-xl-8 col-lg-7 order-xxl-1 order-xl-1 col-md-6 order-md-1 order-sm-2">
                                <div className="left__sitebar mt-2">
                                    <div className="image__gallary">
                                        <h4 className="mb-3">Popular Activities</h4>
                                        <div className="image_body">
                                            <div className="image_card card_1">
                                                <img className="img-fluid" src="https://img.freepik.com/free-photo/young-couple-playing-tennis-court_1303-16305.jpg" alt="" />
                                                <div className="card-overlay">
                                                    <h3>Tannis</h3>
                                                </div>
                                            </div>
                                            <div className="image_card card_2">
                                                <img className="img-fluid" src="https://images.giant-bicycles.com/oz9alq0zvm1fwnz6hrmx/preview.jpg" alt="" />
                                                <div className="card-overlay">
                                                    <h3>Running</h3>
                                                </div>
                                            </div>
                                            <div className="image_card card_3">
                                                <img className="img-fluid" src="https://images.giant-bicycles.com/oz9alq0zvm1fwnz6hrmx/preview.jpg" alt="" />
                                                <div className="card-overlay">
                                                    <h3>Cycling</h3>
                                                </div>
                                            </div>
                                            <div className="image_card card_4">
                                                <img className="img-fluid" src="https://cdn.pixabay.com/photo/2020/10/12/19/10/mountaineers-5649828_640.jpg" alt="" />
                                                <div className="card-overlay">
                                                    <h3>Hyking</h3>
                                                </div>
                                            </div>
                                            <div className="image_card card_5">
                                                <img className="img-fluid" src="https://images.giant-bicycles.com/oz9alq0zvm1fwnz6hrmx/preview.jpg" alt="" />
                                                <div className="card-overlay">
                                                    <h3>Cycling</h3>
                                                </div>
                                            </div>
                                            <div className="image_card card_6">
                                                <img className="img-fluid" src="https://t4.ftcdn.net/jpg/03/00/15/41/360_F_300154101_DunPXnmWb8KI3dEl7KMD4NmhuxlffFWi.jpg" alt="" />
                                                <div className="card-overlay">
                                                    <h3>Swmming</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row weekly_activity  gx-5 px-3">
                                        <div className="col-xxl-7 col-xl-7 col-lg-12 col-md-12">
                                            <h4 className="row ps-0">Weekly Schedule</h4>
                                            <div className="row week_activity week_one rounded px-2 py-2">
                                                <div className="col-3 col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-2 border-2 border-end border-dark text-center left">
                                                    <h1>13</h1>
                                                    <span>MON</span>
                                                </div>
                                                <div className="col-5 col-xxl-7 col-xl-7 col-lg-7 col-md-5 col-sm-7 middle">
                                                    <h6>Swimming</h6>
                                                    <img src="https://avatars.githubusercontent.com/u/52135729?v=4" className="ms-0" alt="" />
                                                    <img src="https://avatars.githubusercontent.com/u/250488?s=100&v=4" alt="" />
                                                    <img src="https://avatars.githubusercontent.com/u/90342087?s=100&v=4" alt="" />
                                                    <img src="https://avatars.githubusercontent.com/u/5580297?v=4" alt="" />
                                                </div>
                                                <div className="col-4 col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-3 text-end right">
                                                    <button className="btn btn-light rounded-pill px-4">Join</button>
                                                </div>
                                            </div>
                                            <div className="row week_activity week_two rounded px-2 py-2">
                                                <div className="col-3 col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-2 border-2 border-end border-dark text-center left">
                                                    <h1>13</h1>
                                                    <span>MON</span>
                                                </div>
                                                <div className="col-5 col-xxl-7 col-xl-7 col-lg-7 col-md-5 col-sm-7 middle">
                                                    <h6>Swimming</h6>
                                                    <img src="https://avatars.githubusercontent.com/u/52135729?v=4" className="ms-0" alt="" />
                                                    <img src="https://avatars.githubusercontent.com/u/90342087?s=100&v=4" alt="" />
                                                    <img src="https://avatars.githubusercontent.com/u/5580297?v=4" alt="" />
                                                </div>
                                                <div className="col-4 col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-3 text-end right">
                                                    <button className="btn btn-light rounded-pill px-4">Join</button>
                                                </div>
                                            </div>
                                            <div className="row week_activity week_three rounded px-2 py-2">
                                                <div className="col-3 col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-2 border-2 border-end border-dark text-center left">
                                                    <h1>13</h1>
                                                    <span>MON</span>
                                                </div>
                                                <div className="col-5 col-xxl-7 col-xl-7 col-lg-7 col-md-5 col-sm-7 middle">
                                                    <h6>Swimming</h6>
                                                    <img src="https://avatars.githubusercontent.com/u/52135729?v=4" className="ms-0" alt="" />
                                                    <img src="https://avatars.githubusercontent.com/u/90342087?s=100&v=4" alt="" />
                                                    <img src="https://avatars.githubusercontent.com/u/5580297?v=4" alt="" />
                                                </div>
                                                <div className="col-4 col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-3 text-end right">
                                                    <button className="btn btn-light rounded-pill px-4">Join</button>
                                                </div>
                                            </div>
                                            <div className="row week_activity week_four rounded px-2 py-2">
                                                <div className="col-3 col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-2 border-2 border-end border-dark text-center left">
                                                    <h1>13</h1>
                                                    <span>MON</span>
                                                </div>
                                                <div className="col-5 col-xxl-7 col-xl-7 col-lg-7 col-md-5 col-sm-7 middle">
                                                    <h6>Swimming</h6>
                                                    <img src="https://avatars.githubusercontent.com/u/52135729?v=4" className="ms-0" alt="" />
                                                    <img src="https://avatars.githubusercontent.com/u/90342087?s=100&v=4" alt="" />
                                                    <img src="https://avatars.githubusercontent.com/u/5580297?v=4" alt="" />
                                                    <img src="https://avatars.githubusercontent.com/u/250488?s=100&v=4" alt="" />
                                                </div>
                                                <div className="col-4 col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-3 text-end right">
                                                    <button className="btn btn-light rounded-pill px-4">Join</button>
                                                </div>
                                            </div>
                                        </div>
                                        <BestsInfo_1 />
                                    </div>
                                </div>
                            </div>
                            {/* ==============================================================
                                                    Right site bar
                            ================================================================== */}
                            <div className="col-xxl-3 col-xl-4 col-lg-5 order-xxl-2 order-xl-2 col-md-6 order-md-2 order-sm-1">
                                <div className="right__sitebar mt-2">
                                    <div className="right_top d-flex flex-row justify-content-between pe-2">
                                        <div className="Icons d-flex">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-bell-fill me-2 me-xl-4 me-xs-4"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-chat-left-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                            </svg>
                                        </div>
                                        <h5>Kelsey Miller</h5>
                                        <img src="https://avatars.githubusercontent.com/u/52135729?v=4" />
                                    </div>
                                    <div className="activity">
                                        <div className="row">
                                            <h1>Active Calories</h1>
                                            <div className="col-lg-5 col-md-5">
                                            <CircularProgressbar value={percentage} text={`${percentage}%`} />
                                            </div>
                                            <div className="col-lg-7 col-md-7 activity-contant pe-xl-0">
                                                <p><span>Today:</span> 400</p>
                                                <p><span>This Week:</span> 3500</p>
                                                <p><span>This Month:</span> 14000</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right_best_info">
                                        <BestsInfo />
                                    </div>
                                    {/* ==============================================================
                                                    Site-bar Activity card section
                                    ================================================================== */}
                                    <div className="other__activity">
                                        <div className="row">
                                            <h1 className="ps-0">Active Calories</h1>
                                            <div className="col-12">
                                                <div className="activity_card">
                                                    <div className="info d-flex">
                                                        <img src="https://avatars.githubusercontent.com/u/52135729?v=4" alt="" />
                                                        <h2>Motalib</h2>
                                                    </div>
                                                    <img className="img-fluid" src="https://sjghel.ca/wp-content/uploads/2022/10/active-lifestyle-banner.jpg" alt="" />
                                                    <p>We completed the 30-Day Running Streak Challenge!🏃‍♀️🎉</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="other__activity other__activity_2  mt-2">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="activity_card">
                                                    <div className="info d-flex">
                                                        <img src="https://avatars.githubusercontent.com/u/52135729?v=4" alt="" />
                                                        <h2>Motalib</h2>
                                                    </div>
                                                    <img className="img-fluid" src="https://sjghel.ca/wp-content/uploads/2022/10/active-lifestyle-banner.jpg" alt="" />
                                                    <p>We completed the 30-Day Running Streak Challenge!🏃‍♀️🎉</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
