<template>
    <div>
        <section class="profile_area">
            <div class="container">
                <div class="profile">
                    <div class="profile_image">
                        <img src="images.png" alt="Profile Image">
                    </div>
                    <div class="profile_info">
                        <div class="profile_info--top">
                            <!-- Profile Info Top -->
                        </div>
                        <div class="profile_info--center">
                            <span><span></span><strong> 3</strong><br> Posts
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span></span>
                            <span><span></span><strong>| 0</strong><br>
                                Followers&nbsp;&nbsp;&nbsp;&nbsp;</span><span></span>
                            <span><strong> | 0</strong><br> Following&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </div>
                        <div class="profile_info--bottom">
                            <strong>Username</strong>
                            <br>
                            <p>Bio</p>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="tabs_area">
            <div class="container">
                <div class="tabs">
                    <div @click="switchTab('tb_1')" :class="{ 'tab-item': true, 'active': activeTab === 'tb_1' }">
                        <i class="fas fa-th"></i>
                    </div>
                    <div @click="switchTab('tb_3')" :class="{ 'tab-item': true, 'active': activeTab === 'tb_3' }">
                        <i class="far fa-bookmark"></i>
                    </div>
                    <div @click="switchTab('tb_4')" :class="{ 'tab-item': true, 'active': activeTab === 'tb_4' }">
                        <i class="fa-regular fa-heart"></i>
                    </div>
                </div>

                <div class="tabs_content">
                    <!-- Tabs Content -->
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'ProfileComponent',
    data() {
        return {
            activeTab: 'tb_1'
        };
    },
    methods: {
        switchTab(tab) {
            this.activeTab = tab;
        }
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700');

body,
html {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
}

.container {
    max-width: 940px;
    width: 100%;
    margin: 2em auto;
}

.profile_image {
    margin: 3em;
}

.profile_image img {
    border-radius: 50%;
}

.profile {
    display: flex;
    justify-content: center;
}

.profile_info {
    margin-top: 2em;
}

.profile_info--top {
    display: flex;
    max-width: 300px;
    justify-content: space-between;
    align-items: center;
}

.profile_info--top h1 {
    font-weight: 300;
}

.profile_info--top a.edit {
    font-weight: 700;
    text-decoration: none;
    color: #333;
    padding: .5em 1em;
    border: 1px solid #e4e4e4;
    background: transparent;
    border-radius: 4px;
    cursor: pointer;
}

.profile_info--top a.gear {
    color: #333;
}

.profile_info--center {
    display: flex;
    max-width: 400px;
    justify-content: space-between;
}

.profile_info--bottom {
    margin-top: 2em;
    max-width: 400px;
    margin-bottom: 1em;
}

.profile_info--bottom a {
    color: #003569;
    text-decoration: none;
}

.tabs {
    max-width: 960px;
    display: flex;
    justify-content: space-evenly;
    position: relative;
    margin: 0 auto;
}

.tabs:before {
    content: "";
    position: absolute;
    width: 100%;
    top: 16px;
    border-top: 1px solid #e4e4e4;
}

.tab-item {
    border-top: 1px solid transparent;
    margin-top: 1em;
    padding-top: 10px;
    cursor: pointer;
}

.active {
    border-top: 1px solid #000;
    padding-top: 10px;
    z-index: 1;
    font-weight: bold;
}

.gallery_grid {
    margin: 1em 0;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-template-rows: repeat(3, 300px);
    grid-gap: 1.5em;
    justify-content: center;
    align-content: center;
}

.grid-img img {
    width: 100%;
    height: 100%;
}

.grid-img {
    position: relative;
    cursor: pointer;
}

.grid-img:hover:after {
    top: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
}

.grid-img:hover .grid-img-icon {
    display: block;
}

.grid-img-icon {
    top: 50%;
    left: 50%;
    z-index: 99;
    display: none;
    transform: translate(-50%, -50%);
    position: absolute;
}

.grid-img-icon span {
    color: #fff;
    margin: 0 .5em;
}

.tb_2 {
    margin-top: 3em;
    text-align: center;
    display: none;
}

.tb_2 i {
    padding: .8em;
    border: 2px solid #000;
    border-radius: 50%;
    font-size: 2em;
}

.tb_2 .tb_2_btn {
    margin-top: 1em;
    display: inline-block;
    border-radius: 5px;
    padding: .8em 1.5em;
    text-decoration: none;
    color: #fff;
    background: #3897f0;
}

.tb_3 {
    display: none;
    margin-top: 3em;
    font-size: .9em;
    color: #999;
}

.tb_4 {
    display: none;
    margin-top: 3em;
    font-size: .9em;
    color: #999;
}

@media (max-width: 480px) {
    .gallery_grid {
        grid-template-rows: repeat(9, 300px);
        ;
    }

    .profile {
        flex-direction: column;
        text-align: center;
    }

    .profile_info {
        margin-top: 0;
    }
}
</style>