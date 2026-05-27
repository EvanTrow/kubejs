// kubejs/server_scripts/mechanical-extruder-bone-block.js

// adds a recipe to the mechanical extruder to get bone meal from a bone block and water source block

ServerEvents.recipes((event) => {
	event.recipes.create_mechanical_extruder.extruding(Item.of('minecraft:bone_meal'), [BlockPredicate.of('minecraft:water'), BlockPredicate.of('minecraft:bone_block')]).advanced(true);
});
