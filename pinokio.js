module.exports = {
  version: "3.7",
  title: "The Living Agent",
  description: "Autonomous 16x16 Chess-Grid research agent (KoboldCPP + Qwen GGUF). Walks a grid of Markdown knowledge cells, synthesizes short papers, scores novelty, updates a persistent soul.md.",
  icon: "icon.png",
  menu: async (kernel, info) => {
    let installed = info.exists("app/env")
    let running = {
      install: info.running("install.js"),
      start: info.running("start.js"),
      update: info.running("update.js"),
      reset: info.running("reset.js"),
      model: info.running("download_model.js")
    }
    if (running.install) {
      return [{ default: true, icon: "fa-solid fa-plug", text: "Installing", href: "install.js" }]
    } else if (!installed) {
      return [{ default: true, icon: "fa-solid fa-plug", text: "Install", href: "install.js" }]
    } else if (running.model) {
      return [{ default: true, icon: "fa-solid fa-download", text: "Downloading model", href: "download_model.js" }]
    } else if (running.start) {
      return [{
        default: true,
        icon: 'fa-solid fa-terminal',
        text: "Terminal",
        href: "start.js"
      }]
    } else if (running.update) {
      return [{ default: true, icon: 'fa-solid fa-terminal', text: "Updating", href: "update.js" }]
    } else if (running.reset) {
      return [{ default: true, icon: 'fa-solid fa-terminal', text: "Resetting", href: "reset.js" }]
    } else {
      return [
        { default: true, icon: "fa-solid fa-power-off", text: "Start", href: "start.js" },
        { icon: "fa-solid fa-download", text: "Download GGUF Model", href: "download_model.js" },
        { icon: "fa-solid fa-plug", text: "Update", href: "update.js" },
        { icon: "fa-solid fa-plug", text: "Reinstall", href: "install.js" },
        {
          icon: "fa-regular fa-circle-xmark",
          text: "<div><strong>Reset</strong><div>Revert to pre-install state</div></div>",
          href: "reset.js",
          confirm: "Are you sure you wish to reset the app?"
        }
      ]
    }
  }
}
