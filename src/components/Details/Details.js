import { useState, useEffect } from 'react';


const Details = () => {
    return (
        <div class="main-container">
            <div class="recipies-section">
                <div class="inner-content">
                    <div class="text">
                        <h2>Details</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                    </div>
                    <div class="image-boxes">
                        <div class="info-boxes">
                            <div class="img-holder">
                                <img src="./assets/lemon-tart.jpg" alt="Lemon Tart" />
                            </div>
                            <div class="info-holder">
                                <h3>Limon Pie</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae facilis dolores provident officia, culpa hic tempore dicta, alias asperiores incidunt quos eum </p>
                                <button class="read-more-btn">Read More</button>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    );
}

export default Details;