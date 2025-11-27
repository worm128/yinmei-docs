# 【开箱即用】【CosyVoice2】【阿里语音合成】【2025 年 10 月】【N卡版本-没有显卡不支持运行】
⚠️说明：此模型已经内置`cosyvoice2的模型、CosyVoice-ttsfrd、SenseVoiceSmall、wetext`等模型，所有python依赖包已经安装好，包括vllm加速包，无需在线下载，所以镜像会比较大，务求做到开箱即用，降低网络下载报错、安装依赖包报错等问题。  
💖欢迎使用，vllm加速包：cosyvoice2，首包响应：0.6秒，rtf：0.4~0.7，显卡：4070tis  
<br>
## ✅️镜像信息
**AI吟美语音合成CosyVoice2**  
**视频教程：[点击进入观看](https://www.bilibili.com/video/BV1BdsozBEuV/)**  
**官网：[www.yinmei.vip](https://www.yinmei.vip)**  
**Q群：27831318**  
**Docker版本下载：[Docker仓库](https://hub.docker.com/r/worm128/yinmei-cosyvoice)**  
**Window版本下载：**   
[百度网盘](https://pan.baidu.com/s/10fmcGfksHsSKAS8LckYTqQ?pwd=29tq)   提取码: 29tq  
[夸克](https://pan.quark.cn/s/b666220e73c2)  提取码：kibi  

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
一般来说nvidia和cuda版本，宿主机的cuda版本不要比容器里面版本cuda12.8大，就没问题，向下兼容  

⚠️所需宿主机安装要求：  
1、要安装nvidia驱动  
2、要安装cuda版本为12.8以下版本，我觉得12.9也可以，你们可以自行测试看看  

⚠️版本说明：  
window版本：  
```
yinmei-cosyvoice【40系以下显卡】.rar：torch2.6.0+cu124
yinmei-cosyvoice【全系兼容】【torch2.8.0+cu129】：torch2.8.0+cu129
```
docker版本：  
```
worm128/yinmei-cosyvoice:cu126：torch2.7.0+cu126
worm128/yinmei-cosyvoice:cu128 or latest：torch2.7.0+cu128
```

⚠️本人测试环境：  
nvidia驱动：560.94  
cuda驱动：12.6和12.4  
显卡：4070tis 16g 和 3090ti 24g  
系统：Window11的wsl docker desktop  
显存占用：6.5G  
内存占用：8G-12g；峰值在12g，闲置状态8-9g    
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

## ✅️问题汇总
1、内存松了导致减少一半内存,内存不够导致项目启动OOM内存不足程序闪退  
2、威联通nas的“--gpus all”不能映射显卡驱动，要手动配置  
3、镜像使用飞机场拉取缓存问题  
4、不保证可以： 魔改docker、宝塔docker、nas自研docker  

查看容器是否可以读取显卡：  
```docker
# 1、查看显卡是否可用
# NVIDIA-SMI 560.35.02 | Driver Version: 560.94 | CUDA Version: 12.6 
docker run --rm --gpus all worm128/yinmei-cosyvoice nvidia-smi

# 2、查看pytorch是否可用
# 2.7.0+cu128 True
docker run --rm --gpus all worm128/yinmei-cosyvoice /bin/bash -c "source /root/miniconda3/etc/profile.d/conda.sh && conda activate py310 && python -c \"import torch; print(torch.__version__, torch.cuda.is_available())\""

# 3、查看vllm兼容的架构
# GPU: NVIDIA GeForce RTX 4070 Ti SUPER
# SM架构: sm_89
docker run --rm --gpus all worm128/yinmei-cosyvoice /bin/bash -c "source /root/miniconda3/etc/profile.d/conda.sh && conda activate py310 && python -c \"import torch; prop = torch.cuda.get_device_properties(0); print(f'GPU: {prop.name}'); print(f'SM架构: sm_{prop.major}{prop.minor}')\""
```

例如，宝塔docker：  
libnvidia-ml.so.1文件在宿主机是软连导致映射空文件  
```shell
(base) root@c62e1d12f1cc:/program/cosyvoice#  ls -l /usr/lib/x86_64-linux-gnu/libnvidia-ml.so*
-r-xr-xr-x 1 root root       0 Oct 24 12:56 /usr/lib/x86_64-linux-gnu/libnvidia-ml.so.1
-rwxr-xr-x 1 root root 2213912 Oct 15 10:01 /usr/lib/x86_64-linux-gnu/libnvidia-ml.so.570.86.10

# 产生了libnvidia-ml.so.1挂载为空的问题，实际挂载到了libnvidia-ml.so.570.86.10，导致nvidia-smi查询不到显卡

# 解决方案：
# 删除损坏的文件
rm /usr/lib/x86_64-linux-gnu/libnvidia-ml.so.1
# 重新创建符号链接
ln -s libnvidia-ml.so.570.86.10 /usr/lib/x86_64-linux-gnu/libnvidia-ml.so.1
# 更新动态链接缓存
/sbin/ldconfig /usr/lib/x86_64-linux-gnu
# 测试
nvidia-smi
```

## ✅️运行命令
镜像：`worm128/yinmei-cosyvoice:latest`
Window docker cmd执行：  
```cmd
docker run -d ^
  --name yinmei-cosyvoice ^
  --gpus all ^
  --shm-size 20g
  -p 50001:50001 ^
  -p 50000:50000 ^
  -e MODEL_DIR=pretrained_models/CosyVoice2-0.5B ^
  -e PORT=50001 ^
  -e WEBPORT=50000 ^
  -e LIMIT_COUNT=2 ^
  -e MODE=3 ^
  worm128/yinmei-cosyvoice:latest
```

参数说明：  
MODEL_DIR：模型路径  
PORT：api端口  
WEBPORT：webui端口  
LIMIT_COUNT：这个会在流式语音有效，解决性能较差显卡在流式语音中播放声音卡顿问题，如果你显卡较差，请调大这个值；如果LIMIT_COUNT=5代表累计5个字符才会返回流式音频  
MODE：1、api模式&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、webui模式&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、api模式+webui模式双模式  

🚨共享内存OOM会导致程序崩溃退出：  
```cmd
docker inspect -f '{{.State.ExitCode}} {{.State.Error}}' yinmei-cosyvoice
137
```
共享内存：--shm-size 20g；不设置这个容易OOM启动程序自动退出  

🚨如果你电脑内存只有16g要注意程序容易OOM自动闪退  
wsl docker软件在电脑主机只有16g时候，生成出来的容器默认只有7g显存左右，遇到闪退请配置    
在路径：C:\Users\Administrator 放入文件.wslconfig  
```
[wsl2]
memory=12GB   # 分配给 WSL2 最多 12GB
processors=6  # 可选：限制 CPU 核心数
swap=2GB
localhostForwarding=true
```
然后重启wsl  
```
wsl shutdown
```

🚨指定GPU启动：  
关键命令：--gpus "device=0"   
```bash
✅ 使用 GPU 0
docker run --gpus "device=0" -d your-image:latest

✅ 使用 GPU 1
docker run --gpus "device=1" -d your-image:latest

✅ 使用 GPU 2
docker run --gpus "device=2" -d your-image:latest
```

✅地址访问：  
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

## ✅️微调模型
已经微调了cosyvoice2底层llm.pt模型，音色语气和情感有进一步提升  
微调正确率:99.8%  
![微调参数](http://www.yinmei.vip/images/comm/6.png)  
