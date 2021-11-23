# anki-md-template

* 可以解析markdown语法的anki模板。cdn引入，无需任何本地媒体文件。

👇这个是具体操作步骤。大概率会同步更新，但是还是以这个demo模板为准吧，可能有时候懒得写解释文章。
`https://www.jianshu.com/p/57b84a7a3c75`

👇目前的功能（有什么改进可以在issue里提）
- [x] 代码自动高亮

- [x] 全部样式风格采用GitHub-markdown-css

- [x] 编辑只需严格按照markdown语法编写,不需要输入任何html标签（需要showdown支持，有一些配置项我可能没开），如果想配置html自己去那个anki html编辑器里改就行。但我不建议改。

- [ ] base64 或者 其他格式的图片导入会与anki的自动转换冲突，还没想好这里怎么弄 

******
**缺陷**
1.代码段中输入的空格会被markdown转义 直接输出nbsp;