# anki-md-template

> **核心代码在`demo.html`中**

* 可以解析`markdown`语法的`anki`模板。cdn引入(用的国外的公开库,可以自己找国内的)，无需任何本地媒体文件。

👇这个是具体操作步骤。大概率会同步更新，但是还是以这个demo模板为准吧，可能有时候懒得写解释文章。
`https://www.jianshu.com/p/57b84a7a3c75`

👇目前的功能（有什么改进可以在issue里提）
- [x] 代码自动高亮

- [x] 全部样式风格采用`github-markdown-css`

- [x] 编辑只需严格按照markdown语法编写,不需要输入任何html标签（需要showdown支持，有一些配置项我可能没开），如果想配置html自己去那个anki html编辑器里改就行。但我不建议改。

- [x] 应issues的要求 加入了 对 anki mathJax 的兼容 (就是点他编辑器的那个 fx的图标)

- [x] 已经更新支持 自动识别系统主题 自动切换md渲染卡片的白天或者夜间模式

- [ ] ~~base64 或者 其他格式的图片导入会与anki的自动转换冲突，还没想好这里怎么弄 (暂时手动在html编辑器里输入实现)~~ 直接在anki编辑器里复制就行了 base64方案不方便编辑 文字太多

* 关于图片现在的我的两种处理方式
    1. 第一个我就是直接用qq截图然后`ctrl v`进去,anki会自动帮我们创建一个`<img />`导入 可以和我们的md解析共存
    2. 第二个就是用markdown的语法`![]()`来用base64加密保存图片,(因为链接会被anki自动识别导入)  
    **对于图片我的最终方案是 直接使用qq截图或者下载的图片直接复制进去,原因是图片使用base64太长了严重干扰笔记的编辑**

- [ ] 加入 source code pro 字体( 查看一下 如何使用系统自带的字体 ? )

******

**缺陷**

1.~~代码段中输入的空格会被markdown转义 直接输出nbsp;~~ (修复)

*****

**cdn仓库(~~慢的可以自己换成国内的cdn仓库~~换成字节的cdn库了国内速度挺快)**

> 如果不生效了 可能是网络的问题 因为是采用cdn的形式 加载script标签 不是本地的形式



