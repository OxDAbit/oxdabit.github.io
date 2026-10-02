---
title: "Kubernetes MCP en VS Code: rutas y kubeconfig desde WSL"
description: "Notas sobre la sintaxis de bind mount de Docker desde WSL y las rutas que espera mcp.json en VS Code para el servidor MCP de Kubernetes."
pubDate: 2026-06-02
category: "programacion"
tags: ["kubernetes", "mcp", "vscode", "wsl", "copilot"]
draft: true
---

## El problema

Al montar el servidor MCP de Kubernetes en VS Code desde WSL, las rutas de Windows y las de Linux conviven en el mismo flujo y no son intercambiables.

![Portátil con el editor abierto sobre una mesa de trabajo](./images/kubernetes-mcp-portatil.jpg)

## Lo que funciona

- El bind mount de Docker ejecutado **desde WSL** debe usar rutas `/mnt/c/...`.
- El archivo `mcp.json` de VS Code, en cambio, espera rutas estilo Windows.

## Punto pendiente

La autenticación por certificado del kubeconfig sigue dando problemas al resolverse desde dentro del contenedor Docker Desktop. Actualizaré este post en cuanto quede resuelto.
