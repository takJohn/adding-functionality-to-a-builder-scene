# Adding Functionality to a Builder Scene
### _Learn how to add basic interactivity to an existing Builder scene_

The [Builder](https://builder.decentraland.org) provides an easy way for anyone to design a scene without having to worry about creating their own art assets, however its real strength lies in the fact that you can export these scenes for further development, taking advantage of all the tools and utilities available within Decentraland's SDK.

## What this tutorial will cover

For this tutorial, we'll begin with a simple garden scene created from the Builder that features a fixed door, preventing users from entering the garden without having to leap over the fence. By making use of the new [Utils](https://github.com/decentraland/decentraland-ecs-utils) library, we'll quickly be able to have the door open and close in response to the user's clicks and hopefully by the end of the tutorial, you'll be able to see that anyone can create a simple interactive scene that looks nice with minimal effort. 

If you just want to take a look at the final code for this tutorial then you can view it [here](https://github.com/takJohn/adding-functionality-to-a-builder-scene).

## Before we start

Please make sure you have the latest version of the Decentraland SDK installed by running the following command in the terminal:

```
npm install -g decentraland
```

You will also need to download the Builder scene files from this [link](https://github.com/takJohn/adding-functionality-to-a-builder-scene/blob/master/assets/Pavilion_Stone_Fountain_-_Tutorial.zip). Once downloaded, extract it to its own folder. 

If you prefer to use your own scene to follow along then by all means, please go ahead, in which case you can use the steps below as a general guideline on how to implement functionality to a scene created from the Builder.

## Running the scene

Let's familiarize ourselves with the scene we're working with before diving into the code. Inside the terminal, run the following command in the directory we've just extracted to: 

```
dcl start
```

This will install any missing dependencies and automatically open your default browser to preview the scene. This might take a few seconds to load but once done, you should see a pavilion situated in a small garden that's surrounded by wooden fences.

![screenshot](https://github.com/takJohn/pavilion-stone-fountain-door-guide/blob/master/screenshots/pavilion-stone-fountain-start-screen-cropped.jpg)

As mentioned earlier, users can't access the garden without having to jump over the fence so our aim is to have the door open and close whenever the user clicks on it.

## Transforming items

Let’s start by doing some tidying up on the door so that it fills in the gaps between the fences. One of the things that we can do in code and that currently isn't possible in the Builder, is being able to scale items. To achieve this, we will be modifying the ```Transform``` component of the door by doing the following:

* Open ```game.ts``` that's located in the ```/src``` directory
* Scroll down until you find ```fencePicketDoor_01``` or just perform a search for the term
* Modify the  ```Transform``` component belonging to the door

_TIP: The code from the builder can be really long as each item in the scene generates a new block of code. To make locating an item in the code easier, you can return to the Builder and hover your mouse cursor over an item you wish to search for within the "Item Catalog" and a tooltip will popup giving you a hint of some search terms you can use._

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
We've already found some values that work but in your own scenes you may have to play around a bit to see what works for you. In short, the door's position and scale has been adjusted to fit the space in-between the fences. We've also replaced the ```Quaternion``` rotation values with its ```Euler``` equivalent, which will be important later on when it comes to rotating the door, at least in the sense that we will be able to understand it better conceptually.

## Using the Utils library

It’s nearly time to add some functionality to the scene and for that we're going to be making use of the new Utils library, which includes a number of pre-built tools that simplifies the process of adding common functionality to your scene.

If you haven't yet exited the preview server then please do so before installing the Utils library, which can be done by running the following command in your scene's project folder:


```
npm install decentraland-ecs-utils
```

To import the library into the scene's script, add this line at the start of your ```game.ts``` file.

```ts
import utils from ".../node_modules/decentraland-ecs-utils/index"
```

We will only be using a few of the available helpers in this library but if you're interested in learning more then please follow this [link](https://github.com/decentraland/decentraland-ecs-utils).

## Toggle states

The first component from the Utils library we'll be using is the ```ToggleComponent```, which allows us to switch an entity between two possible states and in doing so, it will perform a function. The states are specified by the ```ToggleState```, which can either be ```On``` or ```Off```; in the case of our door, we’ll be opening the door when the ```ToggleState``` is ```On``` and closing the door when the ```ToggleState``` is ```Off```, so each time the state changes, the door will rotate to the position corresponding to one of these states.

The ```ToggleComponent``` takes in two arguments:

* ```startingState```: Starting state of the toggle (```On``` or ```Off```)
* ```onValueChangedCallback```: Function to call every time the toggle state changes

Seeing as the door starts off being closed, we’ll set the ```startingState``` to ```ToggleState.Off``` and whenever the state changes, the function will just log a message to the console describing the action we would like to perform. This way we can check that the toggle is working as expected before implementing the action of opening and closing the door.

_NOTE: Whenever you see_ ```utils.``` _then that’s an indication that we’re accessing a helper from the Utils library_

```ts
// Toggle door to its open / close positions
fencePicketDoor_01.addComponent(
  new utils.ToggleComponent(utils.ToggleState.Off, value => {
    if (value == utils.ToggleState.On) {
      log("Open")
    } 
    else {
      log("Close")
    }
  })
)
```

## Click behaviors

So far nothing happens when you click on the door and we want it to switch states when clicked. We’ll add an ```OnClick``` component to the door with a function that toggles between the states each time it’s clicked.

```ts
// Listen for click on the door and toggle its state
fencePicketDoor_01.addComponent(new OnClick(event=>{
  fencePicketDoor_01.getComponent(utils.ToggleComponent).toggle()
}))
```

The function that’s executed by the ```OnClick``` component changes the ```ToggleState``` back and forth between ```On``` and ```Off```. Although you won’t be able to see any changes happening visually in the scene, if you open up your browser’s console you should see messages alternating between ```Open``` and ```Close``` every time you click on the door.

_TIP: Accessing the browser’s console varies between browsers, for Chrome you use the keyboard shortcut_ <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>J</kbd> _(on Windows) or_ <kbd>CTRL</kbd> + <kbd>OPTION</kbd> + <kbd>J</kbd> _(on Mac)_

## Rotating the doors

It's worth noting that the door has already been rotated by ```-90``` degrees in the y-axis when it was originally placed inside the Builder. Earlier we converted the ```Quaternion``` values for the rotation to its ```Euler``` equivalent, which now becomes our starting rotation. For our end rotation, we will need to rotate by another ```-90``` degrees so that it opens inwards making its final y-axis value ```-180``` degrees. Let’s define a couple of variables to reflect these values and we’ll call them ```startRot``` and ```endRot```.

```ts
// Define start and end rotations for the door
let startRot = Quaternion.Euler(0, -90, 0)
let endRot = Quaternion.Euler(0, -180, 0)
```

To help us rotate the door we’re going to be using another component from the Utils library called ```RotateTransformComponent```, which lets us rotate an entity over a period of time from one orientation to another.

The ```RotateTransformComponent``` takes in three arguments:

* ```start```: ```Quaternion``` for the start rotation
* ```end```: ```Quaternion``` for the end rotation
* ```duration```: duration (in seconds) of the rotation 
  
We can now delete the ```log``` statements that were used as placeholders and instead have the ```ToggleComponent``` add the appropriate ```RotateTransformComponent``` to the door each time it changes state. When the door opens, we set the start and end rotation arguments as expected with our ```startRot``` and ```endRot``` but when the door closes, the order is reversed, meaning our ```endRot``` is now our starting rotation and the ```startRot``` is our end rotation.

```ts
// Toggle door to its open / close positions
fencePicketDoor_01.addComponent(
  new utils.ToggleComponent(utils.ToggleState.Off, value => {
    if (value == utils.ToggleState.On) {
      fencePicketDoor_01.addComponentOrReplace(
        new utils.RotateTransformComponent(startRot, endRot, 0.5)
      )
    } 
    else {
      fencePicketDoor_01.addComponentOrReplace(
        new utils.RotateTransformComponent(endRot, startRot, 0.5)
      )
    }
  })
)
```

Here we went with a ```0.5``` second duration for the opening and closing of the door, which feels fairly snappy but I encourage you to play around with these values so that you can choose whatever feels right to you.

## Finishing touches

You may have spotted a slight issue when you tried to click on the door before it's finished rotating. Instead of smoothly transitioning between the opened and closed states, it snaps to a position before rotating again. A simple fix is to only allow the user to click on the door after it has finished rotating, which can be done by comparing the door's y-axis rotation to see if it matches either ```startRot``` or ```endRot```.

_TIP: It’s sometimes useful to add an intermediate variable, although not necessary it can help shorten your code as well as making it more readable._

```ts
// Listen for click on the door and toggle its state
fencePicketDoor_01.addComponent(
  new OnClick(event => {
    // Adding an intermediate variable
    let doorRotY = fencePicketDoor_01.getComponent(Transform).rotation.y

    // Check if door is at its start or end positions before toggling
    if (doorRotY == startRot.y || doorRotY == endRot.y)
      fencePicketDoor_01.getComponent(utils.ToggleComponent).toggle()
  })
)
```

## Final thoughts

Try running the scene, everything should now be working as intended. If you were just reading along and would like to explore the scene then you can find it [here](https://explorer.decentraland.org/?position=-149%2C-146).

![screenshot](https://github.com/takJohn/pavilion-stone-fountain-door-guide/blob/master/screenshots/pavilion-stone-fountain-end-screen-cropped.jpg)

Using the Builder to navigate around and position items in your scene is a lot more intuitive than doing it purely by code. Hopefully this guide has shown you the possibilities when they are used together and how even a little interactivity can go a long way in adding interest to your scene. In the near future, Builder assets will be optimized to load more quickly inside of Decentraland, which provides another added benefit to those that wish to develop their scenes in conjunction with the Builder. 

## References

- Decentraland's Builder (https://builder.decentraland.org/)
- Decentraland's Utils library (https://github.com/decentraland/decentraland-ecs-utils)
- Installation guide for Decentraland's CLI and SDK (https://docs.decentraland.org/getting-started/installation-guide/)
- Setting entity positions (https://docs.decentraland.org/development-guide/entity-positioning/)
- Documentation for Decentraland's SDK (https://docs.decentraland.org)

## Copyright info

This scene is protected with a standard Apache 2 licence. See the terms and conditions in the [LICENSE](/LICENSE) file.