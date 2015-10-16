// info from https://wiki.guildwars2.com/wiki/Heart_of_Maguuma_mastery_track

var config = {
    total_points: 100,
    spent_points: 0,
    spent_exp:0,
    zones: [
        {
            name: "Heart of Maguuma",
            tracks: [
                {
                    name: "Gliding",
                    points: 0,
                    lines: [
                        {
                            name: "Glider Basics",
                            exp: 381000,
                            points: 1,
                            pic: "https://wiki.guildwars2.com/images/3/36/Glider_Basics.png",
                            description: "Gain access to the glider so that you can glide like a squirrel across the highest points of the Heart of Maguuma."
                        },
                        {
                            name: "Updraft Use",
                            exp: 635000,
                            points: 1,
                            pic: "https://wiki.guildwars2.com/images/d/d0/Updraft_Use.png",
                            description: "Improved design to your glider handles and slits in the wings let you confidently fly into updrafts, allowing you to gain altitude and travel to previously unreachable locations."
                        },
                        {
                            name: "Lean Techniques",
                            exp: 1143000,
                            points: 2,
                            pic: "https://wiki.guildwars2.com/images/b/bb/Lean_Techniques.png",
                            description: "Learn the gliding technique of leaning forward to increase your gliding speed and leaning back to brake midair at the cost of endurance. Your improved technique also increases your total endurance pool when gliding."
                        },
                        {
                            name: "Stealth Gliding",
                            exp: 2413000,
                            points: 3,
                            pic: "https://wiki.guildwars2.com/images/c/cb/Stealth_Gliding.png",
                            description: "Learn to glide silently and undetected through the air for short periods by dodging while gliding."
                        },
                        {
                            name: "Advanced Gliding",
                            exp: 4191000,
                            points: 5,
                            pic: "https://wiki.guildwars2.com/images/7/77/Advanced_Gliding.png",
                            description: "Learn to glide with such efficiency that you no longer use endurance to stay up in the air, only to perform lean techniques."
                        },
                        {
                            name: "Ley Line Gliding",
                            exp: 8128000,
                            points: 8,
                            pic: "https://wiki.guildwars2.com/images/3/32/Ley_Line_Gliding.png",
                            description: "Learn to enter ley-line energy flows while gliding to be moved along with the flow, gaining access to otherwise inaccessible places."
                        }
                    ]
                },
                {
                    name: "Itzel Lore",
                    points: 0,
                    lines: [
                        {
                            name: "Bouncing Mushrooms",
                            exp: 381000,
                            points: 1,
                            pic: "https://wiki.guildwars2.com/images/d/d0/Bouncing_Mushrooms.png",
                            description: "Learn how to land precisely and use the bouncing mushrooms found around the Heart of Maguuma to get to places previously impossible to reach."
                        },
                        {
                            name: "Itzel Language",
                            exp: 635000,
                            points: 1,
                            pic: "https://wiki.guildwars2.com/images/8/87/Itzel_Language.png",
                            description: "Learn the difficult dialect of the Itzel, endearing yourself to the local Itzel and gaining access to vendors with exclusive wares."
                        },
                        {
                            name: "Blazing Speed Mushrooms",
                            exp: 1143000,
                            points: 2,
                            pic: "https://wiki.guildwars2.com/images/7/7b/Blazing_Speed_Mushrooms.png",
                            description: "With stomach training, learn to ingest the speed-increasing mushrooms found scattered in the Heart of Maguuma. Run at blazing speeds with the help of nature!"
                        },
                        {
                            name: "Itzel Poison Lore",
                            exp: 2413000,
                            points: 3,
                            pic: "https://wiki.guildwars2.com/images/1/1e/Itzel_Poison_Lore.png",
                            description: "Learn about Itzel poisons, and gain the ability to pass through poisonous Mordrem vines and withstand poison hazes that exist in Maguuma."
                        },
                        {
                            name: "Itzel Leadership",
                            exp: 4191000,
                            points: 5,
                            pic: "https://wiki.guildwars2.com/images/b/b8/Itzel_Leadership.png",
                            description: "Carefully study the Itzel fighting style, and then challenge their champion and claim a valuable daily prize."
                        },
                        {
                            name: "Adrenal Mushrooms",
                            exp: 8128000,
                            points: 8,
                            pic: "https://wiki.guildwars2.com/images/1/1c/Adrenal_Mushrooms.png",
                            description: "Learning to eat these mushrooms tweaks your adrenal glands, giving you a surge of adrenaline and instantly refreshing your skills."
                        }
                    ]
                },
                {
                    name: "Exalted Lore",
                    points: 0,
                    lines: [
                        {
                            name: "Exalted Markings",
                            exp: 381000,
                            points: 1,
                            pic: "https://wiki.guildwars2.com/images/0/01/Exalted_Markings.png",
                            description: "Gain the knowledge to read Exalted markings. You can now decipher their words and gain access to secrets of their civilization."
                        },
                        {
                            name: "Exalted Acceptance",
                            exp: 635000,
                            points: 1,
                            pic: "https://wiki.guildwars2.com/images/f/f3/Exalted_Acceptance.png",
                            description: "Gain the trust of the strange and mysterious Exalted, giving you access to their services in the Forgotten City."
                        },
                        {
                            name: "Exalted Assistance",
                            exp: 1143000,
                            points: 2,
                            pic: "https://wiki.guildwars2.com/images/c/c8/Exalted_Assistance.png",
                            description: "Learn to use Exalted Recall devices found in the Maguuma Jungle to summon an Exalted warrior to fight for a short while."
                        },
                        {
                            name: "Exalted Purification",
                            exp: 2413000,
                            points: 3,
                            pic: "https://wiki.guildwars2.com/images/3/39/Exalted_Purification.png",
                            description: "Become honored among the Exalted by challenging their champion each day, and unlock their finest treasures within the Forgotten City."
                        },
                        {
                            name: "Exalted Gathering",
                            exp: 4191000,
                            points: 5,
                            pic: "https://wiki.guildwars2.com/images/8/81/Exalted_Gathering.png",
                            description: "Learn from the Exalted how to gather rare materials around the Maguuma Jungle. Learn to mine up Lumps of Aurillium from ore nodes in Auric Basin."
                        },

                        {
                            name: "Exalted Honing",
                            exp: 8128000,
                            points: 8,
                            pic: "https://wiki.guildwars2.com/images/a/a9/Exalted_Honing.png",
                            description: "Learn how to efficiently pierce through tough Impenetrable Bark, which makes some of the powerful Mordrem unbreakable."
                        }
                    ]
                },
                {
                    name: "Nuhoch Lore",
                    points: 0,
                    lines: [
                        {
                            name: "Nuhoch Hunting",
                            exp: 381000,
                            points: 1,
                            pic: "https://wiki.guildwars2.com/images/b/b2/Nuhoch_Hunting.png",
                            description: "Learn to take special trophies from foes in Maguuma and to harvest Sawgill mushrooms, unlocking rare collections and items."
                        },
                        {
                            name: "Nuhoch Language",
                            exp: 635000,
                            points: 1,
                            pic: "https://wiki.guildwars2.com/images/9/9b/Nuhoch_Language.png",
                            description: "Learn the Nuhoch's traditional language, and gain the ability to trade and converse with the more wary members of the group."
                        },
                        {
                            name: "Nuhoch Wallows",
                            exp: 1143000,
                            points: 2,
                            pic: "https://wiki.guildwars2.com/images/5/55/Nuhoch_Wallows.png",
                            description: "Master the use of Nuhoch Wallows, learning to traverse these hidden passages to gain access to locations both far and hidden."
                        },
                        {
                            name: "Nuhoch Stealth Detection",
                            exp: 2413000,
                            points: 3,
                            pic: "https://wiki.guildwars2.com/images/d/d2/Nuhoch_Stealth_Detection.png",
                            description: "Learn to spot enemies that practice stealth techniques, rendering them visible to your trained eye."
                        },
                        {
                            name: "Nuhoch Proving",
                            exp: 4191000,
                            points: 5,
                            pic: "https://wiki.guildwars2.com/images/5/53/Nuhoch_Proving.png",
                            description: "Challenge the Nuhoch champion Belly Floppin' Phil in combat to earn the Nuhoch's respect and unlock a powerful cache of rewards."
                        },
                        {
                            name: "Nuhoch Alchemy",
                            exp: 8128000,
                            points: 8,
                            pic: "https://wiki.guildwars2.com/images/d/d3/Nuhoch_Alchemy.png",
                            description: "Train with the Nuhoch to learn to remove the chak's powerful acid with your healing skill. Without this ability, chak acid can obliterate foes."
                        }
                    ]
                }
            ]
        },
        {
            name: "Pact Tyria",
            tracks: [
                {
                    name: "Fractal Attunement Mastery",
                    points: 0,
                    lines: [
                        {
                            name: "Follows Advice",
                            exp: 254000,
                            points: 1,
                            pic: "img/dummy-icon.png",
                            description: "Details are obscured by the Mists."
                        },
                        {
                            name: "Agony Channeler",
                            exp: 562000,
                            points: 2,
                            pic: "img/dummy-icon.png",
                            description: "Details are obscured by the Mists."
                        },
                        {
                            name: "Mistlock Singularities",
                            exp: 754000,
                            points: 3,
                            pic: "img/dummy-icon.png",
                            description: "Details are obscured by the Mists."
                        },
                        {
                            name: "Recursive Resourcing",
                            exp: 835000,
                            points: 5,
                            pic: "img/dummy-icon.png",
                            description: "Details are obscured by the Mists."
                        },
                        {
                            name: "Essential Singularities",
                            exp: 897001,
                            points: 8,
                            pic: "img/dummy-icon.png",
                            description: "Details are obscured by the Mists."
                        },
                        {
                            name: "Hyperactive Singularities",
                            exp: 2031999,
                            points: 13,
                            pic: "img/dummy-icon.png",
                            description: "Details are obscured by the Mists."
                        }
                    ]
                },
                {
                    name: "Pact Commander Mastery",
                    points: 0,
                    lines: [
                        {
                            name: "Pact Mentor",
                            exp: 0,
                            points: 1,
                            pic: "https://wiki.guildwars2.com/images/3/3a/Pact_Mentor.png",
                            description: "Unlocks a special Mentoring Badge, accessible from the Party menu. You will also display a new chat title when this is active. In cities, you and your party gain 5% Swiftness."
                        },
                        {
                            name: "Productive Downtime",
                            exp: 0,
                            points: 1,
                            pic: "https://wiki.guildwars2.com/images/8/8d/Productive_Downtime.png",
                            description: "Gain bonus crafting XP, raising your crafting skills more quickly for each item crafted."
                        },
                        {
                            name: "Supply Line Management",
                            exp: 0,
                            points: 2,
                            pic: "https://wiki.guildwars2.com/images/2/26/Supply_Line_Management.png",
                            description: "Gain access to a network of regional merchants across Tyria with rare goods for trade. Your city-wide swiftness boost raises to 15%."
                        },
                        {
                            name: "Noblesse Oblige",
                            exp: 0,
                            points: 3,
                            pic: "https://wiki.guildwars2.com/images/0/05/Noblesse_Oblige.png",
                            description: "Your Revives are more powerful on the lower your ally's level. Your Revives also remove a stack of Armor Damage and Downed Penalty."
                        },
                        {
                            name: "Advanced Logistics",
                            exp: 0,
                            points: 5,
                            pic: "https://wiki.guildwars2.com/images/b/b9/Advanced_Logistics.png",
                            description: "You will automatically pick up nearby loot from fallen foes. This feature works even if you are dead as long you tag the enemy and does not work for chests/gadgets. Your City-wide swiftness boost raises to 33%."
                        }
                    ]
                },
                {
                    name: "Legendary Precursor Crafting Mastery",
                    points: 0,
                    lines: [
                        {
                            name: "Revered Antiquarian",
                            exp: 1270000,
                            points: 1,
                            pic: "img/dummy-icon.png",
                            description: "Grants Access to the First Tier of Precursor Collections."
                        },
                        {
                            name: "Magister of Legends",
                            exp: 2540000,
                            points: 4,
                            pic: "img/dummy-icon.png",
                            description: "Contributes to the Second Tier of Precursor Collections."
                        },
                        {
                            name: "Historian of the Armaments",
                            exp: 3810000,
                            points: 5,
                            pic: "img/dummy-icon.png",
                            description: "Contributes to the Third Tier of Precursor Collections."
                        },
                        {
                            name: "Scholar of Maguuma's Secrets",
                            exp: 5080000,
                            points: 10,
                            pic: "img/dummy-icon.png",
                            description: "Grants Access to Heart of Maguuma Precursor Collections."
                        }
                    ]
                }
            ]
        }
    ]
};

