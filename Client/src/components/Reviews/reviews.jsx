import "/src/components/Reviews/reviews.css";
import Navbar from "/src/components/Navbar/navbar.jsx"
import Footer from "../Footer/footer.jsx"
import { MdOutlineLocationOn } from "react-icons/md";

const Reviews = () => {
    return (
        <div className="review-section">
        <Navbar />
        <div className="container">
            <h2 className="customReviewHeading">Customer Reviews</h2>
            <div className="review-container">
                <div className="review">
                    <div className="avatar">
                        <img src="/src/assets/review-lady-1.webp" alt="icon" className="icon"/>
                    </div>
                        <div className="content-reviews">
                            <h3 className="reviewerName">Dhanya</h3>
                            <div className="rating">
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                            </div>
                            <p className="reviewersReview">"Great service! They exceeded my expectations and I'll definitely be using them again."</p>
                            <p className="review-location">
                                <MdOutlineLocationOn className="location-icon"/>Gachibowli
                            </p>
                        </div>
                    </div>
                    <div className="review">
                    <div className="avatar">
                        <img src="/src/assets/review-girl2.webp" alt="icon" className="icon"/>
                    </div>
                        <div className="content-reviews">
                            <h3 className="reviewerName">Sadha</h3>
                            <div className="rating">
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                            </div>
                            <p className="reviewersReview">"Great service! They exceeded my expectations and I'll definitely be using them again."</p>
                            <p className="review-location">
                                <MdOutlineLocationOn className="location-icon"/>Kondapur
                            </p>
                        </div>
                    </div>
                    <div className="review">
                    <div className="avatar">
                        <img src="/src/assets/review-boy1.webp" alt="icon" className="icon"/>
                    </div>
                        <div className="content-reviews">
                            <h3 className="reviewerName">Daryna</h3>
                            <div className="rating">
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                            </div>
                            <p className="reviewersReview">"Outstanding cooking service! The meals were delicious and the chef was very professional."</p>
                            <p className="review-location">
                                <MdOutlineLocationOn className="location-icon"/>Hi-Tech City
                            </p>
                        </div>
                    </div>
                    <div className="review">
                    <div className="avatar">
                        <img src="/src/assets/review-girl3.webp" alt="icon" className="icon"/>
                    </div>
                        <div className="content-reviews">
                            <h3 className="reviewerName">Sriya</h3>
                            <div className="rating">
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                            </div>
                            <p className="reviewersReview">"I have been using Homaid Services for years and I would not trust anyone else with my home!"</p>
                            <p className="review-location">
                                <MdOutlineLocationOn className="location-icon"/>Miyapur
                            </p>
                        </div>
                    </div>
                    <div className="review">
                    <div className="avatar">
                        <img src="/src/assets/review-boy2.webp" alt="icon" className="icon"/>
                    </div>
                        <div className="content-reviews">
                            <h3 className="reviewerName">Sandeep</h3>
                            <div className="rating">
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                            </div>
                            <p className="reviewersReview">
                                "The cooking services from Homaid are a game-changer! Delicious meals without the hassle of grocery shopping and cooking"
                            </p>
                            <p className="review-location">
                                <MdOutlineLocationOn className="location-icon"/>Toli Chowki
                            </p>
                        </div>
                    </div>
                    <div className="review">
                    <div className="avatar">
                        <img src="/src/assets/review-boy3.webp" alt="icon" className="icon"/>
                    </div>
                        <div className="content-reviews">
                            <h3 className="reviewerName">Dhruva</h3>
                            <div className="rating">
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                            </div>
                            <p className="reviewersReview">
                                "Homaid professional maids are thorough, reliable, and friendly. I couldnot be happier with their service!"
                            </p>
                            <p className="review-location">
                                <MdOutlineLocationOn className="location-icon"/>Financial District
                            </p>
                        </div>
                    </div>
                    <div className="review">
                    <div className="avatar">
                        <img src="/src/assets/review-girl4.webp" alt="icon" className="icon"/>
                    </div>
                        <div className="content-reviews">
                            <h3 className="reviewerName">Ananya</h3>
                            <div className="rating">
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                            </div>
                            <p className="reviewersReview">
                                "Homaid Services is simply unmatched. Their cleaning prowess and culinary skills have made my life easier 
                                and my home happier. I am a loyal customer for a reason"
                            </p>
                            <p className="review-location">
                                <MdOutlineLocationOn className="location-icon"/>Chanda Nagar
                            </p>
                        </div>
                    </div>
                    <div className="review">
                    <div className="avatar">
                        <img src="/src/assets/review-boy4.webp" alt="icon" className="icon"/>
                    </div>
                        <div className="content-reviews">
                            <h3 className="reviewerName">Sudhan</h3>
                            <div className="rating">
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9734;</span>

                            </div>
                            <p className="reviewersReview">
                                "Trust is paramount when it comes to home services, and Homaid excels in delivering it. Their 
                                disciplined and trained staff not only keep my home impeccably clean but also operate with
                                transparency, creating a partnership built on reliability and excellence."
                            </p>
                            <p className="review-location">
                                <MdOutlineLocationOn className="location-icon"/>BHEL
                            </p>
                        </div>
                    </div>
                    <div className="review">
                    <div className="avatar">
                        <img src="/src/assets/review-girl5.webp" alt="icon" className="icon"/>
                    </div>
                        <div className="content-reviews">
                            <h3 className="reviewerName">Nishita</h3>
                            <div className="rating">
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9734;</span>
                            </div>
                            <p className="reviewersReview">
                                "When it comes to cooking, Homaid Services is in a league of its own. Their chefs have a magic touch that transforms 
                                ordinary meals into extraordinary experiences. I would not let anyone else take the reins in my kitchen."
                            </p>
                            <p className="review-location">
                                <MdOutlineLocationOn className="location-icon"/>Lingampally
                            </p>
                        </div>
                    </div>

                    {/* Add more reviews here */}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Reviews;
