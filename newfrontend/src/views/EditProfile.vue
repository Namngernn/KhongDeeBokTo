<template>
    <div>
        <div id="topnavbar">
            <h1>Edit Profile</h1>
        </div>
        <!-- Add padding top to the content to prevent overlap with fixed navbar -->
        <div class="content" style="padding-top: 60px;">
            <div class="name">
                <p>Name</p>
                <input type="text" v-model="name" placeholder="Update your name">
            </div>
            <div class="username">
                <p>Username</p>
                <input type="text" v-model="username" placeholder="Update your username">
            </div>
            <div class="password">
                <p>Password</p>
                <input type="password" v-model="password" placeholder="(Update your password)">
                <span class="eye">
                    <i @click="togglePasswordVisibility" :class="[showPassword ? 'fa fa-eye' : 'fa fa-eye-slash']"></i>
                </span>
            </div>
            <div class="birthday">
                <p>Date of Birth</p>
                <input type="date" v-model="birthday">
            </div>
            <router-link to="/main"><button @click="submitForm" class="confirm-btn">Confirm</button></router-link>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            name: '',
            username: '',
            password: '',
            showPassword: false,
            birthday: ''
        };
    },
    methods: {
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
        },
        submitForm() {
            // Handle form submission logic here
        }
    }
};
</script>

<style scoped>
body {
    background-color: powderblue;
    margin: 0;
    /* Add margin 0 to body to remove default margin */
}

#topnavbar {
    background-color: #ded1a0;

    top: 0;
    left: 0;
    right: 0;
    font-family: serif;
    font-size: 16px;
    /* Increase font size for better visibility */
    text-align: center;
    padding: 10px 0;
    /* Add padding for better spacing */
}

.name,
.username,
.password,
.birthday {
    margin: 20px auto;
    /* Center the form sections horizontally and add margin */
    max-width: 400px;
    /* Limit width for better responsiveness */
}

.name input,
.username input,
.password input,
.birthday input {
    width: 100%;
    /* Make inputs fill their container */
    height: 40px;
    /* Adjust height for better usability */
    border-radius: 7px;
    border: solid 1px #ded1a0;
    padding-left: 15px;
    font-size: 16px;
    outline: none;
    box-sizing: border-box;
    /* Include padding and border in the width */
}

p {
    font-family: Verdana;
    padding-left: 7px;
    margin-bottom: 5px;
    /* Add margin bottom for better separation */
}

.fa {
    margin-right: 10px;
}

.eye {
    position: absolute;
    right: 15px;
    /* Position the eye icon to the right */
    top: 50%;
    /* Center vertically */
    transform: translateY(-50%);
}

.confirm-btn {
    background-color: #ded1a0;
    color: white;
    border-radius: 5px;
    margin: 20px auto;
    /* Center the button horizontally and add margin */
    display: block;
    /* Make button a block element for full width */
    font-size: 18px;
    text-align: center;
    padding: 10px 20px;
    /* Add padding for better clickable area */
    border: none;
    /* Remove border */
    cursor: pointer;
    transition-duration: 0.4s;
    text-decoration: none;
    /* Remove underline */
}

.confirm-btn:hover {
    background-color: white;
    color: #ded1a0;
}
</style>