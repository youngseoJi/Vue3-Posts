<template>
	<div>
		<h2>{{ form.title }}</h2>

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
import { useRouter } from "vue-router";
import { getPostById } from "@/api/posts";
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
 * 던점 : form.value로 접근해야 함
 *
 * reactive
 * 잠점 : form.title 바로 접근 가능
 * 단점 : 객체 할당 불가능
 */
// const form = ref({});
const form = ref({});

const fetchPost = () => {
	const data = getPostById(props.id);
	console.log("props.id", props.id);
	// 원본 데이터는 변경하지 않고, 복사본을 만들어서 사용
	form.value = { ...data };
};

fetchPost();
console.log("form.value.title", form.value.title);

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
</script>

<style lang="scss" scoped></style>
