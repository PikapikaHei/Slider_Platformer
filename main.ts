namespace SpriteKind {
    export const Menu = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Flag`, function (sprite, location) {
    currentLevel += 1
    levelList()
})
function menu (tilemap2: number) {
    if (tilemap2 >= 1) {
        if (tilemap2 == 1) {
            if (menuIn == 1) {
                sprites.destroy(Icon_1)
                sprites.destroy(Icon_2)
            }
            menuIn = 0
            Icon = sprites.create(assets.image`Icon`, SpriteKind.Menu)
            Level = sprites.create(assets.image`Level`, SpriteKind.Menu)
            tiles.setCurrentTilemap(tilemap`Menu`)
            tiles.placeOnTile(Icon, tiles.getTileLocation(1, 5))
            tiles.placeOnTile(Level, tiles.getTileLocation(5, 5))
        } else if (tilemap2 == 2) {
            if (menuIn == 0) {
                sprites.destroy(Icon)
                sprites.destroy(Level)
            }
            game.splash("Press menu to go back.")
            menuIn = 1
            tiles.setCurrentTilemap(tilemap`Icon Maker`)
            Icon_1 = sprites.create(assets.image`Icon 1`, SpriteKind.Menu)
            Icon_2 = sprites.create(assets.image`Icon 2`, SpriteKind.Menu)
            tiles.placeOnTile(Icon_1, tiles.getTileLocation(3, 1))
            tiles.placeOnTile(Icon_2, tiles.getTileLocation(5, 1))
        } else if (tilemap2 == 3) {
            if (menuIn == 0) {
                sprites.destroy(Icon)
                sprites.destroy(Level)
            }
            menuIn = 2
        }
        gravity = 0
        mySprite.vx = 0
        controller.moveSprite(mySprite, 100, 100)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 1))
        if (tilemap2 == 3) {
            levelList()
        }
    } else {
        controller.moveSprite(mySprite, 0, 0)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Star`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`Clamed Star`)
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (menuIn == -1) {
        if (follow == 0) {
            if (gravity >= 0) {
                if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
                    mySprite.vy = -200
                }
            } else {
                if (mySprite.isHittingTile(CollisionDirection.Top)) {
                    mySprite.vy = 200
                }
            }
        } else if (follow == 1) {
            if (gravity >= 0) {
                mySprite.vy = -100
            } else {
                mySprite.vy = 100
            }
        }
        if (mySprite.tileKindAt(TileDirection.Center, assets.tile`Jumper`)) {
            if (gravity >= 0) {
                mySprite.vy = -200
            } else {
                mySprite.vy = 200
            }
        } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`Gravity Up`)) {
            gravity = -600
            controller.moveSprite(mySprite, 0, 0)
        } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`Gravity Down`)) {
            gravity = 600
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Jumper Follow`, function (sprite, location) {
    follow = 1
    follows(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Gravity Up 1`, function (sprite, location) {
    gravity = -600
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Gravity Down 1`, function (sprite, location) {
    gravity = 600
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    info.setScore(previousStar)
    menu(1)
})
function Startup () {
    info.setScore(0)
    currentLevel = 1
    currentTilemap = tilemap`Menu`
    gravity = 600
    menu(1)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Start Teleporter`, function (sprite, location) {
    follow = 0
    gravity = 600
    follows(0)
    mySprite.vy = 0
    tiles.placeOnRandomTile(mySprite, assets.tile`Start`)
    for (let value of tiles.getTilesByType(assets.tile`Clamed Star`)) {
        tiles.setTileAt(value, assets.tile`Star`)
    }
    info.setScore(previousStar)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Normal`, function (sprite, location) {
    follow = 0
    follows(0)
})
function levelList () {
    gravity = 600
    menuIn = -1
    previousStar = info.score()
    if (currentLevel == 1) {
        tiles.setCurrentTilemap(tilemap`Level 1`)
    } else if (currentLevel == 2) {
        tiles.setCurrentTilemap(tilemap`Level 2`)
    } else if (currentLevel == 3) {
        tiles.setCurrentTilemap(tilemap`Level 3`)
    } else {
        game.gameOver(true)
    }
    controller.moveSprite(mySprite, 0, 0)
    tiles.placeOnRandomTile(mySprite, assets.tile`Start`)
}
function follows (_type: number) {
    if (_type == 0) {
        if (iconChoose == 0) {
            mySprite.setImage(assets.image`Icon 1`)
        } else if (iconChoose == 1) {
            mySprite.setImage(assets.image`Icon 2`)
        }
    } else if (_type == 1) {
        if (iconChoose == 0) {
            mySprite.setImage(assets.image`Icon 1 1`)
        } else if (iconChoose == 1) {
            mySprite.setImage(assets.image`Icon 2 2`)
        }
    }
}
let iconChoose = 0
let previousStar = 0
let follow = 0
let gravity = 0
let Level: Sprite = null
let Icon: Sprite = null
let Icon_2: Sprite = null
let Icon_1: Sprite = null
let menuIn = 0
let currentLevel = 0
let currentTilemap: tiles.TileMapData = null
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(assets.image`Icon 1`, SpriteKind.Player)
Startup()
tiles.setCurrentTilemap(currentTilemap)
scene.cameraFollowSprite(mySprite)
forever(function () {
    for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
        tiles.setWallAt(value, true)
    }
})
forever(function () {
    if (menuIn == 0) {
        if (mySprite.overlapsWith(Icon)) {
            menu(2)
        } else if (mySprite.overlapsWith(Level)) {
            menu(3)
        }
    } else if (menuIn == 1) {
        if (mySprite.overlapsWith(Icon_1)) {
            iconChoose = 0
            mySprite.setImage(assets.image`Icon 1`)
        } else if (mySprite.overlapsWith(Icon_2)) {
            iconChoose = 1
            mySprite.setImage(assets.image`Icon 2`)
        }
    }
})
forever(function () {
    if (menuIn == -1) {
        mySprite.ay = gravity
        mySprite.vx = 100
    }
})
