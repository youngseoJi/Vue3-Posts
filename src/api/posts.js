import axios from "axios";

// axios

// 이제 따로 json-server를 실행하기에 주석처리
// const posts = [
// 	{ id: 1, title: "제목1", content: "내용1", createAt: "2020-01-01" },
// 	{ id: 2, title: "제목2", content: "내용2", createAt: "2022-02-02" },
// 	{ id: 3, title: "제목3", content: "내용3", createAt: "2023-03-03" },
// 	{ id: 4, title: "제목4", content: "내용4", createAt: "2024-04-04" },
// 	{ id: 5, title: "제목5", content: "내용5", createAt: "2025-05-05" },
// ];

// 게시물 목록
export function getPosts(params) {
	return axios.get("http://localhost:5000/posts", { params });
}

// 게시물 조회 id
export function getPostById(id) {
	//  const postId = parseInt(id); // 1차
	// 	return posts.find(post => post.id === postId);
	// return posts.find(post => post.id === id); // 2차
	return axios.get(`http://localhost:5000/posts/${id}`);
}

// 게시물 생성
export function createPost(post) {
	return axios.post("http://localhost:5000/posts", post);
}

// 게시물 수정
export function updatePost(id, post) {
	return axios.put(`http://localhost:5000/posts/${id}`, post);
}

// 게시물 삭제
export function deletePost(id) {
	return axios.delete(`http://localhost:5000/posts/${id}`);
}
