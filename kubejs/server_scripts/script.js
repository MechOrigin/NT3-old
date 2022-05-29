// priority: 0

settings.logAddedRecipes = false
settings.logRemovedRecipes = false
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here

	materialsToUnify.forEach((material) => {
        //let ore = getPreferredItemInTag(Ingredient.of(`#forge:ores/${material}`)).id;
		let crushed_ore = getPreferredItemInTag(Ingredient.of(`#forge:crushed_ores/${material}`)).id;
		let dust_impure = getPreferredItemInTag(Ingredient.of(`#forge:dust_impures/${material}`)).id;
		let dust_pure = getPreferredItemInTag(Ingredient.of(`#forge:dust_pures/${material}`)).id;
		let crushed_ore_centrifuged = getPreferredItemInTag(Ingredient.of(`#forge:crushed_ore_centrifuged/${material}`)).id;
		let crushed_ore_purified = getPreferredItemInTag(Ingredient.of(`#forge:crushed_ore_purified/${material}`)).id;
		let raw_ore = getPreferredItemInTag(Ingredient.of(`#forge:raw_ores/${material}`)).id;

		let ingot = getPreferredItemInTag(Ingredient.of(`#forge:ingots/${material}`)).id;
		let nugget = getPreferredItemInTag(Ingredient.of(`#forge:nuggets/${material}`)).id;

		let gem = getPreferredItemInTag(Ingredient.of(`#forge:gems/${material}`)).id;
		let dust = getPreferredItemInTag(Ingredient.of(`#forge:dusts/${material}`)).id;

		let plate = getPreferredItemInTag(Ingredient.of(`#forge:plates/${material}`)).id;

		minecraft_ore_nugget_smelting(event, material, crushed_ore, nugget);
		minecraft_ore_gem_smelting(event, material, crushed_ore, gem);
		minecraft_ore_dust_smelting(event, material, crushed_ore, dust);
		minecraft_ore_ingot_smelting(event, material, ingot, dust);
		minecraft_ore_raw_smelting(event, material, raw_ore);

		greg_hammer_plating(event, material, ingot, plate, gem);

		fix_ingot_from_nugget(event, material, ingot, nugget);

		//console.log(`${material}`);
	});

	planksToUnify.forEach((woodTypes) => {
		let planks = getPreferredItemInTag(Ingredient.of(`#forge:planks/${woodTypes}`)).id;

		greg_saw_plating(event, woodTypes, planks);
	});

	var idRemove = [
		''
	];
	idRemove.forEach(iR => {
        event.remove({
            id: iR
        });
    });


	function minecraft_ore_nugget_smelting(event, material, crushed_ore, nugget) {
        if (crushed_ore == air || nugget == air) {
            return;
        }

        blacklistedMaterials = ['ender'];

        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }

        var output = Item.of(nugget, 10), 
            input = `#forge:crushed_ores/${material}`;

        event.smelting(output, input).xp(0.7);
        event.blasting(output, input).xp(0.7);
    }

	function minecraft_ore_gem_smelting(event, material, crushed_ore, gem) {
        if (crushed_ore == air || gem == air) {
            return;
        }

        blacklistedMaterials = ['amber', 'ender'];

        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }

        var output = gem,
            input = `#forge:crushed_ores/${material}`;

        event.smelting(output, input).xp(0.7);
        event.blasting(output, input).xp(0.7);
    }

	function minecraft_ore_dust_smelting(event, material, crushed_ore, dust) {
        if (crushed_ore == air || dust == air) {
            return;
        }

        blacklistedMaterials = [
			'stone',
			'iron',
			'gold',
			'copper',
			'coal',
			'diamond',
			'emerald',
			'lapis',
			//'redstone',
			'quartz',
			'netherite_scrap',
			'aluminium',
			'beryllium',
			'bismuth',
			'cobalt',
			'iridium',
			'lead',
			'manganese',
			'molybdenum',
			'neodymium',
			'nickel',
			'palladium',
			'platinum',
			'silver',
			'thorium',
			'titanium',
			'uranium_238',
			'graphite',
			'lithium',
			'sulfur',
			'tin',
			'zinc',
			'oilsands',
			'almandine',
			'andradite',
			//'banded_iron',
			//'brown_limonite',
			'calcite',
			//'cassiterite',
			//'chalcopyrite',
			'cobaltite',
			'cooperite',
			//'galena',
			//'garnierite',
			'grossular',
			'ilmenite',
			'rutile',
			'magnesite',
			//'magnetite',
			'molybdenite',
			'phosphate',
			//'pyrite',
			'pyrolusite',
			'pyrope',
			'saltpeter',
			'scheelite',
			'spessartine',
			//'sphalerite',
			'stibnite',
			//'tetrahedrite',
			'tungstate',
			'uraninite',
			'uvarovite',
			'wulfenite',
			//'yellow_limonite',
			'vanadium_magnetite',
			'bastnasite',
			//'pentlandite',
			'spodumene',
			'tantalite',
			'lepidolite',
			'glauconite',
			'bentonite',
			'pitchblende',
			//'malachite',
			'barite',
			'talc',
			'soapstone',
			'blue_topaz',
			'green_sapphire',
			'lazurite',
			'ruby',
			'blue_sapphire',
			'sodalite',
			'tanzanite',
			'topaz',
			'olivine',
			'opal',
			'amethyst',
			'phosphorus',
			'red_garnet',
			'yellow_garnet',
			'cinnabar',
			'wrought_iron',
			'tungstensteel',
			'naquadah',
			'enriched_naquadah',
			'quartzite',
			'lignite_coal',
			'salt',
			'rock_salt',
			'bauxite',
			'oil_shale'
		];

        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }

        var output = dust,
            input = `#forge:crushed_ores/${material}`;


        event.smelting(output, input).xp(0.7);
        event.blasting(output, input).xp(0.7);
    }

	function minecraft_ore_ingot_smelting(event, material, ingot, dust) {
        if (dust == air) {
            return;
        }

        blacklistedMaterials = [
			'stone',
			'iron',
			'gold',
			'copper',
			'coal',
			'diamond',
			'emerald',
			'lapis',
			'redstone',
			'quartz',
			'netherite_scrap',
			'aluminium',
			'beryllium',
			'bismuth',
			'cobalt',
			'iridium',
			'lead',
			'manganese',
			'molybdenum',
			'neodymium',
			'nickel',
			'palladium',
			'platinum',
			'silver',
			'thorium',
			'titanium',
			'uranium_238',
			'graphite',
			'lithium',
			'sulfur',
			'tin',
			'zinc',
			'oilsands',
			'almandine',
			'andradite',
			//'banded_iron',
			//'brown_limonite',
			'calcite',
			//'cassiterite',
			//'chalcopyrite',
			'cobaltite',
			'cooperite',
			//'galena',
			//'garnierite',
			'grossular',
			'ilmenite',
			'rutile',
			'magnesite',
			//'magnetite',
			'molybdenite',
			'phosphate',
			//'pyrite',
			'pyrolusite',
			'pyrope',
			'saltpeter',
			'scheelite',
			'spessartine',
			//'sphalerite',
			'stibnite',
			//'tetrahedrite',
			'tungstate',
			'uraninite',
			'uvarovite',
			'wulfenite',
			//'yellow_limonite',
			'vanadium_magnetite',
			'bastnasite',
			//'pentlandite',
			'spodumene',
			'tantalite',
			'lepidolite',
			'glauconite',
			'bentonite',
			'pitchblende',
			//'malachite',
			'barite',
			'talc',
			'soapstone',
			'blue_topaz',
			'green_sapphire',
			'lazurite',
			'ruby',
			'blue_sapphire',
			'sodalite',
			'tanzanite',
			'topaz',
			'olivine',
			'opal',
			'amethyst',
			'phosphorus',
			'red_garnet',
			'yellow_garnet',
			'cinnabar',
			'wrought_iron',
			'tungstensteel',
			'naquadah',
			'enriched_naquadah',
			'quartzite',
			'lignite_coal',
			'salt',
			'rock_salt',
			'bauxite',
			'oil_shale'
		];

        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }

		// if (crushed_ore_centrifuged != air) {
		// 	input.push(`#forge:crushed_ore_centrifuged/${material}`);
		// }

		// if (crushed_ore_purified != air) {
		// 	input.push(`#forge:crushed_ore_purified/${material}`);
		// }

        var output = `#forge:ingots/${material}`,
            input = `#forge:dusts/${material}`;

		// Iron
		if (`${material}` == 'magnetite') {
			output = Item.of('#forge:nuggets/iron', 8)
		}
		if (`${material}` == 'banded_iron') {
			output = Item.of('#forge:nuggets/iron', 4)
		}
		if (`${material}` == 'brown_limonite') {
			output = Item.of('#forge:nuggets/iron', 2)
		}
		if (`${material}` == 'pyrite') {
			output = Item.of('#forge:nuggets/iron', 3)
		}
		if (`${material}` == 'yellow_limonite') {
			output = Item.of('#forge:nuggets/iron', 2)
		}
		//Copper
		if (`${material}` == 'chalcopyrite') {
			output = Item.of('#forge:nuggets/copper', 3)
		}
		if (`${material}` == 'malachite') {
			output = Item.of('#forge:nuggets/copper', 2)
		}
		if (`${material}` == 'tetrahedrite') {
			output = Item.of('#forge:nuggets/copper', 3)
		}
		//Nickel
		if (`${material}` == 'pentlandite') {
			output = Item.of('#forge:nuggets/nickel', 4)
		}
		if (`${material}` == 'garnierite') {
			output = Item.of('#forge:nuggets/nickel', 4)
		}
		//Lead
		if (`${material}` == 'galena') {
			output = Item.of('#forge:nuggets/lead', 3)
		}
		//Tin
		if (`${material}` == 'cassiterite') {
			output = Item.of('#forge:nuggets/tin', 3)
		}
		//Zinc
		if (`${material}` == 'sphalerite') {
			output = Item.of('#forge:nuggets/zinc', 4)
		}

		//console.log(`${material}` + ' ' + output + ' ' + input);

        event.smelting(output, input).xp(0.7);
        event.blasting(output, input).xp(0.7);
    }

	function minecraft_ore_raw_smelting(event, material, raw_ore) {
        if (raw_ore == air) {
            return;
        }

        blacklistedMaterials = [
			'stone',
			//'iron',
			//'gold',
			//'copper',
			'coal',
			'diamond',
			'emerald',
			'lapis',
			'redstone',
			'quartz',
			'netherite_scrap',
			'aluminium',
			'beryllium',
			'bismuth',
			'cobalt',
			'iridium',
			'lead',
			'manganese',
			'molybdenum',
			'neodymium',
			'nickel',
			'palladium',
			'platinum',
			'silver',
			'thorium',
			'titanium',
			'uranium_238',
			'graphite',
			'lithium',
			'sulfur',
			'tin',
			'zinc',
			'oilsands',
			'almandine',
			'andradite',
			//'banded_iron',
			//'brown_limonite',
			'calcite',
			//'cassiterite',
			//'chalcopyrite',
			'cobaltite',
			'cooperite',
			//'galena',
			//'garnierite',
			'grossular',
			'ilmenite',
			'rutile',
			'magnesite',
			//'magnetite',
			'molybdenite',
			'phosphate',
			//'pyrite',
			'pyrolusite',
			'pyrope',
			'saltpeter',
			'scheelite',
			'spessartine',
			//'sphalerite',
			'stibnite',
			//'tetrahedrite',
			'tungstate',
			'uraninite',
			'uvarovite',
			'wulfenite',
			//'yellow_limonite',
			'vanadium_magnetite',
			'bastnasite',
			//'pentlandite',
			'spodumene',
			'tantalite',
			'lepidolite',
			'glauconite',
			'bentonite',
			'pitchblende',
			//'malachite',
			'barite',
			'talc',
			'soapstone',
			'blue_topaz',
			'green_sapphire',
			'lazurite',
			'ruby',
			'blue_sapphire',
			'sodalite',
			'tanzanite',
			'topaz',
			'olivine',
			'opal',
			'amethyst',
			'phosphorus',
			'red_garnet',
			'yellow_garnet',
			'cinnabar',
			'wrought_iron',
			'tungstensteel',
			'naquadah',
			'enriched_naquadah',
			'quartzite',
			'lignite_coal',
			'salt',
			'rock_salt',
			'bauxite',
			'oil_shale'
		];

        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }

        var output = `#forge:ingots/${material}`,
            input = `#forge:raw_ores/${material}`;

		// Iron
		if (`${material}` == 'magnetite') {
			output = Item.of('#forge:ingots/iron', 1)
		}
		if (`${material}` == 'banded_iron') {
			output = Item.of('#forge:ingots/iron', 1)
		}
		if (`${material}` == 'brown_limonite') {
			output = Item.of('#forge:ingots/iron', 1)
		}
		if (`${material}` == 'pyrite') {
			output = Item.of('#forge:ingots/iron', 1)
		}
		if (`${material}` == 'yellow_limonite') {
			output = Item.of('#forge:ingots/iron', 1)
		}
		//Copper
		if (`${material}` == 'chalcopyrite') {
			output = Item.of('#forge:ingots/copper', 1)
		}
		if (`${material}` == 'malachite') {
			output = Item.of('#forge:ingots/copper', 1)
		}
		if (`${material}` == 'tetrahedrite') {
			output = Item.of('#forge:ingots/copper', 1)
		}
		//Nickel
		if (`${material}` == 'pentlandite') {
			output = Item.of('#forge:ingots/nickel', 1)
		}
		if (`${material}` == 'garnierite') {
			output = Item.of('#forge:ingots/nickel', 1)
		}
		//Lead
		if (`${material}` == 'galena') {
			output = Item.of('#forge:ingots/lead', 1)
		}
		//Tin
		if (`${material}` == 'cassiterite') {
			output = Item.of('#forge:ingots/tin', 1)
		}
		//Zinc
		if (`${material}` == 'sphalerite') {
			output = Item.of('#forge:ingots/zinc', 1)
		}

        event.smelting(output, input).xp(0.7);
        event.blasting(output, input).xp(0.7);
    }

	//greg plates
	function greg_hammer_plating(event, material, ingot, plate, gem) {
        if (ingot == air || plate == air) {
            return;
        }

        let output = plate,
            input = Item.of(`#forge:ingots/${material}`, 2),
            hammer = '#forge:tools/hammer';

        if (gem != air) {
            input.push(`#forge:gems/${material}`);
        }

		event.remove({ id: `immersiveengineering:crafting/plate_${material}_hammering` })
		event.remove({ id: `antimatter:plate` })

        event.shapeless(output, [input, hammer]).id(`secretasain:base/hammering/${material}_plates`);
    }

	function greg_saw_plating(event, woodTypes, planks) {
        if (planks == air) {
            return;
        }

        let output = Item.of(`#forge:plates/wood`),
            input = planks,
            saw = '#forge:tools/saw';

        event.shapeless(output, [input, saw]).id(`secretasain:base/sawing/${woodTypes}_plates`);
    }

	function fix_ingot_from_nugget(event, material, ingot, nugget) {
		if (ingot == air || nugget == air) {
            return;
        }
		
        let output = ingot,
            input = Item.of(`#forge:nuggets/${material}`, 9);

		event.remove({ id: `tconstruct:common/materials/${material}_ingot_from_nuggets` })
		event.remove({ id: `immersiveengineering:crafting/nugget_${material}_to_${material}_ingot` })
		event.remove({ id: `minecraft:${material}_ingot_from_nuggets` })

		event.shapeless(output, [input]).id(`secretasain:base/${material}_ingot_from_nuggets`);
	}
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})
