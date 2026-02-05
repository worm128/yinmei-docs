## 1、聊天接口：
作用：AI聊天  
地址：http://127.0.0.1:9888/msg  
方法：POST  
请求参数：
```json
query = data["msg"]  # 获取弹幕内容
uid = data["uid"]  # 获取用户昵称
user_name = data["username"]  # 获取用户昵称
uface = data["uface"]  #用户头像
channel = data.get("channel", "api")  #渠道号
chat_num = data.get("chat_num", 0)  # 联动AI交互累计次数
chat_interrupt = data.get("chat_interrupt", False)  # 聊天打断参数
```
返回参数：
```json
{"status": "成功"}
```

## 2、指令接口：
作用：【无消息提示框】发起指令如：唱歌、切歌、停止学歌、画画、表情、视频、停止视频、跳舞、停止跳舞、搜索、搜图  
地址：http://127.0.0.1:9888/hand_action  
方法：POST  
请求参数：
```json
query = data["msg"]  # 获取弹幕内容
uid = data["uid"]  # 获取用户昵称
username = data["username"]  # 获取用户昵称
uface = data["uface"]  #用户头像
channel = data.get("channel", "api")  #渠道号
```
返回参数：
```json
{"status": "成功"}
```

## 3、复读：
作用：朗读文本  
地址：http://127.0.0.1:9888/say  
方法：POST  
请求参数：
```json
player_name = data.get("PlayerVoice", "MAIN")  # MAIN：主人物  ASSISTANT：助手
text = json["text"]  # 回复文本
lanuage = json["lanuage"]  # 聊天语言：AutoChange=智能识别语言【有情绪变化影响】, 英语：en，日文：jp，韩文：kor，粤语：yue，国语：zh；举例传入值：en 或者 AutoChange；
emotion_array = json["emotion"] # 需要输入数组["开心","可爱"],感情变化：平淡,开心,伤心,生气,尴尬,害怕,可爱,激情,害羞,调皮,感激,深情,疑惑,搞笑,挑衅,无奈,好奇 
voiceType = json["voiceType"]  # 音频类型： chat=时序流式回复，other=其他回复
```
返回参数：
```json
{"status": "成功"}
```

## 4、AI回复文本：
作用：AI回复用户的文本，通常用于聊天回复框显示  
地址：ws://localhost:18765  
方法：WebSocket  
请求参数：  
ws链接时候需要先注册插件，才会回调回复文本  
```json
{"register": "聊天回复"}
```
返回参数：  
```json
{"type": "聊天回复", "voiceType":语音类别，chat：聊天语音|other：其他语音, "index": 流式回复索引位置, "traceid": 同一语音序列id一样, "chatStatus": start|空|end, "text": 回复文本}
```