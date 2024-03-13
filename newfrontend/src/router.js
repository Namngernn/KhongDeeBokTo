// router.js
import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import Index from './views/IndexPage.vue';
import Main from './views/MainPage.vue';
import PostPage from './views/PostPage.vue';
import EditProfile from './views/EditProfile.vue';
import Profile from './views/ProfilePage.vue';

const routes = [
  { path: '/', component: Index },
  { path: '/main', component: Main },
  { path: '/postblog', component: PostPage },
  { path: '/profile', component: Profile },
  { path: '/editprofile', component: EditProfile },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
