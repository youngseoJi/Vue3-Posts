<template>
	<div>
		<h2>게시글 수정</h2>
		<hr class="my-4" />
		<form @sbmit.prevent="editPost">
			<div class="mb-3">
				<label for="title" class="form-label"></label>
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
					class="btn btn-outline-danger me-2"
					@click="goPostDetailPage"
				>
					취소
				</button>
				<button class="btn btn-primary" @click="editPost">수정</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

import { getPostById, updatePost } from "@/api/posts";

const router = useRouter();
const route = useRoute();
const id = route.params.id;

const form = ref({
	title: "",
	content: "",
	createAt: "",
});

// 특정 게시글 가져오기
const fetchPost = async () => {
	const { data } = await getPostById(id);

	setForm(data);
};

// 게시글 수정
// 게시글 데이터를 구조 분해하여 상태 객체에 개별 할당
const setForm = ({ title, content, createAt }) => {
	form.value.title = title;
	form.value.content = content;
	form.value.createAt = createAt;
};

// 게시글 수정
const editPost = async () => {
	try {
		await updatePost(id, { ...form.value });
		router.push({ name: "PostDetail", params: { id } });
	} catch (err) {
		console.log("err", err);
	}
};

fetchPost();

const goPostDetailPage = () => {
	router.push({
		name: "PostDetail",
		params: { id: id },
	});
};
</script>

<style lang="scss" scoped></style>
