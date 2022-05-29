//priority: 1005

const unificationBlacklistEntry = (material, type) => {
    return { material: material, type: type };
};

const entryIsBlacklisted = (material, type) => {
    for (var i = 0; i < unificationBlacklist.length; i++) {
        if (unificationBlacklist[i].material == material && unificationBlacklist[i].type == type) {
            return true;
        }
    }
    return false;
};

const tagIsEmpty = (tag) => {
    return getPreferredItemInTag(Ingredient.of(tag)).id == air;
};

const getPreferredItemInTag = (tag) => {
    let pref =
        Utils.listOf(tag.stacks)
            .toArray()
            .sort(({ mod: a }, { mod: b }) => compareIndices(a, b, tag))[0] || Item.of(air);
    return pref;
};
const compareIndices = (a, b, tag) => {
    if (a == b) return 0; // iff a == b, they'll be found at the same position in modPriorities

    for (let mod of modPriorities) {
        if (mod == a) return -1; // if a comes before b, then idx(a) < idx(b), so -1
        if (mod == b) return 1; // if a comes after b, then idx(a) > idx(b), so 1
    }

    console.error('[' + a + ', ' + b + '] were both unaccounted for in mod unification' + (tag ? ' for ' + tag : '!'));
    return 0;
};

const getStrippedLogFrom = (logBlock) => {
    let result = air;
    buildWoodVariants.find((wood) => {
        if (wood.logBlock == logBlock) {
            result = wood.logBlockStripped;
            return result;
        }
    });
    return result;
};

const unificationBlacklist = [
    //none
];

const playerHas = (item, player) => {
    return player.inventory.find(item) != -1;
};


// general use constants

let modifyShaped = (e, result, count, pattern, ingredients) => {
    e.remove({ output: result, type: 'minecraft:crafting_shaped' })
    e.shaped(Item.of(result, count), pattern, ingredients).id(`kubejs:shaped/${result.replace(':', '/')}`)
}
let modifyShapeless = (e, result, count, ingredients) => {
    e.remove({ output: result, type: 'minecraft:crafting_shapeless' })
    e.shapeless(Item.of(result, count), ingredients).id(`kubejs:shapeless/${result.replace(':', '/')}`)
}
let modifySmelt = (e, result, ingredients) => {
    e.remove({ output: result, type: 'minecraft:smelting' })
    e.smelting(result, ingredients).id(`kubejs:smelting/${result.replace(':', '/')}`)
}
let removeRecipeByID = (e, recipes) => {
    recipes.forEach(recipe => {
      e.remove({ id: recipe })
    })
}
let removeRecipeByOutput = (e, recipes) => {
    recipes.forEach(recipe => {
      if (Array.isArray(recipe)) {
        e.remove({ type: recipe[1], output: recipe[0] })
      } else {
        e.remove({ output: recipe })
      }
    })
}
let woodcutting = (e, entries) => {
    entries.forEach(([input, output, count]) => {
      e.custom({
        type: "corail_woodcutter:woodcutting",
        ingredient: { item: input },
        result: output,
        count: count
      }).id(`kubejs:woodcutting/${output.replace(':', '/')}`)
    })
}

// let maInfusion = (e, output, middle, item1, item2, item3, item4, item5, item6, item7, item8) => {
//     e.recipes.mysticalagriculture.infusion({
//       input: { item: middle },
//       ingredients: [
//         { item: item1 },
//         { item: item2 },
//         { item: item3 },
//         { item: item4 },
//         { item: item5 },
//         { item: item6 },
//         { item: item7 },
//         { item: item8 }
//       ],
//       result: { item: output }
//     }).id(`kubejs:mainfusion/${output.replace(':', '/')}`)
// }