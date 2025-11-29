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
    description: "Whey Rule1 là sản phẩm whey protein cao cấp cho người cần tăng cơ nhanh và phục hồi sau tập. Công thức nhiều protein mỗi khẩu phần, ít đường và chất béo, phù hợp dùng trước hoặc sau buổi tập.",
    category: "Whey Protein",
    variants: ["Chocolate", "Vanilla", "Strawberry", "Banana", "Không mùi"]
  },
  {
    id: 7,
    title: "Whey Gold Standard 2,27kg",
    price: 2200000,
    oldPrice: 2300000,
    badge: "TẶNG QUÀ",
    stock: true,
    img: "../IMG/wheygold.png",
    description: "Whey Gold Standard (Optimum) là sản phẩm bán chạy, nổi tiếng về hương vị và độ tinh khiết. Hỗ trợ phát triển cơ bắp, phục hồi và bổ sung amino acids thiết yếu sau tập luyện.",
    category: "Whey Protein",
    variants: ["Vanilla", "Double Rich Chocolate", "Mocha", "Cookies & Cream", "Berries"]
  },
  {
    id: 8,
    title: "Whey Isolate Muscletech 1kg ",
    price: 4600000,
    oldPrice: 5800000,
    stock: false,
    img: "../IMG/iso whey.jpg",  
    description: "Whey Isolate Muscletech là dạng isolate tinh khiết, hấp thụ nhanh, lý tưởng cho người ăn kiêng hoặc cần bổ sung protein mà không nạp nhiều carbohydrate. Thích hợp dùng sau tập để tối ưu hóa phục hồi.",
    category: "Whey Protein",
    variants: ["Unflavored", "Vanilla Ice", "Chocolate Mint", "Salted Caramel"]
  },
  {
    id: 9,
    title: "Whey ASN 1kg",
    price: 749000,
    oldPrice:1899000,
    badge: "",
    stock: true,
    img: "../IMG/asnwhey.png",
    description: "Whey ASN cung cấp hàm lượng protein hợp lý với giá thành phải chăng. Thích hợp người mới tập và chủ động trong dinh dưỡng hàng ngày để tăng cơ và duy trì khối lượng nạc.",
    category: "Whey Protein",
    variants: ["Chocolate", "Strawberry", "Lychee", "Coconut"]
  },
  {
    id: 10,
    title: "Whey diesel Whey Isolate",
    price: 1500000,
    oldPrice:2000000,
    img: "/IMG/diesel.png",
    description: "Diesel Whey Isolate là lựa chọn isolate giá trị, giúp bổ sung protein nhanh, ít lactose. Hỗ trợ phục hồi sau tập và phù hợp với chế độ ăn low-carb.",
    category: "Whey Protein",
    variants: ["Chocolate", "Vanilla", "Mocha", "Không mùi"]
  },
  {
    id: 11,
    title: "Hydro Plantinum Whey 1.59kg",
    price: 1900000 ,
    stock: true,
    oldPrice:2000000,
    badge: "10%",
    img: "/IMG/hydro.png",
    description: "Hydro Platinum là whey thủy phân hỗ trợ hấp thụ rất nhanh, giảm cảm giác nặng bụng. Thích hợp vận động viên cần phục hồi tối ưu giữa các buổi tập nặng.",
    category: "Whey Protein",
    variants: ["Unflavored", "Coconut", "Vanilla", "Lemon"]
  },
  {
    id: 12,
    title: "FA Whey Protein 2kg",
    price: 1099000,
    oldPrice: 1299000,
    badge: "-15%",
    stock: true,
    img: "/IMG/fawhey.png",
    description: "FA Whey Protein cung cấp protein chất lượng với hương vị dễ dùng, phù hợp cho người tập gym trung bình và người cần kiểm soát cân nặng.",
    category: "Whey Protein",
    variants: ["Vanilla", "Chocolate", "Caramel", "Cookies"]
  },
  {
    id: 13,
    title: "Rule1 Whey 1kg (Chocolate)",
    price: 1500000,
    oldPrice: 2000000,
    badge: "-25%",
    stock: true,
    img: "../IMG/rule1.png",
    description: "Rule1 Whey (1kg) hương chocolate cho vị ngon, dễ pha. Công thức cân bằng amino hỗ trợ phục hồi và tăng cơ hiệu quả khi dùng đều đặn.",
    category: "Whey Protein",
    variants: ["Chocolate", "Chocolate Fudge", "Double Chocolate"]
  },
  {
    id: 14,
    title: "Real ISO Whey 2kg",
    price: 1249000,
    badge: "TẶNG QUÀ",
    stock: true,
    img: "/IMG/realwhey.png",
    description: "Real ISO Whey là whey isolate đóng gói lớn, kinh tế cho người dùng thường xuyên. Ít béo, ít đường, phù hợp cho chu kỳ cắt mỡ hoặc giữ cơ.",
    category: "Whey Protein",
    variants: ["Unflavored", "Vanilla Bean", "Strawberry"]
  },
  {
    id: 15,
    title: "Natrubio Classic Whey 1.8kg",
    price: 749000,
    oldPrice: 899000,
    badge: "-17%",
    img: "/IMG/natrubio.png",
    description: "Natrubio Classic Whey phù hợp người muốn bổ sung protein hàng ngày với ngân sách thấp. Công thức cơ bản, dễ tiêu hóa.",
    stock: false,
    category: "Whey Protein", 
    variants: ["Vanilla", "Chocolate", "Hazelnut"]
  },
  {
    id: 16,
    title: "Whey Protein Powder 2kg",
    price: 650000,
    oldPrice: 799000,
    badge: "-13%",
    stock: false,
    img: "/IMG/powder.png",
    description: "Whey Protein Powder 2kg là lựa chọn số lượng lớn cho người tập đều, cung cấp protein chất lượng để hỗ trợ luyện tập và phục hồi.",
    category: "Whey Protein",
    variants: ["Unflavored", "Vanilla", "Chocolate"]
  },
  {
    id: 17,
    title: "Whey Zero 1.5kg",
    price: 649000,
    stock: true,
    img: "/IMG/hydrotech.png",
    description: "Whey Zero là sản phẩm hướng đến người cần ít carbohydrate, ít chất béo và cung cấp đạm tinh khiết cho phục hồi cơ bắp.",
    category: "Whey Protein",
    variants: ["Unflavored", "Cocoa", "Vanilla"]
  },
  
  {
    id: 2,
    title: "Best body Creatine Monohydrate ",
    price: 299000,
    oldPrice: 399000,
    badge: "-25%",
    stock: false,  
    img: "../IMG/bestbody.png",
    description: "Creatine Monohydrate hỗ trợ tăng sức mạnh và sức bền trong các bài tập nặng. Dễ dùng và được nhiều vận động viên tin tưởng.",
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
    description: "Creatine Micronized có kích thước hạt nhỏ giúp hòa tan tốt hơn và hấp thụ nhanh hơn. Hỗ trợ tăng công suất và phục hồi.",
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
    description: "Creatine Bandidi là creatine chất lượng, phù hợp người tập sức mạnh và muốn cải thiện hiệu suất luyện tập.",
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
    description: "Pure Creatine dạng bột tinh khiết, không mùi, dễ pha, thích hợp dùng hàng ngày để tăng khả năng tập luyện và phục hồi.",
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
    variants: [ "Strawberry", "Banana", "Không mùi"]
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
    title: "On BCAA 1000 viên",
    price: 650000,
    oldPrice: 850000,
    badge: "-24%",
    img: "../IMG/on.png",
    category: "BCAA",
  },
  {
    id: 4,
    title: "Abe Pre-Workout Energy 315g",
    price: 600000,
    oldPrice:900000,
    badge: "-33%",
    variants: ["Lemon", "Fruit Punch", "Watermelon"],
    img: "./../IMG/abe.png",
    category: "Pre-Workout",
  },
  {
    id: 5,
    title: " Vitamin Tổng Hợp Daily Multi Kirkland",
    price: 530000,
    oldPrice: 700000,
    badge: "-24%",
    img: "../IMG/kirk.jpg",
    category: "Vitamin",
  },
  {
    id: 6,
    title: "Serious Mass 5.4kg",
    price: 2290000,
    oldPrice: 2590000,
    badge: "-12%",
    stock: true,
    badge: "Tặng Quà",
    img: "../IMG/serious.png",
    category: "Mass Gainer",
  },
  // === Additional products added per request: 15 products for each category page (except Whey & Creatine)
  // BCAA (add 14 more to reach 15)
  {
    id: 38,
    title: "BCAA Xtend Original 500g",
    price: 1200000,
    variants: ["Fruit Punch", "Watermelon", "Blue Raspberry"],
    stock: true,
    img: "/IMG/xtend.png",
    category: "BCAA",
  },
  {
    id: 39,
    title: "BCAA Hammer 60 viên",
    price: 950000,
    stock: true,
    img: "/IMG/hammer.jpg",
    category: "BCAA",
  },
  {
    id: 40,
    title: "BCAA Siberian Sports 60 viên",
    price: 500000,
    stock: true,
    img: "/IMG/siberian.png",
    category: "BCAA",
  },
  {
    id: 41,
    title: "BCAA Xpress Scitec Nutrition 700g",
    price: 700000,
    stock: false,
    img: "/IMG/xpress.jpg",
    category: "BCAA",
  },
  {
    id: 42,
    title: "Raze BCAA  450g",
    price: 659000,
    oldPrice: 799000,
    badge: "-18%",
    stock: true,
    variants: ["Fruit Punch", "Blue Raspberry", "Watermelon"],
    img: "/IMG/razebcaa.png",
    category: "BCAA",
  },
  {
    id: 43,
    title: "Mutant BCAA Recovery  500g",
    price: 699000,
    variants: ["Fruit Punch", "Blue Raspberry", "Mango"],
    stock: true,
    img: "/IMG/mutantbcaa.png",
    category: "BCAA",
  },
  {
    id: 44,
    title: "Applied Nutrition BCAA Lon 330ml",
    price: 72000,
    variants: ["Lemon"],
    stock: true,
    img: "/IMG/appliednutritionbcaa.png",
    category: "BCAA",
  },
  {
    id: 45,
    title: "BPI Sports BCAA 300g",
    price: 719000,
    oldPrice: 899000,
    badge: "-20%",
    variants: ["Fruit Punch", "Blue Raspberry", "Watermelon"],
    stock: true,
    img: "/IMG/bpi.jpg",
    category: "BCAA",
  },
  {
    id: 46,
    title: "N1Protein BCAA 190 servings",
    price: 749000,
    stock: false,
    img: "/IMG/n1.jpg",
    category: "BCAA",
  },
  {
    id: 47,
    title: "Biotech BCAA 400g",
    price: 619000,
    badge: "-Voucher 200k",
    variants: ["Fruit Punch", "Lemon Lime"],
    stock: true,
    img: "/IMG/biotechbcaa.jpg",
    category: "BCAA",
  },
  {
    id: 48,
    title: "Rule 1 BCAA Powder 300g",
    price: 589000,
    variants: ["Fruit Punch", "Blue Raspberry", "Watermelon"],
    stock: true,
    img: "/IMG/r1bcaa.png",
    category: "BCAA",
  },


  // Pre-Workout (add 14 more to reach 15)
  {
    id: 52,
    title: "Gold Standard Pre Workout 300g",
    price: 700000,
    oldPrice: 1000000,
    badge: "-30%",
    stock: true,
    img: "/IMG/optimum.png",
    variants: ["Fruit Punch", "Blueberry", "Watermelon"],
    category: "Pre-Workout",
  },
  {
    id: 53,
    title: "Nutricost Pre-Workout Complex 350g",
    price: 660000,
    stock: false,
    variants: ["Green Apple", "Fruit Punch", "Grape"],
    img: "/IMG/nutricost.png",
    category: "Pre-Workout",
  },
  {
    id: 54,
    title: "NO Storm Pre-Workout 200g",
    price: 750000,
    oldPrice: 900000,
    badge: "-17%",
    variants: ["Blue Raspberry", "Watermelon"],
    stock: true,
    img: "/IMG/no.png",
    category: "Pre-Workout",
  },
  {
    id: 55,
    title: "Raw Pump2 Pre-Workout 300g",
    price: 729000,
    oldPrice: 899000,
    badge: "-19%",
    stock: true,
    variants: ["Fruit Punch", "Lemon Lime"],
    img: "/IMG/rawpump.jpg",
    category: "Pre-Workout",
  },
  {
    id: 56,
    title: "Patch Pre-Workout 350g",
    price: 450000,
    oldPrice: 599000,
    badge: "-25%",
    variants: ["Blue Raspberry", "Tropical"],
    stock: true,
    img: "/IMG/tc.png",
    category: "Pre-Workout",
  },
  {
    id: 57,
    title: "Caffein Pre-Workout 300g",
    price: 359000,
    oldPrice: 499000,
    badge: "-28%",
    variants: ["Lemon", "Orange", "Grape"],
    stock: true,
    img: "/IMG/cf.png",
    category: "Pre-Workout",
  },
  {
    id: 58,
    title: "Evogen Pre-Workout 320g",
    price: 1990000,
    oldPrice: 2490000,
    badge: "-20%",
    stock: true,
    variants: ["Fruit Punch", "Watermelon"],
    img: "/IMG/evogenpre.png",
    category: "Pre-Workout",
  },
  {
    id: 59,
    title: "Total War Pre-Workout 300g",
    price: 899000,
    stock: false,
    img: "/IMG/totalwar.png",
    category: "Pre-Workout",
  },
  {
    id: 60,
    title: "Power Pump BioX Pre-Workout 350g",
    price: 1200000,
    oldPrice: 1500000,
    badge: "-20%",
    stock: true,
    variants: ["Fruit Punch", "Blue Raspberry"],
    img: "/IMG/powerpump.png",
    category: "Pre-Workout",
  },
  {
    id: 61,
    title: "Abe Pump Pre-Workout Xtreme 400g",
    price: 559000,
    variants: ["Lemon", "Fruit Punch", "Watermelon"],
    stock: true,
    img: "/IMG/nonstim.jpg",
    category: "Pre-Workout",
  },
  {
    id: 62,
    title: "EVL ENGN Pre-Workout Amino Blend 300g",
    price: 600000,
    variants: ["Fruit Punch", "Blue Raspberry"],
    stock: true,
    img: "/IMG/evl.jpg",
    category: "Pre-Workout",
  },
  {
    id: 63,
    title: "Nutrabio Pre-Workout",
    price: 670000,
    oldPrice: 799000,
    badge:"Voucher 50K",
    variants: ["Fruit Punch", "Blue Raspberry", "Grape"],
    stock: true,
    img: "/IMG/nutrabio.png",
    category: "Pre-Workout",
  },
  {
    id: 64,
    title: "Bulk Black Pre-Workout  300g",
    price: 729000,
    oldPrice: 899000,
    badge: "-19%",
    variants: ["Fruit Punch", "Lemon Lime"],
    stock: true,
    img: "/IMG/bulkblack.png",
    category: "Pre-Workout",
  },
  {
    id: 65,
    title: "Sport Pre-Workout 300g",
    price: 309900,
    variants: ["Blue Raspberry", "Fruit Punch"],
    stock: true,
    img: "/IMG/sport.png",
    category: "Pre-Workout",
  },

  // Vitamin (add 14 more to reach 15)
  {
    id: 66,
    title: "One A Day Vitamin 60 viên",
    price: 499000,
    oldPrice: 599000,
    badge: "-17%",
    stock: true,
    img: "/IMG/1day.png",
    category: "Vitamin",
  },
  {
    id: 67,
    title: "BioTech USA Viên 3 Trong 1 Ca D3 K2 90 viên",
    price: 500000,
    stock: true,
    img: "/IMG/biotechd3k2.jpg",
    category: "Vitamin",
  },
  {
    id: 68,
    title: "Vitamin tổng hợp Ostrovit Vit&Min Forte",
    price: 300000,
    oldPrice: 450000,
    stock: true,
    img: "/IMG/vitaminostrovic.jpg",
    category: "Vitamin",
  },
  {
    id: 69,
    title: "Applied Nutrition Vitamin D3 3000 IU 90 Viên",
    price: 400000,
    stock: false,
    img: "/IMG/vitamind3.jpg",
    category: "Vitamin",
  },
  {
    id: 70,
    title: "SR Vitamin D3+K2 60 viên",
    price: 790000,
    stock: true,
    img: "/IMG/srvitamin.png",
    category: "Vitamin",
  },
  {
    id: 71,
    title: "Viên uống Nutricost Vitamin K2 + D3 120 viên",
    price: 449000,
    stock: true,
    img: "/IMG/nutricost.jpg",
    category: "Vitamin",
  },
  {
    id: 72,
    title: "Now Vitamin D3 K2 120 viên",
    price: 319000,
    stock: true,
    img: "/IMG/now.png",
    category: "Vitamin",
  },
  {
    id: 73,
    title: "EVL Flexmode Advanced Joint Support - 90 viên",
    price: 390000,
    stock: false,
    img: "/IMG/evl.png",
    category: "Vitamin",
  },
  {
    id: 74,
    title: "Ostrovit Glucosamine + MSM + Chondroitin - 90 viên",
    price: 420000,
    stock: true,
    img: "/IMG/msm.png",
    category: "Vitamin",
  },
  {
    id: 75,
    title: "Nutrabolics Sleep Hack - 120 viên",
    price: 650000,
    oldPrice: 799000,
    badge: "-18%",
    stock: true,
    img: "/IMG/sleephack.png",
    category: "Vitamin",
  },
  {
    id: 76,
    title: "Now NAC 600mg - 250 viên",
    price: 750000,
    oldPrice: 899000,
    badge: "-16%",
    stock: true,
    img: "/IMG/nac.png",
    category: "Vitamin",
  },
  

  // Mass Gainer (add 14 more to reach 15)
  {
    id: 80,
    title: "Raze Mass 5kg",
    price: 1999000,
    oldPrice: 2299000,
    badge: "-13%",
    badge:"TẶNG QUÀ",
    stock: true,
    variants: ["Chocolate", "Vanilla", "Strawberry"],
    img: "/IMG/razemass.png",
    description: "Raze Mass cung cấp hàm lượng calo cao từ carbohydrate phức hợp và protein chất lượng để hỗ trợ tăng cân và phát triển cơ bắp hiệu quả.",
    category: "Mass Gainer",
  },
  {
    id: 81,
    title: "Mass Muscle Gainer 5.4kg",
    price: 1799000,
    oldPrice: 1999000,
    badge: "-10%",
    stock: true,
    description: "Mass Muscle Gainer cung cấp hàm lượng calo cao từ carbohydrate và protein chất lượng để hỗ trợ tăng cân và phát triển cơ bắp hiệu quả.",
    img: "/IMG/massmuscle.png",
    variants: ["Chocolate", "Vanilla"],
    category: "Mass Gainer",
  },
  {
    id: 82,
    title: "Labrada Mass Gainer 3kg",
    price: 1599000,
    oldPrice: 1799000,
    badge: "-11%",
    badge:"TẶNG QUÀ",
    stock: true,
    variants: ["Chocolate", "Vanilla", "Strawberry"],
    img: "/IMG/labrada.jpg",
    category: "Mass Gainer",
  },
  {
    id: 83,
    title: "Real Mass Gainer 3.5kg",
    price: 1499000,
    oldPrice: 1699000,
    badge: "-12%",
    variants: ["Chocolate", "Vanilla", "Strawberry"],
    stock: true,
    img: "/IMG/realmass.png",
    category: "Mass Gainer",
  },
  {
    id: 84,
    title: "Mutant Mass Gainer 6kg",
    price: 2000000,
    oldPrice: 2299000,
    badge: "-13%",
    stock: true,
    variants: ["Chocolate", "Vanilla"], 
    img: "/IMG/mutantmass.png",
    category: "Mass Gainer",
  },
  {
    id: 85,
    title: "usn anabolic mass gainer 5.5kg",
    price: 3490000,
    oldPrice: 3990000,
    badge: "-12%",
    badge:"TẶNG QUÀ",
    stock: true,
    variants: ["Chocolate", "Vanilla", "Banana"],
    img: "/IMG/usnanabolic.jpg",
    category: "Mass Gainer",
  },
  {
    id: 86,
    title: "Critical Mass Gainer 5.5kg",
    price: 2299000,
    oldPrice: 2599000,
    badge: "-11%",
    stock: true,
    img: "/IMG/criticalmass.jpg",
    variants: ["Chocolate", "Vanilla"],
    category: "Mass Gainer",
  },
  {
    id: 87,
    title: "Anabolic Mass Gainer High-Cal 4kg",
    price: 1899000,
    oldPrice: 2199000,
    badge: "-14%",
    stock: false,
    img: "/IMG/levronmass.png",
    variants: ["Chocolate", "Vanilla", "Strawberry"],
    category: "Mass Gainer",
  },
  {
    id: 88,
    title: "Rule 1 Mass Gainer Carb Stack 5.5kg",
    price: 1249000,
    oldPrice: 1499000,
    badge: "-17%",
    badge:"TẶNG QUÀ",
    stock: true,
    img: "/IMG/rule1mass.png",
    variants: ["Chocolate", "Vanilla"],
    category: "Mass Gainer",
  },
  {
    id: 89,
    title: "Solid Mass ",
    price: 1499000,
    oldPrice: 1799000,
    badge: "-16%",
    stock: true,
    variants: ["Chocolate", "Vanilla"],
    img: "/IMG/solidmass.png",
    category: "Mass Gainer",
  },
  {
    id: 90,
    title: "N Vegan Mass Gainer 6.8kg",
    price: 1199000,
    oldPrice: 1399000,
    badge: "-14%",
    stock: true,
    badge:"TẶNG QUÀ",
    img: "/IMG/nmass.jpeg",
    variants: ["Chocolate", "Vanilla"],
    category: "Mass Gainer",
  },
  {
    id: 91,
    title: "Evogen Mass Gainer  5.5kg",
    price: 2000000,
    oldPrice: 2299000,
    badge: "-13%",
    stock: false,
    variants: ["Chocolate", "Vanilla"],
    img: "/IMG/evogenmass.jpg",
    category: "Mass Gainer",
  },
  {
    id: 92,
    title: "Hyper Masss 6.7kg",
    price: 1599000,
    oldPrice: 1899000,
    badge: "-16%",
    
    stock: true,
    img: "/IMG/hypermass.png",
    category: "Mass Gainer",
  },
  {
    id: 93,
    title: "Premium Mass Gainer 6kg",
    price: 1299000,
    oldPrice: 1599000,
    badge: "-18%",
    stock: true,
    img: "/IMG/premiummass.png",
    vảriants: ["Chocolate", "Vanilla", "Strawberry"],
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
    title: "Applied Nutrition Green Tea Fat Burner 90 Fast-Acting Liquid Soft-Gels",
    price: 788000,
    stock: true,
    img: "/IMG/greentea.jpg",
    category: "Fat Burner",
  },
  {
    id: 100,
    title: "Super Fat Burner BiotechUSA 120 viên",
    price: 650000,
    stock: true,
    img: "/IMG/superfat.jpg",
    category: "Fat Burner",
  },
  {
    id: 101,
    title: "Carnitine VitaXtrong 3000 31 servings",
    price: 500000,
    stock: true,
    img: "/IMG/xtrong.jpg",
    category: "Fat Burner",
  },
  {
    id: 102,
    title: "L Carnitine 3000mg Liquid & Green Tea",
    price: 629000,
    stock: false,
    img: "/IMG/lcar.png",
    category: "Fat Burner",
  },
  {
    id: 103,
    title: "Ostrovit CLA + Green Tea + L-Carnitine 90 viên",
    price: 259000,
    stock: true,
    img: "/IMG/cla.png",
    category: "Fat Burner",
  },
  {
    id: 104,
    title: "BURN FX - 120 Viên",
    price: 699000,
    stock: true,
    img: "/IMG/fx.jpg",
    category: "Fat Burner",
  },
  {
    id: 105,
    title: "Ostrovit L Carnitine 125000 Liquid 500ml",
    price: 500000,
    stock: true,
    variants: ["Cherry", "Orange"],
    img: "/IMG/ostrovicdotmo.jpg",
    category: "Fat Burner",
  },
  {
    id: 106,
    title: "Ostrovit L-Carnitine 1250mg",
    price: 310000,
    stock: true,
    img: "/IMG/ostrovicl.png",
    category: "Fat Burner",
  },
  

  // Phụ Kiện (Accessories) - add 15
  {
    id: 114,
    title: "Đai lưng mềm Harbinger 5inch",
    price: 659000,
    stock: true,
    variants: ["size S", "size M", "size L", "size XL"],
    img: "/IMG/harbinger.png",
    category: "Phụ Kiện",
  },
  {
    id: 115,
    title: "Đai lưng mềm Harbinger 4inch",
    price: 449000,
    variants: ["size S", "size M", "size L", "size XL"],
    stock: true,
    img: "/IMG/acc2.png",
    category: "Phụ Kiện",
  },
  {
    id: 116,
    title: "Dây kéo lưng Lifting Strap YoungKH Whey ",
    price: 159000,
    stock: true,
    img: "/IMG/acc3.png",
    category: "Phụ Kiện",
  },
  {
    id: 117,
    title: "Đai lưng mềm YoungKH Whey 5inch",
    price: 229000,
    stock: true,
    img: "/IMG/acc4.png",
    category: "Phụ Kiện",
  },
  {
    id: 118,
    title: "Quấn Cổ Tay YoungKH Whey",
    price: 149000,
    stock: true,
    img: "/IMG/acc5.png",
    category: "Phụ Kiện",
  },
  {
    id: 119,
    title: "Shaker Powder 650ml",
    price: 79000,
    stock: true,
    img: "/IMG/acc6.png",
    category: "Phụ Kiện",
  },
  {
    id: 120,
    title: "Bình Shaker Ostrovit 2200ml",
    price: 169000,
    stock: true,
    img: "/IMG/acc7.png",
    category: "Phụ Kiện",
  },
  {
    id: 121,
    title: "Muscle Tech hũ đựng bột 200ml",
    price: 80000,
    stock: true,
    img: "/IMG/acc8.png",
    category: "Phụ Kiện",
  },
  {
    id: 122,
    title: "Túi Gymshark",
    price: 219000,
    stock: true,
    img: "/IMG/acc9.png",
    category: "Phụ Kiện",
  },
  

  // Sản Phẩm Thanh Lý (Sale / clearance) - add 15
  {
    id: 129,
    title: "VitaXtrong ISO PRO - Hydrolyzed Whey Isolate, 8 Lbs (3.60 Kg)",
    price: 299000,
    stock: false,
    img: "/IMG/sale1.png",
    category: "Sản Phẩm Thanh Lý",
  },
  {
    id: 130,
    title: "Labrada Iso Whey, 100% Whey Protein Isolate 5Lbs (2.3Kg)",
    price: 1890000,
    variants: ["Chocolate", "Vanilla", "Strawberry"],
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
    variants: ["Chocolate", "Vanilla", "Strawberry"],
    category: "Sản Phẩm Thanh Lý",
  },
  
];

