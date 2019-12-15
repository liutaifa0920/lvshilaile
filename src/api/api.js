import request from "@/utils/request";

/**
 * test 测试请求例子-不可用
 * param
 * return
 * */
export function test(data) {
  return request({
    url: "/test",
    method: "post",
    data
  });
}

// ---------------------- Home --------------------------- //
export function homeParentClass(data) {
  return request({
    url: "/pc/home/indexpage",
    method: "post",
    data
  });
}
