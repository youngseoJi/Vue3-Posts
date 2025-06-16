<template>
	<div>
		<ul class="nav nav-pills">
			<li class="nav-item">
				<!-- push는 히스토리가 쌓여서 뒤로가기하면 전 화면으로 돌아간다. -->
				<!-- <RouterLink class="nav-link" active-class="active" to="/nested/one">
					Nested One</RouterLink
				> -->
				<!-- replace: 현재 페이지가 대체가 되는 것, 히스토리가 쌓이지 않는다.
				 즉 "뒤로가면 안 되는 페이지"에서 사용 -->
				<RouterLink
					class="nav-link"
					active-class="active"
					:to="{ name: 'NestedOne', replace: true }"
				>
					Nested One</RouterLink
				>
			</li>
			<li class="nav-item">
				<RouterLink
					class="nav-link"
					active-class="active"
					:to="{ name: 'NestedTwo', replace: true }"
					>Nested Two</RouterLink
				>
			</li>
		</ul>

		<hr class="my-4" />
		<RouterView></RouterView>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
