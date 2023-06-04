<template>
   
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="main-text mt-5">
                        <p class="text-main"> Get started your <br>
                            exciting <span style="color:#f56606 ;">journey</span> <br>
                            with us.
                        </p>
                        <p class="text">
                            A Team of experienced tourism professionalss will <br>
                            provide you with the best advice and tips for your 
                            desire place.
                        </p>
                        <p class="text button" style="color: #f56606;">
                            Discover Now
                        </p>
                    </div>
                </div>
                <div class="col mt-3">
                    <div style="margin-left: 1rem; border-radius: 50%; padding: 1rem; background-image: linear-gradient(to top, #f56606 50%, #f5f2f2 50%, #f5f2f2 21%, #f5f2f2 52%, #f5f2f2 78%, #f5f2f2 100%);margin-right: 5rem; width:43%; ;">
                        <img src="../assets/tourist.png" alt="" class="img-main" style="justify-content: center;">
                            <div class="posision">
                                <p class="labels d-flex float-xl-start;" style="font-weight: bold;">
                                    <img src="../assets/thropy.png" alt="" style="width: 40px; margin-right: 1rem; ">
                                    Bets Tour<br>
                                    Awars
                                </p>
                                <p class="labels d-flex float-xl-start;" style="font-weight: bold;margin-left: 25rem;">
                                    <img src="../assets/googlemaps.png" alt="" style="width: 40px; margin-right: 1rem; ">
                                    Bets Tour<br>
                                    Awars
                                </p>
                                <p class="labels d-flex float-xl-start;"
                                    style="font-weight: bold; margin-top: 5rem;margin-left: 2.5rem; ">
                                    <img src="../assets/starbg.png" alt="" style="width: 40px; margin-right: 1rem; ">
                                    27k<br>
                                    <span
                                        style="font-size: small; font-weight: 100; margin-left: -1.8rem; margin-top: .3rem;">
                                        <br> Customer Reviewd
                                    </span>
                                </p>
                            </div>
                    </div>
                </div>



                <div class="col contenedor-menu-inferior">
                        <div class="col">
                            <p><span>Location
                            <svg style="color: #f56606" fill="none" stroke="currentColor"  width="15"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                            </svg>
                            </span><br>Where are you going</p>
                        </div>
                        
                        <div class="col">
                            <p><span>Date
                            <svg style="color: #f56606" fill="none" stroke="currentColor"  width="15"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                            </svg>
                            </span><br>When you will go</p>
                        </div>
                        
                        <div class="col">
                            <p><span>Guest
                            <svg style="color: #f56606" fill="none" stroke="currentColor"  width="15"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                            </svg>
                            </span><br>Number of guest</p>
                        </div>
                        <button class="boton2">Explore Now</button>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: "MainPage",
    data() {},
};
</script>

<style>
body{
    
    background: #fafaf8;

}
.text-main {
    font-weight: bold;
    font-size: 3.2rem;
    color: #000000;
}

.text{
    line-height: 2.5rem;
    color:  gray;
    text-align: left;
    font-size: 1rem;
}

.button{
    margin-top: 4rem;
    width: max-content;
    text-align: center;
    padding: .5rem 1.5rem ;
    border: solid 1.5px #f56606;
    border-radius: 5px;
}

.posision{
    margin-top: -400px;
    margin-left: -40px;
}

.labels {
    background-color: white;
    padding: .5rem 1.5rem ;
    width: max-content;
    border-radius: 5px;
    position: relative;
    box-shadow: 0 0 5px 1px  #dddcdc;
}



.contenedor-menu-inferior{
    margin: 5rem 12rem 6rem 6rem;
    display: flex;
    justify-content: space-between;
    
    float: right;
    
    width: 70%;
    height: 8rem;
    background: rgb(255, 255, 255);
    border: solid none ;
    border-radius: 5px;
    padding: 0 2rem 0 2rem;
    
    
  
    

}

.contenedor-menu-inferior p,
.contenedor-menu-inferior button{
    margin-top: calc(4rem - 1.5rem);
    
}

.boton2{
    width: 9rem;
    height: 3rem;
    
    text-align: center;
    align-items: center;
    background: #f56606;
    border-radius: 5px;
    border: none;
    text-align: center;
    color: white;
    
}
</style>