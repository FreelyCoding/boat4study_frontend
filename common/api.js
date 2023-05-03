const {
	http
} = uni.$u
// 获取菜单
export const fetchMenu = (params, config = {}) => http.post('/ebapi/public_api/index', params, config)
export default {
	
	problem_set_migrate_problem(set_id, problem_id) {
		let api = "/problem_set/migrate/" + set_id + "?problem_id=" + problem_id;
		return api;
	},
	
	problem_blank_all(params) {
		let api = "/problem/blank/all";
		if (params.id != null) {
			api += "?id=" + params.id;
			if (params.is_favorite != null) {
				api += "&is_favorite=" + params.is_favorite;
			}
			if (params.user_id != null) {
				api += "&user_id=" + params.user_id;
			}
		} else if (params.is_favorite != null) {
			api += "?is_favorite=" + params.is_favorite;
			if (params.user_id != null) {
				api += "&user_id=" + params.user_id;
			}
		} else if (params.user_id != null) {
			api += "?user_id=" + params.user_id;
		}
		return api;
	},

	problem_blank_answer(id) {
		let api = "/problem/blank/answer";
		return api + "/" + id;
	},

	problem_blank_create() {
		let api = "/problem/blank/create";
		return api;
	},

	problem_blank_delete(id) {
		let api = "/problem/blank/delete";
		return api + "/" + id;
	},

	problem_blank_update() {
		let api = "/problem/blank/update"
		return api;
	},

	problem_choice_all(params) {
		let api = "/problem/choice/all";
		if (params.id != null) {
			api += "?id=" + params.id;
			if (params.is_favorite != null) {
				api += "&is_favorite=" + params.is_favorite;
			}
			if (params.user_id != null) {
				api += "&user_id=" + params.user_id;
			}
		} else if (params.is_favorite != null) {
			api += "?is_favorite=" + params.is_favorite;
			if (params.user_id != null) {
				api += "&user_id=" + params.user_id;
			}
		} else if (params.user_id != null) {
			api += "?user_id=" + params.user_id;
		}
		return api;
	},

	problem_choice_answer(id) {
		let api = "/problem/choice/answer";
		return api + "/" + id;
	},

	problem_choice_create() {
		let api = "/problem/choice/create";
		return api;
	},

	problem_choice_delete(id) {
		let api = "/problem/choice/delete";
		return api + "/" + id;
	},

	problem_choice_update() {
		let api = "/problem/choice/update"
		return api;
	},

	problem_judge_all(params) {
		let api = "/problem/judge/all";
		if (params.id != null) {
			api += "?id=" + params.id;
			if (params.is_favorite != null) {
				api += "&is_favorite=" + params.is_favorite;
			}
			if (params.user_id != null) {
				api += "&user_id=" + params.user_id;
			}
		} else if (params.is_favorite != null) {
			api += "?is_favorite=" + params.is_favorite;
			if (params.user_id != null) {
				api += "&user_id=" + params.user_id;
			}
		} else if (params.user_id != null) {
			api += "?user_id=" + params.user_id;
		}
		return api;
	},

	problem_judge_answer(id) {
		let api = "/problem/judge/answer";
		return api + "/" + id;
	},

	problem_judge_create() {
		let api = "/problem/judge/create";
		return api;
	},

	problem_judge_delete(id) {
		let api = "/problem/judge/delete";
		return api + "/" + id;
	},

	problem_judge_update() {
		let api = "/problem/judge/update"
		return api;
	},

	problem_favorite(id) {
		let api = "/problem/favorite";
		return api + "/" + id;
	},

	problem_unfavorite(id) {
		let api = "/problem/unfavorite";
		return api + "/" + id;
	},

	problem_set_all(params) {
		let api = "/problem_set/all";
		if (params.contain != null) {
			api += "?contain=" + params.contain;
			if (params.id != null) {
				api += "&id=" + params.id;
			}
			if (params.is_favorite != null) {
				api += "&is_favorite=" + params.is_favorite;
			}
			if (params.user_id != null) {
				api += "&user_id=" + params.user_id;
			}
		} else if (params.id != null) {
			api += "?id=" + params.id;
			if (params.is_favorite != null) {
				api += "&is_favorite=" + params.is_favorite;
			}
			if (params.user_id != null) {
				api += "&user_id=" + params.user_id;
			}
		} else if (params.is_favorite != null) {
			api += "?is_favorite=" + params.is_favorite;
			if (params.user_id != null) {
				api += "&user_id=" + params.user_id;
			}
		} else if (params.user_id != null) {
			api += "?user_id=" + params.user_id;
		}
		return api;
	},

	problem_set_create() {
		let api = "/problem_set/create";
		return api;
	},

	problem_set_delete(id) {
		let api = "/problem_set/delete";
		return api + "/" + id;
	},

	problem_set_favorite(id) {
		let api = "/problem_set/favorite";
		return api + "/" + id;
	},

	problem_set_unfavorite(id) {
		let api = "/problem_set/unfavorite";
		return api + "/" + id;
	},

	problem_set_add(id, problem_id) {
		let api = "/problem_set/add/" + id + "?problem_id=" + problem_id;
		return api;
	},

	problem_set_all_problem(params) {
		let api = "/problem_set/all_problem/" + params.id;
		if (params.is_favorite != null) {
			api += "?is_favorite=" + params.is_favorite;
			if (params.problem_type_id != null) {
				api += "&problem_type_id=" + params.problem_type_id;
			}
		} else if (params.problem_type_id != null) {
			api += "?problem_type_id=" + params.problem_type_id;
		}
		return api;
	},

	problem_set_remove(id) {
		let api = "/problem_set/remove/" + id;
		return api;
	},

	study_group_create() {
		let api = "/group/create";
		return api;
	},
	
	study_group_delete(id) {
		let api = "/group/delete";
		return api + "/" + id;
	},
	
	study_group_invitation(id) {
		let api = "/group/invitation";
		return api + "/" + id;
	}

}
