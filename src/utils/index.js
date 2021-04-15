/*工具函数 */
// 返回对应的路由
export function getRedirectTo (type,avatar) {
  let path = ''
  if (type === 'dashen') {
    path = '/dashen'
  } else {
    path = '/laoban'
  }
  if (!avatar) { // 未完善信息
    path += 'Info' 
  }
  return path
}
