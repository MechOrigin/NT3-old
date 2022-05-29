//priority: 1000
onEvent('tags.items', e => {
    e.add('misctags:immersive_engineering_hammer', 'immersiveengineering:hammer')
    e.add('misctags:immersive_engineering_wirecutter', 'immersiveengineering:wirecutter')
  
    e.remove('forge:storage_blocks/copper', 'minecraft:cut_copper')
  })
  onEvent('tags.blocks', e => {
    e.add('minecraft:climbable', ['minecraft:chain', /additionallanterns:.*_chain/])
  })
  onEvent('tags.entity_types', e => {
    // e.add('mob_grinding_utils:noswab', [/productivebees:.+/, 'artifacts:mimic',])
  })
  