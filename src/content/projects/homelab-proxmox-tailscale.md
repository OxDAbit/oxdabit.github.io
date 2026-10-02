---
title: "Homelab en Proxmox con Tailscale y Nginx Proxy Manager"
description: "Infraestructura personal basada en LXC, acceso remoto vía Tailscale y proxy inverso con dominio comodín *.oxdabit.com."
pubDate: 2026-04-20
stack: ["Proxmox", "Tailscale", "Nginx Proxy Manager"]
status: "activo"
draft: true
---

## Arquitectura

El homelab corre sobre Proxmox con distintos LXC dedicados: Ollama con aceleración GPU, servicios de desarrollo y automatización.

## Acceso remoto

Tailscale elimina la necesidad de exponer puertos a internet. Combinado con Nginx Proxy Manager y un dominio comodín, cada servicio recibe un subdominio propio (`*.oxdabit.com`) con certificado gestionado automáticamente.

## Próximos pasos

Documentar la migración de algunos servicios a Kubernetes/Helm dentro del propio homelab.
