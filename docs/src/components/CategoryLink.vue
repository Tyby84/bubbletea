<template>
    <div class="cat-link">
      <img class="cat-link__img" alt="Vue logo" src="../assets/logo.png">
       <p class="cat-link__desc">{{name}}</p>
    </div>
</template>

<script>
export default {
    props: ['name']

}
</script>

<style>

body{
  background-color: rgb(67, 111, 179);
}
  .cat-link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 1rem;
    height: 100px;
    width: 250px;
    border: 3px solid rgb(190, 190, 190);
    background-color: rgba(34, 34, 34, 1);
    color: #eee;
    border-radius: 2rem;
    transition: all .5s ease-in-out;
    cursor: pointer;
  }
  .cat-link:hover {
    width: 270px;
    
  }
  .cat-link__img{
    width: 5rem;
    height: 5rem;
  }
  .cat-link__desc{
    font-size: 1.7rem;
    text-align: left;
  }
</style>
