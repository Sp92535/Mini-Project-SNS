class SpecialNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body fixed-top" data-bs-theme="dark">
    <div class="container ">
        <img src="IMG_2025.PNG" alt="not loading" class="logo" height="45px" width="45px">&nbsp;&nbsp;
        <a class="navbar-brand">SNS Fitness</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="Index.html">Home</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="Fitness.html" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Fitness
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="GymWorkout.html">Gym Workout</a></li>
                        <li><a class="dropdown-item" href="HomeWorkout.html">Home Workout</a></li>
                        <li><a class="dropdown-item" href="Cardio.html">Cardio</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="Nutrition.html">Nutrition</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="Tools.html" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Tools
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="Tools.html#bmi">BMI</a></li>
                        <li><a class="dropdown-item" href="Tools.html#bodyfat">Body Fat Calculator</a></li>
                        <li><a class="dropdown-item" href="Tools.html#calories-burned">Calories Burned by Activity</a>
                        </li>
                        <li><a class="dropdown-item" href="Tools.html#bmr">Daily Calories Burned</a></li>
                        <li><a class="dropdown-item" href="Tools.html#pace">Pace Calculator</a></li>
                    </ul>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        More
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="Index.html#blog">Blogs</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#">Login</a></li>
                        <li><a class="dropdown-item" href="#">Contact Us</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>
        `
    }
}
customElements.define('special-nav', SpecialNav)