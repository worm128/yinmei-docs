## Ai Yinmei v2.4.2

### New Features:

1. QQ Group Super Administrator Mute: Sending profanities such as "your mother," "eat shit," or "fuck you" will result in varying degrees of mute. Mute words can be customized through vector caching.

2. QQ Group Super Administrator Recall: 1. Configuring keywords via vector caching in a plugin format. 2. Recalling advertisements and links through keyword-based full matching.

3. Fixed some issues with the QQ group's interactive layout, such as the "tap to view" feature appearing in the background.

4. Administrators and super administrators can control and manage certain group numbers and whitelist certain QQ accounts.

5. Image Context Association: Optimized the previous limitation that image analysis could only be performed within the same message body as text; now it can be set to associate with a certain number of context images.

6. Fixed the issue of QQ group globally shared messages being overwritten and ineffective. QQ group globally monitored messages are now effective, and the number of context images to be monitored can be set.

### Current QQ Robot Capabilities:

1. Message Recall

2. Mute messages for a period of time. 3. Ability to reply to chat, reply to knowledge manuals, and search for information.

4. Ability to analyze the context of multiple images.

5. Ability to search for and post videos on Bilibili.

6. Ability to search for and post images.

7. Ability to send voice messages.

8. Ability to sing.

## Ai Yinmei v2.4.1

### New Features:

1. Inputting free keys via LLM [Completed]

2. Reconnecting to the bullet screen button [Under testing]

3. OpenAI specification TTS [Completed]

4. Merging chats, queuing and summarizing chats every 10 seconds.

5. Dynamic routing of pre-tasks for customizable processes.

6. WeChat live streaming [Under development]

7. Multi-camera vision integration, multi-eye observation.

### Optimized Features:

1. Singing FastAPI [Completed]

2. Vector caching with a switch.

3. BERT VTS2 compatibility with 2.4 Yinmei [Completed]

4. Separation of chat and function call models.

5. 6. Added separators to speech synthesis to speed up speech [Completed]

7. Optimized some parameter settings for vision during glm [Completed]

## Ai Yinmei v2.4.0 [2026-02-04]

### New Features:

**1. VL Vision:**
Large model tools intelligently recognize vision, intent analysis recognizes vision, etc., allowing AI to recognize a video, an image, content on a screen, camera content, etc., a versatile vision system.

Regular patrols allow AI to continuously monitor your screen, allowing it to continuously accompany you while playing games.

**2. Super Aggregated Bullet Screen:**
Integrated with Douyin, Kuaishou, Douyu, Huya, plus the previous Bilibili, desktop pets, QQ robots, and backend systems, a total of 8 channels.

**3. Integration with New Voice Synthesis [cosyvoice2]:**
**Built-in clones of Mambo, Ma Baoguo, Cai Xukun, Crazy Mita, Beef AI, and other voices, customizable 3-second cloned voices, and configurable emotional tags, resulting in highly human-like voice synthesis. A super-emotional speech synthesis system with VLLM acceleration and fine-tuning of the underlying model, achieving a first syllable speed of 600 milliseconds.

**4. Baidu Translate:** More accurate, utilizing AI translation capabilities.

**5. Singing:** Added facial expression control.

**6. Desktop Pet:** Added a simple microphone mode [no character loading] and [memory-saving lightweight mode] to the desktop pet. When starting VTS, the microphone function can also be used for conversation.

**7. Character Activity:** XY-axis frequency jump function makes the swaying motion more dynamic. This effect will be reflected in singing and chatting.

**8. Publicly Available Lottery System:** [1] Conduct independent lottery draws based on point deductions. [2] The host conducts a group lottery in the live broadcast room the host controls the flow

**9. Prompt word compression technology:** This technology can reduce token loss while improving the understanding speed of the LLM model, ensuring semantic integrity.

**10. Multi-person AI interaction function:** Multiple AIs can chat with each other, supporting remote interaction.

### Public capabilities:

1. 25 large model tool plugins: Timed patrol, visual capabilities, image search, greeting operation, Wikipedia, TMDB movie rating website, browser manipulation, calculator, query user points, advanced search, thought chain, product information query, stock tool, time zone conversion, random number, cooking guide, changing character clothing, character movement and rotation, speech synthesis switch, speech speed adjustment, AI dancing, AI singing, AI painting, search tool

2. Lottery function: Autonomous lottery, group lottery

3. Intent analysis training: Customize intent classification, allowing multiple personalities to adapt to more different emotions, diversifying language, facial expressions, voice tone, and the operation of MCP and large model tools.

### Optimized Features:

**1. Yinmei Black Technology:** True Streaming AI Voice Interaction [Full-Link Streaming]
Speech Recognition [The only drawback is that streaming speech recognition in LLM makes segmented understanding impossible] -> LLM Streaming -> Speech Synthesis Model Generation Streaming -> Network Audio Transmission Streaming -> Player Streaming

