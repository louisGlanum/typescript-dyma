import { defineConfig } from "vite";

export default defineConfig({
    root:'./src', // fichier à compiler
    build: {
        outDir: "../dist", // destination du build
        emptyOutDir: true // supprimer tout le dist à chaque build
    }
})