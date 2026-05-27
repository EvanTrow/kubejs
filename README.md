# kubejs
Collection of KubeJS Scripts for Minecraft

## Scripts

All scripts live in `kubejs/server_scripts/` and are loaded automatically by KubeJS on server startup.

---

### `mechanical-extruder-bone-block.js`

**Mod requirements:** [Create Mechanical Extruder](https://modrinth.com/mod/create-mechanical-extruder)

Adds a recipe to the Create Mechanical Extruder that produces **bone meal** when extruding a **bone block** with a **water source block** adjacent to it. The recipe uses the `advanced` flag to use the brass extruder.

---

### `sliceanddice-fertilizer.js`

**Mod requirements:** [Slice & Dice](https://modrinth.com/mod/slice-and-dice), [Create](https://modrinth.com/mod/create)

Adds a **Create Mixing** recipe that converts **1 bone meal** + **1,000 mB of water** into **1,000 mB of Slice & Dice fertilizer fluid**.

---

### `sliceanddice-fertilizer-sugar-cane.js`

**Mod requirements:** [Slice & Dice](https://modrinth.com/mod/slice-and-dice), [Create](https://modrinth.com/mod/create)

Registers a custom **sprinkler behaviour** so that the Slice & Dice sprinkler filled with **fertilizer fluid** will grow **sugar cane** up to a maximum height of **3 blocks**. Growth is throttled by game time (checked every 20 ticks) and a random chance (roughly 1-in-5) to work just like it does for other crops.
