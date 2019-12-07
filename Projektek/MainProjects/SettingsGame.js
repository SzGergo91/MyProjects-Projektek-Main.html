
'use strict'


//$global variables
let $globalSelected=0;
let $globalClicks=0;
let $globalArenaMod=false;
let $globalSurvivalMod=false;
let $globalWeapons1=true;
let $globalWeapons2=true;
let $globalDefenseInput1=true;
let $globalAttackInput1=true;
let $globalHealthInput1=true;
let $globalDefenseInput2=true;
let $globalAttackInput2=true;
let $globalHealthInput2=true;
//Skill selection variable
let $globalSkillSelection1=0;
let $globalSkillSelection2=0;
let $globalCharacters=[{Character: `SettingsGame/Characters/Lizardmen.jpg`,NotCharacter: `SettingsGame/BigX.png`,count: 1,
						 warrior: true,selected: false,active: false, Health: 952, Defense:7, Attack: `15-23`},

					   {Character: `SettingsGame/Characters/IceGolem.jpg`,NotCharacter: `SettingsGame/BigX.png`, count: 1,
					    warrior: false,selected: false,Health: 3968, Defense: 25, Attack: `49-78`},

					   {Character: `SettingsGame/Characters/FireGolem.jpg`,NotCharacter: `SettingsGame/BigX.png`, count: 1,
					    warrior: false,selected: false,Health: 2811, Defense: 20, Attack: `70-132`},

					   {Character: `SettingsGame/Characters/PolarBear.jpg`,NotCharacter: `SettingsGame/BigX.png`,count: 1,
					    warrior: false,selected: false,Health: 1950, Defense: 17, Attack: `25-43`},

					   {Character: `SettingsGame/Characters/LichKing.jpg`,NotCharacter: `SettingsGame/BigX.png`,count: 1,
					    warrior:false,selected: false,Health: 9811, Defense: 50, Attack: `270-361`},

					   {Character: `SettingsGame/Characters/ForestWitch.jpg`,NotCharacter: `SettingsGame/BigX.png`,count: 2,
					    warrior:false,selected: false, active: false,Health: 601, Defense: 2, Attack: `3-300`},

					   {Character: `SettingsGame/Characters/Archer.jpg`,NotCharacter: `SettingsGame/BigX.png`,count: 2,
					    warrior:true,selected: false,Health: 673, Defense: 4, Attack: `5-15`},

					   {Character: `SettingsGame/Characters/Swordsman.jpg`,NotCharacter: `SettingsGame/BigX.png`,count: 2,
					    warrior:true,selected: false,Health: 680, Defense: 10, Attack: `8-25`},

					   {Character: `SettingsGame/Characters/Bear.jpg`,NotCharacter: `SettingsGame/BigX.png`,count: 2,
					    warrior:false,selected: false,Health: 1455, Defense: 9, Attack: `20-24`},

					   {Character: `SettingsGame/Characters/Wolf.jpg`,NotCharacter: `SettingsGame/BigX.png`,count: 2,
					    warrior:false,selected: false,Health: 503, Defense: 3, Attack: `4-13`},

					   {Character: `SettingsGame/Characters/Farmer.jpg`,NotCharacter: `SettingsGame/BigX.png`,count: 3,
					    warrior:true,selected: false, active: false,Health: 700, Defense: 4, Attack: `6-45`},

					   {Character: `SettingsGame/Characters/Deer.jpg`,NotCharacter: `SettingsGame/BigX.png`,count: 3,
					    warrior:false,selected: false,Health: 804, Defense: 6, Attack: `8-35`},

					   {Character: `SettingsGame/Characters/JasonVoorhees.jpg`,NotCharacter: `SettingsGame/BigX.png`,count: 3,
					    warrior:true,selected: false,Health: 2312, Defense: 10, Attack: `40-125`},

					   {Character: `SettingsGame/Characters/Yeti.jpg`,NotCharacter: `SettingsGame/BigX.png`,count: 3,
					    warrior:false,selected: false,Health: 3582, Defense: 8, Attack: `58-109`},

					   {Character: `SettingsGame/Characters/EgyptionWarrior.jpg`,NotCharacter: `SettingsGame/BigX.png`,count: 3,
					    warrior:true,selected: false,Health: 750, Defense: 8, Attack: `9-30`},

					   {Character: `SettingsGame/Characters/FrostZombie.jpg`,NotCharacter: `SettingsGame/BigX.png`,count: 4,
					    warrior:false,selected: false, active: false,Health: 1021, Defense: 5, Attack: `5-80`},

					   {Character: `SettingsGame/Characters/MummyWarrior.jpg`,NotCharacter: `SettingsGame/BigX.png`,count: 4,
					    warrior:true,selected: false,Health: 1185, Defense: 6, Attack: `12-37`},

					   {Character: `SettingsGame/Characters/Naga.jpg`,NotCharacter: `SettingsGame/BigX.png`,count: 4,
					    warrior:false,selected: false,Health:2691, Defense: 18, Attack: `25-72`},

					   {Character: `SettingsGame/Characters/SkeletonWarrior.jpg`,NotCharacter: `SettingsGame/BigX.png`,count: 4,
					    warrior:true,selected: false,Health: 748, Defense: 7, Attack: `6-14`},

					   {Character: `SettingsGame/Characters/Phoenix.jpg`,NotCharacter: `SettingsGame/BigX.png`,count: 4,
					    warrior:false,selected: false,Health: 4326, Defense: 100, Attack: `51-98`},]


class Settings extends React.Component{
	constructor(props){
		super(props);
		this.state={
			Deg: 120,
		}
		this.PassiveBgIntro=this.PassiveBgIntro.bind(this);
	}

	PassiveBgIntro(){
		let a=this.state.Deg
		a+=1;
		this.setState({
			Deg: a,
		})
	}


