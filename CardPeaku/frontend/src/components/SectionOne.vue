<template>
    <div class="fondo">
    <div class="container" style="padding-bottom: 5rem;">
        <div class="row">
            
            <div style="width:100%">
                <p class="text-main2"> Things you need 
                    <span style="color:#f56606 ;">&nbsp; to do</span> 
                </p>
                <p style="color: #555252; text-align: center; width: 100%;">
                    we ensure that you'll emback on a perfectly planned,<br> safe vacation at a price you can afford.
                </p>
            </div>
            <div class="row cards d-flex">
                <div class="col">
                    <div class="card" style="width: 18rem; ">
                        <div class="card-body">
                            <div>
                                <img class="ico_card" src="../assets/1.png" alt="">
                            </div>
                            <h5 class="card-title"></h5>
                            <p class="card-text">Completes all the work associated with planning and processing. </p>
                        </div>
                    </div>
                </div>
                        
                <div class="col">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <div>
                                <img class="ico_card" src="../assets/2.png" alt="">
                            </div>
                            <h5 class="card-title">Worth Of Money</h5>
                            <p class="card-text">After successful access the book from exclusive deals & pricing.</p>
                        </div>
                    </div>
                </div>
                        
                <div class="col">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <div>
                                <img class="ico_card" src="../assets/3.png" alt="">
                                
                            </div>
                            <h5 class="card-title">Exciting Travel</h5>
                            <p class="card-text">Start and explore a wide range of exciting travel experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: "SectionOne",
    
    
    
}
</script>

<style>
.fondo{
    background-color: rgb(240, 242, 244) !important;
    height: auto;
}
.text-main2 {
    display: flex;
  align-items: center;
  justify-content: center;
 
    margin-top: 3rem;
    font-size: 2.5em;
    font-weight: bold;
    font-size: 3.2rem;
    color: #000000;
}

 .cards{
    justify-content: center;
    margin-top: 3rem;
}

 .card{
    margin: 2rem;
    height: 80%;
    
 }

 .col{
    margin-top: 3rem;
 }
 
 .card-title{
    margin: 2rem 0 0 1rem;
}

.card-text{
    margin: 1rem 0 0 1rem;
    font-size: .9em;
    padding-bottom: 1rem;
}

.img-card{
    border-radius: 10px;
}

.card-ico{
    width: 1rem;
    height: 1rem;
    float: right;
    padding-top: .3rem;
    margin-right: 2rem;
}
</style>
