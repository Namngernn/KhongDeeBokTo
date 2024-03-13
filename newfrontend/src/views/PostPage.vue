<template>
    <div>
      <header>
        <div class="header">
          <button @click="goBack">&lt;</button>
          <h1>Post Blog</h1>
        </div>
      </header>
      <div class="container" id="container">
        <div class="textfeild" id="feild">
          <input type="file" id="imageInput" name="image" accept="image/*" />
          <form enctype="multipart/form-data" method="post" @submit.prevent="submitForm">
            <input type="text" class="head" placeholder="หัวข้อเรื่อง" />
            <input type="text" class="bodytext" placeholder="เนื้อหา" />
            <div class="textfeild" id="selectcat">
              <h5>Categories:</h5>
              <button class="btnselect">Beauty</button>
              <button class="btnselect">Fashion</button>
              <button class="btnselect">Skincare</button>
              <button class="btnselect">Food</button>
              <button class="btnselect">Health</button>
            </div>
          </form>
        </div>
        <div class="btn">
          <router-link to="/main"><button class="btnpost" @click="submitForm">Post</button></router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      submitForm() {
        // Perform form submission here
      },
      goBack() {
        window.history.back();
      }
    }
  };
  </script>
  
  <style scoped>
  body {
    margin: 0;
    background-color: #dfdac4;
    padding: 0;
  }
  .header {
    margin: 0;
    background-color: #7a6e3f;
    color: white;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header h1 {
    margin: 0;
    padding: 5px;
    font-size: 24px;
  }
  .header button {
    border: none;
    background-color: transparent;
    color: white;
    font-size: 18px;
    cursor: pointer;
  }
  .header button:active {
    transform: scale(0.95);
  }
  .header button:focus {
    outline: none;
  }
  p,
  h3 {
    margin: 0;
    width: 5px;
  }
  button {
    border-radius: 20px;
    border: 1px solid #7a6e3f;
    background-color: #7a6e3f;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
  }
  button:active {
    transform: scale(0.95);
  }
  button:focus {
    outline: none;
  }
  form {
    background-color: #dfdac4;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
  }
  .textfeild {
    display: flex;
    justify-content: center;
    padding: 10px;
    margin: 10px;
    background-color: #dfdac4;
  }
  .btn {
    text-align: right;
    padding: 0 50px;
  }
  .head,
  .bodytext {
    height: 50px;
    width: 500px;
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    width: 100%;
    margin-bottom: 10px;
  }
  .btnselect {
    border-radius: 10px;
    border: 1px solid #c1ae61;
    background-color: #c1ae61;
    color: #ffffff;
    font-size: 10px;
    font-weight: bold;
    padding: 3px 3px;
    margin: 10px 5px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
  }
  header {
    background-color: #c1ae61;
    padding: 0;
    margin: 0;
  }
  </style>
  