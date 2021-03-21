enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const fesprit = SpriteKind.create()
    export const boo = SpriteKind.create()
    export const bouh = SpriteKind.create()
    export const trucnoir = SpriteKind.create()
    export const bowser = SpriteKind.create()
    export const fleur = SpriteKind.create()
    export const coin = SpriteKind.create()
    export const champ1up = SpriteKind.create()
    export const gumpa = SpriteKind.create()
    export const bdf = SpriteKind.create()
    export const koopa = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile28`, function (sprite, location) {
    info.changeScoreBy(1)
    currentlvl += 1
    spawn = "lvl"
    startlvl()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile62`, function (sprite, location) {
    tiles.setTilemap(tilemap`level3`)
    for (let value of tiles.getTilesByType(assets.tile`tile46`)) {
        tiles.setTileAt(value, assets.tile`tile0`)
    }
})
function startbonus2 () {
    tiles.setTilemap(tilemap`level5`)
    tiles.placeOnRandomTile(mario, assets.tile`tile1`)
    scene.cameraFollowSprite(mario)
    for (let value of tiles.getTilesByType(assets.tile`tile1`)) {
        tiles.setTileAt(value, assets.tile`tile0`)
    }
    for (let value of sprites.allOfKind(SpriteKind.fesprit)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.bouh)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.trucnoir)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.fleur)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.coin)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.gumpa)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.koopa)) {
        value.destroy()
    }
    for (let value of tiles.getTilesByType(assets.tile`tile53`)) {
        coin = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 1 1 1 1 5 5 f . . . . . 
            . . f 1 5 5 5 5 5 5 5 f . . . . 
            . f 1 5 5 1 1 1 f 5 5 5 f . . . 
            . f 1 5 5 1 5 5 f 5 5 5 f . . . 
            . f 1 5 5 1 5 5 f 5 5 5 f . . . 
            . f 1 5 5 1 5 5 f 5 5 5 f . . . 
            . f 1 5 5 1 5 5 f 5 5 5 f . . . 
            . f 1 5 5 1 5 5 f 5 5 5 f . . . 
            . f 1 5 5 1 f f f 5 5 5 f . . . 
            . . f 1 5 5 5 5 5 5 5 f . . . . 
            . . . f 1 1 5 5 5 5 f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.coin)
        tiles.placeOnTile(coin, value)
        tiles.setTileAt(value, assets.tile`tile0`)
        animation.runImageAnimation(
        coin,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 1 1 1 1 5 5 f . . . . . 
            . . f 1 5 5 5 5 5 5 5 f . . . . 
            . f 1 5 5 1 1 1 f 5 5 5 f . . . 
            . f 1 5 5 1 5 5 f 5 5 5 f . . . 
            . f 1 5 5 1 5 5 f 5 5 5 f . . . 
            . f 1 5 5 1 5 5 f 5 5 5 f . . . 
            . f 1 5 5 1 5 5 f 5 5 5 f . . . 
            . f 1 5 5 1 5 5 f 5 5 5 f . . . 
            . f 1 5 5 1 f f f 5 5 5 f . . . 
            . . f 1 5 5 5 5 5 5 5 f . . . . 
            . . . f 1 1 5 5 5 5 f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . . f 1 1 1 5 f . . . . . . 
            . . . f 1 5 5 5 5 5 f . . . . . 
            . . f 1 5 1 1 1 f 5 5 f . . . . 
            . . f 1 5 1 5 5 f 5 5 f . . . . 
            . . f 1 5 1 5 5 f 5 5 f . . . . 
            . . f 1 5 1 5 5 f 5 5 f . . . . 
            . . f 1 5 1 5 5 f 5 5 f . . . . 
            . . f 1 5 1 5 5 f 5 5 f . . . . 
            . . f 1 5 1 f f f 5 5 f . . . . 
            . . . f 1 5 5 5 5 5 f . . . . . 
            . . . . f 1 5 5 5 f . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . f 1 1 f . . . . . . . 
            . . . . f 1 5 5 5 f . . . . . . 
            . . . f 1 5 1 1 f 5 f . . . . . 
            . . . f 1 5 1 5 f 5 f . . . . . 
            . . . f 1 5 1 5 f 5 f . . . . . 
            . . . f 1 5 1 5 f 5 f . . . . . 
            . . . f 1 5 1 5 f 5 f . . . . . 
            . . . f 1 5 1 5 f 5 f . . . . . 
            . . . f 1 5 1 f f 5 f . . . . . 
            . . . . f 1 5 5 5 f . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . f 1 5 5 5 f . . . . . . 
            . . . . f 1 1 f 5 f . . . . . . 
            . . . . f 1 1 f 5 f . . . . . . 
            . . . . f 1 1 f 5 f . . . . . . 
            . . . . f 1 1 f 5 f . . . . . . 
            . . . . f 1 1 f 5 f . . . . . . 
            . . . . f 1 1 f 5 f . . . . . . 
            . . . . f 1 1 f 5 f . . . . . . 
            . . . . f 1 5 5 5 f . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . f 1 5 5 5 f . . . . . . 
            . . . . f 1 1 f 5 f . . . . . . 
            . . . . f 1 1 f 5 f . . . . . . 
            . . . . f 1 1 f 5 f . . . . . . 
            . . . . f 1 1 f 5 f . . . . . . 
            . . . . f 1 1 f 5 f . . . . . . 
            . . . . f 1 1 f 5 f . . . . . . 
            . . . . f 1 1 f 5 f . . . . . . 
            . . . . f 1 5 5 5 f . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . f 1 1 f . . . . . . . 
            . . . . f 1 5 5 5 f . . . . . . 
            . . . f 1 5 1 1 f 5 f . . . . . 
            . . . f 1 5 1 5 f 5 f . . . . . 
            . . . f 1 5 1 5 f 5 f . . . . . 
            . . . f 1 5 1 5 f 5 f . . . . . 
            . . . f 1 5 1 5 f 5 f . . . . . 
            . . . f 1 5 1 5 f 5 f . . . . . 
            . . . f 1 5 1 f f 5 f . . . . . 
            . . . . f 1 5 5 5 f . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . . f 1 1 1 5 f . . . . . . 
            . . . f 1 5 5 5 5 5 f . . . . . 
            . . f 1 5 1 1 1 f 5 5 f . . . . 
            . . f 1 5 1 5 5 f 5 5 f . . . . 
            . . f 1 5 1 5 5 f 5 5 f . . . . 
            . . f 1 5 1 5 5 f 5 5 f . . . . 
            . . f 1 5 1 5 5 f 5 5 f . . . . 
            . . f 1 5 1 5 5 f 5 5 f . . . . 
            . . f 1 5 1 f f f 5 5 f . . . . 
            . . . f 1 5 5 5 5 5 f . . . . . 
            . . . . f 1 5 5 5 f . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
    }
    for (let value of tiles.getTilesByType(assets.tile`tile61`)) {
        champi_1up = sprites.create(img`
            . . . . . f f f f f f . . . . . 
            . . . f f f 1 7 7 1 f f f . . . 
            . . f f 1 1 1 7 7 1 1 1 f f . . 
            . f f 7 1 1 7 7 7 7 1 1 7 f f . 
            . f 1 7 7 7 7 7 7 7 7 7 7 1 f . 
            f f 1 1 7 7 1 1 1 1 7 7 1 1 f f 
            f 1 1 1 7 1 1 1 1 1 1 7 1 1 1 f 
            f 1 1 1 7 1 1 1 1 1 1 7 1 1 1 f 
            f 1 1 1 7 1 1 1 1 1 1 7 1 1 1 f 
            f 7 7 7 7 7 1 1 1 1 7 7 7 7 7 f 
            f 7 7 f f f f f f f f f f 7 7 f 
            f f f f 1 1 f 1 1 f 1 1 f f f f 
            . f f 1 1 1 f 1 1 f 1 1 1 f f . 
            . . f 1 1 1 1 1 1 1 1 1 1 f . . 
            . . f f 1 1 1 1 1 1 1 1 f f . . 
            . . . f f f f f f f f f f . . . 
            `, SpriteKind.champ1up)
        tiles.placeOnTile(champi_1up, value)
        tiles.setTileAt(value, assets.tile`tile0`)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mario.vy == 0) {
        mario.vy = -190
    }
    if (lastDirection == 0) {
        animation.runImageAnimation(
        mario,
        [img`
            ....................
            ....................
            ....................
            ........222222.111..
            .......22222222211..
            .......fffdddfd222..
            ......fdfddddfddd2..
            ......fdffddddfddd..
            ......ffdddddffff...
            .......dddddddd22...
            1112222822222822..e.
            111222228222228..ee.
            .1..2222888888588ee.
            .....888858888888ee.
            ...ee888888888888ee.
            ..eee8888888........
            ..ee................
            ....................
            ....................
            ....................
            `,img`
            ....................
            ....................
            ....................
            ........222222......
            .......222222222....
            .......fffdddfd222..
            ......fdfddddfddd...
            ......fdffddddfddd..
            ......ffdddddffff...
            .......dddddddd.....
            ......22822822......
            .....2228228222.....
            ....222288882222....
            ....112858858211....
            ....111888888111....
            ....118888888811....
            ......888..888......
            .....eee....eee.....
            ....eeee....eeee....
            ....................
            `],
        350,
        false
        )
    }
    if (lastDirection == 1) {
        animation.runImageAnimation(
        mario,
        [img`
            ....................
            ....................
            ....................
            ..111.222222........
            ..11222222222.......
            ..222dfdddfff.......
            ..2dddfddddfdf......
            ..dddfddddffdf......
            ...ffffdddddff......
            ...22dddddddd.......
            .e..2282222282222111
            .ee..822222822222111
            .ee8858888882222..1.
            .ee888888858888.....
            .ee888888888888ee...
            ........8888888eee..
            ................ee..
            ....................
            ....................
            ....................
            `,img`
            ....................
            ....................
            ....................
            ......222222........
            ....222222222.......
            ..222dfdddfff.......
            ...dddfddddfdf......
            ..dddfddddffdf......
            ...ffffdddddff......
            .....dddddddd.......
            ......22822822......
            .....2228228222.....
            ....222288882222....
            ....112858858211....
            ....111888888111....
            ....118888888811....
            ......888..888......
            .....eee....eee.....
            ....eeee....eeee....
            ....................
            `],
        350,
        false
        )
    }
})
scene.onHitWall(SpriteKind.bdf, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile38`, function (sprite, location) {
    if (controller.up.isPressed()) {
        spawn = "lvl"
        startbowser()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.champ1up, function (sprite, otherSprite) {
    otherSprite.destroy(effects.hearts, 300)
    info.changeLifeBy(1)
})
function walk () {
    if (lastDirection == 0) {
        animation.runImageAnimation(
        mario,
        [img`
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . 2 2 2 2 2 2 2 2 . . . 
            . . . . f f f d d f d . . . . . 
            . . . f d f d d d f d d d . . . 
            . . . f d f f d d d f d d d . . 
            . . . f f d d d d f f f f . . . 
            . . . . . d d d d d d d . . . . 
            . . . . . . 2 2 8 8 2 . . . . . 
            . . . . . 2 2 2 2 8 2 1 1 . . . 
            . . . 1 1 2 2 2 2 2 2 1 1 1 . . 
            . . 1 1 1 8 2 2 2 2 2 1 1 . . . 
            . . . e e 8 8 8 8 8 8 8 . . . . 
            . . . e 8 8 8 8 8 8 8 8 . . . . 
            . . e e 8 8 . . 8 8 8 . . . . . 
            . . e . . . . e e e . . . . . . 
            . . . . . . . . e e e . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 . . . . . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . f f f d d f d . . . . . . . 
            . f d f d d d f d d d . . . . . 
            . f d f f d d d f d d d . . . . 
            . f f d d d d f f f f . . . . . 
            . . . d d d d d d d . . . . . . 
            . . 2 2 8 2 2 . . . . . . . . . 
            . 2 2 2 8 8 2 2 . . . . . . . . 
            . 2 2 8 8 5 8 8 . . . . . . . . 
            . 2 2 2 8 8 8 8 . . . . . . . . 
            . 8 2 1 1 8 8 8 . . . . . . . . 
            . . 8 1 1 8 8 . . . . . . . . . 
            . . . 8 8 8 e e e . . . . . . . 
            . . . e e e e . . . . . . . . . 
            `,img`
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . 2 2 2 2 2 2 2 2 . . . 
            . . . . f f f d d f d . . . . . 
            . . . f d f d d d f d d d . . . 
            . . . f d f f d d d f d d d . . 
            . . . f f d d d d f f f f . . . 
            . . . . . d d d d d d d . . . . 
            . . 2 2 2 2 8 2 2 2 8 . . . . . 
            1 1 2 2 2 2 8 8 2 2 2 8 2 1 1 1 
            1 1 1 . 2 2 8 8 8 8 8 8 2 2 1 1 
            1 1 . . 8 8 8 5 8 8 8 5 . . e . 
            . . . 8 8 8 8 8 8 8 8 8 8 e e . 
            . . 8 8 8 8 8 8 8 8 8 8 8 e e . 
            . e e 8 8 8 . . . 8 8 8 8 e e . 
            . e e e . . . . . . . . . . . . 
            . . e e e . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 . . . . . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . f f f d d f d . . . . . . . 
            . f d f d d d f d d d . . . . . 
            . f d f f d d d f d d d . . . . 
            . f f d d d d f f f f . . . . . 
            . . . d d d d d d d . . . . . . 
            . . 2 2 8 2 2 . . . . . . . . . 
            . 2 2 2 8 8 2 2 . . . . . . . . 
            . 2 2 8 8 5 8 8 . . . . . . . . 
            . 2 2 2 8 8 8 8 . . . . . . . . 
            . 8 2 1 1 8 8 8 . . . . . . . . 
            . . 8 1 1 8 8 . . . . . . . . . 
            . . . 8 8 8 e e e . . . . . . . 
            . . . e e e e . . . . . . . . . 
            `],
        100,
        true
        )
    } else if (lastDirection == 1) {
        animation.runImageAnimation(
        mario,
        [img`
            . . . . . . 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . . . . d f d d f f f . . . . 
            . . . d d d f d d d f d f . . . 
            . . d d d f d d d f f d f . . . 
            . . . f f f f d d d d f f . . . 
            . . . . d d d d d d d . . . . . 
            . . . . . 2 8 8 2 2 . . . . . . 
            . . . 1 1 2 8 2 2 2 2 . . . . . 
            . . 1 1 1 2 2 2 2 2 2 1 1 . . . 
            . . . 1 1 2 2 2 2 2 8 1 1 1 . . 
            . . . . 8 8 8 8 8 8 8 e e . . . 
            . . . . 8 8 8 8 8 8 8 8 e . . . 
            . . . . . 8 8 8 . . 8 8 e e . . 
            . . . . . . e e e . . . . e . . 
            . . . . . e e e . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 2 2 2 2 . . . . 
            . . . . . 2 2 2 2 2 2 2 2 . . . 
            . . . . . . . d f d d f f f . . 
            . . . . . d d d f d d d f d f . 
            . . . . d d d f d d d f f d f . 
            . . . . . f f f f d d d d f f . 
            . . . . . . d d d d d d d . . . 
            . . . . . . . . . 2 2 8 2 2 . . 
            . . . . . . . . 2 2 8 8 2 2 2 . 
            . . . . . . . . 8 8 5 8 8 2 2 . 
            . . . . . . . . 8 8 8 8 2 2 2 . 
            . . . . . . . . 8 8 8 1 1 2 8 . 
            . . . . . . . . . 8 8 1 1 8 . . 
            . . . . . . . e e e 8 8 8 . . . 
            . . . . . . . . . e e e e . . . 
            `,img`
            . . . . . . 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . . . . d f d d f f f . . . . 
            . . . d d d f d d d f d f . . . 
            . . d d d f d d d f f d f . . . 
            . . . f f f f d d d d f f . . . 
            . . . . d d d d d d d . . . . . 
            . . . . . 8 2 2 2 8 2 2 2 2 . . 
            1 1 1 2 8 2 2 2 8 8 2 2 2 2 1 1 
            1 1 2 2 8 8 8 8 8 8 2 2 . 1 1 1 
            . e . . 5 8 8 8 5 8 8 8 . . 1 1 
            . e e 8 8 8 8 8 8 8 8 8 8 . . . 
            . e e 8 8 8 8 8 8 8 8 8 8 8 . . 
            . e e 8 8 8 8 . . . 8 8 8 e e . 
            . . . . . . . . . . . . e e e . 
            . . . . . . . . . . . e e e . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 2 2 2 2 . . . . 
            . . . . . 2 2 2 2 2 2 2 2 . . . 
            . . . . . . . d f d d f f f . . 
            . . . . . d d d f d d d f d f . 
            . . . . d d d f d d d f f d f . 
            . . . . . f f f f d d d d f f . 
            . . . . . . d d d d d d d . . . 
            . . . . . . . . . 2 2 8 2 2 . . 
            . . . . . . . . 2 2 8 8 2 2 2 . 
            . . . . . . . . 8 8 5 8 8 2 2 . 
            . . . . . . . . 8 8 8 8 2 2 2 . 
            . . . . . . . . 8 8 8 1 1 2 8 . 
            . . . . . . . . . 8 8 1 1 8 . . 
            . . . . . . . e e e 8 8 8 . . . 
            . . . . . . . . . e e e e . . . 
            `],
        100,
        true
        )
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    lastDirection = 1
    walk()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile3`, function (sprite, location) {
    game.over(false, effects.melt)
})
function startbowser () {
    tiles.setTilemap(tilemap`level2`)
    tiles.placeOnRandomTile(mario, assets.tile`tile1`)
    scene.cameraFollowSprite(mario)
    for (let value of tiles.getTilesByType(assets.tile`tile1`)) {
        tiles.setTileAt(value, assets.tile`tile0`)
    }
    for (let value of sprites.allOfKind(SpriteKind.fesprit)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.bouh)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.trucnoir)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.fleur)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.coin)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.gumpa)) {
        value.destroy()
    }
    for (let value of tiles.getTilesByType(assets.tile`tile46`)) {
        bowser = sprites.create(img`
            ...............f...f....................
            ..............f1f.f1f...................
            .............f144f11f...................
            ..........fff44ff111f.ff................
            .........f11fff1111fff11f...............
            .......ff1444f11111f441f................
            ......f144ff77f111f414f.................
            .......ff11f777fff44411ff...............
            ....ffff111f777777f444414f..............
            ...f444ff11f777777f4444444f.............
            ..f44444f1f77777777f4111f4f.............
            ..f444444f77ff77777f4441ff..............
            ..f4444444ff44f7777f14411f..............
            ...f14444444444f777ff14441f.............
            ...f1f114444444f77ffff44f4f.............
            ....ff11ff11f44fff111fff1f..............
            ......ffffff44ff111ff7711fffff..........
            .......ff4444ff111f77777777111f.........
            ......f44444fff11f771777777111f.........
            .......fffffff11f7711777777711f.........
            ............ff11f7777771117777f.........
            ...........f4f11f7777771117777f.........
            ...........f44f11ff777771177771f........
            ...........f17f1111f777777777711f.......
            .....fff...f777f111ff7777777777f........
            ....f144fff4f717f111f7117777777f........
            .....f4444444f77f111f7717711177f........
            .....f4444444f777f11ff7777111771f.......
            ....f444444444f17f111f777771177f........
            ...f1444444444f77f111ff77777777f........
            ....ff4444444ffffff111ff777777f.........
            .....f1444ffff..f4f11111ff777f..........
            ......ffff....ff444f111111fff1f.........
            ..............f44444f111111111ff........
            ..............f444444ff111111ff1f.......
            ..............f44444444fffffff11ff......
            ..............ff444444ff444444fff1f.....
            ............ff44444444fff44444444ff.....
            ...........f44444444444f.fff4444444f....
            ..........f444444444444f....fffffff.....
            ...........ffffffffffff.................
            `, SpriteKind.bowser)
        tiles.placeOnTile(bowser, value)
        tiles.setTileAt(value, assets.tile`tile0`)
        bowser.y += 3
        bowser.ay = 300
        bouseux = "vivant"
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.fesprit, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.fire, 200)
    mario.startEffect(effects.fire, 5000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bdf, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.fire, 200)
    mario.startEffect(effects.fire, 5000)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    lastDirection = 0
    walk()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    otherSprite.destroy(effects.halo, 100)
    music.magicWand.play()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.trucnoir, function (sprite, otherSprite) {
    otherSprite.destroy()
    bouh = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ......ffffff........
        ....ff111111ff......
        ...f11111111bbf.....
        ..f11111111111bf....
        ..f1f1f1111111bf....
        .f11f1f11111ff1bf...
        .f111111111f11fbf...
        .f121212111111fbf...
        .f12222211111f11bf..
        .f12222221111111bf..
        ..f121212111111bbf..
        ..f111111111bbbbf...
        ...f111111bbbfff....
        ....fffbbbbff.......
        .......ffff.........
        ....................
        `, SpriteKind.bouh)
    bouh.setPosition(mario.x + 60, mario.y - 60)
    bouh.follow(mario, 35)
    bouh.say("Bouahahahaha", 1500)
    nombrebouh += 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile30`, function (sprite, location) {
    info.changeScoreBy(10)
    currentlvl += 1
    spawn = "lvl"
    startlvl()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bowser, function (sprite, otherSprite) {
    game.over(false, effects.dissolve)
})
function startbonus1 () {
    tiles.setTilemap(tilemap`level4`)
    tiles.placeOnRandomTile(mario, assets.tile`tile1`)
    scene.cameraFollowSprite(mario)
    for (let value of tiles.getTilesByType(assets.tile`tile1`)) {
        tiles.setTileAt(value, assets.tile`tile0`)
    }
    for (let value of sprites.allOfKind(SpriteKind.fesprit)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.bouh)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.trucnoir)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.fleur)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.coin)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.gumpa)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.koopa)) {
        value.destroy()
    }
    for (let value of tiles.getTilesByType(assets.tile`tile53`)) {
        coin = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 1 1 1 1 5 5 f . . . . . 
            . . f 1 5 5 5 5 5 5 5 f . . . . 
            . f 1 5 5 1 1 1 f 5 5 5 f . . . 
            . f 1 5 5 1 5 5 f 5 5 5 f . . . 
            . f 1 5 5 1 5 5 f 5 5 5 f . . . 
            . f 1 5 5 1 5 5 f 5 5 5 f . . . 
            . f 1 5 5 1 5 5 f 5 5 5 f . . . 
            . f 1 5 5 1 5 5 f 5 5 5 f . . . 
            . f 1 5 5 1 f f f 5 5 5 f . . . 
            . . f 1 5 5 5 5 5 5 5 f . . . . 
            . . . f 1 1 5 5 5 5 f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.coin)
        tiles.placeOnTile(coin, value)
        tiles.setTileAt(value, assets.tile`tile0`)
        animation.runImageAnimation(
        coin,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 1 1 1 1 5 5 f . . . . . 
            . . f 1 5 5 5 5 5 5 5 f . . . . 
            . f 1 5 5 1 1 1 f 5 5 5 f . . . 
            . f 1 5 5 1 5 5 f 5 5 5 f . . . 
            . f 1 5 5 1 5 5 f 5 5 5 f . . . 
            . f 1 5 5 1 5 5 f 5 5 5 f . . . 
            . f 1 5 5 1 5 5 f 5 5 5 f . . . 
            . f 1 5 5 1 5 5 f 5 5 5 f . . . 
            . f 1 5 5 1 f f f 5 5 5 f . . . 
            . . f 1 5 5 5 5 5 5 5 f . . . . 
            . . . f 1 1 5 5 5 5 f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . . f 1 1 1 5 f . . . . . . 
            . . . f 1 5 5 5 5 5 f . . . . . 
            . . f 1 5 1 1 1 f 5 5 f . . . . 
            . . f 1 5 1 5 5 f 5 5 f . . . . 
            . . f 1 5 1 5 5 f 5 5 f . . . . 
            . . f 1 5 1 5 5 f 5 5 f . . . . 
            . . f 1 5 1 5 5 f 5 5 f . . . . 
            . . f 1 5 1 5 5 f 5 5 f . . . . 
            . . f 1 5 1 f f f 5 5 f . . . . 
            . . . f 1 5 5 5 5 5 f . . . . . 
            . . . . f 1 5 5 5 f . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . f 1 1 f . . . . . . . 
            . . . . f 1 5 5 5 f . . . . . . 
            . . . f 1 5 1 1 f 5 f . . . . . 
            . . . f 1 5 1 5 f 5 f . . . . . 
            . . . f 1 5 1 5 f 5 f . . . . . 
            . . . f 1 5 1 5 f 5 f . . . . . 
            . . . f 1 5 1 5 f 5 f . . . . . 
            . . . f 1 5 1 5 f 5 f . . . . . 
            . . . f 1 5 1 f f 5 f . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . f 1 5 5 5 f . . . . . . 
            . . . . f 1 1 f 5 f . . . . . . 
            . . . . f 1 1 f 5 f . . . . . . 
            . . . . f 1 1 f 5 f . . . . . . 
            . . . . f 1 1 f 5 f . . . . . . 
            . . . . f 1 1 f 5 f . . . . . . 
            . . . . f 1 1 f 5 f . . . . . . 
            . . . . f 1 1 f 5 f . . . . . . 
            . . . . f 1 5 5 5 f . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . f 1 1 f . . . . . . . 
            . . . . f 1 5 5 5 f . . . . . . 
            . . . f 1 5 1 1 f 5 f . . . . . 
            . . . f 1 5 1 5 f 5 f . . . . . 
            . . . f 1 5 1 5 f 5 f . . . . . 
            . . . f 1 5 1 5 f 5 f . . . . . 
            . . . f 1 5 1 5 f 5 f . . . . . 
            . . . f 1 5 1 5 f 5 f . . . . . 
            . . . f 1 5 1 f f 5 f . . . . . 
            . . . . f 1 5 5 5 f . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . . f 1 1 1 5 f . . . . . . 
            . . . f 1 5 5 5 5 5 f . . . . . 
            . . f 1 5 1 1 1 f 5 5 f . . . . 
            . . f 1 5 1 5 5 f 5 5 f . . . . 
            . . f 1 5 1 5 5 f 5 5 f . . . . 
            . . f 1 5 1 5 5 f 5 5 f . . . . 
            . . f 1 5 1 5 5 f 5 5 f . . . . 
            . . f 1 5 1 5 5 f 5 5 f . . . . 
            . . f 1 5 1 f f f 5 5 f . . . . 
            . . . f 1 5 5 5 5 5 f . . . . . 
            . . . . f 1 5 5 5 f . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.bouh, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.blizzard, 200)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile29`, function (sprite, location) {
    info.changeScoreBy(5)
    currentlvl += 1
    spawn = "lvl"
    startlvl()
})
function startlvl () {
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddddddd99999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999ddddddddd9999999999999999999999dd66f6666f6dd999999999999999999999ddddddddd999999999999999999999999
        9999999999999999999999999999ddddddddd99999999999999999999999dd6f66666f6dd9999999999999999999d6666f6666f666d999999999999999999dd66f6666f6dd9999999999999999999999
        99999999999999999999999999dd66f666f66dd99999999999999999999d666f66666f666d99999999999999999df6666f6666f6666d9999999999999999d6666f6666f666d999999999999999999999
        9999999999999999999999999d6666f666f6666d999999999999999999df666f66666f666fd999999999999999d66f666f6666f666f6d99999999999999df6666f6666f6666d99999999999999999999
        999999999999999999999999df666ddddddd666fd9999999999999999d66f66ddddddd66f66d99999999999999d666f6ddddddd66f66d9999999999999d66f666f6666f6666fd9999999999999999999
        99999999999999999999999d66fddcccccccddf66d999999999999999d666ddcccccccdd666d9999999999999d6666ddccc1cccdd6666d999999999999d666f6ddddddd666f6d9999999999999999999
        99999999999999999999999d66dcccccccccccd66d99996969696969d666dcccccccccccd666d999999999999d666dcccccc1ccccd666d99999999999d6666ddcccccccddf666d999999999999999999
        9999999999999999999999d666dcccccccccccd666d9969696969699d666dcccccccccccd666d999999999999d666dcccccc1ccccd666d99999999999d666dcccccccccccd666d999999999999999999
        9999999999999999999999d66dccccccc1cccccdffd9969999999999dffdccccccc11ccccdffd999999999999dffdcccccccc1ccccdffd99999999999d666dcccccccccccd666d999999999999999999
        9999999999999999999999dffdcccccccccccccd66d9969999999999d66dcccccccccccccd66d999999999999d66dccccccccc11ccd66d99999999999dffdcccccccccccccdffd999999999999999999
        9999999999999999999999d66dcccccccc1ccccd66d9969999999999d66dccccccccc1cccd66d999999999999d66dccccc1ccccc1cd66d99999999999d66dcc1ccccccccccd66d999999999999999999
        9999999999999999999999d66dcccccccccccccd66d9999999999999d66dcccccccccccccd66d999969696969d66dcccccccccccc1d66d99999999999d66dcccccccccccccd66d999999999999999999
        9999999999999999999999d66dcccccccccccccd66d9999999999999d66dcccccccccccccd66d999696969699d66dcccccccccccccd66d99999999999d66dcccccc1ccccccd66d999996969696969999
        9999999999999999999999d66dcccccccccccccd66d9999999999999d66d1ccccccccccccd66d999699999999d66dcccccccccccccd66d99999999999d66d1ccccccccccccd66d999969696969699999
        9999999999999999999999d66dcccccccccccccdffd9999999999999dffdc11ccccccccccdffd999699999999dffdcccccccccccccdffd99999999999d66dc1cccccccccccd66d999969999999999999
        9999999999999999999999dffdcccccccccccccd66d9999999999999d66dccc1cccccccccd66d999699999999d66dcccccccccccccd66d99999999999dffdcc1ccccccccccdffd999969999999999999
        9999999999999999999999d66dcccccccccccccd66d9999999999999d66dcccc11cccccccd66d999999999999d66dcccccccccccccd66d99999999999d66dccc1cccccccccd66d999969999999999999
        9999999999999999999999d66dcccccccccccccd66d9999999999999d66d1ccccc1ccccccd66d999999999999d66dcccccccccccccd66d99999999999d66dcccc1ccccccccd66d999999999999999999
        9696969969696969699999d66dcccccccccccccd66d9999999999999d66dc1ccccc11ccccd66d999999999999d66dcccccccccccccd66d99999999999d66dccccc1cccccccd66d999999999969696969
        6969699696969696999999d66d1ccccccccccccd66d9999999999999d66dcc11ccccc1cccd66d999999999999d66dcccccccccccccd66d99999999999d66dcccccc1ccccccd66d999999999696969699
        9999999699999999999999dffdc1cccccccccccdffd9999991999999dffdcccc1ccccc11cdffd999999199999dffd1ccccccccccccdffd99999999999d66dccccccc1cccccd66d999999999699999999
        9999999699999999999999d66dcc1ccccccccccd66d9999954599999d66dccccc1cccccc1d66d999995459999d66dc1cccccccccccd66d99999199999dffdcccccccc1ccccdffd999999999699999999
        9999999699999999999999d66dccc1cccccccccd66d9999954599999d66dcccccc11cccccd66d999995459999d66dcc11cccccccccd66d99995459999d66dccccccccc1cccd66d999999999699999999
        9999999999999999999999d66dcccc1ccccccccd66d9999542459999d66dcccccccc1ccccd66d999954245999d66dcccc1ccccccccd66d99995459999d66d1ccccccccc1ccd66d999999999999999999
        9969696969699696969696d66d1cccc1cccccccd66d9991421241999d66dccccccccc1cccd66d999142124199d66dccccc1cccccccd66d99954245999d66dc1ccccccccc1cd66d999999999999999999
        9696969696996969696969dffdc1cccc1ccccccdffd9995421245999dffdcccccccccc11cdffd999542124599dffd11cccc11cccccdffd99142124199d66dcc1ccccccccc1d66d999999999999999999
        9699999999996999999999d66dcc1cccc1cccccd66d9999542459999d66dcccccccccccc1d66d999954245999d66dcc11cccc1ccccd66d99542124599dffdccc1ccccccccc166d999999999999999999
        9699999999996999999999d66dccc1cccc1ccccd66d9999914199999d66dcccccccccccccd66d999991419999d66dcccc1cccc1cccd66d99954245999d66dcccc1ccccccccdffd999999999999999999
        9699999999996999999999d66dcccc1cccc1cccd66d99f4444444999d66dcccccccccccccd66d99f444444499d66dccccc1cccc11cd66d99991419999d66dccccc1cccccccd66d999999999999999999
        9999999999999999999999d66dccccc1cccc1ccd66d9feeeeeeeee99d66dcccccccccccccd66d9feeeeeeeee9d66dcccccc11cccc1d66d9f444444499d66dcccccc1ccccccd66d999999999999999999
        9999999999999999999999dffdcccccc1cccc1cdffd99feefeeee999dffdcccccccccccccdffd99feefeeee99dffdcccccccc1ccccd66dfeeeeeeeee9d66dccccccc1cccccd66d999999999999999999
        9999999999999999999999d66dccccccc1cccc1d66d999feefee9999d66dccc1cccccccccd66d999feefee999d66dccccccccc1cccdffd9feefeeee99dffdcccccccc1ccccd66d999999999999999999
        9999999999999999999999d66dcccccccc1cccc166d9999feee99999d66dcccccccccccccd66d9999feee9999d66dcccccccccc11cd66d99feefee999d66dccccccccc1cccdffd999999999999999999
        9999999999999999999999d66dccccccccc1cccd66d99999fe999999d66dcccccccccccccd66d99999fe99999d66dcccccccccccc1d66d999feee9999d66dcccccccccc1ccd66d999999999999999999
        9999999999999999999999d66dcccccccccc1ccd66d999999f999999d66dcccccccccccccd66d999999f99999d66dcccccccccccccd66d9999fe99999d66dccccccccccc1cd66d999999999999999999
        9999999999999999999999ddddddddddddddddddddd9999999999999ddddddddddddddddddddd999999999999ddddddddddddddddddddd99999f99999dddddddddddddddd1dddd999999999999999999
        9999999999999999999999ddddddddddddddd666f6d9999999999999dddddddddddddddd66f6d999999999999ddddddddddddddd66f66d99999999999dddddddddddddddd666fd999999999999999999
        9999999999999999999999dd66f6666f6666f666f6d9996969696969dd66f6666f6666f666f6d999999999999dd66f666f666f6666f66d99999999999dd666f6666f6666f666fd999999999999999999
        9999999999999999999999dd66f6666f6666f666f6d9969696969699dd66f6666f6666f666f6d999999999999dd66f666f666f6666f66d99999999999dd666f6666f6666f666fd999999999999999999
        99999999999999999999999ddddddddddddddddddd999699999999999ddddddddddddddddddd99999999999999ddddddddddddddddddd9999999999999ddddddddddddddddddd9999999999999999999
        9999999999999999999999999999999999999999999996999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999996999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999696969696999999999999969696969699999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999996969696969999999999999696969696999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999996999999999999999999999699999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999996999999999999999999999699999999969696969699969696969699999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999996999999999999999999999699999999696969696999696969696999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999699999999999699999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999699999999999699999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999699999999999699999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999996969696969969696969699999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999969696969699696969696999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999969999999999699999999999999999999999999999999999999999999999696969696999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999969999999999699999999999999999999999999999999999999999999996969696969999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999969999999999699999999999999999999999999999999999999999999996999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999969999999999699999999999999999999999999999999999999999999996999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999996999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999969696969699969696969699999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999696969696999696969696999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999699999999999699999999999999999999999999999999999999999999999999999999999999999999999999999996969696969996969696969969696969699999999999
        9999999999999999999999999699999999999699999999999999999999999999999999999999999999999999999999999999999999999999999969696969699969696969699696969696999999999999
        9999999999999999999999999699999999999699999999999999999999999999999999999999999999999999999999999999999999999999999969999999999969999999999699999999999999999999
        9999999999999999999999999699999999999699999999999999999999999999999999999999999999999999999999999999999999999999999969999999999969999999999699999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999969999999999969999999999699999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999969696969699696969696999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999696969696996969696969999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999699999999996999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999699999999996999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999969696969699696969696996969696969999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999696969696996969696969969696969699999999999999999999999999999999999999999999999999999999999999999999
        9999696969696999999999999999999999999999999999999999999999999699999999996999999999969999999999999999999999999999999999999999999999999999999999999999999999999999
        9996969696969999999999999999999999999999999999999999999999999699999999996999999999969999999999999999999999999999999999999999999999999999999999999999999999999999
        9996999999999999999999999999999999999999999999999999999999999699999999996999999999999999999999999999999999999999999999999696969696999999999999999999999999999999
        9996999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996969696969999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999696969696996969696969999999999999999999999999999999996999999999999999999999999999999999999999
        9999999999696969696999999999999999999999999999999999999999999999996969696969969696969699999999999999999999999999999999996999999999999999999999999999999999999999
        9999999996969696969999999999999999999999999999999999999999999999996999999999969999999999999999999999999999999999999999996999999999999999999999999999999999999999
        9999999996999999999999999999999999999999999999999999999999999999996999999999969999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999996999999999999999999999999999999999999999999999999999999996999999999969999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        `)
    if (currentlvl == 0) {
        tiles.setTilemap(tilemap`level6`)
    } else if (currentlvl == 1) {
        tiles.setTilemap(tilemap`level7`)
    } else if (currentlvl == 2) {
        tiles.setTilemap(tilemap`level8`)
    } else {
        game.over(true, effects.confetti)
    }
    if (spawn == "lvl") {
        tiles.placeOnRandomTile(mario, assets.tile`tile1`)
    } else if (spawn == "bonus1") {
        tiles.placeOnRandomTile(mario, assets.tile`tile59`)
    } else if (spawn == "bonus2") {
        tiles.placeOnRandomTile(mario, assets.tile`tile35`)
    }
    scene.cameraFollowSprite(mario)
    for (let value of tiles.getTilesByType(assets.tile`tile1`)) {
        tiles.setTileAt(value, assets.tile`tile0`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile59`)) {
        tiles.setTileAt(value, assets.tile`tile0`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile35`)) {
        tiles.setTileAt(value, assets.tile`tile0`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile67`)) {
        tiles.setTileAt(value, assets.tile`tile0`)
    }
    for (let value of sprites.allOfKind(SpriteKind.fesprit)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.bouh)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.trucnoir)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.fleur)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.coin)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.gumpa)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.koopa)) {
        value.destroy()
    }
    for (let value of tiles.getTilesByType(assets.tile`tile7`)) {
        esprit_de_feu = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . f 2 4 2 2 f . . . . . 
            . . . . f 2 f 2 2 f 5 f . . . . 
            . . . f 4 2 f 2 2 f 2 4 f . . . 
            . . . f 2 2 f 2 2 f 2 2 f . . . 
            . . . f 5 2 2 2 5 2 2 2 f . . . 
            . . . . f 2 4 2 2 4 2 f . . . . 
            . . . . . f 2 f f 2 f . . . . . 
            . . . . . f 5 f . f f . . . . . 
            . . . . . . f . . f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.fesprit)
        tiles.placeOnTile(esprit_de_feu, value)
        tiles.setTileAt(value, assets.tile`tile0`)
        animation.runMovementAnimation(
        esprit_de_feu,
        "c 0 -100 0 100 0 0",
        2000,
        true
        )
        esprit_de_feu.startEffect(effects.fire)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile9`)) {
        truc_noir = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.trucnoir)
        tiles.placeOnTile(truc_noir, value)
        tiles.setTileAt(value, assets.tile`tile0`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile15`)) {
        fleur = sprites.create(img`
            .........................
            .........................
            .........................
            ..ff.................ff..
            .f11f...............f11f.
            .f111f.............f111f.
            ..f111f...........f111f..
            .f2f111f.........f111f2f.
            .f22f111f.......f111f22f.
            .f112f111f.....f111f211f.
            .f1122f111f...f111f2211f.
            ..f2222f111fff111f2222f..
            ..f22222f1111111f21122f..
            ...f11222fffffff22112f...
            ...f11222112222222222f...
            ....f222211222211222f....
            .....f2222222221122f.....
            ..ff..ff222211222ff..ff..
            .f77f...fff211fff...f77f.
            f7777fff..f777f..fff7777f
            f7777777f.f777f.f7777777f
            .f7777777ff777ff7777777f.
            ..ff77777777777777777ff..
            ....fffffffffffffffff....
            .........................
            `, SpriteKind.fleur)
        tiles.placeOnTile(fleur, value)
        tiles.setTileAt(value, assets.tile`tile0`)
        animation.runImageAnimation(
        fleur,
        [img`
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            `,img`
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .......ff.ff.ff.ff.......
            ......f22f11f11f22f......
            .....f11f111f111f22f.....
            ....f211f111f111f222f....
            ...f2222f111f111f2222f...
            ...f2222f111f111f2221f...
            ...f2112f111f111f2221f...
            `,img`
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .......ff.ff.ff.ff.......
            ......f22f11f11f22f......
            .....f11f111f111f22f.....
            ....f211f111f111f222f....
            ...f2222f111f111f2222f...
            ...f2222f111f111f2221f...
            ...f2112f111f111f2221f...
            ...f2112f111f111f2222f...
            ...f2222f111f111f2222f...
            ...f2222f111f111f2222f...
            ...f2222f111f111f2222f...
            ...f2222f1111111f2222f...
            ...f11222fffffff22211f...
            ...f11222112222222211f...
            ....f222211222211222f....
            `,img`
            .........................
            .........................
            .......ff.ff.ff.ff.......
            ......f22f11f11f22f......
            .....f11f111f111f22f.....
            ....f211f111f111f222f....
            ...f2222f111f111f2222f...
            ...f2222f111f111f2221f...
            ...f2112f111f111f2221f...
            ...f2112f111f111f2222f...
            ...f2222f111f111f2222f...
            ...f2222f111f111f2222f...
            ...f2222f111f111f2222f...
            ...f2222f1111111f2222f...
            ...f11222fffffff22211f...
            ...f11222112222222211f...
            ....f222211222211222f....
            .....f2222222221122f.....
            ..ff..ff222211222ff..ff..
            .f77f...fff211fff...f77f.
            f7777fff..f777f..fff7777f
            f7777777f.f777f.f7777777f
            .f7777777ff777ff7777777f.
            ..ff77777777777777777ff..
            ....fffffffffffffffff....
            `,img`
            .........................
            .........................
            .........................
            ..ff.................ff..
            .f11f...............f11f.
            .f111f.............f111f.
            ..f111f...........f111f..
            .f2f111f.........f111f2f.
            .f22f111f.......f111f22f.
            .f112f111f.....f111f211f.
            .f1122f111f...f111f2211f.
            ..f2222f111fff111f2222f..
            ..f22222f1111111f21122f..
            ...f11222fffffff22112f...
            ...f11222112222222222f...
            ....f222211222211222f....
            .....f2222222221122f.....
            ..ff..ff222211222ff..ff..
            .f77f...fff211fff...f77f.
            f7777fff..f777f..fff7777f
            f7777777f.f777f.f7777777f
            .f7777777ff777ff7777777f.
            ..ff77777777777777777ff..
            ....fffffffffffffffff....
            .........................
            `,img`
            .........................
            .........................
            .......ff.ff.ff.ff.......
            ......f22f11f11f22f......
            .....f11f111f111f22f.....
            ....f211f111f111f222f....
            ...f2222f111f111f2222f...
            ...f2222f111f111f2221f...
            ...f2112f111f111f2221f...
            ...f2112f111f111f2222f...
            ...f2222f111f111f2222f...
            ...f2222f111f111f2222f...
            ...f2222f111f111f2222f...
            ...f2222f1111111f2222f...
            ...f11222fffffff22211f...
            ...f11222112222222211f...
            ....f222211222211222f....
            .....f2222222221122f.....
            ..ff..ff222211222ff..ff..
            .f77f...fff211fff...f77f.
            f7777fff..f777f..fff7777f
            f7777777f.f777f.f7777777f
            .f7777777ff777ff7777777f.
            ..ff77777777777777777ff..
            ....fffffffffffffffff....
            `,img`
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .......ff.ff.ff.ff.......
            ......f22f11f11f22f......
            .....f11f111f111f22f.....
            ....f211f111f111f222f....
            ...f2222f111f111f2222f...
            ...f2222f111f111f2221f...
            ...f2112f111f111f2221f...
            ...f2112f111f111f2222f...
            ...f2222f111f111f2222f...
            ...f2222f111f111f2222f...
            ...f2222f111f111f2222f...
            ...f2222f1111111f2222f...
            ...f11222fffffff22211f...
            ...f11222112222222211f...
            ....f222211222211222f....
            `,img`
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .......ff.ff.ff.ff.......
            ......f22f11f11f22f......
            .....f11f111f111f22f.....
            ....f211f111f111f222f....
            ...f2222f111f111f2222f...
            ...f2222f111f111f2221f...
            ...f2112f111f111f2221f...
            `,img`
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            `],
        200,
        true
        )
    }
    for (let value of tiles.getTilesByType(assets.tile`tile53`)) {
        coin = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 1 1 1 1 5 5 f . . . . . 
            . . f 1 5 5 5 5 5 5 5 f . . . . 
            . f 1 5 5 1 1 1 f 5 5 5 f . . . 
            . f 1 5 5 1 5 5 f 5 5 5 f . . . 
            . f 1 5 5 1 5 5 f 5 5 5 f . . . 
            . f 1 5 5 1 5 5 f 5 5 5 f . . . 
            . f 1 5 5 1 5 5 f 5 5 5 f . . . 
            . f 1 5 5 1 5 5 f 5 5 5 f . . . 
            . f 1 5 5 1 f f f 5 5 5 f . . . 
            . . f 1 5 5 5 5 5 5 5 f . . . . 
            . . . f 1 1 5 5 5 5 f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.coin)
        tiles.placeOnTile(coin, value)
        tiles.setTileAt(value, assets.tile`tile0`)
        animation.runImageAnimation(
        coin,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 1 1 1 1 5 5 f . . . . . 
            . . f 1 5 5 5 5 5 5 5 f . . . . 
            . f 1 5 5 1 1 1 f 5 5 f f . . . 
            . f 1 5 5 1 5 5 f 5 5 5 f . . . 
            . f 1 5 5 1 5 5 f 5 5 5 f . . . 
            . f 1 5 5 1 5 5 f 5 5 5 f . . . 
            . f 1 5 5 1 5 5 f 5 5 5 f . . . 
            . f 1 5 5 1 5 5 f 5 5 5 f . . . 
            . f 1 5 5 1 5 5 f 5 5 5 f . . . 
            . . f 1 5 f f f f 5 5 f . . . . 
            . . . f 1 5 5 5 5 5 f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . . f 1 1 1 5 f . . . . . . 
            . . . f 1 5 5 5 5 5 f . . . . . 
            . . f 1 5 1 1 1 f 5 5 f . . . . 
            . . f 1 5 1 5 5 f 5 5 f . . . . 
            . . f 1 5 1 5 5 f 5 5 f . . . . 
            . . f 1 5 1 5 5 f 5 5 f . . . . 
            . . f 1 5 1 5 5 f 5 5 f . . . . 
            . . f 1 5 1 5 5 f 5 5 f . . . . 
            . . f 1 5 1 5 5 f 5 5 f . . . . 
            . . . f 1 f f f f 5 f . . . . . 
            . . . . f 1 5 5 5 f . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . f 1 5 5 5 f . . . . . . 
            . . . f 1 5 1 1 f 5 f . . . . . 
            . . . f 1 5 1 5 f 5 f . . . . . 
            . . . f 1 5 1 5 f 5 f . . . . . 
            . . . f 1 5 1 5 f 5 f . . . . . 
            . . . f 1 5 1 5 f 5 f . . . . . 
            . . . f 1 5 1 5 f 5 f . . . . . 
            . . . f 1 5 1 5 f 5 f . . . . . 
            . . . . f 1 f f f f . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . f 1 1 5 5 f . . . . . . 
            . . . . f 1 f 5 5 f . . . . . . 
            . . . . f 1 f 5 5 f . . . . . . 
            . . . . f 1 f 5 5 f . . . . . . 
            . . . . f 1 f 5 5 f . . . . . . 
            . . . . f 1 f 5 5 f . . . . . . 
            . . . . f 1 f 5 5 f . . . . . . 
            . . . . f 1 f 5 5 f . . . . . . 
            . . . . f 1 1 5 5 f . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . f 1 5 5 5 f . . . . . . 
            . . . . f 1 1 f 5 f . . . . . . 
            . . . . f 1 1 f 5 f . . . . . . 
            . . . . f 1 1 f 5 f . . . . . . 
            . . . . f 1 1 f 5 f . . . . . . 
            . . . . f 1 1 f 5 f . . . . . . 
            . . . . f 1 1 f 5 f . . . . . . 
            . . . . f 1 1 f 5 f . . . . . . 
            . . . . f 1 5 5 5 f . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . f 1 5 5 5 f . . . . . . 
            . . . f 1 5 1 1 f 5 f . . . . . 
            . . . f 1 5 1 5 f 5 f . . . . . 
            . . . f 1 5 1 5 f 5 f . . . . . 
            . . . f 1 5 1 5 f 5 f . . . . . 
            . . . f 1 5 1 5 f 5 f . . . . . 
            . . . f 1 5 1 5 f 5 f . . . . . 
            . . . f 1 5 1 f f 5 f . . . . . 
            . . . . f 1 5 5 5 f . . . . . . 
            . . . . . f 1 5 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . . f 1 1 1 5 f . . . . . . 
            . . . f 1 5 5 5 5 5 f . . . . . 
            . . f 1 5 1 1 1 f 5 5 f . . . . 
            . . f 1 5 1 5 5 f 5 5 f . . . . 
            . . f 1 5 1 5 5 f 5 5 f . . . . 
            . . f 1 5 1 5 5 f 5 5 f . . . . 
            . . f 1 5 1 5 5 f 5 5 f . . . . 
            . . f 1 5 1 5 5 f 5 5 f . . . . 
            . . f 1 5 1 f f f 5 5 f . . . . 
            . . . f 1 5 5 5 5 5 f . . . . . 
            . . . . f 1 5 5 5 f . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
    }
    for (let value of tiles.getTilesByType(assets.tile`tile8`)) {
        gumpa = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f f f f e e f f f f . . . 
            . . . . f 1 f e e f 1 f . . . . 
            . . . f e 1 1 f f 1 1 e f . . . 
            . f f e e 1 f e e f 1 e e f f . 
            f e e e e 1 f e e f 1 e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e 1 f f f f f f f f 1 e e f 
            . f e 1 e e e e e e e e 1 e f . 
            . . f f f f f f f f f f f f . . 
            . . . f e 1 1 1 1 1 1 f . . . . 
            . f f f f e 1 1 1 1 1 1 f f f . 
            f f f f f f e e e e e f f f f f 
            f f f f f f f . . . f f f f f f 
            `, SpriteKind.gumpa)
        tiles.placeOnTile(gumpa, value)
        tiles.setTileAt(value, assets.tile`tile0`)
        animation.runImageAnimation(
        gumpa,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f f f f e e f f f f . . . 
            . . . . f 1 f e e f 1 f . . . . 
            . . . f e 1 1 f f 1 1 e f . . . 
            . f f e e 1 f e e f 1 e e f f . 
            f e e e e 1 f e e f 1 e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e 1 f f f f f f f f 1 e e f 
            . f e 1 e e e e e e e e 1 e f . 
            . . f f f f f f f f f f f f . . 
            . . . f e 1 1 1 1 1 1 f . . . . 
            . f f f f e 1 1 1 1 1 1 f f f . 
            f f f f f f e e e e e f f f f f 
            f f f f f f f . . . f f f f f f 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f f f f e e f f f f . . . 
            . . . . f 1 f e e f 1 f . . . . 
            . . . f e 1 1 f f 1 1 e f . . . 
            . f f e e 1 f e e f 1 e e f f . 
            f e e e e 1 f e e f 1 e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e 1 f f f f f f f f 1 e e f 
            . f e 1 e e e e e e e e 1 e f . 
            . . f f f f f f f f f f f f . . 
            . . . f e 1 1 1 1 1 1 f . . . . 
            . . . f f e 1 1 1 1 1 1 f f f . 
            . f f f f f e e e e e f f f f f 
            f f f f f f . . . . f f f f f f 
            f f f f f f f . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f f f f e e f f f f . . . 
            . . . . f 1 f e e f 1 f . . . . 
            . . . f e 1 1 f f 1 1 e f . . . 
            . f f e e 1 f e e f 1 e e f f . 
            f e e e e 1 f e e f 1 e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e 1 f f f f f f f f 1 e e f 
            . f e 1 e e e e e e e e 1 e f . 
            . . f f f f f f f f f f f f . . 
            . . . f e 1 1 1 1 1 1 f . . . . 
            . f f f f e 1 1 1 1 1 1 f f f . 
            f f f f f f e e e e e f f f f . 
            f f f f f f f . . . . f f f f f 
            . . . . . . . . . . f f f f f f 
            `],
        500,
        true
        )
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
        koopa = sprites.create(img`
            ...ff...........
            ..f11f..........
            ..f11f..........
            .f111ff.........
            .ff11f4f........
            .ff11f44f.......
            .f111444f.......
            .f111444f.......
            f4f14444f.......
            f444444f..fff...
            f44ff44fff777f..
            f4f.f4f1f7f7f7f.
            ff..f4f1f77f77f.
            ...f44f1f7f7f77f
            .ff44f1f7f777f7f
            .f444f1ff77777ff
            ..ff4f1f7f777f7f
            ...f4f1f77f7f77f
            ....ff1f777f777f
            .....f11f7f7f7f.
            .....f11ffffffff
            .....ff11111111f
            ....f4fff111111f
            ...f4444fffffff.
            ..f14444f.f4441f
            ..fffffff.ffffff
            `, SpriteKind.koopa)
        tiles.placeOnTile(koopa, value)
        tiles.setTileAt(value, assets.tile`tile0`)
        animation.runImageAnimation(
        koopa,
        [img`
            ...ff...........
            ..f11f..........
            ..f11f..........
            .f111ff.........
            .ff11f4f........
            .ff11f44f.......
            .f111444f.......
            .f111444f.......
            f4f14444f.......
            f444444f..fff...
            f44ff44fff777f..
            f4f.f4f1f7f7f7f.
            ff..f4f1f77f77f.
            ...f44f1f7f7f77f
            .ff44f1f7f777f7f
            .f444f1ff77777ff
            ..ff4f1f7f777f7f
            ...f4f1f77f7f77f
            ....ff1f777f777f
            .....f11f7f7f7f.
            .....f11ffffffff
            .....ff11111111f
            ....f4fff111111f
            ...f4444fffffff.
            ..f14444f.f4441f
            ..fffffff.ffffff
            `,img`
            ................
            ................
            ...ff...........
            ..f11f..........
            ..f11f..........
            .f111ff.........
            .ff11f4f........
            .ff11f44f.......
            .f111444f.......
            .f111444f.......
            f4f14444f.......
            f444444f..fff...
            f44ff44fff777f..
            f4f.f4f1f7f7f7f.
            ff..f4f1f77f77f.
            ...f44f1f7f7f77f
            .ff44f1f7f777f7f
            .f444f1ff77777ff
            ..ff4f1f7f777f7f
            ...f4f1f77f7f77f
            ....ff1f777f777f
            .....f11f7f7f7f.
            .....f11ffffffff
            .....ff11111111f
            ..f1f4fff111111f
            ..ff4444ffffffff
            `],
        500,
        true
        )
    }
}
scene.onOverlapTile(SpriteKind.bowser, assets.tile`tile66`, function (sprite, location) {
    pause(1000)
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.gumpa, function (sprite, otherSprite) {
    if (mario.y < otherSprite.y - 5) {
        mario.vy = -150
        otherSprite.destroy()
        music.pewPew.play()
    } else {
        otherSprite.destroy()
        info.changeLifeBy(-1)
        music.pewPew.play()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.fleur, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.fire, 200)
    music.pewPew.play()
    scene.cameraShake(4, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.koopa, function (sprite, otherSprite) {
    if (mario.y < otherSprite.y - 5) {
        mario.vy = -150
        otherSprite.destroy()
        music.pewPew.play()
    } else {
        otherSprite.destroy()
        info.changeLifeBy(-1)
        music.pewPew.play()
    }
})
let bdf: Sprite = null
let moving = false
let koopa: Sprite = null
let gumpa: Sprite = null
let fleur: Sprite = null
let truc_noir: Sprite = null
let esprit_de_feu: Sprite = null
let bouh: Sprite = null
let bouseux = ""
let bowser: Sprite = null
let lastDirection = 0
let champi_1up: Sprite = null
let coin: Sprite = null
let mario: Sprite = null
let spawn = ""
let currentlvl = 0
info.setLife(20)
info.setScore(0)
let nombrebouh = 0
currentlvl = 0
spawn = "lvl"
mario = sprites.create(img`
    ....................
    ....................
    ....................
    .....2222222........
    ....2222222222......
    ....fffdddfd........
    ...fdfddddfddd......
    ...fdffddddfddd.....
    ...ffdddddffff......
    .....dddddddd.......
    ....22822822........
    ...2228228222.......
    ..222288882222......
    ..112858858211......
    ..111888888111......
    ..118888888811......
    ....888..888........
    ...eee....eee.......
    ..eeee....eeee......
    ....................
    `, SpriteKind.Player)
mario.ay = 350
controller.moveSprite(mario, 100, 0)
startlvl()
game.onUpdate(function () {
    moving = controller.left.isPressed() || (controller.right.isPressed() || controller.A.isPressed())
    if (!(moving)) {
        animation.stopAnimation(animation.AnimationTypes.All, mario)
    }
})
game.onUpdate(function () {
    if (nombrebouh > 0) {
        bouh.setImage(img`
            ....................
            ....................
            ....................
            ....................
            ......ffffff........
            ....ff111111ff......
            ...f11111111bbf.....
            ..f11111111111bf....
            ..f1f1f1111111bf....
            .f11f1f11111ff1bf...
            .f111111111f11fbf...
            .f121212111111fbf...
            .f12222211111f11bf..
            .f12222221111111bf..
            ..f121212111111bbf..
            ..f111111111bbbbf...
            ...f111111bbbfff....
            ....fffbbbbff.......
            .......ffff.........
            ....................
            `)
        if (bouh.vx > 0) {
            bouh.image.flipX()
            bouh.setImage(bouh.image)
        }
    }
})
forever(function () {
    if (bouseux == "vivant") {
        pause(3500)
        bdf = sprites.create(img`
            ......4444...44......
            ....4455554445544.44.
            ...455544555555554554
            ..455444444555445554.
            .45544222244554.444..
            .4544222222445444....
            4554222222224555544..
            45442222222244555554.
            4544222222224455554.4
            455422222222455544.4.
            .454422222244544.....
            .45544222244554.444..
            ..455444444555445554.
            ...455544555555554554
            ....4455554445544.44.
            ......4444...44......
            `, SpriteKind.bdf)
        bdf.setPosition(bowser.x, bowser.y)
        bdf.vx = -100
    }
})
forever(function () {
    if (mario.tileKindAt(TileDirection.Top, assets.tile`tile38`) && controller.up.isPressed()) {
        spawn = "lvl"
        startbowser()
    }
})
forever(function () {
    if (bouseux == "vivant") {
        bowser.vy = -150
        pause(6000)
    }
})
forever(function () {
    if (mario.tileKindAt(TileDirection.Bottom, assets.tile`tile25`) && controller.down.isPressed()) {
        startbonus1()
    }
})
forever(function () {
    if (mario.tileKindAt(TileDirection.Bottom, assets.tile`tile56`)) {
        mario.vy = -300
    }
})
forever(function () {
    if (mario.tileKindAt(TileDirection.Right, assets.tile`tile50`) && controller.right.isPressed()) {
        startbonus2()
    }
})
forever(function () {
    if (mario.tileKindAt(TileDirection.Left, assets.tile`tile57`) && controller.left.isPressed()) {
        spawn = "bonus1"
        startlvl()
    }
})
forever(function () {
    if (mario.tileKindAt(TileDirection.Top, assets.tile`tile48`) && controller.up.isPressed()) {
        spawn = "bonus2"
        startlvl()
    }
})
