/**
 * 复制功能
 * @param {String} str 需要复制的文本
 * @returns {String} void
 */
export function clipboard(str) {
  const input = document.createElement('input')
  input.value = str
  input.setAttribute('readonly', 'true')
  input.style.position = 'absolute'
  input.style.left = '-9999px'
  input.style.zIndex = '-9999'
  document.body.appendChild(input)
  input.select()
  document.execCommand('copy')
  alert('复制成功!')
  document.body.removeChild(input)
 }
