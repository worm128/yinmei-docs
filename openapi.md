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
chat_interrupt = data.get("chat_interrupt", False)  # 聊天打算参数
```
返回参数：
```json
{"status": "成功"}
```

## 2、指令接口：
作用：发起指令如：唱歌、切歌、停止学歌、画画、表情、视频、停止视频、跳舞、停止跳舞、搜索、搜图  
地址：http://127.0.0.1:9888/msg  
请求参数：hand_action  
方法：POST  
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