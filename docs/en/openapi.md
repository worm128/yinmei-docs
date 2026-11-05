## 1. Chat Interface:
Purpose: AI Chat
Address: http://127.0.0.1:9888/msg
Method: POST
Request Parameters:
```json
query = data["msg"] # Get the message content
uid = data["uid"] # Get the user's nickname
user_name = data["username"] # Get the user's nickname
uface = data["uface"] # User avatar
channel = data.get("channel", "api") # Channel ID
chat_interrupt = data.get("chat_interrupt", False) # Chat interruption parameter
```
Return Parameters:
```json
{"status": "Success"}
```
## 2. Command Interface:
Purpose: [No message prompt box] Initiate commands such as: sing, change song, stop learning a song, draw, emoticon, video, stop video, dance, stop dancing, search, image search
Address: http://127.0.0.1:9888/hand_action
Method: POST
Request Parameters:
```json
query = data["msg"] # Get the message content
uid = data["uid"] # Get the user's nickname
username = data["username"] # Get the user's nickname
uface = data["uface"] # User avatar
channel = data.get("channel", "api") # Channel ID
```
Return Parameters:
```json
{"status": "Success"}
```

## 3. Repeat:
Purpose: Read text aloud
Address: http://127.0.0.1:9888/say
Method: POST
Request Parameters:
```json
question = json["question"] # Question text
text = json["text"] # Reply text
lanuage = json["lanuage"] # Chat Language: AutoChange = Intelligent language recognition [affected by emotion changes], English: en, Japanese: jp, Korean: kor, Cantonese: yue, Mandarin: zh; Example values: en or AutoChange;
emotion_array = json["emotion"] # Requires an array ["happy", "cute"], Emotional variations: neutral, happy, sad, angry, embarrassed, scared, cute, passionate, shy, playful, grateful, affectionate, confused, funny, provocative, helpless, curious
voiceType = json["voiceType"] # Audio type: chat = Time-series reply, other = Other reply
```
Return Parameters:
```json
{"status": "Success"}
```
## 4. Reply Text:
Purpose: AI reply text
Address: ws://localhost:18765
Method: WebSocket
Request Parameters:
When connecting to ws, you must first register the plugin before the reply text callback will be processed.
```json
{"register": "Chat Reply"}
```
Return Parameters:
```json
{"type": "Chat Reply", "voiceType": Voice type, chat: Chat voice | other: Other voice, "index": Streaming reply index, "traceid": Same ID for each voice sequence, "chatStatus": start|empty|end, "text": Reply text}
```