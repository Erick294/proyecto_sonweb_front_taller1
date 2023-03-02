<template>
  <nav class="imagenes">
    <img src="../assets/img/productos/cabecera.jpeg" alt="producto cabecera">
  </nav>

  <div class="cabecera">
    <h3>Encuentra tus productos de maquillaje favoritos</h3>
    <h5>Maquillaje para inspirarte</h5>
    <button v-on:click="this.$router.push('login')">COMPRAR AHORA</button>
  </div>

  <div class="categorias">
    <h3>Categorías</h3>
    <img v-on:click="this.$router.push('cuidado_corporal')" src="../assets/img/productos/cuidado_corporal.jpg" alt="cuidado corporal">
    <img v-on:click="this.$router.push('cuidado_facial')" src="../assets/img/productos/cuidado_facial.jpg" alt="cuidado facial">
    <img v-on:click="this.$router.push('maquillaje')" src="../assets/img/productos/maquillaje.jpg" alt="maquillaje">

    <section id="primera">
        <h5>Cuidado corporal</h5>
        <h5>Cuidado facial</h5>
        <h5>Maquillaje</h5>
    </section>
    
    <img v-on:click="this.$router.push('fragancias')" src="../assets/img/productos/fragancias.jpg" alt="fragancias">
    <img v-on:click="this.$router.push('otros')" src="../assets/img/productos/otros.jpg" alt="otros">

    <section id="segunda">
        <h5>Fragancias</h5>
        <h5>Otros</h5>
    </section>
  </div>

  <h2 id="slogan">Con amor y pasión nuestra belleza interna resplandece</h2>

  <div class="destacados">

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

    .imagenes{
        margin-top: 10px;
    }
    .imagenes img{
        max-width: 250px;
        position:absolute;
        margin-left: 830px;
    }

    .cabecera{
        margin-top: 150px;
        font-family:'Playfair Display', bold, black;
        font-size: 18px;
        margin-left: 260px;
    }

    .cabecera h3{
        padding-bottom: 5px;
    }

    .cabecera h5{
        opacity: 75%;
        padding-bottom: 30px;
    }

    .cabecera button{
        background-color: #F25781;
        color: white;
        font-size: 12px;
        padding: 12px;
    }

    .categorias{
        width: 800px;
        margin-left: 260px;
        justify-content: center;
        text-align: center;
        align-content: center;
        margin-top: 150px;
        font-family:'Playfair Display', bold, black;
        font-size: 18px;
    }

    .categorias img{
        max-width: 200px;
        justify-content: center;
        margin: 25px;
    }

    .categorias section{
        display:flex;
    }

    .categorias #primera h5{
        margin-left: 105px;
        margin-right: 20px;
    }

    .categorias #segunda h5{
        margin-left: 240px;
        margin-right: -50px;
    }

    #slogan{
        margin-top: 100px;
        font-family:'Playfair Display', bold, black;
        font-size: 36px;
        justify-content: center;
        text-align: center;
        margin-left: -10px;
    }

</style>