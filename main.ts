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
        if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
            mySprite.vy += -200
        }
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    menu(1)
})
function Startup () {
    info.setScore(0)
    currentLevel = 1
    currentTilemap = tilemap`Menu`
    menu(1)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Start Teleporter`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`Start`)
    for (let value of tiles.getTilesByType(assets.tile`Clamed Star`)) {
        tiles.setTileAt(value, assets.tile`Star`)
    }
    info.setScore(previousStar)
})
function levelList () {
    menuIn = -1
    previousStar = info.score()
    if (currentLevel == 1) {
        tiles.setCurrentTilemap(tilemap`Level 1`)
    } else {
        game.gameOver(true)
    }
    controller.moveSprite(mySprite, 0, 0)
    tiles.placeOnRandomTile(mySprite, assets.tile`Start`)
}
let previousStar = 0
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
            mySprite.setImage(assets.image`Icon 1`)
        } else if (mySprite.overlapsWith(Icon_2)) {
            mySprite.setImage(assets.image`Icon 2`)
        }
    }
})
forever(function () {
    if (menuIn == -1) {
        mySprite.ay = 600
        mySprite.vx = 100
    }
})
