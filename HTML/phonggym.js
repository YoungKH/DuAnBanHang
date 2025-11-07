// =================== DỮ LIỆU SẢN PHẨM ===================
const products = [
  {
    id: 1,
    title: "Whey Rule1 2.2kg",
    price: 2100000,
    oldPrice: 2300000,
    badge: "-5%",
    stock: false,
    img: "../IMG/rule1.png",
    category: "Whey Protein",
  },
  {
    id: 7,
    title: "Whey Gold Standard 2,27kg",
    price: 2200000,
    oldPrice: 2300000,
    badge: "TẶNG QUÀ",
    stock: true,
    img: "../IMG/wheygold.png",
    category: "Whey Protein",
  },
  {
    id: 8,
    title: "Whey Isolate Muscletech 1kg ",
    price: 4600000,
    oldPrice: 5800000,
    stock: false,
    img: "../IMG/iso whey.jpg",  
    category: "Whey Protein",
  },
  {
    id: 9,
    title: "Whey ASN 1kg",
    price: 749000,
    oldPrice:1899000,
    badge: "",
    stock: true,
    img: "../IMG/asnwhey.png",
    category: "Whey Protein",
  },
  {
    id: 10,
    title: "Whey diesel Whey Isolate",
    price: 1500000,
    oldPrice:2000000,
    img: "/IMG/diesel.png",
    category: "Whey Protein",
  },
  {
    id: 11,
    title: "Hydro Plantinum Whey 1.59kg",
    price: 1900000 ,
    stock: true,
    oldPrice:2000000,
    badge: "10%",
    img: "/IMG/hydro.png",
    category: "Whey Protein",
  },
  {
    id: 12,
    title: "FA Whey Protein 2kg",
    price: 1099000,
    oldPrice: 1299000,
    badge: "-15%",
    stock: true,
    img: "/IMG/fawhey.png",
    category: "Whey Protein",
  },
  {
    id: 13,
    title: "Rule1 Whey 1kg (Chocolate)",
    price: 1500000,
    oldPrice: 2000000,
    badge: "-25%",
    stock: true,
    img: "../IMG/rule1.png",
    category: "Whey Protein",
  },
  {
    id: 14,
    title: "Real ISO Whey 2kg",
    price: 1249000,
    badge: "TẶNG QUÀ",
    stock: true,
    img: "/IMG/realwhey.png",
    category: "Whey Protein",
  },
  {
    id: 15,
    title: "Natrubio Classic Whey 1.8kg",
    price: 749000,
    oldPrice: 899000,
    badge: "-17%",
    img: "/IMG/natrubio.png",
    stock: false,
    category: "Whey Protein", 
  },
  {
    id: 16,
    title: "Whey Protein Powder 2kg",
    price: 650000,
    oldPrice: 799000,
    badge: "-13%",
    stock: false,
    img: "/IMG/powder.png",
    category: "Whey Protein",
  },
  {
    id: 17,
    title: "Whey Zero 1.5kg",
    price: 649000,
    stock: true,
    img: "/IMG/hydrotech.png",
    category: "Whey Protein",
  },
  
  {
    id: 2,
    title: "Best body Creatine Monohydrate ",
    price: 299000,
    oldPrice: 399000,
    badge: "-25%",
    stock: false,  
    img: "../IMG/bestbody.png",
    category: "Creatine",
  },
  {
    id: 18,
    title: "Creatine Micronized ",
    price: 319000,
    oldPrice: 349000,
    badge: "-9%",
    stock: true,
    img: "../IMG/micronized.png",
    category: "Creatine",
  },
  {
    id: 19,
    title: "Creatine Bandidi 150g",
    price: 379000,
    oldPrice: 699000,
    badge:"TẶNG QUÀ",
    stock: true,
    img: "../IMG/bandini.jpg",
    category: "Creatine",
  },
  {
    id: 20,
    title: "Best Body Pure Creatine 250g ",
    price: 499000,
    oldPrice: 599000,
    stock: true,
    badge:"TẶNG QUÀ",
    img: "../IMG/pure.jpg",
    category: "Creatine",
  },
  {
    id: 21,
    title: "Amix Black Line Creatine 350g",
    price: 439000,
    badge: "TẶNG QUÀ",
    stock: true,
    img: "../IMG/amixblack.png",
    category: "Creatine",
  },
  {
    id: 22,
    title: "Rule 1 Creatine Fruit Punch 300g",
    price: 600000,
    stock: false,
    img: "../IMG/rule1creatine.png",
    category: "Creatine",
  },
  {
    id: 23,
    title: "USN Creatine Monohydrate 300g",
    price: 459000,
    oldPrice: 700000,
    badge:"TẶNG QUÀ",
    stock: true,
    img: "../IMG/usn.png",
    category: "Creatine",
  },
  {
    id: 24,
    title: "Ostrovit Creatine Monohydrate 300g",
    price: 450000,
    oldPrice: 749000,
    stock: true,
    img: "../IMG/ostrovit.jpg",
    category: "Creatine",
  },
  {
    id: 25,
    title: "Ostrovit Creatine Monohydrate 500g",
    price: 650000,
    stock: false,
    img: "../IMG/ostrovit500g.jpg",
    category: "Creatine",
  },
  {
    id: 26,
    title: "Ostrovit Creatine Monohydrate Lemon 300g",
    price: 499000,
    stock: true,
    badge:"TẶNG QUÀ",
    img: "../IMG/leomon.jpg",
    category: "Creatine",
  },
  {
    id: 27,
    title: "Evogen Creatine Monohydrate 60 servings",
    price: 899000,
    oldPrice: 1199000,
    stock: true,
    img: "../IMG/evogen.jpg",
    category: "Creatine",
  },
    {
    id: 27,
    title: "Nutrabay Gold Creatine Monohydrate 300g",
    price: 899000,
    stock: false,
    img: "../IMG/nutrabay.jpg",
    category: "Creatine",
  },
  {
    id: 28,
    title: "Kelloggs Special Chocolate 13 Thanh",
    price: 700000,
    oldPrice: 2000000,
    stock: true,
    img: "../IMG/kelloggs.png",
    category: "Diet Food",
  },
  {
    id: 29,
    title: "Herbarlife Nutrition Meal 550g",
    price: 329000,
    oldPrice: 359000,
    badge: "-8%",
    stock: true,
    img: "../IMG/herbar.jpg",
    category: "Diet Food",
  },
  {
    id: 30,
    title: "Protein Bar BiotechUSA 70g",
    price: 450000,
    oldPrice: 600000,
    stock: false,
    img: "../IMG/proteinbar.png",
    category: "Diet Food",
  },
  {
    id: 31,
    title: "Peanut Butter Protein Spread 300g",
    price: 300000,
    oldPrice: 600000,
    stock: true,
    badge: "-50%",
    img: "../IMG/peanut.jpg",
    category: "Diet Food",
  },
  {
    id: 32,
    title: "Protein Play Nutrition 400g",
    price: 700000,
    oldPrice: 1000000,
    stock: false,
    img: "../IMG/playbar.jpg",
    category: "Diet Food",
  },
  {
    id: 33,
    title: "Warrior Crunch Protein Bar 12 Thanh",
    price: 790000,
    badge: "TẶNG QUÀ",
    stock: true,
    img: "../IMG/warrior.jpg",
    category: "Diet Food",
  },
  {
    id: 34,
    title: "Gatorade Protein Bar 6 Thanh",
    price: 800000,
    stock: true,
    badge: "Voucher 50K",
    img: "../IMG/gatorade.jpg",
    category: "Diet Food",
  },
  {
    id: 35,
    title: "High Protein Cookies 400g",
    price: 600000,
    stock: true,
    badge: "Voucher 100K",
    img: "../IMG/high.jpg",
    category: "Diet Food",
  },
  {
    id: 36,
    title: "Musashi High Protein Bar 12 Thanh",
    price: 1190000,
    oldPrice: 1490000,
    badge: "-20%",
    stock: true,
    img: "../IMG/musashi.jpg",
    category: "Diet Food",
  },
  {
    id: 37,
    title: "Warrior Raw Protein Bar 12 Thanh",
    price: 900000,
    oldPrice: 1500000,
    badge: "-40%",
    stock: true,
    img: "../IMG/raw.png",
    category: "Diet Food",
  },
  {
    id: 3,
    title: "BCAA 2:1:1 300g",
    price: 349000,
    img: "https://images.unsplash.com/photo-1580910051070-92b6b0f91d32?w=800&q=60",
    category: "BCAA",
  },
  {
    id: 4,
    title: "Pre-Workout Energy 250g",
    price: 399000,
    img: "https://images.unsplash.com/photo-1612197527201-b0408a5f3f9b?w=800&q=60",
    category: "Pre-Workout",
  },
  {
    id: 5,
    title: "Omega-3 120 viên",
    price: 229000,
    img: "https://images.unsplash.com/photo-1545216571-8f40b1f7d8d9?w=800&q=60",
    category: "Vitamin",
  },
  {
    id: 6,
    title: "Mass Gainer 2.7kg",
    price: 999000,
    img: "https://images.unsplash.com/photo-1585386959984-a415522e3b91?w=800&q=60",
    category: "Mass Gainer",
  },
  // === Additional products added per request: 15 products for each category page (except Whey & Creatine)
  // BCAA (add 14 more to reach 15)
  {
    id: 38,
    title: "BCAA Amino Acid 300g - Tropical",
    price: 289000,
    stock: true,
    img: "/IMG/bcaa1.png",
    category: "BCAA",
  },
  {
    id: 39,
    title: "BCAA 2:1:1 - Fruit Punch 400g",
    price: 349000,
    stock: true,
    img: "/IMG/bcaa2.png",
    category: "BCAA",
  },
  {
    id: 40,
    title: "BCAA Instant Drink 200g",
    price: 199000,
    stock: true,
    img: "/IMG/bcaa3.png",
    category: "BCAA",
  },
  {
    id: 41,
    title: "BCAA Plus Electrolytes 350g",
    price: 329000,
    stock: false,
    img: "/IMG/bcaa4.png",
    category: "BCAA",
  },
  {
    id: 42,
    title: "BCAA Capsules 120 viên",
    price: 259000,
    stock: true,
    img: "/IMG/bcaa5.png",
    category: "BCAA",
  },
  {
    id: 43,
    title: "BCAA Recovery Blend 500g",
    price: 399000,
    stock: true,
    img: "/IMG/bcaa6.png",
    category: "BCAA",
  },
  {
    id: 44,
    title: "BCAA Zero Sugar 300g",
    price: 279000,
    stock: true,
    img: "/IMG/bcaa7.png",
    category: "BCAA",
  },
  {
    id: 45,
    title: "BCAA Hydrate 250g",
    price: 219000,
    stock: true,
    img: "/IMG/bcaa8.png",
    category: "BCAA",
  },
  {
    id: 46,
    title: "BCAA Powder Mix 600g",
    price: 449000,
    stock: false,
    img: "/IMG/bcaa9.png",
    category: "BCAA",
  },
  {
    id: 47,
    title: "Branched Chain Amino 400g",
    price: 319000,
    stock: true,
    img: "/IMG/bcaa10.png",
    category: "BCAA",
  },
  {
    id: 48,
    title: "BCAA Powder - Lemon Lime 300g",
    price: 289000,
    stock: true,
    img: "/IMG/bcaa11.png",
    category: "BCAA",
  },
  {
    id: 49,
    title: "BCAA + Glutamine 500g",
    price: 379000,
    stock: true,
    img: "/IMG/bcaa12.png",
    category: "BCAA",
  },
  {
    id: 50,
    title: "BCAA Ready-to-Drink 330ml (4-pack)",
    price: 199000,
    stock: true,
    img: "/IMG/bcaa13.png",
    category: "BCAA",
  },
  {
    id: 51,
    title: "BCAA Endurance 450g",
    price: 419000,
    stock: true,
    img: "/IMG/bcaa14.png",
    category: "BCAA",
  },

  // Pre-Workout (add 14 more to reach 15)
  {
    id: 52,
    title: "Pre-Workout Nitro Boost 300g",
    price: 389000,
    stock: true,
    img: "/IMG/pre1.png",
    category: "Pre-Workout",
  },
  {
    id: 53,
    title: "Pump Formula Pre-Workout 250g",
    price: 349000,
    stock: true,
    img: "/IMG/pre2.png",
    category: "Pre-Workout",
  },
  {
    id: 54,
    title: "Extreme Energy Pre-Workout 200g",
    price: 329000,
    stock: false,
    img: "/IMG/pre3.png",
    category: "Pre-Workout",
  },
  {
    id: 55,
    title: "Pre-Workout Shot 60ml (10pcs)",
    price: 249000,
    stock: true,
    img: "/IMG/pre4.png",
    category: "Pre-Workout",
  },
  {
    id: 56,
    title: "Focus Pre-Workout 180g",
    price: 279000,
    stock: true,
    img: "/IMG/pre5.png",
    category: "Pre-Workout",
  },
  {
    id: 57,
    title: "Stimulant-Free Pre-Workout 300g",
    price: 359000,
    stock: true,
    img: "/IMG/pre6.png",
    category: "Pre-Workout",
  },
  {
    id: 58,
    title: "Pre-Workout Gummies 120g",
    price: 199000,
    stock: true,
    img: "/IMG/pre7.png",
    category: "Pre-Workout",
  },
  {
    id: 59,
    title: "Pre-Workout Focus Caps 60 viên",
    price: 299000,
    stock: false,
    img: "/IMG/pre8.png",
    category: "Pre-Workout",
  },
  {
    id: 60,
    title: "Nitric Oxide Pre-Workout 250g",
    price: 339000,
    stock: true,
    img: "/IMG/pre9.png",
    category: "Pre-Workout",
  },
  {
    id: 61,
    title: "Pre-Workout Xtreme 400g",
    price: 459000,
    stock: true,
    img: "/IMG/pre10.png",
    category: "Pre-Workout",
  },
  {
    id: 62,
    title: "Pre-Workout Amino Blend 300g",
    price: 319000,
    stock: true,
    img: "/IMG/pre11.png",
    category: "Pre-Workout",
  },
  {
    id: 63,
    title: "Pre-Workout Energy Tabs 90 viên",
    price: 219000,
    stock: true,
    img: "/IMG/pre12.png",
    category: "Pre-Workout",
  },
  {
    id: 64,
    title: "Pre-Workout Citrus Burst 300g",
    price: 329000,
    stock: true,
    img: "/IMG/pre13.png",
    category: "Pre-Workout",
  },
  {
    id: 65,
    title: "Pre-Workout Trial Pack 30g",
    price: 99000,
    stock: true,
    img: "/IMG/pre14.png",
    category: "Pre-Workout",
  },

  // Vitamin (add 14 more to reach 15)
  {
    id: 66,
    title: "Multivitamin Daily 60 viên",
    price: 199000,
    stock: true,
    img: "/IMG/vit1.png",
    category: "Vitamin",
  },
  {
    id: 67,
    title: "Vitamin D3 2000 IU - 90 viên",
    price: 159000,
    stock: true,
    img: "/IMG/vit2.png",
    category: "Vitamin",
  },
  {
    id: 68,
    title: "Omega 3 Fish Oil 1000mg (120 softgels)",
    price: 229000,
    stock: true,
    img: "/IMG/vit3.png",
    category: "Vitamin",
  },
  {
    id: 69,
    title: "Vitamin C 1000mg - 60 viên",
    price: 129000,
    stock: false,
    img: "/IMG/vit4.png",
    category: "Vitamin",
  },
  {
    id: 70,
    title: "Magnesium Complex 120 viên",
    price: 199000,
    stock: true,
    img: "/IMG/vit5.png",
    category: "Vitamin",
  },
  {
    id: 71,
    title: "Zinc + Selenium 60 viên",
    price: 149000,
    stock: true,
    img: "/IMG/vit6.png",
    category: "Vitamin",
  },
  {
    id: 72,
    title: "Probiotic Daily 30 servings",
    price: 319000,
    stock: true,
    img: "/IMG/vit7.png",
    category: "Vitamin",
  },
  {
    id: 73,
    title: "Collagen Peptides 300g",
    price: 279000,
    stock: false,
    img: "/IMG/vit8.png",
    category: "Vitamin",
  },
  {
    id: 74,
    title: "B-Complex 50 viên",
    price: 169000,
    stock: true,
    img: "/IMG/vit9.png",
    category: "Vitamin",
  },
  {
    id: 75,
    title: "Iron + Folate 60 viên",
    price: 139000,
    stock: true,
    img: "/IMG/vit10.png",
    category: "Vitamin",
  },
  {
    id: 76,
    title: "Calcium & Vitamin D 120 viên",
    price: 199000,
    stock: true,
    img: "/IMG/vit11.png",
    category: "Vitamin",
  },
  {
    id: 77,
    title: "Vitamin K2 60 viên",
    price: 179000,
    stock: true,
    img: "/IMG/vit12.png",
    category: "Vitamin",
  },
  {
    id: 78,
    title: "Antioxidant Complex 90 viên",
    price: 249000,
    stock: true,
    img: "/IMG/vit13.png",
    category: "Vitamin",
  },
  {
    id: 79,
    title: "Vitamin Essentials Pack (7-day)",
    price: 99000,
    stock: true,
    img: "/IMG/vit14.png",
    category: "Vitamin",
  },

  // Mass Gainer (add 14 more to reach 15)
  {
    id: 80,
    title: "Mass Gainer Extreme 3kg",
    price: 1250000,
    stock: true,
    img: "/IMG/mass1.png",
    category: "Mass Gainer",
  },
  {
    id: 81,
    title: "Lean Mass 2kg",
    price: 899000,
    stock: true,
    img: "/IMG/mass2.png",
    category: "Mass Gainer",
  },
  {
    id: 82,
    title: "Mass Gainer Chocolate 2.7kg",
    price: 1099000,
    stock: false,
    img: "/IMG/mass3.png",
    category: "Mass Gainer",
  },
  {
    id: 83,
    title: "Mass Gainer Vanilla 2kg",
    price: 999000,
    stock: true,
    img: "/IMG/mass4.png",
    category: "Mass Gainer",
  },
  {
    id: 84,
    title: "Gainer Protein Blend 3kg",
    price: 1399000,
    stock: true,
    img: "/IMG/mass5.png",
    category: "Mass Gainer",
  },
  {
    id: 85,
    title: "Mass Gainer RTD 330ml (6-pack)",
    price: 349000,
    stock: true,
    img: "/IMG/mass6.png",
    category: "Mass Gainer",
  },
  {
    id: 86,
    title: "Mass Gainer Sample 150g",
    price: 99000,
    stock: true,
    img: "/IMG/mass7.png",
    category: "Mass Gainer",
  },
  {
    id: 87,
    title: "Mass Gainer High-Cal 4kg",
    price: 1899000,
    stock: false,
    img: "/IMG/mass8.png",
    category: "Mass Gainer",
  },
  {
    id: 88,
    title: "Mass Gainer Carb Stack 2.5kg",
    price: 1249000,
    stock: true,
    img: "/IMG/mass9.png",
    category: "Mass Gainer",
  },
  {
    id: 89,
    title: "Mass Gainer Protein + Creatine 2.8kg",
    price: 1499000,
    stock: true,
    img: "/IMG/mass10.png",
    category: "Mass Gainer",
  },
  {
    id: 90,
    title: "Vegan Mass Gainer 2kg",
    price: 1199000,
    stock: true,
    img: "/IMG/mass11.png",
    category: "Mass Gainer",
  },
  {
    id: 91,
    title: "Mass Gainer Lite 1.5kg",
    price: 799000,
    stock: true,
    img: "/IMG/mass12.png",
    category: "Mass Gainer",
  },
  {
    id: 92,
    title: "Mass Gainer Chocolate Delight 3.2kg",
    price: 1599000,
    stock: true,
    img: "/IMG/mass13.png",
    category: "Mass Gainer",
  },
  {
    id: 93,
    title: "Mass Gainer Performance 3kg",
    price: 1299000,
    stock: true,
    img: "/IMG/mass14.png",
    category: "Mass Gainer",
  },

  // Diet Food (add 5 more to reach 15)
  {
    id: 94,
    title: "CaliBar Protein 6 thanh",
    price: 450000,
    stock: true,
    img: "/IMG/calibar.jpg",
    category: "Diet Food",
  },
  {
    id: 95,
    title: "Go On Nutrition Protein Bar 24 thanh",
    price: 600000,
    stock: false,
    img: "/IMG/goon.jpg",
    category: "Diet Food",
  },
  {
    id: 96,
    title: "Applied Nutrition Protein Bar 12 Thanh",
    price: 700000,
    oldPrice: 900000,
    badge: "-22%",
    stock: true,
    img: "/IMG/applied.jpg",
    category: "Diet Food",
  },
  {
    id: 97,
    title: "Max Super Protein Bar 12 Thanh",
    price: 1200000,
    oldPrice: 1500000,
    badge: "Voucher 30k",
    stock: true,
    img: "/IMG/max.jpg",
    category: "Diet Food",
  },
  {
    id: 98,
    title: "Low Carb Protein Bar 6 Thanh",
    price: 329000,
    stock: false,
    img: "/IMG/lowcarb.jpg",
    category: "Diet Food",
  },

  // Fat Burner (add 15)
  {
    id: 99,
    title: "Fat Burner Thermo 60 viên",
    price: 399000,
    stock: true,
    img: "/IMG/fat1.png",
    category: "Fat Burner",
  },
  {
    id: 100,
    title: "L-Carnitine Liquid 500ml",
    price: 249000,
    stock: true,
    img: "/IMG/fat2.png",
    category: "Fat Burner",
  },
  {
    id: 101,
    title: "Green Tea Extract 90 viên",
    price: 189000,
    stock: true,
    img: "/IMG/fat3.png",
    category: "Fat Burner",
  },
  {
    id: 102,
    title: "Thermogenic Caps 120 viên",
    price: 429000,
    stock: false,
    img: "/IMG/fat4.png",
    category: "Fat Burner",
  },
  {
    id: 103,
    title: "Conjugated Linoleic Acid (CLA) 90 viên",
    price: 229000,
    stock: true,
    img: "/IMG/fat5.png",
    category: "Fat Burner",
  },
  {
    id: 104,
    title: "Fat Burner Shot 60ml (8-pack)",
    price: 299000,
    stock: true,
    img: "/IMG/fat6.png",
    category: "Fat Burner",
  },
  {
    id: 105,
    title: "Garcinia Cambogia 500mg - 60 viên",
    price: 179000,
    stock: true,
    img: "/IMG/fat7.png",
    category: "Fat Burner",
  },
  {
    id: 106,
    title: "Caffeine Anhydrous 200mg - 120 viên",
    price: 159000,
    stock: true,
    img: "/IMG/fat8.png",
    category: "Fat Burner",
  },
  {
    id: 107,
    title: "Metabolic Boost 90 viên",
    price: 349000,
    stock: true,
    img: "/IMG/fat9.png",
    category: "Fat Burner",
  },
  {
    id: 108,
    title: "Fat Burner Plus 60 viên",
    price: 289000,
    stock: false,
    img: "/IMG/fat10.png",
    category: "Fat Burner",
  },
  {
    id: 109,
    title: "Thermo Caps Extreme 30 viên",
    price: 199000,
    stock: true,
    img: "/IMG/fat11.png",
    category: "Fat Burner",
  },
  {
    id: 110,
    title: "Fat Burner Stimulant-Free 60 viên",
    price: 319000,
    stock: true,
    img: "/IMG/fat12.png",
    category: "Fat Burner",
  },
  {
    id: 111,
    title: "Thermo Complex 120 viên",
    price: 459000,
    stock: true,
    img: "/IMG/fat13.png",
    category: "Fat Burner",
  },
  {
    id: 112,
    title: "Fat Blocker 90 viên",
    price: 239000,
    stock: true,
    img: "/IMG/fat14.png",
    category: "Fat Burner",
  },
  {
    id: 113,
    title: "Thermo Drink Mix 300g",
    price: 279000,
    stock: true,
    img: "/IMG/fat15.png",
    category: "Fat Burner",
  },

  // Phụ Kiện (Accessories) - add 15
  {
    id: 114,
    title: "Shaker Bottle 700ml",
    price: 99000,
    stock: true,
    img: "/IMG/acc1.png",
    category: "Phụ Kiện",
  },
  {
    id: 115,
    title: "Gym Gloves - Size M",
    price: 149000,
    stock: true,
    img: "/IMG/acc2.png",
    category: "Phụ Kiện",
  },
  {
    id: 116,
    title: "Protein Scoop (Metal)",
    price: 59000,
    stock: true,
    img: "/IMG/acc3.png",
    category: "Phụ Kiện",
  },
  {
    id: 117,
    title: "Resistance Band Set",
    price: 179000,
    stock: true,
    img: "/IMG/acc4.png",
    category: "Phụ Kiện",
  },
  {
    id: 118,
    title: "Knee Sleeve Pair",
    price: 219000,
    stock: false,
    img: "/IMG/acc5.png",
    category: "Phụ Kiện",
  },
  {
    id: 119,
    title: "Lifting Straps",
    price: 99000,
    stock: true,
    img: "/IMG/acc6.png",
    category: "Phụ Kiện",
  },
  {
    id: 120,
    title: "Gym Towel - Microfiber",
    price: 69000,
    stock: true,
    img: "/IMG/acc7.png",
    category: "Phụ Kiện",
  },
  {
    id: 121,
    title: "Phone Armband Holder",
    price: 89000,
    stock: true,
    img: "/IMG/acc8.png",
    category: "Phụ Kiện",
  },
  {
    id: 122,
    title: "Foam Roller 45cm",
    price: 199000,
    stock: true,
    img: "/IMG/acc9.png",
    category: "Phụ Kiện",
  },
  {
    id: 123,
    title: "Waterproof Duffle Bag",
    price: 399000,
    stock: true,
    img: "/IMG/acc10.png",
    category: "Phụ Kiện",
  },
  {
    id: 124,
    title: "Jump Rope - Speed",
    price: 89000,
    stock: true,
    img: "/IMG/acc11.png",
    category: "Phụ Kiện",
  },
  {
    id: 125,
    title: "Wrist Wraps",
    price: 99000,
    stock: true,
    img: "/IMG/acc12.png",
    category: "Phụ Kiện",
  },
  {
    id: 126,
    title: "Meal Prep Container Set",
    price: 159000,
    stock: true,
    img: "/IMG/acc13.png",
    category: "Phụ Kiện",
  },
  {
    id: 127,
    title: "Gym Belt - Leather",
    price: 249000,
    stock: false,
    img: "/IMG/acc14.png",
    category: "Phụ Kiện",
  },
  {
    id: 128,
    title: "Protein Jar Organizer",
    price: 129000,
    stock: true,
    img: "/IMG/acc15.png",
    category: "Phụ Kiện",
  },

  // Sản Phẩm Thanh Lý (Sale / clearance) - add 15
  {
    id: 129,
    title: "Clearance Whey 1kg - Limited",
    price: 399000,
    oldPrice: 599000,
    badge: "-33%",
    stock: true,
    img: "/IMG/sale1.png",
    category: "Sản Phẩm Thanh Lý",
  },
  {
    id: 130,
    title: "Clearance BCAA 300g",
    price: 189000,
    oldPrice: 289000,
    badge: "-34%",
    stock: true,
    img: "/IMG/sale2.png",
    category: "Sản Phẩm Thanh Lý",
  },
  {
    id: 131,
    title: "Clearance Mass Gainer 2kg",
    price: 699000,
    oldPrice: 999000,
    badge: "-30%",
    stock: false,
    img: "/IMG/sale3.png",
    category: "Sản Phẩm Thanh Lý",
  },
  {
    id: 132,
    title: "Clearance Pre-Workout 200g",
    price: 149000,
    oldPrice: 249000,
    badge: "-40%",
    stock: true,
    img: "/IMG/sale4.png",
    category: "Sản Phẩm Thanh Lý",
  },
  {
    id: 133,
    title: "Clearance Protein Bars (6pcs)",
    price: 129000,
    oldPrice: 199000,
    badge: "-35%",
    stock: true,
    img: "/IMG/sale5.png",
    category: "Sản Phẩm Thanh Lý",
  },
  {
    id: 134,
    title: "Clearance Creatine 300g",
    price: 149000,
    oldPrice: 249000,
    badge: "-40%",
    stock: true,
    img: "/IMG/sale6.png",
    category: "Sản Phẩm Thanh Lý",
  },
  {
    id: 135,
    title: "Clearance Vitamin Pack",
    price: 99000,
    oldPrice: 159000,
    badge: "-38%",
    stock: true,
    img: "/IMG/sale7.png",
    category: "Sản Phẩm Thanh Lý",
  },
  {
    id: 136,
    title: "Clearance Shaker 500ml",
    price: 49000,
    oldPrice: 99000,
    badge: "-50%",
    stock: true,
    img: "/IMG/sale8.png",
    category: "Sản Phẩm Thanh Lý",
  },
  {
    id: 137,
    title: "Clearance Fitness Gloves",
    price: 69000,
    oldPrice: 129000,
    badge: "-46%",
    stock: false,
    img: "/IMG/sale9.png",
    category: "Sản Phẩm Thanh Lý",
  },
  {
    id: 138,
    title: "Clearance Fat Burner 60 viên",
    price: 149000,
    oldPrice: 299000,
    badge: "-50%",
    stock: true,
    img: "/IMG/sale10.png",
    category: "Sản Phẩm Thanh Lý",
  },
  {
    id: 139,
    title: "Clearance Protein Pancake Mix 400g",
    price: 99000,
    oldPrice: 179000,
    badge: "-45%",
    stock: true,
    img: "/IMG/sale11.png",
    category: "Sản Phẩm Thanh Lý",
  },
  {
    id: 140,
    title: "Clearance Resistance Band",
    price: 59000,
    oldPrice: 129000,
    badge: "-54%",
    stock: true,
    img: "/IMG/sale12.png",
    category: "Sản Phẩm Thanh Lý",
  },
  {
    id: 141,
    title: "Clearance Collagen 200g",
    price: 79000,
    oldPrice: 159000,
    badge: "-50%",
    stock: true,
    img: "/IMG/sale13.png",
    category: "Sản Phẩm Thanh Lý",
  },
  {
    id: 142,
    title: "Clearance Meal Prep Box",
    price: 69000,
    oldPrice: 129000,
    badge: "-46%",
    stock: true,
    img: "/IMG/sale14.png",
    category: "Sản Phẩm Thanh Lý",
  },
  {
    id: 143,
    title: "Clearance Gym Belt",
    price: 119000,
    oldPrice: 249000,
    badge: "-52%",
    stock: true,
    img: "/IMG/sale15.png",
    category: "Sản Phẩm Thanh Lý",
  },
];

