namespace SpriteKind {
    export const Menu = SpriteKind.create()
}
namespace StatusBarKind {
    export const Percentage = StatusBarKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Gravity Up 1`, function (sprite, location) {
    gravity = -600
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`INVIS SWI`, function (sprite, location) {
    swiRec += 1
    if (currentLevel == 5) {
        if (swiRec == 1) {
            battleSt = 1
            Boss = sprites.create(assets.image`Boss 1`, SpriteKind.Enemy)
            Boss.setFlag(SpriteFlag.GhostThroughWalls, true)
            tiles.placeOnTile(Boss, mySprite.tilemapLocation())
            Boss.x += 85
            Boss.vx = 100
            tiles.setTileAt(location, assets.tile`transparency16`)
            tmp4 = [
            105,
            106,
            112,
            113,
            121,
            122,
            127,
            128
            ]
            for (let value of tmp4) {
                for (let index = 0; index <= 3; index++) {
                    tiles.setTileAt(tiles.getTileLocation(value, index + 6), assets.tile`INVIS SWI`)
                }
            }
            tiles.setTileAt(tiles.getTileLocation(tmp4[2], 10), assets.tile`INVIS SWI`)
            tiles.setTileAt(tiles.getTileLocation(tmp4[3], 10), assets.tile`INVIS SWI`)
            tiles.setTileAt(tiles.getTileLocation(135, 14), assets.tile`INVIS SWI`)
            tiles.setTileAt(tiles.getTileLocation(180, 11), assets.tile`INVIS SWI`)
            tiles.setTileAt(tiles.getTileLocation(214, 6), assets.tile`INVIS SWI`)
        } else if (swiRec == 2) {
            tiles.setTileAt(tiles.getTileLocation(107, 7), assets.tile`Select`)
            tiles.setTileAt(tiles.getTileLocation(108, 7), assets.tile`Select`)
            for (let index = 0; index <= 3; index++) {
                tiles.setTileAt(tiles.getTileLocation(tmp4[0], index + 6), assets.tile`transparency16`)
            }
        } else if (swiRec == 3) {
            tiles.setTileAt(tiles.getTileLocation(107, 7), assets.tile`Start Teleporter`)
            tiles.setTileAt(tiles.getTileLocation(108, 7), assets.tile`Start Teleporter`)
            for (let index = 0; index <= 3; index++) {
                tiles.setTileAt(tiles.getTileLocation(tmp4[1], index + 6), assets.tile`transparency16`)
            }
        } else if (swiRec == 4) {
            tiles.setTileAt(tiles.getTileLocation(114, 8), assets.tile`Select`)
            tiles.setTileAt(tiles.getTileLocation(115, 8), assets.tile`Select`)
            for (let index = 0; index <= 4; index++) {
                tiles.setTileAt(tiles.getTileLocation(tmp4[2], index + 6), assets.tile`transparency16`)
            }
        } else if (swiRec == 5) {
            tiles.setTileAt(tiles.getTileLocation(114, 8), assets.tile`Start Teleporter`)
            tiles.setTileAt(tiles.getTileLocation(115, 8), assets.tile`Start Teleporter`)
            for (let index = 0; index <= 4; index++) {
                tiles.setTileAt(tiles.getTileLocation(tmp4[3], index + 6), assets.tile`transparency16`)
            }
        } else if (swiRec == 6) {
            tiles.setTileAt(tiles.getTileLocation(124, 7), assets.tile`Select`)
            tiles.setTileAt(tiles.getTileLocation(125, 7), assets.tile`Select`)
            for (let index = 0; index <= 3; index++) {
                tiles.setTileAt(tiles.getTileLocation(tmp4[4], index + 6), assets.tile`transparency16`)
            }
        } else if (swiRec == 7) {
            tiles.setTileAt(tiles.getTileLocation(124, 7), assets.tile`Start Teleporter`)
            tiles.setTileAt(tiles.getTileLocation(125, 7), assets.tile`Start Teleporter`)
            for (let index = 0; index <= 3; index++) {
                tiles.setTileAt(tiles.getTileLocation(tmp4[5], index + 6), assets.tile`transparency16`)
            }
        } else if (swiRec == 8) {
            tiles.setTileAt(tiles.getTileLocation(129, 8), assets.tile`Select`)
            tiles.setTileAt(tiles.getTileLocation(130, 8), assets.tile`Select`)
            for (let index = 0; index <= 3; index++) {
                tiles.setTileAt(tiles.getTileLocation(tmp4[6], index + 6), assets.tile`transparency16`)
            }
        } else if (swiRec == 9) {
            tiles.setTileAt(tiles.getTileLocation(129, 8), assets.tile`Start Teleporter`)
            tiles.setTileAt(tiles.getTileLocation(130, 8), assets.tile`Start Teleporter`)
            for (let index = 0; index <= 3; index++) {
                tiles.setTileAt(tiles.getTileLocation(tmp4[7], index + 6), assets.tile`transparency16`)
            }
        } else if (swiRec == 10) {
            battleSt = 0
            sprites.destroy(Boss)
            tiles.setTileAt(tiles.getTileLocation(135, 14), assets.tile`transparency16`)
        } else if (swiRec == 11) {
            battleSt = 1
            Boss = sprites.create(assets.image`Boss 1`, SpriteKind.Enemy)
            tiles.placeOnTile(Boss, mySprite.tilemapLocation())
            Boss.x += 50
            Boss.vx = 100
            tiles.setTileAt(tiles.getTileLocation(180, 11), assets.tile`transparency16`)
        } else if (swiRec == 12) {
            battleSt = 0
            sprites.destroy(Boss, effects.fire, 1000)
            tiles.setTileAt(tiles.getTileLocation(214, 6), assets.tile`transparency16`)
        }
    } else if (currentLevel == 6) {
        if (swiRec == 1) {
            for (let index = 0; index <= 3; index++) {
                tiles.setTileAt(tiles.getTileLocation(245, index + 4), assets.tile`transparency16`)
            }
            if (follow == 2) {
                tiles.setTileAt(tiles.getTileLocation(252, 5), assets.tile`Star`)
            }
        }
    }
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
        } else if (follow == 2) {
            if (gravity >= 0) {
                gravity = -600
            } else {
                gravity = 600
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
        } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`Force Jumper`)) {
            if (gravity >= 0) {
                gravity = -600
                mySprite.vy = -3000
            } else {
                gravity = 600
                mySprite.vy = 3000
            }
        } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`In Teleport0`)) {
            for (let index = 0; index <= 16; index++) {
                if (tiles.tileAtLocationEquals(tiles.getTileLocation(Math.ceil(mySprite.x / 16), index), assets.tile`Out Teleport`)) {
                    tiles.placeOnTile(mySprite, tiles.getTileLocation(Math.ceil(mySprite.x / 16), index))
                    break;
                } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(Math.floor(mySprite.x / 16), index), assets.tile`Out Teleport`)) {
                    tiles.placeOnTile(mySprite, tiles.getTileLocation(Math.floor(mySprite.x / 16), index))
                    break;
                }
            }
            if (gravity >= 0) {
                gravity = -600
            } else {
                gravity = 600
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Gravity Down 1`, function (sprite, location) {
    gravity = 600
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Flag`, function (sprite, location) {
    currentLevel += 1
    levelList()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Star`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`Clamed Star`)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Normal`, function (sprite, location) {
    follow = 0
    follows(0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Jumper Follow`, function (sprite, location) {
    follow = 1
    follows(1)
})
function statusbars2 () {
    statusbar = statusbars.create(102, 6, StatusBarKind.Percentage)
    statusbar.setColor(7, 1)
    statusbar.setBarBorder(1, 8)
    statusbar.setLabel("0%", 8)
    statusbar.positionDirection(CollisionDirection.Top)
}
function Startup () {
    swiRec = 0
    info.setScore(0)
    currentLevel = 1
    currentTilemap = tilemap`Menu`
    gravity = 600
    speed = 1
    x = -1
    y = -1
    savedFollow = -1
    menu(1)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Fol 2`, function (sprite, location) {
    follow = 2
    follows(2)
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    x = mySprite.x
    y = mySprite.y
    savedFollow = follow
    menu(1)
})
function levelList () {
    battleSt = 0
    swiRec = 0
    gravity = 600
    menuIn = -1
    previousStar = info.score()
    if (currentLevel == 1) {
        tiles.setCurrentTilemap(tilemap`Level 1`)
    } else if (currentLevel == 2) {
        tiles.setCurrentTilemap(tilemap`Level 2`)
    } else if (currentLevel == 3) {
        tiles.setCurrentTilemap(tilemap`Level 3`)
    } else if (currentLevel == 4) {
        tiles.setCurrentTilemap(tilemap`Level 4`)
    } else if (currentLevel == 5) {
        tiles.setCurrentTilemap(tilemap`Level 5`)
    } else if (currentLevel == 6) {
        tiles.setCurrentTilemap(tilemap`Level 6`)
    } else {
        game.gameOver(true)
    }
    controller.moveSprite(mySprite, 0, 0)
    tiles.placeOnRandomTile(mySprite, assets.tile`Start`)
    if (x != -1) {
        mySprite.x = x
    }
    if (y != -1) {
        mySprite.y = y
    }
    if (savedFollow != -1) {
        follow = savedFollow
    }
    x = -1
    y = -1
    savedFollow = -1
    follows(follow)
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
    } else if (_type == 2) {
        if (iconChoose == 0) {
            mySprite.setImage(assets.image`Icon 1 2`)
        } else if (iconChoose == 1) {
            mySprite.setImage(assets.image`Icon 2 22`)
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Start Teleporter`, function (sprite, location) {
    follow = 0
    gravity = 600
    swiRec = 0
    follows(0)
    mySprite.vy = 0
    tiles.placeOnRandomTile(mySprite, assets.tile`Start`)
    for (let value of tiles.getTilesByType(assets.tile`Clamed Star`)) {
        tiles.setTileAt(value, assets.tile`Star`)
    }
    info.setScore(previousStar)
    if (currentLevel == 5) {
        tiles.setTileAt(tiles.getTileLocation(88, 12), assets.tile`INVIS SWI`)
    } else if (currentLevel == 6) {
        for (let index = 0; index <= 3; index++) {
            tiles.setTileAt(tiles.getTileLocation(245, index + 4), assets.tile`INVIS SWI`)
        }
    }
    if (battleSt == 1) {
        sprites.destroy(Boss)
        battleSt = 0
    }
})
let iconChoose = 0
let previousStar = 0
let savedFollow = 0
let y = 0
let x = 0
let speed = 0
let statusbar: StatusBarSprite = null
let follow = 0
let tmp4: number[] = []
let Boss: Sprite = null
let battleSt = 0
let currentLevel = 0
let swiRec = 0
let Level: Sprite = null
let Icon: Sprite = null
let Icon_2: Sprite = null
let Icon_1: Sprite = null
let menuIn = 0
let gravity = 0
let currentTilemap: tiles.TileMapData = null
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(assets.image`Icon 1`, SpriteKind.Player)
Startup()
tiles.setCurrentTilemap(currentTilemap)
scene.cameraFollowSprite(mySprite)
forever(function () {
    if (menuIn == -1) {
        mySprite.ay = gravity
        mySprite.vx = 100 * speed
    }
})
forever(function () {
    for (let value2 of tiles.getTilesByType(assets.tile`myTile`)) {
        tiles.setWallAt(value2, true)
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
    if (battleSt == 1) {
        Boss.y = mySprite.y
    }
})
