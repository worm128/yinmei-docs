# 【Ready-to-Use】【CosyVoice2】【Alibaba Text-to-Speech】【October 2025】【NVIDIA GPU Version – Requires an NVIDIA GPU to run】
⚠️ Note: This image comes with all necessary components pre-installed—including the CosyVoice2 model, CosyVoice-ttsfrd, SenseVoiceSmall, and WeText—along with all required Python dependencies (including the vLLM acceleration package). Since everything is bundled, there is no need for online downloads; consequently, the image size is relatively large. This design ensures a "ready-to-use" experience, minimizing potential errors related to network downloads or dependency installation. 💖 Welcome to using the vLLM-accelerated version of CosyVoice2! Features: ~0.6-second time-to-first-audio (TTFA), RTF (Real-Time Factor) of 0.4–0.7. Tested on an NVIDIA RTX 4070 Ti.
<br>
## ✅️ Image Information
**Yinmei AI Speech Synthesis – CosyVoice2**
**Video Tutorial: [Watch Here](https://www.bilibili.com/video/BV1BdsozBEuV/)**
**Official Website: [www.yinmei.vip](https://www.yinmei.vip)**
**QQ Group: 27831318**
**Docker Version: [Docker Hub](https://hub.docker.com/r/worm128/yinmei-cosyvoice)**
**Windows Version:**
[Baidu Netdisk](https://pan.baidu.com/s/10fmcGfksHsSKAS8LckYTqQ?pwd=29tq) | Access Code: 29tq
[Quark Drive](https://pan.quark.cn/s/b666220e73c2) | Access Code: kibi

![Yinmei Linux Development System](https://www.yinmei.vip/images/直播间封面.png)

---
## ✅️ Emotional Tags
**Emotional Speech Synthesis: [View Official Examples](https://funaudiollm.github.io/cosyvoice2/)**
Role-playing Example:
```json
Mysterious<|endofprompt|>The ancient city is shrouded in a mysterious mist.
I’d like to hear you imitate the tone of Peppa Pig.<|endofprompt|>Hello everyone, I’m Peppa Pig! Today, Suzy Sheep and I went to the park. We swung back and forth on the swings—it was so much fun! We also played hide-and-seek; it was such a happy afternoon.
``` Emotion Synthesis:
```json
Spoken in a happy tone<|endofprompt|>Attending a friend’s wedding and seeing the happy, smiling faces of the newlyweds makes me feel incredibly joyful. Such love and commitment are truly something to aspire to.
```
Full Tags:
```json
Hey everyone! [breath] Today, I—Yinmei—want to chat with you all about this "CosyVoice" voice cloning technology. [laughter] Hahaha! [clucking][breath] This tech is absolutely incredible! [breath] I just gave it a try, [laughter] <strong>and I was completely blown away</strong>—[hissing][breath] it’s an <strong>exact replica</strong> of the original voice! [breath] You guys should try it out too! [accent][breath] Looking at this, I feel like in the future, it could even clone another "me"! [noise][breath] Just listen to the results—[mn][breath] it’s just awesome! [clucking][breath] I’m so excited! [mn][breath] This technology is truly fantastic! [laughter] Hey everyone, [breath] go check it out for yourselves! <strong>Love</strong> you all!! [lipsmack][cough] I’m off to bed now—[laughter] give it a try once I release version 2.4.0!
```
Language:
In addition to automatically adapting to Chinese, English, Japanese, and Korean, it also supports various dialects.
```json
Spoken in the Sichuan dialect<|endofprompt|>The other day, I went to Kuanzhai Alley to sip tea from a lidded bowl; sitting on a little wooden stool while listening to people chat away—it was just so wonderfully relaxing, I didn't want to leave! ## ✅️ Environment Specifications
⚠️ Key packages inside the CosyVoice container:
torch: 2.7.0 (GPU version) — GPU is required and must be enabled.
vllm: 0.9.0 — Heavily dependent on GPU (used for accelerating LLM inference).
transformers: 4.51.3 — Supports GPU (acceleration is handled by PyTorch).
tensorrt-cu12: 10.0.1 — High-performance inference engine; requires a GPU.

⚠️ Host Machine (Linux or Windows):
NVIDIA drivers must be installed: https://www.nvidia.cn/drivers/lookup/
CUDA Toolkit must be installed: https://developer.nvidia.com/cuda-toolkit-archive
Generally, the CUDA version on the host machine should not be higher than the version inside the container (CUDA 12.8). It is backward compatible, so lower versions are fine.

⚠️ Host Machine Requirements:
1. NVIDIA drivers must be installed.
2. A CUDA version lower than 12.8 must be installed (version 12.9 might also work; feel free to test it yourself).

⚠️ Version Details:
Windows versions:
```
yinmei-cosyvoice [for GPUs below the 40-series].rar: torch 2.6.0 + cu124
yinmei-cosyvoice [compatible with all series] [torch 2.8.0 + cu129]: torch 2.8.0 + cu129
```
Docker versions:
```
worm128/yinmei-cosyvoice:cu126: torch 2.7.0 + cu126
worm128/yinmei-cosyvoice:cu128 (or latest): torch 2.7.0 + cu128
```

⚠️ My Test Environment:
NVIDIA driver: 560.94
CUDA toolkit: 12.6 and 12.4
Graphics cards: 4070 Ti Super (16GB), 3090 Ti (24GB), 1060 6GB
System: Docker Desktop on Windows 11 (via WSL)
VRAM usage: Docker version – 4.4 GB; Windows version – 3 GB
RAM usage: 8 GB – 12 GB (peaks at 12 GB; 8–9 GB when idle)
Disk space (image): 38.78 GB
Comparison with GPT-SoVITS-ProPlus: RAM – 8 GB; VRAM – 2.5 GB

🚨 Verify GPU access inside the container:
```shell
nvidia-smi
```
🚨 Verify GPU access on the host machine:
```shell
nvidia-smi
nvcc -V
```

## ✅️ Common Issues
1. Loose RAM modules can halve available memory; insufficient RAM leads to OOM (Out of Memory) errors, causing the program to crash upon startup.
2. On QNAP NAS, the `--gpus all` flag fails to map GPU drivers; manual configuration is required.
3. Issues with pulling image layers/cache (often related to network/proxy/VPN settings).
4. Compatibility is not guaranteed for: heavily modified Docker setups, Docker managed via Baota (BT-Panel), or proprietary Docker implementations on NAS devices.
5. vLLM is incompatible with 50-series GPUs due to architecture differences. 50-series GPUs use a newer architecture (compute capability 12.0), whereas 40-series GPUs use architecture 8.9. The current vLLM wheel packages only support architectures up to 8.9; there is no support for the newer architecture, and a solution is currently unknown. [Architecture Documentation](https://developer.nvidia.com/cuda/gpus)

Compiling vLLM for the 50-series NVIDIA GPU architecture:
```shell
# I. Install the CUDA compilation environment inside the container (verify with `nvcc -v`)
wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2204/x86_64/cuda-keyring_1.1-1_all.deb && \
dpkg -i cuda-keyring_1.1-1_all.deb && \
apt-get update && \
apt-get install -y cuda-toolkit-12-8 && \
rm cuda-keyring_1.1-1_all.deb

# II. vLLM installation process
export TORCH_CUDA_ARCH_LIST="12.0"

# Use more CPU cores for compilation
export MAX_JOBS=8

# Proceed with installation
pip install -v git+https://github.com/vllm-project/vllm.git@v0.9.0
```

Verify that the container can access the GPU:
```docker
# 1. Check if the GPU is accessible
# NVIDIA-SMI 560.35.02 | Driver Version: 560.94 | CUDA Version: 12.6
docker run --rm --gpus all worm128/yinmei-cosyvoice nvidia-smi

# 2. Check if PyTorch is functional
# 2.7.0+cu128 True
docker run --rm --gpus all worm128/yinmei-cosyvoice /bin/bash -c "source /root/miniconda3/etc/profile.d/conda.sh && conda activate py310 && python -c \"import torch; print(torch.__version__, torch.cuda.is_available())\""

# 3. Check the architecture compatibility for vLLM
# GPU: NVIDIA
``` GeForce RTX 4070 Ti SUPER
# Architecture List: [Architecture Documentation](https://developer.nvidia.com/cuda/gpus)
# SM Architecture: sm_89
docker run --rm --gpus all worm128/yinmei-cosyvoice /bin/bash -c "source /root/miniconda3/etc/profile.d/conda.sh && conda activate py310 && python -c \"import torch; prop = torch.cuda.get_device_properties(0); print(f'GPU: {prop.name}'); print(f'SM Architecture: sm_{prop.major}{prop.minor}')\""
```

For example, in a Baota (BT) Docker container:
The `libnvidia-ml.so.1` file is a symbolic link on the host machine, which results in an empty file being mapped into the container.
```shell
(base) root@c62e1d12f1cc:/program/cosyvoice#  ls -l /usr/lib/x86_64-linux-gnu/libnvidia-ml.so*
-r-xr-xr-x 1 root root       0 Oct 24 12:56 /usr/lib/x86_64-linux-gnu/libnvidia-ml.so.1
-rwxr-xr-x 1 root root 2213912 Oct 15 10:01 /usr/lib/x86_64-linux-gnu/libnvidia-ml.so.570.86.10

# This causes `libnvidia-ml.so.1` to be mounted as an empty file (while it should point to `libnvidia-ml.so.570.86.10`), which prevents `nvidia-smi` from detecting the GPU.

# Solution:
# Delete the corrupted file
rm /usr/lib/x86_64-linux-gnu/libnvidia-ml.so.1
# Re-create the symbolic link
ln -s libnvidia-ml.so.570.86.10 /usr/lib/x86_64-linux-gnu/libnvidia-ml.so.1
# Update the dynamic linker cache
/sbin/ldconfig /usr/lib/x86_64-linux-gnu
# Test
nvidia-smi
```

## ✅️ Execution Command
Image: `worm128/yinmei-cosyvoice:latest`
Run the following command in Windows Docker CMD:
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

Parameter Descriptions:
MODEL_DIR: Path to the model.
PORT: API port.
WEBPORT: WebUI port.
LIMIT_COUNT: Relevant for streaming speech; helps resolve audio stuttering on lower-performance GPUs. If your GPU is underpowered, increase this value. For example, `LIMIT_COUNT=5` means that streaming audio will only be returned once 5 characters have been accumulated.
MODE: 1: API mode; 2: WebUI mode; 3: Dual mode (API + WebUI).

🚨 Insufficient shared memory (OOM) will cause the program to crash and exit:
```cmd
docker inspect -f '{{.State.ExitCode}} {{.State.Error}}' yinmei-cosyvoice
137
```
Shared memory: `--shm-size 20g`. If this is not set, the program is prone to OOM (Out of Memory) errors and will exit automatically upon startup.

🚨 If your computer has only 16GB of RAM, be aware that the program may crash (OOM) and close unexpectedly.
When using Docker (via WSL) on a host machine with only 16GB of RAM, the resulting container may only be allocated about 7GB of memory by default. If the program crashes, please check your configuration.
Configuration path: `C:\Users\Administrator` Create a `.wslconfig` file with the following content:
```
[wsl2]
memory=12GB   # Allocate up to 12GB of RAM to WSL2
processors=6  # Optional: Limit the number of CPU cores
swap=2GB
localhostForwarding=true
```
Then, restart WSL:
```
wsl shutdown
```

🚨 Launching with a specific GPU:
Key command: `--gpus "device=0"`
In the command `-e CUDA_VISIBLE_DEVICES=0`, the `0` represents the logical index *inside* the container.
```bash
✅ Use GPU 0
docker run --gpus all -e CUDA_VISIBLE_DEVICES=0 -d your-image:latest

✅ Use GPU 1
docker run --gpus all -e CUDA_VISIBLE_DEVICES=1 -d your-image:latest

✅ Use GPU 2
docker run --gpus all -e CUDA_VISIBLE_DEVICES=2 -d your-image:latest
```

### Important Note: Do not confuse physical indices with logical indices
- The `1` in `--gpus "device=1"` refers to the physical GPU index on the host machine (as shown in `nvidia-smi`).
- The `0` in `CUDA_VISIBLE_DEVICES=0` refers to the logical index inside the container.
- Relationship: Physical `device=1` → Logical `device=0` inside the container.



✅ Access URLs:
Web UI: http://127.0.0.1:50000/
API: http://127.0.0.1:50001/docs

## ✅️ Reference Audio
1. First, copy the audio files out of the container:
```cmd
docker cp yinmei-cosyvoice:/program/cosyvoice/audios/  J:\ai\ai-code\yinmei-cosyvoice\data\
```
2. Then, map the reference audio folder from the container to your host machine; this makes it easier to add new audio files for cloning.
```cmd
-v /J/ai/ai-code/yinmei-cosyvoice/data/audios/:/program/cosyvoice/audios/ ^
```
![Reference Audio](https://www.yinmei.vip/images/comm/3.jpg)

## ✅️ List of Voices
1. First, copy the voice vector file out of the container:
```cmd
docker cp yinmei-cosyvoice:/program/cosyvoice/pretrained_models/CosyVoice2-0.5B/spk2info.pt  J:\ai\ai-code\yinmei-cosyvoice\data\spk2info.pt
```
2. Then, map the voice file from the container to your local system; this makes it easier to back up or replace voices.
```cmd
-v /J/ai/ai-code/yinmei-cosyvoice/data/spk2info.pt:/program/cosyvoice/pretrained_models/CosyVoice2-0.5B/spk2info.pt ^
```

## ✅️ Fine-tuned Model
The underlying `llm.pt` model for CosyVoice 2 has been fine-tuned, resulting in further improvements to voice quality, tone, and emotional expression.
😀 Fine-tuning accuracy: 99.8%  🌐 Image version: `worm128/yinmei-cosyvoice:plus`
![Fine-tuning Parameters](http://www.yinmei.vip/images/comm/6.png)