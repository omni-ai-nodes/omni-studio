# Omni-Studio
![GitHub License](https://img.shields.io/github/license/omni-ai-nodes/omni-studio)
![GitHub Release](https://img.shields.io/github/v/release/omni-ai-nodes/omni-studio)
![GitHub stars](https://img.shields.io/github/stars/omni-ai-nodes/omni-studio?style=social)
![GitHub forks](https://img.shields.io/github/forks/omni-ai-nodes/omni-studio?style=social)
![GitHub issues](https://img.shields.io/github/issues/omni-ai-nodes/omni-studio)
![GitHub last commit](https://img.shields.io/github/last-commit/omni-ai-nodes/omni-studio)
![GitHub all releases](https://img.shields.io/github/downloads/omni-ai-nodes/omni-studio/total)
![Docker Pulls](https://img.shields.io/docker/pulls/omni-ai-nodes/omni-studio)


[简体中文](README.zh_cn.md) | [Official Website](https://www.omni-studio.com/) | [Documentation](https://docs.omni-studio.com/)

Omni-Studio是一款简单好用的AI MCP助手，支持知识库、模型API、分享、联网搜索、智能体，它还在飞快成长中。

omni-studio is an easy-to-use AI assistant that supports knowledge bases, model APIs, sharing, web search, and intelligent agents. It's rapidly growing and improving.

## 🚀 One-sentence Introduction  

A user-friendly AI assistant software that supports local AI models, APIs, and knowledge base setup.

## ✅ Core Features  

- One-click deployment of local AI models and mainstream model APIs
![Local model](.github/assets/img/1_en.png)
- Local knowledge base
![Knowledge base](.github/assets/img/3_en.png)
- Intelligent agent creation
![Intelligent agent](.github/assets/img/4_en.png)
  
- Can be shared online for others to use
![Sharing](.github/assets/img/5_en.png)

- Supports web search
![Web search](.github/assets/img/6_en.png)

- Supports server-side deployment 

- MCP Client
![MCP Client](.github/assets/img/7_en.png)

- Simultaneous conversations with multiple models in a single session (coming soon)  

## ✨ Product Highlights  
- Simple and easy to use, beginner-friendly for AI newcomers  

## 📥 Quick Installation

### Client Version（MacOS, Windows） 

- [Download from official website](https://www.omni-studio.com/)   
- [Download from CNB](https://cnb.cool/omni-ai-nodes/omni-studio/-/releases/)  
- [Download from Github](https://github.com/omni-ai-nodes/omni-studio/releases)  

### Server Version

#### Docker Run
```bash 
docker run -d \
  --name node \
  -v $(pwd)/data:/data \
  -v $(pwd)/uploads:/uploads \
  -v $(pwd)/logs:/logs \
  -v $(pwd)/bin:/omni-studio/bin \
  -v $(pwd)/sys_data:/sys_data \
  -p 7071:7071 \
  -w /omni-studio \
  omni-ai-nodes/omni-studio
```

#### Docker Compose
```bash
mkdir -p omni-studio
cd omni-studio
wget https://cnb.cool/omni-ai-nodes/omni-studio/-/git/raw/server/docker-compose.yml
# Run
docker compose up -d
# or
docker-compose up -d
``` 
## Build
```bash
git clone https://github.com/omni-ai-nodes/omni-studio.git
cd omni-studio
# For macOS users, please remove the `@rollup/rollup-win32-x64-msvc` dependency in [package.json](http://_vscodecontentref_/0)
cd frontend
corepack prepare pnpm@10.11.0 --activate
pnpm i
cd ..
pnpm i
pnpm dev
```

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=omni-ai-nodes/omni-studio&type=Date)](https://www.star-history.com/#omni-ai-nodes/omni-studio&Date)