// Fill missing product descriptions with category-based defaults
(function ensureProductDescriptions() {
  if (typeof products === 'undefined' || !Array.isArray(products)) return;
  const templates = {
    "Whey Protein": (p) => `${p.title} cung cấp protein chất lượng cao giúp phục hồi và phát triển cơ bắp sau buổi tập.`,
    "Creatine": (p) => `${p.title} hỗ trợ tăng sức mạnh, sức bền và cải thiện hiệu suất trong các bài tập nặng.`,
    "Mass Gainer": (p) => `${p.title} cung cấp năng lượng và dinh dưỡng để hỗ trợ tăng cân và xây dựng khối cơ.`,
    "Pre-Workout": (p) => `${p.title} giúp tăng năng lượng, tập trung và hiệu suất trong buổi tập.`,
    "BCAA": (p) => `${p.title} hỗ trợ phục hồi cơ bắp, giảm mệt mỏi và bổ sung amino acids cần thiết sau tập.`,
    "Vitamin": (p) => `${p.title} bổ sung vi chất thiết yếu, hỗ trợ sức khỏe tổng thể và hệ miễn dịch.`,
    "Diet Food": (p) => `${p.title} là lựa chọn dinh dưỡng hợp lý, phù hợp cho chế độ ăn kiêng và kiểm soát cân nặng.`,
    "Fat Burner": (p) => `${p.title} hỗ trợ tăng cường chuyển hóa và đốt mỡ khi kết hợp chế độ ăn và tập luyện.`,
    "Phụ Kiện": (p) => `${p.title} phụ kiện tiện dụng cho việc tập luyện và chăm sóc dụng cụ tập.`,
    "Sản Phẩm Thanh Lý": (p) => `${p.title} - sản phẩm thanh lý với ưu đãi giá tốt, kiểm tra mô tả chi tiết trước khi mua.`,
    default: (p) => `${p.title} sản phẩm chất lượng, phù hợp nhu cầu dinh dưỡng và luyện tập.`
  };

  products.forEach((p) => {
    if (!p || typeof p !== 'object') return;
    if (!p.description || String(p.description).trim() === '') {
      const fn = templates[p.category] || templates.default;
      try {
        p.description = fn(p);
      } catch (e) {
        p.description = templates.default(p);
      }
    }
  });
})();

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

