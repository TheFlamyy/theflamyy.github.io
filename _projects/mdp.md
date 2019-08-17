---
title: My Dialogue Parser - Plugin
#image: /assets/images/godot_dialogue_tree.png

website:
    name: Repository
    link: https://github.com/TheFlamyy/MyDialogueParser
---

This is a bare bones plugin for [Godot](https://godotengine.org) which used for dealing with dialogues.

The main premise is to have an automated way of dealing with the progression of dialogues. The plugin per se doesn't have much of logic.
It is able to traverse a dialogue tree, detect branches - in form of choices - and allows the developer to add all extra data.
Currently `.json` files are used for storing the dialogue but it is planned to add a custom resource type (which is editable preferably via a text-editor or the inspector).

The documentations and a demo project can be found in the [Github Repository]({{page.website.link}}).