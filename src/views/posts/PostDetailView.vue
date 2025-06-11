<template>
	<div>
		<h2>제목</h2>
		<p>내용</p>
		<p class="text-muted">2020-01-01</p>
		<hr class="my-4" />
		<div class="row g-2">
			<div class="col-auto">
				<button class="btn btn-outline-dark" @click="prePost">이전글</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-dark" @click="nextPost">다음글</button>
			</div>
			<div class="col-auto me-auto"></div>
			<div class="col-auto">
				<button class="btn btn-outline-dark" @click="goPostListPage">
					목록
				</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-primary" @click="postEditPage">
					수정
				</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-danger" @click="postDelete">삭제</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const id = route.params.id;

// 목록이동
const goPostListPage = () => {
	router.push({
		name: "PostList",
	});
};

// 게시글 수정
const postEditPage = () => {
	router.push({
		name: "PostEdit",
		params: { id: id },
	});
};
</script>

<style lang="scss" scoped></style>
