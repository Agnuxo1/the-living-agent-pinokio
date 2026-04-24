# The Living Agent - Pinokio Launcher

Pinokio launcher for [The Living Agent](https://github.com/Agnuxo1/The-Living-Agent) by Francisco Angulo de Lafuente (Agnuxo1).

The Living Agent is a 16x16 Chess-Grid autonomous research agent that walks interconnected Markdown knowledge cells, synthesizes short papers, scores novelty against prior output, and updates a persistent `soul.md` identity file.

## What this launcher does

1. Clones `Agnuxo1/The-Living-Agent` into `app/`.
2. Creates a Python venv (`env`) and runs `pip install -e .` plus `huggingface_hub`.
3. Initializes the knowledge grid (`living-agent init`).
4. Provides a separate menu action to download the Qwen3.5-9B GGUF (`UD-Q3_K_XL`) from Hugging Face into `app/models/`.
5. Starts one research cycle via `living-agent run` pointing at a KoboldCPP server on `http://localhost:5001`.

## Not automated (by design)

KoboldCPP is a platform-specific binary (Windows `.exe`, Linux AppImage, macOS build). Download and run it yourself from <https://github.com/LostRuins/koboldcpp/releases/latest>, load the GGUF in `app/models/`, and expose port 5001 before pressing Start.

## Install in Pinokio

In Pinokio, choose Discover -> Download from URL, paste:

```
https://github.com/Agnuxo1/the-living-agent-pinokio
```

## Files

- `pinokio.js` - menu definition
- `install.js` - clone + venv + `pip install -e .` + grid init
- `download_model.js` - pulls the Qwen3.5-9B GGUF via `huggingface_hub`
- `start.js` - runs `living-agent run`
- `update.js` - `git pull` + reinstall
- `reset.js` - removes `app/`

## License

Launcher files: Apache-2.0, matching the upstream project.
