import utils from "../node_modules/decentraland-ecs-utils/index"

const scene = new Entity()
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
scene.addComponentOrReplace(transform)
engine.addEntity(scene)

const floorBaseGrass_02 = new Entity()
floorBaseGrass_02.setParent(scene)
const gltfShape = new GLTFShape('models/FloorBaseGrass_02/FloorBaseGrass_02.glb')
floorBaseGrass_02.addComponentOrReplace(gltfShape)
const transform_2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02.addComponentOrReplace(transform_2)
engine.addEntity(floorBaseGrass_02)

const fencePicketLarge_01 = new Entity()
fencePicketLarge_01.setParent(scene)
const gltfShape_2 = new GLTFShape('models/FencePicketLarge_01/FencePicketLarge_01.glb')
fencePicketLarge_01.addComponentOrReplace(gltfShape_2)
const transform_3 = new Transform({
  position: new Vector3(0.49999999999999994, 0, 0.5),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01.addComponentOrReplace(transform_3)
engine.addEntity(fencePicketLarge_01)

const fencePicketLarge_01_2 = new Entity()
fencePicketLarge_01_2.setParent(scene)
fencePicketLarge_01_2.addComponentOrReplace(gltfShape_2)
const transform_4 = new Transform({
  position: new Vector3(10.5, 0, 0.5),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_2.addComponentOrReplace(transform_4)
engine.addEntity(fencePicketLarge_01_2)

const fencePicketLarge_01_3 = new Entity()
fencePicketLarge_01_3.setParent(scene)
fencePicketLarge_01_3.addComponentOrReplace(gltfShape_2)
const transform_5 = new Transform({
  position: new Vector3(15.5, 0, 0.5),
  rotation: new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_3.addComponentOrReplace(transform_5)
engine.addEntity(fencePicketLarge_01_3)

const fencePicketLarge_01_4 = new Entity()
fencePicketLarge_01_4.setParent(scene)
fencePicketLarge_01_4.addComponentOrReplace(gltfShape_2)
const transform_6 = new Transform({
  position: new Vector3(15.5, 0, 5.5),
  rotation: new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_4.addComponentOrReplace(transform_6)
engine.addEntity(fencePicketLarge_01_4)

const fencePicketLarge_01_5 = new Entity()
fencePicketLarge_01_5.setParent(scene)
fencePicketLarge_01_5.addComponentOrReplace(gltfShape_2)
const transform_7 = new Transform({
  position: new Vector3(15.5, 0, 10.5),
  rotation: new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_5.addComponentOrReplace(transform_7)
engine.addEntity(fencePicketLarge_01_5)

const fencePicketLarge_01_6 = new Entity()
fencePicketLarge_01_6.setParent(scene)
fencePicketLarge_01_6.addComponentOrReplace(gltfShape_2)
const transform_8 = new Transform({
  position: new Vector3(15.5, 0, 15.5),
  rotation: new Quaternion(0, -0.707106781186548, 0, -0.7071067811865479),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_6.addComponentOrReplace(transform_8)
engine.addEntity(fencePicketLarge_01_6)

const fencePicketLarge_01_7 = new Entity()
fencePicketLarge_01_7.setParent(scene)
fencePicketLarge_01_7.addComponentOrReplace(gltfShape_2)
const transform_9 = new Transform({
  position: new Vector3(10.5, 0, 15.5),
  rotation: new Quaternion(0, -0.707106781186548, 0, -0.7071067811865479),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_7.addComponentOrReplace(transform_9)
engine.addEntity(fencePicketLarge_01_7)

const fencePicketLarge_01_8 = new Entity()
fencePicketLarge_01_8.setParent(scene)
fencePicketLarge_01_8.addComponentOrReplace(gltfShape_2)
const transform_10 = new Transform({
  position: new Vector3(5.5, 0, 15.5),
  rotation: new Quaternion(0, -0.707106781186548, 0, -0.7071067811865479),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_8.addComponentOrReplace(transform_10)
engine.addEntity(fencePicketLarge_01_8)

const fencePicketLarge_01_9 = new Entity()
fencePicketLarge_01_9.setParent(scene)
fencePicketLarge_01_9.addComponentOrReplace(gltfShape_2)
const transform_11 = new Transform({
  position: new Vector3(0.5, 0, 15.5),
  rotation: new Quaternion(0, 1.5265566588595902e-16, 0, 1.0000000000000004),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_9.addComponentOrReplace(transform_11)
engine.addEntity(fencePicketLarge_01_9)

const fencePicketLarge_01_10 = new Entity()
fencePicketLarge_01_10.setParent(scene)
fencePicketLarge_01_10.addComponentOrReplace(gltfShape_2)
const transform_12 = new Transform({
  position: new Vector3(0.5, 0, 10.5),
  rotation: new Quaternion(0, 1.5265566588595902e-16, 0, 1.0000000000000004),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_10.addComponentOrReplace(transform_12)
engine.addEntity(fencePicketLarge_01_10)

const fencePicketLarge_01_11 = new Entity()
fencePicketLarge_01_11.setParent(scene)
fencePicketLarge_01_11.addComponentOrReplace(gltfShape_2)
const transform_13 = new Transform({
  position: new Vector3(0.5, 0, 5.5),
  rotation: new Quaternion(0, 1.5265566588595902e-16, 0, 1.0000000000000004),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_11.addComponentOrReplace(transform_13)
engine.addEntity(fencePicketLarge_01_11)

const fencePicketSmall_01 = new Entity()
fencePicketSmall_01.setParent(scene)
const gltfShape_3 = new GLTFShape('models/FencePicketSmall_01/FencePicketSmall_01.glb')
fencePicketSmall_01.addComponentOrReplace(gltfShape_3)
const transform_14 = new Transform({
  position: new Vector3(5.5, 0, 0.5),
  rotation: new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865479),
  scale: new Vector3(1, 1, 1)
})
fencePicketSmall_01.addComponentOrReplace(transform_14)
engine.addEntity(fencePicketSmall_01)

const fencePicketSmall_01_2 = new Entity()
fencePicketSmall_01_2.setParent(scene)
fencePicketSmall_01_2.addComponentOrReplace(gltfShape_3)
const transform_15 = new Transform({
  position: new Vector3(9.5, 0, 0.5),
  rotation: new Quaternion(0, -0.7071067811865479, 0, 0.7071067811865479),
  scale: new Vector3(1, 1, 1)
})
fencePicketSmall_01_2.addComponentOrReplace(transform_15)
engine.addEntity(fencePicketSmall_01_2)

const fencePicketEnd_01 = new Entity()
fencePicketEnd_01.setParent(scene)
const gltfShape_4 = new GLTFShape('models/FencePicketEnd_01/FencePicketEnd_01.glb')
fencePicketEnd_01.addComponentOrReplace(gltfShape_4)
const transform_16 = new Transform({
  position: new Vector3(6.5, 0, 0.5),
  rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865476),
  scale: new Vector3(1, 1, 1)
})
fencePicketEnd_01.addComponentOrReplace(transform_16)
engine.addEntity(fencePicketEnd_01)

const chinesePergola_01 = new Entity()
chinesePergola_01.setParent(scene)
const gltfShape_5 = new GLTFShape('models/ChinesePergola_01/ChinesePergola_01.glb')
chinesePergola_01.addComponentOrReplace(gltfShape_5)
const transform_17 = new Transform({
  position: new Vector3(11.5, 0, 11),
  rotation: new Quaternion(0, -0.9569403357322089, 0, 0.29028467725446244),
  scale: new Vector3(1, 1, 1)
})
chinesePergola_01.addComponentOrReplace(transform_17)
engine.addEntity(chinesePergola_01)

const treeSycamore_03 = new Entity()
treeSycamore_03.setParent(scene)
const gltfShape_6 = new GLTFShape('models/TreeSycamore_03/TreeSycamore_03.glb')
treeSycamore_03.addComponentOrReplace(gltfShape_6)
const transform_18 = new Transform({
  position: new Vector3(3.600529983526542, 0, 10.609682346643229),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treeSycamore_03.addComponentOrReplace(transform_18)
engine.addEntity(treeSycamore_03)

const flower_02 = new Entity()
flower_02.setParent(scene)
const gltfShape_7 = new GLTFShape('models/Flower_02/Flower_02.glb')
flower_02.addComponentOrReplace(gltfShape_7)
const transform_19 = new Transform({
  position: new Vector3(2.9780206378006495, 0, 3.5),
  rotation: new Quaternion(0, 0.19509032201612825, 0, 0.9807852804032304),
  scale: new Vector3(1, 1, 1)
})
flower_02.addComponentOrReplace(transform_19)
engine.addEntity(flower_02)

const flower_02_2 = new Entity()
flower_02_2.setParent(scene)
flower_02_2.addComponentOrReplace(gltfShape_7)
const transform_20 = new Transform({
  position: new Vector3(13.040716245334519, 0, 4),
  rotation: new Quaternion(0, -0.38268343236508984, 0, 0.9238795325112868),
  scale: new Vector3(1, 1, 1)
})
flower_02_2.addComponentOrReplace(transform_20)
engine.addEntity(flower_02_2)

const flower_02_3 = new Entity()
flower_02_3.setParent(scene)
flower_02_3.addComponentOrReplace(gltfShape_7)
const transform_21 = new Transform({
  position: new Vector3(6.044599254255934, 0, 13.061819632671801),
  rotation: new Quaternion(0, 0.5555702330196022, 0, 0.8314696123025452),
  scale: new Vector3(1, 1, 1)
})
flower_02_3.addComponentOrReplace(transform_21)
engine.addEntity(flower_02_3)

const plant_07 = new Entity()
plant_07.setParent(scene)
const gltfShape_8 = new GLTFShape('models/Plant_07/Plant_07.glb')
plant_07.addComponentOrReplace(gltfShape_8)
const transform_22 = new Transform({
  position: new Vector3(14.232798126893892, 0, 5.5),
  rotation: new Quaternion(0, 0.8819212643483549, 0, 0.4713967368259977),
  scale: new Vector3(1, 1, 1)
})
plant_07.addComponentOrReplace(transform_22)
engine.addEntity(plant_07)

const chineseFlag_02 = new Entity()
chineseFlag_02.setParent(scene)
const gltfShape_9 = new GLTFShape('models/ChineseFlag_02/ChineseFlag_02.glb')
chineseFlag_02.addComponentOrReplace(gltfShape_9)
const transform_23 = new Transform({
  position: new Vector3(7.5, 0, 9.5),
  rotation: new Quaternion(0, 0.9946509895843932, 0, 0.10329283091670663),
  scale: new Vector3(1, 1, 1)
})
chineseFlag_02.addComponentOrReplace(transform_23)
engine.addEntity(chineseFlag_02)

const chineseFountain_01 = new Entity()
chineseFountain_01.setParent(scene)
const gltfShape_10 = new GLTFShape('models/ChineseFountain_01/ChineseFountain_01.glb')
chineseFountain_01.addComponentOrReplace(gltfShape_10)
const transform_24 = new Transform({
  position: new Vector3(12.706812008711836, 0, 6.937021247760857),
  rotation: new Quaternion(0, -0.38268343236508984, 0, 0.9238795325112868),
  scale: new Vector3(1, 1, 1)
})
chineseFountain_01.addComponentOrReplace(transform_24)
engine.addEntity(chineseFountain_01)

const pond_01 = new Entity()
pond_01.setParent(scene)
const gltfShape_11 = new GLTFShape('models/Pond_01/Pond_01.glb')
pond_01.addComponentOrReplace(gltfShape_11)
const transform_25 = new Transform({
  position: new Vector3(8.464244386806834, 0, 5.5),
  rotation: new Quaternion(0, -0.49870371999541796, 0, 0.8667725189821909),
  scale: new Vector3(1, 1, 1)
})
pond_01.addComponentOrReplace(transform_25)
engine.addEntity(pond_01)

const birdFountain_01 = new Entity()
birdFountain_01.setParent(scene)
const gltfShape_12 = new GLTFShape('models/BirdFountain_01/BirdFountain_01.glb')
birdFountain_01.addComponentOrReplace(gltfShape_12)
const transform_26 = new Transform({
  position: new Vector3(11.5, 0.7446107386356278, 11),
  rotation: new Quaternion(0, 0.9807852804032302, 0, 0.19509032201612825),
  scale: new Vector3(1, 1, 1)
})
birdFountain_01.addComponentOrReplace(transform_26)
engine.addEntity(birdFountain_01)

const bush_01 = new Entity()
bush_01.setParent(scene)
const gltfShape_13 = new GLTFShape('models/Bush_01/Bush_01.glb')
bush_01.addComponentOrReplace(gltfShape_13)
const transform_27 = new Transform({
  position: new Vector3(3.5, 0, 10.961450831904415),
  rotation: new Quaternion(0, 0.9569403357322088, 0, 0.2902846772544626),
  scale: new Vector3(1, 1, 1)
})
bush_01.addComponentOrReplace(transform_27)
engine.addEntity(bush_01)

const plant_03 = new Entity()
plant_03.setParent(scene)
const gltfShape_14 = new GLTFShape('models/Plant_03/Plant_03.glb')
plant_03.addComponentOrReplace(gltfShape_14)
const transform_28 = new Transform({
  position: new Vector3(9.192418188446288, 0, 4.950499164790128),
  rotation: new Quaternion(0, 0.19509032201612814, 0, 0.9807852804032308),
  scale: new Vector3(1, 1, 1)
})
plant_03.addComponentOrReplace(transform_28)
engine.addEntity(plant_03)

const plant_03_2 = new Entity()
plant_03_2.setParent(scene)
plant_03_2.addComponentOrReplace(gltfShape_14)
const transform_29 = new Transform({
  position: new Vector3(7.990338528764321, 0, 5.811398855986454),
  rotation: new Quaternion(0, 0.5555702330196022, 0, -0.8314696123025449),
  scale: new Vector3(1, 1, 1)
})
plant_03_2.addComponentOrReplace(transform_29)
engine.addEntity(plant_03_2)

const log_03 = new Entity()
log_03.setParent(scene)
const gltfShape_15 = new GLTFShape('models/Log_03/Log_03.glb')
log_03.addComponentOrReplace(gltfShape_15)
const transform_30 = new Transform({
  position: new Vector3(4.4259015955857315, 0, 9.036561740102172),
  rotation: new Quaternion(0, 0.9269651787908869, 0, -0.3751473807841107),
  scale: new Vector3(1, 1, 1)
})
log_03.addComponentOrReplace(transform_30)
engine.addEntity(log_03)

/// --- Adding Basic Interactivity to the gate ---
const fencePicketDoor_01 = new Entity()
fencePicketDoor_01.setParent(scene)
const gltfShape_16 = new GLTFShape('models/FencePicketDoor_01/FencePicketDoor_01.glb')
fencePicketDoor_01.addComponentOrReplace(gltfShape_16)

// Scale and position the gate
const transform_31 = new Transform({
  position: new Vector3(6.65, 0, 0.5),
  rotation: Quaternion.Euler(0, -90, 0),
  scale: new Vector3(1, 1, 1.5)
})
fencePicketDoor_01.addComponentOrReplace(transform_31)
engine.addEntity(fencePicketDoor_01)

// Define start and end rotations for the gate
let startRot = Quaternion.Euler(0, -90, 0)
let endRot = Quaternion.Euler(0, -180, 0)

// Toggle gate to its open / closed positions
fencePicketDoor_01.addComponent(new utils.ToggleComponent(utils.ToggleState.Off, value =>{
	if (value == utils.ToggleState.On){
		fencePicketDoor_01.addComponentOrReplace(new utils.RotateTransformComponent(startRot, endRot, 0.5))
	}
	else{
		fencePicketDoor_01.addComponentOrReplace(new utils.RotateTransformComponent(endRot, startRot, 0.5))
	}
}))

// Listen for click on the gate and toggle its state
fencePicketDoor_01.addComponent(new OnClick(event => {

  // Adding an intermediate variable
  let doorRotY = fencePicketDoor_01.getComponent(Transform).rotation.y

  // Check if gate is at its start or end positions before toggling
  if(doorRotY == startRot.y || doorRotY == endRot.y)
	  fencePicketDoor_01.getComponent(utils.ToggleComponent).toggle()
}))

const rockMedium_01 = new Entity()
rockMedium_01.setParent(scene)
const gltfShape_17 = new GLTFShape('models/RockMedium_01/RockMedium_01.glb')
rockMedium_01.addComponentOrReplace(gltfShape_17)
const transform_32 = new Transform({
  position: new Vector3(2.5, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rockMedium_01.addComponentOrReplace(transform_32)
engine.addEntity(rockMedium_01)

const rockSmall_01 = new Entity()
rockSmall_01.setParent(scene)
const gltfShape_18 = new GLTFShape('models/RockSmall_01/RockSmall_01.glb')
rockSmall_01.addComponentOrReplace(gltfShape_18)
const transform_33 = new Transform({
  position: new Vector3(3.5, 0, 6.341934256067859),
  rotation: new Quaternion(0, -0.6427891289997293, 0, 0.7660431682612738),
  scale: new Vector3(1, 1, 1)
})
rockSmall_01.addComponentOrReplace(transform_33)
engine.addEntity(rockSmall_01)

const rockSmall_02 = new Entity()
rockSmall_02.setParent(scene)
const gltfShape_19 = new GLTFShape('models/RockSmall_02/RockSmall_02.glb')
rockSmall_02.addComponentOrReplace(gltfShape_19)
const transform_34 = new Transform({
  position: new Vector3(3.736234367797749, 0, 4.536425172834994),
  rotation: new Quaternion(0, 0.2782707811971341, 0, 0.960502666488717),
  scale: new Vector3(1, 1, 1)
})
rockSmall_02.addComponentOrReplace(transform_34)
engine.addEntity(rockSmall_02)
