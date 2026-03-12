const games = [
  {
    id: "a-small-world-cup",
    title: "A Small World Cup",
    src: "https://mc0825.github.io/g16/class-680/",
    img: "https://jamestore214.github.io/img/class-680.png",
    tags: ["new", "soccer", "multiplayer", "fun", "best"]
  },
  {
    id: "subway-surfers",
    title: "Subway Surfers",
    src: "https://jamestore214.github.io/g26/class-444/",
    img: "https://jamestore214.github.io/img/class-444.png",
    tags: ["new", "popular", "adventure", "fun", "best"]
  },
  {
    id: "murder",
    title: "Murder",
    src: "https://jamestore214.github.io/g72/class-580/",
    img: "https://jamestore214.github.io/img/class-580.png",
    tags: ["new", "multiplayer", "fun"]
  },
  {
    id: "slope",
    title: "Slope",
    src: "https://jamestore214.github.io/g5/class-450",
    img: "https://jamestore214.github.io/img/class-450.png",
    tags: ["new", "popular", "3d", "fun", "best"]
  },
  {
    id: "swat",
    title: "Swat",
    src: "https://mc0825.github.io/g97/class-792/",
    img: "https://jamestore214.github.io/img/class-792.png",
    tags: ["new", "survival", "3d"]
  },
  {
    id: "lol",
    title: "lol",
    src: "https://mc0825.github.io/g20/class-440/",
    img: "https://jamestore214.github.io/img/class-440.png",
    tags: ["new", "multiplayer", "fun"]
  },
  {
    id: "snow-rider",
    title: "Snow Rider",
    src: "https://mc0825.github.io/g26/class-537/",
    img: "https://jamestore214.github.io/img/class-537.png",
    tags: ["new", "racing", "fun"]
  },
  {
    id: "shotz",
    title: "Shotz",
    src: "https://mc0825.github.io/g22/class-394/",
    img: "https://mc0825.github.io/img/class-394.png",
    tags: ["survival", "3d"]
  },
  {
    id: "goalkeeper-challenge",
    title: "Goalkeeper Challenge",
    src: "https://mc0825.github.io/g68/class-1049/",
    img: "https://mc0825.github.io/img/class-1049.png",
    tags: ["soccer", "3d"]
  },
  {
    id: "stair-race",
    title: "Stair Race 3D",
    src: "https://mc0825.github.io/g2/class-619/",
    img: "https://mc0825.github.io/img/class-619.png",
    tags: ["popular", "3d", "fun"]
  },
  {
    id: "among-us",
    title: "Among Us",
    src: "https://mc0825.github.io/g5/class-468/",
    img: "https://mc0825.github.io/img/class-468.png",
    tags: ["popular", "multiplayer", "survival", "best"]
  },
  {
    id: "sausage-flip",
    title: "Sausage Flip",
    src: "https://mc0825.github.io/g2/class-415/",
    img: "https://mc0825.github.io/img/class-415.png",
    tags: ["popular", "puzzle", "fun"]
  },
  {
    id: "fireboy-and-watergirl",
    title: "Fireboy and Watergirl",
    src: "https://mc0825.github.io/g177/class-346/",
    img: "https://mc0825.github.io/img/class-346.png",
    tags: ["popular", "puzzle", "multiplayer", "best"]
  },
  {
    id: "fruit-ninja",
    title: "Fruit Ninja",
    src: "https://mc0825.github.io/g50/class-22/",
    img: "https://mc0825.github.io/img/class-22.png",
    tags: ["popular", "girls", "fun"]
  },
  {
    id: "red-ball",
    title: "Red Ball 4",
    src: "https://mc0825.github.io/g22/class-491/",
    img: "https://mc0825.github.io/img/class-491.png",
    tags: ["popular", "adventure", "fun"]
  },
  {
    id: "gobble-top",
    title: "Gobble Top",
    src: "https://mc0825.github.io/g9/class-420/",
    img: "https://mc0825.github.io/img/class-420.png",
    tags: ["survival", "multiplayer"]
  },
  {
    id: "bitlife",
    title: "Bitlife",
    src: "https://mc0825.github.io/g5/class-441/",
    img: "https://mc0825.github.io/img/class-441.png",
    tags: ["popular", "simulators", "fun", "best"]
  },
  {
    id: "traffic-rush",
    title: "Traffic Rush",
    src: "https://mc0825.github.io/g22/class-393/",
    img: "https://mc0825.github.io/img/class-393.png",
    tags: ["puzzle", "cars", "fun"]
  },
  {
    id: "penalty-kick",
    title: "Penalty Kick",
    src: "https://mc0825.github.io/g5/class-519/",
    img: "https://mc0825.github.io/img/class-519.png",
    tags: ["soccer", "3d"]
  },
  {
    id: "blumi-soccer",
    title: "Blumgi Soccer",
    src: "https://mc0825.github.io/g68/class-1050/",
    img: "https://mc0825.github.io/img/class-1050.png",
    tags: ["soccer", "fun"]
  },
  {
    id: "stick-rush",
    title: "Stick Rush",
    src: "https://mc0825.github.io/g68/class-982/",
    img: "https://mc0825.github.io/img/class-982.png",
    tags: ["survival", "adventure"]
  },
  {
    id: "bumber-cars-soccer",
    title: "Bumper Cars Soccer",
    src: "https://mc0825.github.io/g16/class-665/",
    img: "https://mc0825.github.io/img/class-665.png",
    tags: ["soccer", "cars", "multiplayer", "fun"]
  },
  {
    id: "elastic-man",
    title: "Elastic Man",
    src: "https://mc0825.github.io/g97/class-500/",
    img: "https://mc0825.github.io/img/class-500.png",
    tags: ["popular", "fun", "girls"]
  },
  {
    id: "super-soccer",
    title: "Super Soccer",
    src: "https://mc0825.github.io/g69/class-628/",
    img: "https://mc0825.github.io/img/class-628.png",
    tags: ["soccer", "multiplayer"]
  },
  {
    id: "idle-lumber",
    title: "Idle Lumber",
    src: "https://mc0825.github.io/g72/class-586/",
    img: "https://mc0825.github.io/img/class-586.png",
    tags: ["simulators", "fun"]
  },
  {
    id: "school-escape",
    title: "School Escape",
    src: "https://mc0825.github.io/g72/class-894/",
    img: "https://mc0825.github.io/img/class-894.png",
    tags: ["adventure", "survival", "fun"]
  },
  {
    id: "stunt-cars",
    title: "Madalin Stunt Cars",
    src: "https://mc0825.github.io/g5/class-566/",
    img: "https://mc0825.github.io/img/class-566.png",
    tags: ["racing", "cars", "3d", "multiplayer", "best"]
  },
  {
    id: "parking-fury",
    title: "Parking Fury 3D",
    src: "https://mc0825.github.io/g3/class-725/",
    img: "https://mc0825.github.io/img/class-725.png",
    tags: ["racing", "cars", "3d", "simulators"]
  },
  {
    id: "monster-tracks",
    title: "Monster Tracks",
    src: "https://mc0825.github.io/g72/class-414/",
    img: "https://mc0825.github.io/img/class-414.png",
    tags: ["racing", "cars", "fun"]
  },
  {
    id: "supercars-royale",
    title: "Supercars Royale",
    src: "https://mc0825.github.io/g66/class-976/",
    img: "https://mc0825.github.io/img/class-976.png",
    tags: ["racing", "cars", "3d", "multiplayer"]
  },
  {
    id: "ground-digger",
    title: "Ground Digger",
    src: "https://mc0825.github.io/g68/class-1067/",
    img: "https://mc0825.github.io/img/class-1067.png",
    tags: ["simulators", "survival"]
  },
  {
    id: "bike",
    title: "MotorBike",
    src: "https://mc0825.github.io/g68/class-1078/",
    img: "https://mc0825.github.io/img/class-1078.png",
    tags: ["racing", "3d"]
  },
  {
    id: "viking",
    title: "Viking Village",
    src: "https://mc0825.github.io/g66/class-1005/",
    img: "https://mc0825.github.io/img/class-1005.png",
    tags: ["adventure", "survival", "fun"]
  },
  {
    id: "rocket",
    title: "Blumgi Rocket",
    src: "https://mc0825.github.io/g16/class-413/",
    img: "https://mc0825.github.io/img/class-413.png",
    tags: ["racing", "fun"]
  },
  {
    id: "sniper",
    title: "Lethal Sniper 3D",
    src: "https://mc0825.github.io/g74/class-257/",
    img: "https://mc0825.github.io/img/class-257.png",
    tags: ["3d", "survival", "best"]
  },
  {
    id: "alien",
    title: "Aliens Nest",
    src: "https://mc0825.github.io/g74/class-275/",
    img: "https://mc0825.github.io/img/class-275.png",
    tags: ["survival", "adventure"]
  },
  {
    id: "johny-shooter",
    title: "Johnny Trigger Action Shooter",
    src: "https://mc0825.github.io/g66/class-953/",
    img: "https://mc0825.github.io/img/class-953.png",
    tags: ["3d", "survival", "best"]
  },
  {
    id: "soccer-random",
    title: "Soccer Random",
    src: "https://mc0825.github.io/g26/class-511/",
    img: "https://mc0825.github.io/img/class-511.png",
    tags: ["soccer", "multiplayer", "fun"]
  },
  {
    id: "idle-ants",
    title: "Idle Ants",
    src: "https://mc0825.github.io/g72/class-631/",
    img: "https://mc0825.github.io/img/class-631.png",
    tags: ["simulators", "fun"]
  },
  {
    id: "minecraft",
    title: "Minecraft",
    src: "https://classic.minecraft.net/",
    img: "https://thumbs.dreamstime.com/b/minecraft-logo-online-game-dirt-block-illustrations-concept-design-isolated-186775550.jpg",
    tags: ["popular", "survival", "multiplayer", "adventure", "3d", "best"]
  },
  {
    id: "run",
    title: "Run 3",
    src: "https://lekug.github.io/tn6pS9dCf37xAhkJv/",
    img: "https://www.speedrun.com/static/game/2680l51p/cover.png?v=f231ea7",
    tags: ["popular", "adventure", "3d", "best"]
  },
  {
    id: "stickman",
    title: "Stickman Hook",
    src: "https://jamestore214.github.io/g5/class-406/",
    img: "https://mc0825.github.io/img/class-406.png",
    tags: ["popular", "adventure", "fun"]
  },
  {
    id: "rush",
    title: "Tunnel Rush",
    src: "https://jamestore214.github.io/g69/class-653/",
    img: "https://mc0825.github.io/img/class-653.png",
    tags: ["popular", "3d", "fun"]
  },
  {
    id: "defenders",
    title: "Stick Defenders",
    src: "https://jamestore214.github.io/g2/class-416/",
    img: "https://mc0825.github.io/img/class-416.png",
    tags: ["survival", "multiplayer"]
  },
  {
    id: "parkour",
    title: "DeadHead Parkour",
    src: "https://jamestore214.github.io/g97/class-412/",
    img: "https://mc0825.github.io/img/class-412.png",
    tags: ["popular", "adventure", "new"]
  },
  {
    id: "paperio",
    title: "Paper Io 3d",
    src: "https://lesson1225.github.io/lesson305/lesson-414/",
    img: "https://lesson1225.github.io/img/lesson-414.png",
    tags: ["multiplayer", "3d", "new"]
  },
  {
    id: "clusterrush",
    title: "Cluster Rush",
    src: "https://lesson1225.github.io/lesson302/lesson-129/",
    img: "https://lesson1225.github.io/img/lesson-129.png",
    tags: ["adventure", "3d"]
  },
  {
    id: "shotter3573",
    title: "Time Shooter 3",
    src: "https://lesson1225.github.io/lesson85/lesson-2232/",
    img: "https://lesson1225.github.io/img/lesson-2232.png",
    tags: ["3d", "survival", "new", "popular"]
  },
  {
    id: "pubg",
    title: "Pubg",
    src: "https://lesson1225.github.io/lesson85/lesson-2233/",
    img: "https://lesson1225.github.io/img/lesson-2233.png",
    tags: ["survival", "multiplayer", "3d", "new", "popular"]
  },
  {
    id: "plantsvs",
    title: "Plants vs Zombies",
    src: "https://lesson1225.github.io/lesson305/lesson-416/",
    img: "https://lesson1225.github.io/img/lesson-416.png",
    tags: ["puzzle", "survival", "new", "popular"]
  },
  {
    id: "headsoccer",
    title: "Head Soccer",
    src: "https://lesson1225.github.io/lesson302/lesson-72/",
    img: "https://lesson1225.github.io/img/lesson-72.png",
    tags: ["soccer", "multiplayer"]
  },
  {
    id: "backrooms",
    title: "Backrooms",
    src: "https://lesson1225.github.io/lesson305/lesson-411/",
    img: "https://lesson1225.github.io/img/lesson-441.png",
    tags: ["adventure", "survival", "new", "popular"]
  },,
  {
    id: "narrow-one",
    title: "Narrow One",
    src: "https://classroom6x.github.io/go/class-4.html",
    img: "https://mc0825.github.io/img/class-4.png",
    tags: ["multiplayer", "survival", "popular"]
  },
  {
    id: "slope",
    title: "Slope",
    src: "https://classroom6x.github.io/go/class-6.html",
    img: "https://mc0825.github.io/img/class-6.png",
    tags: ["3d", "popular", "best"]
  },
  {
    id: "drift-boss",
    title: "Drift Boss",
    src: "https://classroom6x.github.io/go/class-10.html",
    img: "https://mc0825.github.io/img/class-10.png",
    tags: ["racing", "cars", "popular"]
  },
  {
    id: "stickman-hook",
    title: "Stickman Hook",
    src: "https://classroom6x.github.io/go/class-29.html",
    img: "https://mc0825.github.io/img/class-29.png",
    tags: ["adventure", "popular"]
  },
  {
    id: "retro-bowl",
    title: "Retro Bowl",
    src: "https://classroom6x.github.io/go/class-182.html",
    img: "https://mc0825.github.io/img/class-182.png",
    tags: ["simulators", "popular", "best"]
  },
  {
    id: "moto-x3m",
    title: "Moto X3M",
    src: "https://classroom6x.github.io/go/class-304.html",
    img: "https://mc0825.github.io/img/class-304.png",
    tags: ["racing", "popular", "best"]
  },
  {
    id: "drift-hunters",
    title: "Drift Hunters",
    src: "https://classroom6x.github.io/go/class-314.html",
    img: "https://mc0825.github.io/img/class-314.png",
    tags: ["racing", "cars", "3d", "popular"]
  },
  {
    id: "happy-wheels",
    title: "Happy Wheels",
    src: "https://classroom6x.github.io/go/class-318.html",
    img: "https://mc0825.github.io/img/class-318.png",
    tags: ["racing", "fun", "popular"]
  },
  {
    id: "getaway-shootout",
    title: "Getaway Shootout",
    src: "https://classroom6x.github.io/go/class-334.html",
    img: "https://mc0825.github.io/img/class-334.png",
    tags: ["multiplayer", "survival", "popular"]
  },
  {
    id: "basketball-stars",
    title: "Basketball Stars",
    src: "https://classroom6x.github.io/go/class-335.html",
    img: "https://mc0825.github.io/img/class-335.png",
    tags: ["multiplayer", "popular"]
  },
  {
    id: "1v1-lol",
    title: "1v1 LOL",
    src: "https://classroom6x.github.io/go/class-340.html",
    img: "https://mc0825.github.io/img/class-340.png",
    tags: ["multiplayer", "3d", "survival", "popular", "best"]
  },
  {
    id: "rooftop-snipers",
    title: "Rooftop Snipers",
    src: "https://classroom6x.github.io/go/class-347.html",
    img: "https://mc0825.github.io/img/class-347.png",
    tags: ["multiplayer", "survival", "popular"]
  },
  {
    id: "run-3",
    title: "Run 3",
    src: "https://classroom6x.github.io/go/class-348.html",
    img: "https://mc0825.github.io/img/class-348.png",
    tags: ["adventure", "3d", "popular", "best"]
  },
  {
    id: "among-us",
    title: "Among Us",
    src: "https://classroom6x.github.io/go/class-349.html",
    img: "https://mc0825.github.io/img/class-349.png",
    tags: ["multiplayer", "survival", "popular"]
  },
  {
    id: "bob-the-robber",
    title: "Bob the Robber",
    src: "https://classroom6x.github.io/go/class-350.html",
    img: "https://mc0825.github.io/img/class-350.png",
    tags: ["adventure", "puzzle"]
  },
  {
    id: "fnaf",
    title: "Five Nights at Freddys",
    src: "https://classroom6x.github.io/go/class-351.html",
    img: "https://mc0825.github.io/img/class-351.png",
    tags: ["survival", "popular"]
  },
  {
    id: "geometry-dash",
    title: "Geometry Dash",
    src: "https://classroom6x.github.io/go/class-357.html",
    img: "https://mc0825.github.io/img/class-357.png",
    tags: ["adventure", "popular", "best"]
  },
  {
    id: "krunker",
    title: "Krunker.io",
    src: "https://classroom6x.github.io/go/class-358.html",
    img: "https://mc0825.github.io/img/class-358.png",
    tags: ["multiplayer", "3d", "survival", "popular"]
  },
  {
    id: "paper-io",
    title: "Paper.io 2",
    src: "https://classroom6x.github.io/go/class-359.html",
    img: "https://mc0825.github.io/img/class-359.png",
    tags: ["multiplayer", "popular"]
  },
  {
    id: "smash-karts",
    title: "Smash Karts",
    src: "https://classroom6x.github.io/go/class-363.html",
    img: "https://mc0825.github.io/img/class-363.png",
    tags: ["racing", "cars", "multiplayer", "popular"]
  },
  {
    id: "snake-io",
    title: "Snake.io",
    src: "https://classroom6x.github.io/go/class-364.html",
    img: "https://mc0825.github.io/img/class-364.png",
    tags: ["multiplayer", "popular"]
  },
  {
    id: "tunnel-rush",
    title: "Tunnel Rush",
    src: "https://classroom6x.github.io/go/class-370.html",
    img: "https://mc0825.github.io/img/class-370.png",
    tags: ["3d", "popular", "best"]
  },
  {
    id: "short-life",
    title: "Short Life",
    src: "https://classroom6x.github.io/go/class-378.html",
    img: "https://mc0825.github.io/img/class-378.png",
    tags: ["puzzle", "fun"]
  },
  {
    id: "vex-5",
    title: "Vex 5",
    src: "https://classroom6x.github.io/go/class-379.html",
    img: "https://mc0825.github.io/img/class-379.png",
    tags: ["adventure", "popular"]
  },
  {
    id: "flappy-bird",
    title: "Flappy Bird",
    src: "https://classroom6x.github.io/go/class-386.html",
    img: "https://mc0825.github.io/img/class-386.png",
    tags: ["fun", "popular"]
  },
  {
    id: "cookie-clicker",
    title: "Cookie Clicker",
    src: "https://classroom6x.github.io/go/class-389.html",
    img: "https://mc0825.github.io/img/class-389.png",
    tags: ["simulators", "popular"]
  },
  {
    id: "age-of-war",
    title: "Age of War",
    src: "https://classroom6x.github.io/go/class-392.html",
    img: "https://mc0825.github.io/img/class-392.png",
    tags: ["survival", "puzzle", "popular"]
  },
  {
    id: "car-rush",
    title: "Car Rush",
    src: "https://classroom6x.github.io/go/class-399.html",
    img: "https://mc0825.github.io/img/class-399.png",
    tags: ["racing", "cars", "fun"]
  },
  {
    id: "crossy-road",
    title: "Crossy Road",
    src: "https://classroom6x.github.io/go/class-409.html",
    img: "https://mc0825.github.io/img/class-409.png",
    tags: ["adventure", "popular"]
  },
  {
    id: "temple-run",
    title: "Temple Run",
    src: "https://classroom6x.github.io/go/class-417.html",
    img: "https://mc0825.github.io/img/class-417.png",
    tags: ["adventure", "popular"]
  },
  {
    id: "angry-birds",
    title: "Angry Birds",
    src: "https://classroom6x.github.io/go/class-422.html",
    img: "https://mc0825.github.io/img/class-422.png",
    tags: ["puzzle", "popular"]
  },
  {
    id: "jetpack-joyride",
    title: "Jetpack Joyride",
    src: "https://classroom6x.github.io/go/class-424.html",
    img: "https://mc0825.github.io/img/class-424.png",
    tags: ["adventure", "popular"]
  },
  {
    id: "bloons-td",
    title: "Bloons Tower Defense",
    src: "https://classroom6x.github.io/go/class-426.html",
    img: "https://mc0825.github.io/img/class-426.png",
    tags: ["puzzle", "survival", "popular"]
  },
  {
    id: "cut-the-rope",
    title: "Cut the Rope",
    src: "https://classroom6x.github.io/go/class-434.html",
    img: "https://mc0825.github.io/img/class-434.png",
    tags: ["puzzle", "fun"]
  },
  {
    id: "super-mario",
    title: "Super Mario Bros",
    src: "https://classroom6x.github.io/go/class-436.html",
    img: "https://mc0825.github.io/img/class-436.png",
    tags: ["adventure", "popular", "best"]
  },
  {
    id: "minecraft",
    title: "Minecraft Classic",
    src: "https://classroom6x.github.io/go/class-437.html",
    img: "https://mc0825.github.io/img/class-437.png",
    tags: ["survival", "3d", "adventure", "popular"]
  },
  {
    id: "kingdom-rush",
    title: "Kingdom Rush",
    src: "https://classroom6x.github.io/go/class-438.html",
    img: "https://mc0825.github.io/img/class-438.png",
    tags: ["puzzle", "survival", "popular"]
  },
  {
    id: "plants-vs-zombies",
    title: "Plants vs Zombies",
    src: "https://classroom6x.github.io/go/class-439.html",
    img: "https://mc0825.github.io/img/class-439.png",
    tags: ["puzzle", "survival", "popular"]
  },
  {
    id: "learn-to-fly",
    title: "Learn to Fly",
    src: "https://classroom6x.github.io/go/class-447.html",
    img: "https://mc0825.github.io/img/class-447.png",
    tags: ["adventure", "fun"]
  },
  {
    id: "burrito-bison",
    title: "Burrito Bison",
    src: "https://classroom6x.github.io/go/class-448.html",
    img: "https://mc0825.github.io/img/class-448.png",
    tags: ["adventure", "fun"]
  },
  {
    id: "subway-surfers",
    title: "Subway Surfers",
    src: "https://classroom6x.github.io/go/class-449.html",
    img: "https://mc0825.github.io/img/class-449.png",
    tags: ["adventure", "popular", "best"]
  },
  {
    id: "stick-war",
    title: "Stick War",
    src: "https://classroom6x.github.io/go/class-451.html",
    img: "https://mc0825.github.io/img/class-451.png",
    tags: ["survival", "puzzle"]
  },
  {
    id: "electric-man",
    title: "Electric Man 2",
    src: "https://classroom6x.github.io/go/class-453.html",
    img: "https://mc0825.github.io/img/class-453.png",
    tags: ["survival", "multiplayer"]
  },
  {
    id: "bad-ice-cream",
    title: "Bad Ice Cream",
    src: "https://classroom6x.github.io/go/class-455.html",
    img: "https://mc0825.github.io/img/class-455.png",
    tags: ["multiplayer", "fun"]
  },
  {
    id: "fireboy-watergirl",
    title: "Fireboy and Watergirl",
    src: "https://classroom6x.github.io/go/class-456.html",
    img: "https://mc0825.github.io/img/class-456.png",
    tags: ["multiplayer", "puzzle", "popular"]
  },
  {
    id: "snow-rider",
    title: "Snow Rider 3D",
    src: "https://classroom6x.github.io/go/class-458.html",
    img: "https://mc0825.github.io/img/class-458.png",
    tags: ["racing", "3d", "popular"]
  },
  {
    id: "earn-to-die",
    title: "Earn to Die",
    src: "https://classroom6x.github.io/go/class-459.html",
    img: "https://mc0825.github.io/img/class-459.png",
    tags: ["racing", "cars", "survival"]
  },
  {
    id: "paper-minecraft",
    title: "Paper Minecraft",
    src: "https://classroom6x.github.io/go/class-460.html",
    img: "https://mc0825.github.io/img/class-460.png",
    tags: ["survival", "adventure", "popular"]
  },
  {
    id: "penalty-kick",
    title: "Penalty Kick",
    src: "https://classroom6x.github.io/go/class-461.html",
    img: "https://mc0825.github.io/img/class-461.png",
    tags: ["soccer", "popular"]
  },
  {
    id: "stair-race",
    title: "Stair Race 3D",
    src: "https://classroom6x.github.io/go/class-462.html",
    img: "https://mc0825.github.io/img/class-462.png",
    tags: ["3d", "racing", "fun"]
  },
  {
    id: "red-ball",
    title: "Red Ball 4",
    src: "https://classroom6x.github.io/go/class-463.html",
    img: "https://mc0825.github.io/img/class-463.png",
    tags: ["adventure", "puzzle", "popular"]
  },
  {
    id: "drive-mad",
    title: "Drive Mad",
    src: "https://classroom6x.github.io/go/class-464.html",
    img: "https://mc0825.github.io/img/class-464.png",
    tags: ["racing", "cars", "fun", "new"]
  },
  {
    id: "moto-x3m-winter",
    title: "Moto X3M Winter",
    src: "https://classroom6x.github.io/go/class-472.html",
    img: "https://mc0825.github.io/img/class-472.png",
    tags: ["racing", "fun"]
  },
  {
    id: "chess",
    title: "Chess",
    src: "https://classroom6x.github.io/go/class-474.html",
    img: "https://mc0825.github.io/img/class-474.png",
    tags: ["puzzle", "multiplayer"]
  },
  {
    id: "2048",
    title: "2048",
    src: "https://classroom6x.github.io/go/class-476.html",
    img: "https://mc0825.github.io/img/class-476.png",
    tags: ["puzzle", "popular"]
  },
  {
    id: "jetski-rush",
    title: "Jetski Rush",
    src: "https://classroom6x.github.io/go/class-479.html",
    img: "https://mc0825.github.io/img/class-479.png",
    tags: ["racing", "fun"]
  },
  {
    id: "super-smash-flash",
    title: "Super Smash Flash 2",
    src: "https://classroom6x.github.io/go/class-480.html",
    img: "https://mc0825.github.io/img/class-480.png",
    tags: ["multiplayer", "popular", "best"]
  },
  {
    id: "head-ball",
    title: "Head Ball 2",
    src: "https://classroom6x.github.io/go/class-481.html",
    img: "https://mc0825.github.io/img/class-481.png",
    tags: ["soccer", "multiplayer"]
  },
  {
    id: "fall-boys",
    title: "Fall Boys",
    src: "https://classroom6x.github.io/go/class-482.html",
    img: "https://mc0825.github.io/img/class-482.png",
    tags: ["multiplayer", "3d", "fun"]
  },
  {
    id: "bowman",
    title: "Bowman 2",
    src: "https://classroom6x.github.io/go/class-485.html",
    img: "https://mc0825.github.io/img/class-485.png",
    tags: ["multiplayer", "survival"]
  },
  {
    id: "crazy-cattle",
    title: "Crazy Cattle 3D",
    src: "https://classroom6x.github.io/go/class-488.html",
    img: "https://mc0825.github.io/img/class-488.png",
    tags: ["multiplayer", "3d", "fun", "new"]
  },
  {
    id: "friday-night",
    title: "Friday Night Funkin",
    src: "https://classroom6x.github.io/go/class-490.html",
    img: "https://mc0825.github.io/img/class-490.png",
    tags: ["fun", "popular"]
  },
  {
    id: "time-shooter",
    title: "Time Shooter 3",
    src: "https://classroom6x.github.io/go/class-498.html",
    img: "https://mc0825.github.io/img/class-498.png",
    tags: ["survival", "3d"]
  },
  {
    id: "minecraft-2",
    title: "Minecraft 2",
    src: "https://classroom6x.github.io/go/class-501.html",
    img: "https://mc0825.github.io/img/class-501.png",
    tags: ["survival", "3d", "adventure"]
  },
  {
    id: "shell-shockers",
    title: "Shell Shockers",
    src: "https://classroom6x.github.io/go/class-505.html",
    img: "https://mc0825.github.io/img/class-505.png",
    tags: ["multiplayer", "3d", "survival", "popular"]
  },
  {
    id: "boxing-random",
    title: "Boxing Random",
    src: "https://classroom6x.github.io/go/class-506.html",
    img: "https://mc0825.github.io/img/class-506.png",
    tags: ["multiplayer", "fun"]
  },
  {
    id: "dirt-bike",
    title: "Dirt Bike",
    src: "https://classroom6x.github.io/go/class-522.html",
    img: "https://mc0825.github.io/img/class-522.png",
    tags: ["racing", "fun"]
  },
  {
    id: "clicker-heroes",
    title: "Clicker Heroes",
    src: "https://classroom6x.github.io/go/class-525.html",
    img: "https://mc0825.github.io/img/class-525.png",
    tags: ["simulators", "popular"]
  },
  {
    id: "sausage-flip",
    title: "Sausage Flip",
    src: "https://classroom6x.github.io/go/class-526.html",
    img: "https://mc0825.github.io/img/class-526.png",
    tags: ["puzzle", "fun"]
  },
  {
    id: "bubble-shooter",
    title: "Bubble Shooter",
    src: "https://classroom6x.github.io/go/class-527.html",
    img: "https://mc0825.github.io/img/class-527.png",
    tags: ["puzzle", "girls", "popular"]
  },
  {
    id: "idle-lumber",
    title: "Idle Lumber",
    src: "https://classroom6x.github.io/go/class-528.html",
    img: "https://mc0825.github.io/img/class-528.png",
    tags: ["simulators", "fun"]
  },
  {
    id: "idle-ants",
    title: "Idle Ants",
    src: "https://classroom6x.github.io/go/class-529.html",
    img: "https://mc0825.github.io/img/class-529.png",
    tags: ["simulators", "fun"]
  },
  {
    id: "hanger",
    title: "Hanger",
    src: "https://classroom6x.github.io/go/class-533.html",
    img: "https://mc0825.github.io/img/class-533.png",
    tags: ["adventure", "fun"]
  },
  {
    id: "papa-pizzeria",
    title: "Papas Pizzeria",
    src: "https://classroom6x.github.io/go/class-548.html",
    img: "https://mc0825.github.io/img/class-548.png",
    tags: ["simulators", "girls", "fun", "popular"]
  },
  {
    id: "ground-digger",
    title: "Ground Digger",
    src: "https://classroom6x.github.io/go/class-568.html",
    img: "https://mc0825.github.io/img/class-568.png",
    tags: ["simulators", "fun"]
  },
  {
    id: "world-cup",
    title: "World Cup",
    src: "https://classroom6x.github.io/go/class-581.html",
    img: "https://mc0825.github.io/img/class-581.png",
    tags: ["soccer", "popular"]
  },
  {
    id: "soccer-random",
    title: "Soccer Random",
    src: "https://classroom6x.github.io/go/class-582.html",
    img: "https://mc0825.github.io/img/class-582.png",
    tags: ["soccer", "multiplayer", "fun"]
  },
  {
    id: "parking-fury",
    title: "Parking Fury 3D",
    src: "https://classroom6x.github.io/go/class-583.html",
    img: "https://mc0825.github.io/img/class-583.png",
    tags: ["cars", "3d", "simulators"]
  },
  {
    id: "nail-salon",
    title: "Nail Salon",
    src: "https://classroom6x.github.io/go/class-584.html",
    img: "https://mc0825.github.io/img/class-584.png",
    tags: ["girls", "fun"]
  },
  {
    id: "dress-up",
    title: "Dress Up Games",
    src: "https://classroom6x.github.io/go/class-585.html",
    img: "https://mc0825.github.io/img/class-585.png",
    tags: ["girls", "fun"]
  },
  {
    id: "cooking-mama",
    title: "Cooking Mama",
    src: "https://classroom6x.github.io/go/class-587.html",
    img: "https://mc0825.github.io/img/class-587.png",
    tags: ["girls", "simulators", "fun"]
  },
  {
    id: "make-up-artist",
    title: "Make Up Artist",
    src: "https://classroom6x.github.io/go/class-588.html",
    img: "https://mc0825.github.io/img/class-588.png",
    tags: ["girls", "fun"]
  },
  {
    id: "fashion-show",
    title: "Fashion Show",
    src: "https://classroom6x.github.io/go/class-589.html",
    img: "https://mc0825.github.io/img/class-589.png",
    tags: ["girls", "fun"]
  },
  {
    id: "mahjong",
    title: "Mahjong",
    src: "https://classroom6x.github.io/go/class-590.html",
    img: "https://mc0825.github.io/img/class-590.png",
    tags: ["puzzle", "girls"]
  },
  {
    id: "solitaire",
    title: "Solitaire",
    src: "https://classroom6x.github.io/go/class-591.html",
    img: "https://mc0825.github.io/img/class-591.png",
    tags: ["puzzle", "girls", "popular"]
  },
  {
    id: "bubble-witch",
    title: "Bubble Witch",
    src: "https://classroom6x.github.io/go/class-592.html",
    img: "https://mc0825.github.io/img/class-592.png",
    tags: ["puzzle", "girls"]
  },
  {
    id: "rally-point",
    title: "Rally Point 5",
    src: "https://classroom6x.github.io/go/class-595.html",
    img: "https://mc0825.github.io/img/class-595.png",
    tags: ["racing", "cars"]
  },
  {
    id: "moto-x3m-spooky",
    title: "Moto X3M Spooky Land",
    src: "https://classroom6x.github.io/go/class-598.html",
    img: "https://mc0825.github.io/img/class-598.png",
    tags: ["racing", "fun"]
  },
  {
    id: "car-eats-car",
    title: "Car Eats Car",
    src: "https://classroom6x.github.io/go/class-601.html",
    img: "https://mc0825.github.io/img/class-601.png",
    tags: ["cars", "racing", "survival"]
  },
  {
    id: "color-road",
    title: "Color Road",
    src: "https://classroom6x.github.io/go/class-604.html",
    img: "https://mc0825.github.io/img/class-604.png",
    tags: ["racing", "fun", "girls"]
  },
  {
    id: "road-fury",
    title: "Road Fury",
    src: "https://classroom6x.github.io/go/class-605.html",
    img: "https://mc0825.github.io/img/class-605.png",
    tags: ["racing", "cars", "survival"]
  },
  {
    id: "city-racer",
    title: "City Racer",
    src: "https://classroom6x.github.io/go/class-606.html",
    img: "https://mc0825.github.io/img/class-606.png",
    tags: ["racing", "cars", "3d"]
  },
  {
    id: "traffic-rush",
    title: "Traffic Rush",
    src: "https://classroom6x.github.io/go/class-607.html",
    img: "https://mc0825.github.io/img/class-607.png",
    tags: ["cars", "puzzle"]
  },
  {
    id: "police-chase",
    title: "Police Chase",
    src: "https://classroom6x.github.io/go/class-626.html",
    img: "https://mc0825.github.io/img/class-626.png",
    tags: ["cars", "racing", "3d"]
  },
  {
    id: "neon-rider",
    title: "Neon Rider",
    src: "https://classroom6x.github.io/go/class-627.html",
    img: "https://mc0825.github.io/img/class-627.png",
    tags: ["racing", "adventure", "fun"]
  },
  {
    id: "free-rider",
    title: "Free Rider HD",
    src: "https://classroom6x.github.io/go/class-630.html",
    img: "https://mc0825.github.io/img/class-630.png",
    tags: ["racing", "fun", "popular"]
  },
  {
    id: "super-soccer",
    title: "Super Soccer",
    src: "https://classroom6x.github.io/go/class-633.html",
    img: "https://mc0825.github.io/img/class-633.png",
    tags: ["soccer", "popular"]
  },
  {
    id: "slope-2",
    title: "Slope 2",
    src: "https://classroom6x.github.io/go/class-635.html",
    img: "https://mc0825.github.io/img/class-635.png",
    tags: ["3d", "fun"]
  },
  {
    id: "vex-6",
    title: "Vex 6",
    src: "https://classroom6x.github.io/go/class-636.html",
    img: "https://mc0825.github.io/img/class-636.png",
    tags: ["adventure", "fun"]
  },
  {
    id: "stickman-hook-2",
    title: "Stickman Hook 2",
    src: "https://classroom6x.github.io/go/class-638.html",
    img: "https://mc0825.github.io/img/class-638.png",
    tags: ["adventure", "fun"]
  },
  {
    id: "tower-defense",
    title: "Tower Defense",
    src: "https://classroom6x.github.io/go/class-641.html",
    img: "https://mc0825.github.io/img/class-641.png",
    tags: ["puzzle", "survival"]
  },
  {
    id: "bloons-td-5",
    title: "Bloons TD 5",
    src: "https://classroom6x.github.io/go/class-647.html",
    img: "https://mc0825.github.io/img/class-647.png",
    tags: ["puzzle", "survival", "popular"]
  },
  {
    id: "smash-karts-2",
    title: "Smash Karts 2",
    src: "https://classroom6x.github.io/go/class-684.html",
    img: "https://mc0825.github.io/img/class-684.png",
    tags: ["racing", "cars", "multiplayer"]
  },
  {
    id: "soccer-skills",
    title: "Soccer Skills",
    src: "https://classroom6x.github.io/go/class-685.html",
    img: "https://mc0825.github.io/img/class-685.png",
    tags: ["soccer", "fun"]
  },
  {
    id: "moto-x3m-pool",
    title: "Moto X3M Pool Party",
    src: "https://classroom6x.github.io/go/class-700.html",
    img: "https://mc0825.github.io/img/class-700.png",
    tags: ["racing", "fun"]
  },
  {
    id: "bike-mania",
    title: "Bike Mania",
    src: "https://classroom6x.github.io/go/class-701.html",
    img: "https://mc0825.github.io/img/class-701.png",
    tags: ["racing", "fun"]
  },
  {
    id: "mario-kart",
    title: "Mario Kart",
    src: "https://classroom6x.github.io/go/class-724.html",
    img: "https://mc0825.github.io/img/class-724.png",
    tags: ["racing", "cars", "popular"]
  },
  {
    id: "line-rider",
    title: "Line Rider",
    src: "https://classroom6x.github.io/go/class-751.html",
    img: "https://mc0825.github.io/img/class-751.png",
    tags: ["racing", "fun"]
  },
  {
    id: "mine-clone",
    title: "Mine Clone 4",
    src: "https://classroom6x.github.io/go/class-780.html",
    img: "https://mc0825.github.io/img/class-780.png",
    tags: ["survival", "3d", "adventure"]
  },
  {
    id: "slope-ball",
    title: "Slope Ball",
    src: "https://classroom6x.github.io/go/class-793.html",
    img: "https://mc0825.github.io/img/class-793.png",
    tags: ["3d", "fun"]
  },
  {
    id: "stick-fight",
    title: "Stick Fight",
    src: "https://classroom6x.github.io/go/class-819.html",
    img: "https://mc0825.github.io/img/class-819.png",
    tags: ["multiplayer", "survival"]
  },
  {
    id: "eggy-car",
    title: "Eggy Car",
    src: "https://classroom6x.github.io/go/class-826.html",
    img: "https://mc0825.github.io/img/class-826.png",
    tags: ["racing", "cars", "fun", "new"]
  },
  {
    id: "geometry-dash-2",
    title: "Geometry Dash Lite",
    src: "https://classroom6x.github.io/go/class-830.html",
    img: "https://mc0825.github.io/img/class-830.png",
    tags: ["adventure", "fun"]
  },
  {
    id: "princess-dress",
    title: "Princess Dress Up",
    src: "https://classroom6x.github.io/go/class-85.html",
    img: "https://mc0825.github.io/img/class-85.png",
    tags: ["girls", "fun"]
  },
  {
    id: "hair-salon",
    title: "Hair Salon",
    src: "https://classroom6x.github.io/go/class-87.html",
    img: "https://mc0825.github.io/img/class-87.png",
    tags: ["girls", "simulators"]
  },
  {
    id: "makeover",
    title: "Makeover Studio",
    src: "https://classroom6x.github.io/go/class-88.html",
    img: "https://mc0825.github.io/img/class-88.png",
    tags: ["girls", "fun"]
  },
  {
    id: "baby-care",
    title: "Baby Care",
    src: "https://classroom6x.github.io/go/class-89.html",
    img: "https://mc0825.github.io/img/class-89.png",
    tags: ["girls", "simulators"]
  },
  {
    id: "wedding-dress",
    title: "Wedding Dress Up",
    src: "https://classroom6x.github.io/go/class-95.html",
    img: "https://mc0825.github.io/img/class-95.png",
    tags: ["girls", "fun"]
  },
  {
    id: "my-little-pony",
    title: "My Little Pony",
    src: "https://classroom6x.github.io/go/class-98.html",
    img: "https://mc0825.github.io/img/class-98.png",
    tags: ["girls", "adventure", "fun"]
  },
  {
    id: "frozen-dress",
    title: "Frozen Dress Up",
    src: "https://classroom6x.github.io/go/class-102.html",
    img: "https://mc0825.github.io/img/class-102.png",
    tags: ["girls", "fun"]
  },
  {
    id: "barbie-dress",
    title: "Barbie Dress Up",
    src: "https://classroom6x.github.io/go/class-105.html",
    img: "https://mc0825.github.io/img/class-105.png",
    tags: ["girls", "fun"]
  },
  {
    id: "nail-art",
    title: "Nail Art Studio",
    src: "https://classroom6x.github.io/go/class-107.html",
    img: "https://mc0825.github.io/img/class-107.png",
    tags: ["girls", "fun"]
  },
  {
    id: "cooking-game",
    title: "Cooking Game",
    src: "https://classroom6x.github.io/go/class-108.html",
    img: "https://mc0825.github.io/img/class-108.png",
    tags: ["girls", "simulators", "fun"]
  },
  {
    id: "pet-salon",
    title: "Pet Salon",
    src: "https://classroom6x.github.io/go/class-111.html",
    img: "https://mc0825.github.io/img/class-111.png",
    tags: ["girls", "simulators"]
  },
  {
    id: "hospital",
    title: "Hospital Game",
    src: "https://classroom6x.github.io/go/class-112.html",
    img: "https://mc0825.github.io/img/class-112.png",
    tags: ["girls", "simulators"]
  },
  {
    id: "cake-maker",
    title: "Cake Maker",
    src: "https://classroom6x.github.io/go/class-113.html",
    img: "https://mc0825.github.io/img/class-113.png",
    tags: ["girls", "simulators", "fun"]
  },
  {
    id: "fashion-blog",
    title: "Fashion Blog",
    src: "https://classroom6x.github.io/go/class-114.html",
    img: "https://mc0825.github.io/img/class-114.png",
    tags: ["girls", "fun"]
  },
  {
    id: "jewelry-design",
    title: "Jewelry Design",
    src: "https://classroom6x.github.io/go/class-115.html",
    img: "https://mc0825.github.io/img/class-115.png",
    tags: ["girls", "fun"]
  },
  {
    id: "room-decor",
    title: "Room Decoration",
    src: "https://classroom6x.github.io/go/class-116.html",
    img: "https://mc0825.github.io/img/class-116.png",
    tags: ["girls", "fun"]
  },
  {
    id: "flower-shop",
    title: "Flower Shop",
    src: "https://classroom6x.github.io/go/class-117.html",
    img: "https://mc0825.github.io/img/class-117.png",
    tags: ["girls", "simulators"]
  },
  {
    id: "ice-cream",
    title: "Ice Cream Shop",
    src: "https://classroom6x.github.io/go/class-118.html",
    img: "https://mc0825.github.io/img/class-118.png",
    tags: ["girls", "simulators", "fun"]
  },
  {
    id: "princess-makeover",
    title: "Princess Makeover",
    src: "https://classroom6x.github.io/go/class-119.html",
    img: "https://mc0825.github.io/img/class-119.png",
    tags: ["girls", "fun"]
  },
  {
    id: "mermaid-dress",
    title: "Mermaid Dress Up",
    src: "https://classroom6x.github.io/go/class-120.html",
    img: "https://mc0825.github.io/img/class-120.png",
    tags: ["girls", "fun"]
  },
  {
    id: "spa-salon",
    title: "Spa Salon",
    src: "https://classroom6x.github.io/go/class-121.html",
    img: "https://mc0825.github.io/img/class-121.png",
    tags: ["girls", "simulators"]
  },
  {
    id: "puppy-care",
    title: "Puppy Care",
    src: "https://classroom6x.github.io/go/class-122.html",
    img: "https://mc0825.github.io/img/class-122.png",
    tags: ["girls", "simulators"]
  },
  {
    id: "cat-care",
    title: "Cat Care",
    src: "https://classroom6x.github.io/go/class-124.html",
    img: "https://mc0825.github.io/img/class-124.png",
    tags: ["girls", "simulators"]
  },
  {
    id: "candy-crush",
    title: "Candy Crush",
    src: "https://classroom6x.github.io/go/class-142.html",
    img: "https://mc0825.github.io/img/class-142.png",
    tags: ["puzzle", "girls", "popular"]
  },
  {
    id: "solitaire-classic",
    title: "Solitaire Classic",
    src: "https://classroom6x.github.io/go/class-211.html",
    img: "https://mc0825.github.io/img/class-211.png",
    tags: ["puzzle", "girls"]
  },
  {
    id: "mahjong-classic",
    title: "Mahjong Classic",
    src: "https://classroom6x.github.io/go/class-212.html",
    img: "https://mc0825.github.io/img/class-212.png",
    tags: ["puzzle", "girls"]
  },
  {
    id: "jigsaw",
    title: "Jigsaw Puzzle",
    src: "https://classroom6x.github.io/go/class-238.html",
    img: "https://mc0825.github.io/img/class-238.png",
    tags: ["puzzle", "girls"]
  },
  {
    id: "word-search",
    title: "Word Search",
    src: "https://classroom6x.github.io/go/class-248.html",
    img: "https://mc0825.github.io/img/class-248.png",
    tags: ["puzzle", "girls"]
  },
  {
    id: "bubble-pop",
    title: "Bubble Pop",
    src: "https://classroom6x.github.io/go/class-256.html",
    img: "https://mc0825.github.io/img/class-256.png",
    tags: ["puzzle", "girls"]
  },
  {
    id: "sudoku",
    title: "Sudoku",
    src: "https://classroom6x.github.io/go/class-270.html",
    img: "https://mc0825.github.io/img/class-270.png",
    tags: ["puzzle", "girls"]
  },
  {
    id: "cooking-fever",
    title: "Cooking Fever",
    src: "https://classroom6x.github.io/go/class-327.html",
    img: "https://mc0825.github.io/img/class-327.png",
    tags: ["girls", "simulators", "fun"]
  },
  {
    id: "hairdresser",
    title: "Hairdresser",
    src: "https://classroom6x.github.io/go/class-418.html",
    img: "https://mc0825.github.io/img/class-418.png",
    tags: ["girls", "simulators"]
  },
  {
    id: "perfume",
    title: "Perfume Making",
    src: "https://classroom6x.github.io/go/class-425.html",
    img: "https://mc0825.github.io/img/class-425.png",
    tags: ["girls", "fun"]
  },
  {
    id: "lipstick-party",
    title: "Lipstick Party",
    src: "https://classroom6x.github.io/go/class-477.html",
    img: "https://mc0825.github.io/img/class-477.png",
    tags: ["girls", "fun"]
  },
  {
    id: "tattoo-shop",
    title: "Tattoo Shop",
    src: "https://classroom6x.github.io/go/class-560.html",
    img: "https://mc0825.github.io/img/class-560.png",
    tags: ["girls", "fun"]
  },
  {
    id: "face-paint",
    title: "Face Paint",
    src: "https://classroom6x.github.io/go/class-561.html",
    img: "https://mc0825.github.io/img/class-561.png",
    tags: ["girls", "fun"]
  },
  {
    id: "bff-dress",
    title: "BFF Dress Up",
    src: "https://classroom6x.github.io/go/class-600.html",
    img: "https://mc0825.github.io/img/class-600.png",
    tags: ["girls", "fun"]
  },
  {
    id: "makeup-games",
    title: "Makeup Games",
    src: "https://classroom6x.github.io/go/class-637.html",
    img: "https://mc0825.github.io/img/class-637.png",
    tags: ["girls", "fun"]
  },
  {
    id: "princess-party",
    title: "Princess Party",
    src: "https://classroom6x.github.io/go/class-639.html",
    img: "https://mc0825.github.io/img/class-639.png",
    tags: ["girls", "fun"]
  },
  {
    id: "cute-animals",
    title: "Cute Animal Dress Up",
    src: "https://classroom6x.github.io/go/class-643.html",
    img: "https://mc0825.github.io/img/class-643.png",
    tags: ["girls", "fun"]
  },
  {
    id: "love-tester",
    title: "Love Tester",
    src: "https://classroom6x.github.io/go/class-699.html",
    img: "https://mc0825.github.io/img/class-699.png",
    tags: ["girls", "fun"]
  },
  {
    id: "fantasy-makeover",
    title: "Fantasy Makeover",
    src: "https://classroom6x.github.io/go/class-746.html",
    img: "https://mc0825.github.io/img/class-746.png",
    tags: ["girls", "fun"]
  },
  {
    id: "beauty-salon",
    title: "Beauty Salon",
    src: "https://classroom6x.github.io/go/class-752.html",
    img: "https://mc0825.github.io/img/class-752.png",
    tags: ["girls", "simulators"]
  },
  {
    id: "princess-tea",
    title: "Princess Tea Party",
    src: "https://classroom6x.github.io/go/class-753.html",
    img: "https://mc0825.github.io/img/class-753.png",
    tags: ["girls", "fun"]
  },
  {
    id: "celebrity-dress",
    title: "Celebrity Dress Up",
    src: "https://classroom6x.github.io/go/class-756.html",
    img: "https://mc0825.github.io/img/class-756.png",
    tags: ["girls", "fun"]
  },
  {
    id: "doll-makeover",
    title: "Doll Makeover",
    src: "https://classroom6x.github.io/go/class-773.html",
    img: "https://mc0825.github.io/img/class-773.png",
    tags: ["girls", "fun"]
  },
  {
    id: "nail-designer",
    title: "Nail Designer",
    src: "https://classroom6x.github.io/go/class-774.html",
    img: "https://mc0825.github.io/img/class-774.png",
    tags: ["girls", "fun"]
  },
  {
    id: "fashion-week",
    title: "Fashion Week",
    src: "https://classroom6x.github.io/go/class-848.html",
    img: "https://mc0825.github.io/img/class-848.png",
    tags: ["girls", "fun"]
  },
  {
    id: "princess-school",
    title: "Princess School",
    src: "https://classroom6x.github.io/go/class-849.html",
    img: "https://mc0825.github.io/img/class-849.png",
    tags: ["girls", "fun"]
  },
  {
    id: "animal-salon",
    title: "Animal Salon",
    src: "https://classroom6x.github.io/go/class-856.html",
    img: "https://mc0825.github.io/img/class-856.png",
    tags: ["girls", "simulators"]
  },
  {
    id: "bride-makeover",
    title: "Bride Makeover",
    src: "https://classroom6x.github.io/go/class-881.html",
    img: "https://mc0825.github.io/img/class-881.png",
    tags: ["girls", "fun"]
  },
  {
    id: "unicorn-dress",
    title: "Unicorn Dress Up",
    src: "https://classroom6x.github.io/go/class-993.html",
    img: "https://mc0825.github.io/img/class-993.png",
    tags: ["girls", "fun"]
  },
  {
    id: "build-royale",
    title: "Build Royale",
    src: "https://classroom6x.github.io/go/class-1002.html",
    img: "https://mc0825.github.io/img/class-1002.png",
    tags: ["multiplayer", "3d", "survival", "new"]
  },
  {
    id: "tiny-fishing",
    title: "Tiny Fishing",
    src: "https://classroom6x.github.io/go/class-1003.html",
    img: "https://mc0825.github.io/img/class-1003.png",
    tags: ["simulators", "fun", "new"]
  },
  {
    id: "monkey-mart",
    title: "Monkey Mart",
    src: "https://classroom6x.github.io/go/class-1004.html",
    img: "https://mc0825.github.io/img/class-1004.png",
    tags: ["simulators", "fun", "new"]
  },
  {
    id: "geometry-dash-3",
    title: "Geometry Dash Subzero",
    src: "https://classroom6x.github.io/go/class-1006.html",
    img: "https://mc0825.github.io/img/class-1006.png",
    tags: ["adventure", "fun", "new"]
  },
  {
    id: "stick-merge",
    title: "Stick Merge",
    src: "https://classroom6x.github.io/go/class-1007.html",
    img: "https://mc0825.github.io/img/class-1007.png",
    tags: ["survival", "fun", "new"]
  },
  {
    id: "word-scapes",
    title: "Wordscapes",
    src: "https://classroom6x.github.io/go/class-1008.html",
    img: "https://mc0825.github.io/img/class-1008.png",
    tags: ["puzzle", "girls", "new"]
  },
  {
    id: "count-masters",
    title: "Count Masters",
    src: "https://classroom6x.github.io/go/class-1009.html",
    img: "https://mc0825.github.io/img/class-1009.png",
    tags: ["multiplayer", "fun", "new"]
  },
  {
    id: "soccer-caps",
    title: "Soccer Caps",
    src: "https://classroom6x.github.io/go/class-1010.html",
    img: "https://mc0825.github.io/img/class-1010.png",
    tags: ["soccer", "multiplayer", "new"]
  },
  {
    id: "dino-run",
    title: "Dino Run",
    src: "https://classroom6x.github.io/go/class-1011.html",
    img: "https://mc0825.github.io/img/class-1011.png",
    tags: ["adventure", "fun", "new"]
  },
  {
    id: "slope-run",
    title: "Slope Run",
    src: "https://classroom6x.github.io/go/class-1012.html",
    img: "https://mc0825.github.io/img/class-1012.png",
    tags: ["3d", "fun", "new"]
  },
  {
    id: "color-fill",
    title: "Color Fill",
    src: "https://classroom6x.github.io/go/class-1013.html",
    img: "https://mc0825.github.io/img/class-1013.png",
    tags: ["puzzle", "fun", "new"]
  },
  {
    id: "squid-game",
    title: "Squid Game",
    src: "https://classroom6x.github.io/go/class-1014.html",
    img: "https://mc0825.github.io/img/class-1014.png",
    tags: ["multiplayer", "survival", "new"]
  },
  {
    id: "parkour-block-3d",
    title: "Parkour Block 3D",
    src: "https://classroom6x.github.io/go/class-1015.html",
    img: "https://mc0825.github.io/img/class-1015.png",
    tags: ["adventure", "3d", "new"]
  },
  {
    id: "moto-x3m-4",
    title: "Moto X3M 4",
    src: "https://classroom6x.github.io/go/class-1016.html",
    img: "https://mc0825.github.io/img/class-1016.png",
    tags: ["racing", "fun", "new"]
  },
  {
    id: "gun-mayhem",
    title: "Gun Mayhem",
    src: "https://classroom6x.github.io/go/class-1017.html",
    img: "https://mc0825.github.io/img/class-1017.png",
    tags: ["multiplayer", "survival", "new"]
  },
  {
    id: "bubble-trouble",
    title: "Bubble Trouble",
    src: "https://classroom6x.github.io/go/class-1018.html",
    img: "https://mc0825.github.io/img/class-1018.png",
    tags: ["puzzle", "fun", "new"]
  },
  {
    id: "stick-duel",
    title: "Stick Duel",
    src: "https://classroom6x.github.io/go/class-1019.html",
    img: "https://mc0825.github.io/img/class-1019.png",
    tags: ["multiplayer", "survival", "new"]
  },
  {
    id: "crazy-roll",
    title: "Crazy Roll 3D",
    src: "https://classroom6x.github.io/go/class-1020.html",
    img: "https://mc0825.github.io/img/class-1020.png",
    tags: ["3d", "racing", "new"]
  },
  {
    id: "rocket-bot",
    title: "Rocket Bot Royale",
    src: "https://classroom6x.github.io/go/class-1021.html",
    img: "https://mc0825.github.io/img/class-1021.png",
    tags: ["multiplayer", "3d", "survival", "new"]
  },
  {
    id: "draw-climber",
    title: "Draw Climber",
    src: "https://classroom6x.github.io/go/class-1022.html",
    img: "https://mc0825.github.io/img/class-1022.png",
    tags: ["puzzle", "fun", "new"]
  },
  {
    id: "money-clicker",
    title: "Money Clicker",
    src: "https://classroom6x.github.io/go/class-1023.html",
    img: "https://mc0825.github.io/img/class-1023.png",
    tags: ["simulators", "fun", "new"]
  },
  {
    id: "poppy-playtime",
    title: "Poppy Playtime",
    src: "https://classroom6x.github.io/go/class-1024.html",
    img: "https://mc0825.github.io/img/class-1024.png",
    tags: ["survival", "adventure", "new"]
  },
  {
    id: "basketbros",
    title: "BasketBros",
    src: "https://classroom6x.github.io/go/class-1025.html",
    img: "https://mc0825.github.io/img/class-1025.png",
    tags: ["multiplayer", "fun", "new"]
  },
  {
    id: "penalty-shooters",
    title: "Penalty Shooters 2",
    src: "https://classroom6x.github.io/go/class-1026.html",
    img: "https://mc0825.github.io/img/class-1026.png",
    tags: ["soccer", "fun", "new"]
  },
  {
    id: "diggy",
    title: "Diggy",
    src: "https://classroom6x.github.io/go/class-1027.html",
    img: "https://mc0825.github.io/img/class-1027.png",
    tags: ["adventure", "simulators", "new"]
  },
  {
    id: "stone-merge",
    title: "Stone Merge",
    src: "https://classroom6x.github.io/go/class-1028.html",
    img: "https://mc0825.github.io/img/class-1028.png",
    tags: ["puzzle", "fun", "new"]
  },
  {
    id: "jump-ball",
    title: "Jump Ball",
    src: "https://classroom6x.github.io/go/class-1029.html",
    img: "https://mc0825.github.io/img/class-1029.png",
    tags: ["fun", "new"]
  },
  {
    id: "drift-car",
    title: "Drift Car City",
    src: "https://classroom6x.github.io/go/class-1030.html",
    img: "https://mc0825.github.io/img/class-1030.png",
    tags: ["racing", "cars", "3d", "new"]
  },
  {
    id: "roller-baller",
    title: "Roller Baller",
    src: "https://classroom6x.github.io/go/class-1031.html",
    img: "https://mc0825.github.io/img/class-1031.png",
    tags: ["3d", "fun", "new"]
  },
  {
    id: "bike-rush",
    title: "Bike Rush",
    src: "https://classroom6x.github.io/go/class-1032.html",
    img: "https://mc0825.github.io/img/class-1032.png",
    tags: ["racing", "adventure", "new"]
  },
  {
    id: "raft-wars",
    title: "Raft Wars",
    src: "https://classroom6x.github.io/go/class-1033.html",
    img: "https://mc0825.github.io/img/class-1033.png",
    tags: ["multiplayer", "survival", "new"]
  },
  {
    id: "word-connect",
    title: "Word Connect",
    src: "https://classroom6x.github.io/go/class-1034.html",
    img: "https://mc0825.github.io/img/class-1034.png",
    tags: ["puzzle", "girls", "new"]
  },
  {
    id: "archery-world",
    title: "Archery World",
    src: "https://classroom6x.github.io/go/class-1035.html",
    img: "https://mc0825.github.io/img/class-1035.png",
    tags: ["fun", "new"]
  },
  {
    id: "car-simulator",
    title: "Car Simulator",
    src: "https://classroom6x.github.io/go/class-1036.html",
    img: "https://mc0825.github.io/img/class-1036.png",
    tags: ["cars", "simulators", "3d", "new"]
  },
  {
    id: "balls-bounce",
    title: "Balls Bounce",
    src: "https://classroom6x.github.io/go/class-1037.html",
    img: "https://mc0825.github.io/img/class-1037.png",
    tags: ["puzzle", "fun", "new"]
  },
  {
    id: "space-is-key",
    title: "Space is Key",
    src: "https://classroom6x.github.io/go/class-1038.html",
    img: "https://mc0825.github.io/img/class-1038.png",
    tags: ["puzzle", "fun", "new"]
  },
  {
    id: "pong",
    title: "Pong",
    src: "https://classroom6x.github.io/go/class-1039.html",
    img: "https://mc0825.github.io/img/class-1039.png",
    tags: ["multiplayer", "fun", "new"]
  },
  {
    id: "ludo-king",
    title: "Ludo King",
    src: "https://classroom6x.github.io/go/class-1040.html",
    img: "https://mc0825.github.io/img/class-1040.png",
    tags: ["multiplayer", "fun", "new"]
  },
  {
    id: "merge-cannon",
    title: "Merge Cannon",
    src: "https://classroom6x.github.io/go/class-1042.html",
    img: "https://mc0825.github.io/img/class-1042.png",
    tags: ["puzzle", "survival", "new"]
  },
  {
    id: "brick-breaker",
    title: "Brick Breaker",
    src: "https://classroom6x.github.io/go/class-1043.html",
    img: "https://mc0825.github.io/img/class-1043.png",
    tags: ["puzzle", "fun", "new"]
  },
  {
    id: "car-parking",
    title: "Car Parking Game",
    src: "https://classroom6x.github.io/go/class-1044.html",
    img: "https://mc0825.github.io/img/class-1044.png",
    tags: ["cars", "simulators", "new"]
  },
  {
    id: "flipper-dunk",
    title: "Flipper Dunk",
    src: "https://classroom6x.github.io/go/class-1045.html",
    img: "https://mc0825.github.io/img/class-1045.png",
    tags: ["fun", "new"]
  },
  {
    id: "block-puzzle",
    title: "Block Puzzle",
    src: "https://classroom6x.github.io/go/class-1046.html",
    img: "https://mc0825.github.io/img/class-1046.png",
    tags: ["puzzle", "new"]
  },
  {
    id: "temple-run-2",
    title: "Temple Run 2",
    src: "https://classroom6x.github.io/go/class-1047.html",
    img: "https://mc0825.github.io/img/class-1047.png",
    tags: ["adventure", "popular", "new"]
  },
  {
    id: "fish-eat-fish",
    title: "Fish Eat Fish",
    src: "https://classroom6x.github.io/go/class-1048.html",
    img: "https://mc0825.github.io/img/class-1048.png",
    tags: ["multiplayer", "fun", "new"]
  },
  {
    id: "battle-boats",
    title: "Battle Boats",
    src: "https://classroom6x.github.io/go/class-1051.html",
    img: "https://mc0825.github.io/img/class-1051.png",
    tags: ["multiplayer", "survival", "new"]
  },
  {
    id: "flip-master",
    title: "Flip Master",
    src: "https://classroom6x.github.io/go/class-1052.html",
    img: "https://mc0825.github.io/img/class-1052.png",
    tags: ["fun", "new"]
  },
  {
    id: "dunk-shot",
    title: "Dunk Shot",
    src: "https://classroom6x.github.io/go/class-1053.html",
    img: "https://mc0825.github.io/img/class-1053.png",
    tags: ["fun", "new"]
  },
  {
    id: "soccer-hero",
    title: "Soccer Hero",
    src: "https://classroom6x.github.io/go/class-1054.html",
    img: "https://mc0825.github.io/img/class-1054.png",
    tags: ["soccer", "new"]
  },
  {
    id: "stacky-dash",
    title: "Stacky Dash",
    src: "https://classroom6x.github.io/go/class-1055.html",
    img: "https://mc0825.github.io/img/class-1055.png",
    tags: ["fun", "new"]
  },
  {
    id: "aquapark-io",
    title: "Aquapark.io",
    src: "https://classroom6x.github.io/go/class-1056.html",
    img: "https://mc0825.github.io/img/class-1056.png",
    tags: ["multiplayer", "fun", "new"]
  },
  {
    id: "putt-party",
    title: "Putt Party",
    src: "https://classroom6x.github.io/go/class-1057.html",
    img: "https://mc0825.github.io/img/class-1057.png",
    tags: ["multiplayer", "fun", "new"]
  },
  {
    id: "moto-bike",
    title: "Moto Bike",
    src: "https://classroom6x.github.io/go/class-1058.html",
    img: "https://mc0825.github.io/img/class-1058.png",
    tags: ["racing", "fun", "new"]
  },
  {
    id: "car-crusher",
    title: "Car Crusher",
    src: "https://classroom6x.github.io/go/class-1059.html",
    img: "https://mc0825.github.io/img/class-1059.png",
    tags: ["cars", "fun", "new"]
  },
  {
    id: "sword-slash",
    title: "Sword Slash",
    src: "https://classroom6x.github.io/go/class-1060.html",
    img: "https://mc0825.github.io/img/class-1060.png",
    tags: ["survival", "new"]
  },
  {
    id: "helix-jump",
    title: "Helix Jump",
    src: "https://classroom6x.github.io/go/class-1061.html",
    img: "https://mc0825.github.io/img/class-1061.png",
    tags: ["fun", "popular", "new"]
  },
  {
    id: "balls-vs-blocks",
    title: "Balls vs Blocks",
    src: "https://classroom6x.github.io/go/class-1062.html",
    img: "https://mc0825.github.io/img/class-1062.png",
    tags: ["puzzle", "fun", "new"]
  },
  {
    id: "road-killer",
    title: "Road Killer",
    src: "https://classroom6x.github.io/go/class-1063.html",
    img: "https://mc0825.github.io/img/class-1063.png",
    tags: ["racing", "cars", "survival", "new"]
  },
  {
    id: "zoo-escape",
    title: "Zoo Escape",
    src: "https://classroom6x.github.io/go/class-1064.html",
    img: "https://mc0825.github.io/img/class-1064.png",
    tags: ["adventure", "fun", "new"]
  },
  {
    id: "crowd-city",
    title: "Crowd City",
    src: "https://classroom6x.github.io/go/class-1065.html",
    img: "https://mc0825.github.io/img/class-1065.png",
    tags: ["multiplayer", "fun", "new"]
  },
  {
    id: "color-switch",
    title: "Color Switch",
    src: "https://classroom6x.github.io/go/class-1066.html",
    img: "https://mc0825.github.io/img/class-1066.png",
    tags: ["fun", "new"]
  },
  {
    id: "stack-smash",
    title: "Stack Smash",
    src: "https://classroom6x.github.io/go/class-1068.html",
    img: "https://mc0825.github.io/img/class-1068.png",
    tags: ["fun", "new"]
  },
  {
    id: "smash-it",
    title: "Smash It",
    src: "https://classroom6x.github.io/go/class-1070.html",
    img: "https://mc0825.github.io/img/class-1070.png",
    tags: ["fun", "new"]
  },
  {
    id: "table-tennis",
    title: "Table Tennis",
    src: "https://classroom6x.github.io/go/class-1071.html",
    img: "https://mc0825.github.io/img/class-1071.png",
    tags: ["multiplayer", "fun", "new"]
  },
  {
    id: "cube-surfer",
    title: "Cube Surfer",
    src: "https://classroom6x.github.io/go/class-1072.html",
    img: "https://mc0825.github.io/img/class-1072.png",
    tags: ["fun", "new"]
  },
  {
    id: "dumb-ways-die",
    title: "Dumb Ways to Die",
    src: "https://classroom6x.github.io/go/class-1074.html",
    img: "https://mc0825.github.io/img/class-1074.png",
    tags: ["fun", "new"]
  },
  {
    id: "bowmasters",
    title: "Bowmasters",
    src: "https://classroom6x.github.io/go/class-1075.html",
    img: "https://mc0825.github.io/img/class-1075.png",
    tags: ["multiplayer", "fun", "new"]
  },
  {
    id: "hungry-shark",
    title: "Hungry Shark",
    src: "https://classroom6x.github.io/go/class-1076.html",
    img: "https://mc0825.github.io/img/class-1076.png",
    tags: ["survival", "adventure", "new"]
  },
  {
    id: "tower-jump",
    title: "Tower Jump",
    src: "https://classroom6x.github.io/go/class-1077.html",
    img: "https://mc0825.github.io/img/class-1077.png",
    tags: ["fun", "new"]
  },
  {
    id: "run-sausage",
    title: "Run Sausage Run",
    src: "https://classroom6x.github.io/go/class-1079.html",
    img: "https://mc0825.github.io/img/class-1079.png",
    tags: ["adventure", "fun", "new"]
  },
  {
    id: "knife-hit",
    title: "Knife Hit",
    src: "https://classroom6x.github.io/go/class-1080.html",
    img: "https://mc0825.github.io/img/class-1080.png",
    tags: ["fun", "new"]
  },
  {
    id: "monster-truck",
    title: "Monster Truck",
    src: "https://classroom6x.github.io/go/class-1081.html",
    img: "https://mc0825.github.io/img/class-1081.png",
    tags: ["cars", "racing", "3d", "new"]
  },
  {
    id: "paper-fold",
    title: "Paper Fold",
    src: "https://classroom6x.github.io/go/class-1082.html",
    img: "https://mc0825.github.io/img/class-1082.png",
    tags: ["puzzle", "fun", "new"]
  },
  {
    id: "sky-roller",
    title: "Sky Roller",
    src: "https://classroom6x.github.io/go/class-1083.html",
    img: "https://mc0825.github.io/img/class-1083.png",
    tags: ["fun", "new"]
  },
  {
    id: "crowd-run",
    title: "Crowd Run 3D",
    src: "https://classroom6x.github.io/go/class-1084.html",
    img: "https://mc0825.github.io/img/class-1084.png",
    tags: ["3d", "fun", "new"]
  },
  {
    id: "amaze-io",
    title: "Amaze.io",
    src: "https://classroom6x.github.io/go/class-1085.html",
    img: "https://mc0825.github.io/img/class-1085.png",
    tags: ["puzzle", "fun", "new"]
  },
  {
    id: "stack-jump",
    title: "Stack Jump",
    src: "https://classroom6x.github.io/go/class-1086.html",
    img: "https://mc0825.github.io/img/class-1086.png",
    tags: ["fun", "new"]
  },
  {
    id: "magic-tiles",
    title: "Magic Tiles 3",
    src: "https://classroom6x.github.io/go/class-1087.html",
    img: "https://mc0825.github.io/img/class-1087.png",
    tags: ["fun", "new"]
  },
  {
    id: "piano-tiles",
    title: "Piano Tiles",
    src: "https://classroom6x.github.io/go/class-1088.html",
    img: "https://mc0825.github.io/img/class-1088.png",
    tags: ["fun", "new"]
  },
  {
    id: "jump-jump",
    title: "Jump Jump",
    src: "https://classroom6x.github.io/go/class-1089.html",
    img: "https://mc0825.github.io/img/class-1089.png",
    tags: ["fun", "new"]
  },
  {
    id: "idle-oil",
    title: "Idle Oil Tycoon",
    src: "https://classroom6x.github.io/go/class-1090.html",
    img: "https://mc0825.github.io/img/class-1090.png",
    tags: ["simulators", "fun", "new"]
  },
  {
    id: "egg-surprise",
    title: "Egg Surprise",
    src: "https://classroom6x.github.io/go/class-1091.html",
    img: "https://mc0825.github.io/img/class-1091.png",
    tags: ["fun", "new"]
  },
  {
    id: "bike-stunt",
    title: "Bike Stunt Racing",
    src: "https://classroom6x.github.io/go/class-1092.html",
    img: "https://mc0825.github.io/img/class-1092.png",
    tags: ["racing", "fun", "new"]
  },
  {
    id: "basketball-frvr",
    title: "Basketball FRVR",
    src: "https://classroom6x.github.io/go/class-1093.html",
    img: "https://mc0825.github.io/img/class-1093.png",
    tags: ["fun", "new"]
  },
  {
    id: "golf-battle",
    title: "Golf Battle",
    src: "https://classroom6x.github.io/go/class-1094.html",
    img: "https://mc0825.github.io/img/class-1094.png",
    tags: ["multiplayer", "fun", "new"]
  },
  {
    id: "tower-builder",
    title: "Tower Builder",
    src: "https://classroom6x.github.io/go/class-1095.html",
    img: "https://mc0825.github.io/img/class-1095.png",
    tags: ["puzzle", "fun", "new"]
  },
  {
    id: "crazy-bike",
    title: "Crazy Bike Stunt",
    src: "https://classroom6x.github.io/go/class-1096.html",
    img: "https://mc0825.github.io/img/class-1096.png",
    tags: ["racing", "fun", "new"]
  },
  {
    id: "road-rush",
    title: "Road Rush",
    src: "https://classroom6x.github.io/go/class-1097.html",
    img: "https://mc0825.github.io/img/class-1097.png",
    tags: ["racing", "cars", "new"]
  },
  {
    id: "idle-startup",
    title: "Idle Startup",
    src: "https://classroom6x.github.io/go/class-1098.html",
    img: "https://mc0825.github.io/img/class-1098.png",
    tags: ["simulators", "new"]
  },
  {
    id: "bridge-race",
    title: "Bridge Race",
    src: "https://classroom6x.github.io/go/class-1099.html",
    img: "https://mc0825.github.io/img/class-1099.png",
    tags: ["racing", "fun", "new"]
  },
  {
    id: "soccer-stars",
    title: "Soccer Stars",
    src: "https://classroom6x.github.io/go/class-1100.html",
    img: "https://mc0825.github.io/img/class-1100.png",
    tags: ["soccer", "multiplayer", "new"]
  },
  {
    id: "skibidi-toilet",
    title: "Skibidi Toilet",
    src: "https://classroom6x.github.io/go/class-1101.html",
    img: "https://mc0825.github.io/img/class-1101.png",
    tags: ["fun", "new"]
  },
  {
    id: "stickman-fight",
    title: "Stickman Fight",
    src: "https://classroom6x.github.io/go/class-1102.html",
    img: "https://mc0825.github.io/img/class-1102.png",
    tags: ["multiplayer", "survival", "new"]
  },
  {
    id: "ninja-run",
    title: "Ninja Run",
    src: "https://classroom6x.github.io/go/class-1103.html",
    img: "https://mc0825.github.io/img/class-1103.png",
    tags: ["adventure", "fun", "new"]
  },
  {
    id: "merge-fruits",
    title: "Merge Fruits",
    src: "https://classroom6x.github.io/go/class-1104.html",
    img: "https://mc0825.github.io/img/class-1104.png",
    tags: ["puzzle", "fun", "new"]
  },
  {
    id: "water-sort",
    title: "Water Sort Puzzle",
    src: "https://classroom6x.github.io/go/class-1105.html",
    img: "https://mc0825.github.io/img/class-1105.png",
    tags: ["puzzle", "fun", "new"]
  },
  {
    id: "emoji-puzzle",
    title: "Emoji Puzzle",
    src: "https://classroom6x.github.io/go/class-1106.html",
    img: "https://mc0825.github.io/img/class-1106.png",
    tags: ["puzzle", "girls", "new"]
  },
  {
    id: "brain-test",
    title: "Brain Test",
    src: "https://classroom6x.github.io/go/class-1107.html",
    img: "https://mc0825.github.io/img/class-1107.png",
    tags: ["puzzle", "fun", "new"]
  },
  {
    id: "fall-race",
    title: "Fall Race 3D",
    src: "https://classroom6x.github.io/go/class-1108.html",
    img: "https://mc0825.github.io/img/class-1108.png",
    tags: ["3d", "racing", "new"]
  },
  {
    id: "tall-man-run",
    title: "Tall Man Run",
    src: "https://classroom6x.github.io/go/class-1109.html",
    img: "https://mc0825.github.io/img/class-1109.png",
    tags: ["adventure", "fun", "new"]
  },
  {
    id: "merge-master",
    title: "Merge Master",
    src: "https://classroom6x.github.io/go/class-1110.html",
    img: "https://mc0825.github.io/img/class-1110.png",
    tags: ["puzzle", "survival", "new"]
  },
  {
    id: "ball-surfer",
    title: "Ball Surfer 3D",
    src: "https://classroom6x.github.io/go/class-1111.html",
    img: "https://mc0825.github.io/img/class-1111.png",
    tags: ["3d", "fun", "new"]
  },
  {
    id: "going-balls",
    title: "Going Balls",
    src: "https://classroom6x.github.io/go/class-1112.html",
    img: "https://mc0825.github.io/img/class-1112.png",
    tags: ["fun", "new"]
  },
  {
    id: "swing-star",
    title: "Swing Star",
    src: "https://classroom6x.github.io/go/class-1113.html",
    img: "https://mc0825.github.io/img/class-1113.png",
    tags: ["adventure", "fun", "new"]
  },
  {
    id: "drive-hill",
    title: "Drive Hill",
    src: "https://classroom6x.github.io/go/class-1114.html",
    img: "https://mc0825.github.io/img/class-1114.png",
    tags: ["racing", "cars", "new"]
  },
  {
    id: "idle-miner",
    title: "Idle Miner",
    src: "https://classroom6x.github.io/go/class-1115.html",
    img: "https://mc0825.github.io/img/class-1115.png",
    tags: ["simulators", "new"]
  },
  {
    id: "zombie-shooter",
    title: "Zombie Shooter",
    src: "https://classroom6x.github.io/go/class-1116.html",
    img: "https://mc0825.github.io/img/class-1116.png",
    tags: ["survival", "3d", "new"]
  },
  {
    id: "stunt-bike",
    title: "Stunt Bike Extreme",
    src: "https://classroom6x.github.io/go/class-1117.html",
    img: "https://mc0825.github.io/img/class-1117.png",
    tags: ["racing", "fun", "new"]
  },
  {
    id: "clash-of-clans",
    title: "Clash of Clans",
    src: "https://classroom6x.github.io/go/class-1118.html",
    img: "https://mc0825.github.io/img/class-1118.png",
    tags: ["survival", "multiplayer", "new"]
  },
  {
    id: "candy-bubble",
    title: "Candy Bubble",
    src: "https://classroom6x.github.io/go/class-1119.html",
    img: "https://mc0825.github.io/img/class-1119.png",
    tags: ["puzzle", "girls", "new"]
  },
  {
    id: "loop-heist",
    title: "Loop Heist",
    src: "https://classroom6x.github.io/go/class-1120.html",
    img: "https://mc0825.github.io/img/class-1120.png",
    tags: ["puzzle", "fun", "new"]
  },
  {
    id: "tank-battle",
    title: "Tank Battle",
    src: "https://classroom6x.github.io/go/class-1121.html",
    img: "https://mc0825.github.io/img/class-1121.png",
    tags: ["multiplayer", "survival", "new"]
  },
  {
    id: "fruit-slice",
    title: "Fruit Slice",
    src: "https://classroom6x.github.io/go/class-1122.html",
    img: "https://mc0825.github.io/img/class-1122.png",
    tags: ["fun", "new"]
  },
  {
    id: "color-match",
    title: "Color Match",
    src: "https://classroom6x.github.io/go/class-1123.html",
    img: "https://mc0825.github.io/img/class-1123.png",
    tags: ["puzzle", "fun", "new"]
  },
  {
    id: "run-legends",
    title: "Run Legends",
    src: "https://classroom6x.github.io/go/class-1124.html",
    img: "https://mc0825.github.io/img/class-1124.png",
    tags: ["adventure", "new"]
  },
  {
    id: "super-bike",
    title: "Super Bike The Champion",
    src: "https://classroom6x.github.io/go/class-1125.html",
    img: "https://mc0825.github.io/img/class-1125.png",
    tags: ["racing", "fun", "new"]
  },
  {
    id: "stick-hero",
    title: "Stick Hero",
    src: "https://classroom6x.github.io/go/class-1126.html",
    img: "https://mc0825.github.io/img/class-1126.png",
    tags: ["puzzle", "fun", "new"]
  },
  {
    id: "snake-game",
    title: "Snake Game",
    src: "https://classroom6x.github.io/go/class-1127.html",
    img: "https://mc0825.github.io/img/class-1127.png",
    tags: ["fun", "new"]
  },
  {
    id: "stack-colors",
    title: "Stack Colors",
    src: "https://classroom6x.github.io/go/class-1128.html",
    img: "https://mc0825.github.io/img/class-1128.png",
    tags: ["fun", "new"]
  },
  {
    id: "word-pop",
    title: "Word Pop",
    src: "https://classroom6x.github.io/go/class-1129.html",
    img: "https://mc0825.github.io/img/class-1129.png",
    tags: ["puzzle", "girls", "new"]
  },
  {
    id: "ninja-hands",
    title: "Ninja Hands",
    src: "https://classroom6x.github.io/go/class-1130.html",
    img: "https://mc0825.github.io/img/class-1130.png",
    tags: ["survival", "fun", "new"]
  },
  {
    id: "mob-control",
    title: "Mob Control",
    src: "https://classroom6x.github.io/go/class-1131.html",
    img: "https://mc0825.github.io/img/class-1131.png",
    tags: ["multiplayer", "fun", "new"]
  },
  {
    id: "car-race-3d",
    title: "Car Race 3D",
    src: "https://classroom6x.github.io/go/class-1132.html",
    img: "https://mc0825.github.io/img/class-1132.png",
    tags: ["racing", "cars", "3d", "new"]
  },
  {
    id: "flip-bottle",
    title: "Flip Bottle",
    src: "https://classroom6x.github.io/go/class-1133.html",
    img: "https://mc0825.github.io/img/class-1133.png",
    tags: ["fun", "new"]
  },
  {
    id: "apple-shooter",
    title: "Apple Shooter",
    src: "https://classroom6x.github.io/go/class-1134.html",
    img: "https://mc0825.github.io/img/class-1134.png",
    tags: ["fun", "new"]
  },
  {
    id: "run-bob",
    title: "Run Bob",
    src: "https://classroom6x.github.io/go/class-1135.html",
    img: "https://mc0825.github.io/img/class-1135.png",
    tags: ["adventure", "fun", "new"]
  },
  {
    id: "golf-orbit",
    title: "Golf Orbit",
    src: "https://classroom6x.github.io/go/class-1136.html",
    img: "https://mc0825.github.io/img/class-1136.png",
    tags: ["fun", "new"]
  },
  {
    id: "count-and-win",
    title: "Count and Win",
    src: "https://classroom6x.github.io/go/class-1137.html",
    img: "https://mc0825.github.io/img/class-1137.png",
    tags: ["puzzle", "fun", "new"]
  },
  {
    id: "drop-stack",
    title: "Drop Stack Ball",
    src: "https://classroom6x.github.io/go/class-1139.html",
    img: "https://mc0825.github.io/img/class-1139.png",
    tags: ["fun", "new"]
  },
  {
    id: "wood-block",
    title: "Wood Block Puzzle",
    src: "https://classroom6x.github.io/go/class-1140.html",
    img: "https://mc0825.github.io/img/class-1140.png",
    tags: ["puzzle", "new"]
  },
  {
    id: "hammer-hit",
    title: "Hammer Hit",
    src: "https://classroom6x.github.io/go/class-1141.html",
    img: "https://mc0825.github.io/img/class-1141.png",
    tags: ["fun", "new"]
  },
  {
    id: "dunk-line",
    title: "Dunk Line",
    src: "https://classroom6x.github.io/go/class-1142.html",
    img: "https://mc0825.github.io/img/class-1142.png",
    tags: ["fun", "new"]
  },
  {
    id: "car-stunts",
    title: "Car Stunts 3D",
    src: "https://classroom6x.github.io/go/class-1143.html",
    img: "https://mc0825.github.io/img/class-1143.png",
    tags: ["cars", "racing", "3d", "new"]
  },
  {
    id: "hyper-drift",
    title: "Hyper Drift",
    src: "https://classroom6x.github.io/go/class-1144.html",
    img: "https://mc0825.github.io/img/class-1144.png",
    tags: ["racing", "cars", "new"]
  },
  {
    id: "worm-hunt",
    title: "Worm Hunt",
    src: "https://classroom6x.github.io/go/class-1145.html",
    img: "https://mc0825.github.io/img/class-1145.png",
    tags: ["multiplayer", "fun", "new"]
  },
  {
    id: "hex-puzzle",
    title: "Hex Puzzle",
    src: "https://classroom6x.github.io/go/class-1146.html",
    img: "https://mc0825.github.io/img/class-1146.png",
    tags: ["puzzle", "new"]
  },
  {
    id: "bike-chain",
    title: "Bike Chain Reaction",
    src: "https://classroom6x.github.io/go/class-1147.html",
    img: "https://mc0825.github.io/img/class-1147.png",
    tags: ["puzzle", "fun", "new"]
  },
  {
    id: "merge-arena",
    title: "Merge Arena",
    src: "https://classroom6x.github.io/go/class-1148.html",
    img: "https://mc0825.github.io/img/class-1148.png",
    tags: ["puzzle", "survival", "new"]
  },
  {
    id: "idle-factory",
    title: "Idle Factory",
    src: "https://classroom6x.github.io/go/class-1149.html",
    img: "https://mc0825.github.io/img/class-1149.png",
    tags: ["simulators", "new"]
  },
  {
    id: "rope-rescue",
    title: "Rope Rescue",
    src: "https://classroom6x.github.io/go/class-1150.html",
    img: "https://mc0825.github.io/img/class-1150.png",
    tags: ["puzzle", "fun", "new"]
  },
  {
    id: "pirate-ship",
    title: "Pirate Ship Battle",
    src: "https://classroom6x.github.io/go/class-1151.html",
    img: "https://mc0825.github.io/img/class-1151.png",
    tags: ["multiplayer", "survival", "new"]
  },
  {
    id: "sand-balls",
    title: "Sand Balls",
    src: "https://classroom6x.github.io/go/class-1152.html",
    img: "https://mc0825.github.io/img/class-1152.png",
    tags: ["puzzle", "fun", "new"]
  },
  {
    id: "love-balls",
    title: "Love Balls",
    src: "https://classroom6x.github.io/go/class-1153.html",
    img: "https://mc0825.github.io/img/class-1153.png",
    tags: ["puzzle", "girls", "fun", "new"]
  },
  {
    id: "block-city-wars",
    title: "Block City Wars",
    src: "https://classroom6x.github.io/go/class-1154.html",
    img: "https://mc0825.github.io/img/class-1154.png",
    tags: ["survival", "3d", "new"]
  },
  {
    id: "soccer-physics",
    title: "Soccer Physics",
    src: "https://classroom6x.github.io/go/class-1155.html",
    img: "https://mc0825.github.io/img/class-1155.png",
    tags: ["soccer", "fun", "new"]
  },
  {
    id: "idle-city",
    title: "Idle City Builder",
    src: "https://classroom6x.github.io/go/class-1156.html",
    img: "https://mc0825.github.io/img/class-1156.png",
    tags: ["simulators", "new"]
  },
  {
    id: "merge-fighting",
    title: "Merge Fighting",
    src: "https://classroom6x.github.io/go/class-1157.html",
    img: "https://mc0825.github.io/img/class-1157.png",
    tags: ["multiplayer", "survival", "new"]
  },
  {
    id: "car-driving",
    title: "Car Driving School",
    src: "https://classroom6x.github.io/go/class-1158.html",
    img: "https://mc0825.github.io/img/class-1158.png",
    tags: ["cars", "simulators", "new"]
  },
  {
    id: "draw-bridge",
    title: "Draw Bridge",
    src: "https://classroom6x.github.io/go/class-1159.html",
    img: "https://mc0825.github.io/img/class-1159.png",
    tags: ["puzzle", "fun", "new"]
  },
  {
    id: "number-puzzle",
    title: "Number Puzzle",
    src: "https://classroom6x.github.io/go/class-1160.html",
    img: "https://mc0825.github.io/img/class-1160.png",
    tags: ["puzzle", "new"]
  },
  {
    id: "fun-race-3d",
    title: "Fun Race 3D",
    src: "https://classroom6x.github.io/go/class-1161.html",
    img: "https://mc0825.github.io/img/class-1161.png",
    tags: ["3d", "racing", "new"]
  },
  {
    id: "road-balls",
    title: "Road Balls",
    src: "https://classroom6x.github.io/go/class-1162.html",
    img: "https://mc0825.github.io/img/class-1162.png",
    tags: ["racing", "fun", "new"]
  },
  {
    id: "brawl-stars",
    title: "Brawl Stars",
    src: "https://classroom6x.github.io/go/class-1163.html",
    img: "https://mc0825.github.io/img/class-1163.png",
    tags: ["multiplayer", "survival", "new"]
  },
  {
    id: "swing-monkey",
    title: "Swing Monkey",
    src: "https://classroom6x.github.io/go/class-1164.html",
    img: "https://mc0825.github.io/img/class-1164.png",
    tags: ["adventure", "fun", "new"]
  },
  {
    id: "squad-busters",
    title: "Squad Busters",
    src: "https://classroom6x.github.io/go/class-1165.html",
    img: "https://mc0825.github.io/img/class-1165.png",
    tags: ["multiplayer", "survival", "new"]
  },
  {
    id: "bubble-jungle",
    title: "Bubble Jungle",
    src: "https://classroom6x.github.io/go/class-1166.html",
    img: "https://mc0825.github.io/img/class-1166.png",
    tags: ["puzzle", "girls", "new"]
  },
  {
    id: "match-3d",
    title: "Match 3D",
    src: "https://classroom6x.github.io/go/class-1167.html",
    img: "https://mc0825.github.io/img/class-1167.png",
    tags: ["puzzle", "new"]
  },
  {
    id: "sky-dodge",
    title: "Sky Dodge",
    src: "https://classroom6x.github.io/go/class-1168.html",
    img: "https://mc0825.github.io/img/class-1168.png",
    tags: ["fun", "new"]
  },
  {
    id: "drift-away",
    title: "Drift Away",
    src: "https://classroom6x.github.io/go/class-1169.html",
    img: "https://mc0825.github.io/img/class-1169.png",
    tags: ["racing", "fun", "new"]
  },
  {
    id: "tower-of-colors",
    title: "Tower of Colors",
    src: "https://classroom6x.github.io/go/class-1170.html",
    img: "https://mc0825.github.io/img/class-1170.png",
    tags: ["puzzle", "fun", "new"]
  },
  {
    id: "gravity-guy",
    title: "Gravity Guy",
    src: "https://classroom6x.github.io/go/class-1171.html",
    img: "https://mc0825.github.io/img/class-1171.png",
    tags: ["adventure", "fun", "new"]
  },
  {
    id: "stickman-archer",
    title: "Stickman Archer",
    src: "https://classroom6x.github.io/go/class-1172.html",
    img: "https://mc0825.github.io/img/class-1172.png",
    tags: ["survival", "fun", "new"]
  },
  {
    id: "gem-match",
    title: "Gem Match 3D",
    src: "https://classroom6x.github.io/go/class-1173.html",
    img: "https://mc0825.github.io/img/class-1173.png",
    tags: ["puzzle", "girls", "new"]
  },
  {
    id: "tower-run",
    title: "Tower Run",
    src: "https://classroom6x.github.io/go/class-1174.html",
    img: "https://mc0825.github.io/img/class-1174.png",
    tags: ["3d", "fun", "new"]
  },
  {
    id: "soccer-battle",
    title: "Soccer Battle",
    src: "https://classroom6x.github.io/go/class-1175.html",
    img: "https://mc0825.github.io/img/class-1175.png",
    tags: ["soccer", "multiplayer", "new"]
  },
  {
    id: "crazy-driver",
    title: "Crazy Driver",
    src: "https://classroom6x.github.io/go/class-1176.html",
    img: "https://mc0825.github.io/img/class-1176.png",
    tags: ["cars", "racing", "new"]
  },
  {
    id: "idle-space",
    title: "Idle Space Miner",
    src: "https://classroom6x.github.io/go/class-1177.html",
    img: "https://mc0825.github.io/img/class-1177.png",
    tags: ["simulators", "new"]
  },
  {
    id: "stacking",
    title: "Stacking",
    src: "https://classroom6x.github.io/go/class-1178.html",
    img: "https://mc0825.github.io/img/class-1178.png",
    tags: ["puzzle", "fun", "new"]
  },
  {
    id: "basketball-line",
    title: "Basketball Line",
    src: "https://classroom6x.github.io/go/class-1179.html",
    img: "https://mc0825.github.io/img/class-1179.png",
    tags: ["fun", "new"]
  },
  {
    id: "super-mario-64",
    title: "Super Mario 64",
    src: "https://classroom6x.github.io/go/class-1180.html",
    img: "https://mc0825.github.io/img/class-1180.png",
    tags: ["adventure", "3d", "popular", "new"]
  },
  {
    id: "cat-escape",
    title: "Cat Escape",
    src: "https://classroom6x.github.io/go/class-1181.html",
    img: "https://mc0825.github.io/img/class-1181.png",
    tags: ["puzzle", "fun", "new"]
  },
  {
    id: "bounce-merge",
    title: "Bounce and Merge",
    src: "https://classroom6x.github.io/go/class-1182.html",
    img: "https://mc0825.github.io/img/class-1182.png",
    tags: ["puzzle", "fun", "new"]
  },
  {
    id: "hockey-league",
    title: "Hockey League",
    src: "https://classroom6x.github.io/go/class-1183.html",
    img: "https://mc0825.github.io/img/class-1183.png",
    tags: ["multiplayer", "fun", "new"]
  },
  {
    id: "idle-restaurant",
    title: "Idle Restaurant",
    src: "https://classroom6x.github.io/go/class-1184.html",
    img: "https://mc0825.github.io/img/class-1184.png",
    tags: ["simulators", "new"]
  },
  {
    id: "bubble-shooter-2",
    title: "Bubble Shooter 2",
    src: "https://classroom6x.github.io/go/class-1185.html",
    img: "https://mc0825.github.io/img/class-1185.png",
    tags: ["puzzle", "girls", "new"]
  },
  {
    id: "archero",
    title: "Archero",
    src: "https://classroom6x.github.io/go/class-1186.html",
    img: "https://mc0825.github.io/img/class-1186.png",
    tags: ["survival", "adventure", "new"]
  },
  {
    id: "brick-out",
    title: "Brick Out",
    src: "https://classroom6x.github.io/go/class-1187.html",
    img: "https://mc0825.github.io/img/class-1187.png",
    tags: ["puzzle", "fun", "new"]
  },
  {
    id: "knife-throw",
    title: "Knife Throw",
    src: "https://classroom6x.github.io/go/class-1188.html",
    img: "https://mc0825.github.io/img/class-1188.png",
    tags: ["fun", "new"]
  },
  {
    id: "stickman-prison",
    title: "Stickman Prison Escape",
    src: "https://classroom6x.github.io/go/class-1189.html",
    img: "https://mc0825.github.io/img/class-1189.png",
    tags: ["adventure", "survival", "new"]
  },
  {
    id: "dragon-dragon",
    title: "Dragon Dragon",
    src: "https://classroom6x.github.io/go/class-1190.html",
    img: "https://mc0825.github.io/img/class-1190.png",
    tags: ["adventure", "fun", "new"]
  },
  {
    id: "merge-plane",
    title: "Merge Plane",
    src: "https://classroom6x.github.io/go/class-1191.html",
    img: "https://mc0825.github.io/img/class-1191.png",
    tags: ["simulators", "fun", "new"]
  },
  {
    id: "perfect-piano",
    title: "Perfect Piano",
    src: "https://classroom6x.github.io/go/class-1192.html",
    img: "https://mc0825.github.io/img/class-1192.png",
    tags: ["fun", "new"]
  },
  {
    id: "rope-hero",
    title: "Rope Hero",
    src: "https://classroom6x.github.io/go/class-1193.html",
    img: "https://mc0825.github.io/img/class-1193.png",
    tags: ["adventure", "3d", "new"]
  },
  {
    id: "jump-up",
    title: "Jump Up",
    src: "https://classroom6x.github.io/go/class-1194.html",
    img: "https://mc0825.github.io/img/class-1194.png",
    tags: ["fun", "new"]
  },
  {
    id: "slice-it",
    title: "Slice It",
    src: "https://classroom6x.github.io/go/class-1195.html",
    img: "https://mc0825.github.io/img/class-1195.png",
    tags: ["puzzle", "fun", "new"]
  },
  {
    id: "super-mario-run",
    title: "Super Mario Run",
    src: "https://classroom6x.github.io/go/class-1196.html",
    img: "https://mc0825.github.io/img/class-1196.png",
    tags: ["adventure", "popular", "new"]
  },
  {
    id: "mine-sweeper",
    title: "Minesweeper",
    src: "https://classroom6x.github.io/go/class-1197.html",
    img: "https://mc0825.github.io/img/class-1197.png",
    tags: ["puzzle", "new"]
  },
  {
    id: "block-hexa",
    title: "Block Hexa Puzzle",
    src: "https://classroom6x.github.io/go/class-1198.html",
    img: "https://mc0825.github.io/img/class-1198.png",
    tags: ["puzzle", "new"]
  },
  {
    id: "color-bump-3d",
    title: "Color Bump 3D",
    src: "https://classroom6x.github.io/go/class-1199.html",
    img: "https://mc0825.github.io/img/class-1199.png",
    tags: ["3d", "fun", "new"]
  },
  {
    id: "draw-joust",
    title: "Draw Joust",
    src: "https://classroom6x.github.io/go/class-1200.html",
    img: "https://mc0825.github.io/img/class-1200.png",
    tags: ["multiplayer", "fun", "new"]
  },
  {
    id: "toon-blast",
    title: "Toon Blast",
    src: "https://classroom6x.github.io/go/class-1201.html",
    img: "https://mc0825.github.io/img/class-1201.png",
    tags: ["puzzle", "fun", "new"]
  },
  {
    id: "space-shooter",
    title: "Space Shooter",
    src: "https://classroom6x.github.io/go/class-1202.html",
    img: "https://mc0825.github.io/img/class-1202.png",
    tags: ["survival", "fun", "new"]
  },
  {
    id: "merge-flowers",
    title: "Merge Flowers",
    src: "https://classroom6x.github.io/go/class-1203.html",
    img: "https://mc0825.github.io/img/class-1203.png",
    tags: ["girls", "puzzle", "new"]
  },
  {
    id: "car-builder",
    title: "Car Builder",
    src: "https://classroom6x.github.io/go/class-1204.html",
    img: "https://mc0825.github.io/img/class-1204.png",
    tags: ["cars", "simulators", "new"]
  },
  {
    id: "stack-tower",
    title: "Stack Tower",
    src: "https://classroom6x.github.io/go/class-1205.html",
    img: "https://mc0825.github.io/img/class-1205.png",
    tags: ["puzzle", "fun", "new"]
  },
  {
    id: "cube-jump",
    title: "Cube Jump",
    src: "https://classroom6x.github.io/go/class-1206.html",
    img: "https://mc0825.github.io/img/class-1206.png",
    tags: ["fun", "new"]
  },
  {
    id: "idle-world",
    title: "Idle World",
    src: "https://classroom6x.github.io/go/class-1207.html",
    img: "https://mc0825.github.io/img/class-1207.png",
    tags: ["simulators", "new"]
  },
  {
    id: "slap-kings",
    title: "Slap Kings",
    src: "https://classroom6x.github.io/go/class-1208.html",
    img: "https://mc0825.github.io/img/class-1208.png",
    tags: ["multiplayer", "fun", "new"]
  },
  {
    id: "mini-golf",
    title: "Mini Golf",
    src: "https://classroom6x.github.io/go/class-1209.html",
    img: "https://mc0825.github.io/img/class-1209.png",
    tags: ["fun", "new"]
  },
  {
    id: "wood-puzzles",
    title: "Wood Puzzles",
    src: "https://classroom6x.github.io/go/class-1210.html",
    img: "https://mc0825.github.io/img/class-1210.png",
    tags: ["puzzle", "new"]
  },
  {
    id: "sonic-run",
    title: "Sonic Run",
    src: "https://classroom6x.github.io/go/class-1211.html",
    img: "https://mc0825.github.io/img/class-1211.png",
    tags: ["adventure", "popular", "new"]
  },
  {
    id: "among-us-online",
    title: "Among Us Online Edition",
    src: "https://classroom6x.github.io/go/class-1212.html",
    img: "https://mc0825.github.io/img/class-1212.png",
    tags: ["multiplayer", "survival", "new"]
  },
  {
    id: "idle-dig",
    title: "Idle Dig",
    src: "https://classroom6x.github.io/go/class-1213.html",
    img: "https://mc0825.github.io/img/class-1213.png",
    tags: ["simulators", "new"]
  },
  {
    id: "super-jump",
    title: "Super Jump",
    src: "https://classroom6x.github.io/go/class-1214.html",
    img: "https://mc0825.github.io/img/class-1214.png",
    tags: ["fun", "new"]
  },
  {
    id: "bubble-burst",
    title: "Bubble Burst",
    src: "https://classroom6x.github.io/go/class-1215.html",
    img: "https://mc0825.github.io/img/class-1215.png",
    tags: ["puzzle", "girls", "new"]
  },
  {
    id: "run-or-die",
    title: "Run or Die",
    src: "https://classroom6x.github.io/go/class-1216.html",
    img: "https://mc0825.github.io/img/class-1216.png",
    tags: ["adventure", "survival", "new"]
  },
  {
    id: "paint-master",
    title: "Paint Master",
    src: "https://classroom6x.github.io/go/class-1217.html",
    img: "https://mc0825.github.io/img/class-1217.png",
    tags: ["fun", "girls", "new"]
  },
  {
    id: "sort-pins",
    title: "Sort Pins",
    src: "https://classroom6x.github.io/go/class-1218.html",
    img: "https://mc0825.github.io/img/class-1218.png",
    tags: ["puzzle", "new"]
  },
  {
    id: "turbo-stars",
    title: "Turbo Stars",
    src: "https://classroom6x.github.io/go/class-1219.html",
    img: "https://mc0825.github.io/img/class-1219.png",
    tags: ["racing", "fun", "new"]
  },
  {
    id: "cannon-balls",
    title: "Cannon Balls 3D",
    src: "https://classroom6x.github.io/go/class-1220.html",
    img: "https://mc0825.github.io/img/class-1220.png",
    tags: ["3d", "fun", "new"]
  },
  {
    id: "master-chess",
    title: "Master Chess",
    src: "https://classroom6x.github.io/go/class-1221.html",
    img: "https://mc0825.github.io/img/class-1221.png",
    tags: ["puzzle", "multiplayer", "new"]
  },
  {
    id: "falling-ball",
    title: "Falling Ball",
    src: "https://classroom6x.github.io/go/class-1222.html",
    img: "https://mc0825.github.io/img/class-1222.png",
    tags: ["fun", "new"]
  },
  {
    id: "pin-cracker",
    title: "Pin Cracker",
    src: "https://classroom6x.github.io/go/class-1223.html",
    img: "https://mc0825.github.io/img/class-1223.png",
    tags: ["puzzle", "fun", "new"]
  },
  {
    id: "infinite-mario",
    title: "Infinite Mario",
    src: "https://classroom6x.github.io/go/class-1224.html",
    img: "https://mc0825.github.io/img/class-1224.png",
    tags: ["adventure", "popular", "new"]
  },
  {
    id: "motocross-nitro",
    title: "Motocross Nitro",
    src: "https://classroom6x.github.io/go/class-1225.html",
    img: "https://mc0825.github.io/img/class-1225.png",
    tags: ["racing", "fun", "new"]
  },
  {
    id: "dig-it",
    title: "Dig It",
    src: "https://classroom6x.github.io/go/class-1226.html",
    img: "https://mc0825.github.io/img/class-1226.png",
    tags: ["puzzle", "simulators", "new"]
  },
];
