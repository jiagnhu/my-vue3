/*
 * @GitHub: https://github.com/MaleWeb/vvtp
 * @version:
 * @Author: 江湖
 * @Date: 2022-01-21 17:03:13
 * @LastEditors: 唐亿开
 * @LastEditTime: 2022-01-25 15:13:59
 */
module.exports = {
  description: '创建全局状态',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: '请输入模块名称',
      validate: (v) => {
        if (!v || v.trim === '') {
          return '模块名称不能为空'
        }
        return true
      },
    },
  ],
  actions: () => {
    const actions = [
      {
        type: 'add',
        path: 'src/store/modules/{{camelCase name}}.ts',
        templateFile: 'plop-templates/store/index.hbs',
      },
    ]
    return actions
  },
}
