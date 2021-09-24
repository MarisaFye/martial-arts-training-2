controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.gravity_jump(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`pit`, function (sprite, location) {
    game.over(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Left), true)
    tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), assets.tile`energy`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`ring`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`ring`)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`door1`, function (sprite, location) {
    game.over(true)
})
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`background1`)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`Xialing`, SpriteKind.Player)
sprites.add_profile(Choice.xialing)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 500
scene.cameraFollowSprite(mySprite)
