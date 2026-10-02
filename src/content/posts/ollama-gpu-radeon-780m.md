---
title: "IA local con Ollama en una Radeon 780M (RDNA3)"
description: "Cómo configurar aceleración GPU para Ollama en una AMD Radeon 780M dentro de un LXC de Proxmox, usando HSA_OVERRIDE_GFX_VERSION."
pubDate: 2026-05-12
category: "ia"
tags: ["ollama", "proxmox", "rocm", "homelab"]
draft: true
---

## Por qué correr LLMs en local

Correr modelos en local da control total sobre privacidad, latencia y coste. El reto llega con GPUs de portátil/mini-PC como la Radeon 780M, que ROCm no soporta oficialmente.

## Configuración

El truco está en forzar la versión de arquitectura gráfica que ROCm sí reconoce:

```bash
export HSA_OVERRIDE_GFX_VERSION=11.0.2
```

Con esto, un contenedor Ubuntu 24.04.2 LXC con passthrough de `/dev/dri/renderD128`, `/dev/kfd` y `card1` es capaz de exponer la GPU a Ollama sin necesidad de pasar la tarjeta completa al host.

## Resultado

La inferencia pasa de CPU-bound a usar la iGPU, con una mejora notable en tokens/segundo para modelos de 7-8B parámetros.
