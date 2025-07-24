## AI吟美资料
- **AI名称：**吟美
- **开发者：**Winlone
- **B站频道：**程序猿的退休生活 https://space.bilibili.com/46130941
- **直播间：**http://live.bilibili.com/3033646
- **Ai吟美教程汇集：**https://www.bilibili.com/opus/1015233825290059779
- **技术Q群：**27831318
- **粉丝福利群：**264534845
- **版本：**2.3.0
- **开源地址：**https://github.com/worm128/AI-YinMei
<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=114471733300844&bvid=BV1kh5TzLEv6&cid=29853159399&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="600px" height="600px"></iframe>

## 项目下载
- **吟美整合包下载地址：**  
百度网盘群：请在“百度网盘->消息” 添加群号   
百度网盘群号1：930109408（满）  
百度网盘群号2：939447713（满）   
百度网盘群号3：945900295   
百度网盘群号4：969208563  
- **夸克：**   
夸克群1：1231405830   
夸克群2：428937868   
- **功能整合包下载(6个)：**人工智能 -> yinmei-all
桌宠2.0 yinmei-desktop-plus、TTS语音合成GPT-SoVITS-1.0版本和2.0版本、鉴黄public-NSFW-y-distinguish、绘画stable-diffusion-webui、Live2D皮肤
- **吟美核心【版本迭代】：**人工智能 -> 吟美核心
吟美开发文档：人工智能 -> 吟美开发文档

## 整合包内容
路径：人工智能->吟美核心，选择一个版本核心下载，一般是最新版本  
![down-yinmei.png](images/down-yinmei.png)

路径：人工智能->yinmei-all  
![other-software.png](images/other-software.png)

## 功能概览
- **长期记忆：**吟美核心、yinmei-analysis
- **短期记忆：**吟美核心、mongodb
- **意图分析：**吟美核心、yinmei-analysis
- **积分：**吟美核心、mongodb
- **扩散思维：**吟美核心、yinmei-analysis、neo4j
- **聊天：**吟美核心、选择：阿里百炼  智谱清言  腾讯混元  百度云服务  DeepSeek  OneApi  Xinference Fastgpt
- **知识库：**吟美核心、fastgpt【可外挂，不走fastgpt的语言模型】、Xinference、m3e
- **语音：**吟美核心、GPT-SoVITS1.zip、GPT-SoVITS-v2.zip
- **唱歌：**吟美核心、yinmei-music.zip、NeteaseCloudMusicApi.zip
- **绘画：**吟美核心、stable-diffusion-webui.zip、public-NSFW-y-distinguish.zip【可选】
- **搜图：**吟美核心、public-NSFW-y-distinguish.zip【可选】
- **搜索：**吟美核心、vpn【可选】
- **皮肤：**吟美核心、吟美桌宠【可选】、vtube studio【可选】
- **跳舞：**吟美核心、OBS、本地视频
- **表情：**吟美核心、吟美桌宠【可选】、vtube studio【可选】
- **弹幕：**吟美核心、B站、qq机器人：napcat
- **自动化抽奖：**吟美核心、mongodb
- **MCP+自定义代码：**吟美核心、mongodb

## 指令说明
**1. 基础指令：**  
1.1 加入"\" 例如 "\我在直播间聊天"，这样ai不会对用户内容进行回复

**2. 唱歌功能：**  
2.1 输入“唱歌+歌曲名称”，吟美会根据你输入的歌曲名称进行学习唱歌。当然，你可以输入类似“吟美给我推荐一首最好听的动漫歌曲”这些开放性的话题，让吟美给你智能选择歌曲进行演唱。
2.2 切歌请输入“切歌”指令，会跳过当前歌曲，直接唱下一首歌曲
2.3 输入“停止学歌”，吟美会终止当前学歌进程，进入下一首歌曲学习

**3. 绘画功能：**  
3.1 输入“画画+图画标题”，吟美会根据你输入的绘画提示词进行实时绘画。
3.2 当然，你可以输入类似“吟美给我画一幅最丑的小龟蛋”这些开放性的话题，让吟美给你智能输出绘画提示词进行画画。

**4. 视频播放功能：**  
4.1 输入“视频+舞蹈名称”，舞蹈如下：
视频文件需要在本地配置
书记舞、科目三、女团舞、社会摇
呱呱舞、马保国、二次元、涩涩
蔡徐坤、江南 style、Chipi、吟美
直接输入“视频”两个字是随机跳舞
4.2 停止跳舞请输入“停止视频”

**5. 表情功能：**  
输入“表情+名称”, “表情+随机” 是随机表情，表情自己猜，例如，“哭、笑、吐舌头”之类

**6. 场景切换功能：**  
6.1 输入“切换+场景名称”： 粉色房间、神社、海岸花坊、花房、清晨房间
6.2 系统智能判定时间进行早晚场景切换

**7. 换装功能：**  
输入“换装+衣服名称”：便衣、爱的翅膀、青春猫娘、眼镜猫娘

**8. 搜图功能：**  
输入“搜图+关键字”

**9. 搜索资讯功能：**  
输入“搜索+关键字”

## 技术架构
![吟美流程图2.3.0.png](images/吟美流程图2.3.0.png)