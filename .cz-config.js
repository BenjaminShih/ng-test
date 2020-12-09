'use strict';
module.exports = {
  types: [
    {value: '✨特性', name: 'feat(特性): 新增一个新的特性'},
    {value: '🐛修复', name: 'fix(修复): 修复一个Bug'},
    {value: '📝文档', name: 'doc(文档): 变更的只有文档'},
    {value: '💄格式', name: 'style(格式): 空格, 分号等格式修复'},
    {value: '♻️重构', name: 'refactor(重构): 代码重构，注意和特性、修复区分开'},
    {value: '⚡️性能', name: 'perf(性能): 提升性能'},
    {value: '🔧工具', name: 'chore(工具): 开发工具变动(构建、脚手架工具等)'},
    {value: '✅测试', name: 'test(测试): 添加一个测试'},
    {value: '⏪回滚', name: 'revert(回滚): 代码回退'}],
  // 重写提交类型（types）
  messages: {
    type: '选择提交类型:',
    scope: '本次提交涉及的模块(可选):',
    subject: '短说明:\n',
    body: '长说明:\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交?'
  },
  // 短说明字数限制
  subjectLimit: 60,
  allowBreakingChanges: ['feat','fix']
};