// =================== CẤU HÌNH ===================
const categories = [
  "Whey Protein",
  "Creatine",
  "Mass Gainer",
  "Pre-Workout",
  "BCAA",
  "Vitamin",
  "Diet Food",
  "Fat Burner",
  "Phụ Kiện",
  "Sản Phẩm Thanh Lý"
];

// =================== HÀM HỖ TRỢ ===================
const formatPrice = (v) =>
  v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "₫";

let productGrid = document.getElementById("productGrid");
const categoryList = document.getElementById("categoryList");

// =================== DANH MỤC ===================
function renderCategories() {
  if (!categoryList) return;
  categoryList.innerHTML = "";
  categories.forEach((c) => {
    const li = document.createElement("li");
    li.textContent = c;
    li.onclick = () => filterByCategory(c);
    categoryList.appendChild(li);
  });
}
renderCategories();

// =================== CATEGORY PANEL (floating) ===================
function createCategoryPanel() {
  // avoid double-creating
  if (document.querySelector('.category-panel')) return;

  const panel = document.createElement('div');
  panel.className = 'category-panel';

  const closeBtn = document.createElement('button');
  closeBtn.className = 'panel-close';
  closeBtn.innerHTML = '&times;';
  closeBtn.addEventListener('click', () => panel.classList.remove('open'));
  panel.appendChild(closeBtn);

  const ul = document.createElement('ul');
  ul.className = 'cat-list';

  // mapping category -> page (fallbacks)
  const pageMap = {
    'Whey Protein': 'whey.html',
    'Creatine': 'creatine.html',
    'Mass Gainer': 'mass.html',
  'Pre-Workout': 'preworkout.html',
    'BCAA': 'bcaa.html',
    'Vitamin': 'vitamin.html',
    'Diet Food': 'diet.html',
    'Fat Burner': 'fatburner.html',
    'Phụ Kiện': 'phukien.html',
    
    'Sản Phẩm Thanh Lý': 'sale.html'
  };

  categories.forEach((c, i) => {
    const li = document.createElement('li');
    li.tabIndex = 0;
    li.innerHTML = `<span class="cat-name">${c}</span><span class="arrow">›</span>`;
    // staggered reveal when opening
    li.style.transitionDelay = (i * 45) + 'ms';
    li.addEventListener('click', (ev) => {
      ev.stopPropagation();
      // if we're on a listing page, try to filter in place; otherwise navigate
      const current = window.location.pathname.split('/').pop();
      const targetPage = pageMap[c] || pageMap['Whey Protein'];
      if (current === targetPage) {
        panel.classList.remove('open');
        filterByCategory(c);
      } else {
        window.location.href = targetPage;
      }
    });
    ul.appendChild(li);
  });

  panel.appendChild(ul);

  // Always append the panel to the document body so it can be positioned
  // fixed under the header regardless of header markup on each page.
  document.body.appendChild(panel);

  // close when clicking outside
  document.addEventListener('click', (e) => {
    if (!panel.classList.contains('open')) return;
    if (!panel.contains(e.target) && !e.target.closest('.catalog-btn')) {
      panel.classList.remove('open');
      panel.querySelectorAll('.cat-list li').forEach(it => it.classList.remove('show'));
    }
  });

  return panel;
}