This is true streaming TTS.

**2. Speech Synthesis Acceleration Optimization:** Cosyvoice2 synthesis speed improved to 0.6 seconds first packet response time, gpt-sovits synthesis speed improved to 0.4 seconds first packet response time, achieving full-streaming speech synthesis.

**3. XY Axis Jump:** Setting the xy-axis to 0 indicates the function is off; program initialization does not trigger xy-axis reset.

**4. Background Chat Interface:** Live streaming can be made into an aggregated bullet screen mode [Bilibili, Douyin, Kuaishou, Douyu, Huya, Yinmei Desktop Pets, Backend, API]

**5. Extended Hints for Interface Request Parameters:**

enable_search is the Alibaba Bailian search switch, web_search is the Zhipu search switch. `enable_thinking` is the Alibaba Deep Thinking switch, and `thinking` is the Zhipu Deep Thinking switch.

**6. QQ Robot Display Mode:** To avoid the risk of being banned by Tencent, using the global mode is the safest. Using the segmented mode will output a sentence in segments, and if the output density is too high, it will be banned by the Tencent system. [Global mode cannot send voice messages, only text.]

**7. Batch Switch Function List:** One-click import of all default functions for users to choose from.

**8. Chat Interface:** Markdown syntax is displayed in a friendly manner, supporting line breaks, etc.

**9. Optimization and Acceleration of Large Model Tools and MCP Tools:** Vector caching has been added to accelerate tool call speed. 25 large model tools can be called simultaneously without lag, with a 5x improvement in response speed.

**10. Desktop Pet Dialogue Supports Built-in Funasr:** No additional installation is required, improving ease of use. Continuous Conversation Made Easier

### Process Optimization:

1. Optimized and accelerated workflow for large model tools and MCP tools: Added vector caching, supporting asynchronous tool calls.

2. Optimized workflow conflicts between intent analysis and large model tools.

3. Container version + Windows version for speech synthesis.

4. Training can be operated through the intent analysis interface.

## Ai Yinmei v2.3.0 [2025-7-15]

### 1. Intelligent Capabilities: Yinmei can access thought chains, advanced search, product information query, stock tools, time zone conversion, random numbers, cooking guides, AI singing, drawing, and dancing, speech speed adjustment, video search and playback, character movement and rotation, changing character clothing, Wikipedia, and calculator.

**Thought Chains:** When you ask Yinmei to think about how China can defeat the United States, or to seriously consider assembling an 8000 yuan AI computer for you, or to analyze which three A-share stocks to buy next week using thought chains, Yinmei will activate thought chains for continuous thinking.

**Advanced Search:** Ask her to find today's latest news, check the weather in a certain area, ask about recent breakthroughs in quantum technology, and see what new artificial intelligence technologies are emerging.

**Product Information Inquiry:** Ask Yinmei for a price quote on a 5070ti graphics card. Yinmei will check prices on Pinduoduo and JD.com. You can ask her to find three Pinduoduo stores with high-performance graphics cards at competitive prices.

**Stock Tools:** [Stock Prices, Information, Stock Analyst Advice] Ask Yinmei to analyze the recent trend of a stock code or name to determine if it's worth buying.

**Random Numbers:** [Can generate random names, numbers, etc.] Ask Yinmei to create five random names, generate three security keys, or predict tomorrow's fortune.

**Cooking Guide:** Ask Yinmei to teach you how to cook and recommend what to eat for dinner and breakfast.

**AI Singing, Drawing, and Dancing Intelligence:** Ask Yinmei to recommend new anime songs for July and find the most popular female vocal songs of the year.

**Speech Speed Adjustment:** Make her speak quickly, speak very quickly, speak a little faster, speak slowly, speak very slowly, etc.

**Video search and playback:** Searches for videos on Bilibili, which will then play on the monitor. Let Yinmei find you the silliest videos of Xiang Zuo, etc.

**Character Movement and Rotation:** Make Yinmei move left, right, up, and down; make her fly; make her burrow underground; make her run fast; make her spin in circles, up to 10 circles (maximum 10 circles).

**Changing Character Clothing:** Make Yinmei dress sexier; make her wear glasses, etc.

**TMDB Movie Ratings:** Let Yinmei recommend highly-rated new movies.

**Calculator:** Basic calculation functions.

**Check User Points:** Let Yinmei check your points.

**Wikipedia:** Detailed queries for certain knowledge points.

**Browser Control:** Can control Google Chrome.

### 2. GPT-Sovits2 Pro Plus Upgrade: 
Yinmei is now compatible with the entire GPT-Sovits1~4+Pro+Pro Plus series. Synthesis speed improved, sound quality improved, and a new voice has been trained.  

