# Show All Cards

Retrieves all booster cards from the most recent standard set of Magic: the Gathering.

**URL** : `/cards`

# Show A Card

Retrieve any booster card from the most recent standard set of Magic: the Gathering.

**URL** : `/cards/:num`

## Success Response

**Content examples**

Finds card number 25 in the set.

```json
{"_id":"",
"number":"25",
"name":"Raffine's Guidance",
"colors":["W"],
"manaCost":"{W}",
"manaValue":1,
"type":"Enchantment — Aura",
"types":["Enchantment"],
"subtypes":["Aura"],
"keywords":["Enchant"],
"text":"Enchant creature\nEnchanted creature gets +1/+1.\nYou may cast Raffine's Guidance from your graveyard by paying {2}{W} rather than paying its mana cost.","rarity":"common",
"artist":"Rémi Jacquot",
"__v":0
}
```
# Search for Text on Card

Returns card(s) that match the query 

**URL** : `/cards/o=:query`

## Success Response

**Content examples**

Find cards containing the text "legend"

```json
[{"_id":"",
"number":"206",
"name":"Ob Nixilis, the Adversary",
"colors":["B","R"],
"manaCost":"{1}{B}{R}",
"manaValue":3,
"type":"Legendary Planeswalker — Nixilis",
"types":["Planeswalker"],
"subtypes":["Nixilis"],
"keywords":["Casualty"],
"text":"Casualty X. The copy isn't legendary and has starting loyalty X. (As you cast this spell, you may sacrifice a creature with power X. When you do, copy this spell. The copy becomes a token.)\n[+1]: Each opponent loses 2 life unless they discard a card. If you control a Demon or Devil, you gain 2 life.\n[−2]: Create a 1/1 red Devil creature token with \"When this creature dies, it deals 1 damage to any target.\"\n[−7]: Target player draws seven cards and loses 7 life.",
"rarity":"mythic",
"artist":"Yongjae Choi",
"loyalty":"3",
"__v":0
}]
```

## Notes
Streets of New Capenna set contains 281 regular cards
