import { createRouter, createWebHistory } from "vue-router";

import AboutView from "@/views/AboutView.vue";
import HomeView from "@/views/HomeView.vue";
import PostCreateView from "@/views/posts/PostCreateView.vue";
import PostDetailView from "@/views/posts/PostDetailView.vue";
import PostEditView from "@/views/posts/PostEditView.vue";
import PostListView from "@/views/posts/PostListView.vue";

const routes = [
	{
		path: "/",
		name: "Home", // 이름이 있는 라우터 설정
		component: HomeView,
	},
	{
		path: "/about",
		name: "About",
		component: AboutView,
	},
	{
		path: "/posts",
		name: "PostList",
		component: PostListView,
	},
	{
		path: "/posts/create",
		name: "PostCreate",
		component: PostCreateView,
	},
	// 동적 라우팅
	// 동일한 페이지를 렝더링 하고 싶다면 ? // 동일한 경로 동일 작성/ :달라지는 것 세미콜론
	// 동일 라우트 경로/:파라미터

	// 쿼리 또는 hash는 라우터 설정하지 않는다.
	{
		path: "/posts/:id",
		name: "PostDetail",
		component: PostDetailView,
	},
	{
		path: "/posts/:id/edit",
		name: "PostEdit",
		component: PostEditView,
	},
];

const router = createRouter({
	history: createWebHistory("/"),
	routes,
});

export default router;
