<template>
	<div>
		<h2>게시글 등록</h2>
		<hr class="my-4" />
		<form @submit.prevent="savePost">
			<div class="mb-3">
				<label for="title" class="form-label">제목</label>
				<input
					v-model="form.title"
					type="text"
					class="form-control"
					id="title"
				/>
			</div>
			<div class="mb-3">
				<label for="content" class="form-label">내용</label>
				<textarea
					v-model="form.content"
					class="form-control"
					id="content"
					rows="3"
				></textarea>
			</div>
			<div class="pt-4">
				<button
					type="button"
					class="btn btn-outline-dark me-2"
					@click="goPostListPage"
				>
					목록
				</button>
				<button type="button" class="btn btn-primary" @click="goPostListPage">
					저장
				</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { createPost } from "@/api/posts";
import { ref } from "vue";

const router = useRouter();

const form = ref({
	id: 0,
	title: "",
	content: "",
	createAt: Date.now(),
});

const savePost = () => {
	try {
		// const data = { ...form.value, createAt: Date.now() };
		createPost({ ...form.value });
		// console.log("savePost data", data);
	} catch (err) {
		console.log("err", err);
	}
};

// 목록이동
const goPostListPage = () => {
	router.push({
		name: "PostList",
	});
};
</script>

<style lang="scss" scoped></style>
