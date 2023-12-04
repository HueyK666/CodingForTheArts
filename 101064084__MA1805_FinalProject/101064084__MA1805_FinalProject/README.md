# MA1805 BeltCollector

# Core theme
My project is a drop and catch game, based on Professional Wrestler Kenny Omega's (KO) 2019 run of winning world titles in different wrestling organisations across the USA, Japan and Mexico. 

# Objective
The objective of the game is to collect at least 10 belts in order to unlock the winning screen(first below). If not, the player is met with the losing screen(second below). The game ends when the player is unable to intercept a falling belt. !
![Alt text](WinScreen.jpg)
[Alt text](LoseScreen.PNG)

# Influences
Having recently watched a documentary, chronicaling KO's historic 'Belt Collector' Run and enjoying reliving it so much, it has acted as the inspiration for my game. KO is himself an avid gamer and bases much of his aesthetic for entrances and attire around his love of video games. His finishing move is called the One Winged Angel and he recently made entrances in Japan dressed as Sephiroth from the Final Fantasy series. I found the idea of marking KO's run as the Belt Collector using a video game to be fitting. 

I have played similar games online before, may years ago. The most recent example that springs to mind is actually a mini-game in Super Mario Party for the Nintento Switch - called Coin Collector. Where players compete to catch the highest number of coins in their basket as they fall from the ceiling. This style also calls to mind the Atari 2600 classic game Breakout from 1976. again the idea is to prevent the object that is falling down the screen from disappearing out of the bottom of frame.

Documentary Link: https://www.youtube.com/watch?v=otlINjs1Rz0

# Aesthetics
The Start screen is an image of KO wearing just one of his many titles from the time period. It will include the game title, KO's Logo and a click to begin prompt. I will load a ttf. 8bit font style. This matches a lot of KO's merchandise and speaks to his own love of gaming. during gameplay, I will use triangles that 'flash' to give an idea of the light show seen in KO's entrance. I have an 8bit recreation of his entrance theme Battler Cry - '<audio src="BattleCry8bit.mp3" controls title="Title"></audio>' - that I want to play on a loop from when the page loads. I have PNG files of belts that KO won during this time, and will put them into an array. I will then have a belt image be chosen at random to fall from the top of screen. I would like the belt images to spin as they fall also to make the game feel more dynamic.

 As mentioned earlier, the success parameter of collecting 10 or more belts will trigger either a losing or winning screen. Both offering the chance to play again.


# Mechanics
The player can move the 'catcher' image of KO across the X axis the bottom of the screen. each belt intercepted will add 1 to the score in the top left of the canvas. 


## Author 
Thomas Jeffries
