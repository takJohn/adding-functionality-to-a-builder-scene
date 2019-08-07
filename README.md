# Pavilion Stone Fountain - Door Guide

_A screenshot of the scene inside Decentraland._

![screenshot](https://github.com/takJohn/kabloon-farm/blob/master/screenshots/pavilion-stone-fountain-screen.jpg)

Please feel free to explore the scene [here](https://explorer.decentraland.org/?position=-149%2C-146).

## Description

This is my entry for Decentraland's hackathon that took place over a three-week period at the beginning of June 2019. It's a pick up and play first-person shooter game built using Decentraland's SDK version 6.1.0. If you would like to learn more about Decentraland then please visit their [website](https://decentraland.org/).

## Previewing the scene

Download and install the Decentraland CLI - please read this [installation guide](https://docs.decentraland.org/getting-started/installation-guide/) for further details.

```
npm i -g decentraland
```

Clone this repository.

```
$ git clone https://github.com/takJohn/kabloon-farm.git
```

Change to the directory of the cloned repository.

```
$ cd kabloon-farm
```

Install the required dependencies and preview the scene.

```
$ dcl start
```

This will automatically open up your browser and direct it to your localhost address. You may need to refresh the page if you're not seeing the correct preview.

NOTE: It's recommended that you play the game using either Chrome or Firefox.

## Your objective

The mission is to protect your farm from the onslaught of eggs being dropped from above by evil chicks flying in their hot air balloons. Armed with a trusty rifle, your goal is to shoot the eggs before they reach your crops. The game ends when any one of your vegetable patches is destroyed and points are scored with each egg you shoot down but beware - the higher your score, the more difficult the game gets...

## Step-by-step guide

Aim and shoot using your mouse, clicking either mouse button will fire the gun. Movement is handled using the keyboard by pressing <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> keys to move forward, left, backward and right respectively.

1. To start the game, head towards the windmill and pick up the rifle that's on the shelf inside. The gun will automatically be picked up once you get near enough to it.
2. You'll then hear an air raid siren go off, signalling that the game is about to begin. Step outside to get ready.
3. The chicks will start dropping eggs from the sky so start firing at any eggs before they land and explode, causing damage to your crops.
4. Scoring for shooting down an egg is as follows: 
   - 10pts for an ORANGE egg
   - 30pts for a MAGENTA egg
   - 50pts for a CYAN egg
5. To reload the rifle, pick up the ammo box that's located at the centre of the room inside the windmill. The ammo box will automatically be picked up once you move over it.
6. Note that it will only allow you to pick up the ammo box when you're not fully stocked and each reload gives you six rounds.
7. The game continues until any single sweetcorn patch is destroyed.
8. A sweetcorn patch has three lives so to speak and you can see how many lives it has remaining by the number of sweetcorns that's left on it.
9. The falling speed of the eggs increases by ten percent each time a target score is reached, which starts at 250pts and doubles each time the threshold is met.
10. The windmill's blade spins faster as the game difficulty increases.
11. At the end of the game, your rifle will return back to the shelf and the sweetcorns will regrow again ready for the next game.
12. Pick up the rifle to play again.

_TIPS: use the windmill as your reference point when looking up and taking aim. Also open up your browser console and dock it at the bottom, especially if you're playing the Babylon version of the game as it lets you see some useful logs as well as increasing your field of vision._

## Acknowledgements

- [Music](http://soundimage.org/) by Eric Matyas.
- All sound effects are taken from [freesound.org](https://freesound.org/).
- Sections of the code were taken from Juan Cazala's [Mana Altar](https://github.com/cazala/mana-altar) scene.
- Nico Earnshaw and the rest of the Decentraland team, you can find Nico's tutorials [here](https://decentraland.org/blog/tutorials).

## Future improvements

- Have a gun visible right in front of the camera so that it's clear that the gun has been picked up.
- With the gun visible, you can start adding gun fire and recoil effects to really give each shot the feeling of power.
- Chicks animations are looking rather robotic and could do with a better idle animation.
- Add glows to the gun and ammo pack to indicate that they're interactive items.
- Allow players to move up between the floors of the windmill, perhaps even allowing them to break the glass and shoot out the windows.
- Include a top down mini map that shows which sweetcorn patch is in danger as sometimes it's not clear which patch was destroyed.
- Add a combo system so that the more eggs you destroy without your crops taking damage, the more bonus points you receive.
- More weapons, perhaps even respawning a rocket launcher that can disable a balloon temporarily.
- A cooperative mode could be interesting.
- Start accepting mana payments to play the game. A smart contract can then be used to keep track of who holds the highest score and reward them with a share of the game's revenue over the course of a one month period.

## Copyright info

This scene is protected with a standard Apache 2 licence. See the terms and conditions in the [LICENSE](/LICENSE) file.
