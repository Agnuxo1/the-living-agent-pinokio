module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "python -c \"from huggingface_hub import hf_hub_download; p = hf_hub_download(repo_id='unsloth/Qwen3.5-9B-GGUF', filename='Qwen3.5-9B-UD-Q3_K_XL.gguf', local_dir='./models'); print('Downloaded to', p)\""
        ]
      }
    },
    {
      method: "notify",
      params: {
        html: "Model downloaded to app/models/. Point KoboldCPP at it and expose port 5001."
      }
    }
  ]
}
