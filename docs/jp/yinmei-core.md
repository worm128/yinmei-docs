## クイックスタート
**ダウンロードパッケージ：**  
ダウンロードパス：「吟美核心」フォルダ内  
アプリケーションパッケージ：AI-YinMei-v2.4.3.zip  
**起動方法：**
「start.bat」または「yinmei-core-api.exe」をダブルクリックして起動  

![0.png](../images/yinmei-core/0.png)

> 起動成功：管理バックエンドアドレス

![00.png](../images/yinmei-core/00.png)  
**アクセスアドレス：** http://127.0.0.1:9000  

## クイック設定
> 以下の2つの設定を行えば、すぐにチャットを開始できます  

1、[チャット設定](#_2、汎用AIチャット)  
2、[音声設定](#三、音声合成)  
3、[対話を行う](#_24-チャット対話)  

## 吟美キー
### 1、キーの取得
この商品には吟美コア＋吟美分析モジュールのキーが含まれます。吟美キーの取得方法【以下のキーは有効期限1ヶ月】  
方法一、[0.88元割引キー](https://mall.bilibili.com/neul-next/detailuniversal/detail.html?page=detailuniversal_detail&itemsId=40254757&loadingShow=1&noTitleBar=1#noReffer=true&msource=merchant_share) | [年間カード購入](https://mall.bilibili.com/neul-next/detailuniversal/detail.html?isMerchant=1&page=detailuniversal_detail&saleType=10&itemsId=12988851&loadingShow=1&noTitleBar=1&msource=merchant_share) | [歌唱機能](https://mall.bilibili.com/neul-next/detailuniversal/detail.html?page=detailuniversal_detail&itemsId=13024783&loadingShow=1&noTitleBar=1#noReffer=true&msource=merchant_share)    
方法二、吟美ライブルームで抽選して取得。吟美の配信中に「抽選」と入力するとキー抽選に参加できます。1回の抽選に500ポイントを消費し、ギフト0.1元【1電池】で100ポイント、いいねやチャットで1ポイント獲得できます  
キーが使えないという表示が出た場合は、キーを購入するかライブルームでキー抽選を行ってください。【キー抽選確率：8%、およそ12回に1回当たり、12回の費用は約6元。時間をかけて抽選したくない場合は、直接吟美キーを購入してください】    
![166.png](../images/funcall/16.png)  
注意：この商品リンクを購入後、B站：程序猿的退休生活 または QQ：314769095 に連絡してキーを取得してください。トップページのマシンコードを提供してキーを生成する必要があります  
![15.png](../images/funcall/15.png)  

### 2、キーの設定
プロジェクトのバックエンド画面のトップページでキーを置き換えます  
![121.png](../images/yinmei-core/121.png)  


## 有料プラグイン
### 1、チャット＋感情提示エフェクト
チャット＋感情提示エフェクト：無料。コアのhtml\chat-tipフォルダ内  
![00.png](../images/plug/聊天提示.jpg)  
OBSに2つのブラウザプラグインdecision.htmlとemotion.htmlを設定  
![00.png](../images/plug/webplug.png)  

### 2、AI吟美gpt-sovits語気参照音声
語気参照音声：無料。gpt-sovits合成統合パッケージに内蔵済み  
![00.png](../images/plug/参考音频.png)  
![107.png](../images/yinmei-core/107.png)  
![108.png](../images/yinmei-core/108.png)  
デフォルト参照音声設定：  
```json
{
    "平淡": "引航者，你来啦，这已经是香奈美第九十六次做蛋包饭了，应该成功了吧。",
    "开心": "蛋糕都已经端到你的面前了，快许个心愿吧。",
    "伤心": "哎，多少会有点不舍吧，毕竟是个很浪漫的故事，我还想再多回味下呢。",
    "生气": "记错了，那不是他，为什么唯独对这件事印象这么深刻？",
    "尴尬": "这，都是少女的心病呀。",
    "害怕": "非常感谢你的应援，我会继续努力，绝不辜负你的期待。",
    "可爱": "晚上好，想来听我唱歌吗？能缓解一整天的疲惫哦。",
    "激情": "圣诞节的钟声已经敲响了，你看到香奈美挂好的新袜子了吗？",
    "害羞": "你是特意来见我的吗？",
    "调皮": "好在意呀好想知道，啊要不要下次换上凯文的外套来试试他的反应呢欸嘿",
    "感激": "谢谢你的支持，我会继续努力的。",
    "深情": "毕竟，我这一次又是来请他帮忙的，被他听到，恐怕要了不得了呢。",
    "疑惑": "嗯？你刚才是不是在偷瞄我？",
    "搞笑": "拜托了医生，对我来说这真的很重要。",
    "挑衅": "你是说特别漂亮，还是特别可爱？",
    "无奈": "啊，原来你对他比对我更感兴趣吗？啊真让人伤心。",
    "好奇": "你会怀疑我吗？会，远离我吗？"
}
```

### 3、チャット返信ボックス
新デザイン-チャット返信ボックス：無料。コアのhtml\chat-replyフォルダ内  
![00.png](../images/plug/回复框效果.png)  


### 4、吟美の毒舌と優しいプロンプト
吟美の毒舌と優しさの設定方法：[ダウンロード](https://mall.bilibili.com/neul-next/detailuniversal/detail.html?isMerchant=1&page=detailuniversal_detail&saleType=10&itemsId=12477860&loadingShow=1&noTitleBar=1&msource=merchant_share)  
![78.png](../images/yinmei-core/78.png)  

### 5、ギフトと艦長登録エフェクト
エフェクトプラグイン：無料。コアのhtml\effectフォルダ内  
![126.png](../images/yinmei-core/126.jpg)  
![127.png](../images/yinmei-core/127.png)  

## Dockerインストール
<b><font color='red'>Dockerのインストールは必須です。Dockerがないと吟美はデータベース記憶、大規模モデルツール、抽選、ユーザー記録、チャット記録などの機能マトリクスを失います</font></b>  
<b><font color='blue'>注意：中国国内の方はVPN（魔法）がないとDockerを使用できません</font></b>  
### 1、Windowsのwslをアップグレード
```bash
# プロキシを設定。管理者権限のcmdが必要
netsh winhttp set proxy 127.0.0.1:10806
# ダウンロード。web-downloadの方が高速
wsl --update --web-download
```
### 2、Windows用dockerのダウンロードとインストール
[ダウンロードとインストール](https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe)  

### 3、Dockerソフトのインストール失敗はネットワーク関連の可能性
吟美コアのstart.bat起動コマンドの1行目に追加するとダウンロードがスムーズになります。ただしVPNソフトが必要で、ポートはVPNソフトに対応させてください  
```bash
set ALL_PROXY=http://127.0.0.1:10806
```

## 一、チャット設定
### 1、AI名
> 吟美コアAI-YinMei-v2.0.0のstart.batを起動し、まずAIに名前を付けます。その後対話で名前を尋ねると、彼女はその名前で自分を呼びます

![1.png](../images/yinmei-core/1.png)

!> 「設定を保存」ボタンをクリックし、その後「設定を更新」ボタンをクリックしないと有効になりません。

![save.png](../images/yinmei-core/save.png)  
<br>

### 2、汎用AIチャット
#### 2.1 タイプ選択
> LLM大規模モデルで汎用チャットを選択できます。この機能はすべてのOpenAI仕様APIに適合します

汎用チャットを選択：  
![3.png](../images/yinmei-core/3-1.png)  
プロバイダー選択ボタンをクリックすると、プロバイダー一覧がポップアップ表示されます：  
![3.png](../images/yinmei-core/3-2.png)  
プロバイダーを選択：  
![3.png](../images/yinmei-core/3-3.png)  
プロバイダーを選択すると自動入力されます。アドレスは自動入力されるので、キーを変更するだけで済みます。キーは先頭にBearer＋半角スペースを保持してください：    
![3.png](../images/yinmei-core/3-4.png)  

**サービスアドレス：**  
阿里百炼を例に：https://help.aliyun.com/zh/model-studio/developer-reference/use-qwen-by-calling-api

![4.png](../images/yinmei-core/4.png)

**キー：**  
阿里百炼を例に：https://bailian.console.aliyun.com/?apiKey=1#/api-key

![5.png](../images/yinmei-core/5.png)  

**モデル名：**  
テキスト生成モデルを参照【阿里百炼の例】：  
https://help.aliyun.com/zh/model-studio/getting-started/models  

**LLM設定パラメータ：**  
![124.png](../images/yinmei-core/124.png)  

**履歴記録：**  
AIチャットのコンテキスト長。通常、一問一答が1つの履歴記録です  

**max_tokens integer（オプション）**  
モデルが生成できる最大Token数。  
デフォルト値と最大値はどちらもモデルの最大出力長です。各モデルの最大出力長についてはモデル一覧を参照してください。  
max_tokensパラメータは、文字数を制限する必要がある場合（要約、キーワード生成など）、コストを制御する場合、応答時間を短縮する場合に適しています。  

**top_p float（オプション）**  
核サンプリングの確率しきい値。モデルが生成するテキストの多様性を制御します。  
top_pが高いほど、生成されるテキストは多様になります。逆に低いほど、生成されるテキストは確定的になります。  
値の範囲：（0,1.0]  
temperatureとtop_pはどちらも生成テキストの多様性を制御できるため、どちらか一方のみを設定することを推奨します。  

**temperature float（オプション）**  
サンプリング温度。モデルが生成するテキストの多様性を制御します。  
temperatureが高いほど、生成されるテキストは多様になります。逆に低いほど、生成されるテキストは確定的になります。  
値の範囲： [0, 2)  
<br>

#### 2.2 対応プラットフォーム
> OpenAI仕様APIに対応するプラットフォームには、クラウドの阿里百炼、智谱清言、ローカルサービスのOneApi、Xinferenceなどのインターフェースがあります

##### 1、阿里百炼 
阿里百炼に含まれる102個のテキスト生成モデル。[モデル一覧を見る](https://bailian.console.aliyun.com/?spm=5176.29619931.J_SEsSjsNv72yRuRFS2VknO.2.74cd405fRO0JGF&tab=doc#/doc/?type=model&url=2840914)    
https://www.aliyun.com/product/bailian
![6.png](../images/yinmei-core/6.png)  

##### 2、智谱のモデル  
GLM4、GLM4.5、GLM4.6などのモデル。[モデル一覧を見る](https://open.bigmodel.cn/pricing)    
https://open.bigmodel.cn/ 
![7.png](../images/yinmei-core/7.png)  


##### 3、ローカルサービス 
**ローカルOneApi**  
プロジェクトアドレス：https://github.com/songquanpeng/one-api  
OneApi中継場ジャンプ台接続：ローカルまたはクラウドサービス  
インターフェース：http://IP:13000/v1/chat/completions  
コンテナインストール：  
```dockerfile
docker run --name one-api -d --restart always -p 13000:3000 -e TZ=Asia/Shanghai -v /j/ai/ai-code/one-api:/data justsong/one-api
```
<br>

**ローカルXinference**  
インターフェース：http://IP:9997/v1/chat/completions  
github：https://github.com/xorbitsai/inference  
コンテナインストール：
```dockerfile
docker run --name xinference -d -p 9997:9997 -e XINFERENCE_HOME=/data -v </on/your/host>:/data --gpus all xprobe/xinference:latest xinference-local -H 0.0.0.0
```
一部の大規模モデルの起動に失敗する場合は、--shm-size 20gを追加して仮想メモリを増やしてください  

<br>

**ローカルollama**  
インターフェース：http://IP:9997/v1/chat/completions  
コンテナインストール：  
```dockerfile
docker run -d -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
```
<br>

##### 4、その他のクラウドサービス  
【智谱清言】  
https://open.bigmodel.cn/  
テストキー：Bearer xxx  
リクエストインターフェース：https://open.bigmodel.cn/api/paas/v4/chat/completions  
モデル：glm-4-flashx  
【阿里百炼】  
https://www.aliyun.com/product/bailian  
テストキー：Bearer xxx  
リクエストインターフェース：https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions  
モデル：qwen2.5-72b-instruct  
モデル一覧：https://help.aliyun.com/zh/model-studio/getting-started/models?spm=a2c4g.11186623.help-menu-2400256.d_0_2.5a06b0a8eYXY9K  
【騰訊混元】  
https://console.cloud.tencent.com  
リクエストインターフェース：https://api.hunyuan.cloud.tencent.com/v1/chat/completions  
openaiキー：Bearer xxx  
モデル：hunyuan-turbo  
【火山エンジン】  
https://www.volcengine.com/
【百度クラウド】  
https://cloud.baidu.com/  
リクエストインターフェース：https://qianfan.baidubce.com/v2/chat/completions  
openaiキー：Bearer xxx  
モデル一覧：https://cloud.baidu.com/doc/WENXINWORKSHOP/s/Fm2vrveyu  
【deepseek】  
https://platform.deepseek.com/  
【シリコンフロー】  
https://www.siliconflow.cn/  


#### 2.3 万能拡張パラメータ
##### 1、検索パラメータ  
異なるLLMモデルプラットフォームで検索能力を有効にします。阿里百炼、智谱清言を例に説明します  
吟美コアの【APIリクエストパラメータ拡張】に検索設定を追加  
![125.png](../images/yinmei-core/125.png)  
```json
{
    "enable_search":true,
    "tools": [{
        "type": "web_search", "web_search": {"enable": true}
    }]
}
```

**阿里百炼検索：**  
https://bailian.console.aliyun.com/?accounttraceid=ce194831be774d6a91188482feb46b54xrie#/model-market/detail/qwen-plus-latest  
![8.png](../images/yinmei-core/8.png)  

**glm検索：**  
https://www.bigmodel.cn/dev/howuse/websearch  
![9.png](../images/yinmei-core/9.png)  
<br>

##### 2、深い思考  
**智谱清言：**  
ドキュメント：https://docs.bigmodel.cn/cn/guide/start/concept-param#thinking  
```json
{
    "thinking": {
          "type": "disabled"
    }
}
```

#### 2.4 チャット対話
![39.png](../images/yinmei-core/39.png)  

### 3、Fastgptチャット設定
#### 3.1 アカウント登録
**国際版：**https://tryfastgpt.ai/  
**国内版：**https://fastgpt.cn/  
上記2つのリンクはどちらも使用できます。国際版と国内版のアカウントは相互に連携しません。新規登録ユーザーは100ポイントを無料で使用できます  
以下は私の紹介リンクです。よろしければ私のリンクから登録していただけると、ポイントを獲得できます  
**紹介リンク：**https://cloud.fastgpt.in/?hiId=66a6e08d37c6b5e286e375e7  

#### 3.2 fastgptワークフローのインポート  
網盤からfastgptワークフロー設定をダウンロード  
![10.png](../images/yinmei-core/10.png)  

空白のワークフローを新規作成  
![11.png](../images/yinmei-core/11.png) 

名前を付け、空白ワークフローを選択  
![12.png](../images/yinmei-core/12.png) 

左上から設定をインポート：  
![13.png](../images/yinmei-core/13.png) 

ファイルをアップロード  
![14.png](../images/yinmei-core/14.png) 

設定を選択  
![15.png](../images/yinmei-core/15.png) 

ワークフローのインポート成功：  
![16.png](../images/yinmei-core/16.png) 

ナレッジベースを再選択する必要があります：インポートされた設定のナレッジベースはデフォルトで欠落しているため、ご自身のナレッジベースを再選択してください  
![17.png](../images/yinmei-core/17.png) 

手動で選択し、ご自身のナレッジベースを1つ選択  
![18.png](../images/yinmei-core/18.png) 

ナレッジベースを選択 
![19.png](../images/yinmei-core/19.png) 

選択後の画面  
![20.png](../images/yinmei-core/20.png)

ナレッジベースの参照がない場合は、このナレッジベース設定を削除できます  
削除後、フローの線が失われるので、<font color="red">手動で線を接続し直すことを忘れないでください</font>  
![21.png](../images/yinmei-core/21.png) 

ここで吟美には2つの性格が含まれています。私の形式を参考に、ご自身の性格特性を記入してください  
![22.png](../images/yinmei-core/22.png) 

右側のモデルは基本設定です  
1、ご自身のチャットモデルを選択  2、キャラクターの汎用設定はすべてここで設定  3、履歴記録：これはAIの短期記憶で、通常3~6が適切です  
![23.png](../images/yinmei-core/23.png) 

#### 3.3 fastgptクラウドサービスアドレスとキーの新規作成  
公開チャネルを選択し、APIアクセスで新しいキーを作成  
![24.png](../images/yinmei-core/24.png) 

名前を入力  
![25.png](../images/yinmei-core/25.png) 

キーを大切に保管  
![26.png](../images/yinmei-core/26.png) 

キーを吟美コアに反映  
パスワード：fastgpt-t21ZxdTJ2FxfRpXB3kbEwQRcDwffewaZR4kHBco66dutDyScSCAVJ  
キーの先頭にBearerがあり、上書きできないことを忘れないでください。実際のキーは：  
Bearer fastgpt-t21ZxdTJ2FxfRpXB3kbEwQRcDwffewaZR4kHBco66dutDyScSCAVJ  
![27.png](../images/yinmei-core/27.png) 

fastgptアドレス設定：  
クラウドサービスのAPIアドレス：https://api.fastgpt.in/api  
![28.png](../images/yinmei-core/28.png) 

吟美コアに設定するアドレス：http://192.168.2.198:3000/api/v1/chat/completions  
注意：ここでのクラウドサービスは短いhttps://api.fastgpt.in/apiです。原則としてドメイン＋ポートを置き換えるだけでよく、後ろの「/v1/chat/completions」を省略しないでください  
![29.png](../images/yinmei-core/29.png) 

設定を保存することを忘れないでください  
![30.png](../images/yinmei-core/30.png) 

## 二、ナレッジベースのインストール
<span style="color:red">注意：ナレッジベースは現在fastgptのみ対応しています。fastgptのナレッジベース機能だけを使用し、チャット機能は使用しないことも可能です</span>  
[クリック>>>>>>> 公式インストールチュートリアル](https://doc.fastgpt.cn/zh-CN/self-host/deploy/docker)  
### 1、新版インストール
docker compose設定をダウンロード：
グローバルリソース
```cmd
curl -fsSL https://doc.fastgpt.io/deploy/docker/main/global/docker-compose.pg.yml -o docker-compose.yml
```
中国リソース
```cmd
curl -fsSL https://doc.fastgpt.io/deploy/docker/main/cn/docker-compose.pg.yml -o docker-compose.source.yml
```
設定 パスワード＋アクセスアドレス＋サンドボックス。パスワードは4.17以降で有効でなくなったようです。アカウントはroot、パスワードのデフォルトは123456  
```cmd
root 默认密码（重启后会强制重置该密码成环境变量值）
x-default-root-psw: &x-default-root-psw '9280691521a476ee'
FastGPT 前端访问地址，必须填写用户实际访问 FastGPT 的地址
x-fe-domain: &x-fe-domain 'http://localhost:3000'
Sandbox Proxy WebSocket 地址，必须填写用户实际访问地址
x-agent-sandbox-proxy-url: &x-agent-sandbox-proxy-url 'ws://127.0.0.1:3006'
Sandbox Proxy HTTP 预览地址，必须填写用户实际访问地址
x-agent-sandbox-preview-proxy-url: &x-agent-sandbox-preview-proxy-url 'http://127.0.0.1:3006'
```

起動
```cmd
docker-compose up -d
```

### 2、手動インストール
私のcompose設定をダウンロードして使用：[docker-compose.yml](https://docs.yinmei.vip/images/docker-compose.yml)  
ダウンロード後、このdocker-compose.ymlファイルのディレクトリでそのまま実行してください。適切な場所を選んで保存することをおすすめします。fastgptファイルが生成されます  
```cmd
docker compose up -d
```
アカウント：root  
パスワード：123456  

## 三、音声合成
### 1、Microsoft edge-tts設定
音声設定スイッチをオンにし、音声としてMicrosoft edge-ttsを選択します。これは別途プロジェクトをデプロイする必要がなく、直接使用できます
![30.png](../images/yinmei-core/30.png)  

### 2、cosyvoice2設定
<span style="color:red">注意：cosyvoiceは2モデルのみ対応しています。1代目はすでに削除しました</span>  
#### 2.1、ソフトウェアのダウンロード
##### 1、Docker版
**説明：** Docker版はvllm加速に対応しており、合成速度が最も速いバージョンです  
**コンテナアドレス：** https://hub.docker.com/r/worm128/yinmei-cosyvoice  
**実行コマンド：**  
**イメージ：**worm128/yinmei-cosyvoice:latest  
**Windows docker cmdで実行：**  
```cmd
docker run -d ^
  --name yinmei-cosyvoice ^
  --gpus all ^
  -p 50001:50001 ^
  -p 50000:50000 ^
  -e MODEL_DIR=pretrained_models/CosyVoice2-0.5B ^
  -e PORT=50001 ^
  -e WEBPORT=50000 ^
  -e LIMIT_COUNT=5 ^
  -e MODE=3 ^
  worm128/yinmei-cosyvoice:latest
```

##### 2、Windows版
**説明：** Windows版はvllm非対応です。私はcuda12.9をインストールしており、50系、40系のNvidia GPU、A100、A5000などを含むすべてのGPUと互換性があるはずです  
**百度網盤：** [ダウンロード](https://pan.baidu.com/s/1z8W_iZFvstmL2AR9i_cx5Q?pwd=i4mp)&nbsp;&nbsp;&nbsp;抽出コード: i4mp  
**夸克：** [ダウンロード](https://pan.quark.cn/s/e19caa11c9d8)&nbsp;&nbsp;&nbsp;抽出コード：DejZ  

### 3、gpt-sovits設定
<span style="color:red">注意：gpt-sovits【全シリーズ1~4、pro、pro plus対応】</span>  
#### 3.1、ソフトウェアのダウンロード
- **音声をより生き生きとさせたい場合は、gpt-sovits製品を選択できます**  
- <font color="red" style="font-weight:bold">統合パッケージはすでに網盤に置いてあります。GPT-SoVITS-v2.zipはGPT-SoVITSの2.0バージョンです：</font>  
**吟美統合パッケージのダウンロード先：**  
百度網盤グループ：「百度網盤->メッセージ」からグループ番号を追加してください   
百度網盤グループ番号1：930109408（満員）  
百度網盤グループ番号2：939447713（満員）   
百度網盤グループ番号3：945900295（満員）   
百度網盤グループ番号4：969208563  
百度網盤グループ番号5：975062976  
百度網盤グループ番号6：975962307  
**夸克：**   
夸克グループ1：1231405830   
夸克グループ2：428937868  
  
**gpt-sovits pro plus最新パッケージ：**  
<font color="red">GPT-SoVITS-v2pro-yinmeiダウンロード：「yinmei-all」から「GPT-SoVITS-v2pro-yinmei」の圧縮パッケージをダウンロードし、解凍すれば使用できます</font>  
![118.png](../images/yinmei-core/118.png)  
  
Pro Plus音声モデルは内蔵済みで、十数個から選択できます。「音频启动.txt」の起動方法を参照してください  
![119.jpg](../images/yinmei-core/119.jpg)  

#### 3.2、音声設定
**音声設定：**  
![31.png](../images/yinmei-core/31.png)  

温度と話速はバージョン2.0にのみ有効です  
![32.png](../images/yinmei-core/32.png)  

GPT-SoVITS-v2を開き、api.batをダブルクリックすると起動できます  
![33.png](../images/yinmei-core/33.png)  

#### 3.3、ソフトウェアの起動
**IP設定：**  
メモ帳でapi.batファイルを編集します  
音声をLAN上の別マシンにデプロイしている場合は、そのマシンのIPを設定してください  
音声と吟美コアが同じマシンの場合は、デフォルト設定の127.0.0.1です  
ポートはデフォルト9880です。ポートが競合する場合は別のポートを設定してください  
![105.png](../images/yinmei-core/105.png)  

**全量合成：api.batをダブルクリックしてソフトを起動：**  
**ストリーミング合成：api-stream.batをダブルクリックしてソフトを起動：**  
![34.png](../images/yinmei-core/34.png)  

**起動成功画面：**  
起動に成功すると、現在設定されているIPアドレスが表示されます  
![104.png](../images/yinmei-core/104.png)  

#### 3.4、音声モデルの選択
**GPT-SOVITS2の音声モデルのダウンロード：**  
https://pan.baidu.com/s/14WUDbWnBn7GPQYVREkWMug?pwd=1145  
**<font color="red">特別感謝：</font>**  
B站「白菜工厂1145号员工」のGPT-SOVITS統合パッケージ共有とモデル共有に感謝  
B站「花儿不哭」のGPT-SOVITS技術研究開発に感謝  
![35.png](../images/yinmei-core/35.png)  

**モデルの使用：**  
CKPT拡張子のファイルをGPT_weights_v2に、pth拡張子のファイルをSoVITS_weights_v2に置きます  
![36.png](../images/yinmei-core/36.png)  

**起動スクリプト：**  
-sパラメータ：対応するpthモデルを使用  
-gパラメータ：対応するckptモデルを使用  
-drパラメータ：参照音声ファイルのパス  
-dtパラメータ：参照音声のテキスト内容  
-a "192.168.2.57"：ご自身のIPパスに変更することを忘れないでください  
-p：ポート変更用。サービスポートが競合する場合はこれを変更してください  
```bash
chcp 65001
runtime\python.exe api.py -s "./SoVITS_weights_v2/虎克_e10_s320.pth" -g "./GPT_weights_v2/虎克-e10.ckpt" -dr "./参考音频/虎克/激动-鼹鼠党，出动！勇敢鼹鼠向前冲！.wav"  -dt "激动-鼹鼠党，出动！勇敢鼹鼠向前冲！" -cp ",.，。!！?？" -dl "auto" -d cuda -a "192.168.2.57" -p 9881 -fp
pause
```

#### 3.5、アシスタント音声設定
ここではアシスタントが話す音声をトリガーします。上記の設定と同じにするか、別の声のgpt-sovitsサービスを追加で起動できます  
アシスタントの音声：歌唱返信、お絵描き返信、ダンス返信、入室歓迎メッセージ、ポイント読み上げなどの発話でこのアシスタント音声を参照します  
アシスタント用にgpt-sovitsサービスをもう1つ起動する必要があります。音声ポートをメインキャラクターのポートと分け、その新しい音声アドレスをサービスIPとポートに設定します  
![38.png](../images/yinmei-core/38.png)  

### 4、bert-vits2設定
#### 4.1、ソフトウェアのダウンロード
- **音声合成速度をより速くしたい場合は、bert-vits2製品を選択できます**  
- <font color="red" style="font-weight:bold">統合パッケージはすでに網盤に置いてあります。yinmei-Bert-VITS2-ui.zip圧縮パッケージ：</font>  
**吟美統合パッケージのダウンロード先：**  
百度網盤グループ：「百度網盤->メッセージ」からグループ番号を追加してください   
百度網盤グループ番号1：930109408（満員）  
百度網盤グループ番号2：939447713（満員）   
百度網盤グループ番号3：945900295（満員）   
百度網盤グループ番号4：969208563  
百度網盤グループ番号5：975062976  
百度網盤グループ番号6：975962307  
**夸克：**   
夸克グループ1：1231405830   
夸克グループ2：428937868  
#### 4.2、モデル切り替え
ルートディレクトリのconfig.ymlファイルにmodelsというパラメータがあり、その中にmodelとconfigがあります。ここでモデルファイルとモデル設定を変更します  
モデルはすべてmodel_clapフォルダに置きます。model_clapフォルダに入り、モデルElysia159000を探します  
モデル設定ファイルconfig.jsonを開き、spk2idパラメータの値がモデルの声です。それを吟美コアのメインキャラクター音声->話者音声に入れます  

### 5、音声チャンネル
#### 5.1、スピーカーへ直接出力
音声にチャンネル選択を追加。デフォルトではスピーカーへ出力され、【デスクトップペットのlive2D_audio_deviceパラメータ】または【VTSの口パク設定】で音声をキャプチャされ、口パクの一致を実現します  
![66.png](../images/yinmei-core/66.png)  
#### 5.2、仮想チャンネルB2へ出力
吟美コアで音声メインキャラクターの出力チャンネルをVoicemeeterのB2仮想チャンネルに設定する場合  
![123.png](../images/yinmei-core/123.png)  
#### 5.3、仮想チャンネルの割り当てロジック
メインキャラクターは仮想チャンネル2、アシスタントは仮想チャンネル3に対応し、チャンネルを分けることで異なるキャラクターの口パクに影響しません      
![4.png](../images/yinmei-desktop-plus/4.png)  
#### 5.4、仮想チャンネルは音声を監視する必要がある
チャンネルでスピーカーを選択した場合は、そのままスピーカーで音声を聞けます。Voicemeeterの仮想チャンネルを出力にした場合は音声が聞こえないため、以下の設定でスピーカーから仮想チャンネルの音声を監視できるようにする必要があります  
![122.png](../images/yinmei-core/122.png)  


### 6、感情語気
#### 6.1、語気設定プラン  
参照音声を設定。1つの感情名が1つの参照音声ファイル名に対応します  
![106.png](../images/yinmei-core/106.png)  
> 例： "开心": "蛋糕都已经端到你的面前了，快许个心愿吧。"  

「开心」の感情に遭遇すると、参照音声「蛋糕都已经端到你的面前了，快许个心愿吧。.WAV」を使用します  
<br>

#### 6.2、参照音声設定
gpt-sovitsの「语气」フォルダに音声ファイル「蛋糕都已经端到你的面前了，快许个心愿吧。.WAV」を追加する必要があります  
参照音声が必要な場合は、こちらからダウンロードしてください：無料、gpt-sovits統合パッケージ内  

![107.png](../images/yinmei-core/107.png)  
![108.png](../images/yinmei-core/108.png)  

## 四、キャラクター  
### 1、VTube Studio
#### 1.1、キャラクターパラメータ設定
**スキン教程：**  
https://www.bilibili.com/video/BV1nV4y1X7yJ/  

VST公式キャラクターパラメータ説明：https://github.com/DenchiSoft/VTubeStudio/wiki/VTS-Model-Settings  
VST手パラメータ：https://www.bilibili.com/video/BV1CW4y1A77p  
関連モーションドキュメント：https://www.bilibili.com/read/cv18777039/  

#### 1.2、キャラクターの口パク
##### 1、仮想サウンドカードのインストール：
**仮想サウンドカードドライバー（Virtual Audio Cable）4.66 公式版**  
https://www.pcsoft.com.cn/soft/123115.html  
![108.png](../images/yinmei-core/109.png)  

**Voicemeeter仮想サウンドカード：**  
https://vb-audio.com/Voicemeeter/banana.htm  
![110.png](../images/yinmei-core/110.png)  

##### 2、仮想音声チャンネル設定：
教程：https://www.bilibili.com/video/BV1BPfVY9Epz  
視聴：34:44  
![117.png](../images/yinmei-core/117.png)  

1、仮想音声チャンネルの区分：  
歌唱伴奏：第1仮想出力チャンネル  
歌唱ボーカル：第2仮想出力チャンネル  
チャット発話：第2仮想出力チャンネル  
アシスタントチャット：第3仮想出力チャンネル  
説明：第2仮想チャンネルを使用するのは、live2Dキャラクターの口パク一致のためです。他の音声がキャラクターの口パクに影響しないよう、この第2チャンネルはキャラクターの声のみに使用し、伴奏、音楽、メインキャラクターの対話音声などはこの第2チャンネルを使用しません  
![111.png](../images/yinmei-core/111.png)  

2、voicemeeterは必ずMMEのスピーカーを設定してください。そうしないとVtube Studioで仮想マイクを選択できません  
![112.png](../images/yinmei-core/112.png)  

3、voicemeeterでAuxをB2チャンネルへ出力するよう選択  
![113.png](../images/yinmei-core/113.png)  

4、VTSでOUT B2を選択  
![114.png](../images/yinmei-core/114.png)  

5、VTSで口パクモーションが音声と音声周波数で変化するよう設定することを忘れないでください  
![115.png](../images/yinmei-core/115.png)  

#### 1.3、キャラクターモーション連動
動画：https://www.bilibili.com/video/BV1PMq9YZEWS  
視聴：29:20  
![116.png](../images/yinmei-core/116.png)  

### 2、吟美デスクトップペット
[デスクトップペット設定](yinmei-desktop-plus)


## 五、ライブ配信設定  
### 1、コメント
B站オープンプラットフォームの開設を申請して設定します。詳細は[コメント集約](#十二、コメント集約)  
コメント対応：B站、WeChatライブ配信、抖音、快手、斗魚、虎牙  
![40.png](../images/yinmei-core/40.png)  
B站オープンプラットフォームを開設申請後、プロフィールでキーを確認  
![41.png](../images/yinmei-core/41.png)  
データをここに記入します  
access_key_id：B站オープンプラットフォームKeyId  
access_key_secred：B站オープンプラットフォームキー  
関連ライブルーム：B站ライブ配信ルーム番号  
![42.png](../images/yinmei-core/42.png)  
アバターをクリックすると、URLのidが「ライブ配信ユーザーUID」です  
![43.png](../images/yinmei-core/43.png)  
![44.png](../images/yinmei-core/44.png)  
新規プロジェクト->ライブ配信ツールで、ライブ配信アプリidを取得  
![45.png](../images/yinmei-core/45.png)  
プロジェクトIDを吟美コア2.0の「B站オープンプラットフォームアプリid」に入力  
![46.png](../images/yinmei-core/46.png)  
最後に、設定を保存してアプリを再起動すると有効になります  


### 2、ライブルームでチャット開始  
**チャット開始テキスト：**fuck you  
![47.png](../images/yinmei-core/47.png)  
バックエンドがAI返信とコメントをキャプチャ  
![48.png](../images/yinmei-core/48.png)  
新デザイン-チャット返信ボックス：無料、コアhtml\chat-replyフォルダ内    
![00.png](../images/plug/回复框效果.png)  
BliveChatプロジェクト、右側コメントエリア設定：  
プロジェクトアドレス：https://github.com/xfgryujk/blivechat  
![49.png](../images/yinmei-core/49.png)  

**dockerコンテナ起動：**  
**アクセスアドレス：**http://localhost:12450  
```dockerfile
docker run --name blivechat  -d -p 12450:12450 -v blivechat-data:/mnt/data xfgryujk/blivechat:v1.9.3
```  

また、B站配信者の身分コードを正しく設定する必要があります  
![50.png](../images/yinmei-core/50.png)  
アクセスアドレス：http://localhost:12450、入って身分コードを設定してください  
![51.png](../images/yinmei-core/51.png)  
コンテナ起動完了後、自動的にBliveChatプロジェクトが関連付けられます  

### 3、OBSソフト連動
**WSサービス連動：**  
![52.png](../images/yinmei-core/52.png)  
**ws設定：**  
![53.png](../images/yinmei-core/53.png)  
**設定インポート**  
![54.png](../images/yinmei-core/54.png)  

**シーン切り替え：**  
"ユーザーが「切り替え＋シーン名」を入力した場合： ピンクの部屋、神社、海岸花坊、花房、朝の部屋。システムは時間に応じて朝晩のシーン切り替えをインテリジェントに判定し、朝、夕方、夜でシーンが変化します。  
部屋名とBGMを設定：  
![55.png](../images/yinmei-core/55.png)  
昼のエフェクト  
![56.png](../images/yinmei-core/56.png)  
夜のエフェクト
![57.png](../images/yinmei-core/57.png)  

### 4、Vtube Studioスキン連動
#### 4.1 表情を登録
![58.png](../images/yinmei-core/58.png)  
**登録を確認**  
![59.png](../images/yinmei-core/59.png)  
**プログラムがキーを自動書き戻し**  
![60.png](../images/yinmei-core/60.png)  
**設定を保存し、アプリを再起動すると有効になります**  
![61.png](../images/yinmei-core/61.png)  
**リンク状態**  
![62.png](../images/yinmei-core/62.png)  

#### 4.2 vtube studioの必須表情を設定
**表情方式：**  
表情名：开心、哭、捂嘴、生气、尴尬、认同、汗颜、晕、可爱、摸摸头  
表情名はvtuber studioの表情命名と一致させる必要があります  
![63.png](../images/yinmei-core/63.png)  
**アクセサリ方式：**摸摸头はアクセサリ方式です  
![64.png](../images/yinmei-core/64.png)  

**着せ替えエフェクト：**  
"ユーザーが「着せ替え＋服の名前」を入力すると服装を変更できます：普段着、愛の翼、青春猫娘、メガネ猫娘  
**設定内容：**  
![65.png](../images/yinmei-core/65.png)  

### 5、吟美音声チャンネル設定
#### 5.1、音声チャンネル
音声にチャンネル選択を追加。デフォルトではスピーカーへ出力され、【デスクトップペットのlive2D_audio_deviceパラメータ】または【VTSの口パク設定】で音声をキャプチャされ、口パクの一致を実現します  
![66.png](../images/yinmei-core/66.png)  
#### 5.2、歌唱チャンネル
![67.png](../images/yinmei-core/67.png)  

## 六、データベース
### 1、ライブ配信エフェクト
https://www.bilibili.com/video/BV1FwP1zWEBp/  
> ここでmongodbを作成すると、チャット記録、ユーザー登録、ユーザーポイントなどの機能がサポートされます  

### 2、インストール手順
#### 2.1、データベース
Linux版：   
```dockerfile
docker pull mongo:6.0.16
```

window版：[ダウンロード](https://www.mongodb.com/try/download/community)  

#### 2.2、コンテナ実行
```dockerfile
docker run -itd --name yinmei-data -p 27018:27017 -e MONGO_INITDB_ROOT_USERNAME=winlone -e MONGO_INITDB_ROOT_PASSWORD=123456 -v /j/ai/ai-code/yinmei-data/:/data/db mongo:6.0.16 --auth
```
一部の古いシステムで操作権限の問題が発生する場合は-u 999を使用してください  
```dockerfile
docker run -itd --name yinmei-data -p 27018:27017 -e MONGO_INITDB_ROOT_USERNAME=winlone -e MONGO_INITDB_ROOT_PASSWORD=123456 -v /j/ai/ai-code/yinmei-data/:/data/db -u 999 mongo:6.0.16 --auth
```

### 3、チャット記録
> ここでllmを呼び出す際、短期記憶はここから記憶を抽出します  

![68.png](../images/yinmei-core/68.png)  

> 一方、長期記憶は吟美インテリジェント分析モジュールを呼び出してベクトル化クエリを行います。そのため短期記憶と長期記憶は異なる方法で呼び出されます。

![69.png](../images/yinmei-core/69.png)  

> チャット記録  

![74.png](../images/yinmei-core/74.png)  

### 4、ユーザー登録
> B站オープンプラットフォームに依存し、ユーザーがB站ライブルームに入室して初めてユーザー情報登録が生成されます  

以下はユーザーリスト  
![70.png](../images/yinmei-core/70.png)  

### 5、ポイント機能
> ユーザーが自分のポイントを照会するには「我的积分」、ポイントランキングを見るには「排行榜」と入力します。チャット、いいね、ギフトでポイントが増加し、歌唱、お絵描き、ダンスで一定のポイントが差し引かれます。新規ユーザー登録の基本ポイントは50です。  

**チャット、いいね、ギフトでポイント増加：**  
![71.png](../images/yinmei-core/71.png)  
**歌唱、お絵描き、ダンスでポイント消費**  
![72.png](../images/yinmei-core/72.png)  
**「排行榜」キーワードでポイントランキング照会；「我的积分」で自分のポイント確認**  
![73.png](../images/yinmei-core/73.png)  

**ユーザーポイント履歴：**  
![75.png](../images/yinmei-core/75.png)  


## 七、感情システム
### 1、感情認識
> 感情の役割：ユーザーの異なる質問を通じてAIの感情を変化させ、話す語気、音声の抑揚、キャラクター性格、話す言語などで変化させます  

> 感情タイプ：平淡,开心,伤心,生气,尴尬,害怕,可爱,激情,害羞,调皮,感激,深情,疑惑,搞笑,挑衅,无奈,好奇  

!> 吟美分析モジュール：yinmei-analysisを通じて、ユーザーの質問から感情を分析します  

?> 質問：私がリクエストした音楽はどこ？   分析された感情：疑惑  
![76.png](../images/yinmei-core/76.png)  

**ユーザーテキストポップアップ＋感情ポップアップ＋意思決定ポップアップ**  
エフェクトプラグイン：無料、コアhtml\chat-tipフォルダ内  

### 2、性格設定
**性格設定の役割：**感情変化に応じてキャラクターの性格特性を変化させます。性格は複数カスタマイズできます。  
設定プランのkey値。例えば「女仆版」は対応するプロジェクトのプロンプト設定です。  
吟美の毒舌と優しさの設定方法：[ダウンロード](https://mall.bilibili.com/neul-next/detailuniversal/detail.html?isMerchant=1&page=detailuniversal_detail&saleType=10&itemsId=12477860&loadingShow=1&noTitleBar=1&msource=merchant_share)   
**性格設定の場所：**キャラクター性格[🌟]: /prompt/character/  
![77.png](../images/yinmei-core/77.png)  
```json
"怒怼版": ["生气"]
```
もちろん、複数の感情を同時に同じ設定プランに属させることもできます  
```json
"怒怼版": ["生气","尴尬","调皮","搞笑"]
```
PS：ここに注意が必要です。複数の感情が同時に複数の性格をトリガーした場合、吟美はランダムに1つの感情を選んで対応する性格プロンプトを抽出します  
![78.png](../images/yinmei-core/78.png)  
> プロンプトを修正した後、ボタンをクリックしてキャラクタープロンプトを更新すると、無感知でリアルタイムにプロンプトを更新できます  

> 例えば、最初に設定した吟美が怒り系プロンプトで、何を言っても毒舌で怒った言葉遣いだったのが、優しい版プロンプトに置き換えてキャラクタープロンプトを更新すると、吟美は瞬時に優しく可愛い子猫のイメージに変わります。  

### 3、表情トリガー
#### 3.1、揺れモーション
**効果：**キャラクターは発話中や歌唱中に体のモーションが揺れます  
**モーション録画：**キャラクターのモーションを自身で録画。**動画チュートリアルを見る：**https://www.bilibili.com/video/BV1aT421X7tF/  
モーション生成後、vtsで表情名を設定してください  
![79.png](../images/yinmei-core/79.png)  
key名はvtsの表情名、endwaitはこのモーションの実行時間で、時間が来ると自動的にモーションを終了します  
![80.png](../images/yinmei-core/80.png)  

#### 3.2、表情トリガー
**key値は表情名、value値はAIキーワード返信テキスト**  
![81.png](../images/yinmei-core/81.png)  
  
**表情連関設定プランの名前「开心」はVTSの表情名です**  
![82.png](../images/yinmei-core/82.png)  
  
**keyは吟美の返信キーワード、donumは表情を実行する回数、timesleepは次回表情を実行するまでの待ち時間【秒】**  
![83.png](../images/yinmei-core/83.png)  

> 各文字の計算時間を0.3秒に設定し、表情トリガーの時間計算間隔として使用します。キャラクターの話速に応じて調整してください  

**設定例：**
```json
“"开心": {"key":["不错","开心","呵","嘻","画","搜","有趣"],"donum":1,"timesleep":0}"  
```
**ユーザーの質問：**吟美こんにちは、可愛いね  
**吟美の回答：**本当？私はとても<font style="color:red; font-weight:bold;">开心</font>だよ、<font style="color:red; font-weight:bold;">呵呵</font>  
キーワード「开心」と「呵」が开心表情をトリガーすることがわかります。各文字の朗読速度設定は0.3で、开心は6文字目から始まるため、0.3\*6=1.8秒で开心表情をトリガーし、「呵」は11文字目から始まるため、0.3\*11 = 3.3秒で表情をトリガーします  

#### 3.3、言語変化
![84.png](../images/yinmei-core/84.png)  

!> キーワード＋感情変化に応じて言語を変化させます

**言語選択：**自動適応に設定した場合のみ感情に応じて言語が自動変化します。「なし」に設定した場合はLLMが出力した言語のみになります  
**言語一覧：**英語：en、日本語：jp、韓国語：kor、広東語：yue、中国語：zh  
> checktype: "question"、"answer"、"emotion"の3タイプを検出可能。questionはユーザーの質問、answerはAI返信、emotionはAI感情；  
> pattern: 正規表現ルールマッチングに対応；  
> percentはトリガー確率。値が大きいほどトリガーされやすい。値の範囲：0~100  

## 八、QQボット
### 1、napcat設定
![85.png](../images/yinmei-core/85.png)  
QQボットを選択した後、QQ情報を収集するためにnapcatソフトをインストールする必要があります  
#### napcatインストール：
- window版インストール：  
https://github.com/NapNeko/NapCatQQ/releases  
最新版を選択してインストールしてください  
![86.png](../images/yinmei-core/86.png)  
- docker版インストール：  
```bash
sudo docker run -d \
  -p 31002:31002 \
  -p 6099:6099 \
  -v /data/program/ai-yinmei/exp:/data/program/ai-yinmei/exp \
  -v /data/program/ai-yinmei/output/:/data/program/ai-yinmei/output/ \
  -v /data/program/ai-yinmei/porn/:/data/program/ai-yinmei/porn/ \
  -v /data/program/ai-yinmei/视频/:/data/program/ai-yinmei/视频/ \
  -v /data/program/ai-yinmei/吟美歌曲/:/app/napcat/吟美歌曲/ \
  -v /data/program/ai-yinmei/docker/napcat/qq/:/app/.config/QQ  \
  -v /data/program/ai-yinmei/docker/napcat/config:/app/napcat/config \
  --name yinmei-napcat \
  mlikiowa/napcat-docker:latest
```
表情画像パスのマッピング：-v /data/program/ai-yinmei/exp:/data/program/ai-yinmei/exp  
検索画像パスのマッピング：-v /data/program/ai-yinmei/porn/:/data/program/ai-yinmei/porn/  
曲パスのマッピング：-v /data/program/ai-yinmei/吟美歌曲/:/app/napcat/吟美歌曲/
音声合成のマッピング：-v /data/program/ai-yinmei/output/:/data/program/ai-yinmei/output/
QQグループへの動画送信のマッピング：-v /data/program/ai-yinmei/视频/:/data/program/ai-yinmei/视频/
napcat設定マッピング1：-v /data/program/ai-yinmei/docker/napcat/config:/app/napcat/config
napcat設定マッピング2：-v /data/program/ai-yinmei/docker/napcat/qq/:/app/.config/QQ
<font color="red">注意：napcatがコンテナモードの場合、表情パスをコンテナ内にマッピングすることを忘れないでください。そうしないと表情を送信できません</font>  

- Linux版インストール：  
```bash
curl -o napcat.sh https://raw.githubusercontent.com/NapNeko/NapCat-Installer/main/script/install.sh && bash napcat.sh
```
アクセス：http://192.168.2.89:6099   

#### napcat設定チュートリアル：
https://napneko.github.io/  
![87.png](../images/yinmei-core/87.png)  
websocketサーバーを設定し、ポートを31002に設定、tokenは任意で定義  
![88.png](../images/yinmei-core/88.png)  
設定後、吟美コアのnapcat websocket設定で連動が必要  
![89.png](../images/yinmei-core/89.png)  

### 2、ウェイクアップコマンド
```json
["吟美","小银","小淫","小美","渣美","电脑","模型","技术","唱","画画","绘画","搜","查","表姐","表情"]
```
QQグループで吟美、画画、技术など上記設定のウェイクアップコマンドに遭遇すると、吟美が起動して対話します。またはQQグループで直接@吟美、または直接引用返信すると、吟美の対話がトリガーされます  
![90.png](../images/yinmei-core/90.png)  

### 3、QQ名簿設定
![91.png](../images/yinmei-core/91.png)  
Q番号は現在のAIのQQ番号です  
**QQグループホワイトリスト：**QQに数十個のQQグループを追加していても、QQグループをホワイトリストに設定しないと、吟美はQQ情報を監視しません  

### 4、その他の設定
![92.png](../images/yinmei-core/92.png)  
**QQ情報のフィルタリング：**QQグループに参加した後にQ群管家のようなボットと無限ループチャットになるのを防ぐため、これらのQQボットの情報をフィルタリングするように設定  
**QQグループロールのフィルタリング：**QQグループのユーザーロールに応じて設定可能。例：admin：管理者；member：一般ユーザー；owner：グループオーナー

**共有情報件数：**QQグループの共有情報を監視する件数。QQグループのチャットコンテキストと連動でき、複数ユーザーが混在するチャット情報です  
**音声をトリガーする言語：**QQ音声送信をトリガーする言語。yueに設定すると広東語を話す場合に必ず音声を送信します。言語一覧：英語：en、日本語：jp、韓国語：kor、広東語：yue、中国語：zh  

### 5、確率設定
![93.png](../images/yinmei-core/93.png)  
確率値の範囲：0~100  
@某人の確率：  
![94.png](../images/yinmei-core/94.png)  
引用返信の確率：   
![95.png](../images/yinmei-core/95.png)  
音声送信の確率：  
![96.png](../images/yinmei-core/96.png)  
戳一戳の確率：  
![97.png](../images/yinmei-core/97.png)  

### 6、スタンプ学習
![98.png](../images/yinmei-core/98.png)

!> 1、重要：スタンプの学習と送信には、吟美データベースサービスの起動が必要です  

![99.png](../images/yinmei-core/99.png)  
<br><br>
2、学習モードは3種類。0は学習しない、1は公式で命名済みの表情を学習、2はユーザーがカスタムした表情で、吟美がコンテキストのキーワードを総合して命名します  
![100.png](../images/yinmei-core/100.png)  
<br><br>
3、スタンプ保存パスの設定を忘れないでください：  
![101.png](../images/yinmei-core/101.png)  

## 九、検索
### 1、百度検索
セキュリティ検証がトリガーされる可能性があります。異常捕捉でジャンプする百度セキュリティ認証コードに注意し、手動で認証アドレスにアクセスした後にブラウザのcookieを再度コピーしてください  
**アクセスアドレス：**https://www.baidu.com/s?ie=utf-8&tn=baidu&wd=%E6%80%AA%E4%BA%BA  
ブラウザF12でメッセージヘッダーを確認します。【値のコピー】ボタンを使用してcookieの欠落を防いでください  
![102.png](../images/yinmei-core/102.png)  

### 2、searxng集約検索
#### 2.1、searxngサービスのインストール
手動インストール：  
```dockerfile
docker run -d -p 10800:8080 ^
    -v "/j/ai/ai-code/searxng:/etc/searxng" ^
    -e "BASE_URL=http://localhost:8080/" ^
    -e "INSTANCE_NAME=winlone-searxng" ^
    --name "searxng" ^
    searxng/searxng
```
自動インストール：  
![134.png](../images/yinmei-core/134.png)  
初回インストール時にdockerイメージが自動ダウンロードされ、ダウンロード完了後にコンテナが自動起動します。コンテナ設定はdocker/searxng/settings.yml設定ファイルを使用します  

#### 2.2、searxngの設定
プロジェクト内のdocker/searxng/settings.yml設定ファイルを見つけます  
formatsパラメータに設定を追加し、サービスがAPIインターフェースを提供するようにします  
```json
formats:
    - html
    - json
```
プロキシ設定。VPN（魔法）がないとGoogleにアクセスできません  
```json
proxies:
      all://:
        - http://127.0.0.1:10806
```

#### 2.3、searxngへのアクセス
htmlサービス：http://localhost:10800/  
jsonインターフェースサービス：http://localhost:10800/search?format=json&q=doro  
PS：jsonインターフェースサービスに正常にアクセスできる必要があり、その場合のみ検索サービスを使用できます  

### 3、duckduckgo検索
duckduckgo検索は中国国内ではVPN（魔法のインターネット）が必要です。IPとポートは実際の状況に応じて設定してください  
プロキシ設定：  
```json
{"http": "socks5://127.0.0.1:10806", "https": "socks5://127.0.0.1:10806"}
```

## 十、インテリジェント機能  
### 1、mcpサービス
#### 1.1 mcpサービスの必要ソフト  
##### Windowsインストール
**UVXツールのインストール**  
方法 1: PowerShell  
```bash
$env:HTTP_PROXY = "http://127.0.0.1:10806"
$env:HTTPS_PROXY = "http://127.0.0.1:10806"
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"  
```
方法 2: winget  
```bash
winget install --id=astral-sh.uv -e  
```
重要：wingetの場合、インストール完了後にコマンドライン/IDEを再起動してください  

**NPXツールのインストール**  
nodejsのインストールが必要で、npmパッケージマネージャーが付属しています  
ダウンロード：https://nodejs.org/zh-cn/download  

**mcp-proxyのインストール**  
mcp-proxyをグローバルインストール：mcpサービスにSSE能力を外付け  
```bash
npm install -g mcp-proxy
```

サービス起動：「全部一次性开启.bat」をダブルクリック  

##### Linuxインストール
**UVXツールのインストール**  
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
source $HOME/.local/bin/env
uvx --version
```

**NPXツールのインストール**  
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm -v
# プロキシを設定
export NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node
nvm install --lts
```

**mcp-proxyのインストール**  
mcp-proxyをグローバルインストール：mcpサービスにSSE能力を外付け  
```bash
npm install -g mcp-proxy
```

サービス起動：bash ./全部一次性开启.sh  
サービス停止：bash ./全部一次性关闭.sh  


#### 1.2 mcpツールの設定  
上記MCPサーバーでキーの追加が必要なモジュール：  
tavilyフォルダのstart.shスクリプトでTAVILY_API_KEYパラメータを探し、TAVILYサイトで[API Keys](https://app.tavily.com/home)を確認  
mcp-server-tmdbフォルダのstart.shスクリプトでTMDB_API_KEYパラメータを探し、TMDBの[APIキー](https://www.themoviedb.org/settings/api)をコピー  

**ステップ1、機能リストを開く：**
![1.png](../images/funcall/1.png)  
**ステップ2、ツールを追加：**   

!> 機能リストメニューに入ると、右上に追加ボタンがあるのでクリックして追加  

**1、stdio方式**  
ツールタイプでstdioを選択し、実行コマンドとmcp名を入力して、ボタンをクリックして設定を生成します  
メソッド名とfunction call呼び出し関数は自動生成されます  
![2.png](../images/funcall/2.png)  
注意：stdio方式は毎回ツールを初期化する必要があるため、呼び出し速度はsseより遅くなります  
  
**2、sse方式**  
ツールタイプでsseを選択し、sseアドレスを入力します。sseは自分で手動でサービスを起動する必要があります  
![3.png](../images/funcall/3.png)  
sse起動のワンクリックパッケージ。私が設定済みのソフトを使用でき、ダウンロード後にstart.batをクリックすれば直接使用できます  
![4.png](../images/funcall/4.png)  
任意のmcpサービスに入り、startb.batスクリプトをダブルクリックするだけ  
![5.png](../images/funcall/6.png)  
ポートが表示されれば起動成功です  
![6.png](../images/funcall/7.png)  

#### 1.3 mcpプラグインコードのカスタマイズ
**依存パッケージのインストール：**   
npxインストール：bilibili-mcp依存パッケージを事前に1回インストールし、初回のnpx bilibili-mcp起動が固まらないようにします  
npxはjsコードです  
```bash
npx bilibili-mcp
```  

uvxインストール：mcp-server-calculator依存パッケージを事前に1回インストールし、初回のuvx mcp-server-calculator起動が固まらないようにします  
uvxはpythonコードです  
```bash
uvx mcp-server-calculator
```  

**メソッド定義の設定**  
pluginフォルダの下に新しいpyファイルexample.pyを作成し、DefaultMCPというクラス名を定義できます  
新しいプラグインを作成する際は、このように設定できます  
![5.png](../images/funcall/5.png)  

**以下は対応コードです。start_info, func_param, process_infoの3つの値は必須です。具体的な説明はコードのコメントを参照してください**  
```python
from func.log.default_log import DefaultLog
from func.tools.singleton_mode import singleton
from func.base.entity import ChatEntity
import asyncio, json
from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client
from mcp.client.sse import sse_client
import json5

@singleton
class DefaultMCP:
    log = DefaultLog().getLogger()

    def __init__(self):
        pass

    def custom_do(self, start_info, func_param, process_info):
        '''
        カスタムメソッド-mcpでも、自分で書いたコードメソッドでも可能
        :param start_info:  command=mcpを有効にするコマンド、mcp_name=mcp名、sseurl=sseアドレス、env=環境変数
        :param func_param: llmが選択したツール内容を返す：'function': {'name': 'mcp_howtocook_whatToEat', 'arguments': '{"peopleCount": 2}'}}]}
        :param process_info:   dict構造体：queryはユーザー質問、chatEntityはユーザー情報
        :return: result=結果文字列またはdictを返せる、is_stop=true：チャットを継続  false：直接抜けて以下のチャット操作を実行しない
        '''
        
        # 1、ここで自分でmcp接続を書けます
        # 2、自分でコードをカスタマイズできます。必ずしもmcpである必要はありません
        return "", True
``` 

**mcpのstdio接続方式：**  
command：起動コマンド  
args：起動コマンド名  
env：環境変数。設定を入れることができます：{ "HTTP_PROXY": "http://127.0.0.1:10806", "HTTPS_PROXY": "http://127.0.0.1:10806" }  
```nodejs
server_params = StdioServerParameters(
                command="npx",
                args=["bilibili-mcp"],
                env=None,  # ここで環境変数を設定可能
            )
```
stdioリンクコード  
```json
server_params = StdioServerParameters(
    command=cmd,
    args=mcp_names,
    env=env
)

async with asyncio.timeout(20):  # 20秒タイムアウト
    async with stdio_client(server_params) as (stdio, write):
        async with ClientSession(stdio, write) as session:
            await session.initialize()  # セッションを初期化
            arguments = func_param["arguments"].replace('\n', '')
            json_args = json5.loads(arguments)
            func_name = func_param["name"]
            self.log.info(f"\033[44m\033[97m 准备请求stdio类型的mcp名称:{mcp_name},方法名:{func_name},参数:{json_args}\033[0m")
            result = await session.call_tool(func_name, json_args)
            return result
```
**mcpのsse接続方式：**  
bilibili-mcp設定： 
command：起動コマンド  
args：起動コマンド名  
env：環境変数。設定を入れることができます：{ "HTTP_PROXY": "http://127.0.0.1:10806", "HTTPS_PROXY": "http://127.0.0.1:10806" }  
```nodejs
server_params = StdioServerParameters(
                command="npx",
                args=["bilibili-mcp"],
                env=None,  # ここで環境変数を設定可能
            )
```
sseリンクコード  
```json
async with asyncio.timeout(20):  # 20秒タイムアウト
    async with sse_client(start_info["sseurl"]) as streams:
        async with ClientSession(*streams) as session:
            await session.initialize()
            arguments = func_param["arguments"].replace('\n', '')
            json_args = json5.loads(arguments)
            func_name = func_param["name"]
            self.log.info(f"\033[44m\033[97m 准备请求sse类型的mcp名称:{mcp_name},方法名:{func_name},参数:{json_args}\033[0m")
            result = await session.call_tool(func_name, json_args)
            return result
```

#### 1.4 mcpプラグインのインポート  
説明：吟美のMCP機能設定リストには何も設定されていません。ご自身で設定する必要があります。設定済みのMCPサービスが必要な場合は、有料サポートをご利用ください  
**MCP購入先：** 無料、網盤のyinmei-all\mcpフォルダ内  
![8.png](../images/funcall/10.jpg)  
**購入ファイルの内容：**
- 各プラグインに*.batスクリプト起動があり、現在はWindowsシステムでの起動のみ設定済みです
- *.batスクリプトをダブルクリックすれば直接起動できます。各プラグインは1つのインターフェースを監視し、プラグイン起動ポートとsql設定ファイルは設定済みで変更不要です
- yinmei.func_call_list.jsonを吟美mongodbデータベースにインポートしてください
PS：インポート方法がわからない場合はB站：程序猿的退休生活までご連絡ください
- mcpフォルダ：インポート後、合計20個のプラグイン
![8.png](../images/funcall/8.png)  
![9.png](../images/funcall/9.png)  
- プロキシアクセスとキー：  
mcp-server-tmdb：キーとプロキシアクセスが必要。サイトアドレス：https://www.themoviedb.org/  
mcp-se-wikipedia：プロキシアクセスが必要。サイトアドレス：https://zh.wikipedia.org/    
tavily：キーが必要。サイトアドレス：https://www.tavily.com/  

### 2、新しいMCPを探す  
**MCPサービスサイトのおすすめ**  
https://mcp.so/  
https://mcp.aibase.cn/  
https://cloud.tencent.com/developer/mcp  
その後、上記のサイトで自分のMCPサービスを探せます  
例として、料理のMCPを探す場合、[詳細ページへ](https://mcp.so/server/howtocook-mcp/worryzyy) 
![13.png](../images/funcall/13.png)  
右側にこのMCPをインストールするスクリプトが表示されます  
```bash
npx -y howtocook-mcp
```
このスクリプトが料理MCPサービスのインストールスクリプトです  
吟美バックエンドの機能リストに移動し、追加をクリックして、下図の手順で新規作成します  
![14.png](../images/funcall/14.png)  
最後のステップ：設定生成ボタンをクリックすると、呼び出し関数のメソッド名が自動生成されます  


### 3、MCPエフェクト展示  
- **もしあなたが霊籠のキャラクター4068なら、どう選択しますか？**    
ツール：思考チェーン生成＋検索ツール＋TMDB映画情報照会  
![10.png](../images/funcall/10.png)  
- **10回転**  
ツール：キャラクター移動ツール
![11.png](../images/funcall/11.png)  
- **ここ数年で最も聴き心地のいい恋愛ドラマ主題歌は？**  
ツール：検索ツール &nbsp;&nbsp;&nbsp;&nbsp; **説明：**ここでは検索ツールを呼び出して曲を検索します  
![12.png](../images/funcall/12.png)  

### 4、MCP対応OBSプラグイン
1、ツール呼び出しヒント  
プラグインのパス：ai-yinmei/html/tools.html  
![17.png](../images/funcall/17.png)  
2、B站動画MCP  
プラグインのパス：ai-yinmei/vip/video.html  
![18.png](../images/funcall/18.png)  

## 十一、抽選サービス
### 1、抽選機能の取得  
<font color="red">ヒント：B站「程序猿的退休生活」に連絡して機能のロックを解除するか、QQ：314769095までご連絡ください</font>  
### 2、自動抽選  
#### 2.1、抽選エフェクト  
役割：無人でも抽選を実行できるようにし、24時間抽選イベントを実現します  
![3.png](../images/prize/3.png)  
#### 2.2、抽選方法  
B站で「抽選」または「抽選10」と入力すると抽選を開始できます。抽選10は10回連続抽選で、上限は最大10回、超過した場合は10回として処理されます  
#### 2.3、バックエンド設定画面  
一、自動抽選スイッチをオンにしてください  
![1.png](../images/prize/1.png)  

二、景品の設定  
データベースに景品をインポートしてください。現在画面設定は実装されていません  
抽選統合パッケージの「yinmei.prize_info.json」ファイルを使用して、吟美データベースのprize_infoテーブルにインポートします  
![7.png](../images/prize/7.png)  
1、prizename: 景品名  
2、action: 当選時の処理方式、礼品|ポイント|B站私信|なし。礼品は当選内容を記録するだけで他の操作なし、ポイントは当選後にユーザーへ直接ポイントを付与、B站私信は当選後にユーザーへB站の私信を直接送信【私信内容をカスタマイズ可能】、操作が不要な場合は「无」と記入。例：当選時
3、value: 景品内容。ポイントの場合はポイント報酬数値を設定【正数または負数、負数はポイント減算】、B站私信の場合は送信する私信内容テキストを設定【改行文字\n対応】  
4、prizeimg: 景品画像  
5、status: 景品状態、オン|オフ。オフに設定するとこの景品は抽選範囲に入りません  
6、num: 景品数量。数値を記入。景品数量は自動的に減算され、0になると抽選されません  
7、submitTime: 景品公開時間  
8、range: 当選確率。小数点を記入。0.2は20%、0.02は2%を表します    
9、prizetype: 当選タイプ、唯一|複数。唯一は各ユーザーが1回だけ当選し、当選後この景品は再度抽選されません。1回限りの抽選景品に適しています  
  
景品に私信送信を設定した場合、正常に送信するにはB站のログイン情報を設定する必要があります  
SESSDATA、bili_jct、buvid3、DedeUserIDが主なパラメータです  
![8.png](../images/prize/8.png)  
  
三、ユーザーがコメントで「抽選」と入力  
連続抽選は「抽選10」と入力  
![6.png](../images/prize/6.png)  
  
四、当選者リスト照会  
![2.png](../images/prize/2.png)  

#### 2.4、OBS設定  
ブラウザプラグインを新規作成し、自主抽選プラグインを配置：self-prize/prize.html  
![8.png](../images/prize/9.png)  

### 3、配信者による抽選制御 
#### 3.1、抽選エフェクト  
役割：この抽選機能は配信者が抽選フローを自主制御でき、バックエンド管理の「AI委任をオフ」と組み合わせて人的コントロールが可能です  
![4.png](../images/prize/4.png)    
  
#### 3.2、バックエンド設定画面  
![5.png](../images/prize/5.png)
1、抽選ルール：  
当選範囲はB站ライブルーム内のすべてのユーザーリスト＋バックエンド管理の抽選参加者名簿  
2、景品名：  
抽選景品のタイトル名  
3、景品画像：  
画像リンクまたはローカル画像パスを入れる  
4、回転速度：  
数値を記入。これは抽選ルーレットの回転速度で、値が大きいほど速く回転します  
5、メンバー設定：  
channel: 抽選チャンネルソース、username: 抽選ユーザー名、uid: Q番号またはb站uid、uface: ユーザーアバターリンク、switch: Trueは抽選名簿に追加 | Falseはuidに基づいて抽選名簿から除外  
  
#### 3.3、操作説明  
a.上記パラメータを設定したら、「抽選設定」をクリックすると、OBS画面に関連する景品画像とルーレットが生成されます  
b.「抽選開始」をクリックすると、ルーレットが回転し始めます  
c.「抽選停止」をクリックすると、ルーレットが徐々に停止し、1名のユーザーが当選します。対象範囲は【B站ライブルーム内のすべてのユーザーリスト＋バックエンド管理の抽選参加者名簿】で、確率は各ユーザー均等です。例えば10ユーザーなら各ユーザーの当選確率は10分の1です  
d.「抽選終了」をクリックすると、OBS画面のルーレットが消えます  

#### 3.4、OBS設定  
ブラウザプラグインを新規作成し、自主抽選プラグインを配置：prize/prize.html  
![10.png](../images/prize/10.png)  

## 十二、コメント集約
### 1、让弹幕飞
#### 1.1、はじめに  
表示エフェクト:https://www.bilibili.com/video/BV1iTqhBzEpt/  
オープンソースプロジェクト：https://github.com/OrdinaryRoad-Project/ordinaryroad-barrage-fly  
技術ドキュメント：https://barragefly.ordinaryroad.tech/  
現在の让弹幕飞プロジェクトは、抖音、快手、虎牙、斗魚のコメント取得技術を統合しています  
#### 1.2、インストール  
![128.png](../images/yinmei-core/128.png)  
「yinmei-barragefly」フォルダを見つけて中に入ります  
![128.png](../images/yinmei-core/129.png)  
「build.bat」をダブルクリックしてdockerコンテナを構築します。もちろん、WindowsまたはLinuxにdockerソフトがインストールされている必要があります  
![130.png](../images/yinmei-core/130.png)  
構築成功後、3つのコンテナが表示されます  
その後、アドレス http://localhost:6883 にアクセスできます  
アカウントとパスワード：admin
#### 1.3、設定  
![131.png](../images/yinmei-core/131.png)  
ライブルーム監視設定を新規作成  
![132.png](../images/yinmei-core/132.png)  
この快手の設定を見て、ライブルーム番号を記入し、できればブラウザのcookieも付けると効果が良くなります  
![133.png](../images/yinmei-core/133.png) 