	render(){
		return(
			React.createElement('div',{style: { backgroundImage: `linear-gradient(${this.state.Deg}deg,lightblue ,blue 30% ,black 75%)`}, onMouseMove: this.PassiveBgIntro,
				onMouseOver: this.PassiveBgIntro,onMouseOut:this.PassiveBgIntro,onWheel:this.PassiveBgIntro},
				React.createElement('h1',{id: `IntroHeader`},`Settings Game`),
				React.createElement('p',{className: `IntroParagraph`},`This Game is about fighting between two characters or doing a dungeon!
					Each character has their own default characteristics. You can specify these characteristics and this
					will influence the result of the battle as well!`),
				React.createElement('p',{className: `IntroParagraph`},`-You can specify the following characteristics:
				    Attack, defense, health and size!`),
				React.createElement('p',{className:`IntroParagraph`},`Other specifications are also options like skills and weapons!`),
				React.createElement('p',{className:`IntroParagraph`},`-In the page we can change the default skills or give them skills like MasterFighter,
				MasterAcrobatics etc. The MasterFighter gives average chance to critical and dodge, and the MasterAcrobatics gives very hight
				chance to dodge! `),
				React.createElement('p',{className:`IntroParagraph`},`The last about what to know is weapons. You can choose weapons to influence the
					battle between the fighters!`),
				//Setting Accesories!
				React.createElement('p',{className:`IntroParagraph`},`Warriors can only be selected in the arena mod, and the non-warrior
					characters only in the survival mod!`),
				React.createElement('p',{id:`NonWarriorTextParagraph`},`Non-Warrior`),
				React.createElement('p',{id: `WarriorTextParagraph`},`Warrior`),
				React.createElement('br',{},null),
				React.createElement('span',{id: `NonWarriorDrawing`},null),
				React.createElement('span',{id: `WarriorDrawing`},null),
				React.createElement('ul',{},
					React.createElement('li',{id:`ArrowLeft`},null),
					React.createElement('li',{className: `CharacterListContainer`},
						React.createElement('span',{className:`CharacterElements`},null)),
					React.createElement('li',{className:`CharacterListContainer`},
						React.createElement('span',{className:`CharacterElements`},null)),
					React.createElement('li',{className:`CharacterListContainer`},
						React.createElement('span',{className:`CharacterElements`},null)),
					React.createElement('li',{className:`CharacterListContainer`},
						React.createElement('span',{className:`CharacterElements`},null)),
					React.createElement('li',{className:`CharacterListContainer`},
						React.createElement('span',{className:`CharacterElements`},null)),
					React.createElement('li',{id:`ArrowRight`},null)
					),
				React.createElement('div',{id: `CharacterInformationDiv1`},
					React.createElement('div',{id: `CharacterImage1`},null),
					React.createElement('div',{className: `InformationDiv`},`Information`),
					React.createElement('div',{className: `DamageIcon`},null),
					React.createElement('div',{id: `DivInfoDamage1`},`Damage`),
					React.createElement('div',{className: `DefenseIcon`},null),
					React.createElement('div',{id: `DivInfoDefense1`},`Defense`),
					React.createElement('div',{className: `HealthIcon`},null),
					React.createElement('div',{id: `DivInfoHealth1`},`Health`)),
				React.createElement('div',{id: `CharacterInformationDiv2`},
					React.createElement('div',{id: `CharacterImage2`},null),
					React.createElement('div',{className: `InformationDiv`},`Information`),
					React.createElement('div',{className: `DamageIcon`},null),
					React.createElement('div',{id: `DivInfoDamage2`},`Damage`),
					React.createElement('div',{className: `DefenseIcon`},null),
					React.createElement('div',{id: `DivInfoDefense2`},`Defense`),
					React.createElement('div',{className: `HealthIcon`},null),
					React.createElement('div',{id: `DivInfoHealth2`},`Health`)
					),

				React.createElement('h1',{id: `GameModeHeader`},`Game Modes`),
				React.createElement('br',{},null),
				React.createElement('span',{id:`ArenaMod`},`Arena Mod`),
				React.createElement('span',{id:`SurvivalMod`},`Survival Mod`),
				React.createElement('br',{},null),
				React.createElement('br',{},null),
				//Ide jon majd a Fegyverek opcio illetve a stats & Skills opcio!
				//Csinaljuk ezt az egeszet overflow none-al!
				React.createElement('div',{id: `WeaponsContainer`},
					React.createElement('div',{id: `WeaponsLogo`},null),
					React.createElement('div',{id: `WeaponsText`},`Weapons`),
					React.createElement('br',{},null),
					React.createElement('div',{id: `Weapons1Container`},
						React.createElement('h1',{className: `ContainerInText`},`Fighter 1`),
						React.createElement('span',{className: `tools`, style: { backgroundImage: `url('SettingsGame/Weapons/Cleaver.png')` }},`Cleaver`),
						React.createElement('span',{className: `tools`, style: { backgroundImage: `url('SettingsGame/Weapons/GodSword.png')` }},`God Sword`),
						React.createElement('span',{className: `tools`, style: { backgroundImage: `url('SettingsGame/Weapons/GoldenSword.png')` }},`Golden Sword`),
						React.createElement('span',{className: `tools`, style: { backgroundImage: `url('SettingsGame/Weapons/Hammer.png')` }},`Hammer`),
						React.createElement('span',{className: `tools`, style: { backgroundImage: `url('SettingsGame/Weapons/HandAxe.png')` }},`Hand Axe`),
						React.createElement('span',{className: `tools`, style: { backgroundImage: `url('SettingsGame/Weapons/HeavyAxe.png')` }},`Heavy Axe`),
						React.createElement('span',{className: `tools`, style: { backgroundImage: `url('SettingsGame/Weapons/IronSword.png')` }},`Iron Sword`),
						React.createElement('span',{className: `tools`, style: { backgroundImage: `url('SettingsGame/Weapons/Knife.png')` }},`Knife`),
						React.createElement('span',{className: `tools`, style: { backgroundImage: `url('SettingsGame/Weapons/OldHammer.png')` }},`Old Hammer`),
						React.createElement('span',{className: `tools`, style: { backgroundImage: `url('SettingsGame/Weapons/PickAxeDark.png')` }},`Pickaxe Dark`),
						React.createElement('span',{className: `tools`, style: { backgroundImage: `url('SettingsGame/Weapons/PocketKnife.png')` }},`Pocket Knife`),
						React.createElement('span',{className: `tools`, style: { backgroundImage: `url('SettingsGame/Weapons/Scythe.png')` }},`Scythe`),
						React.createElement('span',{className: `tools`, style: { backgroundImage: `url('SettingsGame/Weapons/ShadowSword.png')` }},`Shadow Sword`),
						React.createElement('span',{className: `tools`, style: { backgroundImage: `url('SettingsGame/Weapons/SmallAxe.png')` }},`Small Axe`),
						React.createElement('span',{className: `tools`, style: { backgroundImage: `url('SettingsGame/Weapons/StrongKnife.png')` }},`Strong Knife`),
						React.createElement('span',{className: `tools`, style: { backgroundImage: `url('SettingsGame/Weapons/StrongScythe.png')` }},`Strong Scythe`),
						React.createElement('span',{className: `tools`, style: { backgroundImage: `url('SettingsGame/Weapons/Sword.png')` }},`Sword`),
						React.createElement('span',{className: `tools`, style: { backgroundImage: `url('SettingsGame/Weapons/TacticalAxe.png')` }},`Tactical Axe`),
						React.createElement('span',{className: `tools`, style: { backgroundImage: `url('SettingsGame/Weapons/WoodenHammer.png')` }},`Wooden Hammer`),
						React.createElement('span',{className: `tools`, style: { backgroundImage: `url('SettingsGame/Weapons/ZorroSword.png')` }},`Zorro Sword`),),

					React.createElement('div',{id: `Weapons2Container`},
						React.createElement('h1',{className: `ContainerInText`},`Fighter 2`),
						React.createElement('span',{className: `tools`, style: { backgroundImage: `url('SettingsGame/Weapons/Cleaver.png')` }},`Cleaver`),
						React.createElement('span',{className: `tools`, style: { backgroundImage: `url('SettingsGame/Weapons/GodSword.png')` }},`God Sword`),
						React.createElement('span',{className: `tools`, style: { backgroundImage: `url('SettingsGame/Weapons/GoldenSword.png')` }},`Golden Sword`),
						React.createElement('span',{className: `tools`, style: { backgroundImage: `url('SettingsGame/Weapons/Hammer.png')` }},`Hammer`),
						React.createElement('span',{className: `tools`, style: { backgroundImage: `url('SettingsGame/Weapons/HandAxe.png')` }},`Hand Axe`),
						React.createElement('span',{className: `tools`, style: { backgroundImage: `url('SettingsGame/Weapons/HeavyAxe.png')` }},`Heavy Axe`),
						React.createElement('span',{className: `tools`, style: { backgroundImage: `url('SettingsGame/Weapons/IronSword.png')` }},`Iron Sword`),
						React.createElement('span',{className: `tools`, style: { backgroundImage: `url('SettingsGame/Weapons/Knife.png')` }},`Knife`),
						React.createElement('span',{className: `tools`, style: { backgroundImage: `url('SettingsGame/Weapons/OldHammer.png')` }},`Old Hammer`),
						React.createElement('span',{className: `tools`, style: { backgroundImage: `url('SettingsGame/Weapons/PickAxeDark.png')` }},`Pickaxe Dark`),
						React.createElement('span',{className: `tools`, style: { backgroundImage: `url('SettingsGame/Weapons/PocketKnife.png')` }},`Pocket Knife`),
						React.createElement('span',{className: `tools`, style: { backgroundImage: `url('SettingsGame/Weapons/Scythe.png')` }},`Scythe`),
						React.createElement('span',{className: `tools`, style: { backgroundImage: `url('SettingsGame/Weapons/ShadowSword.png')` }},`Shadow Sword`),
						React.createElement('span',{className: `tools`, style: { backgroundImage: `url('SettingsGame/Weapons/SmallAxe.png')` }},`Small Axe`),
						React.createElement('span',{className: `tools`, style: { backgroundImage: `url('SettingsGame/Weapons/StrongKnife.png')` }},`Strong Knife`),
						React.createElement('span',{className: `tools`, style: { backgroundImage: `url('SettingsGame/Weapons/StrongScythe.png')` }},`Strong Scythe`),
						React.createElement('span',{className: `tools`, style: { backgroundImage: `url('SettingsGame/Weapons/Sword.png')` }},`Sword`),
						React.createElement('span',{className: `tools`, style: { backgroundImage: `url('SettingsGame/Weapons/TacticalAxe.png')` }},`Tactical Axe`),
						React.createElement('span',{className: `tools`, style: { backgroundImage: `url('SettingsGame/Weapons/WoodenHammer.png')` }},`Wooden Hammer`),
						React.createElement('span',{className: `tools`, style: { backgroundImage: `url('SettingsGame/Weapons/ZorroSword.png')` }},`Zorro Sword`),)),
				//Background Audios below!
				React.createElement('audio',{preload: `auto`, controls: `none`, style:{ display: `none`}, id: `CharacterSelectedAudio`},
					React.createElement('source',{src: `SettingsGame/Audio/GlassJarPlace.mp3`, type:`audio/mpeg`},null)),
				React.createElement('audio',{preload: `auto`, controls: `none`, style:{ display: `none`}, id: `CharacterNonSelectedAudio`},
					React.createElement('source',{src: `SettingsGame/Audio/GlassJarRemove.mp3`, type:`audio/mpeg`},null)),
				React.createElement('audio',{preload: `auto`, controls: `none`, style:{ display: `none`}, id: `CharacterArrowsAudio`},
					React.createElement('source',{src: `SettingsGame/Audio/WoodImpact.mp3`, type:`audio/mpeg`},null)),
				React.createElement('audio',{preload: `auto`, controls: `none`, style:{ display: `none`}, id: `ModSelected`},
					React.createElement('source',{src: `SettingsGame/Audio/MetalImpactV1.mp3`, type:`audio/mpeg`},null)),
				React.createElement('audio',{preload: `auto`, controls: `none`, style:{ display: `none`}, id: `ModNotSelected`},
					React.createElement('source',{src: `SettingsGame/Audio/MetalImpactV2.mp3`, type:`audio/mpeg`},null)),
				React.createElement('audio',{preload: `auto`, controls: `none`, style:{ display: `none`}, id: `WeaponsSkillsSelected`},
					React.createElement('source',{src: `SettingsGame/Audio/WeaponSkillSelection.mp3`, type:`audio/mpeg`},null)),
				React.createElement('audio',{preload: `auto`, controls: `none`, style:{ display: `none`}, id: `WeaponsSelected`},
					React.createElement('source',{src: `SettingsGame/Audio/WeaponsSelect.mp3`, type:`audio/mpeg`},null)),
				React.createElement('audio',{preload: `auto`, controls: `none`, style:{ display: `none`}, id: `WeaponsNotSelected`},
					React.createElement('source',{src: `SettingsGame/Audio/WeaponsSelectNot.mp3`, type:`audio/mpeg`},null)),
				//Skills and stats!
				React.createElement('div',{id: `StatsSkillsContainer`},
					React.createElement('div',{id: `StatsSkillsLogo`},null),
					React.createElement('div',{id: `StatsSkillsText`},`Stats & Skills`),
					React.createElement('br',{},null),
					//Innen lefele!
					React.createElement('div',{id: `StatsSkillsContainer1`},
						React.createElement('div',{id: `StatsSelectedImage1`},null),
						React.createElement('span',{className: `StatsSkillsDefenseLogo`},null),
						React.createElement('span',{className:`StatsSkillsDefense`},`Def`),
						React.createElement('span',{className:`StatsSkillsAttackLogo`},null),
						React.createElement('span',{className:`StatsSkillsAttack`},`Atk`),
						React.createElement('span',{className: `StatsSkillsHealthLogo`},null),
						React.createElement('span',{className:`StatsSkillsHealth`},`Hp`),
						React.createElement('span',{id:`StatsSkillsDefenseValue1`},`D`),
						React.createElement('span',{id:`StatsSkillsAttackValue1`},`A`),
						React.createElement('span',{id:`StatsSkillsHealthValue1`},`H`),
						React.createElement('input',{id:`StatsSkillsDefenseInput1`, type:`number`,name: `DefNum1`, min:`1`, max:`99`},null),
						React.createElement('input',{id:`StatsSkillsAttackInput1`, type:`number`,name: `AttackNum1`, min:`1`, max:`200`},null),
						React.createElement('input',{id:`StatsSkillsHealthInput1`,type:`number`,name: `HealthNum1`, min:`1`, max:`9999`},null),
						React.createElement('span',{id: `StatsSkillsWeapon1`},`Weapon`),
						React.createElement('div',{id:`StatsSkillsWeaponPicture1`},null),
						React.createElement('span',{id:`StatsSkillsDamageValue1`},`damage`),
						React.createElement('span',{className: `StatsSkillsSkillsText`},'Skills'),
						React.createElement('span',{className:`StatsSkillsGymnastics`},`Gymnastics`),
						React.createElement('span',{className:`StatsSkillsAcrobatics`},`Acrobatics`),
						React.createElement('span',{className:`StatsSkillsWeaponMaster`},`WeaponMaster`),
						React.createElement('span',{className:`StatsSkillsSwiftness`},`Swiftness`),
						React.createElement('span',{className: `StatsSkillsLuck`},`Luck`),
						React.createElement('span',{className: `StatsSkillsPower`},`Power`),
						React.createElement('span',{className: `StatsSkillsStoneSkin`},`Stone Skin`),
						),

					React.createElement('div',{id: `StatsSkillsContainer2`},
						React.createElement('div',{id:`StatsSelectedImage2`},null),
						React.createElement('span',{className: `StatsSkillsDefenseLogo`},null),
						React.createElement('span',{className:`StatsSkillsDefense`},`Def`),
						React.createElement('span',{className:`StatsSkillsAttackLogo`},null),
						React.createElement('span',{className:`StatsSkillsAttack`},`Atk`),
						React.createElement('span',{className: `StatsSkillsHealthLogo`},null),
						React.createElement('span',{className:`StatsSkillsHealth`},`Hp`),
						React.createElement('span',{id:`StatsSkillsDefenseValue2`},`D`),
						React.createElement('span',{id:`StatsSkillsAttackValue2`},`A`),
						React.createElement('span',{id:`StatsSkillsHealthValue2`},`H`),
						React.createElement('input',{id:`StatsSkillsDefenseInput2`, type:`number`,name: `DefNum2`, min:`1`, max:`99`},null),
						React.createElement('input',{id:`StatsSkillsAttackInput2`, type:`number`,name: `AttackNum2`, min:`1`, max:`200`},null),
						React.createElement('input',{id:`StatsSkillsHealthInput2`,type:`number`,name: `HealthNum2`, min:`1`, max:`9999`},null),
						React.createElement('span',{id: `StatsSkillsWeapon2`},`Weapon`),
						React.createElement('div',{id:`StatsSkillsWeaponPicture2`},null),
						React.createElement('span',{id:`StatsSkillsDamageValue2`},`damage`),
						React.createElement('span',{className: `StatsSkillsSkillsText`},'Skills'),
						React.createElement('span',{className:`StatsSkillsGymnastics`},`Gymnastics`),
						React.createElement('span',{className:`StatsSkillsAcrobatics`},`Acrobatics`),
						React.createElement('span',{className:`StatsSkillsWeaponMaster`},`WeaponMaster`),
						React.createElement('span',{className:`StatsSkillsSwiftness`},`Swiftness`),
						React.createElement('span',{className: `StatsSkillsLuck`},`Luck`),
						React.createElement('span',{className: `StatsSkillsPower`},`Power`),
						React.createElement('span',{className: `StatsSkillsStoneSkin`},`Stone Skin`),

						)),
				React.createElement('span',{id: `SkillsInformationLogo`},null),
				React.createElement('div',{id:`SkillsInformation`},
					React.createElement('p',{},
						React.createElement('mark',{},`You can select at most 3 Skills!`),
						React.createElement('br',{},null),
						React.createElement('br',{},null),
						React.createElement('mark',{},`-Gymnastics:`),
						` This skill gives 20% Health, 50% Attack and 20% Speed because your fit!`,
						React.createElement('br',{},null),
						React.createElement('br',{},null),
						React.createElement('mark',{},`-Acrobatics:`),
						` This skill gives 30% Health, 30% Attack,50% Speed and 35% Evasion because you have very good agility!
						This is a more advanced level of Gymnastics!(Gymnastics will be selected automaticaly)`,
						React.createElement('br',{},null),
						React.createElement('br',{},null),
						React.createElement('mark',{},`-Weapon Master:`),
						` This skill gives a 15% Defense, 25% Attack 25% Speed, 80% chance to Parry and 30% chance to land a
						2x critical damage!Your a Weapon Master, you sure know how to use them!(This skill only works for
						warriors, and only works if u give a weapon to the selected character. Othervise this skill has no effect!)`,
						React.createElement('br',{},null),
						React.createElement('br',{},null),
						React.createElement('mark',{},`-Swiftness:`),
						` This skill gives 80% Speed, 50% Evasion, 75% Health and 15% chance to land a 2x critical damage,
						 without a weapon! With weapon this skill gives 50% Speed, 40% Evasion, 75% Health,20% Defense and
						 a 15% chance to land a 2x critical damage!This skill really makes you vital!`,
						React.createElement('br',{},null),
						React.createElement('br',{},null),
						React.createElement('mark',{},`-Luck:`),
						` The power of Karma is on your side!The luck helps you and sabotages the enemy!
						  Luck changes in every turn between average, strong or very Powerfull.It has a 75% chance to be average,
						  17% chance to be strong and 8% chance to be Very Powerfull per turn!`,
						  React.createElement('span',{ style: {display: `none`}, id: `LuckHiddenText`},`-If it's average you have a 90% chance to deal a 2x critical damage! 80% chance to evade an attack!
						  The opponent has at most 10% chance to land a critical damage and at most 20% chance to evade/parry any of your attack!
						  -If it's Strong you have 120% critical chance, which means 100% chance to land a critical and a 20% chance to
						  deal a 5x critical damage.You have a 90% chance to evade an attack. Also you have an extra 50% chance to heal 15% hp back because
						  wonders can happen!
						  The opponent has no chances of dealing a critical, and no chances of evading an attack. If the opponent
						  tries to attack you, it has 30% chance that something bad is going to happen with him. It may fall,or the
						  ground explode below it. Has 80% chance to fall and 20% chance for the ground explosion. In both cases it
						  will skip his turn. In the first case he will receive damage equal to it's weapon if he has. Othervise he will just skip his turn.
						  In the second case when the ground explodes he will receive a damage equal to 20% of it's MAX hp!
						  -If it's Very Powerfull then you have a 80% chance to hit the target with a 20x critical damage or 20% chance
						  to instantly kill the enemy, because Chuck Norris appears and helps you! You don't really need evasion, because your opponwnt
						  will not have a chance to attack!
						  The opponent has no chances of attacking you something bad is going to happen for sure! Has a 50%
						  chance of ground explosion, 35% chance of lightning strike that deals damage equal to 50% of its Max HP or
						  a 15% chance that he will have some serious trouble, like heart attack,stroke or a meteor will crash on him!
						  (If you select this skill you cannot select any other skills!If both of the characters have chosen this skill then everything will
						  be balanced, just like nothing would happen)`),
						  React.createElement('a',{id: `LuckTextMore`},`More...`),
						React.createElement('br',{},null),
						React.createElement('br',{},null),
						React.createElement('mark',{},`-Power:`),
						` This skill gives you massive powers! Increases Health and attack by 110%!(You fill the Power)`,
						React.createElement('br',{},null),
						React.createElement('br',{},null),
						React.createElement('mark',{},`-Stone skin:`),
						` This skill gives you massive defense! Increases your Defense by 250% and reduces damage received by 30% and
						reduces critical damage to 1.2x at all cases!` 

						)),

				React.createElement('div',{id: `EmptySpace`},null),
				React.createElement('div',{id:`Arena`},`v`),
				)
			




			  );
	}
}


ReactDOM.render(React.createElement(Settings,{},null),
				document.getElementById('MainDiv')
	);


