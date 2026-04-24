module.exports = {
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "living-agent run --cycles 1 --endpoint http://localhost:5001/api/v1/generate --grid-dir ."
        ]
      }
    }
  ]
}
