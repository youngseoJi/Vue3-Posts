<template>
	<div>
		<h2>{{ post.title }}</h2>

		<p>{{ post.content }}</p>
		<p class="text-muted">{{ post.createAt }}</p>
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
import { useRouter } from "vue-router";
import { getPostById, deletePost } from "@/api/posts";
import { ref } from "vue";

const props = defineProps({
	// 	id: String,
	id: Number,
});

const router = useRouter();

// const route = useRoute();
// const id = route.params.id;
/**
 *  ref
 * 장점 : 객체 할당 가능, 일관성을 유지할 수 있음
 * 던점 :post.value로 접근해야 함
 *
 * reactive
 * 잠점 :post.title 바로 접근 가능
 * 단점 : 객체 할당 불가능
 */

const post = ref({});

// 특정 게시글 가져오기
const fetchPost = async () => {
	try {
		const { data } = await getPostById(props.id);
		// 원본 데이터는 변경하지 않고, 복사본을 만들어서 사용
		// post.value = { ...data };
		console.log("data", data);
		setPost(data);
	} catch (err) {
		console.error("게시글 가져오기 실패:", err);
	}
};

// 게시글 데이터가 변경될 때마다 상태를 업데이트하는 함수

// 게시글 데이터를 구조 분해하여 상태 객체에 개별 할당
const setPost = ({ title, content, createAt }) => {
	post.value.title = title;
	post.value.content = content;
	post.value.createAt = createAt;
};

fetchPost();
// console.log("post.value.title", post.value.title);

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
		params: { id: props.id },
	});
};

// 게시글 삭제
const postDelete = async () => {
	try {
		if (confirm("정말 삭제하시겠습니까? ") === false) {
			return;
		}
		await deletePost(props.id);

		alert("삭제되었습니다.");

		goPostListPage();
	} catch (err) {
		console.error("게시글 삭제 실패:", err);
		alert("게시글 삭제에 실패했습니다.");
	}
};
</script>

<style lang="scss" scoped></style>
