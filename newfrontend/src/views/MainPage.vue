<template>
    <div class="container-head">
        <div class="header">
            <div class="profile-links">
                <!-- Profile and Edit Profile links -->
                <router-link to="/profile"><h2>Profile</h2></router-link>
                <router-link to="/editprofile"><h2>Edit Profile</h2></router-link>
            </div>
            <div class="tabs">
                <div class="tab" :class="{ active: activeTab === 'forYou' }" @click="switchTab('forYou')">
                    <h1>For You</h1>
                </div>
                <div class="tab" :class="{ active: activeTab === 'followingTab' }" @click="switchTab('followingTab')">
                    <h1>Following</h1>
                </div>
            </div>
        </div>
        <div class="category">
            <button class="btncategory">All</button>
            <button class="btncategory">Beauty</button>
            <button class="btncategory">Fashion</button>
            <button class="btncategory">Skincare</button>
            <button class="btncategory">Food</button>
            <button class="btncategory">Health</button>
        </div>
        <router-link to="/postblog"><button class="post-button">Create Blog</button></router-link>
        <div class="container">
            <div v-for="(card, index) in cardData" :key="index" class="card">
                <img :src="card.imageUrl" alt="Card Image" />
                <div class="card-content">
                    <p>{{ card.caption }}</p>
                    <i class="fas fa-heart"></i>
                    <i class="fas fa-bookmark"></i>
                    <p>{{ card.read }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'; // Import ref from Vue

export default {
    name: "MainPage",
    setup() {
        // Define reactive variables using ref
        const activeTab = ref('forYou');
        const cardData = ref([
            { imageUrl: 'https://forfundeal.com/wp-content/uploads/2022/08/%E0%B8%A1%E0%B8%B5%E0%B8%A1%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%84%E0%B8%AB%E0%B9%89-%E0%B9%81%E0%B8%A1%E0%B8%A7%E0%B8%82%E0%B8%B2%E0%B8%A7%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%84%E0%B8%AB%E0%B9%89.jpg', caption: 'Hello', read: 'Read more...' },
            { imageUrl: 'https://forfundeal.com/wp-content/uploads/2022/08/%E0%B8%A1%E0%B8%B5%E0%B8%A1%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%84%E0%B8%AB%E0%B9%89-%E0%B9%81%E0%B8%A1%E0%B8%A7%E0%B8%82%E0%B8%B2%E0%B8%A7%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%84%E0%B8%AB%E0%B9%89.jpg', caption: 'Hello', read: 'Read more...' },
            { imageUrl: 'https://forfundeal.com/wp-content/uploads/2022/08/%E0%B8%A1%E0%B8%B5%E0%B8%A1%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%84%E0%B8%AB%E0%B9%89-%E0%B9%81%E0%B8%A1%E0%B8%A7%E0%B8%82%E0%B8%B2%E0%B8%A7%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%84%E0%B8%AB%E0%B9%89.jpg', caption: 'Hello', read: 'Read more...' },
        ]);

        // Define switchTab function
        const switchTab = (tab) => {
            activeTab.value = tab;
        };

        // Return variables and functions to be used in the template
        return {
            activeTab,
            cardData,
            switchTab
        };
    }
};
</script>

<style scoped>
.container-head {
    padding: 0;
    margin: 0;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ded1a0;
    padding: 10px 20px;
}

.profile-links {
    display: flex;
}

.header h1 {
    color: white;
}
.header h2 {
    color: white;
}

.profile-links a {
    margin-right: 20px;
    text-decoration: none;
    color: #000;
    /* Adjust color as needed */
}
.tabs {
  display: flex;
}
.tab {
    cursor: pointer;
    padding: 10px;
    border-bottom: 2px solid transparent;
    /* Initial border color */
}

.tab:hover {
    border-bottom: 2px solid #000;
    /* Change border color on hover */
}

.tab.active {
    border-bottom: 2px solid #000;
    /* Border color for active tab */
}

body,
h1 {
    margin: 0;
    padding: 0;
}

.category {
    display: flex;
    background-color: rgb(203, 201, 201);
    justify-items: center;
    text-align: center;
    justify-content: center;
    padding: 10px;
}

.btncategory {
    background-color: rgb(203, 201, 201);
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 14px;
    border-radius: 0.1px;
    cursor: pointer;
    padding: 8px 16px;
    margin: 0 5px;
}

.btncategory:hover {
    background-color: rgb(161, 158, 158);
}

button:active {
    transform: scale(0.95);
    color: rgb(161, 158, 158);
}

/*card*/
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

.container {
    display: flex;
    justify-content: space-around;
    text-align: center;

}

.card {
    width: 20%;
    margin: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card img {
    width: 100%;
    height: auto;
}

.card-content {
    padding: 16px;
}

.card-content p {
    margin: 8px 0;
    font-size: 20px;
}

.card i {
    margin: 8px 0;
}

.post-button {
    margin: 10px;
    border-radius: 20px;
    border: 1px solid #ded1a0;
    background-color: #ded1a0;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
}
</style>
