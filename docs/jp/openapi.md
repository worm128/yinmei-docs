## 1、チャットAPI：
用途：AIチャット  
アドレス：http://127.0.0.1:9888/msg  
メソッド：POST  
リクエストパラメータ：
```json
query = data["msg"]  # コメント内容を取得
uid = data["uid"]  # ユーザーIDを取得
user_name = data["username"]  # ユーザー名を取得
uface = data["uface"]  # ユーザーアバター
channel = data.get("channel", "api")  # チャンネル番号
chat_num = data.get("chat_num", 0)  # AI連動対話の累計回数
chat_interrupt = data.get("chat_interrupt", False)  # チャット中断パラメータ
imglist = data.get("imglist", [])  # 画像セット。画像はbase64エンコードが必要で、文字列配列です
videolist = data.get("videolist", [])  # 動画セット。動画はbase64エンコードが必要で、文字列配列です
filelist = data.get("filelist", [])  # ファイルセット
```
戻り値：
```json
{"status": "成功"}
```

## 2、コマンドAPI：
用途：【メッセージ通知なし】歌唱、曲送り、歌の学習停止、お絵描き、表情、動画、動画停止、ダンス、ダンス停止、検索、画像検索などのコマンドを発行します  
アドレス：http://127.0.0.1:9888/hand_action  
メソッド：POST  
リクエストパラメータ：
```json
query = data["msg"]  # コメント内容を取得
uid = data["uid"]  # ユーザーIDを取得
username = data["username"]  # ユーザー名を取得
uface = data["uface"]  # ユーザーアバター
channel = data.get("channel", "api")  # チャンネル番号
```
戻り値：
```json
{"status": "成功"}
```

## 3、読み上げ：
用途：テキストを朗読します  
アドレス：http://127.0.0.1:9888/say  
メソッド：POST  
リクエストパラメータ：
```json
player_name = data.get("PlayerVoice", "MAIN")  # MAIN：メインキャラクター  ASSISTANT：アシスタント
text = json["text"]  # 返信テキスト
lanuage = json["lanuage"]  # チャット言語：AutoChange=インテリジェント言語認識【感情変化の影響あり】、英語：en、日本語：jp、韓国語：kor、広東語：yue、中国語：zh；例：en または AutoChange を渡す；
emotion_array = json["emotion"] # 配列を入力["开心","可爱"]、感情変化：平淡,开心,伤心,生气,尴尬,害怕,可爱,激情,害羞,调皮,感激,深情,疑惑,搞笑,挑衅,无奈,好奇 
voiceType = json["voiceType"]  # 音声タイプ： chat=時系列ストリーミング返信、other=その他の返信
```
戻り値：
```json
{"status": "成功"}
```

## 4、AI返信テキスト：
用途：AIがユーザーに返信するテキスト。通常はチャット返信欄の表示に使用します  
アドレス：ws://localhost:18765  
メソッド：WebSocket  
リクエストパラメータ：  
ws接続時にまずプラグインを登録する必要があり、登録後に返信テキストがコールバックされます  
```json
{"register": "聊天回复"}
```
戻り値：  
```json
{"type": "聊天回复", "voiceType":音声カテゴリ，chat：チャット音声|other：その他音声, "index": ストリーミング返信のインデックス位置, "traceid": 同じ音声シーケンスIDは同じ, "chatStatus": start|空|end, "text": 返信テキスト}
```

## 5、コメント集約：
用途：B站、抖音、斗魚、虎牙、快手、WeChatライブ配信、QQ、バックエンドなどすべてのプラットフォームのコメント取得    
アドレス：ws://localhost:18765  
メソッド：WebSocket  
リクエストパラメータ：  
ws接続時にまずプラグインを登録する必要があり、登録後に返信テキストがコールバックされます  
```json
{"register": "弹幕"}
```
戻り値：  
```json
{"type": "弹幕", "style": "聊天", "channel": "チャンネル名", "username": "ユーザー名", "msg": "コメントメッセージ", "uface": "コメント送信ユーザーのアバター画像", "level": "ユーザーレベル"}
```

## 6、キャラクター表情トリガー：
用途：Live2Dキャラクターの表情をトリガーします    
アドレス：ws://localhost:18765  
メソッド：WebSocket  
リクエストパラメータ：  
ws接続時にまずプラグインを登録する必要があり、登録後に返信テキストがコールバックされます  
```json
{"register": "表情"}
```
戻り値：  
```json
{"type": "表情", "name": "表情名"}
```
