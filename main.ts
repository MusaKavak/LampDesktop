import { invoke } from "@tauri-apps/api/tauri";
import { appWindow, PhysicalSize } from "@tauri-apps/api/window";

let greetInputEl: HTMLInputElement | null;
let greetMsgEl: HTMLElement | null;

appWindow.setAlwaysOnTop(true)
appWindow.setResizable(false)
appWindow.setSize(new PhysicalSize(75, 75))
appWindow.setDecorations(false)



async function greet() {
    if (greetMsgEl && greetInputEl) {
        // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
        greetMsgEl.textContent = await invoke("greet", {
            name: greetInputEl.value,
        });
    }
}

window.addEventListener("DOMContentLoaded", () => {
    greetInputEl = document.querySelector("#greet-input");
    greetMsgEl = document.querySelector("#greet-msg");
    document
        .querySelector("#greet-button")
        ?.addEventListener("click", () => greet());
});

