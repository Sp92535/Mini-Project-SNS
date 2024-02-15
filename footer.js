class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<footer class="py-5 px-5">
        <div class="row">
            <div class="col-6 col-md-2 mb-3">
                <h5>Fitness</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="Fitness.html#Beginner"
                            class="nav-link p-0 text-body-secondary">Beginner</a></li>
                    <li class="nav-item mb-2"><a href="Fitness.html#Exercises"
                            class="nav-link p-0 text-body-secondary">Exercises</a></li>
                    <li class="nav-item mb-2"><a href="Fitness.html#Cardio" class="nav-link p-0 text-body-secondary">Cardio</a>
                    </li>
                </ul>
            </div>

            <div class="col-6 col-md-2 mb-3">
                <h5>Tools</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="Tools.html#bmi" class="nav-link p-0 text-body-secondary">BMI</a></li>
                    <li class="nav-item mb-2"><a href="Tools.html#bodyfat" class="nav-link p-0 text-body-secondary">Body Fat
                            Calculator</a></li>
                    <li class="nav-item mb-2"><a href="Tools.html#calories-burned" class="nav-link p-0 text-body-secondary">Calories Burned by Activity</a></li>
                    <li class="nav-item mb-2"><a href="Tools.html#bmr" class="nav-link p-0 text-body-secondary">Daily Calories
                            burned</a></li>
                    <li class="nav-item mb-2"><a href="Tools.html#pace" class="nav-link p-0 text-body-secondary">Pace Calculator</a></li>
                </ul>
            </div>

            <div class="col-6 col-md-2 mb-3">
                <h5>More</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="Index.html#blog" class="nav-link p-0 text-body-secondary">Blog</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Login</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Contact Us</a></li>
                </ul>
            </div>

            <div class="col-md-5 offset-md-1 mb-3">
                <form>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingName" placeholder="Your Name">
                        <label for="floatingName">Name</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                        <label for="floatingInput">Email address</label>

                        <button type="submit" class="btn btn-primary my-4">Submit</button>
                </form>
            </div>
        </div>

        <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2024 SNS, Inc. All rights reserved.</p>
            <ul class="list-unstyled d-flex">
                <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24">
                            <use xlink:href="#twitter"></use>
                        </svg></a></li>
                <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24">
                            <use xlink:href="#instagram"></use>
                        </svg></a></li>
                <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24">
                            <use xlink:href="#facebook"></use>
                        </svg></a></li>
            </ul>
        </div>
    </footer>
    `
    }
}
customElements.define('special-footer', SpecialFooter)