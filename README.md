# kubejs
Collection of KubeJS Scripts for Minecraft

## Scripts

All scripts live in `kubejs/server_scripts/` and are loaded automatically by KubeJS on server startup.

---

### `mechanical-extruder-bone-block.js`

**Mod requirements:** [Create Mechanical Extruder](https://www.curseforge.com/minecraft/mc-mods/create-mechanical-extruder)

Adds a recipe to the Create Mechanical Extruder that produces **bone meal** when extruding a **bone block** with a **water source block** adjacent to it. The recipe uses the `advanced` flag so it shows up in the Mechanical Extruder's recipe list.

---

### `sliceanddice-fertilizer.js`

**Mod requirements:** [Slice & Dice](https://www.curseforge.com/minecraft/mc-mods/slice-and-dice), [Create](https://www.curseforge.com/minecraft/mc-mods/create)

Adds a **Create Mixing** recipe that converts **1 bone meal** + **1,000 mB of water** into **1,000 mB of Slice & Dice fertilizer fluid**. This provides a renewable source of fertilizer using the Create mod's mixing basin.

---

### `sliceanddice-fertilizer-sugar-cane.js`

**Mod requirements:** [Slice & Dice](https://www.curseforge.com/minecraft/mc-mods/slice-and-dice)

Registers a custom **sprinkler behaviour** so that the Slice & Dice sprinkler filled with **fertilizer fluid** will grow **sugar cane** up to a maximum height of **3 blocks**. Growth is throttled by game time (checked every 20 ticks) and a random chance (roughly 1-in-5) to avoid instant or overpowered growth.
