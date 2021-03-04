<template>
	<div class="problem">
		<el-container>
			<el-header>
				<div class="titleAndTab">
					<h1 class="proName">{{ problem.title }}</h1>
				<div class="tag-group">
					<el-tag
						v-for="item in items"
						:key="item.label"
						:type="item.type"
						effect="dark"
					>
						{{ item.label }}
					</el-tag>
				</div>
				</div>
				
				<div class="passAndSub">
					<div class="pass">
						<h1>{{ problem.accepted }}</h1>
						<p>通过</p>
					</div>
					<div class="submit">
						<h1>{{ problem.submit }}</h1>
						<p>提交</p>
					</div>
				</div>
			</el-header>
			<el-container>
				<el-main>
					<div >
						<h2>题目描述</h2>
						<p>{{ problem.description }}</p>
						<h2>输入格式</h2>
						<p>{{ problem.input }}</p>
						<h2>输出格式</h2>
						<p>{{ problem.output }}</p>
						<h2>样例</h2>
						<div>
							<h4>输入</h4>
							<pre>{{problem.sampleinput}}</pre>
							<h4>输出</h4>
							<pre>{{problem.sampleoutput}}</pre>
						</div>
						<h2>数据范围</h2>
						<p>{{ problem.hint }}</p>
					</div>
					<div>
						<prism-editor class="my-editor" v-model="code"></prism-editor>
					</div>
				</el-main>
				<el-aside width="260px">
					<el-affix :offset="120">
						<el-col :span="12">
							<el-menu
								default-active="1"
								class="el-menu-vertical-demo"
								@open="handleOpen"
								@close="handleClose"
							>
								<el-menu-item index="1">
									<i class="el-icon-location"></i>
									<template #title>提交</template>
								</el-menu-item>
								<el-menu-item index="2">
									<i class="el-icon-menu"></i>
									<template #title>提交记录</template>
								</el-menu-item>
								<el-menu-item index="3">
									<i class="el-icon-document"></i>
									<template #title>统计</template>
								</el-menu-item>
								<el-menu-item index="4">
									<i class="el-icon-setting"></i>
									<template #title>讨论</template>
								</el-menu-item>
								<el-menu-item index="5">
									<i class="el-icon-setting"></i>
									<template #title>文件</template>
								</el-menu-item>
							</el-menu>
						</el-col>
					</el-affix>
				</el-aside>
			</el-container>
			<el-footer>HEBNUOJ</el-footer>
		</el-container>
	</div>
</template>

<script>

import PrismEditor from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css';
import axios from "axios";
import { BASE_API } from "../config/dev";

export default {
	name: "Problem",
	data() {
		return {
			problem: {
				id: 1,
				title: "a + b 问题",
				description: "sadcvefvraefvae",
				input: "2 3",
				output: "5",
				sampleinput: "1 2",
				sampleoutput: "3",
				spj: true,
				hint: "abab",
				source: "sas",
				indate: "123456",
				timelimit: 3000,
				memorylimit: 1000,
				defunct: 1,
				accepted: 1,
				submit: 1,
				degree: "asdas",
			},
			items: [
				{ type: "", label: "标签一" },
				{ type: "success", label: "标签二" },
				{ type: "info", label: "标签三" },
				{ type: "danger", label: "标签四" },
				{ type: "warning", label: "标签五" },
			],
			code: "",
		};
	},
	components: {
		PrismEditor
    },
	mounted() {
		const id = this.$route.params.id;
		console.log(this.$route.params.id);
		window.document.title = "#" + id + " - 题目 - HEBNUOJ";
	},
	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		},
	},
};
</script>

<style scoped>
pre{
	margin: .5em 0;
    padding: .3em .5em;
    border: #ddd solid 1px;
    background: #f8f8f8;
    border-radius: 3px;
    overflow: auto;
    font-size: .875em;
    font-family: monospace;
	white-space: pre;
	display: block;
}
.problem {
	padding: 30px 0 0;
}
.el-container {
	width: 86%;
	min-width: 1100px;
	margin: auto;
}
.el-header {
	padding: 10px 0;
	margin: 0 0 30px !important;
	height: 100px !important;
	border-bottom: solid 1px #e6e6e6;
	text-align: left;
}
.titleAndTab{
	width: 70%;
	display: inline-block;
}
.proName{
	margin: 0 0 15px;
	width: 100%;
	display: inline-block;
}
.tag-group{
	padding: 0;
	margin: 0;
	width: 100%;
	display: inline-block;
}

.passAndSub{
	width: 30%;
	display: inline-block;
}
.passAndSub h1{
	padding: 0;
	margin: 0;
	text-align: center;
}
.passAndSub p{
	padding: 0;
	margin: 0;
	text-align: center;
}
.pass{
	width: 50%;
	float: left;
}
.submit{
	width: 50%;
	float: right;
}
.el-main{
	text-align: left;
}
</style>