//Helper functions
//I. $globalCharacters
const WarriorCharacter=(Character)=>{
	//Ide!
	let BG=Character.style.backgroundImage;
	let C1=String(BG).slice(14).slice(0,-2);
	if($globalArenaMod){
		for(let i=0;i<$globalCharacters.length;i++)
		{
			if((!$globalCharacters[i].warrior) && ($globalCharacters[i].Character===C1)){
				Character.style.backgroundImage=`url('${$globalCharacters[i].NotCharacter}'), url('${$globalCharacters[i].Character}')`;
			}
		}	

	}
	else{
		if($globalSurvivalMod){
			for(let i=0;i<$globalCharacters.length;i++)
				{
				if(($globalCharacters[i].warrior) && ($globalCharacters[i].Character===C1)){
					Character.style.backgroundImage=`url('${$globalCharacters[i].NotCharacter}'), url('${$globalCharacters[i].Character}')`;
				}
			}	
		}
	}
	for(let i=0;i<$globalCharacters.length;i++){
		if($globalCharacters[i].Character===C1){
			if($globalCharacters[i].warrior){
				Character.parentElement.style.border=`0.3vw ridge green`;
			}
			else{
				Character.parentElement.style.border=`0.3vw ridge red`;
			}
			//SelectedPart
			if($globalCharacters[i].selected){
				Character.style.border=`0.3vw solid yellow`;
				Character.style.opacity=`0.5`;
			}
			else{
				Character.style.border=`none`;
				Character.style.opacity=`1`;
			}
		}
	
	}
}


//Nem a $globalselected szerint fogom meghatarozni!
const PutInformationIn=(Information)=>{
	let WarriorOrNot=Information.parentElement.style.border.slice(12);
	let disp1=document.getElementById('CharacterInformationDiv1').style.display;
	let disp2=document.getElementById('CharacterInformationDiv2').style.display;
	if(WarriorOrNot===`green`){
		const image=Information.style.backgroundImage.slice(14).slice(0,-2);
		for(let i=0;i<$globalCharacters.length;i++){
			if(image===$globalCharacters[i].Character){
				if((disp1.length===0) || (disp1===`none`)){
					$('#CharacterImage1').css({
						backgroundImage: `url(${image})`,
						backgroundSize: `100% 100%`,
					})
					$('#DivInfoDamage1').html($globalCharacters[i].Attack);
					$('#DivInfoDefense1').html($globalCharacters[i].Defense);
					$('#DivInfoHealth1').html($globalCharacters[i].Health);
					$('#CharacterInformationDiv1').fadeIn(1000).css({
						display: `inline-grid`,
					})
					//Berakni a StatsSkills helyre is az infokat!
					$('#StatsSelectedImage1').css({
						backgroundImage: `url(${image})`,
					})
					$('#StatsSkillsDefenseValue1').html(`${$globalCharacters[i].Defense}`);
					$('#StatsSkillsAttackValue1').html(`${$globalCharacters[i].Attack}`);
					$('#StatsSkillsHealthValue1').html(`${$globalCharacters[i].Health}`);
				}
				else{
					if((disp2.length===0) || (disp2===`none`)){
					$('#CharacterImage2').css({
						backgroundImage: `url(${image})`,
						backgroundSize: `100% 100%`,
					})
					$('#DivInfoDamage2').html($globalCharacters[i].Attack);
					$('#DivInfoDefense2').html($globalCharacters[i].Defense);
					$('#DivInfoHealth2').html($globalCharacters[i].Health);
					$('#CharacterInformationDiv2').fadeIn(1000).css({
						display: `inline-grid`,
					})
					$('#StatsSelectedImage2').css({
						backgroundImage: `url(${image})`,
					})
					$('#StatsSkillsDefenseValue2').html(`${$globalCharacters[i].Defense}`);
					$('#StatsSkillsAttackValue2').html(`${$globalCharacters[i].Attack}`);
					$('#StatsSkillsHealthValue2').html(`${$globalCharacters[i].Health}`);
					}
				}
				break;
			}
		}
		
	}
	//Survival Mod below!
	else{
		for(let i=0;i<$globalCharacters.length;i++){
			let image=String(Information.style.backgroundImage).slice(14).slice(0,-2);
			if($globalCharacters[i].Character===image){
				$('#CharacterImage2').css({
					backgroundImage: `url(${image})`,
					backgroundSize: `100% 100%`,
				})
				$('#DivInfoDamage2').html($globalCharacters[i].Attack);
				$('#DivInfoDefense2').html($globalCharacters[i].Defense);
				$('#DivInfoHealth2').html($globalCharacters[i].Health);
				$('#CharacterInformationDiv2').fadeIn(1000).css({
						display: `inline-grid`,
				})
					$('#StatsSelectedImage2').css({
						backgroundImage: `url(${image})`,
					})
					$('#StatsSkillsDefenseValue2').html(`${$globalCharacters[i].Defense}`);
					$('#StatsSkillsAttackValue2').html(`${$globalCharacters[i].Attack}`);
					$('#StatsSkillsHealthValue2').html(`${$globalCharacters[i].Health}`);
				break;
			}
		}

	}
}


const PutInformationOut=(Information)=>{
	//Kell a karakterInfoDiv es a karakterImage is!
	let disp1=document.getElementById('CharacterInformationDiv1').style.display;
	let disp2=document.getElementById('CharacterInformationDiv2').style.display;
	const image1=String(document.getElementById('CharacterImage1').style.backgroundImage).slice(5).slice(0,-2);
	const image2=String(document.getElementById('CharacterImage2').style.backgroundImage).slice(5).slice(0,-2);
	let info = Information.style.backgroundImage.slice(14).slice(0,-2);
	for(let i=0;i<$globalCharacters.length;i++){
		if($globalCharacters[i].Character===info){		
			if(((disp1.length===0) || (disp1===`inline-grid`)) && (image1===$globalCharacters[i].Character)){
				$('#CharacterInformationDiv1').css({
						display: `none`,
					})
					$('#StatsSelectedImage1').css({
						backgroundImage: ``,
					})
					$('#StatsSkillsDefenseValue1').html(`D`);
					$('#StatsSkillsAttackValue1').html(`A`);
					$('#StatsSkillsHealthValue1').html(`H`);
					//the globalskills as well the others as well (atk,hp)  !!!!!!!!!!!!!!!!
					//Arena modnal is visszaallitani majd oket!!!!!!!!!!!!!!!!
					$globalDefenseInput1=true;
					$('#StatsSkillsDefenseValue1').css({
						color:`black`,
						textShadow: `0vw 0.2vw 0.3vw white, 0.2vw 0vw 0.3vw white, -0.2vw 0vw 0.3vw white, 0vw -0.2vw 0.3vw white`,
					})

					$globalAttackInput1=true;
					$('#StatsSkillsAttackValue1').css({
							color:`black`,
							textShadow: `0vw 0.2vw 0.3vw white, 0.2vw 0vw 0.3vw white, -0.2vw 0vw 0.3vw white, 0vw -0.2vw 0.3vw white`,
					})

					$globalHealthInput1=true;
					$('#StatsSkillsHealthValue1').css({
							color:`black`,
							textShadow: `0vw 0.2vw 0.3vw white, 0.2vw 0vw 0.3vw white, -0.2vw 0vw 0.3vw white, 0vw -0.2vw 0.3vw white`,
					})
			}
			else{
				if(((disp2.length===0) || (disp2===`inline-grid`)) && (image2===$globalCharacters[i].Character)){
					$('#CharacterInformationDiv2').css({
						display: `none`,
					})
					$('#StatsSelectedImage2').css({
						backgroundImage: ``,
					})
					$('#StatsSkillsDefenseValue2').html(`D`);
					$('#StatsSkillsAttackValue2').html(`A`);
					$('#StatsSkillsHealthValue2').html(`H`);

					$globalDefenseInput2=true;
					$('#StatsSkillsDefenseValue2').css({
						color:`black`,
						textShadow: `0vw 0.2vw 0.3vw white, 0.2vw 0vw 0.3vw white, -0.2vw 0vw 0.3vw white, 0vw -0.2vw 0.3vw white`,
					})

					$globalAttackInput2=true;
					$('#StatsSkillsAttackValue2').css({
							color:`black`,
							textShadow: `0vw 0.2vw 0.3vw white, 0.2vw 0vw 0.3vw white, -0.2vw 0vw 0.3vw white, 0vw -0.2vw 0.3vw white`,
					})

					$globalHealthInput2=true;
					$('#StatsSkillsHealthValue2').css({
							color:`black`,
							textShadow: `0vw 0.2vw 0.3vw white, 0.2vw 0vw 0.3vw white, -0.2vw 0vw 0.3vw white, 0vw -0.2vw 0.3vw white`,
					})
				}

			}


		}
	}

}

const PutStatsBack=(event,type,num)=>{
	let blokk=event.split('/');
	let value=blokk[blokk.length-1].slice(0,-2);
	if(num===1){
	switch(type){
		case `ATK`:
			for(let i=0;i<$globalCharacters.length;i++){
				let blokk2=$globalCharacters[i].Character.split('/');
				let CharacterValue=blokk2[blokk2.length-1];
				if(CharacterValue===value){
					$('#StatsSkillsAttackValue1').html($globalCharacters[i].Attack);
						$('#StatsSkillsAttackValue1').css({
								color:`black`,
								textShadow: `0vw 0.2vw 0.3vw white, 0.2vw 0vw 0.3vw white, -0.2vw 0vw 0.3vw white, 0vw -0.2vw 0.3vw white`,
						})
					break;
				}
			}
			break;
		case `DEF`:
			for(let i=0;i<$globalCharacters.length;i++){
				let blokk2=$globalCharacters[i].Character.split('/');
				let CharacterValue=blokk2[blokk2.length-1];
				if(CharacterValue===value){
					$('#StatsSkillsDefenseValue1').html($globalCharacters[i].Defense);
						$('#StatsSkillsDefenseValue1').css({
								color:`black`,
								textShadow: `0vw 0.2vw 0.3vw white, 0.2vw 0vw 0.3vw white, -0.2vw 0vw 0.3vw white, 0vw -0.2vw 0.3vw white`,
						})
					break;
				}
			}
			
			break;
		case `HP`:
			for(let i=0;i<$globalCharacters.length;i++){
				let blokk2=$globalCharacters[i].Character.split('/');
				let CharacterValue=blokk2[blokk2.length-1];
				if(CharacterValue===value){
					$('#StatsSkillsHealthValue1').html($globalCharacters[i].Health);
						$('#StatsSkillsHealthValue1').css({
								color:`black`,
								textShadow: `0vw 0.2vw 0.3vw white, 0.2vw 0vw 0.3vw white, -0.2vw 0vw 0.3vw white, 0vw -0.2vw 0.3vw white`,
						})
					break;
				}
			}
			break;
	}
	}
	else{
		switch(type){
		case `ATK`:
			for(let i=0;i<$globalCharacters.length;i++){
				let blokk2=$globalCharacters[i].Character.split('/');
				let CharacterValue=blokk2[blokk2.length-1];
				if(CharacterValue===value){
					$('#StatsSkillsAttackValue2').html($globalCharacters[i].Attack);
						$('#StatsSkillsAttackValue2').css({
								color:`black`,
								textShadow: `0vw 0.2vw 0.3vw white, 0.2vw 0vw 0.3vw white, -0.2vw 0vw 0.3vw white, 0vw -0.2vw 0.3vw white`,
						})
					break;
				}
			}
			break;
		case `DEF`:
			for(let i=0;i<$globalCharacters.length;i++){
				let blokk2=$globalCharacters[i].Character.split('/');
				let CharacterValue=blokk2[blokk2.length-1];
				if(CharacterValue===value){
					$('#StatsSkillsDefenseValue2').html($globalCharacters[i].Defense);
						$('#StatsSkillsDefenseValue2').css({
								color:`black`,
								textShadow: `0vw 0.2vw 0.3vw white, 0.2vw 0vw 0.3vw white, -0.2vw 0vw 0.3vw white, 0vw -0.2vw 0.3vw white`,
						})
					break;
				}
			}
			
			break;
		case `HP`:
			for(let i=0;i<$globalCharacters.length;i++){
				let blokk2=$globalCharacters[i].Character.split('/');
				let CharacterValue=blokk2[blokk2.length-1];
				if(CharacterValue===value){
					$('#StatsSkillsHealthValue2').html($globalCharacters[i].Health);
						$('#StatsSkillsHealthValue2').css({
								color:`black`,
								textShadow: `0vw 0.2vw 0.3vw white, 0.2vw 0vw 0.3vw white, -0.2vw 0vw 0.3vw white, 0vw -0.2vw 0.3vw white`,
						})
					break;
				}
			}
			break;
	}
	}


}





