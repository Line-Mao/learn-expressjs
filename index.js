// 使用 ES 模块导入
import express from 'express';

// 创建一个 Express 应用
const app = express();
const port = 80;

// 定义一个简单的 GET 路由
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/index', (req, res) => {
  res.contentType("text/javascript").send(`
    <html>
    <body>
    <a href="https://mysit.life"> 小应生活 </a>
    </body>
    </html> 
    `);
});

app.get('/hello', (req, res) => {
    const name = req.query.name
    res.send(`你好，${name}同学，欢迎访问我的网站！`);
});

app.get("/weather",(req,res)=>{
  res.json({
    location:"sit",
    weather:"sunny"
  })
})


// 启动服务器并监听端口
app.listen(port, () => {
  console.log(`服务器正在 http://localhost:${port} 上运行`);
});