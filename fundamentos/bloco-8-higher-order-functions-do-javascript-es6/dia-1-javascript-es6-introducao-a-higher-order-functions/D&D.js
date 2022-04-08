const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };


const dragonDamage = (strenght) =>{
    return Math.floor(Math.random() * (strenght - 15)) + 15;
}

const warriorDamage = (strenght,weaponDmg) =>{
    return Math.floor(Math.random() * ((strenght*weaponDmg) - strenght)) + strenght;
}


const mageDamage = (intelligence,mana) =>{
    
 if(mana > 15){
    return {
        damage: Math.floor(Math.random() * ((intelligence*2) - intelligence)) + intelligence,
        mana: -15
       }
 }
else{
    return {
     damage: 'Não Possui mana suficiente',
     mana: 0
    }
}
}


const battleWarrior = (warriorDamage) =>{
    dragon.healthPoints -= warriorDamage(warrior.strength,warrior.weaponDmg)
    warrior.damage = warriorDamage(warrior.strength,warrior.weaponDmg)
}

const battleMage = (mageDamage) =>{
    const statusMage = mageDamage(mage.intelligence,mage.mana)
    mageDmg = statusMage.damage
    mageMana = statusMage.mana
  
    if (typeof mageDmg === 'number') {
        dragon.healthPoints -= mageDmg
        mage.mana += mageMana
        mage.damage = mageDmg
    }
    else {
        mage.mana = mageMana
        return mageDmg
    }
}

const battleDragon = (dragonDamage) =>{
    warrior.healthPoints -= dragonDamage(dragon.strength)
    mage.healthPoints -= dragonDamage(dragon.strength)
    dragon.damage = dragonDamage(dragon.strength)
}




const gameActions = {
    battleWarrior: (warriorDamage) =>{
        dragon.healthPoints -= warriorDamage(warrior.strength,warrior.weaponDmg)
        warrior.damage = warriorDamage(warrior.strength,warrior.weaponDmg)
    },
    
    battleMage: (mageDamage) =>{
        const statusMage = mageDamage(mage.intelligence,mage.mana)
        mageDmg = statusMage.damage
        mageMana = statusMage.mana
      
        if (typeof mageDmg === 'number') {
            dragon.healthPoints -= mageDmg
            mage.mana += mageMana
            mage.damage = mageDmg
        }
        else {
            mage.mana = mageMana
            return mageDmg
        }
    },
    
    battleDragon: (dragonDamage) =>{
        warrior.healthPoints -= dragonDamage(dragon.strength)
        mage.healthPoints -= dragonDamage(dragon.strength)
        dragon.damage = dragonDamage(dragon.strength)
    },
    statusBattle: () => battleMembers,

    
};

const turn = () =>{
gameActions.battleWarrior(warriorDamage)
gameActions.battleMage(mageDamage)
gameActions.battleDragon(dragonDamage)
console.log(gameActions.statusBattle())
}

turn()
turn()
turn()
turn()