// wire catalog button(s) - only enable the floating panel on category/listing pages
document.addEventListener('DOMContentLoaded', () => {
  const current = window.location.pathname.split('/').pop().toLowerCase();
  // skip the homepage pages per user preference (product detail intentionally included now)
  const skipPages = ['trangchu.html', 'index.html', ''];
  if (skipPages.includes(current)) return;

  // create and wire the panel on allowed pages
  createCategoryPanel();
  const panel = document.querySelector('.category-panel');
  const btns = document.querySelectorAll('.catalog-btn');
  btns.forEach(b => b.addEventListener('click', (ev) => {
    ev.stopPropagation();
    if (!panel) return;

    // compute positions relative to the viewport so the panel is fixed
    const btn = ev.currentTarget || b;
    const btnRect = btn.getBoundingClientRect();
    const headerEl = document.querySelector('.site-header') || document.querySelector('.header') || document.querySelector('header') || document.querySelector('.header-inner');
    const headerRect = headerEl ? headerEl.getBoundingClientRect() : { bottom: 0 };

    const panelWidth = 320;
    const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    // Prefer placing the panel under the header (using header bottom). If no header found,
    // place under the button.
    const top = headerEl ? Math.round(headerRect.bottom + 8) : Math.round(btnRect.bottom + 8);

    // align left with the button; clamp so panel stays inside the viewport with an 8px gutter
    let left = Math.round(btnRect.left);
    if (left + panelWidth + 8 > viewportWidth) left = viewportWidth - panelWidth - 8;
    if (left < 8) left = 8;

    panel.style.position = 'fixed';
    panel.style.left = `${left}px`;
    panel.style.top = `${top}px`;
    panel.style.width = `${panelWidth}px`;

    const open = panel.classList.toggle('open');
    const items = panel.querySelectorAll('.cat-list li');
    if (open) {
      items.forEach((it, idx) => setTimeout(()=> it.classList.add('show'), 30 + idx * 45));
    } else {
      items.forEach(it => it.classList.remove('show'));
    }
  }));
});