// Site-wide flags (set to true to suppress the small 'added to cart' toast)
window.SUPPRESS_ADD_TO_CART_TOAST = true;

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
     li.classList.add('category-item');
    li.textContent = c;
    li.onclick = () => filterByCategory(c);
    categoryList.appendChild(li);
  });
}
renderCategories();
// notify other pages that products/categories are available (pages may listen for this)
try { window.dispatchEvent(new Event('productsLoaded')); } catch(e) {}
// Also ensure pages that register their listener after this script still get notified:
try {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function onReady(){
      try { window.dispatchEvent(new Event('productsLoaded')); } catch(e) {}
      document.removeEventListener('DOMContentLoaded', onReady);
    });
  } else {
    // If document already ready, re-dispatch asynchronously to allow late listeners to attach
    setTimeout(()=>{ try { window.dispatchEvent(new Event('productsLoaded')); } catch(e) {} }, 0);
  }
} catch(e) {}

// =================== CATEGORY PANEL (floating) ===================
function createCategoryPanel() {
  // avoid double-creating
  if (document.querySelector('.category-panel')) return;

  const panel = document.createElement('div');
  panel.className = 'category-panel';

      const closeBtn = document.createElement('button');
      closeBtn.classList.add('close-button');
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

  const displayCats = (window.panelCategories && Array.isArray(window.panelCategories) && window.panelCategories.length) ? window.panelCategories : categories;
  displayCats.forEach((c, i) => {
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
        // filter in-place then wait for render to populate the grid and scroll to it
        filterByCategory(c);
        // wait until #productGrid has children, then scroll into view
        (function waitAndScroll(tries){
          try {
            const el = document.getElementById('productGrid');
            if (el && el.children && el.children.length) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              return;
            }
          } catch(e) {}
          if ((tries||0) > 20) return; // give up after ~1s
          setTimeout(() => waitAndScroll((tries||0)+1), 50);
        })();
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
  // By default skip only index.html (empty) so the panel is available on homepage.
  const skipPages = ['index.html',''];
  // If we're on the homepage, show the full category panel (include all categories)
  if (current === '' || current === 'trangchu.html') {
    // previously we showed a compact 7-item list; user requested all categories be shown
    window.panelCategories = categories.slice();
  }
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
      // Render whey items using the same simple card layout as Diet Food
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
                ${p.oldPrice ? `<div class="old-price">${formatPrice(p.oldPrice)}</div>` : ''}
                <div class="price">${formatPrice(p.price)}</div>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }
  } catch (e) { console.error('bestSeller render error', e); }

  // Populate Creatine products into #bestCreatine (homepage)
  try {
    const cg = document.getElementById('bestCreatine');
    if (cg && typeof products !== 'undefined') {
      // Render creatine items using the same simple card layout as Diet Food
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
                ${p.oldPrice ? `<div class="old-price">${formatPrice(p.oldPrice)}</div>` : ''}
                <div class="price">${formatPrice(p.price)}</div>
              </div>
            </div>
          </div>
        `;
      }).join('');
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
    // attach product id so delegated handlers (wishlist) can find it
    try { card.setAttribute('data-id', String(p.id)); } catch(e) {}
    // decide whether to hide action buttons on homepage for certain categories
    const fname = (window.location.pathname.split('/').pop() || '').toLowerCase();
    const isHome = (fname === '' || fname === 'trangchu.html' || fname === 'index.html');
    const hideBtnsOnHomeCats = isHome && (p.category === 'Whey Protein' || p.category === 'Creatine');

    const actionsHtml = hideBtnsOnHomeCats ? '' : `
      <div class="card-media">
        ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
        <img src="${p.img}" alt="${p.title}">
        <div class="card-overlays">
          <button class="icon-circle" title="Yêu thích"><i class="fa-regular fa-heart"></i></button>
          <button class="icon-circle" title="So sánh"><i class="fa-solid fa-layer-group"></i></button>
        </div>
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

    card.innerHTML = hideBtnsOnHomeCats ? (
      `
      <div class="card-media">
        ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
        <img src="${p.img}" alt="${p.title}">
        <div class="card-overlays">
          <button class="icon-circle" title="Yêu thích"><i class="fa-regular fa-heart"></i></button>
          <button class="icon-circle" title="So sánh"><i class="fa-solid fa-layer-group"></i></button>
        </div>
      </div>
      <div class="card-body">
        <div class="title">${p.title}</div>
        <div class="meta">${p.category}</div>
        <div class="price-row">
          ${p.oldPrice ? `<div class="old-price">${formatPrice(p.oldPrice)}</div>` : ''}
          <div class="price">${formatPrice(p.price)}</div>
        </div>
        <div class="stock">${p.stock === false ? '<span class="out">Hết Hàng</span>' : '<span class="in">Còn Hàng</span>'}</div>
      </div>
      `
    ) : actionsHtml;
    // make the whole card act as a link to the product detail
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => viewProduct(p.id));
    // prevent clicks on internal buttons/links from triggering the card navigation
    // (so Add/Buy buttons still work)
    // We'll attach stopPropagation to any button or anchor inside the card.
    productGrid.appendChild(card);
    const innerControls = card.querySelectorAll('button, a');
    innerControls.forEach((el) => {
      el.addEventListener('click', (ev) => {
        // Allow delegated wishlist clicks on buttons with class 'icon-circle' to bubble
        try {
          if (el.classList && el.classList.contains && el.classList.contains('icon-circle')) {
            return; // don't stop propagation so document-level handler can catch it
          }
        } catch (e) {}
        ev.stopPropagation();
      });
    });
  });
  // After rendering all cards, ensure wishlist hearts reflect current wishlist
  try { updateCardWishlistMarks(); } catch(e) {}
}

