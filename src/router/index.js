import {
	createRouter,
	createWebHashHistory,
	// createWebHistory,
} from "vue-router";

import AboutView from "@/views/AboutView.vue";
import HomeView from "@/views/HomeView.vue";
import PostCreateView from "@/views/posts/PostCreateView.vue";
import PostDetailView from "@/views/posts/PostDetailView.vue";
import PostEditView from "@/views/posts/PostEditView.vue";
import PostListView from "@/views/posts/PostListView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import NestedView from "@/views/nasted/NestedView.vue";

import NestedOneView from "@/views/nasted/NestedOneView.vue";

import NestedTwoView from "@/views/nasted/NestedTwoView.vue";
import NestedHomeView from "@/views/nasted/NestedHomeView.vue";
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
		// 라우트 파라미터를 컴포넌트의 props로 전달하는 방법
		// 1. props: true
		// route.params가 그대로 props로 전달됨
		// 항상 문자열(string)로 전달됨 (타입 변환 불가)
		props: true,

		// 2. props: route => ({ ... })  객체 형태로 설정
		// 가공한 값(예: 숫자형으로 변환된 id)을 props로 전달 가능
		// props: route => ({
		// 문자열 형태로 전달되므로 숫자형으로 변환
		// id: parseInt(route.params.id),
		// }),
	},
	{
		path: "/posts/:id/edit",
		name: "PostEdit",
		component: PostEditView,
	},
	{
		path: "/nested",
		name: "Nested",
		component: NestedView,
		// 중첩 라우트 설정
		// 중첩 라우트는 부모 컴포넌트에 <router-view>를 추가
		children: [
			{
				path: "", // 빈 문자열은 부모 경로와 동일
				name: "NestedHone",
				component: NestedHomeView,
			},
			{
				// /nested/one
				// path에 /를 붙이면 절대 경로가 되므로 붙이기 x
				path: "one",
				name: "NestedOne",
				component: NestedOneView,
			},
			{
				path: "two",
				name: "NestedTwo",
				component: NestedTwoView,
			},
		],
	},
	{ path: "/:pathMatch(.*)*", name: "NotFound", component: NotFoundView },
];

// 히스토리 모드로  배포시 서버에 추가 설정이 필요함.
// 해시 없이 실제 URL처럼 보이게 하지만, 서버는 해당 경로에 실제 파일이 없으면 404를 반환합니다. SPA의 `index.html`을 항상 반환하도록 설정해야 합니다.

// 해시 모드로 배포시 서버 설정이 필요없음. 치명적인 단점은 URL에 #이 붙음
const router = createRouter({
	// history: createWebHistory(), // 히스토리 모드
	history: createWebHashHistory(), // 해시 모드 사용
	routes,
});

export default router;