// ------------------ PAGE-SPECIFIC BEHAVIOR (Best Sellers, Carousel, Student Promo) ------------------
document.addEventListener('DOMContentLoaded', () => {
  // Best Sellers grid (render simple cards without action buttons)
  try {
    const grid = document.getElementById('bestSellersGrid');
    if (grid && typeof products !== 'undefined') {
      // Render Diet Food items here (show same grid layout as the Whey example)
      const items = (products || []).filter(p => (p.category || '') === 'Diet Food').slice(0, 4);
      grid.innerHTML = items.map(p => {
        const badge = p.badge ? `<span class="badge">${p.badge}</span>` : '';
        const img = `<img src="${p.img}" alt="${(p.title||'').replace(/"/g,'')}">`;
        return `
          <div class="card" onclick="viewProduct(${p.id})">
            <div class="card-media">
              ${badge}
              ${img}
            </div>
            <div class="card-body">
              <div class="title">${p.title}</div>
              <div class="meta">${p.category || ''}</div>
              <div class="price-row">
                ${p.oldPrice ? `<div class="old-price">${formatPrice(p.oldPrice)}</div>` : ''}
                <div class="price">${formatPrice(p.price)}</div>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }
  } catch (e) { console.error('BestSellers render error', e); }

  // Populate the Whey product grid placed near the page bottom (id="bestSeller")
  try {
    const ws = document.getElementById('bestSeller');
    if (ws && typeof products !== 'undefined') {
  const items = (products || []).filter(p => (p.category || '').toLowerCase().includes('whey')).slice(0, 4);
      ws.innerHTML = items.map(p => {
        const badge = p.badge ? `<span class="badge">${p.badge}</span>` : '';
        const img = `<img src="${p.img}" alt="${(p.title||'').replace(/"/g,'')}">`;
        return `
          <div class="card" onclick="viewProduct(${p.id})">
            <div class="card-media">
              ${badge}
              ${img}
            </div>
            <div class="card-body">
              <div class="title">${p.title}</div>
              <div class="meta">${p.category || ''}</div>
              <div class="price-row">
                ${p.oldPrice ? `<div class=\"old-price\">${formatPrice(p.oldPrice)}</div>` : ''}
                <div class=\"price\">${formatPrice(p.price)}</div>
              </div>
              <div class="actions">
                <button class="btn-outline" onclick="viewProduct(${p.id})">Xem</button>
                ${p.stock === false ? '<button class="btn-outline" disabled>Hết Hàng</button>' : '<button class="btn-primary" onclick="addToCart(' + p.id + ')"><i class="fa-solid fa-cart-plus"></i> Thêm</button>'}
              </div>
            </div>
          </div>
        `;
      }).join('');

      // prevent button clicks from bubbling to the card
      ws.querySelectorAll('.card').forEach((card) => {
        const innerControls = card.querySelectorAll('button, a');
        innerControls.forEach((el) => el.addEventListener('click', (ev) => ev.stopPropagation()));
      });
    }
  } catch (e) { console.error('bestSeller render error', e); }

  // Populate Creatine products into #bestCreatine (homepage)
  try {
    const cg = document.getElementById('bestCreatine');
    if (cg && typeof products !== 'undefined') {
      const items = (products || []).filter(p => (p.category || '').toLowerCase().includes('creatine')).slice(0, 4);
      cg.innerHTML = items.map(p => {
        const badge = p.badge ? `<span class="badge">${p.badge}</span>` : '';
        const img = `<img src="${p.img}" alt="${(p.title||'').replace(/"/g,'')}">`;
        return `
          <div class="card" onclick="viewProduct(${p.id})">
            <div class="card-media">
              ${badge}
              ${img}
            </div>
            <div class="card-body">
              <div class="title">${p.title}</div>
              <div class="meta">${p.category || ''}</div>
              <div class="price-row">
                ${p.oldPrice ? `<div class=\"old-price\">${formatPrice(p.oldPrice)}</div>` : ''}
                <div class=\"price\">${formatPrice(p.price)}</div>
              </div>
              <div class="actions">
                <button class="btn-outline" onclick="viewProduct(${p.id})">Xem</button>
                ${p.stock === false ? '<button class="btn-outline" disabled>Hết Hàng</button>' : '<button class="btn-primary" onclick="addToCart(' + p.id + ')"><i class="fa-solid fa-cart-plus"></i> Thêm</button>'}
              </div>
            </div>
          </div>
        `;
      }).join('');

      cg.querySelectorAll('.card').forEach((card) => {
        const innerControls = card.querySelectorAll('button, a');
        innerControls.forEach((el) => el.addEventListener('click', (ev) => ev.stopPropagation()));
      });
    }
  } catch (e) { console.error('bestCreatine render error', e); }

  // Carousel initialization (manual controls)
  try {
    const carousel = document.getElementById('mainCarousel');
    if (carousel) {
      const slides = Array.from(carousel.querySelectorAll('.slide'));
      const dotsWrap = carousel.querySelector('.carousel-dots');
      const prevBtn = carousel.querySelector('.carousel-nav.prev');
      const nextBtn = carousel.querySelector('.carousel-nav.next');
      let current = slides.findIndex(s => s.classList.contains('active')) || 0;

      function renderDots() {
        if (!dotsWrap) return;
        dotsWrap.innerHTML = '';
        slides.forEach((s, i) => {
          const d = document.createElement('button');
          d.className = 'dot' + (i === current ? ' active' : '');
          d.setAttribute('aria-label', 'Go to slide ' + (i+1));
          d.addEventListener('click', () => goTo(i));
          dotsWrap.appendChild(d);
        });
      }

      function show(index) {
        slides.forEach((s, i) => s.classList.toggle('active', i === index));
        current = index;
        if (!dotsWrap) return;
        const dots = dotsWrap.querySelectorAll('.dot');
        dots.forEach((d, i) => d.classList.toggle('active', i === index));
      }

      function next() { show((current + 1) % slides.length); }
      function prev() { show((current - 1 + slides.length) % slides.length); }
      function goTo(i) { show(i); }

      if (nextBtn) nextBtn.addEventListener('click', next);
      if (prevBtn) prevBtn.addEventListener('click', prev);

      renderDots();
      if (slides.length) show(current);
    }
  } catch (e) { console.error('Carousel init error', e); }

  // Student promo behavior: claim once per session, show modal and allow copy
  try {
    const claimBtn = document.getElementById('claimStudentBtn');
    const bannerBtn = document.getElementById('studentBannerCTA');
    const modal = document.getElementById('studentModal');
    const modalClose = document.getElementById('studentModalClose');
    const copyBtn = document.getElementById('copyStudentCode');
    const codeEl = document.getElementById('studentCode');
    const timerEl = document.getElementById('studentTimer');
    const remainingEl = document.getElementById('studentRemaining');
    const backdrop = modal && modal.querySelector('.modal-backdrop');

    // Promo configuration (adjust dates/limits as needed)
    const promoConfig = {
      code: (codeEl && codeEl.textContent) ? codeEl.textContent.trim() : 'HOC-SINH-10',
      // end date for the event (ISO string). Change as required.
      endISO: '2025-12-31T23:59:59',
      // maximum number of claims (client-side only) - per-browser approximation
      maxClaims: 1000,
    };

    const CLAIMS_KEY = 'studentPromoClaimsCount';
    const CLAIMED_KEY = 'studentPromoClaimed';

    function getClaimsCount() {
      return parseInt(localStorage.getItem(CLAIMS_KEY) || '0', 10);
    }

    function incrementClaims() {
      const next = getClaimsCount() + 1;
      localStorage.setItem(CLAIMS_KEY, String(next));
      return next;
    }

    function markClaimedUI() {
      if (claimBtn) { claimBtn.textContent = 'Đã nhận'; claimBtn.disabled = true; }
      if (bannerBtn) { bannerBtn.textContent = 'Đã nhận'; bannerBtn.disabled = true; bannerBtn.classList.add('btn-claim'); }
      if (remainingEl) remainingEl.textContent = 'Bạn đã nhận mã';
      if (timerEl) timerEl.style.display = 'none';
    }

    function disablePromoUI(reason) {
      if (claimBtn) { claimBtn.textContent = reason || 'Hết hạn'; claimBtn.disabled = true; }
      if (bannerBtn) { bannerBtn.textContent = reason || 'Hết hạn'; bannerBtn.disabled = true; }
      if (remainingEl && !reason) remainingEl.textContent = '';
    }

    // Render timer and remaining count
    function updatePromoUI() {
      const now = new Date();
      const end = new Date(promoConfig.endISO);
      const claims = getClaimsCount();
      const remaining = Math.max(0, promoConfig.maxClaims - claims);

      if (remainingEl) {
        if (remaining > 0) {
          remainingEl.textContent = `Còn ${remaining} suất học sinh`; 
        } else {
          remainingEl.textContent = `Hết suất`;
        }
      }

      if (now >= end || remaining <= 0) {
        // Promo ended
        disablePromoUI(now >= end ? 'Đã kết thúc' : 'Hết suất');
        if (timerEl) timerEl.textContent = '';
        return;
      }

      // show countdown
      const diff = end - now;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);
      if (timerEl) timerEl.textContent = `${days}d ${String(hours).padStart(2,'0')}h ${String(mins).padStart(2,'0')}m ${String(secs).padStart(2,'0')}s`;
    }

    // initialize
    try { updatePromoUI(); } catch (e) { /* ignore */ }
    const promoInterval = setInterval(updatePromoUI, 1000);

    // if already claimed in this browser session/localStorage
    if (sessionStorage.getItem(CLAIMED_KEY) || localStorage.getItem(CLAIMED_KEY)) {
      markClaimedUI();
    }

    // shared handler
    async function handleClaimClick() {
      const now = new Date();
      const end = new Date(promoConfig.endISO);
      const claims = getClaimsCount();
      const remaining = Math.max(0, promoConfig.maxClaims - claims);

      if (now >= end) {
        if (typeof showToast === 'function') showToast('Chương trình đã kết thúc');
        disablePromoUI('Đã kết thúc');
        return;
      }
      if (remaining <= 0) {
        if (typeof showToast === 'function') showToast('Hết suất');
        disablePromoUI('Hết suất');
        return;
      }

      if (sessionStorage.getItem(CLAIMED_KEY) || localStorage.getItem(CLAIMED_KEY)) {
        if (typeof showToast === 'function') showToast('Bạn đã nhận mã rồi');
        markClaimedUI();
        if (modal) modal.classList.add('open');
        return;
      }

      // Mark claimed (persist locally)
      sessionStorage.setItem(CLAIMED_KEY, '1');
      localStorage.setItem(CLAIMED_KEY, '1');
      const nextCount = incrementClaims();
      markClaimedUI();
      if (modal) modal.classList.add('open');
      if (typeof showToast === 'function') showToast('Mã giảm giá đã sẵn sàng trong cửa sổ mã');
      // update remaining UI immediately
      updatePromoUI();
    }

    if (claimBtn) claimBtn.addEventListener('click', handleClaimClick);
    if (bannerBtn) bannerBtn.addEventListener('click', handleClaimClick);

    if (modalClose) modalClose.addEventListener('click', () => modal && modal.classList.remove('open'));
    if (backdrop) backdrop.addEventListener('click', () => modal && modal.classList.remove('open'));

    if (copyBtn && codeEl) {
      copyBtn.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(codeEl.textContent.trim());
          if (typeof showToast === 'function') showToast('Mã đã được sao chép vào clipboard');
        } catch (err) {
          alert('Không thể sao chép tự động. Mã: ' + codeEl.textContent);
        }
      });
    }
  } catch (e) { console.error('Student promo error', e); }
});

  // Product showcase carousel (homepage) - populate with Whey products and wire controls
  document.addEventListener('DOMContentLoaded', () => {
    try {
      const wrap = document.getElementById('productCarouselWrap');
      const track = document.getElementById('productCarouselTrack');
      if (!wrap || !track || typeof products === 'undefined') return;

      // select Whey products
      const items = (products || []).filter(p => (p.category || '').toLowerCase().includes('whey')).slice(0, 12);

      track.innerHTML = items.map(p => `
        <div class="card" data-id="${p.id}">
          <div class="card-media" onclick="viewProduct(${p.id})">
            ${p.badge ? `<span class=\"badge\">${p.badge}</span>` : ''}
            <div class="media-box">
              <img src="${p.img}" alt="${(p.title||'').replace(/"/g,'')}">
            </div>
            <div class="card-overlays">
              <button class=\"icon-circle\" title=\"Yêu thích\"><i class=\"fa-regular fa-heart\"></i></button>
              <button class=\"icon-circle\" title=\"So sánh\"><i class=\"fa-solid fa-layer-group\"></i></button>
            </div>
          </div>
          <div class="card-body">
            <div class="title">${p.title}</div>
            <div class="meta">${p.category || ''}</div>
            <div class="price-row">
              <div class="price-block">
                ${p.oldPrice ? `<div class=\"old-price\">${formatPrice(p.oldPrice)}</div>` : ''}
                <div class=\"price\">${formatPrice(p.price)}</div>
              </div>
            </div>
            <div class="actions">
              <button class=\"quick-add\" onclick=\"addToCart(${p.id})\" ${p.stock === false ? 'disabled' : ''}>Thêm</button>
            </div>
          </div>
        </div>
      `).join('');

      const prev = wrap.parentElement.querySelector('.show-btn.prev');
      const next = wrap.parentElement.querySelector('.show-btn.next');

      // scrolling behavior: scroll the wrapper by number of visible cards
      function scrollByAmount(dir = 1) {
        const card = track.querySelector('.card');
        if (!card) return;
        const style = getComputedStyle(track);
        const gap = parseInt(style.gap || 18, 10) || 18;
        const cardWidth = Math.round(card.getBoundingClientRect().width + gap);

  // number of cards to scroll per page: force 3 on wide screens to match design
  let visibleCount;
  const vw = wrap.clientWidth;
  if (vw >= 1200) visibleCount = 3;
  else if (vw >= 900) visibleCount = 2;
  else visibleCount = Math.max(1, Math.floor(wrap.clientWidth / cardWidth));
        const scrollAmount = cardWidth * visibleCount * dir;

        wrap.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }

      prev?.addEventListener('click', (e) => { e.preventDefault(); scrollByAmount(-1); });
      next?.addEventListener('click', (e) => { e.preventDefault(); scrollByAmount(1); });

      // enable dragging on track for mouse and touch
      let isDown = false, startX, scrollLeft;
      wrap.addEventListener('mousedown', (e) => {
        isDown = true; wrap.classList.add('dragging'); startX = e.pageX - wrap.offsetLeft; scrollLeft = wrap.scrollLeft;
      });
      wrap.addEventListener('mouseleave', () => { isDown = false; wrap.classList.remove('dragging'); });
      wrap.addEventListener('mouseup', () => { isDown = false; wrap.classList.remove('dragging'); });
      wrap.addEventListener('mousemove', (e) => {
        if(!isDown) return; e.preventDefault(); const x = e.pageX - wrap.offsetLeft; const walk = (x - startX) * 1; wrap.scrollLeft = scrollLeft - walk;
      });

      // touch
      wrap.addEventListener('touchstart', (e) => { startX = e.touches[0].pageX - wrap.offsetLeft; scrollLeft = wrap.scrollLeft; });
      wrap.addEventListener('touchmove', (e) => { const x = e.touches[0].pageX - wrap.offsetLeft; const walk = (x - startX) * 1; wrap.scrollLeft = scrollLeft - walk; });

      // keyboard support: left/right arrows when focus inside wrapper
      wrap.setAttribute('tabindex', '0');
      wrap.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') { e.preventDefault(); scrollByAmount(1); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); scrollByAmount(-1); }
      });

    } catch (err) { console.error('Product showcase init error', err); }
  });

// =================== HIỂN THỊ SẢN PHẨM ===================
function renderProducts(list) {
  if (!productGrid) {
    // try a querySelector fallback (in case script ran before markup or id differs)
    productGrid = document.querySelector('#productGrid');
  }
  if (!productGrid) {
    console.warn('renderProducts: #productGrid not found in DOM');
    return;
  }
  console.log('renderProducts: rendering', list.length, 'products');
  productGrid.innerHTML = "";
  if (list.length === 0) {
    productGrid.innerHTML = "<p>Không có sản phẩm nào.</p>";
    return;
  }

  list.forEach((p) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-media">
        ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
        <img src="${p.img}" alt="${p.title}">
      </div>
      <div class="card-body">
        <div class="title">${p.title}</div>
        <div class="meta">${p.category}</div>
        <div class="price-row">
          ${p.oldPrice ? `<div class="old-price">${formatPrice(p.oldPrice)}</div>` : ''}
          <div class="price">${formatPrice(p.price)}</div>
        </div>
        <div class="stock">${p.stock === false ? '<span class="out">Hết Hàng</span>' : '<span class="in">Còn Hàng</span>'}</div>
        <div class="actions">
          <button class="btn-outline" onclick="viewProduct(${p.id})">Xem</button>
          ${p.stock === false ? '<button class="btn-outline" disabled>Hết Hàng</button>' : '<button class="btn-primary" onclick="addToCart(' + p.id + ')"><i class="fa-solid fa-cart-plus"></i> Thêm</button>'}
        </div>
      </div>
    `;
    // make the whole card act as a link to the product detail
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => viewProduct(p.id));
    // prevent clicks on internal buttons/links from triggering the card navigation
    // (so Add/Buy buttons still work)
    // We'll attach stopPropagation to any button or anchor inside the card.
    productGrid.appendChild(card);
    const innerControls = card.querySelectorAll('button, a');
    innerControls.forEach((el) => {
      el.addEventListener('click', (ev) => ev.stopPropagation());
    });
  });
}

