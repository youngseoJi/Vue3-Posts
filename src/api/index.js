import axios from "axios";
// axios 공통 설정

// const instance = axios.create({
// 	baseURL: "https://some-domain.com/api/",
// 	timeout: 1000,
// 	headers: { "X-Custom-Header": "foobar" },

// create : axios 인스턴스를 생성하는 함수
function create(baseURL, options) {
	const instance = axios.create(
		Object.assign({ baseURL }, options),
		//   {
		// 	baseURL: baseURL,
		// 	options: options,
		// }
	);
	return instance;
}

// 각각의 // API 인스턴스를 생성하는 함수

// post API 인스턴스 생성
export const posts = create(`${import.meta.env.VITE_APP_API_URL}posts/`);
console.log("posts", `${import.meta.env.VITE_APP_API_URL}posts/`);
// export const posts = create("http://localhost:5000/posts/", {});
// development : http://localhost:5000/posts/
// production : https://localhost:5001/posts/
