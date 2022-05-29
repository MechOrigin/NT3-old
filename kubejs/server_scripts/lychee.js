onEvent('recipes', (event) => {

    const impureProcessing = [
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
    'banded_iron',
    'brown_limonite',
    'calcite',
    'cassiterite',
    'chalcopyrite',
    'cobaltite',
    'cooperite',
    'galena',
    'garnierite',
    'grossular',
    'ilmenite',
    'rutile',
    'magnesite',
    'magnetite',
    'molybdenite',
    'phosphate',
    'pyrite',
    'pyrolusite',
    'pyrope',
    'saltpeter',
    'scheelite',
    'spessartine',
    'sphalerite',
    'stibnite',
    'tetrahedrite',
    'tungstate',
    'uraninite',
    'uvarovite',
    'wulfenite',
    'yellow_limonite',
    'vanadium_magnetite',
    'bastnasite',
    'pentlandite',
    'spodumene',
    'tantalite',
    'lepidolite',
    'glauconite',
    'bentonite',
    'pitchblende',
    'malachite',
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

    impureProcessing.forEach((material) => {
        let dust = getPreferredItemInTag(Ingredient.of(`#forge:dust_impures/${material}`)).id;
        let dust_clean = getPreferredItemInTag(Ingredient.of(`#forge:dusts/${material}`)).id;

        antimatter_impure_processing(
            event,
            material,
            dust,
            dust_clean
        );
    });

    function antimatter_impure_processing(
        event,
        material,
        dust,
        dust_clean
    ) {
        if (dust == air || dust_clean == air) {
            return;
        }

        // blacklistedMaterials = ['copper', 'gold', 'iron', 'lead', 'osmium', 'tin', 'uranium'];
        // for (var i = 0; i < blacklistedMaterials.length; i++) {
        //     if (blacklistedMaterials[i] == material) {
        //         return;
        //     }
        // }

        event.custom({
            type: 'lychee:item_inside',
            item_in: {
                item: dust
            },
            block_in: {
                blocks: ['water_cauldron'],
                state: {
                    level: 3
                }
            },
            post: [
                {
                    type: 'drop_item',
                    item: dust_clean
                },
                {
                    type: 'place',
                    block: {
                        blocks: ['water_cauldron'],
                        state: {
                            level: 3
                        }
                    }
                }
            ]
        });
    
        }

    // var data = {
    //     recipes: [
    //         {
    //             item_in: 'antimatter_shared:dust_impure_iron',
    //             // block_in: 'water_cauldron',
    //             // level: 3,
    //             // drop_item: 'drop_item',
    //             item_out: 'antimatter_shared:dust_iron'
    //             // place: 'place',
    //             // block: 'cauldron',
    //             // level_out: 3
    //         },
    //         {
    //             item_in: 'antimatter_shared:dust_impure_gold',
    //             item_out: 'antimatter_shared:dust_gold',
    //         },
    //         {
    //             item_in: 'antimatter_shared:dust_impure_copper',
    //             item_out: 'antimatter_shared:dust_copper',
    //         },
    //         {
    //             item_in: 'antimatter_shared:dust_impure_coal',
    //             item_out: 'antimatter_shared:dust_coal',
    //         },
    //         {
    //             item_in: 'antimatter_shared:dust_impure_diamond',
    //             item_out: 'antimatter_shared:dust_diamond',
    //         },
    //         {
    //             item_in: 'antimatter_shared:dust_impure_emerald',
    //             item_out: 'antimatter_shared:dust_emerald',
    //         },
    //         {
    //             item_in: 'antimatter_shared:dust_impure_lapis',
    //             item_out: 'antimatter_shared:dust_lapis',
    //         },
    //         {
    //             item_in: 'antimatter_shared:dust_impure_redstone',
    //             item_out: 'minecraft:redstone',
    //         },
    //         {
    //             item_in: 'antimatter_shared:dust_impure_quartz',
    //             item_out: 'antimatter_shared:dust_quartz',
    //         },
    //         {
    //             item_in: 'antimatter_shared:dust_impure_netherite_scrap',
    //             item_out: 'antimatter_shared:dust_netherite_scrap',
    //         },
    //         {
    //             item_in: 'antimatter_shared:dust_impure_aluminium',
    //             item_out: 'antimatter_shared:dust_aluminium',
    //         }
    //     ]
    // };

    // data.recipes.forEach((recipe) => {
    //     event.custom({
    //         type: 'lychee:item_inside',
    //         item_in: {
    //             item: recipe.item_in
    //         },
    //         block_in: {
    //             blocks: ['water_cauldron'],
    //             state: {
    //                 level: 3
    //             }
    //         },
    //         post: [
    //             {
    //                 type: 'drop_item',
    //                 item: recipe.item_out
    //             },
    //             {
    //                 type: 'place',
    //                 block: {
    //                     blocks: ['water_cauldron'],
    //                     state: {
    //                         level: 3
    //                     }
    //                 }
    //             }
    //         ]
    //     });
    // });
});

