let allPatterns = [
    { 
        id: 1, 
        name: "Simple Beanie", 
        level: "Beginner", 
        category: 1, 
        duration: "Short", 
        image: "The Cozy Loop/Images/beanie.png",
        description: "This simple beanie is perfect for beginners learning to crochet in the round. It's quick to make and uses basic stitches that will help you build confidence. The finished beanie is cozy, warm, and makes a great gift!",
        materials: [
            "200g worsted weight yarn in your choice of color",
            "5.5mm (I-9) crochet hook",
            "Tapestry needle for weaving in ends",
            "Scissors",
            "Stitch marker (optional but helpful)"
        ],
        steps: [
            {
                title: "Create the Magic Ring",
                instructions: [
                    "Start with a magic ring",
                    "Chain 2 (counts as first half double crochet)",
                    "Work 10 half double crochet into the ring",
                    "Pull tight and join with slip stitch to first chain"
                ]
            },
            {
                title: "Round 2 - Increase",
                instructions: [
                    "Chain 2, work 2 half double crochet in each stitch around",
                    "You should have 20 stitches",
                    "Join with slip stitch"
                ]
            },
            {
                title: "Continue Increasing",
                instructions: [
                    "Round 3: Chain 2, *1 hdc in next stitch, 2 hdc in next stitch*, repeat around (30 stitches)",
                    "Round 4: Chain 2, *1 hdc in next 2 stitches, 2 hdc in next stitch*, repeat around (40 stitches)",
                    "Continue until the circle measures about 5 inches across"
                ]
            },
            {
                title: "Work Even Rounds",
                instructions: [
                    "Once your circle is the right size, stop increasing",
                    "Work even rounds (1 hdc in each stitch) for about 6-7 inches",
                    "This creates the body of the beanie"
                ]
            },
            {
                title: "Finish",
                instructions: [
                    "Fasten off and weave in all ends",
                    "Turn up the brim if desired",
                    "Add a pom-pom on top (optional)"
                ]
            }
        ]
    },
    { 
        id: 2, 
        name: "Crochet Cardigan", 
        level: "Intermediate", 
        category: 1, 
        duration: "Long", 
        image: "The Cozy Loop/Images/beanie.png",
        description: "A beautiful, cozy cardigan perfect for layering. This intermediate project will teach you how to create wearable garments with proper shaping and construction techniques. The result is a stylish piece you'll wear for years!",
        materials: [
            "800g DK weight yarn in your choice of color",
            "4.5mm (G-7) crochet hook",
            "Tapestry needle",
            "Scissors",
            "5-7 buttons (optional)",
            "Stitch markers"
        ],
        steps: [
            {
                title: "Create Foundation Chain for Back Panel",
                instructions: [
                    "Measure desired back width and create foundation chain",
                    "Chain should be a multiple of your stitch pattern plus turning chain",
                    "Work in rows using your chosen stitch pattern",
                    "Continue until back panel reaches desired length to underarm"
                ]
            },
            {
                title: "Shape Armholes",
                instructions: [
                    "Slip stitch across first 3-4 stitches",
                    "Work across to last 3-4 stitches, turn",
                    "Decrease 1 stitch at each end every other row 2-3 times",
                    "Work even until armhole measures desired depth"
                ]
            },
            {
                title: "Create Front Panels",
                instructions: [
                    "Work two front panels using half the back panel width",
                    "Mirror the armhole shaping on each side",
                    "Create neckline shaping by decreasing on one side only"
                ]
            },
            {
                title: "Make Sleeves",
                instructions: [
                    "Start with cuff width and chain accordingly",
                    "Increase gradually to create sleeve shape",
                    "Work to desired length",
                    "Shape sleeve cap to fit armhole"
                ]
            },
            {
                title: "Assemble and Finish",
                instructions: [
                    "Sew shoulder seams",
                    "Set in sleeves",
                    "Sew side and sleeve seams",
                    "Add button band and buttonholes if desired",
                    "Weave in all ends and block to measurements"
                ]
            }
        ]
    },
    { 
        id: 3, 
        name: "Lacy Summer Top", 
        level: "Intermediate", 
        category: 1, 
        duration: "Medium", 
        image: "The Cozy Loop/Images/Lacy Summer Top.png",
        description: "A lightweight, breathable summer top with beautiful lace details. Perfect for warm weather, this top combines comfort with elegance. The openwork pattern creates a delicate, feminine look.",
        materials: [
            "400g cotton or bamboo blend yarn",
            "3.5mm (E-4) crochet hook",
            "Tapestry needle",
            "Scissors",
            "Stitch markers"
        ],
        steps: [
            {
                title: "Start with Shell Stitch Pattern",
                instructions: [
                    "Chain in multiples of 6 plus 2 for foundation",
                    "Row 1: Work shells (5 dc in one stitch) with chain spaces between",
                    "Continue shell pattern for 3-4 inches",
                    "This creates the lacy bottom border"
                ]
            },
            {
                title: "Create Body",
                instructions: [
                    "Transition to body stitch pattern",
                    "Work in rows to desired length to underarm",
                    "Maintain consistent tension for even drape"
                ]
            },
            {
                title: "Shape Armholes and Neckline",
                instructions: [
                    "Divide for front and back at underarms",
                    "Work back first, shaping armholes",
                    "Create front with deeper neckline shaping"
                ]
            },
            {
                title: "Finish Edges",
                instructions: [
                    "Join shoulder seams",
                    "Work single crochet around armholes",
                    "Add decorative edging around neckline",
                    "Weave in ends and block"
                ]
            }
        ]
    },
    { 
        id: 4, 
        name: "Chunky Sweater", 
        level: "Advanced", 
        category: 1, 
        duration: "Long", 
        image: "The Cozy Loop/Images/Chunky Sweater.png",
        description: "A cozy, oversized chunky sweater that's perfect for cold weather. This advanced project features textured stitches and requires knowledge of garment construction, but the result is a stunning, professional-looking piece.",
        materials: [
            "1000g super bulky weight yarn",
            "10mm (N-15) crochet hook",
            "Tapestry needle",
            "Scissors",
            "Large stitch markers",
            "Measuring tape"
        ],
        steps: [
            {
                title: "Work Bottom Ribbing",
                instructions: [
                    "Chain desired width in multiples for ribbing pattern",
                    "Work in back loop only single crochet for 2-3 inches",
                    "This creates the stretchy ribbed hem"
                ]
            },
            {
                title: "Create Body with Textured Stitches",
                instructions: [
                    "Switch to main stitch pattern (bobbles, popcorns, or cables)",
                    "Work in rounds or rows to underarm",
                    "Keep track of pattern repeats carefully"
                ]
            },
            {
                title: "Construct Raglan Sleeves",
                instructions: [
                    "Mark raglan shaping points",
                    "Decrease at raglan lines every row or every other row",
                    "Work sleeve and body together for seamless construction"
                ]
            },
            {
                title: "Complete Neckline and Cuffs",
                instructions: [
                    "Work ribbed collar in the round",
                    "Add ribbed cuffs to sleeves",
                    "Weave in all ends securely",
                    "Block to finished measurements"
                ]
            }
        ]
    },
    { 
        id: 5, 
        name: "Granny Skirt", 
        level: "Intermediate", 
        category: 1, 
        duration: "Medium", 
        image: "The Cozy Loop/Images/Granny Skirt.png",
        description: "A fun, boho-style skirt made with colorful granny squares. This project is a great way to use up yarn scraps and create a unique, eye-catching garment. Perfect for festivals or casual summer wear!",
        materials: [
            "500g DK weight yarn in multiple colors",
            "4mm (G-6) crochet hook",
            "Tapestry needle",
            "Elastic waistband (1 inch wide)",
            "Scissors",
            "Sewing needle and thread"
        ],
        steps: [
            {
                title: "Make Granny Squares",
                instructions: [
                    "Create magic ring, chain 3, work 2 dc, chain 2, (3 dc, chain 2) 3 times",
                    "Round 2: (3 dc, chain 2, 3 dc) in each corner, 3 dc in side spaces",
                    "Continue for 3-4 rounds until squares are 5-6 inches",
                    "Make 20-30 squares depending on size needed"
                ]
            },
            {
                title: "Join Squares",
                instructions: [
                    "Arrange squares in desired color pattern",
                    "Join using slip stitch or whipstitch method",
                    "Create rows, then join rows together",
                    "Form tube shape for skirt body"
                ]
            },
            {
                title: "Create Waistband",
                instructions: [
                    "Work single crochet evenly around top edge",
                    "Fold over to create casing for elastic",
                    "Leave small opening for elastic insertion"
                ]
            },
            {
                title: "Add Elastic and Finish",
                instructions: [
                    "Thread elastic through waistband casing",
                    "Adjust to fit and sew ends together",
                    "Close opening in waistband",
                    "Add decorative border at hem if desired",
                    "Weave in all ends"
                ]
            }
        ]
    },
    { 
        id: 6, 
        name: "Infinity Scarf", 
        level: "Beginner", 
        category: 2, 
        duration: "Medium", 
        image: "The Cozy Loop/Images/Infinity Scarf.png",
        description: "A cozy infinity scarf that's perfect for beginners. This project teaches you to work in the round and creates a warm, stylish accessory. The continuous loop design means no ends to weave in at the finish!",
        materials: [
            "300g worsted weight yarn",
            "6mm (J-10) crochet hook",
            "Tapestry needle",
            "Scissors",
            "Stitch marker"
        ],
        steps: [
            {
                title: "Create Foundation Chain",
                instructions: [
                    "Chain 150-200 stitches (depending on desired length)",
                    "Join with slip stitch to first chain, being careful not to twist",
                    "Place stitch marker to mark beginning of round"
                ]
            },
            {
                title: "Work in Rounds",
                instructions: [
                    "Round 1: Chain 1, single crochet in each chain around",
                    "Continue working in continuous rounds",
                    "Use half double crochet or your preferred stitch"
                ]
            },
            {
                title: "Continue to Desired Width",
                instructions: [
                    "Work rounds until scarf is 8-12 inches wide",
                    "Maintain even tension throughout",
                    "Move stitch marker up each round"
                ]
            },
            {
                title: "Finish",
                instructions: [
                    "Slip stitch to join last round",
                    "Fasten off",
                    "Weave in ends securely",
                    "Optional: add fringe or tassels"
                ]
            }
        ]
    },
    { 
        id: 7, 
        name: "Fingerless Gloves", 
        level: "Beginner", 
        category: 2, 
        duration: "Short", 
        image: "The Cozy Loop/Images/Fingerless Gloves.png",
        description: "Quick and easy fingerless gloves that keep your hands warm while allowing your fingers to move freely. Perfect for typing, texting, or crafting on chilly days!",
        materials: [
            "100g worsted weight yarn",
            "5mm (H-8) crochet hook",
            "Tapestry needle",
            "Scissors",
            "Stitch marker"
        ],
        steps: [
            {
                title: "Create Ribbed Cuff",
                instructions: [
                    "Chain 30-35 for wrist circumference",
                    "Join to form ring, being careful not to twist",
                    "Work in back loop only for ribbed texture",
                    "Work 2-3 inches of ribbing"
                ]
            },
            {
                title: "Work Hand Portion",
                instructions: [
                    "Switch to working in both loops",
                    "Work in continuous rounds for 3-4 inches",
                    "Leave opening for thumb by chaining across 4-6 stitches"
                ]
            },
            {
                title: "Create Thumb Opening",
                instructions: [
                    "Next round: work into chain stitches from previous round",
                    "Continue for another inch past thumb opening",
                    "This allows glove to fit snugly around hand"
                ]
            },
            {
                title: "Finish",
                instructions: [
                    "Work final round of single crochet around top edge",
                    "Fasten off and weave in ends",
                    "Optional: add decorative edging around thumb and top",
                    "Make second glove to match"
                ]
            }
        ]
    },
    { 
        id: 8, 
        name: "Bucket Hat", 
        level: "Intermediate", 
        category: 2, 
        duration: "Medium", 
        image: "The Cozy Loop/Images/Bucket Hat.png",
        description: "A trendy bucket hat that's perfect for sunny days. This intermediate project teaches crown shaping and brim construction. Customize with your favorite colors for a unique accessory!",
        materials: [
            "200g cotton yarn",
            "4mm (G-6) crochet hook",
            "Tapestry needle",
            "Scissors",
            "Stitch marker"
        ],
        steps: [
            {
                title: "Create Crown",
                instructions: [
                    "Start with magic ring",
                    "Work in spiral rounds, increasing to create flat circle",
                    "Continue until crown measures 6-7 inches diameter",
                    "Use increase pattern: Round 1: 12 sts, Round 2: 24 sts, etc."
                ]
            },
            {
                title: "Work Sides",
                instructions: [
                    "Stop increasing and work even rounds",
                    "Work 4-5 inches straight down for hat sides",
                    "This creates the bucket shape"
                ]
            },
            {
                title: "Create Brim",
                instructions: [
                    "Begin increasing again for brim",
                    "Increase every 3rd or 4th stitch",
                    "Work 2-3 inches for brim width",
                    "Brim should flare out naturally"
                ]
            },
            {
                title: "Finish",
                instructions: [
                    "Work final round with tight stitches for firm edge",
                    "Fasten off and weave in ends",
                    "Block brim to desired shape",
                    "Optional: add decorative band or embellishments"
                ]
            }
        ]
    },
    { 
        id: 9, 
        name: "Crochet Tote Bag", 
        level: "Intermediate", 
        category: 2, 
        duration: "Medium", 
        image: "The Cozy Loop/Images/Crochet Tote Bag.png",
        description: "A sturdy, practical tote bag perfect for shopping or beach trips. This project uses durable stitches and teaches you how to create strong, functional handles.",
        materials: [
            "400g cotton or jute yarn",
            "5mm (H-8) crochet hook",
            "Tapestry needle",
            "Scissors",
            "Optional: fabric lining material"
        ],
        steps: [
            {
                title: "Create Base",
                instructions: [
                    "Chain 30 for rectangular base",
                    "Work in rows of single crochet for 6-8 rows",
                    "This creates sturdy bottom of bag",
                    "Alternative: work oval base from center out"
                ]
            },
            {
                title: "Work Sides",
                instructions: [
                    "Work in continuous rounds around base perimeter",
                    "Use tight single crochet or half double crochet",
                    "Work 10-12 inches tall for bag body",
                    "Maintain even tension for structured shape"
                ]
            },
            {
                title: "Create Handles",
                instructions: [
                    "Mark placement for handles on opposite sides",
                    "Chain 40-50 for each handle",
                    "Attach and reinforce with multiple rows",
                    "Or create separate handles and sew on securely"
                ]
            },
            {
                title: "Finish",
                instructions: [
                    "Work decorative edge around top if desired",
                    "Weave in all ends securely",
                    "Optional: add fabric lining for extra durability",
                    "Block to shape if needed"
                ]
            }
        ]
    },
    { 
        id: 10, 
        name: "Headband with Bow", 
        level: "Beginner", 
        category: 2, 
        duration: "Short", 
        image: "The Cozy Loop/Images/Headband with Bow.png",
        description: "An adorable headband with a decorative bow. This quick project is perfect for using up yarn scraps and makes great gifts. The bow adds a cute, feminine touch!",
        materials: [
            "50g worsted weight yarn",
            "5mm (H-8) crochet hook",
            "Tapestry needle",
            "Scissors",
            "Button or elastic (optional)"
        ],
        steps: [
            {
                title: "Create Headband",
                instructions: [
                    "Chain 10-12 for headband width",
                    "Work in rows of half double crochet",
                    "Continue until band fits around head comfortably",
                    "Leave about 1 inch shorter for stretch"
                ]
            },
            {
                title: "Make Bow",
                instructions: [
                    "Chain 20 for bow width",
                    "Work 6-8 rows of double crochet",
                    "Fasten off leaving long tail",
                    "Gather center tightly to create bow shape"
                ]
            },
            {
                title: "Create Bow Center Wrap",
                instructions: [
                    "Chain 6 and work 3-4 rows",
                    "Wrap around gathered center of bow",
                    "Sew ends together at back"
                ]
            },
            {
                title: "Assemble",
                instructions: [
                    "Sew or button ends of headband together",
                    "Alternative: add elastic for adjustable fit",
                    "Attach bow to headband with needle and thread",
                    "Position bow on side or center as preferred",
                    "Weave in all ends"
                ]
            }
        ]
    },
    { 
        id: 11, 
        name: "Granny Square Blanket", 
        level: "Beginner", 
        category: 3, 
        duration: "Long", 
        image: "The Cozy Loop/Images/Granny Square Blanket.png",
        description: "A classic granny square blanket that's perfect for beginners. This timeless project is portable, relaxing, and creates a cozy heirloom piece. Use multiple colors for a vibrant look or stick to one color for modern elegance.",
        materials: [
            "1000g worsted weight yarn in multiple colors",
            "5.5mm (I-9) crochet hook",
            "Tapestry needle",
            "Scissors"
        ],
        steps: [
            {
                title: "Make Individual Granny Squares",
                instructions: [
                    "Create magic ring, chain 3 (counts as dc)",
                    "Work (2 dc, chain 2, 3 dc, chain 2) 3 times in ring",
                    "Join with slip stitch to top of beginning chain",
                    "Continue adding rounds until square is 6 inches",
                    "Make 48-63 squares depending on desired blanket size"
                ]
            },
            {
                title: "Arrange Color Pattern",
                instructions: [
                    "Lay out all squares in desired arrangement",
                    "Plan your color pattern before joining",
                    "Take a photo for reference while assembling"
                ]
            },
            {
                title: "Join Squares",
                instructions: [
                    "Use join-as-you-go method or join after completing all squares",
                    "Whipstitch or slip stitch squares together",
                    "Work in rows, then join rows together",
                    "Keep joins consistent for neat appearance"
                ]
            },
            {
                title: "Add Border",
                instructions: [
                    "Work single crochet evenly around entire blanket",
                    "Add 2-3 rounds of decorative border",
                    "Consider shell stitch or picot edge",
                    "Weave in all ends and block if desired"
                ]
            }
        ]
    },
    { 
        id: 12, 
        name: "Textured Cushion Cover", 
        level: "Intermediate", 
        category: 3, 
        duration: "Medium", 
        image: "The Cozy Loop/Images/Textured Cushion Cover.png",
        description: "A beautiful textured cushion cover that adds a cozy touch to any room. This project teaches various textured stitches like bobbles, popcorns, and cables to create visual interest.",
        materials: [
            "300g worsted weight yarn",
            "5mm (H-8) crochet hook",
            "Tapestry needle",
            "Scissors",
            "16-inch cushion insert",
            "4-5 buttons or zipper"
        ],
        steps: [
            {
                title: "Create Front Panel with Texture",
                instructions: [
                    "Chain 60 for 16-inch square",
                    "Work in chosen textured stitch pattern",
                    "Options: bobble stitch, cable stitch, or popcorn stitch",
                    "Continue for 16 inches square",
                    "Keep tension even for neat appearance"
                ]
            },
            {
                title: "Create Back Panel",
                instructions: [
                    "Work plain back panel in single or double crochet",
                    "Make same size as front panel",
                    "Alternative: make two overlapping panels for envelope back"
                ]
            },
            {
                title: "Add Button Band or Zipper",
                instructions: [
                    "For button closure: work buttonholes on one back panel",
                    "Sew buttons to opposite panel",
                    "For zipper: sew zipper between two back panels",
                    "Or simply sew three sides for sewn closure"
                ]
            },
            {
                title: "Assemble",
                instructions: [
                    "Place front and back panels wrong sides together",
                    "Single crochet or whipstitch around three sides",
                    "Leave one side open for cushion insert",
                    "Insert cushion and close opening",
                    "Weave in all ends"
                ]
            }
        ]
    },
    { 
        id: 13, 
        name: "Crochet Plant Hanger", 
        level: "Beginner", 
        category: 3, 
        duration: "Short", 
        image: "The Cozy Loop/Images/Plant Hanger.png",
        description: "A trendy macramé-style plant hanger perfect for displaying your favorite plants. This simple project uses basic stitches and teaches you to work with multiple strands.",
        materials: [
            "200g cotton cord or thick yarn",
            "6mm (J-10) crochet hook (or use fingers)",
            "Wooden or metal ring (2-3 inches diameter)",
            "Scissors",
            "Plant pot (6-8 inches diameter)"
        ],
        steps: [
            {
                title: "Prepare Strands",
                instructions: [
                    "Cut 8 pieces of cord, each 8 feet long",
                    "Fold each in half and attach to ring with lark's head knot",
                    "You now have 16 hanging strands"
                ]
            },
            {
                title: "Create Upper Section",
                instructions: [
                    "Divide strands into 4 groups of 4",
                    "Work chain or spiral stitch down each group for 12 inches",
                    "Keep all four sections even length"
                ]
            },
            {
                title: "Form Basket",
                instructions: [
                    "Group strands: take 2 from each adjacent section",
                    "Work chain or square knots for 4 inches",
                    "This creates the basket that holds the pot",
                    "Repeat around all four sides"
                ]
            },
            {
                title: "Finish Bottom",
                instructions: [
                    "Gather all strands together at bottom",
                    "Tie tightly in overhand knot",
                    "Trim ends evenly or leave long fringe",
                    "Hang and test with plant pot before use"
                ]
            }
        ]
    },
    { 
        id: 14, 
        name: "Table Runner", 
        level: "Intermediate", 
        category: 3, 
        duration: "Medium", 
        image: "The Cozy Loop/Images/Table Runner.png",
        description: "An elegant table runner with beautiful lace motifs. Perfect for dinner parties or everyday elegance, this project uses openwork stitches to create a delicate, heirloom-quality piece.",
        materials: [
            "300g cotton thread or fine yarn",
            "2.5mm (B-1) or 3mm (C-2) crochet hook",
            "Tapestry needle",
            "Scissors",
            "Blocking pins and mat"
        ],
        steps: [
            {
                title: "Create Foundation",
                instructions: [
                    "Chain desired length for table runner (usually 36-60 inches)",
                    "Work foundation row in your chosen lace pattern",
                    "Common patterns include pineapple, fan, or filet crochet"
                ]
            },
            {
                title: "Work Lace Pattern",
                instructions: [
                    "Follow your chosen lace pattern repeat",
                    "Work to desired width (typically 12-16 inches)",
                    "Keep tension consistent for even openwork",
                    "Count stitches carefully on each row"
                ]
            },
            {
                title: "Create Border",
                instructions: [
                    "Work decorative edging around all sides",
                    "Options: picot edge, shell edge, or scallop edge",
                    "Corners may need extra stitches for neat shaping"
                ]
            },
            {
                title: "Block and Finish",
                instructions: [
                    "Pin runner to blocking mat at finished dimensions",
                    "Spray with water or starch solution",
                    "Let dry completely before removing pins",
                    "Weave in all ends invisibly"
                ]
            }
        ]
    },
    { 
        id: 15, 
        name: "Round Rug", 
        level: "Advanced", 
        category: 3, 
        duration: "Long", 
        image: "The Cozy Loop/Images/Round Rug.png",
        description: "A beautiful, durable round rug that adds warmth and texture to any room. This advanced project uses thick yarn or fabric strips and teaches you to create a large, flat circle with proper increases.",
        materials: [
            "1500g super bulky yarn or t-shirt yarn",
            "12mm (P/Q) crochet hook or larger",
            "Tapestry needle",
            "Scissors",
            "Non-slip rug pad (optional)"
        ],
        steps: [
            {
                title: "Create Center Ring",
                instructions: [
                    "Make a large magic ring or chain 6 and join",
                    "Round 1: Work 12 single crochet into ring",
                    "Pull ring tight and join with slip stitch",
                    "This forms the center of your rug"
                ]
            },
            {
                title: "Work Increase Rounds",
                instructions: [
                    "Round 2: Work 2 sc in each stitch (24 sts)",
                    "Round 3: *1 sc, 2 sc in next st*, repeat (36 sts)",
                    "Round 4: *1 sc in next 2 sts, 2 sc in next st*, repeat (48 sts)",
                    "Continue increase pattern, adding one more sc between increases each round"
                ]
            },
            {
                title: "Maintain Flat Circle",
                instructions: [
                    "Work increases evenly to keep rug laying flat",
                    "If edges ruffle, decrease increase frequency",
                    "If rug cups, add more increases",
                    "Continue to desired diameter (typically 3-5 feet)"
                ]
            },
            {
                title: "Finish Edge",
                instructions: [
                    "Work final round with no increases for firm edge",
                    "Optional: work reverse single crochet for decorative border",
                    "Fasten off and weave in ends securely",
                    "Add non-slip pad underneath for safety"
                ]
            }
        ]
    },
    { 
        id: 16, 
        name: "Amigurumi Bunny", 
        level: "Intermediate", 
        category: 4, 
        duration: "Medium", 
        image: "The Cozy Loop/Images/Amigurumi Bunny.png",
        description: "An adorable stuffed bunny that's perfect for gifts or nursery decor. This intermediate amigurumi project teaches you to create and assemble multiple pieces for a cute, cuddly toy.",
        materials: [
            "200g worsted weight yarn (white or pink)",
            "Smaller amounts for details (nose, eyes)",
            "3.5mm (E-4) crochet hook",
            "Fiberfill stuffing",
            "Safety eyes (12mm)",
            "Tapestry needle",
            "Scissors",
            "Stitch marker"
        ],
        steps: [
            {
                title: "Create Head",
                instructions: [
                    "Start with magic ring, work 6 sc into ring",
                    "Round 2: 2 sc in each st (12 sts)",
                    "Round 3: *1 sc, 2 sc in next*, repeat (18 sts)",
                    "Continue increasing until head is 3-4 inches wide",
                    "Work even rounds for 2 inches, then decrease to close",
                    "Stuff firmly before closing completely"
                ]
            },
            {
                title: "Make Body",
                instructions: [
                    "Work same as head but larger",
                    "Create oval shape by working more rounds before decreasing",
                    "Stuff as you go",
                    "Leave opening for attaching to head"
                ]
            },
            {
                title: "Create Ears, Arms, and Legs",
                instructions: [
                    "Ears: Work long oval shapes, no stuffing needed",
                    "Arms: Small cylinders, lightly stuffed",
                    "Legs: Slightly larger cylinders with flat bottoms",
                    "Make two of each piece",
                    "Leave long tails for sewing"
                ]
            },
            {
                title: "Assemble and Add Details",
                instructions: [
                    "Attach safety eyes to head before closing",
                    "Sew head to body securely",
                    "Attach ears to top of head",
                    "Sew arms and legs to body",
                    "Embroider nose and mouth with pink yarn",
                    "Add pompom tail if desired"
                ]
            }
        ]
    },
    { 
        id: 17, 
        name: "Mini Octopus", 
        level: "Beginner", 
        category: 4, 
        duration: "Short", 
        image: "The Cozy Loop/Images/Mini Octopus.png",
        description: "A quick and cute mini octopus that's perfect for beginners learning amigurumi. This little creature makes a great keychain or small gift and uses minimal yarn.",
        materials: [
            "50g worsted weight yarn",
            "3.5mm (E-4) crochet hook",
            "Small amount of fiberfill",
            "Safety eyes or black yarn for eyes",
            "Tapestry needle",
            "Scissors"
        ],
        steps: [
            {
                title: "Create Head/Body",
                instructions: [
                    "Magic ring, work 6 sc into ring",
                    "Increase to 24 stitches over next few rounds",
                    "Work even for about 8-10 rounds",
                    "Begin decreasing to create rounded bottom"
                ]
            },
            {
                title: "Stuff Head",
                instructions: [
                    "Add safety eyes between rounds 6-8",
                    "Stuff head firmly with fiberfill",
                    "Don't close bottom - tentacles will attach here"
                ]
            },
            {
                title: "Make Tentacles",
                instructions: [
                    "From bottom opening, chain 15-20 for each tentacle",
                    "Work back along chain with slip stitch or single crochet",
                    "Make 8 tentacles evenly spaced around opening",
                    "Tentacles will curl naturally"
                ]
            },
            {
                title: "Finish",
                instructions: [
                    "Weave in all ends",
                    "Shape tentacles as desired",
                    "Optional: add blush to cheeks with pink yarn or fabric paint",
                    "Add keychain ring if desired"
                ]
            }
        ]
    },
    { 
        id: 18, 
        name: "Crochet Teddy Bear", 
        level: "Intermediate", 
        category: 4, 
        duration: "Medium", 
        image: "The Cozy Loop/Images/Teddy Bear.png",
        description: "A classic teddy bear that's perfect for cuddling. This intermediate project creates a timeless toy with jointed limbs and a sweet expression. A wonderful handmade gift for children or collectors!",
        materials: [
            "250g worsted weight yarn (brown, beige, or your choice)",
            "3.5mm (E-4) crochet hook",
            "Fiberfill stuffing",
            "Safety eyes (15mm)",
            "Safety nose or black yarn",
            "Tapestry needle",
            "Scissors",
            "Optional: joint discs for moveable limbs"
        ],
        steps: [
            {
                title: "Create Head",
                instructions: [
                    "Start with magic ring, increase to 42 stitches",
                    "Work even rounds to create sphere shape",
                    "Add safety eyes and nose partway through",
                    "Decrease to close, stuff very firmly",
                    "Create muzzle separately and attach to face"
                ]
            },
            {
                title: "Make Body",
                instructions: [
                    "Create oval shape larger than head",
                    "Start narrow, increase to widest point, then decrease",
                    "Stuff firmly as you work",
                    "Leave opening at top for attaching head"
                ]
            },
            {
                title: "Create Arms and Legs",
                instructions: [
                    "Arms: Work cylinders with rounded paws",
                    "Legs: Larger cylinders with flat feet",
                    "Add paw pads with contrasting color if desired",
                    "Stuff all limbs firmly",
                    "Leave long tails for sewing or use joint discs"
                ]
            },
            {
                title: "Add Ears and Assemble",
                instructions: [
                    "Make two semi-circle ears",
                    "Sew ears to top of head",
                    "Attach head to body securely",
                    "Attach arms and legs to body",
                    "Optional: add bow tie or scarf",
                    "Embroider mouth and any details"
                ]
            }
        ]
    },
    { 
        id: 19, 
        name: "Dinosaur Plush", 
        level: "Advanced", 
        category: 4, 
        duration: "Long", 
        image: "The Cozy Loop/Images/Dinosaur Plush.png",
        description: "A fun and colorful dinosaur plush toy that's perfect for dino-loving kids. This advanced project includes spikes, tail, and detailed shaping to create a realistic prehistoric friend!",
        materials: [
            "300g worsted weight yarn (main color)",
            "100g contrasting color for spikes and belly",
            "3.5mm (E-4) crochet hook",
            "Fiberfill stuffing",
            "Safety eyes (18mm)",
            "Tapestry needle",
            "Scissors",
            "Stitch markers"
        ],
        steps: [
            {
                title: "Create Head with Snout",
                instructions: [
                    "Work rounded head shape with increases and decreases",
                    "Create elongated snout by working more rounds at front",
                    "Add safety eyes on sides of head",
                    "Stuff head firmly",
                    "Create small horns or crests if desired"
                ]
            },
            {
                title: "Make Body",
                instructions: [
                    "Start at neck, increase for wide body",
                    "Work body as large oval shape",
                    "Add contrasting belly panel in different color",
                    "Stuff body very firmly for stability",
                    "Shape should be rounded and full"
                ]
            },
            {
                title: "Create Legs, Arms, and Tail",
                instructions: [
                    "Legs: Thick, sturdy cylinders with flat feet and claws",
                    "Arms: Smaller than legs, with three claws each",
                    "Tail: Long, tapered cone that curves naturally",
                    "Stuff all pieces firmly",
                    "Tail should be long enough to balance dinosaur"
                ]
            },
            {
                title: "Add Spikes and Assemble",
                instructions: [
                    "Create triangular spikes in contrasting color",
                    "Sew spikes along back from head to tail tip",
                    "Attach head to body with strong stitching",
                    "Attach legs securely for standing",
                    "Attach arms to upper body",
                    "Sew tail to back of body",
                    "Add any final details like teeth or spots"
                ]
            }
        ]
    },
    { 
        id: 20, 
        name: "Crochet Ball", 
        level: "Beginner", 
        category: 4, 
        duration: "Short", 
        image: "The Cozy Loop/Images/Crochet Ball.png",
        description: "A simple, soft crochet ball that's perfect for babies and toddlers. This beginner-friendly project is quick to make and great for practicing increasing and decreasing in the round. Safe and washable!",
        materials: [
            "100g worsted weight yarn (washable cotton recommended)",
            "4mm (G-6) crochet hook",
            "Fiberfill stuffing or wool stuffing",
            "Tapestry needle",
            "Scissors",
            "Optional: small bell or rattle insert"
        ],
        steps: [
            {
                title: "Start the Ball",
                instructions: [
                    "Create magic ring, work 6 sc into ring",
                    "Round 2: 2 sc in each st around (12 sts)",
                    "Round 3: *1 sc, 2 sc in next*, repeat (18 sts)",
                    "Round 4: *1 sc in next 2, 2 sc in next*, repeat (24 sts)",
                    "Continue increasing until ball is half desired size"
                ]
            },
            {
                title: "Work Middle Rounds",
                instructions: [
                    "Once ball reaches desired width, work even rounds",
                    "Work without increases or decreases for several rounds",
                    "This creates the middle section of the sphere",
                    "Optional: insert rattle or bell at this point"
                ]
            },
            {
                title: "Begin Decreasing",
                instructions: [
                    "Start decreasing: *sc in next 2, decrease*, repeat around",
                    "Continue decreasing same rate as you increased",
                    "Stuff ball firmly as you decrease",
                    "Keep stuffing even and smooth"
                ]
            },
            {
                title: "Close and Finish",
                instructions: [
                    "Continue decreasing until opening is small",
                    "Add final stuffing",
                    "Close last 6 stitches together",
                    "Weave in end securely",
                    "Optional: embroider simple face or patterns on ball surface"
                ]
            }
        ]
    }
];

let categories = [ 
    {id: 1, category: "Clothing"},
    {id: 2, category: "Accessories"},
    {id: 3, category: "Home Decor"},
    {id: 4, category: "Toys"}
];