# Adding Functionality to a Builder Scene

_A screenshot of the scene inside Decentraland._

![screenshot](https://github.com/takJohn/pavilion-stone-fountain-door-guide/blob/master/screenshots/pavilion-stone-fountain-screen.jpg)

Please feel free to explore the scene [here](https://explorer.decentraland.org/?position=-149%2C-146).

## What this tutorial will cover

The [Builder](https://builder.decentraland.org) provides an easy way for anyone to design and develop a scene that can then be deployed inside of Decentraland. In this tutorial, we will be adding basic interactivity to one of these scenes as well as making use of the new [Utils](https://github.com/decentraland/decentraland-ecs-utils) library, which includes a number of pre-built tools that simplifies the process of adding common functionality to your scene.

## Before we start

Please make sure you have the latest version of the Decentraland SDK installed by running the following command in the terminal:

```
npm install -g decentraland
```

You will also need to download the scene files from this [link](https://github.com/takJohn/adding-functionality-to-a-builder-scene/blob/master/assets/Pavilion_Stone_Fountain_-_Tutorial.zip) which is a scene created directly from the Builder. Once downloaded, extract it to its own folder. 

If you prefer to use your own scene to follow along then by all means go ahead, in which case you can use the steps below as a general guideline on how to implement functionality to a scene created from the Builder. 


## Running the scene

Let's familiarise ourselves with the scene we're working with before diving into the code. Inside the terminal, run the following command in the directory we've just extracted to: 

```
dcl start
```

This will install any dependencies and automatically open your default browser to preview the scene. This might take a few seconds to load but once done, you should see a pavilion situated in a small garden that's surrounded by wooden fences. 

![screenshot](https://github.com/takJohn/pavilion-stone-fountain-door-guide/blob/master/screenshots/pavilion-stone-fountain-start-screen-cropped.jpg)

## Transforming items

Notice that the door doesn't quite fill the gap between the fences. One of the things that we can do in code and that currently isn't available in the Builder is being able to scale items. To achieve this, we will be modifying the ```transform``` component of the door by doing the following:

* Open ```game.ts``` that's located in the ```/src``` directory
* Scroll down until you find ```fencePicketDoor_01``` or just perform a search for the term
* Modify the corresponding ```transform``` component, in this case ```transform_31```

```ts
/// --- Adding Basic Interactivity to Door ---
const fencePicketDoor_01 = new Entity()
fencePicketDoor_01.setParent(scene)
const gltfShape_16 = new GLTFShape('models/FencePicketDoor_01/FencePicketDoor_01.glb')
fencePicketDoor_01.addComponentOrReplace(gltfShape_16)

// Scale and position the door
const transform_31 = new Transform({
  position: new Vector3(6.65, 0, 0.5),
  rotation: Quaternion.Euler(0, -90, 0),
  scale: new Vector3(1, 1, 1.5)
})
fencePicketDoor_01.addComponentOrReplace(transform_31)
engine.addEntity(fencePicketDoor_01)
```

Here we've already found some values that work but in your own scenes you may have to play around a bit to see what works for you. In short, the door's position and scale has been adjusted to fit the space in-between the fence. We've also replaced the ```Quaternion``` values for rotation with its ```Euler``` equivalent, which will be important later on when it comes to rotating the door, at least in the sense that we will be able to understand it better conceptually.

_TIP: The code from the builder can be really long as each item in the scene generates a new block of code. To make locating an item in the code easier, you can return to the Builder and hover your mouse cursor over an item you wish to search for within the "Item Catalog" and a tooltip will popup giving you a hint of some search terms you can use._

## Using the Utils library

It is time to add some functionality to the scene and as mentioned at the start, we are going to be making use of the new Utils library. If you haven't yet exited the preview server then please do so before installing the Utils library, which can be done by running the following command in your scene's project folder:

```npm install decentraland-ecs-utils```

To import the library into the scene's script, add this line at the start of your ```game.ts``` file.

```ts
import utils from ".../node_modules/decentraland-ecs-utils/index"
```

We will only be using a few of the available helpers in this library and if you're interested to learn more then please follow this [link](https://github.com/decentraland/decentraland-ecs-utils).

## Opening the door

Right now, users can't access the garden without having to jump over the fence so our aim is to have the door open and close whenever the user clicks on it. It's also worth noting that the door has already been rotated by ```-90``` degrees in the y-axis when it was originally placed inside the Builder. Earlier we converted the ```Quaternion``` values for the rotation to its ```Euler``` equivalent, which now becomes our start rotation. For our end rotation, we will need to rotate by another ```-90``` degrees so that it opens inwards making its final y-axis value to be ```-180``` degrees. 

```ts
// Define start and end rotations for the door
let StartRot = Quaternion.Euler(0, -90, 0)
let EndRot = Quaternion.Euler(0, -180, 0)
```

TBC

```ts
// Toggle door to its open / close positions
fencePicketDoor_01.addComponent(
  new utils.ToggleComponent(utils.ToggleState.Off, value => {
    if (value == utils.ToggleState.On) {
      fencePicketDoor_01.addComponentOrReplace(
        new utils.RotateTransformComponent(StartRot, EndRot, 0.5)
      );
    } else {
      fencePicketDoor_01.addComponentOrReplace(
        new utils.RotateTransformComponent(EndRot, StartRot, 0.5)
      );
    }
  })
);

// Listen for click on the door and toggle its state
fencePicketDoor_01.addComponent(
  new OnClick(event => {
    // Adding an intermediate variable
    let doorRotY = fencePicketDoor_01.getComponent(Transform).rotation.y;

    // Check if door is at its start or end positions before toggling
    if (doorRotY == StartRot.y || doorRotY == EndRot.y)
      fencePicketDoor_01.getComponent(utils.ToggleComponent).toggle();
  })
);
```

## Final thoughts

Using the Builder to navigate around and position items in your scene is a lot more intuitive than doing it purely by code. Hopefully this guide has shown you the possibilities when they are used together and how even a little interactivity can go a long way in adding interest to your scene. In the near future, Builder assets will be optimized to load more quickly inside of Decentraland, which provides another added benefit to those that wish to develop their scenes in conjunction with the Builder. 

## References

- Decentraland's Builder (https://builder.decentraland.org/)
- Decentraland's Utils library (https://github.com/decentraland/decentraland-ecs-utils)
- Installationi guide for Decentraland's CLI and SDK (https://docs.decentraland.org/getting-started/installation-guide/)
- Setting entity positions (https://docs.decentraland.org/development-guide/entity-positioning/)
- Documentation for Decentraland's SDK (https://docs.decentraland.org)

## Copyright info

This scene is protected with a standard Apache 2 licence. See the terms and conditions in the [LICENSE](/LICENSE) file.