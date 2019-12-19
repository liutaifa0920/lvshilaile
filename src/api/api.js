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
// 登录
export function homelogin(data) {
  return request({
    url: "/pc/Wlogin/login",
    method: "post",
    data
  });
}
// 铃铛消息
export function homesuspension(data) {
  return request({
    url: "/pc/News/suspension",
    method: "post",
    data
  });
}
// ---------------------- Home --------------------------- //
export function homeindexpage(data) {
  return request({
    url: "/pc/home/indexpage",
    method: "post",
    data
  });
}
