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
  },
];
