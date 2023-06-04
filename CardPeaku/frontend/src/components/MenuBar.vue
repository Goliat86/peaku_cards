<template>
<div class="bg">
    <div class="container">
        <div class="row">
            <div class="w-100">
                <b-navbar toggleable="lg" type="dark" variant="info">
                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                        <b-collapse id="nav-collapse" is-nav>
                            <b-navbar-nav style="margin-top:3rem">
                                <div><img src="../assets/logo2.png" alt="" class="logoP"></div>
                                <b-nav-item href="#" style="margin-left:12rem">Home</b-nav-item>
                                <b-nav-item href="#">About</b-nav-item>
                                <b-nav-item href="#">Destination</b-nav-item>
                                <b-nav-item href="#">Tour</b-nav-item>
                                <b-nav-item href="#">Blog</b-nav-item>
                                <b-nav-item href="#" class="login">Login</b-nav-item>
                                <div>
                                    <b-button class="buttonP">Signup</b-button>
                                </div>
                            </b-navbar-nav>
                        </b-collapse>
                </b-navbar>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "NavBar",
    data() {},
};
</script>

<style>

.bg{
    background: #fafaf8;
}

nav.navbar.navbar-dark.bg-info.navbar-expand-lg {
    background-color: transparent !important;
}

span.navbar-toggler-icon {
    border-radius: 5%;
    background: rgb(38, 41, 40);
}

.navbar-dark .navbar-toggler {
    border-color: rgb(73, 74, 74);
}

.logoP {
    margin-left: 0.5rem;
    width: 8rem;
    height: 1.5rem;
}

.login a.nav-link {
    margin-left: 7rem;
    color: #f56606 !important;
}

a.nav-link {
    color: black !important;
    font-weight: bold;
}

.buttonP{
    margin-left: 3rem;
    padding: .5rem 1.5rem;
    background: #f56606;
    border: none;
    box-shadow: 0 0 5px 1px  #f56606;
}
</style>