//Jquey part for help!
$(document).ready(()=>{

	//DOM part!
	//Load out list
	let characters=document.getElementsByClassName('CharacterElements');
	for(let i=0;i<characters.length;i++){
		characters[i].style.backgroundImage=`url(), url(${$globalCharacters[i].Character})`;
		WarriorCharacter(characters[i]);
	}
	//Nezzuk mindig melyik true a 4bol az elso az 5. a 10. stb!
	$globalCharacters[0].active=true;


	//Jquery part!
	$('#ArrowLeft').css({
				opacity: `0.5`,
			})
	$('#ArrowLeft').on('click',()=>{
		if(!$globalCharacters[0].active){
			//backwards
			if($globalCharacters[15].active){
				document.getElementById('CharacterArrowsAudio').play();
				$('.CharacterElements').fadeToggle(500,()=>{
					for(let i=0;i<$globalCharacters.length;i++){
						if($globalCharacters[i].count===3){
							characters[i-10].style.backgroundImage=`url(), url(${$globalCharacters[i].Character})`;
							WarriorCharacter(characters[i-10]);
							
						}
					}
				})
				$('.CharacterElements').fadeToggle(500);
				$globalCharacters[15].active=false;
				$globalCharacters[10].active=true;
				$('#ArrowRight').css({
				opacity: `1`,
			})
			}
			else{
				if($globalCharacters[10].active){
					document.getElementById('CharacterArrowsAudio').play();
					$('.CharacterElements').fadeToggle(500,()=>{
						for(let i=0;i<$globalCharacters.length;i++){
							if($globalCharacters[i].count===2){
								characters[i-5].style.backgroundImage=`url(), url(${$globalCharacters[i].Character})`;
								WarriorCharacter(characters[i-5]);
							}
						}
					})
					$('.CharacterElements').fadeToggle(500);
					$globalCharacters[10].active=false;
					$globalCharacters[5].active=true;
				}
				else{
					if($globalCharacters[5].active){
						document.getElementById('CharacterArrowsAudio').play();
						$('.CharacterElements').fadeToggle(500,()=>{
							for(let i=0;i<characters.length;i++){
								characters[i].style.backgroundImage=`url(), url(${$globalCharacters[i].Character})`;
								WarriorCharacter(characters[i]);
							}
						})
						$('.CharacterElements').fadeToggle(500);
						$globalCharacters[5].active=false;
						$globalCharacters[0].active=true;
						$('#ArrowLeft').css({
							opacity: `0.5`,
						})
					}
				}
			}
		}

	})
	$('#ArrowRight').on('click',()=>{
		if($globalCharacters[0].active)
		{
			document.getElementById('CharacterArrowsAudio').play();
			$('.CharacterElements').fadeToggle(500,()=>{
				for(let i=0;i<$globalCharacters.length;i++){
					if($globalCharacters[i].count===2){
					characters[i-5].style.backgroundImage=`url(), url(${$globalCharacters[i].Character})`;
					WarriorCharacter(characters[i-5]);
				}
				}

			});
			$('.CharacterElements').fadeToggle(500);
			$globalCharacters[0].active=false;
			$globalCharacters[5].active=true;
				$('#ArrowLeft').css({
				opacity: `1`,
			})
		}
		else{
			if($globalCharacters[5].active){
				document.getElementById('CharacterArrowsAudio').play();
				$('.CharacterElements').fadeToggle(500,()=>{
				for(let i=0;i<$globalCharacters.length;i++){
					if($globalCharacters[i].count===3){
					characters[i-10].style.backgroundImage=`url(), url(${$globalCharacters[i].Character})`;
					WarriorCharacter(characters[i-10]);
				}
				}

			});
				$('.CharacterElements').fadeToggle(500);
				$globalCharacters[5].active=false;
			    $globalCharacters[10].active=true;

			}
			else{
				if($globalCharacters[10].active){
				document.getElementById('CharacterArrowsAudio').play();
				$('.CharacterElements').fadeToggle(500,()=>{
				for(let i=0;i<$globalCharacters.length;i++){
					if($globalCharacters[i].count===4){
					characters[i-15].style.backgroundImage=`url(), url(${$globalCharacters[i].Character})`;
					WarriorCharacter(characters[i-15]);
				}
				}

			});
				$('.CharacterElements').fadeToggle(500);
				$globalCharacters[10].active=false;
			    $globalCharacters[15].active=true;
			    $('#ArrowRight').css({
				opacity: `0.5`,
			})
				}
			}
		}
	})

//ArenaMod!!!

	//Specification!
	//Ha az arenaMod aktiv, akkor a zold kereteseket lehessen csak kivalasztani!
	//!!!!!!!!!Majd beirni az osszes kivalasztott kiszedeset!
	$('#ArenaMod').on('click',()=>{
		if($globalClicks==false){
		$('#SurvivalMod').css({
			display: `none`,
		})
		$('#ArenaMod').css({
			marginLeft: `40vw`,
		})
		//Megjelenitjuk a fegyvereket es a statseket!
		$('#WeaponsContainer').toggle('slide');
		$('#StatsSkillsContainer').toggle('slide');
		document.getElementById('ModSelected').play();
		$('#GameModeHeader').html('Select Two Warriors!');
		$globalArenaMod=true;
		//Megjelenitjuk az informaciot is
		$('#SkillsInformationLogo').css({display: `inline-block`});
		let characters=document.getElementsByClassName('CharacterElements');
			let C0=String(characters[0].style.backgroundImage.slice(14).slice(0,-2));
			let C1=String(characters[1].style.backgroundImage.slice(14).slice(0,-2));
			let C2=String(characters[2].style.backgroundImage.slice(14).slice(0,-2));
			let C3=String(characters[3].style.backgroundImage.slice(14).slice(0,-2));
			let C4=String(characters[4].style.backgroundImage.slice(14).slice(0,-2));
		 for(let i=0;i<$globalCharacters.length;i++)
		 {
			if(($globalCharacters[i].Character===C0) && (!$globalCharacters[i].warrior)){
				characters[0].style.backgroundImage=`url(${$globalCharacters[i].NotCharacter}), url(${$globalCharacters[i].Character})`
			}
			else{
				if(($globalCharacters[i].Character===C1) && (!$globalCharacters[i].warrior)){
				characters[1].style.backgroundImage=`url(${$globalCharacters[i].NotCharacter}), url(${$globalCharacters[i].Character})`
				}
				else{
					if(($globalCharacters[i].Character===C2) && (!$globalCharacters[i].warrior)){
					characters[2].style.backgroundImage=`url(${$globalCharacters[i].NotCharacter}), url(${$globalCharacters[i].Character})`
					}
					else{
						if(($globalCharacters[i].Character===C3) && (!$globalCharacters[i].warrior)){
						characters[3].style.backgroundImage=`url(${$globalCharacters[i].NotCharacter}), url(${$globalCharacters[i].Character})`
						}
						else{
							if(($globalCharacters[i].Character===C4) && (!$globalCharacters[i].warrior)){
							characters[4].style.backgroundImage=`url(${$globalCharacters[i].NotCharacter}), url(${$globalCharacters[i].Character})`
							}
						}
					}
				}
			}
		}
			$globalClicks=1;
		}
		//Put back everything!
		else{
			$('#SurvivalMod').css({
				display: `inline`,
			})
			$('#ArenaMod').css({
				marginLeft: `15vw`,
			})
			//Visszapakolom a fegyvereket es a statseket!
			$('#WeaponsContainer').toggle('slide');
			$('#StatsSkillsContainer').toggle('slide');
			document.getElementById('ModNotSelected').play();
			$('#GameModeHeader').html('Game Modes');
			$globalArenaMod=false;
			//Eltuntetjuk az Informaciot
			$('#SkillsInformationLogo').css({display: `none`});
			$('#SkillsInformation').hide();
			$('#LuckHiddenText').css({
				display: `none`,
			})
			$('#LuckTextMore').html('More...');
			let characters=document.getElementsByClassName('CharacterElements');
			//Kikell szedjem a selecteket is!(Ha esetleg valami bevan jelolve!)
			//Ami warrior azt nem kell jobban sliceolni!
			let C0=String(characters[0].style.backgroundImage.slice(14).slice(0,-2));
			let C1=String(characters[1].style.backgroundImage.slice(14).slice(0,-2));
			let C2=String(characters[2].style.backgroundImage.slice(14).slice(0,-2));
			let C3=String(characters[3].style.backgroundImage.slice(14).slice(0,-2));
			let C4=String(characters[4].style.backgroundImage.slice(14).slice(0,-2));
			for(let i=0;i<characters.length;i++){
				let bordercolor=characters[i].parentElement.style.border.slice(12);
				if(bordercolor===`red`){
					switch(i){
						case 0:
							C0=C0.slice(21);
							break;
						case 1:
							C1=C1.slice(21);
							break;
						case 2:
							C2=C2.slice(21);
							break;
						case 3:
							C3=C3.slice(21);
							break;
						case 4:
							C4=C4.slice(21);
							break;
					}
				}
			}
			//Elobb kiszedem a jelenlegiben a selectet, azutan pedig a tobbiben kulon kulon!
			//Csak warrior lehet selected mas nem lehet!
			for(let i=0;i<$globalCharacters.length;i++){
				if(($globalCharacters[i].selected) && ($globalCharacters[i].Character===C0))
					{
						$globalCharacters[i].selected=false;
						$globalSelected-=1;
						characters[0].style.opacity=`1`;
						characters[0].style.border=`none`;

					}
				if(($globalCharacters[i].Character===C0) && (!$globalCharacters[i].warrior)){
					characters[0].style.backgroundImage=`url(), url(${$globalCharacters[i].Character})`
				}
				else{
					if(($globalCharacters[i].selected) && ($globalCharacters[i].Character===C1))
						{
							$globalCharacters[i].selected=false;
							$globalSelected-=1;
							characters[1].style.opacity=`1`;
							characters[1].style.border=`none`;

						}
					if(($globalCharacters[i].Character===C1) && (!$globalCharacters[i].warrior)){
					characters[1].style.backgroundImage=`url(), url(${$globalCharacters[i].Character})`
					}
					else{
						if(($globalCharacters[i].selected) && ($globalCharacters[i].Character===C2))
							{
								$globalCharacters[i].selected=false;
								$globalSelected-=1;
								characters[2].style.opacity=`1`;
								characters[2].style.border=`none`;

							}
						if(($globalCharacters[i].Character===C2) && (!$globalCharacters[i].warrior)){
							characters[2].style.backgroundImage=`url(), url(${$globalCharacters[i].Character})`
						}
						else{
							if(($globalCharacters[i].selected) && ($globalCharacters[i].Character===C3))
								{
									$globalCharacters[i].selected=false;
									$globalSelected-=1;
									characters[3].style.opacity=`1`;
									characters[3].style.border=`none`;

								}
							if(($globalCharacters[i].Character===C3) && (!$globalCharacters[i].warrior)){
								characters[3].style.backgroundImage=`url(), url(${$globalCharacters[i].Character})`
							}
							else{
								if(($globalCharacters[i].selected) && ($globalCharacters[i].Character===C4))
									{
										$globalCharacters[i].selected=false;
										$globalSelected-=1;
										characters[4].style.opacity=`1`;
										characters[4].style.border=`none`;

									}
								if(($globalCharacters[i].Character===C4) && (!$globalCharacters[i].warrior)){
									characters[4].style.backgroundImage=`url(), url(${$globalCharacters[i].Character})`
								}
						}
					}
				}
			}
			}

			//A masodik for azokat a selecteket rakja vissza, amelyek kivul esnek a jelenlegi 5os listan!
			for(let i=0;i<$globalCharacters.length;i++){
				if($globalCharacters[i].selected){
					$globalCharacters[i].selected=false;
					$globalSelected-=1;
				}
			}

			//Kiszedem a meglevo diveket!
			document.getElementById('CharacterInformationDiv1').style.display=`none`;
			document.getElementById('CharacterInformationDiv2').style.display=`none`;
			//Kivalasztott fegyverek visszarakasa!
			for(let i=0;i<document.getElementsByClassName('tools').length;i++){
				let tool=document.getElementsByClassName('tools')[i].style.backgroundColor;
				let blokk=document.getElementsByClassName('tools')[i].style.backgroundImage.split('/');
   				let value=blokk[blokk.length-1].slice(0,-2);
   				let parent=document.getElementsByClassName('tools')[i].parentElement.id;
			if((tool===`red`) && (parent===`Weapons1Container`)){
					document.getElementsByClassName('tools')[i].style.backgroundColor=`green`;
					document.getElementsByClassName('tools')[i].style.fontSize=`3vw`;
					$globalWeapons1=true;
			switch(value){
			case `Cleaver.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Cleaver';
				break;
			case `GodSword.png`:
					document.getElementsByClassName('tools')[i].innerHTML='God Sword';
				break;
			case `GoldenSword.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Golden Sword';			
				break;
			case `Hammer.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Hammer';
				break;
			case `HandAxe.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Hand Axe';
				break;
			case `HeavyAxe.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Heavy Axe';
				break;
			case `IronSword.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Iron Sword';
				break;
			case `Knife.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Knife';
				break;
			case `OldHammer.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Old Hammer';
				break;
			case `PickAxeDark.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Pickaxe Dark';
				break;
			case `PocketKnife.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Pocket Knife';
				break;
			case `Scythe.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Scythe';
				break;
			case `ShadowSword.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Shadow Sword';
				break;
			case `SmallAxe.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Small Axe';
				break;
			case `StrongKnife.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Strong Knife';
				break;
			case `StrongScythe.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Strong Scythe';
				break;
			case `Sword.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Sword';
				break;
			case `TacticalAxe.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Tactical Axe';
				break;
			case `WoodenHammer.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Wooden Hammer';
					break;
			case `ZorroSword.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Zorro Sword';
					break;

			}
				}
				else{
					if((tool===`red`) && (parent===`Weapons2Container`)){
					document.getElementsByClassName('tools')[i].style.backgroundColor=`green`;
					document.getElementsByClassName('tools')[i].style.fontSize=`3vw`;
					$globalWeapons2=true;
			switch(value){
			case `Cleaver.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Cleaver';
				break;
			case `GodSword.png`:
					document.getElementsByClassName('tools')[i].innerHTML='God Sword';
				break;
			case `GoldenSword.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Golden Sword';			
				break;
			case `Hammer.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Hammer';
				break;
			case `HandAxe.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Hand Axe';
				break;
			case `HeavyAxe.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Heavy Axe';
				break;
			case `IronSword.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Iron Sword';
				break;
			case `Knife.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Knife';
				break;
			case `OldHammer.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Old Hammer';
				break;
			case `PickAxeDark.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Pickaxe Dark';
				break;
			case `PocketKnife.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Pocket Knife';
				break;
			case `Scythe.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Scythe';
				break;
			case `ShadowSword.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Shadow Sword';
				break;
			case `SmallAxe.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Small Axe';
				break;
			case `StrongKnife.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Strong Knife';
				break;
			case `StrongScythe.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Strong Scythe';
				break;
			case `Sword.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Sword';
				break;
			case `TacticalAxe.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Tactical Axe';
				break;
			case `WoodenHammer.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Wooden Hammer';
					break;
			case `ZorroSword.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Zorro Sword';
					break;

			}
				}
				}

				
			}
			//Visszarakom a Skill/Statsben a feluletet alapertelmezettre
					$('#StatsSelectedImage1').css({
						backgroundImage: ``,
					})
					$('#StatsSkillsDefenseValue1').html(`D`);
					$('#StatsSkillsAttackValue1').html(`A`);
					$('#StatsSkillsHealthValue1').html(`H`);

					$('#StatsSelectedImage2').css({
						backgroundImage: ``,
					})
					$('#StatsSkillsDefenseValue2').html(`D`);
					$('#StatsSkillsAttackValue2').html(`A`);
					$('#StatsSkillsHealthValue2').html(`H`);

					$('#StatsSkillsWeapon1').html(`Weapon`);
					$('#StatsSkillsDamageValue1').html('damage');
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: ``,
					})
					$('#StatsSkillsWeapon2').html(`Weapon`);
					$('#StatsSkillsDamageValue2').html('damage');
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: ``,
					})

			//Put back the Def,Atk,Hp values to their default values and its platform
			//def
				$globalDefenseInput1=true;
					$('#StatsSkillsDefenseValue1').css({
						color:`black`,
						textShadow: `0vw 0.2vw 0.3vw white, 0.2vw 0vw 0.3vw white, -0.2vw 0vw 0.3vw white, 0vw -0.2vw 0.3vw white`,
					})

				$globalAttackInput1=true;
					$('#StatsSkillsAttackValue1').css({
						color:`black`,
						textShadow: `0vw 0.2vw 0.3vw white, 0.2vw 0vw 0.3vw white, -0.2vw 0vw 0.3vw white, 0vw -0.2vw 0.3vw white`,
					})

				$globalHealthInput1=true;
					$('#StatsSkillsHealthValue1').css({
						color:`black`,
						textShadow: `0vw 0.2vw 0.3vw white, 0.2vw 0vw 0.3vw white, -0.2vw 0vw 0.3vw white, 0vw -0.2vw 0.3vw white`,
					})

				$globalDefenseInput2=true;
					$('#StatsSkillsDefenseValue2').css({
						color:`black`,
						textShadow: `0vw 0.2vw 0.3vw white, 0.2vw 0vw 0.3vw white, -0.2vw 0vw 0.3vw white, 0vw -0.2vw 0.3vw white`,
					})

					$globalAttackInput2=true;
					$('#StatsSkillsAttackValue2').css({
							color:`black`,
							textShadow: `0vw 0.2vw 0.3vw white, 0.2vw 0vw 0.3vw white, -0.2vw 0vw 0.3vw white, 0vw -0.2vw 0.3vw white`,
					})

					$globalHealthInput2=true;
					$('#StatsSkillsHealthValue2').css({
							color:`black`,
							textShadow: `0vw 0.2vw 0.3vw white, 0.2vw 0vw 0.3vw white, -0.2vw 0vw 0.3vw white, 0vw -0.2vw 0.3vw white`,
					})

					//Put back the skills for both cases!
					document.getElementsByClassName('StatsSkillsGymnastics')[0].style.backgroundColor=`green`;
					document.getElementsByClassName('StatsSkillsGymnastics')[0].style.color=`black`;
					document.getElementsByClassName('StatsSkillsGymnastics')[1].style.backgroundColor=`green`;
					document.getElementsByClassName('StatsSkillsGymnastics')[1].style.color=`black`;

					document.getElementsByClassName('StatsSkillsAcrobatics')[0].style.backgroundColor=`green`;
					document.getElementsByClassName('StatsSkillsAcrobatics')[0].style.color=`black`;
					document.getElementsByClassName('StatsSkillsAcrobatics')[1].style.backgroundColor=`green`;
					document.getElementsByClassName('StatsSkillsAcrobatics')[1].style.color=`black`;


					document.getElementsByClassName('StatsSkillsWeaponMaster')[0].style.backgroundColor=`green`;
					document.getElementsByClassName('StatsSkillsWeaponMaster')[0].style.color=`black`;
					document.getElementsByClassName('StatsSkillsWeaponMaster')[1].style.backgroundColor=`green`;
					document.getElementsByClassName('StatsSkillsWeaponMaster')[1].style.color=`black`;

					document.getElementsByClassName('StatsSkillsSwiftness')[0].style.backgroundColor=`green`;
					document.getElementsByClassName('StatsSkillsSwiftness')[0].style.color=`black`;
					document.getElementsByClassName('StatsSkillsSwiftness')[1].style.backgroundColor=`green`;
					document.getElementsByClassName('StatsSkillsSwiftness')[1].style.color=`black`;

					document.getElementsByClassName('StatsSkillsLuck')[0].style.backgroundColor=`green`;
					document.getElementsByClassName('StatsSkillsLuck')[0].style.color=`black`;
					document.getElementsByClassName('StatsSkillsLuck')[1].style.backgroundColor=`green`;
					document.getElementsByClassName('StatsSkillsLuck')[1].style.color=`black`;

					document.getElementsByClassName('StatsSkillsPower')[0].style.backgroundColor=`green`;
					document.getElementsByClassName('StatsSkillsPower')[0].style.color=`black`;
					document.getElementsByClassName('StatsSkillsPower')[1].style.backgroundColor=`green`;
					document.getElementsByClassName('StatsSkillsPower')[1].style.color=`black`;

					document.getElementsByClassName('StatsSkillsStoneSkin')[0].style.backgroundColor=`green`;
					document.getElementsByClassName('StatsSkillsStoneSkin')[0].style.color=`black`;
					document.getElementsByClassName('StatsSkillsStoneSkin')[1].style.backgroundColor=`green`;
					document.getElementsByClassName('StatsSkillsStoneSkin')[1].style.color=`black`;
					//Survival modhoz a ketteseket is!

					$globalSkillSelection1=0;
					$globalSkillSelection2=0;


		$globalClicks=0;
		}

	})

	//Survival Mod!!!
	//Megjeleniteni csak a Div2-t. Atirni illetve visszairni a Headerjet!
	$('#SurvivalMod').on('click',()=>{
		if($globalClicks===0){
			document.getElementById('ModSelected').play();
			$('#ArenaMod').css({
				display: `none`,
				})
			document.getElementById('ModSelected').play();
			/*Megjelenitem a Fegyvereket illetve a statseket!*/
			$('#WeaponsContainer').toggle('slide');
			$('#Weapons1Container').css({
				display: `none`,
			})
			$('#StatsSkillsContainer').toggle('slide');
			$('#StatsSkillsContainer1').css({
				display:`none`,
			})
			$('#StatsSkillsContainer2').css({
				marginLeft:`0`,
			})
			//Megjelenitsuk az informaciot!
			$('#SkillsInformationLogo').css({display: `inline-block`});
			document.getElementsByClassName('ContainerInText')[1].innerHTML=`Fighter`;
			$('#GameModeHeader').html('Select one Non-Warrior!');
				$globalSurvivalMod=true;
				$globalClicks=1;
				//Lehuzasok (X-ek)!
				let CurrentPage=document.getElementsByClassName('CharacterElements');
				for(let i=0;i<CurrentPage.length;i++){
					let element=String(CurrentPage[i].style.backgroundImage).slice(14).slice(0,-2);
					for(let j=0;j<$globalCharacters.length;j++){
						if(($globalCharacters[j].Character===element) && ($globalCharacters[j].warrior)){
							CurrentPage[i].style.backgroundImage=`url(${$globalCharacters[i].NotCharacter}), url(${$globalCharacters[j].Character})`
							break;
						}
					}
				}

		}
		else{
			$('#ArenaMod').css({
				display: `inline`,
				})
			document.getElementById('ModNotSelected').play();
			$('#GameModeHeader').html('Game Modes');
			//Visszarakom a fegyvereket es a statsSkilleket!
			$('#WeaponsContainer').toggle();
			$('#Weapons1Container').css({
				display: `inline-block`,
			})
			$('#StatsSkillsContainer').toggle();
			$('#StatsSkillsContainer1').css({
				display: `inline-grid`,
			})
			$('#StatsSkillsContainer2').css({
				marginLeft:`5vw`,
			})
			//eltuntetjuk az informaciot!
			$('#SkillsInformationLogo').css({display: `none`});
			$('#SkillsInformation').hide();
			$('#LuckHiddenText').css({
				display: `none`,
			})
			$('#LuckTextMore').html('More...');
			document.getElementsByClassName('ContainerInText')[1].innerHTML=`Fighter 2`;
			$globalSurvivalMod=false;
			let CurrentPage=document.getElementsByClassName('CharacterElements');
				for(let i=0;i<CurrentPage.length;i++){
					let element=String(CurrentPage[i].style.backgroundImage).slice(14).slice(0,-2);
					//Lekell kerjem a bordert is!
					let border=String(CurrentPage[i].parentElement.style.border).slice(12);
						if(border ===`green`){
							element=element.slice(21);
						}
					
					for(let j=0;j<$globalCharacters.length;j++){
						if(($globalCharacters[j].Character===element) && ($globalCharacters[j].warrior)){
							CurrentPage[i].style.backgroundImage=`url(), url(${$globalCharacters[j].Character})`;
							break;
						}
					}
				}
				//Elobb lokalisan a Selectet!
				for(let i=0;i<CurrentPage.length;i++){
					let element=String(CurrentPage[i].style.backgroundImage).slice(14).slice(0,-2);
					for(let j=0;j<$globalCharacters.length;j++){
						if(($globalCharacters[j].Character===element) && ($globalCharacters[j].selected)){
							$globalCharacters[j].selected=false;
							CurrentPage[i].style.opacity=`1`;
							CurrentPage[i].style.border=`none`;
							$globalSelected=0;
							break; //Because we only have one element!
						}
					}
				}
				//Azokat amik kivul esnek!
				for(let j=0;j<$globalCharacters.length;j++){
					if($globalCharacters[j].selected){
						$globalCharacters[j].selected=false;
						$globalSelected=0;
						break;
					}
				}
			document.getElementById('CharacterInformationDiv2').style.display=`none`;
			//Itt is majd de csak egy kontener fog lenni!
						for(let i=0;i<document.getElementsByClassName('tools').length;i++){
				let tool=document.getElementsByClassName('tools')[i].style.backgroundColor;
				let blokk=document.getElementsByClassName('tools')[i].style.backgroundImage.split('/');
   				let value=blokk[blokk.length-1].slice(0,-2);
   				let parent=document.getElementsByClassName('tools')[i].parentElement.id;
			if((tool===`red`) && (parent===`Weapons2Container`)){
					document.getElementsByClassName('tools')[i].style.backgroundColor=`green`;
					document.getElementsByClassName('tools')[i].style.fontSize=`3vw`;
					$globalWeapons2=true;
			switch(value){
			case `Cleaver.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Cleaver';
				break;
			case `GodSword.png`:
					document.getElementsByClassName('tools')[i].innerHTML='God Sword';
				break;
			case `GoldenSword.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Golden Sword';			
				break;
			case `Hammer.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Hammer';
				break;
			case `HandAxe.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Hand Axe';
				break;
			case `HeavyAxe.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Heavy Axe';
				break;
			case `IronSword.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Iron Sword';
				break;
			case `Knife.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Knife';
				break;
			case `OldHammer.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Old Hammer';
				break;
			case `PickAxeDark.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Pickaxe Dark';
				break;
			case `PocketKnife.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Pocket Knife';
				break;
			case `Scythe.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Scythe';
				break;
			case `ShadowSword.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Shadow Sword';
				break;
			case `SmallAxe.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Small Axe';
				break;
			case `StrongKnife.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Strong Knife';
				break;
			case `StrongScythe.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Strong Scythe';
				break;
			case `Sword.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Sword';
				break;
			case `TacticalAxe.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Tactical Axe';
				break;
			case `WoodenHammer.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Wooden Hammer';
					break;
			case `ZorroSword.png`:
					document.getElementsByClassName('tools')[i].innerHTML='Zorro Sword';
					break;

			}
				}
			}
			//Visszarakom a Stats/Skills feluletet alapertelmezettre
				$('#StatsSelectedImage2').css({
						backgroundImage: ``,
					})
					$('#StatsSkillsDefenseValue2').html(`D`);
					$('#StatsSkillsAttackValue2').html(`A`);
					$('#StatsSkillsHealthValue2').html(`H`);

					$('#StatsSkillsWeapon2').html(`Weapon`);
			$('#StatsSkillsDamageValue2').html('damage');
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: ``,
					})

					$globalDefenseInput2=true;
					$('#StatsSkillsDefenseValue2').css({
						color:`black`,
						textShadow: `0vw 0.2vw 0.3vw white, 0.2vw 0vw 0.3vw white, -0.2vw 0vw 0.3vw white, 0vw -0.2vw 0.3vw white`,
					})

					$globalAttackInput2=true;
					$('#StatsSkillsAttackValue2').css({
							color:`black`,
							textShadow: `0vw 0.2vw 0.3vw white, 0.2vw 0vw 0.3vw white, -0.2vw 0vw 0.3vw white, 0vw -0.2vw 0.3vw white`,
					})

					$globalHealthInput2=true;
					$('#StatsSkillsHealthValue2').css({
							color:`black`,
							textShadow: `0vw 0.2vw 0.3vw white, 0.2vw 0vw 0.3vw white, -0.2vw 0vw 0.3vw white, 0vw -0.2vw 0.3vw white`,
					})

				//Skills put it back to it's original form!
					document.getElementsByClassName('StatsSkillsGymnastics')[1].style.backgroundColor=`green`;
					document.getElementsByClassName('StatsSkillsGymnastics')[1].style.color=`black`;

					document.getElementsByClassName('StatsSkillsAcrobatics')[1].style.backgroundColor=`green`;
					document.getElementsByClassName('StatsSkillsAcrobatics')[1].style.color=`black`;

					document.getElementsByClassName('StatsSkillsWeaponMaster')[1].style.backgroundColor=`green`;
					document.getElementsByClassName('StatsSkillsWeaponMaster')[1].style.color=`black`;

					document.getElementsByClassName('StatsSkillsSwiftness')[1].style.backgroundColor=`green`;
					document.getElementsByClassName('StatsSkillsSwiftness')[1].style.color=`black`;

					document.getElementsByClassName('StatsSkillsLuck')[1].style.backgroundColor=`green`;
					document.getElementsByClassName('StatsSkillsLuck')[1].style.color=`black`;

					document.getElementsByClassName('StatsSkillsPower')[1].style.backgroundColor=`green`;
					document.getElementsByClassName('StatsSkillsPower')[1].style.color=`black`;

					document.getElementsByClassName('StatsSkillsStoneSkin')[1].style.backgroundColor=`green`;
					document.getElementsByClassName('StatsSkillsStoneSkin')[1].style.color=`black`;

					$globalSkillSelection2=0;
			$globalClicks=0;
			
		}
	})

	//Selections!
	$('.CharacterElements').on('click',event=>{
		if($globalArenaMod){
		if($globalSelected<2)
		{
			let C1=String(event.currentTarget.style.backgroundImage).slice(14).slice(0,-2);
			for(let i=0;i<$globalCharacters.length;i++){
				if($globalCharacters[i].Character===C1){
					//Elobb megnezem, hogy ra lehet-e kattintani, vagy sem!
					if($globalCharacters[i].warrior)
					{
					if(!$globalCharacters[i].selected)
					{
					$globalCharacters[i].selected=true;
					$globalSelected+=1;
					$(event.currentTarget).css({
						opacity: `0.5`,
						border: `0.3vw solid yellow`,
						})
					//Bekell allitsam a kepeket is. A modnal pedig kikell majd szedjem!

					document.getElementById('CharacterSelectedAudio').play();
					PutInformationIn(event.currentTarget);
					}
					else{
						$globalCharacters[i].selected=false;
							$(event.currentTarget).css({
							opacity: `1`,
							border: `none`,
						})
						document.getElementById('CharacterNonSelectedAudio').play();
						PutInformationOut(event.currentTarget);
						$globalSelected-=1;
					}
				}

				}
			}
		}
		else{
			let C1=String(event.currentTarget.style.backgroundImage).slice(14).slice(0,-2);
			for(let i=0;i<$globalCharacters.length;i++){
				if(($globalCharacters[i].Character===C1) && ($globalCharacters[i].selected)){
					$globalCharacters[i].selected=false;
					$(event.currentTarget).css({
						opacity: `1`,
						border: `none`,
					})
					document.getElementById('CharacterNonSelectedAudio').play();
					PutInformationOut(event.currentTarget);
					$globalSelected-=1;
				}
			}
		}
	}
	//Survival Mod!
	else{
		if($globalSurvivalMod){
			if($globalSelected<2){
				for(let i=0;i<$globalCharacters.length;i++){
					let C1=String(event.currentTarget.style.backgroundImage).slice(14).slice(0,-2);
					if($globalCharacters[i].Character===C1){
						if(!$globalCharacters[i].warrior){
							if(!$globalCharacters[i].selected){
								$globalCharacters[i].selected=true;
								$(event.currentTarget).css({
									opacity: `0.5`,
									border: `0.3vw solid yellow`,
								})
								$globalSelected=2;
								document.getElementById('CharacterSelectedAudio').play();
								PutInformationIn(event.currentTarget);								
							}

						}
					}
				}

			}
			else{
				for(let i=0;i<$globalCharacters.length;i++){
					let C1=String(event.currentTarget.style.backgroundImage).slice(14).slice(0,-2);
					if($globalCharacters[i].Character===C1){
					if(!$globalCharacters[i].warrior){
						if($globalCharacters[i].selected){
							$globalCharacters[i].selected=false;
								$globalSelected=0;
								$(event.currentTarget).css({
									opacity: `1`,
									border: `none`,
								})
								document.getElementById('CharacterNonSelectedAudio').play();
								PutInformationOut(event.currentTarget);
						}
					}
				}

				}
			}
			

		}
	}

	})

	//Weapons logo!
	$('#WeaponsLogo').on('click',()=>{
		//Lekerem a heightet!
		let size=window.getComputedStyle(document.getElementById('WeaponsContainer'),null).getPropertyValue("overflow-y");
		document.getElementById('WeaponsSkillsSelected').play();
		if(size===`hidden`){		
				$('#WeaponsContainer').css({
					width: `100%`,
					height: `40vw`,
					marginLeft: `0`,
					backgroundColor: `transparent`,
					paddingLeft: `26vw`,
					overflowY: `auto`,
				})

		}
		else{
			$('#WeaponsContainer').css({
					width: `40%`,
					height: `10vw`,
					marginLeft: `26vw`,
					backgroundColor: `gray`,
					paddingLeft: `0`,
					overflowY: `hidden`,
				})

		}
	})

	//Skills & Stats!
		$('#StatsSkillsLogo').on('click',()=>{
			let size=window.getComputedStyle(document.getElementById('StatsSkillsContainer'),null).getPropertyValue("overflow-y");
			document.getElementById('WeaponsSkillsSelected').play();
					if(size===`hidden`){		
				$('#StatsSkillsContainer').css({
					width: `100%`,
					height: `45vw`,
					marginLeft: `0`,
					backgroundColor: `transparent`,
					paddingLeft: `26vw`,
					overflowY: `auto`,
				})

		}
		else{
			$('#StatsSkillsContainer').css({
					width: `40%`,
					height: `10vw`,
					marginLeft: `26vw`,
					backgroundColor: `gray`,
					paddingLeft: `0`,
					overflowY: `hidden`,
				})
		}
		})

	//Activate the Information for tools!
	$('.tools').on('click',event=>{
		let blokk=$(event.currentTarget).css('background-image').split('/');
   		let value=blokk[blokk.length-1].slice(0,-2);
   		let bgColor=$(event.currentTarget).css('background-color').split(',');
		let bgValue=Number(bgColor[1]);
		let ParentCheck=$(event.currentTarget).parent().attr('id');
		if((ParentCheck===`Weapons1Container`) && ($globalWeapons1)){
		$globalWeapons1=false;
			$(event.currentTarget).css({
				backgroundColor: `red`,
				fontSize: `4vw`,
			})
			//Beallitom a skill/statset is majd kikell szedjem arena illetve survival modnal!
			$('#StatsSkillsWeapon1').html(value.slice(0,-4));
		document.getElementById('WeaponsSelected').play();
		switch(value){
			case `Cleaver.png`:
					$(event.currentTarget).html('5-15');
					$('#StatsSkillsDamageValue1').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})
				break;
			case `GodSword.png`:
					$(event.currentTarget).html('45-55');
					$('#StatsSkillsDamageValue1').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})
				break;
			case `GoldenSword.png`:
					$(event.currentTarget).html('14-24');
					$('#StatsSkillsDamageValue1').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})		
				break;
			case `Hammer.png`:
					$(event.currentTarget).html('7-9');
					$('#StatsSkillsDamageValue1').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})
				break;
			case `HandAxe.png`:
					$(event.currentTarget).html('7-10');
					$('#StatsSkillsDamageValue1').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})
				break;
			case `HeavyAxe.png`:
					$(event.currentTarget).html('14-20');
					$('#StatsSkillsDamageValue1').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})
				break;
			case `IronSword.png`:
					$(event.currentTarget).html('10-13');
					$('#StatsSkillsDamageValue1').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})
				break;
			case `Knife.png`:
					$(event.currentTarget).html('1-3');
					$('#StatsSkillsDamageValue1').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})
				break;
			case `OldHammer.png`:
					$(event.currentTarget).html('6-8');
					$('#StatsSkillsDamageValue1').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})
				break;
			case `PickAxeDark.png`:
					$(event.currentTarget).html('9-17');
					$('#StatsSkillsDamageValue1').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})
				break;
			case `PocketKnife.png`:
					$(event.currentTarget).html('2-4');
					$('#StatsSkillsDamageValue1').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})
				break;
			case `Scythe.png`:
					$(event.currentTarget).html('12-25');
					$('#StatsSkillsDamageValue1').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})
				break;
			case `ShadowSword.png`:
					$(event.currentTarget).html('17-25');
					$('#StatsSkillsDamageValue1').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})
				break;
			case `SmallAxe.png`:
					$(event.currentTarget).html('5-8');
					$('#StatsSkillsDamageValue1').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})
				break;
			case `StrongKnife.png`:
					$(event.currentTarget).html('3-5');
					$('#StatsSkillsDamageValue1').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})
				break;
			case `StrongScythe.png`:
					$(event.currentTarget).html('18-37');
					$('#StatsSkillsDamageValue1').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})
				break;
			case `Sword.png`:
					$(event.currentTarget).html('10-12');
					$('#StatsSkillsDamageValue1').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})
				break;
			case `TacticalAxe.png`:
					$(event.currentTarget).html('1-25');
					$('#StatsSkillsDamageValue1').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})
				break;
			case `WoodenHammer.png`:
					$(event.currentTarget).html('1-99');
					$('#StatsSkillsDamageValue1').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})
					break;
			case `ZorroSword.png`:
					$(event.currentTarget).html('8-18');
					$('#StatsSkillsDamageValue1').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})
					break;

		}
	}
	else{
		//!Eleg egyszer beallitani a curenttargetnek a bg illetve a fontsizeat! A casebe csak a htmleket rakom!
		if((ParentCheck===`Weapons1Container`) && (!$globalWeapons1)){
			if(bgValue!==128){
				$globalWeapons1=true;
				$(event.currentTarget).css({
						backgroundColor: `green`,
						fontSize: `3vw`
					})
			$('#StatsSkillsWeapon1').html(`Weapon`);
			document.getElementById('WeaponsNotSelected').play();
				switch(value){
			case `Cleaver.png`:
					$(event.currentTarget).html('Cleaver');
					$('#StatsSkillsDamageValue1').html('damage');
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: ``,
					})
				break;
			case `GodSword.png`:
					$(event.currentTarget).html('God Sword');
					$('#StatsSkillsDamageValue1').html('damage');
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: ``,
					})
				break;
			case `GoldenSword.png`:
					$(event.currentTarget).html('Golden Sword');
					$('#StatsSkillsDamageValue1').html('damage');
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: ``,
					})			
				break;
			case `Hammer.png`:
					$(event.currentTarget).html('Hammer');
					$('#StatsSkillsDamageValue1').html('damage');
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: ``,
					})	
				break;
			case `HandAxe.png`:
					$(event.currentTarget).html('Hand Axe');
					$('#StatsSkillsDamageValue1').html('damage');
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: ``,
					})
				break;
			case `HeavyAxe.png`:
					$(event.currentTarget).html('Heavy Axe');
					$('#StatsSkillsDamageValue1').html('damage');
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: ``,
					})
				break;
			case `IronSword.png`:
					$(event.currentTarget).html('Iron Sword');
					$('#StatsSkillsDamageValue1').html('damage');
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: ``,
					})
				break;
			case `Knife.png`:
					$(event.currentTarget).html('Knife');
					$('#StatsSkillsDamageValue1').html('damage');
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: ``,
					})
				break;
			case `OldHammer.png`:
					$(event.currentTarget).html('Old Hammer');
					$('#StatsSkillsDamageValue1').html('damage');
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: ``,
					})
				break;
			case `PickAxeDark.png`:
					$(event.currentTarget).html('Pickaxe Dark');
					$('#StatsSkillsDamageValue1').html('damage');
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: ``,
					})
				break;
			case `PocketKnife.png`:
					$(event.currentTarget).html('Pocket Knife');
					$('#StatsSkillsDamageValue1').html('damage');
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: ``,
					})
				break;
			case `Scythe.png`:
					$(event.currentTarget).html('Scythe');
					$('#StatsSkillsDamageValue1').html('damage');
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: ``,
					})
				break;
			case `ShadowSword.png`:
					$(event.currentTarget).html('ShadowSword');
					$('#StatsSkillsDamageValue1').html('damage');
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: ``,
					})
				break;
			case `SmallAxe.png`:
					$(event.currentTarget).html('Small Axe');
					$('#StatsSkillsDamageValue1').html('damage');
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: ``,
					})
				break;
			case `StrongKnife.png`:
					$(event.currentTarget).html('Strong Knife');
					$('#StatsSkillsDamageValue1').html('damage');
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: ``,
					})
				break;
			case `StrongScythe.png`:
					$(event.currentTarget).html('Strong Scythe');
					$('#StatsSkillsDamageValue1').html('damage');
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: ``,
					})
				break;
			case `Sword.png`:
					$(event.currentTarget).html('Sword');
					$('#StatsSkillsDamageValue1').html('damage');
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: ``,
					})
				break;
			case `TacticalAxe.png`:
					$(event.currentTarget).html('Tactical Axe');
					$('#StatsSkillsDamageValue1').html('damage');
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: ``,
					})
				break;
			case `WoodenHammer.png`:
					$(event.currentTarget).html('Wooden Hammer');
					$('#StatsSkillsDamageValue1').html('damage');
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: ``,
					})
					break;
			case `ZorroSword.png`:
					$(event.currentTarget).html('Zorro Sword');
					$('#StatsSkillsDamageValue1').html('damage');
					$('#StatsSkillsWeaponPicture1').css({
						backgroundImage: ``,
					})
					break;

			}
			}

		}
		else{
		if((ParentCheck===`Weapons2Container`) && ($globalWeapons2)){
		$globalWeapons2=false;
			$(event.currentTarget).css({
				backgroundColor: `red`,
				fontSize: `4vw`,
			})
			$('#StatsSkillsWeapon2').html(value.slice(0,-4));
			document.getElementById('WeaponsSelected').play();
		switch(value){
			case `Cleaver.png`:
					$(event.currentTarget).html('5-15');
					$('#StatsSkillsDamageValue2').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})
				break;
			case `GodSword.png`:
					$(event.currentTarget).html('45-55');
					$('#StatsSkillsDamageValue2').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})
				break;
			case `GoldenSword.png`:
					$(event.currentTarget).html('14-24');
					$('#StatsSkillsDamageValue2').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})			
				break;
			case `Hammer.png`:
					$(event.currentTarget).html('7-9');
					$('#StatsSkillsDamageValue2').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})	
				break;
			case `HandAxe.png`:
					$(event.currentTarget).html('7-10');
					$('#StatsSkillsDamageValue2').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})
				break;
			case `HeavyAxe.png`:
					$(event.currentTarget).html('14-20');
					$('#StatsSkillsDamageValue2').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})
				break;
			case `IronSword.png`:
					$(event.currentTarget).html('10-13');
					$('#StatsSkillsDamageValue2').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})
				break;
			case `Knife.png`:
					$(event.currentTarget).html('1-3');
					$('#StatsSkillsDamageValue2').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})
				break;
			case `OldHammer.png`:
					$(event.currentTarget).html('6-8');
					$('#StatsSkillsDamageValue2').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})
				break;
			case `PickAxeDark.png`:
					$(event.currentTarget).html('9-17');
					$('#StatsSkillsDamageValue2').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})
				break;
			case `PickAxeDark.png`:
					$(event.currentTarget).html('9-17');
					$('#StatsSkillsDamageValue2').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})
				break;
			case `PocketKnife.png`:
					$(event.currentTarget).html('2-4');
					$('#StatsSkillsDamageValue2').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})
				break;
			case `Scythe.png`:
					$(event.currentTarget).html('12-25');
					$('#StatsSkillsDamageValue2').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})
				break;
			case `ShadowSword.png`:
					$(event.currentTarget).html('17-25');
					$('#StatsSkillsDamageValue2').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})
				break;
			case `SmallAxe.png`:
					$(event.currentTarget).html('5-8');
					$('#StatsSkillsDamageValue2').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})
				break;
			case `StrongKnife.png`:
					$(event.currentTarget).html('3-5');
					$('#StatsSkillsDamageValue2').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})
				break;
			case `StrongScythe.png`:
					$(event.currentTarget).html('18-37');
					$('#StatsSkillsDamageValue2').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})
				break;
			case `Sword.png`:
					$(event.currentTarget).html('10-12');
					$('#StatsSkillsDamageValue2').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})
				break;
			case `TacticalAxe.png`:
					$(event.currentTarget).html('1-25');
					$('#StatsSkillsDamageValue2').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})
				break;
			case `WoodenHammer.png`:
					$(event.currentTarget).html('1-99');
					$('#StatsSkillsDamageValue2').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})
					break;
			case `ZorroSword.png`:
					$(event.currentTarget).html('8-18');
					$('#StatsSkillsDamageValue2').html($(event.currentTarget).html());
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: `${$(event.currentTarget).css('background-image')}`,
					})
					break;

		}
		}
		else{
			if((ParentCheck===`Weapons2Container`) && (!$globalWeapons2)){
			if(bgValue!==128){
				$globalWeapons2=true;
				$(event.currentTarget).css({
						backgroundColor: `green`,
						fontSize: `3vw`
					})
			$('#StatsSkillsWeapon2').html(`Weapon`);
			document.getElementById('WeaponsNotSelected').play();
			switch(value){
			case `Cleaver.png`:
					$(event.currentTarget).html('Cleaver');
					$('#StatsSkillsDamageValue2').html('damage');
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: ``,
					})
				break;
			case `GodSword.png`:
					$(event.currentTarget).html('God Sword');
					$('#StatsSkillsDamageValue2').html('damage');
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: ``,
					})
				break;
			case `GoldenSword.png`:
					$(event.currentTarget).html('Golden Sword');
					$('#StatsSkillsDamageValue2').html('damage');
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: ``,
					})			
				break;
			case `Hammer.png`:
					$(event.currentTarget).html('Hammer');
					$('#StatsSkillsDamageValue2').html('damage');
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: ``,
					})	
				break;
			case `HandAxe.png`:
					$(event.currentTarget).html('Hand Axe');
					$('#StatsSkillsDamageValue2').html('damage');
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: ``,
					})
				break;
			case `HeavyAxe.png`:
					$(event.currentTarget).html('Heavy Axe');
					$('#StatsSkillsDamageValue2').html('damage');
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: ``,
					})
				break;
			case `IronSword.png`:
					$(event.currentTarget).html('Iron Sword');
					$('#StatsSkillsDamageValue2').html('damage');
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: ``,
					})
				break;
			case `Knife.png`:
					$(event.currentTarget).html('Knife');
					$('#StatsSkillsDamageValue2').html('damage');
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: ``,
					})
				break;
			case `OldHammer.png`:
					$(event.currentTarget).html('Old Hammer');
					$('#StatsSkillsDamageValue2').html('damage');
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: ``,
					})
				break;
			case `PickAxeDark.png`:
					$(event.currentTarget).html('Pickaxe Dark');
					$('#StatsSkillsDamageValue2').html('damage');
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: ``,
					})
				break;
			case `PocketKnife.png`:
					$(event.currentTarget).html('Pocket Knife');
					$('#StatsSkillsDamageValue2').html('damage');
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: ``,
					})
				break;
			case `Scythe.png`:
					$(event.currentTarget).html('Scythe');
					$('#StatsSkillsDamageValue2').html('damage');
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: ``,
					})
				break;
			case `ShadowSword.png`:
					$(event.currentTarget).html('ShadowSword');
					$('#StatsSkillsDamageValue2').html('damage');
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: ``,
					})
				break;
			case `SmallAxe.png`:
					$(event.currentTarget).html('Small Axe');
					$('#StatsSkillsDamageValue2').html('damage');
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: ``,
					})
				break;
			case `StrongKnife.png`:
					$(event.currentTarget).html('Strong Knife');
					$('#StatsSkillsDamageValue2').html('damage');
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: ``,
					})
				break;
			case `StrongScythe.png`:
					$(event.currentTarget).html('Strong Scythe');
					$('#StatsSkillsDamageValue2').html('damage');
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: ``,
					})
				break;
			case `Sword.png`:
					$(event.currentTarget).html('Sword');
					$('#StatsSkillsDamageValue2').html('damage');
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: ``,
					})
				break;
			case `TacticalAxe.png`:
					$(event.currentTarget).html('Tactical Axe');
					$('#StatsSkillsDamageValue2').html('damage');
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: ``,
					})
				break;
			case `WoodenHammer.png`:
					$(event.currentTarget).html('Wooden Hammer');
					$('#StatsSkillsDamageValue2').html('damage');
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: ``,
					})
					break;
			case `ZorroSword.png`:
					$(event.currentTarget).html('Zorro Sword');
					$('#StatsSkillsDamageValue2').html('damage');
					$('#StatsSkillsWeaponPicture2').css({
						backgroundImage: ``,
					})
					break;

			}
			}

		}
		}

		}


	}
			
	})

	//Hibak(a defenset egyszer irhatjuk felul(Ez engedi tobbszor is),Lekell mentsem az alapertelmezett erteket is)
	//Teszunk egy globalis valtozot, ami vizsgalja, hogy az illeto elem blokkolva van-e vagy sem. Ha blokkolva van
	//akkor alertel kenyszeritsuk a 0-t amivel visszaallitom es utanna ujrakezdhetem!
	//Functions for input!
	//Defense 1
	$('#StatsSkillsDefenseInput1').keyup(function(e){
		if(e.keyCode==13){
			if($(this).val().length>2){
				window.alert('Maximum length is 2 digits');
			}
			else{
				if(Number($(this).val()<0)){
					window.alert('The number cannot be negative!');
				}
				else{
					if($(this).val().length!==0){
						if((Number($(this).val())!==0) && ($globalDefenseInput1)){
							if($('#StatsSkillsDefenseValue1').html()===`D`)
							{
								window.alert(`Select a character to modify it's defense!`);
							}
							else{
								//here
								$globalDefenseInput1=false;
								let a=Number($('#StatsSkillsDefenseValue1').html())+Number($(this).val());
								$('#StatsSkillsDefenseValue1').html(a);
								$('#StatsSkillsDefenseValue1').css({
									color:`red`,
									textShadow: `0vw 0.2vw 0.3vw green, 0.2vw 0vw 0.3vw green, -0.2vw 0vw 0.3vw green, 0vw -0.2vw 0.3vw green`,
								})

							}
						}
						else{
							if((Number($(this).val())!==0) && (!$globalDefenseInput1)){
								window.alert(`You must reset it back to it's original value(type in 0)`);
							}
							else{
								//here
								$globalDefenseInput1=true;
								PutStatsBack($('#StatsSelectedImage1').css(`background-image`),`DEF`,1);
							}
							
						}
					}
				}
			}
		}
	})	

	//Attack 1
	$('#StatsSkillsAttackInput1').keyup(function(e){
		if(e.keyCode==13){
			if($(this).val().length!==0){
				if($(this).val()<0){
					window.alert('The number cannot be negative!');
				}
				else{
					if(Number($(this).val())>200){
						window.alert(`The maximum number is 200`);
					}
					else{
						if((Number($(this).val())!==0) && ($globalAttackInput1)){
							if($('#StatsSkillsAttackValue1').html()===`A`){
								window.alert(`Select a character, to modify it's attack!`);
							}
							else{
								$globalAttackInput1=false;
								let blokk=$('#StatsSkillsAttackValue1').html().split(`-`);
								let a=Number(blokk[0])+Number($(this).val());
								let b=Number(blokk[1])+Number($(this).val());
								$('#StatsSkillsAttackValue1').html(`${a}-${b}`);
								$('#StatsSkillsAttackValue1').css({
									color:`red`,
									textShadow: `0vw 0.2vw 0.3vw green, 0.2vw 0vw 0.3vw green, -0.2vw 0vw 0.3vw green, 0vw -0.2vw 0.3vw green`,
								})

							}
						}
						else{
							if((Number($(this).val())!==0) && (!$globalAttackInput1)){
									window.alert(`You must reset it back to it's original value(type in 0)`);
							}
							else{
								if((Number($(this).val())===0) && (!$globalAttackInput1)){

									$globalAttackInput1=true;
									PutStatsBack($('#StatsSelectedImage1').css(`background-image`),`ATK`,1);
								}
							}
						}
					}
				}
			}
		}
	})

	//Health 1
	$('#StatsSkillsHealthInput1').keyup(function(e){
		if(e.keyCode==13){
			if($(this).val().length!==0){
				if($(this).val().length>4){
					window.alert('Maximum 4 digits allowed!');
				}
				else{
					if(Number($(this).val())<0){
						window.alert('The number cannot be negative!');
					}
					else{
						if((Number($(this).val())!==0) && ($globalHealthInput1)){
							if($(`#StatsSkillsHealthValue1`).html()===`H`){
								window.alert(`Select a character, to modify it's health!`);
							}
							else{
								$globalHealthInput1=false;
								let a=Number($('#StatsSkillsHealthValue1').html())+Number($(this).val());
								$('#StatsSkillsHealthValue1').html(`${a}`);
								$('#StatsSkillsHealthValue1').css({
									color:`red`,
									textShadow: `0vw 0.2vw 0.3vw green, 0.2vw 0vw 0.3vw green, -0.2vw 0vw 0.3vw green, 0vw -0.2vw 0.3vw green`,
								})
							}
						}
						else{
							if((Number($(this).val())!==0) && (!$globalHealthInput1)){
								window.alert(`You must reset it back to it's original value(type in 0)`);
							}
							else{
								if((Number($(this).val())===0) && (!$globalHealthInput1)){
									$globalHealthInput1=true;
									PutStatsBack($('#StatsSelectedImage1').css(`background-image`),`HP`,1);
								}
								

							}

						}
					}
				}
			}
		}
	})




	//Defense 2	
		$('#StatsSkillsDefenseInput2').keyup(function(e){
		if(e.keyCode==13){
			if($(this).val().length>2){
				window.alert('Maximum length is 2 digits');
			}
			else{
				if(Number($(this).val()<0)){
					window.alert('The number cannot be negative!');
				}
				else{
					if($(this).val().length!==0){
						if((Number($(this).val())!==0) && ($globalDefenseInput2)){
							if($('#StatsSkillsDefenseValue2').html()===`D`)
							{
								window.alert(`Select a character to modify it's defense!`);
							}
							else{
								//here
								$globalDefenseInput2=false;
								let a=Number($('#StatsSkillsDefenseValue2').html())+Number($(this).val());
								$('#StatsSkillsDefenseValue2').html(a);
								$('#StatsSkillsDefenseValue2').css({
									color:`red`,
									textShadow: `0vw 0.2vw 0.3vw green, 0.2vw 0vw 0.3vw green, -0.2vw 0vw 0.3vw green, 0vw -0.2vw 0.3vw green`,
								})

							}
						}
						else{
							if((Number($(this).val())!==0) && (!$globalDefenseInput2)){
								window.alert(`You must reset it back to it's original value(type in 0)`);
							}
							else{
								//here
								$globalDefenseInput2=true;
								PutStatsBack($('#StatsSelectedImage2').css(`background-image`),`DEF`,2);
							}
							
						}
					}
				}
			}
		}
	})



	//Attack 2
	$('#StatsSkillsAttackInput2').keyup(function(e){
		if(e.keyCode==13){
			if($(this).val().length!==0){
				if($(this).val()<0){
					window.alert('The number cannot be negative!');
				}
				else{
					if(Number($(this).val())>200){
						window.alert(`The maximum number is 200`);
					}
					else{
						if((Number($(this).val())!==0) && ($globalAttackInput2)){
							if($('#StatsSkillsAttackValue2').html()===`A`){
								window.alert(`Select a character, to modify it's attack!`);
							}
							else{
								$globalAttackInput2=false;
								let blokk=$('#StatsSkillsAttackValue2').html().split(`-`);
								let a=Number(blokk[0])+Number($(this).val());
								let b=Number(blokk[1])+Number($(this).val());
								$('#StatsSkillsAttackValue2').html(`${a}-${b}`);
								$('#StatsSkillsAttackValue2').css({
									color:`red`,
									textShadow: `0vw 0.2vw 0.3vw green, 0.2vw 0vw 0.3vw green, -0.2vw 0vw 0.3vw green, 0vw -0.2vw 0.3vw green`,
								})

							}
						}
						else{
							if((Number($(this).val())!==0) && (!$globalAttackInput2)){
									window.alert(`You must reset it back to it's original value(type in 0)`);
							}
							else{
								if((Number($(this).val())===0) && (!$globalAttackInput2)){

									$globalAttackInput2=true;
									PutStatsBack($('#StatsSelectedImage2').css(`background-image`),`ATK`,2);
								}
							}
						}
					}
				}
			}
		}
	})

		//Health 2
	$('#StatsSkillsHealthInput2').keyup(function(e){
		if(e.keyCode==13){
			if($(this).val().length!==0){
				if($(this).val().length>4){
					window.alert('Maximum 4 digits allowed!');
				}
				else{
					if(Number($(this).val())<0){
						window.alert('The number cannot be negative!');
					}
					else{
						if((Number($(this).val())!==0) && ($globalHealthInput2)){
							if($(`#StatsSkillsHealthValue2`).html()===`H`){
								window.alert(`Select a character, to modify it's health!`);
							}
							else{
								$globalHealthInput2=false;
								let a=Number($('#StatsSkillsHealthValue2').html())+Number($(this).val());
								$('#StatsSkillsHealthValue2').html(`${a}`);
								$('#StatsSkillsHealthValue2').css({
									color:`red`,
									textShadow: `0vw 0.2vw 0.3vw green, 0.2vw 0vw 0.3vw green, -0.2vw 0vw 0.3vw green, 0vw -0.2vw 0.3vw green`,
								})
							}
						}
						else{
							if((Number($(this).val())!==0) && (!$globalHealthInput2)){
								window.alert(`You must reset it back to it's original value(type in 0)`);
							}
							else{
								if((Number($(this).val())===0) && (!$globalHealthInput2)){
									$globalHealthInput2=true;
									PutStatsBack($('#StatsSelectedImage2').css(`background-image`),`HP`,2);
								}
								

							}

						}
					}
				}
			}
		}
	})

	//Information
	$('#SkillsInformationLogo').on('click',()=>{
			$('#SkillsInformation').toggle('slide');
	})
	$('#LuckTextMore').on('click',()=>{
		let displayValue=window.getComputedStyle(document.getElementById('LuckHiddenText'),null).getPropertyValue('display');
		if(displayValue===`none`){
			$('#LuckHiddenText').css({
				display: `inline`,
			})
			$('#LuckTextMore').html('Less');
		}
		else{
			$('#LuckHiddenText').css({
				display: `none`,
			})
			$('#LuckTextMore').html('More...');
		}
	})


	//Bekell majd rakjam az arena illetve survival modeokhoz is!
	//Skills
	$('.StatsSkillsGymnastics').on('click',event=>{
		let info=$(event.currentTarget).parent().attr('id');
		let bgcolor=$(event.currentTarget).css('background-color').split(',');
		let bgValue=Number(bgcolor[1]);
		let acrob1=window.getComputedStyle($('.StatsSkillsAcrobatics')[0],null).getPropertyValue('background-color').split(',');
		let acrob2=window.getComputedStyle($('.StatsSkillsAcrobatics')[1],null).getPropertyValue('background-color').split(',');
		let acrCheck1=Number(acrob1[1]);
		let acrCheck2=Number(acrob2[1]);
		switch(info){
			case 'StatsSkillsContainer1':
				if(bgValue===128){
						if($globalSkillSelection1!==3)
						{
						$globalSkillSelection1+=1;
						$(event.currentTarget).css({
							backgroundColor: `purple`,
							color: `white`
						})		
						}	
					
				}
				else{
					if(acrCheck1===128){
							$globalSkillSelection1-=1;
								$(event.currentTarget).css({
									backgroundColor: `green`,
									color: `black`
								})
						
					}
					else{
						window.alert('This command cannot be done because acrobatics is selected!');
					}
				}
				break;
			case 'StatsSkillsContainer2':
				if(bgValue===128){
					if($globalSkillSelection2!==3)
					{
					$globalSkillSelection2+=1;
					$(event.currentTarget).css({
						backgroundColor: `purple`,
						color: `white`
					})
					}
				}
				else{
					if(acrCheck2===128)
					{
						$globalSkillSelection2-=1;
						$(event.currentTarget).css({
							backgroundColor: `green`,
							color: `black`
						})
					}
					else{
						window.alert('This command cannot be done because acrobatics is selected!');
					}
				}
				break;

		}
	})

	$('.StatsSkillsAcrobatics').on('click',event=>{
		let info=$(event.currentTarget).parent().attr('id');
		let bgcolor=$(event.currentTarget).css('background-color').split(',');
		let bgValue=Number(bgcolor[1]);
		let gymnastic1=window.getComputedStyle($('.StatsSkillsGymnastics')[0],null).getPropertyValue('background-color').split(',');
		let gymnastic2=window.getComputedStyle($('.StatsSkillsGymnastics')[1],null).getPropertyValue('background-color').split(',');
		let gymCheck1=Number(gymnastic1[1]);
		let gymCheck2=Number(gymnastic2[1]);
		switch(info){
			case 'StatsSkillsContainer1':
				
					if(bgValue===128)
					{
						if($globalSkillSelection1!==3)
						{
						if(gymCheck1!==128){
							$globalSkillSelection1+=1;
							$(event.currentTarget).css({
								backgroundColor: `purple`,
								color: `white`
							})
						}
						else{
							//Ha nincs kivalasztva!
							if($globalSkillSelection1!==2){
								$globalSkillSelection1+=2;
								$(event.currentTarget).css({
									backgroundColor: `purple`,
									color: `white`
								})
								document.getElementsByClassName('StatsSkillsGymnastics')[0].style.backgroundColor=`purple`;
								document.getElementsByClassName('StatsSkillsGymnastics')[0].style.color=`white`;
							}
							else{
								window.alert('You selection comes with gymnastics and exceeds the selection limit!');
							}
						}
					}
					}
					else{
						$globalSkillSelection1-=1;
						$(event.currentTarget).css({
							backgroundColor: `green`,
							color: `black`
						})
					}

				
				break;

			case 'StatsSkillsContainer2':
					
					if(bgValue===128)
					{
						if($globalSkillSelection2!==3)
						{
						if(gymCheck2!==128){
							$globalSkillSelection2+=1;
							$(event.currentTarget).css({
								backgroundColor: `purple`,
								color: `white`
							})
						}
						else{
							//Ha nincs kivalasztva!
							if($globalSkillSelection2!==2){
								$globalSkillSelection2+=2;
								$(event.currentTarget).css({
									backgroundColor: `purple`,
									color: `white`
								})
								document.getElementsByClassName('StatsSkillsGymnastics')[1].style.backgroundColor=`purple`;
								document.getElementsByClassName('StatsSkillsGymnastics')[1].style.color=`white`;
							}
							else{
								window.alert('Your selection comes with gymnastics and exceeds the selection limit!');
							}
						}
					}
					}
					else{
						$globalSkillSelection2-=1;
						$(event.currentTarget).css({
							backgroundColor: `green`,
							color: `black`
						})
					}

				
					break;

		}
	})

	//WeaponMaster
	$('.StatsSkillsWeaponMaster').on('click',()=>{
		let bgcolor=$(event.currentTarget).css('background-color').split(',');
		let bgValue=Number(bgcolor[1]);
		//Csak a 2esnel kell rakjam a verifikalast!
		let SelectedImage2=$('#StatsSelectedImage2').css('background-image');
		let blokkImage=SelectedImage2.split('/');
		let ImageName=blokkImage[blokkImage.length-1].slice(0,-6);
		//Weapon selection value!
		let SelectedWeapon1=$('#StatsSkillsWeapon1').html();
		let SelectedWeapon2=$('#StatsSkillsWeapon2').html();
		let info=$(event.currentTarget).parent().attr('id');
		switch(info){
			case 'StatsSkillsContainer1':
					if(SelectedWeapon1!==`Weapon`){
						if(bgValue===128){
							if($globalSkillSelection1!==3)
							{
							$(event.currentTarget).css({
								backgroundColor: `purple`,
								color: `white`
							})
							$globalSkillSelection1+=1;
							}
						}
						else{
							$(event.currentTarget).css({
								backgroundColor: `green`,
								color: `black`
							})
							$globalSkillSelection1-=1;
						}
						
					}
					else{
						if(bgValue===128){
							if($globalSkillSelection1!==3)
							{
							window.alert('WARNING: This skill only works if u select a weapon, othervise it has no effect!');
							$(event.currentTarget).css({
								backgroundColor: `purple`,
								color: `white`
							})
							$globalSkillSelection1+=1;
							}
						}
						else{
							$(event.currentTarget).css({
								backgroundColor: `green`,
								color: `black`
							})
							$globalSkillSelection1-=1;
						}
					}
					
				break;
				case 'StatsSkillsContainer2':
						if(SelectedImage2!==`none`){
							for(let i=0;i<$globalCharacters.length;i++){
								let blokk=$globalCharacters[i].Character.split('/');
								let characterName=blokk[blokk.length-1].slice(0,-4);
								if(ImageName===characterName){
									if($globalCharacters[i].warrior){
										if(SelectedWeapon2!==`Weapon`)
										{
											if(bgValue===128)
											{
												if($globalSkillSelection2!==3)
												{
													$(event.currentTarget).css({
														backgroundColor: `purple`,
														color: `white`
														})
													$globalSkillSelection2+=1;
												}
											}
											else{
												$(event.currentTarget).css({
													backgroundColor: `green`,
													color: `black`
												})
												$globalSkillSelection2-=1;
											}
										break;
										}
										else{
											if(bgValue===128){
												if($globalSkillSelection2!==3)
											{
											window.alert('WARNING: This skill only works if u select a weapon, othervise it has no effect!');
											$(event.currentTarget).css({
												backgroundColor: `purple`,
												color: `white`
												})
													$globalSkillSelection2+=1;
											}
										}
										else{
											$(event.currentTarget).css({
											backgroundColor: `green`,
											color: `black`
											})
											$globalSkillSelection2-=1;
											}
										}
									}
									else{
										window.alert(`This skill is only for warriors!`);
									}

								}
							}
						}
						else{
							window.alert('Choose a Warrior!');
						}
						
					
				break;

		}
	})

	$('.StatsSkillsSwiftness').on('click',()=>{
			let bgcolor=$(event.currentTarget).css('background-color').split(',');
			let bgValue=Number(bgcolor[1]);
			let info=$(event.currentTarget).parent().attr('id');
			switch(info){
				case `StatsSkillsContainer1`:
					if(bgValue===128){
						if($globalSkillSelection1!==3){
							$(event.currentTarget).css({
								backgroundColor: `purple`,
								color: `white`
							})
							$globalSkillSelection1+=1;
						}
					}
					else{
							$(event.currentTarget).css({
								backgroundColor: `green`,
								color: `black`
							})
							$globalSkillSelection1-=1;
					}
					break;
				case `StatsSkillsContainer2`:
					if(bgValue===128){
						if($globalSkillSelection2!==3){
							$(event.currentTarget).css({
								backgroundColor: `purple`,
								color: `white`
							})
							$globalSkillSelection2+=1;
						}
					}
					else{
							$(event.currentTarget).css({
								backgroundColor: `green`,
								color: `black`
							})
							$globalSkillSelection2-=1;
					}
					break;
			}
	})

	$('.StatsSkillsLuck').on('click',()=>{
			let bgcolor=$(event.currentTarget).css('background-color').split(',');
			let bgValue=Number(bgcolor[1]);
			let info=$(event.currentTarget).parent().attr('id');
			switch(info){
				case `StatsSkillsContainer1`:
					if(bgValue===128){
						if($globalSkillSelection1===0){
							$(event.currentTarget).css({
								backgroundColor: `purple`,
								color: `white`
							})
							$globalSkillSelection1=3;
						}
						else{
							window.alert('This skill is single and cannot be selectid with any other skills!');
						}
					}
					else{
							$(event.currentTarget).css({
								backgroundColor: `green`,
								color: `black`
							})
							$globalSkillSelection1=0;
					}
					break;
				case `StatsSkillsContainer2`:
					if(bgValue===128){
						if($globalSkillSelection2===0){
							$(event.currentTarget).css({
								backgroundColor: `purple`,
								color: `white`
							})
							$globalSkillSelection2=3;
						}
						else{
							window.alert('This skill is single and cannot be selected with any other skills!');
						}
					}
					else{
							$(event.currentTarget).css({
								backgroundColor: `green`,
								color: `black`
							})
							$globalSkillSelection2=0;
					}
					break;

			}
	})

	$('.StatsSkillsPower').on('click',()=>{
			let bgcolor=$(event.currentTarget).css('background-color').split(',');
			let bgValue=Number(bgcolor[1]);
			let info=$(event.currentTarget).parent().attr('id');
			switch(info){
				case `StatsSkillsContainer1`:
					if(bgValue===128){
						if($globalSkillSelection1!==3){
							$(event.currentTarget).css({
								backgroundColor: `purple`,
								color: `white`
							})
							$globalSkillSelection1+=1;
						}
					}
					else{
							$(event.currentTarget).css({
								backgroundColor: `green`,
								color: `black`
							})
							$globalSkillSelection1-=1;
					}
					break;
				case `StatsSkillsContainer2`:
					if(bgValue===128){
						if($globalSkillSelection2!==3){
							$(event.currentTarget).css({
								backgroundColor: `purple`,
								color: `white`
							})
							$globalSkillSelection2+=1;
						}
					}
					else{
							$(event.currentTarget).css({
								backgroundColor: `green`,
								color: `black`
							})
							$globalSkillSelection2-=1;
					}
					break;
			}
	})

	$('.StatsSkillsStoneSkin').on('click',()=>{
					let bgcolor=$(event.currentTarget).css('background-color').split(',');
			let bgValue=Number(bgcolor[1]);
			let info=$(event.currentTarget).parent().attr('id');
			switch(info){
				case `StatsSkillsContainer1`:
					if(bgValue===128){
						if($globalSkillSelection1!==3){
							$(event.currentTarget).css({
								backgroundColor: `purple`,
								color: `white`
							})
							$globalSkillSelection1+=1;
						}
					}
					else{
							$(event.currentTarget).css({
								backgroundColor: `green`,
								color: `black`
							})
							$globalSkillSelection1-=1;
					}
					break;
				case `StatsSkillsContainer2`:
					if(bgValue===128){
						if($globalSkillSelection2!==3){
							$(event.currentTarget).css({
								backgroundColor: `purple`,
								color: `white`
							})
							$globalSkillSelection2+=1;
						}
					}
					else{
							$(event.currentTarget).css({
								backgroundColor: `green`,
								color: `black`
							})
							$globalSkillSelection2-=1;
					}
					break;
			}
	})
});








