<template>
	<div>
		<h2>게시글 목록</h2>
		<hr class="my-4" />
		<form @submit.prevent>
			<div class="row g-3">
				<div class="col">
					<!-- <input
						v-model="params._title_like"
						type="text"
						class="form-control"
					/> -->
				</div>
				<div class="col-3">
					<select v-model="params._limit" class="form-select">
						<option value="3">3개 보기</option>
						<option value="6">6개 보기</option>
						<option value="9">9개 보기</option>
					</select>
				</div>
			</div>
		</form>
		<hr class="my-4" />
		<!-- list : row 가로 정렬 -->
		<div class="row g-3">
			<div v-for="post in posts" :key="post.id" class="col-4">
				<PostItem
					:title="post.title"
					:content="post.content"
					:create-at="post.createAt"
					@click="goPage(post.id)"
				></PostItem>
			</div>
		</div>
		<!-- list -->

		<!-- 페이지네이션 -->
		<nav
			class="mt-4 d-flex justify-content-center"
			aria-label="Page navigation example"
		>
			<ul class="pagination">
				<li class="page-item" :class="{ disabled: params._page <= 1 }">
					<a
						class="page-link"
						href="#"
						aria-label="Previous"
						@click.prevent="--params._page"
					>
						<span aria-hidden="true">&laquo;</span>
					</a>
				</li>
				<li v-for="pageNum in pageCount" :key="pageNum" class="page-item">
					<a class="page-link" href="#" @click.prevent="params._page = pageNum">
						{{ pageNum }}</a
					>
				</li>

				<li class="page-item" :class="{ disabled: params._page >= pageCount }">
					<a
						class="page-link"
						href="#"
						aria-label="Next"
						@click.prevent="++params._page"
					>
						<span aria-hidden="true">&raquo;</span>
					</a>
				</li>
			</ul>
		</nav>

		<hr class="my-4" />

		<AppCard v-if="posts.length > 0">
			<PostDetailView :id="posts[0].id" />
		</AppCard>
		<!-- <router-view></router-view> -->
		<!-- <PostDetailView></PostDetailView> -->
	</div>
</template>

<script setup>
import PostItem from "@/components/posts/PostItem.vue";
import PostDetailView from "./PostDetailView.vue";
import AppCard from "@/components/AppCard.vue";

import { computed, ref, watchEffect } from "vue";
import { getPosts } from "@/api/posts";
import { useRouter } from "vue-router";

const router = useRouter();
const posts = ref([]);
const params = ref({
	_sort: "createAt",
	_order: "desc",
	_page: 1,
	_limit: 3,
	// _title_like: "",
});

// 페이지네이션 데이터
const totalCount = ref(0);
const pageCount = computed(() =>
	Math.ceil(totalCount.value / params.value._limit),
);

const fetchPosts = async () => {
	try {
		const { data, headers } = await getPosts(params.value);
		console.log("params.value", params.value);
		console.log("결과:", data);
		posts.value = data;
		// console.log("posts.value", posts.value);
		totalCount.value = headers["x-total-count"];
	} catch (err) {
		console.log("err", err);
	}
	// getPosts()
	// 	.then(res => {
	// 		console.log("res", res);
	// 	})
	// 	.catch(err => {
	// 		console.log("err", err);
	// 	});
};

watchEffect(fetchPosts);
// fetchPosts();

const goPage = id => {
	// router.push(`posts/${id}`);
	router.push({
		name: "PostDetail",
		params: {
			id,
		},
	});
};
</script>

<style lang="scss" scoped></style>
