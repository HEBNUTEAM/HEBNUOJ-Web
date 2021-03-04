<template>
	<div class="addproblem">
		<el-header>
			<h1>添加题目</h1>
		</el-header>
		<el-main>
			<el-form
				ref="form"
				:model="form"
				label-width="80px"
				:label-position="labelPosition"
			>
				<el-form-item
					label="题目名称"
					class="labelStyle"
					label-width="130px"
				>
					<el-input v-model="form.name"></el-input>
				</el-form-item>

				<el-form-item
					label="题目背景"
					class="labelStyle"
					label-width="130px"
				>
					<v-md-editor
						v-model="form.region"
						height="300px"
					></v-md-editor>
				</el-form-item>
				<el-form-item
					label="题目描述"
					class="labelStyle"
					label-width="130px"
				>
					<v-md-editor
						v-model="form.region2"
						height="300px"
					></v-md-editor>
				</el-form-item>
				<el-form-item
					label="输入格式"
					class="labelStyle"
					label-width="130px"
				>
					<v-md-editor
						v-model="form.region2"
						height="300px"
					></v-md-editor>
				</el-form-item>
				<el-form-item
					label="输出格式"
					class="labelStyle"
					label-width="130px"
				>
					<v-md-editor
						v-model="form.region2"
						height="300px"
					></v-md-editor>
				</el-form-item>
				<el-form-item
					label="样例组"
					class="labelStyle"
					label-width="130px"
				>
				</el-form-item>
				<el-form-item
					label="提示说明"
					class="labelStyle"
					label-width="130px"
				>
					<v-md-editor
						v-model="form.region2"
						height="300px"
					></v-md-editor>
				</el-form-item>
				<el-form-item
					label="题目翻译"
					class="labelStyle"
					label-width="130px"
				>
					<v-md-editor
						v-model="form.region2"
						height="300px"
					></v-md-editor>
				</el-form-item>
				<el-form-item
					label="题目难度"
					class="labelStyle"
					label-width="130px"
				>
					<el-select v-model="value" placeholder="暂无评定">
						<el-option
							v-for="item in options"
							:key="item.value"
							:label="item.label"
							:value="item.value"
						>
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item
					label="题目标签"
					class="labelStyle"
					label-width="130px"
				>
				</el-form-item>
				<el-form-item
					label="所属题库"
					class="labelStyle"
					label-width="130px"
				>
					<el-select v-model="value" placeholder="个人题库">
						<el-option
							v-for="item in options"
							:key="item.value"
							:label="item.label"
							:value="item.value"
						>
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item
					label="显示分数"
					class="labelStyle"
					label-width="130px"
				>
					<el-radio-group v-model="radio">
						<el-radio :label="3">显示分数（OI模式）</el-radio>
						<el-radio :label="6">不显示分数（ACM赛制）</el-radio>
						<el-radio :label="9">备选项</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item
					label="题目状态"
					class="labelStyle"
					label-width="130px"
				>
					<el-radio-group v-model="radio1">
						<el-radio :label="3">隐藏</el-radio>
						<el-radio :label="6">公众可见</el-radio>
						<el-radio :label="9">比赛赛题</el-radio>
					</el-radio-group>
				</el-form-item>

				<el-form-item
					label="是否特判"
					class="labelStyle"
					label-width="130px"
				>
					<el-radio-group v-model="form.resource">
						<el-radio label="是"></el-radio>
						<el-radio label="否"></el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onSubmit">保存</el-button
					>、
				</el-form-item>
			</el-form>
		</el-main>
		<el-footer>Footer</el-footer>
	</div>
</template>

<script>
import axios from "axios";
import { BASE_API } from "../config/dev";
export default {
	name: "AddProblem",
	data() {
		return {
			radio: 6,
			radio1: 3,
			labelPosition: "left",
			form: {
				name: "",
				region: "",
				region2: "",
				date1: "",
				date2: "",
				delivery: false,
				type: [],
				resource: "",
				desc: "",
			},
			options: [
				{
					value: "选项1",
					label: "入门",
				},
				{
					value: "选项2",
					label: "普及",
				},
				{
					value: "选项3",
					label: "提高",
				},
				{
					value: "选项4",
					label: "省选",
				},
				{
					value: "选项5",
					label: "NOI",
				},
			],
			value: "",
		};
	},
	components: {
		// mavonEditor,
	},
};
</script>

<style>
.el-form-item__label {
	font-size: 18px !important;
	letter-spacing: 1px;
}
</style>
<style scoped>
.addproblem{
	/* background-color: #e6e6e6; */
}
.el-main {
	margin: 10px 7%;
	font-size: 30 !important;
	text-align: left;
	background-color: white;
}
.labelStyle {
	font-weight: bold;
}
.el-form-item__label {
	padding: 0 20px 0 0 !important;
}
.el-form--label-left .el-form-item__label {
	font-size: 20px;
}
</style>