// Mark heart icons on product cards according to localStorage wishlist
function updateCardWishlistMarks(){
  try{
    let wishlist = [];
    try { wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]'); } catch(e) { wishlist = []; }
    const ids = new Set((wishlist || []).map(i => Number(i.id)));
    document.querySelectorAll('.card').forEach(card => {
      const pid = parseInt(card.getAttribute('data-id'),10);
      const heartBtn = card.querySelector('.icon-circle[title="Yêu thích"]');
      if (!heartBtn) return;
      const heartIcon = heartBtn.querySelector('i');
      if (ids.has(pid)){
        if (heartIcon) { heartIcon.classList.remove('fa-regular'); heartIcon.classList.add('fa-solid'); }
        try { heartBtn.style.color = '#ff6b35'; } catch(e) {}
      } else {
        if (heartIcon) { heartIcon.classList.remove('fa-solid'); heartIcon.classList.add('fa-regular'); }
        try { heartBtn.style.color = ''; } catch(e) {}
      }
    });
  }catch(e){}
}

// Small wishlist preview panel (shows current wishlist items on any page)
function renderWishlistPreview(){
  try{
    // only render on pages that have a header (avoid during tests)
    const container = document.getElementById('wishlistPreviewPanel') || (function(){
      const el = document.createElement('div'); el.id = 'wishlistPreviewPanel';
      el.style.cssText = 'position:fixed;right:14px;bottom:14px;z-index:1200;background:rgba(255,255,255,0.98);border:1px solid #eee;padding:10px;border-radius:8px;box-shadow:0 6px 18px rgba(0,0,0,0.08);max-width:320px;max-height:360px;overflow:auto;font-family:inherit;font-size:13px';
      document.body.appendChild(el);
      return el;
    })();

    let wishlist = [];
    try { wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]'); } catch(e){ wishlist = []; }

    if (!wishlist || !wishlist.length) {
      container.innerHTML = `<div style="display:flex;gap:10px;align-items:center"><strong>Yêu thích (0)</strong><div style="margin-left:auto"><a href=\"yeuThich.html\">Mở</a></div></div><div style=\"color:#666;margin-top:8px\">Bạn chưa thêm sản phẩm yêu thích.</div>`;
      return;
    }

    const itemsHtml = wishlist.map(it => `
      <div style="display:flex;gap:10px;align-items:center;padding:8px 0;border-top:1px solid #f3f4f6">
        <img src="${it.img || ''}" style="width:48px;height:48px;object-fit:cover;border-radius:6px">
        <div style="flex:1">
          <div style="font-weight:600">${(it.title||'').slice(0,60)}</div>
          <div style="color:#888;font-size:12px;margin-top:4px">${formatPrice(it.price||0)}</div>
        </div>
      </div>
    `).join('');

    container.innerHTML = `<div style="display:flex;align-items:center;gap:8px"><strong>Yêu thích (${wishlist.length})</strong><div style="margin-left:auto"><a href=\"yeuThich.html\">Mở</a></div></div>${itemsHtml}`;
  }catch(e){ /* ignore */ }
}