// =================== KHỞI TẠO TRANG CHỦ ===================
const sortSelect = document.getElementById("sortSelect");
if (sortSelect) {
  // Nếu có dropdown sắp xếp => đang ở trang chủ
  renderProducts(products);

  sortSelect.addEventListener("change", (e) => {
    const v = e.target.value;
    let arr = [...products];
    if (v === "price-asc") arr.sort((a, b) => a.price - b.price);
    if (v === "price-desc") arr.sort((a, b) => b.price - a.price);
    renderProducts(arr);
  });
}

// =================== TÌM KIẾM ===================
const searchInput = document.getElementById("searchInput");
const suggestions = document.getElementById("searchSuggestions");
const searchBtn = document.getElementById("searchBtn");

function doSearchQuery(q) {
  const query = (q || "").trim().toLowerCase();
  if (!query) return;

  // If we have a product grid on this page, render matches here
  if (productGrid) {
    const matches = products.filter((p) => p.title.toLowerCase().includes(query));
    renderProducts(matches);
    // scroll to results if possible
    document.querySelector('.products')?.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  // Otherwise redirect to the product listing page with query param
  window.location.href = `whey.html?q=${encodeURIComponent(query)}`;
}

// search by Enter key
if (searchInput) {
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      doSearchQuery(searchInput.value || '');
    }
  });
}

