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
            </ul>
        </div>
        
        <div class="mx-4">
        <button class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#LoginModal">Login</button>
        <button class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#SignupModal">Signup</button>
        </div>
        
    </div>
</nav>
        <!-- modal -->

    <!-- LoginModal -->
    <div class="modal fade" id="LoginModal" tabindex="-1" aria-labelledby="LoginModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="LoginModalLabel">Login to SNS</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-2">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp">
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>

                        <label for="inputPassword5" class="form-label">Password</label>
                        <input type="password" id="inputPassword5" class="form-control"
                            aria-describedby="passwordHelpBlock">
                        <div id="passwordHelpBlock" class="form-text">
                            Your password must be 8-20 characters long.
                        </div>
                        <br>
                        <div class="mb-2">
                            <label for="exampleInputFname" class="form-label"><a href="#">Forgot Password?</a></label>
                        </div>
                        <button type="submit" class="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- SignupModal -->
    <div class="modal fade" id="SignupModal" tabindex="-1" aria-labelledby="SignupModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="SignupModalLabel">Become a member of
                        SNS FITNESS</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-2">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp">
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-2">
                            <label for="exampleInputFname" class="form-label">Username</label>
                            <input type="text" class="form-control" id="exampleInputUname" aria-describedby="UnameHelp">
                            <div id="UnameHelp" class="form-text"></div>
                        </div>

                        <label for="inputPassword5" class="form-label">Password</label>
                        <input type="password" id="inputPassword5" class="form-control"
                            aria-describedby="passwordHelpBlock">
                        <div id="passwordHelpBlock" class="form-text">
                            Your password must be 8-20 characters long.
                        </div>
                        <br>
                        <div class="mb-2 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">I accept the Terms and
                                Insurance.</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Signup</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- END OF MODAL -->
        `
    }
}
customElements.define('special-nav', SpecialNav)