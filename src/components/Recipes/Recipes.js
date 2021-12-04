import './Recipes.css'

const Recipies = () => {
    return (
        <div class="main-container">
            <div class="recipies-section">
                <div class="inner-content">
                    <div class="text">
                        <h2>Here are our <strong>Best Recipes</strong></h2>
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
                        <div class="info-boxes">
                            <div class="img-holder">
                                <img src="./assets/broccoli-pizza.jpg" alt="Broccoli Pizza" />
                            </div>
                            <div class="info-holder">
                                <h3>Broccoli Pizza</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae facilis dolores provident officia, culpa hic tempore dicta, alias asperiores incidunt quos eum </p>
                                <button class="read-more-btn">Read More</button>
                            </div>
                        </div>
                        <div class="info-boxes">
                            <div class="img-holder">
                                <img src="./assets/bow.jpg" alt="Bow" />
                            </div>
                            <div class="info-holder">
                                <h3>Healthy Bow</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae facilis dolores </p>
                                <button class="read-more-btn">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recipies;