// search by button
if (searchBtn) {
  searchBtn.addEventListener('click', () => doSearchQuery(searchInput?.value || ''));
}

// Suggestions dropdown behavior (optional) - only when suggestions element exists
if (searchInput && suggestions) {
  searchInput.addEventListener("input", () => {
    const q = searchInput.value.trim().toLowerCase();
    if (!q) {
      suggestions.classList.add("hidden");
      return;
    }

    const matches = products
      .filter((p) => p.title.toLowerCase().includes(q))
      .slice(0, 6);

    suggestions.innerHTML = "";
    if (matches.length === 0) {
      suggestions.classList.add("hidden");
      return;
    }

    matches.forEach((m) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <img src="${m.img}" alt="">
        <div>
          <strong>${m.title}</strong>
          <div style="color:#888">${formatPrice(m.price)}</div>
        </div>
      `;
      li.onclick = () => {
        searchInput.value = m.title;
        suggestions.classList.add("hidden");
        // if productGrid exists, show the single product; else redirect
        if (productGrid) renderProducts([m]);
        else window.location.href = `whey.html?q=${encodeURIComponent(m.title)}`;
      };
      suggestions.appendChild(li);
    });
    suggestions.classList.remove("hidden");
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search")) suggestions.classList.add("hidden");
  });
}

// =================== GIỎ HÀNG ===================
let cart = [];
const cartBtn = document.getElementById("cartBtn");
const cartPanel = document.getElementById("cartPanel");
const cartItemsEl = document.getElementById("cartItems");
const cartCountEl = document.getElementById("cartCount");
const cartTotalEl = document.getElementById("cartTotal");

function addToCart(id) {
  const p = products.find((x) => x.id === id);
  if (!p) return;
  // Prevent adding out-of-stock products
  if (p.stock === false) {
    // prefer toast when available
    if (typeof showToast === 'function') showToast('Sản phẩm đã hết hàng, không thể thêm vào giỏ');
    else alert('Sản phẩm đã hết hàng, không thể thêm vào giỏ');
    return;
  }
  const it = cart.find((i) => i.id === id);
  if (it) it.qty++;
  else cart.push({ ...p, qty: 1 });
  updateCartUI();
}

function updateCartUI() {
  if (!cartCountEl || !cartItemsEl || !cartTotalEl) return;
  const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);
  cartCountEl.textContent = totalQty;
  cartItemsEl.innerHTML = "";

  if (cart.length === 0) {
    cartItemsEl.innerHTML = "<p style='color:#666'>Giỏ hàng trống</p>";
    cartTotalEl.textContent = "0₫";
    return;
  }

  cart.forEach((i) => {
    const item = document.createElement("div");
    item.className = "cart-item";
    item.innerHTML = `
      <img src="${i.img}">
      <div style="flex:1">
        <strong>${i.title}</strong>
        <div style="color:#777">${formatPrice(i.price)} x ${i.qty}</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px">
        <button onclick="decreaseQty(${i.id})" class="btn-outline">-</button>
        <button onclick="increaseQty(${i.id})" class="btn-outline">+</button>
        <button onclick="removeItem(${i.id})" class="btn-outline" style="color:#ff3b30">Xóa</button>
      </div>
    `;
    cartItemsEl.appendChild(item);
  });

  cartTotalEl.textContent = formatPrice(
    cart.reduce((s, i) => s + i.price * i.qty, 0)
  );
}

function increaseQty(id) {
  const product = products.find(p => p.id === id);
  if (product && product.stock === false) {
    if (typeof showToast === 'function') showToast('Sản phẩm đã hết hàng, không thể tăng số lượng');
    else alert('Sản phẩm đã hết hàng, không thể tăng số lượng');
    return;
  }
  const it = cart.find((i) => i.id === id);
  if (it) it.qty++;
  updateCartUI();
}

function decreaseQty(id) {
  const it = cart.find((i) => i.id === id);
  if (it && it.qty > 1) it.qty--;
  updateCartUI();
}

function removeItem(id) {
  cart = cart.filter((i) => i.id !== id);
  updateCartUI();
}

if (cartBtn && cartPanel) {
  cartBtn.addEventListener("click", () => {
    cartPanel.classList.toggle("hidden");
    updateCartUI();
  });

  document
    .getElementById("closeCart")
    ?.addEventListener("click", () => cartPanel.classList.add("hidden"));

  document
    .getElementById("checkoutBtn")
    ?.addEventListener("click", () => {
      // Prevent checkout if any cart item is out-of-stock
      const hasOutOfStock = cart.some(ci => {
        const prod = products.find(p => p.id === ci.id);
        return prod && prod.stock === false;
      });
      if (hasOutOfStock) {
        if (typeof showToast === 'function') showToast('Có sản phẩm đã hết hàng trong giỏ — vui lòng xóa trước khi thanh toán');
        else alert('Có sản phẩm đã hết hàng trong giỏ — vui lòng xóa trước khi thanh toán');
        return;
      }
      alert("Demo: Chuyển đến trang thanh toán.\nTổng: " + cartTotalEl.textContent);
    });
}

// =================== LỌC DANH MỤC ===================
function filterByCategory(cat) {
  if (cat === "Whey Protein") {
    // Chuyển sang trang Whey
    window.location.href = "whey.html";
  } else {
    const list = products.filter((p) => p.category === cat);
    renderProducts(list);
  }
}

// =================== TRANG WHEY.HTML ===================
function loadProductsByCategory(category) {
  const filtered = products.filter((p) => p.category === category);
  console.log('loadProductsByCategory:', category, 'found', filtered.length);
  renderProducts(filtered);
}

// =================== XEM CHI TIẾT ===================
function viewProduct(id) {
  const p = products.find((x) => x.id === id);
  if (p) window.location.href = `product-detail.html?id=${p.id}`;
}

// Improve perceived navigation speed for category links:
// - navigate on mousedown/touchstart to reduce any click delay
// - prefetch target pages on hover
document.addEventListener('DOMContentLoaded', () => {
  const catLinks = document.querySelectorAll('.cat-list a');
  catLinks.forEach((a) => {
    // navigate immediately on primary button mousedown (faster than waiting for click)
    a.addEventListener('mousedown', (e) => {
      if (e.button !== 0) return; // only left-click
      // don't break modifiers (ctrl/cmd to open new tab)
      if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
      window.location.href = a.href;
    });

    // mobile: use touchstart to navigate faster
    a.addEventListener('touchstart', (e) => {
      // allow gesture interrupts
      window.location.href = a.href;
    }, { passive: true });

    // prefetch on hover to warm the browser cache
    a.addEventListener('mouseenter', () => {
      const href = a.href;
      if (!href) return;
      // avoid creating duplicate prefetch links
      if (document.querySelector(`link[rel="prefetch"][href="${href}"]`)) return;
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = href;
      link.as = 'document';
      document.head.appendChild(link);
    });
  });
});

// =================== AUTO-ADD PRODUCTS WHEN ENTERING CERTAIN CATEGORY PAGES ===================
// Behavior:
// - Only for configured category pages (mass, bcaa, preworkout, fatburner, diet, phukien, sale)
// - Adds up to AUTO_ADD_LIMIT in-stock products (qty 1 each)
// - Runs only once per browser session per page (uses sessionStorage)
// - Shows a temporary toast notification summarizing the action
const AUTO_ADD_CATEGORIES = ['Mass Gainer', 'BCAA', 'Pre-Workout', 'Fat Burner', 'Diet Food', 'Phụ Kiện', 'Sản Phẩm Thanh Lý'];
let AUTO_ADD_LIMIT = 6; // default; can be overridden by localStorage or per-page setting
const AUTO_ADD_GLOBAL_KEY = 'autoAddEnabled'; // localStorage key for global enable ("1" or "0")
const AUTO_ADD_LIMIT_GLOBAL_KEY = 'autoAddLimit'; // localStorage key for global limit (number)

function showToast(message, timeout = 3200) {
  // simple toast at top-right
  const id = 'autoAddToast';
  let el = document.getElementById(id);
  if (el) el.remove();
  el = document.createElement('div');
  el.id = id;
  el.style.cssText = 'position:fixed;top:18px;right:18px;background:rgba(15,23,36,0.9);color:#fff;padding:10px 14px;border-radius:8px;z-index:9999;box-shadow:0 8px 22px rgba(2,6,23,0.28);font-weight:600;font-size:13px;';
  el.textContent = message;
  document.body.appendChild(el);
  setTimeout(() => { el.style.transition = 'opacity 220ms ease'; el.style.opacity = '0'; }, timeout - 220);
  setTimeout(() => el.remove(), timeout + 200);
}

document.addEventListener('DOMContentLoaded', () => {
  // mapping filename -> category name used in products array
  const pageToCategory = {
    'mass.html': 'Mass Gainer',
    'bcaa.html': 'BCAA',
    'preworkout.html': 'Pre-Workout',
    'fatburner.html': 'Fat Burner',
    'diet.html': 'Diet Food',
    'phukien.html': 'Phụ Kiện',
    'sale.html': 'Sản Phẩm Thanh Lý'
  };

  const filename = window.location.pathname.split('/').pop().toLowerCase();
  const category = pageToCategory[filename];
  if (!category || !AUTO_ADD_CATEGORIES.includes(category)) return;

  // helper: read per-page/global settings
  function isAutoAddEnabledForPage(fname) {
    try {
      const pageKey = `autoAddEnabled:${fname}`;
      const pageVal = localStorage.getItem(pageKey);
      if (pageVal !== null) return pageVal === '1';
      const globalVal = localStorage.getItem(AUTO_ADD_GLOBAL_KEY);
      if (globalVal !== null) return globalVal === '1';
      return false; // default disabled — auto-add will not run unless enabled explicitly
    } catch (e) { return false; }
  }

  function getAutoAddLimitForPage(fname) {
    try {
      const pageKey = `autoAddLimit:${fname}`;
      const pageVal = localStorage.getItem(pageKey);
      if (pageVal !== null) {
        const n = parseInt(pageVal, 10);
        if (!isNaN(n) && n > 0) return n;
      }
      const g = localStorage.getItem(AUTO_ADD_LIMIT_GLOBAL_KEY);
      if (g !== null) {
        const gn = parseInt(g, 10);
        if (!isNaN(gn) && gn > 0) return gn;
      }
      return AUTO_ADD_LIMIT;
    } catch (e) { return AUTO_ADD_LIMIT; }
  }

  // NOTE: The floating auto-add control was removed per user request. Settings still respected via localStorage keys.

  // core auto-add runner (can be triggered by UI or on-load)
  function runAutoAddForPage(fname, limit, forceRun = false) {
    const sessionKey = `autoAddDone:${fname}`;
    if (!forceRun && sessionStorage.getItem(sessionKey)) return;
    const pageCategory = pageToCategory[fname];
    const available = (products || []).filter(p => p.category === pageCategory && p.stock !== false);
    if (!available.length) return 0;
    const toAdd = available.slice(0, limit);
    toAdd.forEach(p => addToCart(p.id));
    sessionStorage.setItem(sessionKey, '1');
    updateCartUI();
    showToast(`${toAdd.length} sản phẩm '${pageCategory}' đã được thêm vào giỏ hàng`);
    return toAdd.length;
  }

  // expose test helper for debugging
  window.testAutoAdd = function() {
    try {
      const fname = filename;
      const enabled = isAutoAddEnabledForPage(fname);
      const limit = getAutoAddLimitForPage(fname);
      console.info('testAutoAdd', { fname, enabled, limit });
      return runAutoAddForPage(fname, limit, true);
    } catch (e) { console.error(e); }
  };

  // (panel removed) settings can still be controlled via localStorage keys directly

  // perform auto-add on load only if enabled
  if (!isAutoAddEnabledForPage(filename)) return;
  const limit = getAutoAddLimitForPage(filename);
  runAutoAddForPage(filename, limit, false);
});
