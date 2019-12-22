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
// wo消息

export function homeusersimple(data) {
  return request({
    url: "/pc/News/usersimple",
    method: "post",
    data
  });
}
// 消息详情
export function NewsDetails(data) {
  return request({
    url: "/pc/News/details",
    method: "post",
    data
  });
}
// 服务
export function ServiceArticleview(data) {
  return request({
    url: "/pc/Service/articleview",
    method: "post",
    data
  });
}
// 案例资讯
export function CasesimpleSimpleindex(data) {
  return request({
    url: "/pc/Casesimple/simpleindex",
    method: "post",
    data
  });
}
// 新闻中心列表
export function JournalismArticle(data) {
  return request({
    url: "/pc/Journalism/article",
    method: "post",
    data
  });
}
// 新闻消息单个详情
export function JournalismArticleview(data) {
  return request({
    url: "/pc/Journalism/articleview",
    method: "post",
    data
  });
}