// =================== KHỞI TẠO TRANG CHỦ ===================
const sortSelect = document.getElementById("sortSelect");
// Only treat this as the homepage sort control when we're actually on the homepage
const __currentFileName = (window.location.pathname.split('/').pop() || '').toLowerCase();
if (sortSelect && (__currentFileName === '' || __currentFileName === 'trangchu.html' || __currentFileName === 'index.html')) {
  // Exclude Whey Protein and Creatine from homepage product grid per user request
  const homepageProducts = products.filter(p => p.category !== 'Whey Protein' && p.category !== 'Creatine');
  renderProducts(homepageProducts);

  sortSelect.addEventListener("change", (e) => {
    const v = e.target.value;
    let arr = [...products];
    if (v === "price-asc") arr.sort((a, b) => a.price - b.price);
    if (v === "price-desc") arr.sort((a, b) => b.price - a.price);
    // keep homepage exclusion when sorting
    const filtered = arr.filter(p => p.category !== 'Whey Protein' && p.category !== 'Creatine');
    renderProducts(filtered);
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
// restore cart from localStorage if present
try { const _c = JSON.parse(localStorage.getItem('cart')||'[]'); if (Array.isArray(_c)) cart = _c; } catch(e) { cart = cart || []; }
let cartBtn = document.getElementById("cartBtn");
let cartPanel = document.getElementById("cartPanel");
let cartItemsEl = document.getElementById("cartItems");
let cartCountEl = document.getElementById("cartCount");
let cartTotalEl = document.getElementById("cartTotal");
// track which cart items are selected for checkout (keyed by index)
let cartSelections = {};

function addToCart(id, flavor, qty) {
  const p = products.find((x) => x.id === id);
  if (!p) return;
  // Prevent adding out-of-stock products
  if (p.stock === false) {
    if (typeof showToast === 'function') showToast('Sản phẩm đã hết hàng, không thể thêm vào giỏ');
    else alert('Sản phẩm đã hết hàng, không thể thêm vào giỏ');
    return;
  }
  // Treat same product with different flavor as separate cart line
  const keyFlavor = (flavor || '').toString();
  const qtyToAdd = Math.max(1, parseInt(qty, 10) || 1);
  const it = cart.find((i) => i.id === id && ((i.flavor || '') === keyFlavor));
  if (it) it.qty = (it.qty || 0) + qtyToAdd;
  else cart.push({ ...p, qty: qtyToAdd, flavor: keyFlavor || undefined });
  try { console.info('addToCart -> cart (after add):', JSON.parse(JSON.stringify(cart))); } catch(e) {}
  updateCartUI();
}

function updateCartUI() {
  // Re-query DOM elements in case script was loaded before DOM (ensures header updates on other pages)
  try {
    cartBtn = cartBtn || document.getElementById("cartBtn");
    cartPanel = cartPanel || document.getElementById("cartPanel");
    cartItemsEl = cartItemsEl || document.getElementById("cartItems");
    cartCountEl = cartCountEl || document.getElementById("cartCount");
    cartTotalEl = cartTotalEl || document.getElementById("cartTotal");
  } catch(e) { /* ignore */ }
  // Always update header badge if present
  try { console.info('updateCartUI pre-render cart:', JSON.parse(JSON.stringify(cart))); } catch(e) {}
  if (cartCountEl) {
    const totalQty = cart.reduce((sum, i) => sum + (i.qty || 0), 0);
    cartCountEl.textContent = totalQty;
  }

  // If the detailed cart panel isn't on this page, persist and stop here
  if (!cartItemsEl || !cartTotalEl) {
    try { localStorage.setItem('cart', JSON.stringify(cart)); } catch(e) {}
    try { console.info('updateCartUI persisted cart (no panel):', JSON.parse(JSON.stringify(cart))); } catch(e) {}
    return;
  }

  cartItemsEl.innerHTML = "";

  if (cart.length === 0) {
    cartItemsEl.innerHTML = `
      <div class="cart-empty" style="padding:24px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;min-height:200px">
        <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width:120px;height:120px;color:#cbd5e1;opacity:0.95;">
          <g fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 16v-6a1 1 0 0 0-.553-.894l-8-4a1 1 0 0 0-.894 0l-8 4A1 1 0 0 0 3 10v6a1 1 0 0 0 .553.894l8 4a1 1 0 0 0 .894 0l8-4A1 1 0 0 0 21 16z" />
            <path d="M7 8v8M17 8v8M7 8l5 3 5-3" />
          </g>
        </svg>
        <div style="text-align:center">
          <h4 style="margin:0 0 6px;color:#111827">Giỏ hàng đang trống</h4>
          <div style="color:#6b7280">Bạn chưa thêm sản phẩm nào vào giỏ.</div>
        </div>
        <button id="emptyBackBtn" class="btn-primary" style="padding:12px 20px;border-radius:30px;margin-top:6px">QUAY TRỞ LẠI CỬA HÀNG</button>
      </div>
    `;
    cartTotalEl.textContent = "0₫";
    // hide footer controls when empty
    if (cartPanel) {
      const foot = cartPanel.querySelector('.cart-foot'); if (foot) foot.style.display = 'none';
    }
    // attach event for CTA
    setTimeout(()=>{
      const btn = document.getElementById('emptyBackBtn');
      if (btn) btn.addEventListener('click', ()=>{ window.location.href = 'TrangChu.html'; });
    },20);
    // persist cart
    try { localStorage.setItem('cart', JSON.stringify(cart)); } catch(e){}
    return;
  }

  // ensure footer visible when there are items
  if (cartPanel) {
    const foot = cartPanel.querySelector('.cart-foot'); if (foot) foot.style.display = '';
  }

  cart.forEach((i, idx) => {
    const item = document.createElement("div");
    item.className = "cart-item";
    // checkbox for selecting this item for checkout
    const checkedAttr = cartSelections[idx] ? 'checked' : '';
    item.innerHTML = `
      <div style="display:flex;align-items:flex-start;gap:12px">
        <input type="checkbox" class="cart-select" data-idx="${idx}" ${checkedAttr} style="margin-top:6px">
        <img src="${i.img}">
        <div style="flex:1">
          <strong>${i.title}</strong>
          ${i.flavor ? `<div style="color:#555;font-size:13px;margin-top:4px">Mùi: ${i.flavor}</div>` : ''}
          <div style="color:#777">${formatPrice(i.price)} x ${i.qty}</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:6px">
          <button onclick="decreaseQtyAt(${idx})" class="btn-outline">-</button>
          <button onclick="increaseQtyAt(${idx})" class="btn-outline">+</button>
          <button onclick="removeItemAt(${idx})" class="btn-outline" style="color:#ff3b30">Xóa</button>
        </div>
      </div>
    `;
    cartItemsEl.appendChild(item);
  });
  // attach listeners for selection checkboxes
  setTimeout(()=>{
    document.querySelectorAll('.cart-select').forEach(cb => {
      // use onchange assignment so re-renders don't stack handlers
      cb.onchange = (e) => {
        const idx = parseInt(cb.getAttribute('data-idx'),10);
        if (cb.checked) cartSelections[idx] = true;
        else delete cartSelections[idx];
        // update UI immediately so total reflects selection
        try { updateCartUI(); } catch(err) { /* ignore */ }
      };
    });

    // add a Select All control in the cart footer (if present)
    try{
      if (cartPanel) {
        const foot = cartPanel.querySelector('.cart-foot');
        if (foot) {
          // create wrapper only once
          if (!foot.querySelector('#cartSelectAllWrap')) {
            const wrap = document.createElement('div');
            wrap.id = 'cartSelectAllWrap';
            wrap.style.display = 'flex';
            wrap.style.alignItems = 'center';
            wrap.style.gap = '8px';
            wrap.style.marginRight = '12px';
            wrap.innerHTML = `<label style="display:inline-flex;align-items:center;gap:8px;cursor:pointer"><input type="checkbox" id="cartSelectAll"> <span style="font-weight:700">Chọn tất cả</span></label>`;
            // insert at the start of footer so it appears left of total
            foot.insertBefore(wrap, foot.firstChild);
          }

          const selAll = foot.querySelector('#cartSelectAll');
          if (selAll) {
            // set initial checked state (all selected?)
            const totalItems = cart.length;
            const selectedCount = Object.keys(cartSelections).length;
            selAll.checked = totalItems > 0 && selectedCount === totalItems;

            selAll.onchange = (ev) => {
              if (ev.target.checked) {
                // select all current items
                cart.forEach((_, i) => { cartSelections[i] = true; });
              } else {
                // unselect all
                cartSelections = {};
              }
              // re-render to update checkboxes and total
              try { updateCartUI(); } catch(e){}
            };
          }
        }
      }
    }catch(e){ /* ignore */ }
  }, 10);
  // Show total only for selected items. Per user request, the total should
  // remain 0₫ until the user checks item(s). When panel is hidden, keep 0₫.
  try {
    const selectedIdxsNow = Array.from(document.querySelectorAll('.cart-select:checked')).map(cb => parseInt(cb.getAttribute('data-idx'),10)).filter(n => !isNaN(n));
    if (cartPanel && cartPanel.classList.contains('hidden')) {
      cartTotalEl.textContent = "0₫";
    } else if (selectedIdxsNow.length) {
      const selTotal = selectedIdxsNow.reduce((s, idx) => {
        const it = cart[idx];
        return s + (it ? (it.price * (it.qty || 1)) : 0);
      }, 0);
      cartTotalEl.textContent = formatPrice(selTotal);
    } else {
      cartTotalEl.textContent = "0₫";
    }

    // Enable/disable the checkout button: require at least one selected item
    let checkoutBtnEl = (cartPanel && cartPanel.querySelector) ? cartPanel.querySelector('#checkoutBtn') : document.getElementById('checkoutBtn');
    if (!checkoutBtnEl) checkoutBtnEl = document.getElementById('checkoutBtn');
    if (checkoutBtnEl) {
      // disable when panel hidden, when no selection, or when cart is empty
      if (cart.length === 0 || (cartPanel && cartPanel.classList.contains('hidden')) || selectedIdxsNow.length === 0) {
        checkoutBtnEl.disabled = true;
        checkoutBtnEl.classList.add('disabled');
        checkoutBtnEl.style.opacity = '0.65';
        checkoutBtnEl.style.cursor = 'not-allowed';
      } else {
        checkoutBtnEl.disabled = false;
        checkoutBtnEl.classList.remove('disabled');
        checkoutBtnEl.style.opacity = '';
        checkoutBtnEl.style.cursor = '';
      }
    }
  } catch (e) {
    cartTotalEl.textContent = "0₫";
  }
  // persist cart state
  try { localStorage.setItem('cart', JSON.stringify(cart)); } catch(e){}
}

// Ensure header/count updates after navigation or when DOM becomes ready
window.addEventListener('DOMContentLoaded', () => { try { if (typeof updateCartUI === 'function') updateCartUI(); } catch(e){} });
window.addEventListener('pageshow', () => { try { if (typeof updateCartUI === 'function') updateCartUI(); } catch(e){} });

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

// Row-index based quantity handlers – operate on the exact cart row rendered
function increaseQtyAt(index) {
  const it = cart[index];
  if (!it) return;
  const product = products.find(p => p.id === it.id);
  if (product && product.stock === false) {
    if (typeof showToast === 'function') showToast('Sản phẩm đã hết hàng, không thể tăng số lượng');
    else alert('Sản phẩm đã hết hàng, không thể tăng số lượng');
    return;
  }
  it.qty = (typeof it.qty === 'number' ? it.qty : parseInt(it.qty,10) || 1) + 1;
  updateCartUI();
}

function decreaseQtyAt(index) {
  const it = cart[index];
  if (!it) return;
  if ((typeof it.qty === 'number' ? it.qty : parseInt(it.qty,10) || 1) > 1) {
    it.qty = (typeof it.qty === 'number' ? it.qty : parseInt(it.qty,10) || 1) - 1;
  } else {
    // if would drop to 0, remove the row
    cart.splice(index, 1);
  }
  updateCartUI();
}

function removeItemAt(index) {
  if (index == null) return;
  cart.splice(index, 1);
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
      // Require the user to explicitly select items in the cart panel before checkout.
      const selectedIdxs = Array.from(document.querySelectorAll('.cart-select:checked')).map(cb => parseInt(cb.getAttribute('data-idx'),10)).filter(n => !isNaN(n));
      if (!selectedIdxs.length) {
        if (typeof showToast === 'function') showToast('Vui lòng chọn ít nhất 1 sản phẩm để thanh toán');
        else alert('Vui lòng chọn ít nhất 1 sản phẩm để thanh toán');
        return;
      }
      const itemsToCheckout = selectedIdxs.map(i => cart[i]).filter(Boolean);

      // Prevent checkout if any selected cart item is out-of-stock
      const hasOutOfStock = itemsToCheckout.some(ci => {
        const prod = products.find(p => p.id === ci.id);
        return prod && prod.stock === false;
      });
      if (hasOutOfStock) {
        if (typeof showToast === 'function') showToast('Có sản phẩm đã hết hàng trong phần chọn — vui lòng xóa trước khi thanh toán');
        else alert('Có sản phẩm đã hết hàng trong phần chọn — vui lòng xóa trước khi thanh toán');
        return;
      }

      try { localStorage.setItem('cart', JSON.stringify(cart)); } catch(e){}
      try {
        if (selectedIdxs.length) {
          // store selected items as quickBuy so checkout will show only them
          const qb = itemsToCheckout.map(it => ({ id: it.id, title: it.title, price: it.price, img: it.img, flavor: it.flavor, qty: it.qty }));
          sessionStorage.setItem('quickBuy', JSON.stringify(qb));
        } else {
          // no selection => clear any leftover quickBuy so checkout uses full cart
          sessionStorage.removeItem('quickBuy');
        }
      } catch(e) { /* ignore */ }

      // go to checkout page
      window.location.href = 'checkout.html';
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
  // match category robustly (case-insensitive, trimmed)
  const wanted = (category || '').toString().toLowerCase().trim();
  const filtered = products.filter((p) => ((p.category || '').toString().toLowerCase().trim()) === wanted);
  console.log('loadProductsByCategory:', category, 'found', filtered.length);
  renderProducts(filtered);
  // update any result count node on category pages
  try {
    const rc = document.getElementById('resultCount');
    if (rc) rc.textContent = `${filtered.length} Sản Phẩm`;
  } catch(e) {}
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

// =================== SEARCH AUTOCOMPLETE ===================
function initSearchAutocomplete() {
  const input = document.getElementById('searchInput');
  const btn = document.getElementById('searchBtn');
  if (!input) return;

  // find existing suggestions container (some pages use a UL#searchSuggestions with class 'suggestions')
  let box = document.getElementById('searchSuggestions');
  let inlineMode = false;
  if (box) {
    // If the page provided a UL (product-detail uses <ul id="searchSuggestions" class="hidden">), use inline mode
    const tag = (box.tagName || '').toLowerCase();
    if (tag === 'ul' || box.classList.contains('suggestions')) {
      inlineMode = true;
      box.classList.add('suggestions');
      box.setAttribute('role','listbox');
      // ensure it's a block element
      box.style.display = 'none';
    } else {
      // reuse existing element as fixed panel
      box.classList.add('search-suggestions');
      box.setAttribute('aria-hidden','true');
      box.style.position = 'fixed';
      box.style.zIndex = 1200;
    }
  } else {
    // create fixed suggestion box appended to body
    box = document.createElement('div');
    box.id = 'searchSuggestions';
    box.className = 'search-suggestions';
    box.setAttribute('aria-hidden','true');
    box.style.position = 'fixed';
    box.style.zIndex = 1200;
    document.body.appendChild(box);
  }

  // helper to position/size the suggestions
  function positionBox() {
    try {
      const rect = input.getBoundingClientRect();
      if (inlineMode) {
        // position relative to the .search container (assumed position:relative in CSS)
        const parent = input.closest('.search') || input.parentElement || document.body;
        const pRect = parent.getBoundingClientRect();
        const left = rect.left - pRect.left;
        const top = rect.top - pRect.top + rect.height + 8;
        box.style.left = Math.max(0, left) + 'px';
        box.style.top = top + 'px';
        box.style.width = Math.max(rect.width, 320) + 'px';
        box.style.position = 'absolute';
      } else {
        const headerEl = document.querySelector('.site-header') || document.querySelector('.header') || document.querySelector('header') || document.querySelector('.header-inner');
        const headerRect = headerEl ? headerEl.getBoundingClientRect() : null;
        const desiredWidth = Math.max(520, Math.min(920, rect.width || 720));
        const centerX = headerRect ? (headerRect.left + headerRect.width / 2) : (rect.left + rect.width / 2);
        const left = Math.round(centerX - desiredWidth / 2);
        const top = headerRect ? Math.round(headerRect.bottom + 8) : Math.round(rect.top + rect.height + 8);
        box.style.left = Math.max(8, left) + 'px';
        box.style.top = top + 'px';
        box.style.width = desiredWidth + 'px';
        box.style.position = 'fixed';
      }
    } catch(e) { /* ignore */ }
  }
  // keep positioned on resize/scroll
  window.addEventListener('resize', positionBox);
  window.addEventListener('scroll', positionBox, true);

  let items = [];
  let focused = -1;
  let debounceTimer = null;

  function render(list) {
    box.innerHTML = '';
    if (!list || !list.length) {
      if (inlineMode) box.classList.add('hidden'); else { box.style.display = 'none'; box.setAttribute('aria-hidden','true'); }
      return;
    }
    if (inlineMode) {
      box.classList.remove('hidden');
    } else {
      box.style.display = 'block';
      box.setAttribute('aria-hidden','false');
    }
    list.forEach((p, idx) => {
      if (inlineMode) {
        const li = document.createElement('li');
        li.className = 'suggest-item';
        li.tabIndex = 0;
        li.innerHTML = `<img src="${p.img||''}" alt="${(p.title||'').replace(/"/g,'')}"><div><div class="si-title">${p.title}</div><div class="si-price">${typeof p.price === 'number' ? formatPrice(p.price) : ''}</div></div>`;
        li.addEventListener('click', () => { viewProduct(p.id); });
        li.addEventListener('keydown', (ev) => { if (ev.key === 'Enter') viewProduct(p.id); });
        box.appendChild(li);
      } else {
        const el = document.createElement('div');
        el.className = 'suggest-item';
        el.tabIndex = 0;
        el.innerHTML = `
        <div class="si-img"><img src="${p.img||''}" alt="${(p.title||'').replace(/"/g,'')}" onerror="this.style.display='none'"></div>
        <div class="si-body">
          <div class="si-title">${p.title}</div>
          <div class="si-price">${typeof p.price === 'number' ? formatPrice(p.price) : ''}</div>
        </div>`;
        el.addEventListener('click', () => { viewProduct(p.id); });
        el.addEventListener('keydown', (ev) => { if (ev.key === 'Enter') viewProduct(p.id); });
        box.appendChild(el);
      }
    });
    items = Array.from(box.querySelectorAll('.suggest-item'));
    focused = -1;
    // ensure box is positioned correctly and scrolled to top for fresh results
    try { positionBox(); box.scrollTop = 0; } catch(e) {}
  }

  function doQuery(q) {
    const v = (q||'').toLowerCase().trim();
    if (!v) { render([]); return; }
    // basic contains match on title
    const list = (products || []).filter(p => (p.title||'').toLowerCase().includes(v)).slice(0,8);
    render(list);
  }

  input.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(()=> doQuery(input.value), 160);
  });

  // also trigger suggestions on focus (helps when typing immediate first character)
  input.addEventListener('focus', (e) => {
    // run a quick query for current value (may be empty)
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(()=> doQuery(input.value), 60);
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!items.length) return;
      focused = Math.min(items.length-1, focused+1);
      items.forEach((it,i)=> it.classList.toggle('focused', i===focused));
      items[focused]?.focus();
      return;
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!items.length) return;
      focused = Math.max(0, focused-1);
      items.forEach((it,i)=> it.classList.toggle('focused', i===focused));
      items[focused]?.focus();
      return;
    }
    if (e.key === 'Enter') {
      if (focused >= 0 && items[focused]) {
        items[focused].click();
        return;
      }
      // fallback: perform search navigation if button exists
      if (btn) btn.click();
    }
    if (e.key === 'Escape') {
      render([]);
    }
  });

  // hide when clicking outside
  document.addEventListener('click', (ev) => {
    if (ev.target === input || ev.target.closest('#searchSuggestions')) return;
    render([]);
  });

  // wire search button to navigate to search results (if implemented)
  if (btn) btn.addEventListener('click', (ev) => {
    const q = (input.value||'').trim();
    if (!q) return;
    // simplest behavior: try exact page with query param or call doSearchQuery if available
    if (typeof doSearchQuery === 'function') { doSearchQuery(q); return; }
    // fallback: build search results page (if exists)
    const href = `search.html?q=${encodeURIComponent(q)}`;
    window.location.href = href;
  });
}

