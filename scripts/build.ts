import { randomUUID } from "node:crypto";
import { readFileSync, renameSync, rmSync, watch, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { customize } from "./customize.ts";
import { compilePalette } from "./palette.ts";

export const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
export const VERSION = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/;
export function render(palette: string, hider: string): string {
  return `/* Ultra Minimal. MIT License; see LICENSE. */\n${compilePalette(palette)}\n${customize()}\n${hider}`;
}

// A failed build must leave the stylesheet Obsidian is reading intact.
export function writeAtomic(path: string, content: string): void {
  const temporary = `${path}.${randomUUID()}.tmp`;
  try {
    writeFileSync(temporary, content);
    renameSync(temporary, path);
  } finally {
    rmSync(temporary, { force: true });
  }
}

export function build(root = ROOT): void {
  const manifest = JSON.parse(readFileSync(join(root, "manifest.json"), "utf8"));
  if (!VERSION.test(manifest.version) || !VERSION.test(manifest.minAppVersion)) {
    throw new Error("Manifeste : version invalide");
  }
  const output = render(readFileSync(join(root, "palette.css"), "utf8"), readFileSync(join(root, "hider.css"), "utf8"));
  writeAtomic(join(root, "theme.css"), output);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const rebuild = () => {
    try {
      build();
      console.log("theme.css reconstruit");
      process.exitCode = 0;
    } catch (error) {
      console.error(error instanceof Error ? error.message : error);
      process.exitCode = 1;
    }
  };
  if (process.argv.includes("--watch")) {
    // Source TypeScript files live in scripts/, not at the repository root.
    // Watch both directories so every documented input can trigger a rebuild.
    watch(ROOT, (_, file) => {
      const name = String(file ?? "");
      if (["palette.css", "hider.css", "manifest.json"].includes(name)) rebuild();
    });
    watch(join(ROOT, "scripts"), (_, file) => {
      if (String(file ?? "").endsWith(".ts")) rebuild();
    });
  }
  rebuild();
}
