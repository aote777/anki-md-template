> 核心markdown解析器 👉[markdown-it](https://github.com/markdown-it/markdown-it)
> `https://github.com/markdown-it/markdown-it`

> **核心代码在`demo.html`中** > **不想手动创建模板,可以直接导入我上传好的牌组(./markdown.apkg),就会自动导入卡片模板了**

# 可以解析`markdown`语法的`anki`卡片模板。

> cdn 引入所需资源(使用的字节的公共库,根据自己的网络情况替换)，无需任何本地媒体文件。
> 跟着复制代码就完事了 , 或者直接导入现成的牌组获取

👇 这个是具体操作步骤。只看这里的操作步骤就好 ， 卡片模板代码已 GitHub 上为准（是最新的）。
`https://www.jianshu.com/p/57b84a7a3c75` [点我跳转](https://www.jianshu.com/p/57b84a7a3c75)

👇 目前的功能（有什么改进可以在 issue 里提 有能力可以自行修改提 pr）

- [x] 代码自动高亮

- [x] 全部样式风格采用`github-markdown-css` css 样式文件修改成自动识别系统主题（是否是暗黑模式） 以前的版本可以修改一下 cdn 地址

- [x] 编辑只需严格按照 markdown 语法编写,不需要输入任何 html 标签（需要 markdown-it 支持，有一些配置项我可能没开），如果想配置 html 自己去那个 anki html 编辑器里改就行。但我不建议改。

- [x] 应 issues 的要求 加入了 对 anki mathJax 的兼容 (就是点他 anki 自带的编辑器的那个 fx 的图标)

- [x] 已经更新支持 自动识别系统主题 自动切换 md 渲染卡片的白天或者夜间模式

- [x] 图片直接截图或者保存 cv 就行

- [x] html 字符反转义

---

**缺陷**

1.~~代码段中输入的空格会被 markdown 转义 直接输出 nbsp;~~ (修复)

---

**cdn 仓库(~~慢的可以自己换成国内的 cdn 仓库~~换成字节的 cdn 库了国内速度挺快)**

****

#### 如果样式或者解析失效
可能是网络的问题,因为是采用 cdn 加载资源 不是本地
可以反复刷新 或者 切换网络尝试修复一下
或者把梯子关了(或者自己设置规则) 因为默认用的是字节的cdn库