// Initialize autocomplete after DOM + products are ready
document.addEventListener('DOMContentLoaded', () => { initSearchAutocomplete(); });

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

  // SECURITY / UX CHANGE: never auto-add on the 'sale.html' page automatically.
  // The sale page offers a manual "Thêm tất cả" control; users shouldn't be surprised
  // by products being added without explicit action. Respect per-page/localStorage
  // settings for other pages, but force-disable auto-run for the sale page.
  if (filename === 'sale.html') {
    // still expose the manual helper window.testAutoAdd(), but don't auto-run on load
    return;
  }

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
  // show auto-add toast unless globally suppressed
  if (!window.SUPPRESS_ADD_TO_CART_TOAST) {
    try { showToast(`${toAdd.length} sản phẩm '${pageCategory}' đã được thêm vào giỏ hàng`); } catch(e){}
  }
  return toAdd.length;
}

// =================== WISHLIST / YÊU THÍCH ===================
function addToWishlist(id, flavor) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  
  let wishlist = [];
  try {
    wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
  } catch (e) {
    wishlist = [];
  }
  
  const keyFlavor = (flavor || '').toString();
  const exists = wishlist.find(item => item.id === id && (item.flavor || '') === keyFlavor);
  
  if (exists) {
    showToast('Sản phẩm đã có trong danh sách yêu thích');
    return;
  }
  
  wishlist.push({ ...p, flavor: keyFlavor || undefined });
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  showToast(`${p.title} đã được thêm vào yêu thích`);
  // notify UI (header) and other pages
  try { updateWishlistUI(); } catch(e) {}
  try { forceUpdateWishlistBadges(); } catch(e) {}
  try { window.dispatchEvent(new CustomEvent('wishlistChanged', { detail: { added: p.id, flavor: keyFlavor } })); } catch(e) {}
  // Debug log when enabled
  try { if (localStorage.getItem('debugWishlist') === '1') console.debug('[wishlist] added', { id: p.id, title: p.title, flavor: keyFlavor, count: wishlist.length }); } catch(e) {}
}

