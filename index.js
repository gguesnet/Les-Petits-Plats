const data = [
  {
    id: 1,
    name: "Limonade de coco",
    servings: 1,
    ingredients: [
      {
        ingredient: "lait de coco",
        quantity: 400,
        unit: "ml",
      },
      {
        ingredient: "jus de citron",
        quantity: 2,
      },
      {
        ingredient: "crème de coco",
        quantity: 2,
        unit: "cuillères à soupe",
      },
      {
        ingredient: "sucre",
        quantity: 30,
        unit: "grammes",
      },
      {
        ingredient: "glaçons",
      },
    ],
    time: 10,
    description:
      "Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. mixer jusqu'à avoir la consistence désirée",
    appliance: "blender",
    ustensils: ["cuillère à soupe", "verres", "presse citron"],
  },
  {
    id: 2,
    name: "Poisson cru à la tahitienne",
    servings: 2,
    ingredients: [
      {
        ingredient: "thon rouge (ou blanc)",
        quantity: 200,
        unit: "grammes",
      },
      {
        ingredient: "concombre",
        quantity: 1,
      },
      {
        ingredient: "tomate",
        quantity: 2,
      },
      {
        ingredient: "carotte",
        quantity: 1,
      },
      {
        ingredient: "citron vert",
        quantity: 5,
      },
      {
        ingredient: "lait de coco",
        quantity: 100,
        unit: "ml",
      },
    ],
    time: 60,
    description:
      "Découper le thon en dés, mettre dans un plat et recouvrir de jus de citron vert (mieux vaut prendre un plat large et peu profond). laisser reposer au réfrigérateur au moins 2 heures. (si possible faites-le le soir pour le lendemain. après avoir laissé mariner le poisson, coupez le concombre en fines rondelles sans la peau et les tomates en prenant soin de retirer les pépins. rayer la carotte. ajouter les légumes au poissons avec le citron cette fois ci dans un saladier. ajouter le lait de coco. pour ajouter un peu plus de saveur vous pouver ajouter 1 à 2 cuillères à soupe de crème de coco",
    appliance: "saladier",
    ustensils: ["presse citron"],
  },
  {
    id: 3,
    name: "Poulet coco réunionnais",
    servings: 4,
    ingredients: [
      {
        ingredient: "poulet",
        quantity: 1,
      },
      {
        ingredient: "lait de coco",
        quantity: 400,
        unit: "ml",
      },
      {
        ingredient: "coulis de tomate",
        quantity: 25,
        unit: "cl",
      },
      {
        ingredient: "oignon",
        quantity: 1,
      },
      {
        ingredient: "poivron rouge",
        quantity: 1,
      },
      {
        ingredient: "huile d'olive",
        quantity: 1,
        unit: "cuillères à soupe",
      },
    ],
    time: 80,
    description:
      "Découper le poulet en morceaux, les faire dorer dans une cocotte avec de l'huile d'olive. salez et poivrez. une fois doré, laisser cuire en ajoutant de l'eau. au bout de 30 minutes, ajouter le coulis de tomate, le lait de coco ainsi que le poivron et l'oignon découpés en morceaux. laisser cuisiner 30 minutes de plus. servir avec du riz",
    appliance: "cocotte",
    ustensils: ["couteau"],
  },
  {
    id: 4,
    name: "Salade de riz",
    servings: 4,
    ingredients: [
      {
        ingredient: "riz blanc",
        quantity: 500,
        unit: "grammes",
      },
      {
        ingredient: "thon en miettes",
        quantity: 200,
        unit: "grammes",
      },
      {
        ingredient: "tomate",
        quantity: 2,
      },
      {
        ingredient: "oeuf dur",
        quantity: 2,
      },
      {
        ingredient: "maïs",
        quantity: 300,
        unit: "grammes",
      },
      {
        ingredient: "vinaigrette",
        quantity: 5,
        unit: "cl",
      },
    ],
    time: 50,
    description:
      "Faire cuire le riz. une fois le riz cuit, le laisser refroidir. couper les oeufs dur en quarts ou en lamelle au choix, coupez le tomates en dés, ajouter au riz les oeufs, les tomates, le poisson, le maïs et la vinaigrette. ajouter au gout de chacun des corniches, olives etc..",
    appliance: "cuiseur de riz",
    ustensils: ["saladier", "passoire"],
  },
  {
    id: 5,
    name: "Tarte au thon",
    servings: 4,
    ingredients: [
      {
        ingredient: "pâte feuilletée",
        quantity: 1,
      },
      {
        ingredient: "thon en miettes",
        quantity: 130,
        unit: "grammes",
      },
      {
        ingredient: "tomate",
        quantity: 2,
      },
      {
        ingredient: "crème fraiche",
        quantity: 2,
        unit: "cuillères à soupe",
      },
      {
        ingredient: "gruyère râpé",
        quantity: 100,
        unit: "grammes",
      },
      {
        ingredient: "moutarde de dijon",
        quantity: 1,
        unite: "cuillères à soupe",
      },
    ],
    time: 45,
    description:
      "Étaler la pâte feuilleté aux dimensions du moule, étaler la moutarde sur la pâte feuilleté, ajouter le thon. découper les tomates en rondelles et les poser sur le poisson, ajouter un peu de crème fraiche sur toute la tarte et recouvrez de gruyère râpé. cuire au four 30 minutes",
    appliance: "four",
    ustensils: ["moule à tarte", "râpe à fromage", "couteau"],
  },
  {
    id: 6,
    name: "Tarte aux pommes",
    servings: 6,
    ingredients: [
      {
        ingredient: "pâte brisée",
        quantity: 1,
      },
      {
        ingredient: "pomme",
        quantity: 3,
      },
      {
        ingredient: "oeuf",
        quantity: "2",
      },
      {
        ingredient: "crème fraiche",
        quantity: 25,
        unit: "cl",
      },
      {
        ingredient: "sucre en poudre",
        quantity: 100,
        unit: "grammes",
      },
      {
        ingredient: "sucre vanillé",
        quantity: 1,
        unit: "sachets",
      },
    ],
    time: 50,
    description:
      "Commencez par mélanger les oeufs le sucre et le sucre vanillé dans un saladier, découper les pommes en tranches, ajouter la crème fraiche aux oeufs. une fois que tout est pret, étalez la tarte dans le moule. n'oubliez pas de piquer le fond avec une fourchette avant depositionner les pommes sur la tarte. finallement verser la préparation à base d'oeufs et de crême fraiche. laisser cuire au four pendant 30 minutes",
    appliance: "four",
    ustensils: ["moule à tarte", "saladier", "fourchette"],
  },
  {
    id: 7,
    name: "Tartelettes au chocolat et aux fraises",
    servings: 6,
    ingredients: [
      {
        ingredient: "pâte sablée",
        quantity: 1,
      },
      {
        ingredient: "chocolat au lait",
        quantity: 300,
        unit: "grammes",
      },
      {
        ingredient: "crème liquide",
        quantity: 80,
        unit: "cl",
      },
      {
        ingredient: "beurre",
        quantity: "30",
        unit: "grammes",
      },
      {
        ingredient: "fraise",
        quantity: 6,
      },
    ],
    time: 50,
    description:
      "Étaler la pate dans les moules à tartelette. faire cuire la pate 30 minutes. découper le chocolat en morceau et le faire chauffer, y ajouter la crême liquide, ajouter le beurre et remuer jusqu'à avoir une pâte homogène. verser la pate sur les tartelettes. couper les fraises en 2 et les positionner sur ",
    appliance: "four",
    ustensils: ["moule à tartelettes (6)", "casserolle"],
  },
  {
    id: 8,
    name: "Brownie",
    servings: 10,
    ingredients: [
      {
        ingredient: "noix",
        quantity: "180",
        unit: "grammes",
      },
      {
        ingredient: "chocolat noir",
        quantity: 150,
        unit: "grammes",
      },
      {
        ingredient: "beurre",
        quantity: 120,
        unit: "grammes",
      },
      {
        ingredient: "oeuf",
        quantity: 2,
      },
      {
        ingredient: "sucre en poudre",
        quantity: "110",
        unit: "grammes",
      },
      {
        ingredient: "farine",
        quantity: 90,
        unit: "grammes",
      },
    ],
    time: 60,
    description:
      "Hachez les noix grossièrement. faire fondre le chocolat avec le beurre. mélanger les oeuf et le sucre et mélanger au chocolat. ajouter la farine. mélanger afin d'avoir quelque chose d'homogène puis incorporer les noix. verser la préparation dans un moule de préférence rectangulaire. cuire 2o à 25 minutes à 180°. sortez du four et attendez quelques minutes pour démouler. servir avec une boule de glace pour plus de gourmandise.",
    appliance: "four",
    ustensils: ["moule à gateaux", "casserolle"],
  },
  {
    id: 9,
    name: "Salade méditerannéene fraiche au chèvre",
    servings: 4,
    ingredients: [
      {
        ingredient: "concombre",
        quantity: 1,
      },
      {
        ingredient: "olives",
      },
      {
        ingredient: "fromage de chèvre",
        quantity: 150,
        unit: "grammes",
      },
      {
        ingredient: "vinaigre balsamic",
      },
      {
        ingredient: "huile d'olive",
      },
      {
        ingredient: "basilic",
      },
    ],
    time: 15,
    description:
      "Peler le concombre le couper 2, retirer les pépins. couper les olives en morceaux, ainsi que le fromage de chèvre. ajouter le basilic ainsi que le vinaigre balsamic et l'huile d'olives à votre gout.",
    appliance: "saladier",
    ustensils: ["cuillère en bois", "couteau"],
  },
  {
    id: 10,
    name: "Tartiflette",
    servings: 4,
    ingredients: [
      {
        ingredient: "roblochon",
        quantity: "1",
      },
      {
        ingredient: "pommes de terre",
        quantity: 4.5,
        unit: "kg",
      },
      {
        ingredient: "jambon fumé",
        quantity: 2,
        unit: "tranches",
      },
      {
        ingredient: "oignon",
        quantity: 300,
        unit: "grammes",
      },
      {
        ingredient: "vin blanc sec",
        quantity: 30,
        unit: "cl",
      },
    ],
    time: 60,
    description:
      "Commencer par cuire les pommes de terre dans l'eau bouillante. puis epluchez les et coupez les en rondelles. emincer les oignons puis les faire dorer dans du beurre. ajouter le jambon fumé coupé en en morceaux ainsi que les pommes de terres. salez, poivrez à votre gout ( et celui de vos convives ) laissez cuisiner durant environ 10 minutes puis ajouter le vin blanc. après 5 minutes, mettre le tout dans un plat à gratin. coupez le rebelochon, soit en tranches, soit le couper en 2 dans le sens de l'épaisseur et recouvrir les pommes de terre. cuire au four (environ 220°) durant 25 minutes. c'est prêt !",
    appliance: "four",
    ustensils: ["plat à gratin", "couteau", "économe"],
  },
  {
    id: 11,
    name: "Salade tomate, mozzarella et pommes",
    servings: 4,
    ingredients: [
      {
        ingredient: "tomates cerises",
        quantity: 250,
        unit: "grammes",
      },
      {
        ingredient: "mozzarella",
        quantity: 150,
        unit: "grammes",
      },
      {
        ingredient: "jambon de parme",
        quantity: 4,
        unit: "tranches",
      },
      {
        ingredient: "pommes",
        quantity: 1,
      },
      {
        ingredient: "salade verte",
        quantity: 1,
      },
      {
        ingredient: "vinaigrette",
        quantity: 5,
        unit: "cl",
      },
    ],
    time: 10,
    description:
      "Commencer par couper les feuilles de salade, ajouter les tomates cerises et le fromage découpé en cubes ou en boules avec la cuillère à melon. découper le jambon de parme en fines lamelles. ajouter la pomme elle aussi découpée en petit morceaux. assaisonnez à votre gout. ",
    appliance: "saladier",
    ustensils: ["couteau", "cuillère à melon"],
  },
  {
    id: 12,
    name: "Compote pomme rhubarbe",
    servings: 4,
    ingredients: [
      {
        ingredient: "rhubarbe",
        quantity: 160,
        unit: "grammes",
      },
      {
        ingredient: "pommes",
        quantity: 8,
      },
      {
        ingredient: "sucre vanillé",
        quantity: 6,
        unit: "sachets",
      },
      {
        ingredient: "eau",
        quantity: "0.5",
        unit: "tasses",
      },
    ],
    time: 40,
    description:
      "Éplucher les fruits et les couper en morceaux, les mettre dans une casserolle en ajoutant l'eau et le sucre vanillé. laisser cuire 15 minutes en remuant régulièrement.",
    appliance: "casserole",
    ustensils: ["couteau", "économe"],
  },
  {
    id: 13,
    name: "Salade mâchée de patates",
    servings: 2,
    ingredients: [
      {
        ingredient: "mâche",
        quantity: 60,
        unit: "grammes",
      },
      {
        ingredient: "pommes de terre",
        quantity: 200,
        unit: "grammes",
      },
      {
        ingredient: "échalote",
        quantity: 2,
      },
      {
        ingredient: "vinaigre de cidre",
        quantity: 1,
        unit: "cuillère à soupe",
      },
      {
        ingredient: "huile d'olive",
        quantity: 2,
        unit: "cuillère à soupe",
      },
    ],
    time: 40,
    description:
      "Cuire les pommes de terre environ 30 minutes. découper les échalottes finement. durant la cuisson des pommes de terre. préparez la vinaigrette avec l'huile d'olive et le vinaigre de cidre. salez poivrez à discrétion. dans un saladier, mettre le mâche. ajouter",
    appliance: "casserole",
    ustensils: ["couteau", "saladier", "cuillère en bois"],
  },
  {
    id: 14,
    name: "Galette bretonne saucisse et fromage à raclette",
    servings: 2,
    ingredients: [
      {
        ingredient: "saucisse bretonne ou de toulouse",
        quantity: 2,
      },
      {
        ingredient: "farine de blé noir",
        quantity: 130,
        unit: "grammes",
      },
      {
        ingredient: "oeuf",
        quantity: 1,
      },
      {
        ingredient: "fromage à raclette",
        quantity: 300,
        unit: "grammes",
      },
      {
        ingredient: "oignon",
        quantity: 1,
      },
      {
        ingredient: "beurre",
        quantity: 75,
        unit: "grammes",
      },
    ],
    time: 100,
    description:
      "Mélanger la farine et les oeufs, faire fondre 25 grammes de beurre et ajouter à la pâte. ajouter du sel. laisser reposer 1 heure. faire les galettes et laisser refroidire. faire chauffer les saucisses avec du beurre et l'oignon. enrouler les saucisses dans les crêpes avec une partie du fromage. mettre le reste du fromage à raclette par dessus les crêpes. passer four pendant 20 minutes",
    appliance: "four",
    ustensils: ["poelle à frire", "couteau"],
  },
  {
    id: 15,
    name: "Crêpes chocolat banane",
    servings: 10,
    ingredients: [
      {
        ingredient: "oeuf",
        quantity: 3,
      },
      {
        ingredient: "farine",
        quantity: 250,
        unit: "grammes",
      },
      {
        ingredient: "lait",
        quantity: 600,
        unit: "ml",
      },
      {
        ingredient: "beurre salé",
        quantity: 30,
        unit: "grammes",
      },
      {
        ingredient: "chocolat au lait",
        quantity: 100,
        unit: "grammes",
      },
      {
        ingredient: "banane",
        quantity: 4,
      },
    ],
    time: 60,
    description:
      "Mélangez dans un saladier, la farine, les oeufs, et le lait. battez jusqu'à avoir une masse homogène. pendant ce temps faites fondre le beurre et ajoutez en une partie à la pâte à crêpes. faire fondre le chocolat ( avec le reste du beurre salé ). lorsque vous chauffez les crêpes. ajouter le chocolat fondu et les bananes coupées en rondelles. ajoutez une touche de chantilly pour les gourmands",
    appliance: "poële à crêpe",
    ustensils: ["saladier", "louche", "cuillère en bois"],
  },
  {
    id: 16,
    name: "Gratin de pâtes à la tomate",
    servings: 2,
    ingredients: [
      {
        ingredient: "tomate",
        quantity: 500,
        unit: "grammes",
      },
      {
        ingredient: "mozzarella",
        quantity: 250,
        unit: "grammes",
      },
      {
        ingredient: "pennes",
        quantity: 500,
        unit: "grammes",
      },
      {
        ingredient: "basilic",
        quantity: 1,
        unit: "tiges",
      },
      {
        ingredient: "huile d'olives",
        quantity: 2,
        unit: "cuillère à soupe",
      },
    ],
    time: 45,
    description:
      "Faire cuire les pâtes si vous n'avez pas de pennes des coquillettes peuvent faire l'affaire. découper les tomates en petits morceaux, soit en tranches soit en dés. coupez le basilic en petites morceaux et mélangez le aux tomates.  coupez la mozzarella en tranche. préchauffez le four à 200°. alternez entre couches de pattes et couches de tomates, terminez par une couche de pates et recouvrir du fromage. laisser au four 30 minutes et régalez vous ! une recette simple qui fera plaisir au petits comme aux grands.",
    appliance: "four",
    ustensils: ["plat à gratin", "couteau", "râpe à fromage"],
  },
  {
    id: 17,
    name: "Smoothie à la fraise",
    servings: 6,
    ingredients: [
      {
        ingredient: "fraise",
        quantity: 500,
        unit: "grammes",
      },
      {
        ingredient: "pastèque",
        quantity: 0.5,
      },
      {
        ingredient: "jus de citron",
        quantity: 1,
        unit: "cuillères à soupe",
      },
      {
        ingredient: "glaçons",
        quantity: 8,
      },
      {
        ingredient: "menthe",
      },
    ],
    time: 15,
    description:
      "Coupez les fraises en morceaux, découpez la chaire de la pastèque en retirant les pépins. mettre le tout dans le blender. ajouter un cuillière à soupe de juste de citron ainsi que les glaçons. ajoutez quelques fueilles de menthe pour plus de fraicheur. mixez le tout. servir et déguster.",
    appliance: "blender",
    ustensils: ["verres", "couteau", "presse citron"],
  },
  {
    id: 18,
    name: "Smoothie ananas et vanille",
    servings: 5,
    ingredients: [
      {
        ingredient: "ananas",
        quantity: 1,
      },
      {
        ingredient: "glace à la vanille",
        quantity: 500,
        unit: "ml",
      },
      {
        ingredient: "lait",
        quantity: 50,
        unit: "cl",
      },
    ],
    time: 10,
    description:
      "Séparez 1/5ème d'ananas ( une belle tranche qui servira pour la décoration des verres ), mettre le reste coupé en cubes au blender, ajouter la glace à la vanille et le lait. mixez. servir et décorer avec l'ananas restant. c'est prêt",
    appliance: "blender",
    ustensils: ["verres", "couteau"],
  },
  {
    id: 19,
    name: "Shake banane kiwi",
    servings: 4,
    ingredients: [
      {
        ingredient: "kiwi",
        quantity: 4,
      },
      {
        ingredient: "citron",
        quantity: 1,
      },
      {
        ingredient: "lait",
        quantity: 1,
        unit: "litres",
      },
      {
        ingredient: "sucre glace",
        quantity: 30,
        unit: "grammes",
      },
      {
        ingredient: "banane",
        quantity: 1,
      },
    ],
    time: 0,
    description:
      "Coupez les fruits en morceaux, ajouter le jus de citron et le lait ainsi que le sucre glace. mixez. ajoutez des glaçons si le lait n'a pas été mis au frais.",
    appliance: "blender",
    ustensils: ["couteau", "verres", "presse citron"],
  },
  {
    id: 20,
    name: "Pates carbonara",
    servings: 5,
    ingredients: [
      {
        ingredient: "tagliatelles",
        quantity: 500,
        unit: "grammes",
      },
      {
        ingredient: "lardons",
        quantity: 150,
        unit: "grammes",
      },
      {
        ingredient: "crème fraiche",
        quantity: 200,
        unit: "grammes",
      },
      {
        ingredient: "parmesan",
        quantity: 100,
        unit: "grammes",
      },
      {
        ingredient: "huile d'olive",
        quantity: 1,
        unit: "cuillères à soupe",
      },
    ],
    time: 30,
    description:
      "Faire cuire les pates comme indiqué sur le paquet. dorer les lardons dans une sauteuse avec l'huile d'olive. ajouter la crême fraiche et baisser le feu au minimum. quand les tagliatelles sont prêtes les mettre dans la sauteuse et bien mélanger le tout en ajoutant le jaune d'oeuf. servir et ajouter le parmesan râpé.",
    appliance: "sauteuse",
    ustensils: ["râpe à fromage", "cuillère en bois"],
  },
  {
    id: 21,
    name: "Spaghettis à la bolognaise",
    servings: 4,
    ingredients: [
      {
        ingredient: "spaghettis",
        quantity: 400,
        unit: "grammes",
      },
      {
        ingredient: "oignon",
        quantity: 2,
      },
      {
        ingredient: "coulis de tomate",
        quantity: 300,
        unit: "grammes",
      },
      {
        ingredient: "viande hachée 1% de matière grasse",
        quantity: 400,
        unit: "grammes",
      },
      {
        ingredient: "vin rouge",
        quantity: 20,
        unit: "cl",
      },
      {
        ingredient: "crème fraiche",
        quantity: 1,
        unit: "cuillères à soupe",
      },
    ],
    time: 30,
    description:
      "Cuisiner la viande hachée dans une poelle à frire. dans une autre faire cuire les oignons découpés en fins dés avec un peu de beurre. ajouter du vin rouge. mélanger les oigons avec la viande hachée. faire cuire les pates le temps indiqué sur le paquet. ajouter le coulis de tomates à la viande hachée. une fois que les pates sont cuites, ajouter la crème fraiche à la viande hachée. serivir.",
    appliance: "casserolle.",
    ustensils: ["cuillère en bois", "louche", "couteau"],
  },
  {
    id: 22,
    name: "Fondant au chocolat",
    servings: 4,
    ingredients: [
      {
        ingredient: "beurre",
        quantity: 160,
        unit: "grammes",
      },
      {
        ingredient: "chocolat noir",
        quantity: 200,
        unit: "grammes",
      },
      {
        ingredient: "farine",
        quantity: 50,
        unit: "grammes",
      },
      {
        ingredient: "oeuf",
        quantity: 4,
      },
      {
        ingredient: "sucre",
        quantity: 150,
        unit: "grammes",
      },
    ],
    time: 30,
    description:
      "Faire fondre le chocolat et le beurre au bain marie. dans un saladier battre les oeufs avec le sucre jusqu'à obtenir une texture de type mousse. ajouter la farine ainsi que le mélange de beurre et chocolat fondu. beurrez le moule à gateaux. mettre au four préchauffé à 200° puis faites chauffer pendant 15 minutes. c'est prêt. servir avec une boule de glace ou une crême dessert.",
    appliance: "four",
    ustensils: ["moule à gateaux", "fouet", "casserolle"],
  },
  {
    id: 23,
    name: "Quiche lorraine",
    servings: 4,
    ingredients: [
      {
        ingredient: "pâte brisée",
        quantity: 200,
        unit: "grammes",
      },
      {
        ingredient: "lardons",
        quantity: 200,
        unit: "grammes",
      },
      {
        ingredient: "beurre",
        quantity: 30,
        unit: "grammes",
      },
      {
        ingredient: "oeuf",
        quantity: 3,
      },
      {
        ingredient: "crème fraîche",
        quantity: 20,
        unit: "cl",
      },
      {
        ingredient: "lait",
        quantity: 20,
        unit: "cl",
      },
    ],
    time: 60,
    description:
      "Étaler la pate dans un moule et la piquer.parsemer de beurre. faire chauffer les lardon dans une poêle. battre les oeufs en ajoutant la crème fraîche et le lait. finalement ajouter les lardons, salez poivrez à votre gout. verser l'ensemble sur la pâte. cuire environ 50 minutes.",
    appliance: "four",
    ustensils: ["moule à gateaux", "rouleau à patisserie", "fouet"],
  },
  {
    id: 24,
    name: "Salade de pâtes",
    servings: 4,
    ingredients: [
      {
        ingredient: "thon en miettes",
        quantity: 160,
        unit: "grammes",
      },
      {
        ingredient: "maïs",
        quantity: 60,
        unit: "grammes",
      },
      {
        ingredient: "tomate",
        quantity: 1,
      },
      {
        ingredient: "concombre",
        quantity: 0.5,
      },
      {
        ingredient: "macaronis",
        quantity: 300,
        unit: "grammes",
      },
      {
        ingredient: "mayonnaise",
        quantity: 2,
        unit: "cuillères à soupe",
      },
    ],
    time: 40,
    description:
      "Découper le concombre et les tomates en dés, les mettre dans un saladier avec le mais et les miettes de poisson, ajouter les pates. ajouter la mayonnaise. mélanger le tout et servir frais.",
    appliance: "saladier",
    ustensils: ["couteau", "cuillère en bois"],
  },
  {
    id: 25,
    name: "Cookies",
    servings: 4,
    ingredients: [
      {
        ingredient: "sucre",
        quantity: 100,
        unit: "grammes",
      },
      {
        ingredient: "beurre",
        quantity: 100,
        unit: "grammes",
      },
      {
        ingredient: "farine",
        quantity: 100,
        unit: "grammes",
      },
      {
        ingredient: "chocolat noir en pepites",
        quantity: 100,
        unit: "grammes",
      },
      {
        ingredient: "oeuf",
        quantity: 1,
      },
    ],
    time: 30,
    description:
      "Faire fondre le beurre et le mélanger avec le sucre. finalement ajouter l'oeuf. ajouter la farine tout en mélangeant peu pa peu pour avoir une masse sans grumaux. ajouter les pépites de chocolat. faire, une plaque de cuisson de petites boules pour les cookies. mettre au four à 180° pour 10 minutes.",
    appliance: "four",
    ustensils: ["fouet", "saladier", "plaque de cuisson"],
  },
  {
    id: 26,
    name: "Soupe de tomates",
    servings: 2,
    ingredients: [
      {
        ingredient: "tomate",
        quantity: 6,
      },
      {
        ingredient: "pommes de terre",
        quantity: 1,
      },
      {
        ingredient: "huile d'olives",
      },
      {
        ingredient: "oignon",
        quantity: 1,
      },
      {
        ingredient: "ail",
        quantity: 1,
        unit: "gousses",
      },
    ],
    time: 25,
    description:
      "Verser de l'huile dans une cocotte minute couper les légumes et les verser dans l'huile chaude. laisser cuire et remuer pendant 10 minutes. passer aux mixer. servir.",
    appliance: "mixer",
    ustensils: ["cocotte minute", "couteau"],
  },
  {
    id: 27,
    name: "Soupe à l'oseille",
    servings: 4,
    ingredients: [
      {
        ingredient: "oseille",
        quantity: 2,
      },
      {
        ingredient: "oeuf",
        quantity: 1,
      },
      {
        ingredient: "crème fraîche",
        quantity: 4,
        unit: "cuillère à soupe",
      },
      {
        ingredient: "vermicelles",
        quantity: 1,
        unit: "verres",
      },
      {
        ingredient: "beurre salé",
        quantity: 50,
        unit: "grammes",
      },
    ],
    time: 15,
    description:
      "Faire fondre l'oseille avec du beurre demi sel, ajouter un litre d'eau. ajouter les vermicelles. laisser cuire. une foit prêt, sortir du feu et après 5 minutes ajouter le jaune d'oeuf et la crême fraîche",
    appliance: "casserolle",
    ustensils: ["couteau", "cuillère en bois"],
  },
  {
    id: 28,
    name: "Soupe de poireaux",
    servings: 4,
    ingredients: [
      {
        ingredient: "poireau",
        quantity: 3,
      },
      {
        ingredient: "pommes de terre",
        quantity: 400,
        unit: "grammes",
      },
      {
        ingredient: "oseille",
        quantity: 75,
        unit: "grammes",
      },
      {
        ingredient: "beurre",
        quantity: 50,
        unit: "grammes",
      },
      {
        ingredient: "crême fraîche",
        quantity: 10,
        unit: "cl",
      },
    ],
    time: 80,
    description:
      "Émincer les blanc de poireaux et les faire chauffer dans 25 grammes de beurre. ajouter les pommes de terres coupées en morceaux. ajouter l'eau et laisser mijoter pour 45 minutes. chauffer l'oseille avec le beurre restant puis incorporer le tout. mixez. ajoutez la crème. bon appetit.",
    appliance: "mixer",
    ustensils: ["casserolle", "couteau"],
  },
  {
    id: 29,
    name: "Houmous express",
    servings: 2,
    ingredients: [
      {
        ingredient: "pois chiches",
        quantity: 1,
        unit: "boites",
      },
      {
        ingredient: "ail",
        quantity: 1,
        unit: "gousses",
      },
      {
        ingredient: "citron",
        quantity: 2,
      },
      {
        ingredient: "huile d'olive",
      },
      {
        ingredient: "paprika",
      },
    ],
    time: 30,
    description:
      "Prendre les pois chiches, les mettre dans le mixer avec de l'huile d'olive, ajouter le jus des 2 citrons et du paprika selon le gout.",
    appliance: "mixer",
    ustensils: ["cuillère en bois", "presse citron"],
  },
  {
    id: 30,
    name: "Purée de pois cassés",
    servings: 4,
    ingredients: [
      {
        ingredient: "pois cassé",
        quantity: 500,
        unit: "grammes",
      },
      {
        ingredient: "oignon",
        quantity: 1,
      },
      {
        ingredient: "ail",
        quantity: 2,
        unit: "gousses",
      },
    ],
    time: 60,
    description:
      "Mettre tous les ingrédients dans une cocotte. ajouter de l'eau pour recouvrir l'ensemble et laisser cuirre à petit feur pour 1 heure. passer au mixer. salez, poivrez. c'est prêt",
    appliance: "mixer",
    ustensils: ["casserolle", "cuillère en bois"],
  },
  {
    id: 31,
    name: "Jardinière de légumes",
    servings: 4,
    ingredients: [
      {
        ingredient: "carotte",
        quantity: 2,
      },
      {
        ingredient: "pommes de terre",
        quantity: 2,
      },
      {
        ingredient: "haricots verts",
        quantity: 150,
        unit: "grammes",
      },
      {
        ingredient: "petits poids",
        quantity: 100,
        unit: "grammes",
      },
      {
        ingredient: "lardons",
        quantity: 150,
        unit: "grammes",
      },
    ],
    time: 60,
    description:
      "Découper en cubes les carottes et pommes de terre. faire revenir dans du beurre. ajouter les lardons, une fois les lardons dorés, ajouter un grand verre d'eau. ajouter les petit poids et les haricots verts ( tous deux pré cuits ). ajouter sel, poivre, thyms et laurier",
    appliance: "poële",
    ustensils: ["couteau", "économe"],
  },
  {
    id: 32,
    name: "Croque monsieur à la dinde",
    servings: 4,
    ingredients: [
      {
        ingredient: "pain de mie",
        quantity: 8,
        unit: "tranches",
      },
      {
        ingredient: "blanc de dinde",
        quantity: 4,
        unit: "tranches",
      },
      {
        ingredient: "emmental",
        quantity: 8,
        unit: "tranches",
      },
      {
        ingredient: "gruyère",
        quantity: 100,
        unit: "grammes",
      },
      {
        ingredient: "lait",
        quantity: 5,
        unit: "cl",
      },
      {
        ingredient: "noix de muscade",
        quantity: 1,
        unit: "pincées",
      },
    ],
    time: 20,
    description:
      "Beurrer les tranches de pain, ajouter entre 2 tranches de pain de mie 1 tranche d'émental, une de blanc de dinde, et une autre d'emmental. dans un récipient, mélanger le gruyère rappé avec le lait et la noix de muscade. mettre sur les croque monsieux. placer au four durnat 10 minutes.",
    appliance: "four",
    ustensils: ["râpe à fromage", "cuillère à soupe", "couteau"],
  },
  {
    id: 33,
    name: "Sandwich au saumon fumé",
    servings: 4,
    ingredients: [
      {
        ingredient: "pain de mie",
        quantity: 8,
        unit: "tranches",
      },
      {
        ingredient: "saumon fumé",
        quantity: 4,
        unit: "tranches",
      },
      {
        ingredient: "feuilles de laitue",
        quantity: 4,
      },
      {
        ingredient: "fromage blanc",
        quantity: 4,
        unit: "cuillères à soupe",
      },
      {
        ingredient: "jus de citron",
        quantity: 1,
        unit: "cuillères à soupe",
      },
    ],
    time: 5,
    description:
      "Mélanger le fromage blanc avec le citron. ajouter un peu de sel et poivre à votre gout. faire dorer le pain de mie. puis étaler le mélange. ajouter une feuille de salade puis le saumon fumé. c'est prêt.",
    appliance: "four",
    ustensils: ["couteau", "cuillère en bois"],
  },
  {
    id: 34,
    name: "Purée de patate douce",
    servings: 4,
    ingredients: [
      {
        ingredient: "patate douce",
        quantity: 800,
        unit: "grammes",
      },
      {
        ingredient: "crème fraîche",
        quantity: 20,
        unit: "cl",
      },
      {
        ingredient: "huile d'olive",
      },
      {
        ingredient: "orange",
        quantity: 1,
      },
    ],
    time: 25,
    description:
      "Éplucher les patates douces et coupez les en morceaux. les faire cuire durant 20 minute dans une casserolle d'eau bouillante. passer au mixer en ajoutant la crème et l'huile d'olive à son gout. salez, poivrez. pressez l'orange et ajouter le jus à l'ensemble. servir.",
    appliance: "mixer",
    ustensils: ["couteau", "économe", "cuillère en bois"],
  },
  {
    id: 35,
    name: "Purée de carottes",
    servings: 2,
    ingredients: [
      {
        ingredient: "carotte",
        quantity: 6,
      },
      {
        ingredient: "pommes de terre",
        quantity: 1,
      },
      {
        ingredient: "beurre",
        quantity: 20,
        unit: "grammes",
      },
      {
        ingredient: "crème fraîche",
        quantity: 2,
        unit: "cuillères à soupe",
      },
      {
        ingredient: "cumin",
        quantity: 1,
        unit: "cuillères à café",
      },
      {
        ingredient: "noix de muscade",
        quantity: 1,
        unit: "pincées",
      },
    ],
    time: 25,
    description:
      "Éplucher les légumes, les couper en morceaux et les mettre à cuire dans une cocotte minute environ 15 minutes. mixer en ajoutant le beurre, la crème. ajouter le cumun et la noix de muscade.",
    appliance: "mixer",
    ustensils: ["cocotte minute", "couteau", "cuillère en bois"],
  },
  {
    id: 36,
    name: "Lasagne courgettes et chèvre",
    servings: 2,
    ingredients: [
      {
        ingredient: "courgette",
        quantity: 2,
      },
      {
        ingredient: "fromage de chèvre",
        quantity: 4,
      },
      {
        ingredient: "lait",
        quantity: 25,
        unit: "cl",
      },
      {
        ingredient: "lasagnes",
        quantity: 5,
        unit: "feuilles",
      },
      {
        ingredient: "gruyère",
        quantity: 40,
        unit: "grammes",
      },
      {
        ingredient: "maïzena",
        quantity: 1,
        unit: "cuillères à soupe",
      },
    ],
    time: 35,
    description:
      "Raper les courgette et les faire revenir durant 15 minutes. ajouter les fromages de chèvre frais. préparer la béchamelle avec le lait et la maizena. salez poivrez, ajouter de la noix de muscade selon les gouts. dans un plat, mettre un peu de sauces au fond, puis des lasagnes, puis des courgettes etc... terminer par de la sauces et ajouter le gruiyère. passer au four à 180° durant 20 à 25 minutes.",
    appliance: "four",
    ustensils: ["plat à gratin", "râpe à fromage", "fouet"],
  },
  {
    id: 37,
    name: "Courgettes farcies au boeuf",
    servings: 2,
    ingredients: [
      {
        ingredient: "courgette",
        quantity: 2,
      },
      {
        ingredient: "viande hachée",
        quantity: 600,
        unit: "grammes",
      },
      {
        ingredient: "huile d'olives",
        quantity: 25,
        unit: "cl",
      },
      {
        ingredient: "oignon",
        quantity: 1,
      },
      {
        ingredient: "coulis de tomates",
        quantity: 20,
        unit: "cl",
      },
      {
        ingredient: "gruyère",
        quantity: 50,
        unit: "grammes",
      },
    ],
    time: 60,
    description:
      "Couper les courgettes dans le sens de la longueur. vider les courgette dans un saladier. réserver.faire revenir la chair des courgettes dans 25cl d'huile d'olive. ajouter l'oignon puis la viande hachée. mettre la farce dans les courgettes. ajouter le coulis de tomates. mettre au four pendant 30 minutes. avant la fin de la cuisson ajouter le fromage rapé",
    appliance: "four",
    ustensils: ["couteau", "cuillère en bois", "poelle à frire"],
  },
  {
    id: 38,
    name: "Pain perdu",
    servings: 4,
    ingredients: [
      {
        ingredient: "pain",
        quantity: 6,
        unit: "tranches",
      },
      {
        ingredient: "lait",
        quantity: 25,
        unit: "cl",
      },
      {
        ingredient: "oeuf",
        quantity: 3,
      },
      {
        ingredient: "sucre roux",
        quantity: 75,
        unit: "grammes",
      },
    ],
    time: 20,
    description:
      "Fouettez les oeufs, le sucre et le lait. tremper les tranches de pain. le cuire au four pendant environ 10 minutes à 180°. servir",
    appliance: "four",
    ustensils: ["fouet", "bol", "cuillère à soupe"],
  },
  {
    id: 39,
    name: "Crumble aux pommes",
    servings: 40,
    ingredients: [
      {
        ingredient: "pomme",
        quantity: 2,
      },
      {
        ingredient: "farine",
        quantity: 100,
        unit: "grammes",
      },
      {
        ingredient: "beurre",
        quantity: 50,
        unit: "grammes",
      },
      {
        ingredient: "sucre roux",
        quantity: 80,
        unit: "grammes",
      },
    ],
    time: 40,
    description:
      "Découper les pommes en dé. mélanger dans un saladier la farine, le sucre et le beurre. bien mélanger. beurrer le moule et ajouter les pommes. par dessus placez la pate que vous avez obtenu. cuire 20 minutes au four",
    appliance: "four",
    ustensils: ["saladier", "couteau", "fouet"],
  },
  {
    id: 40,
    name: "Limonade",
    servings: 4,
    ingredients: [
      {
        ingredient: "eau",
        quantity: 1,
        unit: "litres",
      },
      {
        ingredient: "citron vert",
        quantity: 3,
      },
      {
        ingredient: "sucre en poudre",
        quantity: 4,
        unit: "cuillères à café",
      },
      {
        ingredient: "bicarbonate",
        quantity: 1,
        unit: "cuillères à café",
      },
    ],
    time: 10,
    description:
      "Dans un saladier mettre l'eau, le jus des cirtons et le sucre. bien mélanger. ajouter le bicarbonate. servir. ajouter des glaçon et une feuille de menthe pour la déco.",
    appliance: "saladier",
    ustensils: ["cuillère en bois"],
  },
  {
    id: 41,
    name: "Mousse au chocolat",
    servings: 4,
    ingredients: [
      {
        ingredient: "oeuf",
        quantity: 3,
      },
      {
        ingredient: "chocolat noir",
        quantity: 100,
        unit: "grammes",
      },
      {
        ingredient: "sucre vanillé",
        quantity: 1,
        unit: "sachets",
      },
    ],
    time: 20,
    description:
      "Séparer les blancs d'oeufs. faire fondre le chocolat au bain marie. ajouter les jaunes et le sucre au chocolat hors du feu. battre les blancs en neige. ajouter les blancs au mélange de chocolat. mélangez délicatement avec une spatule. servir dans un plat ou dans des verres. mettre au frais",
    appliance: "casserolle",
    ustensils: ["fouet", "spatule", "verres"],
  },
  {
    id: 42,
    name: "Charlotte au poires",
    servings: 3,
    ingredients: [
      {
        ingredient: "chocolat",
        quantity: 200,
        unit: "grammes",
      },
      {
        ingredient: "oeuf",
        quantity: 3,
      },
      {
        ingredient: "poires au jus",
        quantity: 0.5,
        unit: "boites",
      },
      {
        ingredient: "boudoirs",
        quantity: 15,
      },
    ],
    time: 60,
    description:
      "Commencez par préparer la mousse au chocolat au moins 2 heures avant. quand la mousse est prête et a reposée. alors mouiller les boudoirs dans le jus des poires. disposer. alterner : mousse au chocolat, boudoirs et poires. mettre au frais.",
    appliance: "moule à charlotte",
    ustensils: ["saladier", "couteau", "fouet"],
  },
  {
    id: 43,
    name: "Tarte au citron",
    servings: 6,
    ingredients: [
      {
        ingredient: "pâte brisée",
        quantity: 200,
        unit: "grammes",
      },
      {
        ingredient: "sucre",
        quantity: 150,
        unit: "grammes",
      },
      {
        ingredient: "beurre fondu",
        quantity: 100,
        unit: "grammes",
      },
      {
        ingredient: "oeuf",
        quantity: 3,
      },
      {
        ingredient: "citron",
      },
    ],
    time: 50,
    description:
      "Préchauffez le fours à 200°. etaler la pate. la mettre dans un moule. battre les oeufs avec le sucre. ajouter le jus de citron et le beurre. verser le tout sur la pate. au four 30 minutes. bon appetit ",
    appliance: "four",
    ustensils: ["rouleau à patisserie", "moule à tarte", "presse citron"],
  },
  {
    id: 44,
    name: "Crème déssert au chocolat",
    servings: 6,
    ingredients: [
      {
        ingredient: "lait",
        quantity: 1,
        unit: "litres",
      },
      {
        ingredient: "chocolat",
        quantity: 200,
        unit: "grammes",
      },
      {
        ingredient: "sucre",
        quantity: 100,
        unit: "grammes",
      },
      {
        ingredient: "beurre",
        quantity: 50,
        unit: "grammes",
      },
      {
        ingredient: "farine",
        quantity: 40,
        unit: "grammes",
      },
    ],
    time: 15,
    description:
      "Mélanger la farine et le beurre fondu en ajoutant le lait peu à peu. ajouter du sucre après la cuisson. bien mélanger. ajouter le chocolat en morceaux et laisser chauffer 8 minutes en mélangeant avec une cuillère en bois. mettre dans des verres",
    appliance: "casserolle",
    ustensils: ["cuillère en bois"],
  },
  {
    id: 45,
    name: "Crème patissière",
    servings: 8,
    ingredients: [
      {
        ingredient: "lait",
        quantity: 50,
        unit: "cl",
      },
      {
        ingredient: "oeuf",
        quantity: 2,
      },
      {
        ingredient: "farine",
        quantity: 30,
        unit: "grammes",
      },
      {
        ingredient: "sucre",
        quantity: 80,
        unit: "grammes",
      },
    ],
    time: 30,
    description:
      "Faire bouillir le lait ( on peut y ajouter de l'essence de vanille. battre les oeufs et le sucre, ajouter la farine puis finalement ajouter le lait chaud. remettre à feu doux pour faire épaissir en remuant pendant 5 à 10 minutes.",
    appliance: "casserolle",
    ustensils: ["fouet", "saladier"],
  },
  {
    id: 46,
    name: "Far breton",
    servings: 6,
    ingredients: [
      {
        ingredient: "farine",
        quantity: 250,
        unit: "grammes",
      },
      {
        ingredient: "sucre",
        quantity: 150,
        unit: "grammes",
      },
      {
        ingredient: "sucre vanillé",
        quantity: 1,
        unit: "sachets",
      },
      {
        ingredient: "oeuf",
        quantity: 4,
      },
      {
        ingredient: "lait",
        quantity: 1,
        unit: "litre",
      },
      {
        ingredient: "pruneaux",
        quantity: 100,
        unit: "grammes",
      },
    ],
    time: 60,
    description:
      "Mélanger la farine avec le sucre et les oeufs en ajoutant du sucre vanillé. ajouter le lait petit à petit. ajouter un petit vers de rhum. verser la masse dans un plat beurré y placer les pruneaux et faire cuire à 200° pendant 45 minutes",
    appliance: "four",
    ustensils: ["fouet", "moule", "verres"],
  },
  {
    id: 47,
    name: "Mousse au citron",
    servings: 6,
    ingredients: [
      {
        ingredient: "jus de citron",
        quantity: 100,
        unit: "grammes",
      },
      {
        ingredient: "mascarpone",
        quantity: 250,
        unit: "grammes",
      },
      {
        ingredient: "sucre",
        quantity: 100,
        unit: "grammes",
      },
      {
        ingredient: "crème fraîche",
        quantity: 20,
        unit: "cl",
      },
    ],
    time: 5,
    description:
      "Mélanger le jus de citron avec le sucre et la mascarpone. ajouter la crème fraiche. mélanger le tout et mettre au congélateur pendant 1 heure. servir",
    appliance: "saladier",
    ustensils: ["fouet", "verres", "cuillère en bois"],
  },
  {
    id: 48,
    name: "Pizza",
    servings: 4,
    ingredients: [
      {
        ingredient: "pâte à pizza",
        quantity: 1,
      },
      {
        ingredient: "tomates pelées",
        quantity: 1,
        unit: "boites",
      },
      {
        ingredient: "lardons",
        quantity: 1,
        unit: "barquettes",
      },
      {
        ingredient: "champignons de paris",
        quantity: 1,
        unit: "boites",
      },
      {
        ingredient: "gruyère",
        quantity: 200,
        unit: "grammes",
      },
    ],
    time: 40,
    description:
      "Étaler la pate a pizza. ecraser les tomates pelées, les étaler sur la pâte, ajouter les lardons et les champignons. ajouter le gruyère eet passer au four à 220° durant 20 minutes",
    appliance: "four",
    ustensils: ["rouleau à patisserie", "râpe à fromage", "couteau"],
  },
  {
    id: 49,
    name: "Smoothie tropical",
    servings: 4,
    ingredients: [
      {
        ingredient: "bananes",
        quantity: 2,
      },
      {
        ingredient: "kiwis",
        quantity: 3,
      },
      {
        ingredient: "mangue",
        quantity: 1,
      },
      {
        ingredient: "ananas",
        quantity: 4,
        unit: "tranches",
      },
      {
        ingredient: "miel",
        quantity: 2,
        unit: "cuillères à soupe",
      },
    ],
    time: 0,
    description:
      "Découper les fruits. le passer au blender jusqu'à obtenir une texture liquide. mettre au frais. servir",
    appliance: "blender",
    ustensils: ["couteau", "verres"],
  },
  {
    id: 50,
    name: "Frangipane",
    servings: 2,
    ingredients: [
      {
        ingredient: "pâte feuilletée",
        quantity: 400,
        unit: "grammes",
      },
      {
        ingredient: "oeuf",
        quantity: 6,
      },
      {
        ingredient: "poudre d'amendes",
        quantity: 500,
        unit: "grammes",
      },
      {
        ingredient: "beurre",
        quantity: 500,
        unit: "grammes",
      },
      {
        ingredient: "sucre glace",
        quantity: 500,
        unit: "grammes",
      },
    ],
    time: 60,
    description:
      "Préparer la frangipane : mélanger le sucre la poudre d'amander, le beurre et les oeufs. etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. garnir de frangipane et recouvrir du reste de pate feuilletée. mettre au four 30 minutes",
    appliance: "four",
    ustensils: ["rouleau à patisserie", "fouet"],
  },
];

let result;

result = data.filter((recipe) => {
  return recipe.name.toLowerCase().includes(filter.toLowerCase());
});

let dataWithForEach = [];
result.forEach((recipe) => {
  if (recipe.name.toLowerCase().includes(filter.toLowerCase())) {
    console.log(recipe);
    dataWithForEach.push(recipe);
  }
});
result = dataWithForEach;