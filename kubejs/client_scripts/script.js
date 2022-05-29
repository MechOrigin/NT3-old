// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
})

onEvent('jei.add.items', jei => {
    jei.add(Item.of('appliedenergistics2:facade', {item:"minecraft:stone"}))
    jei.add('immersiveengineering:metal_press')
    jei.add('immersiveengineering:assembler')
    jei.add('immersiveengineering:squeezer')
    jei.add('immersiveengineering:arc_furnace')
    jei.add('immersiveengineering:silo')
    jei.add('immersiveengineering:crusher')
    jei.add('immersiveengineering:fermenter')
    jei.add('immersiveengineering:mixer')
    jei.add('immersiveengineering:tank')
    jei.add('immersiveengineering:sawmill')
    jei.add('immersiveengineering:refinery')
    jei.add('immersiveengineering:bottling_machine')
    jei.add('immersiveengineering:lightning_rod')
    jei.add('immersiveengineering:diesel_generator')
    jei.add('immersiveengineering:excavator')
    jei.add('immersiveengineering:auto_workbench')

})