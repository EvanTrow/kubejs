// kubejs/server_scripts/sliceanddice-fertilizer-sugar-cane.js

// adds a sprinkle behaviour for the slice and dice fertilizer that makes it grow sugar cane up to 3 blocks tall

const SC_SprinkleBehaviour = Java.loadClass('com.possible_triangle.sliceanddice.block.sprinkler.SprinkleBehaviour');
const SC_Blocks = Java.loadClass('net.minecraft.world.level.block.Blocks');
const SC_Registries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');

console.info('[SC] Sugar cane sprinkler script loaded');

SC_SprinkleBehaviour.Companion['register(kotlin.jvm.functions.Function1,com.possible_triangle.sliceanddice.block.sprinkler.SprinkleBehaviour,int)'](
	function (stack) {
		return String(SC_Registries.FLUID.getKey(stack.getFluid())) === 'sliceanddice:fertilizer';
	},
	function (range, world, fluidStack, random) {
		range.forEachBlock(function (pos) {
			const state = world.getBlockState(pos);
			if (!state.is(SC_Blocks.SUGAR_CANE)) return;
			if (world.getBlockState(pos.above()).is(SC_Blocks.SUGAR_CANE)) return;

			let bottom = pos;

			while (world.getBlockState(bottom.below()).is(SC_Blocks.SUGAR_CANE)) {
				bottom = bottom.below();
			}

			let top = bottom;
			let height = 1;

			while (world.getBlockState(top.above()).is(SC_Blocks.SUGAR_CANE)) {
				top = top.above();
				height++;
			}

			// console.info(`[SC] Top cane found at ${top.x} ${top.y} ${top.z}, height=${height}`);

			if (height >= 3) return;

			const growPos = top.above();
			if (!world.getBlockState(growPos).isAir()) return;

			// if (random.nextInt(30) < 26) return;
			if (world.dayTime() % 20 !== 0 || random.nextInt(30) < 26) {
				// console.info(`[SC] Skipping growth at ${pos.x} ${pos.y} ${pos.z} due to game time or random chance - gameTime: ${world.dayTime() % 20} - random: ${random.nextInt(30)}`);
				return;
			}

			world.setBlockAndUpdate(growPos, SC_Blocks.SUGAR_CANE.defaultBlockState());
			// console.info(`[SC] Grew sugar cane at ${growPos.x} ${growPos.y} ${growPos.z}`);
		});
	},
	0,
);
