<template>
    <div class="container">
      <div class="container_content"></div>
      <div class="container_side">
        <div><img src="../assets/8b6c96fe1895415ead46fb5bbffc33e3~tplv-p14lwwcsbr-7.jpeg" alt=""></div>
      </div>
        
    </div>
</template>
<style lang="scss" scope>
.container{
    display: flex;
    justify-content: center;
    height: 2000px;
    margin-top: 20px;
    margin-bottom:20px ;
}
.container_content{
    width: 800px;
    opacity: 0.8;
    background-color:#fff;
    border-radius:5px ;
}
.container_side{
    border-radius:5px ;

    height: 200px;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    position: sticky;
    transition: all 2s;
    top: 60px;
}
img{
    width: 300px;
}

    .container {
       padding: 0 30px;
    }
    
</style>