function removeFromWishlist(id, flavor) {
  let wishlist = [];
  try {
    wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
  } catch (e) {
    wishlist = [];
  }
  
  const keyFlavor = (flavor || '').toString();
  wishlist = wishlist.filter(item => !(item.id === id && (item.flavor || '') === keyFlavor));
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  try { updateWishlistUI(); } catch(e) {}
  try { forceUpdateWishlistBadges(); } catch(e) {}
  try { window.dispatchEvent(new CustomEvent('wishlistChanged', { detail: { removed: id, flavor: keyFlavor } })); } catch(e) {}
  // Debug log when enabled
  try { if (localStorage.getItem('debugWishlist') === '1') console.debug('[wishlist] removed', { id: id, flavor: keyFlavor, count: wishlist.length }); } catch(e) {}
}

// Ensure there is a visible wishlist button / badge in the header area.
function ensureWishlistButton() {
  try {
    if (document.getElementById('wishlistBtn')) return;
    // try common header containers where action icons live
    const container = document.querySelector('.right-block') || document.querySelector('.header-inner') || document.querySelector('header') || document.querySelector('.site-header') || document.body;
    if (!container) return;
    const a = document.createElement('a');
    a.href = 'yeuThich.html';
    a.id = 'wishlistBtn';
    a.className = 'cart icon-btn';
    a.title = 'Sản phẩm yêu thích';
    a.setAttribute('aria-label', 'Sản phẩm yêu thích: 0');
    a.innerHTML = `<i class="fa-regular fa-heart"></i><span id="wishlistCount">0</span>`;
    // append to container; prefer appending at the end so layout stays stable
    container.appendChild(a);
  } catch (e) { /* ignore */ }
}

function updateWishlistUI() {
  let wishlist = [];
  try {
    wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
  } catch (e) {
    wishlist = [];
  }
  
  // make sure header has a visible wishlist button / badge across pages
  ensureWishlistButton();
  const wishlistBtn = document.getElementById('wishlistBtn');
  // prefer the explicit #wishlistCount element if present
  let wishlistCountEl = document.getElementById('wishlistCount');
  if (!wishlistCountEl) wishlistCountEl = wishlistBtn?.querySelector('span');
  if (wishlistCountEl) {
    wishlistCountEl.textContent = wishlist.length > 0 ? wishlist.length : '0';
    // accessibility: expose aria-label for screen readers
    try { wishlistBtn.setAttribute('aria-label', `Sản phẩm yêu thích: ${wishlist.length}`); } catch(e){}
    // visual hint
    if (wishlist.length > 0) wishlistBtn.classList.add('has-wishlist'); else wishlistBtn.classList.remove('has-wishlist');
  }
}

// Call on page load
document.addEventListener('DOMContentLoaded', () => {
  updateWishlistUI();
});
// Also update on pageshow (back/forward cache) and when storage changes in other tabs
window.addEventListener('pageshow', () => { try { updateWishlistUI(); } catch(e) {} });
window.addEventListener('storage', (e) => { if (e.key === 'wishlist') try { updateWishlistUI(); } catch(e) {} });

// When wishlist changes in-page, update header immediately
window.addEventListener('wishlistChanged', (ev) => {
  try {
    updateWishlistUI();
    try { updateCardWishlistMarks(); } catch(e) {}
    // also update any page-scoped badge helper if present
    try { if (typeof updateWishlistBadge === 'function') updateWishlistBadge(); } catch(e) {}
    try { if (typeof pulseWishlistCount === 'function') pulseWishlistCount(); } catch(e) {}
    try { renderWishlistPreview(); } catch(e) {}
  } catch (e) { /* ignore */ }
});

// Robust sync: ensure wishlist badge displays correct count across pages
function syncWishlistBadgeOnce() {
  try {
    const raw = localStorage.getItem('wishlist') || '[]';
    const arr = JSON.parse(raw);
    const count = Array.isArray(arr) ? arr.length : 0;
    // update known id
    ensureWishlistButton();
    const byId = document.getElementById('wishlistCount');
    if (byId) byId.textContent = count > 0 ? count : '0';
    // update span inside wishlistBtn if present
    const btn = document.getElementById('wishlistBtn');
    const span = btn?.querySelector('span');
    if (span) span.textContent = count > 0 ? count : '0';
  } catch(e) { /* ignore parse errors */ }
}

// Start a lightweight polling fallback so pages that load scripts differently still show correct count
function startWishlistSync() {
  try {
    if (window._wishlistSyncInterval) return; // already running
    syncWishlistBadgeOnce();
    window._wishlistSyncInterval = setInterval(syncWishlistBadgeOnce, 1000);
    // stop when page unloads
    window.addEventListener('beforeunload', () => { try { clearInterval(window._wishlistSyncInterval); window._wishlistSyncInterval = null; } catch(e){} });
  } catch(e){}
}

// initialize sync on DOM ready
window.addEventListener('DOMContentLoaded', () => { try { startWishlistSync(); } catch(e){} });

// =================== WISHLIST CLICK HANDLER ===================
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.icon-circle[title="Yêu thích"]');
  if (!btn) return;
  
  // Find product card
  const card = btn.closest('.card');
  if (!card) return;
  
  const productId = parseInt(card.getAttribute('data-id'), 10);
  const p = products.find(x => x.id === productId);
  if (!p) return;
  
  // Check if product has variants
  if (p.variants && p.variants.length > 0) {
    // Show flavor selection
    const flavorSelect = prompt(`Chọn mùi cho ${p.title}:\n\n${p.variants.map((v, i) => `${i + 1}. ${v}`).join('\n')}\n\nNhập số tương ứng hoặc để trống:`, '1');
    if (flavorSelect === null) return; // cancelled
    const selectedIndex = parseInt(flavorSelect, 10) - 1;
    const flavor = selectedIndex >= 0 && selectedIndex < p.variants.length ? p.variants[selectedIndex] : '';
    addToWishlist(productId, flavor);
  } else {
    addToWishlist(productId);
  }
  
  // Update heart icon
  const heartIcon = btn.querySelector('i');
  if (heartIcon) {
    heartIcon.classList.remove('fa-regular');
    heartIcon.classList.add('fa-solid');
    btn.style.color = '#ff6b35';
  }
  
  e.preventDefault();
  e.stopPropagation();
});

// Extra: defensive listener to force-sync wishlist UI after any wishlist-like click
document.addEventListener('click', function _forceWishlistSyncAfterClick(e){
  try{
    const withinDebug = e.target.closest && e.target.closest('#debugWishlistPanel');
    if (withinDebug) return; // ignore clicks inside debug panel
    const isWishlistBtn = !!(e.target.closest && (e.target.closest('.icon-circle[title="Yêu thích"]') || e.target.closest('.wishlist-toggle') || e.target.closest('[data-wishlist-action]')));
    const isHeartIcon = e.target.classList && (e.target.classList.contains('fa-heart') || e.target.classList.contains('fa-regular') || e.target.classList.contains('fa-solid'));
    if (!isWishlistBtn && !isHeartIcon) return;

    // run a short delay to allow addToWishlist/removeFromWishlist to update localStorage
    setTimeout(()=>{
      try { if (typeof updateWishlistUI === 'function') updateWishlistUI(); } catch(e){}
      try { if (typeof forceUpdateWishlistBadges === 'function') forceUpdateWishlistBadges(); } catch(e){}
      try { if (typeof updateCardWishlistMarks === 'function') updateCardWishlistMarks(); } catch(e){}
      try { if (typeof renderWishlistPreview === 'function') renderWishlistPreview(); } catch(e){}
    }, 80);
  }catch(ex){ /* ignore */ }
});

