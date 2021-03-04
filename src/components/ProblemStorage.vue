<template>
	<div class="problemstorage">
		<el-pagination
			background
			layout="prev, pager, next"
			:total="tableData.length"
			:page-size="PageSize"
			current-page.sync="curPage"
			@current-change="handleCureentChange"
		>
		</el-pagination>
		<el-table :data="tableData.slice((curPage -1) * PageSize,curPage * PageSize)" style="width: 100%">
			<el-table-column prop="date" label="#" width="180">
			</el-table-column>
			<el-table-column prop="name" label="题目" width="180">
				<template  #default="scope">
                <router-link :to="{path:`/problem/${scope.row.date}` ,params:{id: scope.row.date}}">{{scope.row.name}}</router-link>
              </template>
			</el-table-column>
			<el-table-column prop="address" label="提交"> </el-table-column>
		</el-table>
	</div>
</template>

<script>
import axios from "axios";
import { BASE_API } from "../config/dev";
export default {
	name: "ProblemStorage",
	data() {
		return {
			PageSize: 2,
			curPage: 1, 
			tableData: [
				{
					date: "1",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1518 弄",
				},
				{
					date: "2",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1517 弄",
				},
				{
					date: "3",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1519 弄",
				},
				{
					date: "4",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1516 弄",
				},
			],
		};
	},
	methods:{
		handleCureentChange(val) {
    this.curPage = val;
},
	}
};
</script>

<style scoped>
a {
	text-decoration: none;
}
</style>
