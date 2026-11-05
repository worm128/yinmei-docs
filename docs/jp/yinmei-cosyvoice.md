# 【すぐに使える】【CosyVoice2】【阿里音声合成】【2025年10月】【NVIDIA GPU版-グラフィックカードなしでは実行不可】
⚠️説明：このモデルには`cosyvoice2のモデル、CosyVoice-ttsfrd、SenseVoiceSmall、wetext`などのモデルが内蔵されており、すべてのPython依存パッケージ（vllm加速パッケージを含む）がインストール済みです。オンラインダウンロードは不要のため、イメージサイズは大きくなりますが、すぐに使えることを重視し、ネットワークダウンロードエラーや依存パッケージのインストールエラーなどを削減しています。  
💖ようこそ。vllm加速パッケージ：cosyvoice2、初回パケット応答：0.6秒、rtf：0.4~0.7、GPU：4070tis  
<br>
## ✅️イメージ情報
**AI吟美音声合成CosyVoice2**  
**動画チュートリアル：[クリックして視聴](https://www.bilibili.com/video/BV1BdsozBEuV/)**  
**公式サイト：[www.yinmei.vip](https://www.yinmei.vip)**  
**QQグループ：27831318**  
**Docker版ダウンロード：[Dockerリポジトリ](https://hub.docker.com/r/worm128/yinmei-cosyvoice)**  
**Windows版ダウンロード：**   
[百度網盤](https://pan.baidu.com/s/10fmcGfksHsSKAS8LckYTqQ?pwd=29tq)   抽出コード: 29tq  
[夸克](https://pan.quark.cn/s/b666220e73c2)  抽出コード：kibi  

![吟美 Linux 開発システム](https://www.yinmei.vip/images/直播间封面.png)

---
## ✅️感情タグ
**感情音声合成：[公式例を確認](https://funaudiollm.github.io/cosyvoice2/)**  
ロールプレイ：  
```json
神秘<|endofprompt|>那座古老的城嬼罩梭神秧的雾气中
我想听听你模仿小猪佩奇的语气。<|endofprompt|>大家好，我是小猪佩奇，今天我和苏西羊一起去公园，我们在秋千上荡来荡去，开心极了，还一起玩了捉迷藏，真是个快乐的下午。
```
感情合成： 
```json
用开心的语气说<|endofprompt|>参加朋友的婚礼，看着新人幸福的笑脸，我感到无比开心。这样的爱与承诺，总是令人心生向往。
```
完全なタグ：  
```json
家人们，[breath]今天我吟美给你们唠唠这个CosyVoice声音克隆技术，[laughter]哈哈哈，[clucking][breath]这技术太厉害了！[breath]我刚试了试，[laughter]<strong>直接惊了</strong>，[hissing][breath]克隆得跟本人<strong>一模一样</strong>。[breath]你们也去试试，[accent][breath]我看着这技术，感觉未来都能克隆出个我来！[noise][breath]你们听听这效果，[mn][breath]太牛了！[clucking][breath]有点激动，[mn][breath]这技术真的太棒了，[laughter]家人们，[breath]赶紧去体验一下吧！<strong>爱</strong>你们哦！！[lipsmack][cough]我要睡觉了，[laughter]等我发布2点4点0版本后你们再尝试一下吧！
```
言語：  
中国語、英語、日本語、韓国語の自動適応に加え、方言にも対応しています  
```json
用四川话说<|endofprompt|>前儿个去宽窄巷子喝盖碗茶，坐在小板凳上头听人摆龙门阵，简直安逸得很，不想走哦。
```

## ✅️環境説明
⚠️CosyVoiceコンテナ内部バージョン【重要パッケージ】：  
torch：2.7.0  GPU版  必須かつGPU有効化済み  
vllm：0.9.0  GPUに強く依存（LLM推論加速用）  
transformers：4.51.3   GPU対応だがそれ自体は加速せず、PyTorchに依存  
tensorrt-cu12：10.0.1  高性能推論エンジン、GPU必須  

⚠️LinuxまたはWindowsホスト：   
nvidiaドライバーのインストールが必要：https://www.nvidia.cn/drivers/lookup/  
cudaドライバーのインストールが必要：https://developer.nvidia.com/cuda-toolkit-archive  
一般的に、nvidiaとcudaのバージョンは、ホストのcudaバージョンがコンテナ内のバージョンcuda12.8より大きくならなければ問題なく、下位互換性があります  

⚠️ホスト側のインストール要件：  
1、nvidiaドライバーをインストールすること  
2、cudaバージョン12.8以下をインストールすること。12.9でもよいと思いますが、ご自身でテストしてみてください  

⚠️バージョン説明：  
Windows版：  
```
yinmei-cosyvoice【40系以下グラフィックカード】.rar：torch2.6.0+cu124
yinmei-cosyvoice【全シリーズ互換】【torch2.8.0+cu129】：torch2.8.0+cu129
```
docker版：  
```
worm128/yinmei-cosyvoice:cu126：torch2.7.0+cu126
worm128/yinmei-cosyvoice:cu128 or latest：torch2.7.0+cu128
```

⚠️私のテスト環境：  
nvidiaドライバー：560.94  
cudaドライバー：12.6と12.4  
GPU：4070tis 16g、 3090ti 24g、 1060 6g  
システム：Windows11のwsl docker desktop  
VRAM使用量：docker版-4.4g使用、Windows版-3g使用  
メモリ使用量：8G-12g；ピーク時12g、アイドル状態8-9g    
ディスクイメージ使用量：38.78G  
gpt-sovits-proplusとの比較: メモリ：8g VRAM：2.5  

🚨コンテナ内でGPUが使用可能か検証：  
```shell
nvidia-smi
```
🚨ホスト内でGPUが使用可能か検証：   
```shell
nvidia-smi
nvcc -V
```

## ✅️問題まとめ
1、メモリが緩んで半分に減少する、メモリ不足でプロジェクト起動時にOOMになりプログラムが強制終了する  
2、QNAP NASの「--gpus all」でGPUドライバーをマッピングできない場合は手動設定が必要  
3、イメージ取得時にプロキシ（飛行場）のキャッシュ問題が発生する  
4、保証はできません： 魔改造docker、宝塔docker、NAS自作docker  
5、vllmは50系GPUで非互換です。GPUアーキテクチャの問題で、50系は12.0アーキテクチャ、40系は8.9アーキテクチャをサポートしますが、vllmインストール時のwheelパッケージは8.9以下のみ対応で、新バージョンは未対応のため解決方法は不明です。[アーキテクチャ説明](https://developer.nvidia.com/cuda/gpus)

vllmを50系NVIDIA GPUアーキテクチャ向けにコンパイル：
```shell
# 一、コンテナ内にcudaコンパイル環境をインストール。インストール後にnvcc -vで確認できること
wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2204/x86_64/cuda-keyring_1.1-1_all.deb && \
    dpkg -i cuda-keyring_1.1-1_all.deb && \
    apt-get update && \
    apt-get install -y cuda-toolkit-12-8 && \
    rm cuda-keyring_1.1-1_all.deb

# 二、vllmのインストール手順
export TORCH_CUDA_ARCH_LIST="12.0"

# より多くのCPUコアを使用してコンパイル
export MAX_JOBS=8

# インストール
pip install -v git+https://github.com/vllm-project/vllm.git@v0.9.0
```

コンテナがGPUを読み取れるか確認：  
```docker
# 1、グラフィックカードが使用可能か確認
# NVIDIA-SMI 560.35.02 | Driver Version: 560.94 | CUDA Version: 12.6 
docker run --rm --gpus all worm128/yinmei-cosyvoice nvidia-smi

# 2、pytorchが使用可能か確認
# 2.7.0+cu128 True
docker run --rm --gpus all worm128/yinmei-cosyvoice /bin/bash -c "source /root/miniconda3/etc/profile.d/conda.sh && conda activate py310 && python -c \"import torch; print(torch.__version__, torch.cuda.is_available())\""

# 3、vllmが互換性を持つアーキテクチャを確認
# GPU: NVIDIA GeForce RTX 4070 Ti SUPER
# アーキテクチャ一覧：[アーキテクチャ説明](https://developer.nvidia.com/cuda/gpus)
# SMアーキテクチャ: sm_89
docker run --rm --gpus all worm128/yinmei-cosyvoice /bin/bash -c "source /root/miniconda3/etc/profile.d/conda.sh && conda activate py310 && python -c \"import torch; prop = torch.cuda.get_device_properties(0); print(f'GPU: {prop.name}'); print(f'SM架构: sm_{prop.major}{prop.minor}')\""
```

例えば、宝塔docker：  
libnvidia-ml.so.1ファイルがホストでシンボリックリンクになっているため、空ファイルがマッピングされる  
```shell
(base) root@c62e1d12f1cc:/program/cosyvoice#  ls -l /usr/lib/x86_64-linux-gnu/libnvidia-ml.so*
-r-xr-xr-x 1 root root       0 Oct 24 12:56 /usr/lib/x86_64-linux-gnu/libnvidia-ml.so.1
-rwxr-xr-x 1 root root 2213912 Oct 15 10:01 /usr/lib/x86_64-linux-gnu/libnvidia-ml.so.570.86.10

# libnvidia-ml.so.1が空でマウントされる問題が発生。実際にはlibnvidia-ml.so.570.86.10にマウントされ、nvidia-smiでGPUが照会できなくなった

# 解決策：
# 壊れたファイルを削除
rm /usr/lib/x86_64-linux-gnu/libnvidia-ml.so.1
# シンボリックリンクを再作成
ln -s libnvidia-ml.so.570.86.10 /usr/lib/x86_64-linux-gnu/libnvidia-ml.so.1
# ダイナミックリンクキャッシュを更新
/sbin/ldconfig /usr/lib/x86_64-linux-gnu
# テスト
nvidia-smi
```

## ✅️実行コマンド
イメージ：`worm128/yinmei-cosyvoice:latest`
Windows docker cmdで実行：  
```cmd
docker run -d ^
  --name yinmei-cosyvoice ^
  --gpus all ^
  --shm-size 20g ^
  -p 50001:50001 ^
  -p 50000:50000 ^
  -e MODEL_DIR=pretrained_models/CosyVoice2-0.5B ^
  -e PORT=50001 ^
  -e WEBPORT=50000 ^
  -e LIMIT_COUNT=2 ^
  -e MODE=3 ^
  worm128/yinmei-cosyvoice:latest
```

パラメータ説明：  
MODEL_DIR：モデルパス  
PORT：APIポート  
WEBPORT：webuiポート  
LIMIT_COUNT：ストリーミング音声で有効。性能の低いGPUでストリーミング音声再生時に音が途切れる問題を解決します。GPU性能が低い場合はこの値を大きくしてください。LIMIT_COUNT=5は、5文字が蓄積されてからストリーミング音声を返すことを意味します  
MODE：1、APIモード&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、webuiモード&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、APIモード＋webuiモードのデュアルモード  

🚨共有メモリのOOMはプログラムのクラッシュ終了を引き起こします：  
```cmd
docker inspect -f '{{.State.ExitCode}} {{.State.Error}}' yinmei-cosyvoice
137
```
共有メモリ：--shm-size 20g；これを設定しないとOOMになりやすく、起動プログラムが自動終了します  

🚨PCのメモリが16gしかない場合は、プログラムがOOMで自動終了しやすいことに注意してください  
WSL dockerソフトは、PC本体のメモリが16gの場合、生成されるコンテナのVRAMはデフォルトで約7gしかありません。強制終了が発生する場合は設定してください    
パス：C:\Users\Administrator にファイル.wslconfigを配置  
```
[wsl2]
memory=12GB   # WSL2に最大12GBを割り当て
processors=6  # オプション：CPUコア数を制限
swap=2GB
localhostForwarding=true
```
その後WSLを再起動  
```
wsl shutdown
```

🚨GPUを指定して起動：  
重要コマンド：--gpus "device=0"   
重要コマンド：-e CUDA_VISIBLE_DEVICES=0 の 0 はコンテナ内の論理インデックス  
```bash
✅ GPU 0を使用
docker run --gpus all -e CUDA_VISIBLE_DEVICES=0 -d your-image:latest

✅ GPU 1を使用
docker run --gpus all -e CUDA_VISIBLE_DEVICES=1 -d your-image:latest

✅ GPU 2を使用
docker run --gpus all -e CUDA_VISIBLE_DEVICES=2 -d your-image:latest
```

### 特別な注意：物理インデックスと論理インデックスを混同しないこと
- --gpus "device=1" の 1 はホストの物理GPUインデックス（nvidia-smiで確認）
- CUDA_VISIBLE_DEVICES=0 の 0 はコンテナ内の論理インデックス
- 両者の関係：物理 device=1 → コンテナ内論理 device=0



✅アドレスアクセス：  
webui：http://127.0.0.1:50000/  
api：http://127.0.0.1:50001/docs  

## ✅️参照音声
1、まずコンテナ内の音声ファイルをコピーしてくる  
```cmd
docker cp yinmei-cosyvoice:/program/cosyvoice/audios/  J:\ai\ai-code\yinmei-cosyvoice\data\
```
2、次にコンテナ内の参照音声フォルダをマッピングして、クローンが必要な音声を追加しやすくする  
```cmd
-v /J/ai/ai-code/yinmei-cosyvoice/data/audios/:/program/cosyvoice/audios/ ^
```
![参照音声](https://www.yinmei.vip/images/comm/3.jpg)

## ✅️音色リスト
1、まずコンテナ内の音色ベクトルファイルをコピーしてくる  
```cmd
docker cp yinmei-cosyvoice:/program/cosyvoice/pretrained_models/CosyVoice2-0.5B/spk2info.pt  J:\ai\ai-code\yinmei-cosyvoice\data\spk2info.pt
```
2、次にコンテナ内の音色ファイルをマッピングして、音色のバックアップと置き換えを容易にする  
```cmd
-v /J/ai/ai-code/yinmei-cosyvoice/data/spk2info.pt:/program/cosyvoice/pretrained_models/CosyVoice2-0.5B/spk2info.pt ^
```

## ✅️微調整モデル
cosyvoice2のベースLLMモデルllm.ptを微調整済みで、音色の語気と感情がさらに向上しています  
😀微調整正解率:99.8%  🌐イメージバージョン：worm128/yinmei-cosyvoice:plus  
![微調整パラメータ](http://www.yinmei.vip/images/comm/6.png)  
