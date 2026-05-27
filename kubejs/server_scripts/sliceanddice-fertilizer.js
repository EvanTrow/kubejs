// kubejs/server_scripts/sliceanddice-fertilizer.js

// adds a recipe to create slice and dice fertilizer fluid from bone meal and water

ServerEvents.recipes((event) => {
	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				item: 'minecraft:bone_meal',
			},
			{
				type: 'neoforge:single',
				amount: 1000,
				fluid: 'minecraft:water',
			},
		],
		results: [
			{
				amount: 1000,
				id: 'sliceanddice:fertilizer',
			},
		],
	});
});
