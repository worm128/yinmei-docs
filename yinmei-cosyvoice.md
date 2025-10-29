# 【开箱即用】【CosyVoice2】【阿里语音合成】【2025 年 10 月】【N卡版本-没有显卡不支持运行】
⚠️说明：此模型已经内置`cosyvoice2的模型、CosyVoice-ttsfrd、SenseVoiceSmall、wetext`等模型，所有python依赖包已经安装好，包括vllm加速包，无需在线下载，所以镜像会比较大，务求做到开箱即用，降低网络下载报错、安装依赖包报错等问题。  
💖欢迎使用，vllm加速包：cosyvoice2，首包响应：0.7秒，rtf：0.5~0.7，显卡：4070tis  
<br>
## ✅️镜像信息
**AI吟美语音合成CosyVoice2**  
**视频教程：[点击进入观看](https://www.bilibili.com/video/BV1BdsozBEuV/)**  
**官网：[www.yinmei.vip](https://www.yinmei.vip)**  
**Q群：27831318**  
**Window版本下载：**   
[百度网盘](https://pan.baidu.com/s/1z8W_iZFvstmL2AR9i_cx5Q?pwd=i4mp)   提取码: i4mp  
[夸克](https://pan.quark.cn/s/e19caa11c9d8)  提取码：DejZ  

![吟美 Linux 开发系统](https://www.yinmei.vip/images/直播间封面.png)

---
## ✅️感情标签
**感情语音合成：[官方例子查看](https://funaudiollm.github.io/cosyvoice2/)**  
角色扮演：  
```json
神秘<|endofprompt|>那座古老的城嬼罩梭神秧的雾气中
我想听听你模仿小猪佩奇的语气。<|endofprompt|>大家好，我是小猪佩奇，今天我和苏西羊一起去公园，我们在秋千上荡来荡去，开心极了，还一起玩了捉迷藏，真是个快乐的下午。
```
情感合成： 
```json
用开心的语气说<|endofprompt|>参加朋友的婚礼，看着新人幸福的笑脸，我感到无比开心。这样的爱与承诺，总是令人心生向往。
```
完整标签：  
```json
家人们，[breath]今天我吟美给你们唠唠这个CosyVoice声音克隆技术，[laughter]哈哈哈，[clucking][breath]这技术太厉害了！[breath]我刚试了试，[laughter]<strong>直接惊了</strong>，[hissing][breath]克隆得跟本人<strong>一模一样</strong>。[breath]你们也去试试，[accent][breath]我看着这技术，感觉未来都能克隆出个我来！[noise][breath]你们听听这效果，[mn][breath]太牛了！[clucking][breath]有点激动，[mn][breath]这技术真的太棒了，[laughter]家人们，[breath]赶紧去体验一下吧！<strong>爱</strong>你们哦！！[lipsmack][cough]我要睡觉了，[laughter]等我发布2点4点0版本后你们再尝试一下吧！
```
语言：  
除了自动适配中文、英文、日语、韩文外，还支持方言  
```json
用四川话说<|endofprompt|>前儿个去宽窄巷子喝盖碗茶，坐在小板凳上头听人摆龙门阵，简直安逸得很，不想走哦。
```

## ✅️环境说明
⚠️CosyVoice容器内部版本【关键包】：  
torch：2.7.0  gpu版本  必须且已启用 GPU  
vllm：0.9.0  强依赖 GPU（用于 LLM 推理加速）  
transformers：4.51.3   支持 GPU，但本身不加速，靠 PyTorch  
tensorrt-cu12：10.0.1  高性能推理引擎，必须用 GPU  

⚠️Linux或者Window宿主机：   
需要安装nvidia驱动：https://www.nvidia.cn/drivers/lookup/  
需要安装cuda驱动：https://developer.nvidia.com/cuda-toolkit-archive  
一般来说nvidia和cuda版本，宿主机的版本要比容器里面版本大，就没问题，向下兼容  

⚠️所需宿主机安装要求：  
1、要安装nvidia驱动  
2、要安装cuda版本为12.6或以上版本，我觉得12.4或者12.1也可以，你们可以自行测试看看  

⚠️本人测试环境：  
nvidia驱动：560.94  
cuda驱动：12.6和12.4  
显卡：4070tis 16g 和 3090ti 24g  
系统：Window11的wsl docker desktop  
显存占用：6.5G  
内存占用：8G  
硬盘镜像占用：38.78G  

🚨容器内验证是否能使用显卡：  
```shell
nvidia-smi
```
🚨宿主机内验证是否能使用显卡：   
```shell
nvidia-smi
nvcc -V
```


## ✅️运行命令
镜像：`worm128/yinmei-cosyvoice:latest`
Window docker cmd执行：  
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

参数说明：  
MODEL_DIR：模型路径  
api端口：PORT  
webui端口：WEBPORT  
LIMIT_COUNT：这个会在流式语音有效，解决性能较差显卡在流式语音中播放声音卡顿问题，如果你显卡较差，请调大这个值；如果LIMIT_COUNT=5代表累计5个字符才会返回流式音频  
MODE：1、api模式&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、webui模式&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、api模式+webui模式双模式  

地址访问：  
webui：http://127.0.0.1:50000/  
api：http://127.0.0.1:50001/docs  

## ✅️参考音频
1、先把容器里面音频文件拷贝出来  
```cmd
docker cp yinmei-cosyvoice:/program/cosyvoice/audios/  J:\ai\ai-code\yinmei-cosyvoice\data\
```
2、再把容器里面参考音频文件夹映射出来，这样可以方便增加需要克隆的音频
```cmd
-v /J/ai/ai-code/yinmei-cosyvoice/data/audios/:/program/cosyvoice/audios/ ^
```
![参考音频](https://www.yinmei.vip/images/comm/3.jpg)

## ✅️音色列表
1、先把容器里面音色向量文件拷贝出来  
```cmd
docker cp yinmei-cosyvoice:/program/cosyvoice/pretrained_models/CosyVoice2-0.5B/spk2info.pt  J:\ai\ai-code\yinmei-cosyvoice\data\spk2info.pt
```
2、再把容器里面音色文件映射出来，这样可以方便备份和替换音色
```cmd
-v /J/ai/ai-code/yinmei-cosyvoice/data/spk2info.pt:/program/cosyvoice/pretrained_models/CosyVoice2-0.5B/spk2info.pt ^
```

