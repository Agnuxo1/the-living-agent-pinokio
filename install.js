module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/Agnuxo1/The-Living-Agent app"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "uv pip install -e .",
          "uv pip install huggingface_hub"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "living-agent init --grid-dir ."
        ]
      }
    },
    {
      method: "notify",
      params: {
        html: "Base install done. Next: download a GGUF model via the 'Download GGUF Model' menu, and install/start KoboldCPP separately (https://github.com/LostRuins/koboldcpp/releases/latest). Then press Start."
      }
    }
  ]
}
