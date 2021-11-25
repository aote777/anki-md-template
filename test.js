var str='```javascript<br>&nbsp; &lt;head&gt;<br>&nbsp;&nbsp;&nbsp; &lt;meta charset="UTF-8" /&gt;<br>&nbsp;&nbsp;&nbsp; &lt;meta http-equiv="X-UA-Compatible" content="IE=edge" /&gt;<br>&nbsp;&nbsp;&nbsp; &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;<br>&nbsp;&nbsp;&nbsp; &lt;title&gt;anki-md模板测试&lt;/title&gt;<br>&nbsp; &lt;/head&gt;<br>```'

var res=str.replace(/&nbsp;/g, ' ')

console.log(res)