// Ensure card hearts reflect wishlist on initial load
document.addEventListener('DOMContentLoaded', () => { try { updateCardWishlistMarks(); } catch(e) {} try { renderWishlistPreview(); } catch(e) {} });

// Ensure card overlay (heart/compare) is visible by injecting minimal styles
function ensureCardOverlayStyles(){
  try{
    if (document.getElementById('cardOverlayStyles')) return;
    const s = document.createElement('style');
    s.id = 'cardOverlayStyles';
    s.textContent = `
      .card{ position: relative; }
      .card-overlays{ position: absolute; top: 8px; right: 8px; display:flex; flex-direction:column; gap:6px; z-index:5 }
      .card-overlays .icon-circle{ background: rgba(255,255,255,0.98); border-radius:6px; padding:6px; border:1px solid rgba(0,0,0,0.06); cursor:pointer }
      .icon-circle i{ color: #444 }
      .icon-circle:hover{ transform: translateY(-1px); }
    `;
    document.head.appendChild(s);
  }catch(e){}
}

try { document.addEventListener('DOMContentLoaded', ensureCardOverlayStyles); } catch(e){}
// If the script is loaded after the document's ready event, make sure
// wishlist UI is initialized immediately (fix pages that include the
// script at the end of body so they miss DOMContentLoaded listeners).
try {
  if (document.readyState !== 'loading') {
    try { updateWishlistUI(); } catch(e) {}
    try { startWishlistSync(); } catch(e) {}
    try { window.dispatchEvent(new Event('wishlistChanged')); } catch(e){}
  }
} catch(e) { /* ignore */ }
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

// ---------------- SIMPLE ACCOUNT MODAL (delegated, reliable) -----------------
(function(){
  document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('acctBackdrop')) return;
    const tmpl = `
      <div class="acct-modal-backdrop" id="acctBackdrop">
        <div class="acct-modal" role="dialog" aria-modal="true">
          <button class="close-x" id="acctClose">✕</button>
          <h3>Tài khoản</h3>
          <div id="acctInner"></div>
        </div>
      </div>`;
    document.body.insertAdjacentHTML('beforeend', tmpl);
    const backdrop = document.getElementById('acctBackdrop');
    const acctInner = document.getElementById('acctInner');

    function escapeHtml(s){ return String(s).replace(/[&<>"']/g, c=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;" }[c])); }

    function renderAccountUI(){
      const user = JSON.parse(localStorage.getItem('siteUser') || 'null');
      if (user) {
        acctInner.innerHTML = `
          <div class="acct-logged">
            <div>
              <div class="who">Xin chào, ${escapeHtml(user.name || user.email)}</div>
              <div class="muted" style="font-size:13px">${escapeHtml(user.email)}</div>
            </div>
            <div>
              <button class="acct-logout">Đăng xuất</button>
            </div>
          </div>`;
        acctInner.querySelector('.acct-logout').addEventListener('click', ()=>{
          localStorage.removeItem('siteUser');
          if (typeof showToast === 'function') showToast('Đã đăng xuất');
          renderAccountUI();
          backdrop.classList.remove('open');
        });
        return;
      }

      acctInner.innerHTML = `
        <div class="acct-tabs">
          <button data-mode="login" class="active">ĐĂNG NHẬP</button>
          <button data-mode="register">ĐĂNG KÝ</button>
        </div>
        <div class="acct-form" id="acctFormWrap">
          <!-- Register fields (hidden for login mode) -->
          <label class="vis-label reg-only">First Name <span style="color:#ff3b30">*</span></label>
          <input type="text" id="acctFirstName" class="reg-only" placeholder="First Name">
          <label class="vis-label reg-only">Last Name <span style="color:#ff3b30">*</span></label>
          <input type="text" id="acctLastName" class="reg-only" placeholder="Last Name">

          <!-- Common fields -->
          <label class="vis-label login-label">Email Address <span style="color:#ff3b30">*</span></label>
          <input type="email" id="acctEmail" placeholder="Email Address *">
          <label class="vis-label login-label">Password <span style="color:#ff3b30">*</span></label>
          <input type="password" id="acctPass" placeholder="Password *">

          <!-- Confirm password for register -->
          <label class="vis-label reg-only">Confirm Password <span style="color:#ff3b30">*</span></label>
          <input type="password" id="acctPassConfirm" class="reg-only" placeholder="Confirm Password *">

          <div class="acct-row">
            <label class="acct-remember"><input type="checkbox" id="acctRemember"> Remember me</label>
            <div class="acct-forgot" id="acctForgot">Quên mật khẩu?</div>
          </div>
          <div class="acct-actions">
            <button id="acctSubmit" class="btn-primary">ĐĂNG NHẬP</button>
          </div>
          <div class="acct-footer">By providing your email address, you agree to our Privacy Policy and Terms of Service.</div>
        </div>`;

      const tabs = acctInner.querySelectorAll('.acct-tabs button');
      const submitBtn = document.getElementById('acctSubmit');
      tabs.forEach(t => t.addEventListener('click', ()=>{
        tabs.forEach(x=>x.classList.remove('active'));
        t.classList.add('active');
        submitBtn.textContent = t.dataset.mode === 'register' ? 'TẠO TÀI KHOẢN' : 'ĐĂNG NHẬP';
        // show/hide register-only fields
        const wrap = document.getElementById('acctFormWrap');
        const regOnly = wrap.querySelectorAll('.reg-only');
        if (t.dataset.mode === 'register') {
          regOnly.forEach(n=>n.style.display = 'block');
          // focus first name when switching to register
          setTimeout(()=> document.getElementById('acctFirstName')?.focus(), 80);
        } else {
          regOnly.forEach(n=>n.style.display = 'none');
          setTimeout(()=> document.getElementById('acctEmail')?.focus(), 80);
        }
      }));

      // initialize visibility according to active tab
      (function(){
        const active = acctInner.querySelector('.acct-tabs button.active');
        if (active && active.dataset.mode === 'register') {
          acctInner.querySelectorAll('.reg-only').forEach(n=>n.style.display='block');
        } else {
          acctInner.querySelectorAll('.reg-only').forEach(n=>n.style.display='none');
        }
      })();

      submitBtn.addEventListener('click', ()=>{
        const mode = acctInner.querySelector('.acct-tabs button.active').dataset.mode || 'login';
        const email = (document.getElementById('acctEmail').value || '').trim();
        const pass = (document.getElementById('acctPass').value || '').trim();
        if (mode === 'register') {
          const first = (document.getElementById('acctFirstName').value || '').trim();
          const last = (document.getElementById('acctLastName').value || '').trim();
          const confirm = (document.getElementById('acctPassConfirm').value || '').trim();
          if (!first || !last || !email || !pass || !confirm) { if (typeof showToast === 'function') showToast('Vui lòng điền đầy đủ thông tin đăng ký'); else alert('Vui lòng điền đầy đủ thông tin đăng ký'); return; }
          if (pass !== confirm) { if (typeof showToast === 'function') showToast('Mật khẩu xác nhận không khớp'); else alert('Mật khẩu xác nhận không khớp'); return; }
          const user = { email: email.toLowerCase(), name: (first + ' ' + last).trim(), firstName: first, lastName: last, password: pass };
          // store email normalized to lowercase to avoid case-sensitivity issues on login
          localStorage.setItem('siteUser', JSON.stringify(user));
          if (typeof showToast === 'function') showToast('Đăng ký thành công');
          renderAccountUI(); backdrop.classList.remove('open');
          return;
        }

        // login flow
        if (!email || !pass) { if (typeof showToast === 'function') showToast('Vui lòng nhập email và mật khẩu'); else alert('Vui lòng nhập email và mật khẩu'); return; }
        const stored = JSON.parse(localStorage.getItem('siteUser') || 'null');
        if (!stored) { if (typeof showToast === 'function') showToast('Tài khoản không tồn tại. Vui lòng đăng ký.'); else alert('Tài khoản không tồn tại. Vui lòng đăng ký.'); return; }
        // compare normalized emails and trimmed passwords
        const inputEmail = (email || '').toLowerCase();
        const inputPass = (pass || '');
        const storedEmail = (stored.email || '').toLowerCase();
        const storedPass = (stored.password || '');
        if (storedEmail === inputEmail && storedPass === inputPass) {
          if (typeof showToast === 'function') showToast('Đăng nhập thành công');
          renderAccountUI(); backdrop.classList.remove('open');
        } else {
          if (typeof showToast === 'function') showToast('Email hoặc mật khẩu không đúng'); else alert('Email hoặc mật khẩu không đúng');
        }
      });
    }

    // Delegated click: opens modal when an element with .icon-btn and user icon / label is clicked
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.icon-btn');
      if (!btn) return;
      const hasUserIcon = !!btn.querySelector('.fa-user, .fa-regular.fa-user, .fa-solid.fa-user');
      const hasLabel = (btn.textContent || '').toLowerCase().includes('tài khoản') || (btn.title || '').toLowerCase().includes('tài khoản');
      if (hasUserIcon || hasLabel) {
        e.preventDefault();
        renderAccountUI();
        backdrop.classList.add('open');
        setTimeout(()=> document.getElementById('acctEmail')?.focus(), 80);
      }
    });

    // close handlers
    document.getElementById('acctClose').addEventListener('click', ()=> backdrop.classList.remove('open'));
    backdrop.addEventListener('click', (e)=> { if (e.target === backdrop) backdrop.classList.remove('open'); });
  });
})();