### 3. 10-Draw Lottery: 
Enter "Draw 10" to automatically draw 10 times. The maximum number of draws per draw is 10. Multiple draws are possible. If you haven't yet participated in the July Yinmei Key lottery, or cannot use Yinmei Core or other modules, please come to the live stream to participate.  
Prizes include: Live2D Little Flower Bud, Fulin'er, Little Cake, Lanxi VUP Background: Lemonade Memory, Yinmei Key, 300 Points, 800 Points  

## Ai Yinmei v2.2.0 [May 8, 2025]
**1. QQ Bot：**Added Yinmei QQ bot. Multiple bots can be created, allowing interaction with AI in QQ groups and private chats. QQ bots can also interact with livestreams and learn emoticons. QQ bots include singing, drawing, image search, and information search.
**2. Desk Pet 2.0：**Added VAD biopsy and voiceprint systems to effectively address issues with speaker echo during microphone conversations. Allows accurate AI chats in complex environments without headphones.
**3. Emotion System：**Added 17 emotions: [Bland, Happy, Sad, Angry, Embarrassed, Afraid, Cute, Passionate, Shy, Playful, Gratitude, Affectionate, Confused, Funny, Provocative, Helpless, Curious], adapting the AI's personality, voice tone, language, and current mood.
**4. Added custom configurations：**Customizable active chat operations [including singing, drawing, dancing, changing chat topics, searching for news and weather reports, switching scenes, and changing costumes], voice [singing, accompaniment, main character TTS, assistant TTS], volume adjustment, personality configuration, voice tone configuration, swing action configuration, expression association configuration, language change configuration, singing action configuration, QQ robot configuration, search splitting between DuduckGo and Baidu [Baidu sets cookies], initialization scene configuration, random background music changes, and background image time period switching.
**5. Other Feature Optimizations：**AI multi-state real-time monitoring, turning on and off AI hosting, forced language output, [channel splitting, intent, emotion display, and avatar display] in the user list and chat list, shared information settings [improving AI chat comprehensive judgment capabilities]
**6. Added multi-tone voice synthesis：**Configure voice changes for different emotions such as anger, happiness, and embarrassment based on voice tone variation schemes
**7. Bug Fixes：**Fixed the bug where the "no thank you" feature was displayed when boarding, and eliminated the automatic song switching bug when singing songs

PS: This update includes 12 configuration options and many minor adjustments, such as refreshing real-time configuration, adjusting volume in four positions, viewing all operation status in real time, and manual user-machine switching.

## Ai Yinmei v2.1.1 [2025-2-8]
**1. Added Configuration：**Long-term memory reset
**2. LLM Configuration:**
**Filter character paragraphs:** Used to filter thought strings similar to DeepSeek R1's "think" function, and can also filter expressions within ()
**Skill Prompts:** Added skill prompts for [Singing, Drawing, Chatting, and Dancing]. Word limits can be set in the chat skill settings, and support for random word limits.

**3. Intent Analysis:** Text extraction tool, supports general chat configuration.

**4. Skin Configuration:** Dynamically configure background images. If you set the same scene for the same time period, a random selection can be made. You can set rain, snow, and sunny scenes. The system will then randomly select a scene.

**5. NSFW Detection:** Configure image blocking. Images displayed after NSFW blocking.

**6. Points Configuration:** Points can be configured for [new user registration, liking, singing, drawing, dancing, song switching, regular gifts, RMB sending, and joining a ship]. A point recharge function has also been added, allowing you to recharge points for specific users.

## Ai Yinmei v2.1.0 [January 10, 2025]

**1. Windows Desktop Pet Pairing:** Added Websocket communication desktop pets, background desktop pet configuration, etc.

## Ai Yinmei v2.0.1 [2024-12-21]
**1. Upgraded Universal Ai Cloud Interface：**Connects to more Ai Cloud services, such as Alibaba Bailian, Zhipu, Tencent Hunyuan, Baichuan Intelligence, Wenxin Yiyan, ChatGpt, ByteDance's Doubao, and other cloud service platforms.
**2. Customizable Welcome Messages for Users Entering Livestreams**

## Ai Yinmei v2.0.0 [2024-12-6]
Epic Architecture Upgrade
**1. Upgraded Backend Management System：**Enables better management of Ai Digital Humans.
**2. Divergent Thinking：**Enables the use of online memes from QQ group chats to enrich and innovate chat content.
**3. Long-Term Memory：**Intelligently recalls Ai memory by evaluating user conversation content. Not all sentences will be recalled.
**4. Intent Analysis：**Intelligently determines user intentions, including: chatting, drawing, singing, dancing, searching, searching for images, changing songs, switching scenes, and changing outfits.