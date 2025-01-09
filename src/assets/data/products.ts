

import category1 from '../images/shopByCategoryImage/1945947d9286b900c682a432b9f7e075.webp'
import category2 from '../images/shopByCategoryImage/32f802ba6e6509e599da0eba6ec0fd54.webp'
import category3 from '../images/shopByCategoryImage/4ac79c5fe4dd75c7bcd21c8eb320cb56.webp'
import category4 from '../images/shopByCategoryImage/f67863660713bbbb70e61f3af41805e2.webp'

import product1 from '../images/products/product1.png'
import product2 from '../images/products/product2.png'
import product3 from '../images/products/product3.png'
import product4 from '../images/products/product4.png'
export const data = [
    {
      id: 1,
      name_arabic: "إلكترونيات",
      name_english: "Electronics",
      photo_url: category1,
      show_home: true,
      photo: null,
      created_on: new Date("2024-01-01"),
      created_by: 101,
      updated_on: new Date("2024-02-01"),
      updated_by: 102,
      deleted_on: null,
      deleted_by: null,
      deleted: false,
    },
    {
      id: 2,
      name_arabic: "ملابس",
      name_english: "Clothing",
      photo_url: category2,
      show_home: true,
      photo: null,
      created_on: new Date("2024-01-10"),
      created_by: 103,
      updated_on: new Date("2024-02-15"),
      updated_by: 104,
      deleted_on: null,
      deleted_by: null,
      deleted: false,
    },
    {
      id: 3,
      name_arabic: "أثاث",
      name_english: "Furniture",
      photo_url: category3,
      show_home: true,
      photo: null,
      created_on: new Date("2024-01-15"),
      created_by: 105,
      updated_on: new Date("2024-03-01"),
      updated_by: 106,
      deleted_on: null,
      deleted_by: null,
      deleted: false,
    },
    {
      id: 4,
      name_arabic: "كتب",
      name_english: "Books",
      photo_url: category4,
      show_home: true,
      photo: null,
      created_on: new Date("2024-01-20"),
      created_by: 107,
      updated_on: new Date("2024-03-05"),
      updated_by: 108,
      deleted_on: null,
      deleted_by: null,
      deleted: false,
    },
    {
      id: 5,
      name_arabic: "ألعاب",
      name_english: "Toys",
      photo_url: category2,
      show_home: true,
      photo: null,
      created_on: new Date("2024-02-01"),
      created_by: 109,
      updated_on: new Date("2024-03-10"),
      updated_by: 110,
      deleted_on: null,
      deleted_by: null,
      deleted: false,
    },
    {
      id: 6,
      name_arabic: "طعام",
      name_english: "Food",
      photo_url: category3,
      show_home: true,
      photo: null,
      created_on: new Date("2024-02-10"),
      created_by: 111,
      updated_on: new Date("2024-03-15"),
      updated_by: 112,
      deleted_on: null,
      deleted_by: null,
      deleted: false,
    },
    {
      id: 7,
      name_arabic: "أجهزة منزلية",
      name_english: "Home Appliances",
      photo_url: category1,
      show_home: true,
      photo: null,
      created_on: new Date("2024-02-15"),
      created_by: 113,
      updated_on: new Date("2024-03-20"),
      updated_by: 114,
      deleted_on: null,
      deleted_by: null,
      deleted: false,
    },
    {
      id: 8,
      name_arabic: "أحذية",
      name_english: "Shoes",
      photo_url: category4,
      show_home: true,
      photo: null,
      created_on: new Date("2024-03-01"),
      created_by: 115,
      updated_on: new Date("2024-03-25"),
      updated_by: 116,
      deleted_on: null,
      deleted_by: null,
      deleted: false,
    },
    {
      id: 9,
      name_arabic: "إكسسوارات",
      name_english: "Accessories",
      photo_url: category2,
      show_home: true,
      photo: null,
      created_on: new Date("2024-03-05"),
      created_by: 117,
      updated_on: new Date("2024-04-01"),
      updated_by: 118,
      deleted_on: null,
      deleted_by: null,
      deleted: false,
    },
    {
      id: 10,
      name_arabic: "رياضة",
      name_english: "Sports",
      photo_url: category3,
      show_home: true,
      photo: null,
      created_on: new Date("2024-03-10"),
      created_by: 119,
      updated_on: new Date("2024-04-05"),
      updated_by: 120,
      deleted_on: null,
      deleted_by: null,
      deleted: false,
    },
  ];

  export const topSellerProducts=[
    {
      id: 1,
      brand_id: 101,
      name_arabic: "هاتف ذكي",
      name_english: "Smartphone",
      description_english: "A high-performance smartphone with a sleek",
      description_arabic: "هاتف ذكي عالي الأداء مع تصميم أنيق.",
      short_description_arabic: "هاتف ذكي رائع.",
      short_description_english: "Amazing smartphone.",
      price: 999.99,
      weight_kg: 0.2,
      length_cm: 15,
      width_cm: 7,
      height_cm: 0.8,
      sold_individually: false,
      allow_customer_reviews: true,
      tags: "electronics, smartphone, mobile",
      gender: 2,
      photos: [product1, product2],
      created_on: new Date("2024-01-01"),
      created_by: 1,
      updated_on: new Date("2024-02-01"),
      updated_by: 2,
      deleted_on: null,
      deleted_by: null,
      deleted: false,
    },
    {
      id: 2,
      brand_id: 102,
      name_arabic: "ساعة ذكية",
      name_english: "Smartwatch",
      description_english: "A smartwatch with fitness tracking and notifications.",
      description_arabic: "ساعة ذكية مع تتبع اللياقة والإشعارات.",
      short_description_arabic: "ساعة ذكية رائعة.",
      short_description_english: "Amazing smartwatch.",
      price: 299.99,
      weight_kg: 0.1,
      length_cm: 4,
      width_cm: 4,
      height_cm: 1,
      sold_individually: false,
      allow_customer_reviews: true,
      tags: "electronics, smartwatch, wearables",
      gender: 2,
      photos: [product3, product4],
      created_on: new Date("2024-01-02"),
      created_by: 3,
      updated_on: new Date("2024-02-02"),
      updated_by: 4,
      deleted_on: null,
      deleted_by: null,
      deleted: false,
    },
    {
      id: 3,
      brand_id: 103,
      name_arabic: "كمبيوتر محمول",
      name_english: "Laptop",
      description_english: "A lightweight laptop with powerful features.",
      description_arabic: "كمبيوتر محمول خفيف الوزن مع ميزات قوية.",
      short_description_arabic: "كمبيوتر محمول عالي الجودة.",
      short_description_english: "High-quality laptop.",
      price: 1299.99,
      weight_kg: 1.5,
      length_cm: 35,
      width_cm: 25,
      height_cm: 2,
      sold_individually: false,
      allow_customer_reviews: true,
      tags: "electronics, laptop, computer",
      gender: 2,
      photos: [product1, product4],
      created_on: new Date("2024-01-03"),
      created_by: 5,
      updated_on: new Date("2024-02-03"),
      updated_by: 6,
      deleted_on: null,
      deleted_by: null,
      deleted: false,
    },
    {
      id: 4,
      brand_id: 104,
      name_arabic: "كاميرا",
      name_english: "Camera",
      description_english: "A high-resolution digital camera for photography enthusiasts.",
      description_arabic: "كاميرا رقمية عالية الدقة لعشاق التصوير.",
      short_description_arabic: "كاميرا رقمية.",
      short_description_english: "Digital camera.",
      price: 499.99,
      weight_kg: 0.5,
      length_cm: 12,
      width_cm: 8,
      height_cm: 7,
      sold_individually: false,
      allow_customer_reviews: true,
      tags: "electronics, camera, photography",
      gender: 2,
      photos: [product4, product1],
      created_on: new Date("2024-01-04"),
      created_by: 7,
      updated_on: new Date("2024-02-04"),
      updated_by: 8,
      deleted_on: null,
      deleted_by: null,
      deleted: false,
    },
    {
      id: 5,
      brand_id: 105,
      name_arabic: "سماعات لاسلكية",
      name_english: "Wireless Headphones",
      description_english: "Noise-canceling wireless headphones for an immersive sound experience.",
      description_arabic: "سماعات لاسلكية مانعة للضوضاء لتجربة صوتية غامرة.",
      short_description_arabic: "سماعات لاسلكية.",
      short_description_english: "Wireless headphones.",
      price: 199.99,
      weight_kg: 0.3,
      length_cm: 20,
      width_cm: 18,
      height_cm: 5,
      sold_individually: false,
      allow_customer_reviews: true,
      tags: "electronics, headphones, audio",
      gender: 2,
      photos: [product2, product3],
      created_on: new Date("2024-01-05"),
      created_by: 9,
      updated_on: new Date("2024-02-05"),
      updated_by: 10,
      deleted_on: null,
      deleted_by: null,
      deleted: false,
    },
    {
      id: 6,
      brand_id: 106,
      name_arabic: "طابعة ليزر",
      name_english: "Laser Printer",
      description_english: "High-speed laser printer with wireless connectivity.",
      description_arabic: "طابعة ليزر عالية السرعة مع اتصال لاسلكي.",
      short_description_arabic: "طابعة ليزر متقدمة.",
      short_description_english: "Advanced laser printer.",
      price: 249.99,
      weight_kg: 7.5,
      length_cm: 40,
      width_cm: 30,
      height_cm: 20,
      sold_individually: false,
      allow_customer_reviews: true,
      tags: "electronics, printer, office",
      gender: 2,
      photos: [product1, product4],
      created_on: new Date("2024-01-06"),
      created_by: 11,
      updated_on: new Date("2024-02-06"),
      updated_by: 12,
      deleted_on: null,
      deleted_by: null,
      deleted: false,
    },
    {
      id: 7,
      brand_id: 107,
      name_arabic: "لوحة مفاتيح ميكانيكية",
      name_english: "Mechanical Keyboard",
      description_english: "Durable mechanical keyboard with customizable RGB lighting.",
      description_arabic: "لوحة مفاتيح ميكانيكية متينة بإضاءة RGB قابلة للتخصيص.",
      short_description_arabic: "لوحة مفاتيح ميكانيكية.",
      short_description_english: "Mechanical keyboard.",
      price: 89.99,
      weight_kg: 1.2,
      length_cm: 45,
      width_cm: 15,
      height_cm: 3,
      sold_individually: false,
      allow_customer_reviews: true,
      tags: "electronics, keyboard, peripherals",
      gender: 2,
      photos: [product3, product2],
      created_on: new Date("2024-01-07"),
      created_by: 13,
      updated_on: new Date("2024-02-07"),
      updated_by: 14,
      deleted_on: null,
      deleted_by: null,
      deleted: false,
    },
    {
      id: 8,
      brand_id: 108,
      name_arabic: "ماوس لاسلكي",
      name_english: "Wireless Mouse",
      description_english: "Ergonomic wireless mouse with adjustable DPI.",
      description_arabic: "ماوس لاسلكي مريح مع DPI قابل للتعديل.",
      short_description_arabic: "ماوس لاسلكي.",
      short_description_english: "Wireless mouse.",
      price: 39.99,
      weight_kg: 0.1,
      length_cm: 10,
      width_cm: 6,
      height_cm: 4,
      sold_individually: false,
      allow_customer_reviews: true,
      tags: "electronics, mouse, peripherals",
      gender: 2,
      photos: [product1, product4],
      created_on: new Date("2024-01-08"),
      created_by: 15,
      updated_on: new Date("2024-02-08"),
      updated_by: 16,
      deleted_on: null,
      deleted_by: null,
      deleted: false,
    },
    {
      id: 9,
      brand_id: 109,
      name_arabic: "شاشة ألعاب",
      name_english: "Gaming Monitor",
      description_english: "27-inch 4K UHD gaming monitor with 144Hz refresh rate.",
      description_arabic: "شاشة ألعاب مقاس 27 بوصة بدقة 4K UHD ومعدل تحديث 144Hz.",
      short_description_arabic: "شاشة ألعاب 4K.",
      short_description_english: "4K gaming monitor.",
      price: 499.99,
      weight_kg: 6.8,
      length_cm: 62,
      width_cm: 35,
      height_cm: 5,
      sold_individually: false,
      allow_customer_reviews: true,
      tags: "electronics, monitor, gaming",
      gender: 2,
      photos: [product1, product4],
      created_on: new Date("2024-01-09"),
      created_by: 17,
      updated_on: new Date("2024-02-09"),
      updated_by: 18,
      deleted_on: null,
      deleted_by: null,
      deleted: false,
    },
    {
      id: 10,
      brand_id: 110,
      name_arabic: "ميكروفون USB",
      name_english: "USB Microphone",
      description_english: "Professional USB microphone for streaming and recording.",
      description_arabic: "ميكروفون USB احترافي للبث والتسجيل.",
      short_description_arabic: "ميكروفون احترافي.",
      short_description_english: "Professional microphone.",
      price: 119.99,
      weight_kg: 0.7,
      length_cm: 20,
      width_cm: 5,
      height_cm: 5,
      sold_individually: false,
      allow_customer_reviews: true,
      tags: "electronics, microphone, audio",
      gender: 2,
      photos: [product4, product1],
      created_on: new Date("2024-01-10"),
      created_by: 19,
      updated_on: new Date("2024-02-10"),
      updated_by: 20,
      deleted_on: null,
      deleted_by: null,
      deleted: false,
    },
    {
      id: 11,
      brand_id: 111,
      name_arabic: "كرسي ألعاب",
      name_english: "Gaming Chair",
      description_english: "Comfortable gaming chair with adjustable lumbar support.",
      description_arabic: "كرسي ألعاب مريح مع دعم قطني قابل للتعديل.",
      short_description_arabic: "كرسي ألعاب فاخر.",
      short_description_english: "Luxury gaming chair.",
      price: 199.99,
      weight_kg: 15,
      length_cm: 80,
      width_cm: 65,
      height_cm: 120,
      sold_individually: false,
      allow_customer_reviews: true,
      tags: "furniture, gaming, chair",
      gender: 2,
      photos: [product2, product1],
      created_on: new Date("2024-01-11"),
      created_by: 21,
      updated_on: new Date("2024-02-11"),
      updated_by: 22,
      deleted_on: null,
      deleted_by: null,
      deleted: false,
    },
    {
      id: 12,
      brand_id: 112,
      name_arabic: "جهاز تحضير القهوة",
      name_english: "Coffee Maker",
      description_english: "A compact coffee maker for home and office use.",
      description_arabic: "جهاز صغير لتحضير القهوة للاستخدام المنزلي والمكتبي.",
      short_description_arabic: "ماكينة قهوة مدمجة.",
      short_description_english: "Compact coffee maker.",
      price: 79.99,
      weight_kg: 2.5,
      length_cm: 25,
      width_cm: 15,
      height_cm: 20,
      sold_individually: false,
      allow_customer_reviews: true,
      tags: "appliances, coffee, kitchen",
      gender: 2,
      photos: [product2, product1],
      created_on: new Date("2024-01-12"),
      created_by: 23,
      updated_on: new Date("2024-02-12"),
      updated_by: 24,
      deleted_on: null,
      deleted_by: null,
      deleted: false,
    },
    {
      id: 13,
      brand_id: 113,
      name_arabic: "مكنسة كهربائية",
      name_english: "Vacuum Cleaner",
      description_english: "High-power vacuum cleaner with multiple attachments.",
      description_arabic: "مكنسة كهربائية عالية الطاقة مع ملحقات متعددة.",
      short_description_arabic: "مكنسة كهربائية قوية.",
      short_description_english: "Powerful vacuum cleaner.",
      price: 149.99,
      weight_kg: 5,
      length_cm: 50,
      width_cm: 30,
      height_cm: 20,
      sold_individually: false,
      allow_customer_reviews: true,
      tags: "appliances, cleaning, home",
      gender: 2,
      photos: [product3, product2],
      created_on: new Date("2024-01-13"),
      created_by: 25,
      updated_on: new Date("2024-02-13"),
      updated_by: 26,
      deleted_on: null,
      deleted_by: null,
      deleted: false,
    },
    {
      id: 14,
      brand_id: 114,
      name_arabic: "مكبر صوت بلوتوث",
      name_english: "Bluetooth Speaker",
      description_english: "Portable Bluetooth speaker with high-quality sound.",
      description_arabic: "مكبر صوت بلوتوث محمول بجودة صوت عالية.",
      short_description_arabic: "سماعة بلوتوث.",
      short_description_english: "Bluetooth speaker.",
      price: 49.99,
      weight_kg: 0.8,
      length_cm: 10,
      width_cm: 10,
      height_cm: 15,
      sold_individually: false,
      allow_customer_reviews: true,
      tags: "electronics, speaker, audio",
      gender: 2,
      photos: [product4, product2],
      created_on: new Date("2024-01-14"),
      created_by: 27,
      updated_on: new Date("2024-02-14"),
      updated_by: 28,
      deleted_on: null,
      deleted_by: null,
      deleted: false,
    },
    {
      id: 15,
      brand_id: 115,
      name_arabic: "خلاط كهربائي",
      name_english: "Blender",
      description_english: "Multifunctional blender with durable blades.",
      description_arabic: "خلاط كهربائي متعدد الوظائف بشفرات متينة.",
      short_description_arabic: "خلاط كهربائي عملي.",
      short_description_english: "Practical blender.",
      price: 59.99,
      weight_kg: 3,
      length_cm: 20,
      width_cm: 20,
      height_cm: 40,
      sold_individually: false,
      allow_customer_reviews: true,
      tags: "appliances, kitchen, blender",
      gender: 2,
      photos: [product3, product4],
      created_on: new Date("2024-01-15"),
      created_by: 29,
      updated_on: new Date("2024-02-15"),
      updated_by: 30,
      deleted_on: null,
      deleted_by: null,
      deleted: false,
    },
    {
      id: 16,
      brand_id: 116,
      name_arabic: "مجفف شعر",
      name_english: "Hair Dryer",
      description_english: "Professional hair dryer with multiple heat settings.",
      description_arabic: "مجفف شعر احترافي بإعدادات حرارة متعددة.",
      short_description_arabic: "مجفف شعر احترافي.",
      short_description_english: "Professional hair dryer.",
      price: 39.99,
      weight_kg: 1.2,
      length_cm: 25,
      width_cm: 10,
      height_cm: 20,
      sold_individually: false,
      allow_customer_reviews: true,
      tags: "appliances, haircare, dryer",
      gender: 2,
      photos: [product2, product4],
      created_on: new Date("2024-01-16"),
      created_by: 31,
      updated_on: new Date("2024-02-16"),
      updated_by: 32,
      deleted_on: null,
      deleted_by: null,
      deleted: false,
    }
  ]

  export const highlightsProducts=[
    {
      id: 1,
      brand_id: 101,
      name_arabic: "هاتف ذكي",
      name_english: "Smartphone",
      description_english: "A high-performance smartphone with a sleek",
      description_arabic: "هاتف ذكي عالي الأداء مع تصميم أنيق.",
      short_description_arabic: "هاتف ذكي رائع.",
      short_description_english: "Amazing smartphone.",
      price: 999.99,
      weight_kg: 0.2,
      length_cm: 15,
      width_cm: 7,
      height_cm: 0.8,
      sold_individually: false,
      allow_customer_reviews: true,
      tags: "electronics, smartphone, mobile",
      gender: 2,
      photos: [product1, product2],
      created_on: new Date("2024-01-01"),
      created_by: 1,
      updated_on: new Date("2024-02-01"),
      updated_by: 2,
      deleted_on: null,
      deleted_by: null,
      deleted: false,
    },
    {
      id: 2,
      brand_id: 102,
      name_arabic: "ساعة ذكية",
      name_english: "Smartwatch",
      description_english: "A smartwatch with fitness tracking and notifications.",
      description_arabic: "ساعة ذكية مع تتبع اللياقة والإشعارات.",
      short_description_arabic: "ساعة ذكية رائعة.",
      short_description_english: "Amazing smartwatch.",
      price: 299.99,
      weight_kg: 0.1,
      length_cm: 4,
      width_cm: 4,
      height_cm: 1,
      sold_individually: false,
      allow_customer_reviews: true,
      tags: "electronics, smartwatch, wearables",
      gender: 2,
      photos: [product3, product4],
      created_on: new Date("2024-01-02"),
      created_by: 3,
      updated_on: new Date("2024-02-02"),
      updated_by: 4,
      deleted_on: null,
      deleted_by: null,
      deleted: false,
    },
    {
      id: 3,
      brand_id: 103,
      name_arabic: "كمبيوتر محمول",
      name_english: "Laptop",
      description_english: "A lightweight laptop with powerful features.",
      description_arabic: "كمبيوتر محمول خفيف الوزن مع ميزات قوية.",
      short_description_arabic: "كمبيوتر محمول عالي الجودة.",
      short_description_english: "High-quality laptop.",
      price: 1299.99,
      weight_kg: 1.5,
      length_cm: 35,
      width_cm: 25,
      height_cm: 2,
      sold_individually: false,
      allow_customer_reviews: true,
      tags: "electronics, laptop, computer",
      gender: 2,
      photos: [product1, product4],
      created_on: new Date("2024-01-03"),
      created_by: 5,
      updated_on: new Date("2024-02-03"),
      updated_by: 6,
      deleted_on: null,
      deleted_by: null,
      deleted: false,
    },
    {
      id: 4,
      brand_id: 104,
      name_arabic: "كاميرا",
      name_english: "Camera",
      description_english: "A high-resolution digital camera for photography enthusiasts.",
      description_arabic: "كاميرا رقمية عالية الدقة لعشاق التصوير.",
      short_description_arabic: "كاميرا رقمية.",
      short_description_english: "Digital camera.",
      price: 499.99,
      weight_kg: 0.5,
      length_cm: 12,
      width_cm: 8,
      height_cm: 7,
      sold_individually: false,
      allow_customer_reviews: true,
      tags: "electronics, camera, photography",
      gender: 2,
      photos: [product4, product1],
      created_on: new Date("2024-01-04"),
      created_by: 7,
      updated_on: new Date("2024-02-04"),
      updated_by: 8,
      deleted_on: null,
      deleted_by: null,
      deleted: false,
    },
    {
      id: 5,
      brand_id: 105,
      name_arabic: "سماعات لاسلكية",
      name_english: "Wireless Headphones",
      description_english: "Noise-canceling wireless headphones for an immersive sound experience.",
      description_arabic: "سماعات لاسلكية مانعة للضوضاء لتجربة صوتية غامرة.",
      short_description_arabic: "سماعات لاسلكية.",
      short_description_english: "Wireless headphones.",
      price: 199.99,
      weight_kg: 0.3,
      length_cm: 20,
      width_cm: 18,
      height_cm: 5,
      sold_individually: false,
      allow_customer_reviews: true,
      tags: "electronics, headphones, audio",
      gender: 2,
      photos: [product2, product3],
      created_on: new Date("2024-01-05"),
      created_by: 9,
      updated_on: new Date("2024-02-05"),
      updated_by: 10,
      deleted_on: null,
      deleted_by: null,
      deleted: false,
    },
    {
        id: 6,
        brand_id: 106,
        name_arabic: "طابعة ليزر",
        name_english: "Laser Printer",
        description_english: "High-speed laser printer with wireless connectivity.",
        description_arabic: "طابعة ليزر عالية السرعة مع اتصال لاسلكي.",
        short_description_arabic: "طابعة ليزر متقدمة.",
        short_description_english: "Advanced laser printer.",
        price: 249.99,
        weight_kg: 7.5,
        length_cm: 40,
        width_cm: 30,
        height_cm: 20,
        sold_individually: false,
        allow_customer_reviews: true,
        tags: "electronics, printer, office",
        gender: 2,
        photos: [product1, product4],
        created_on: new Date("2024-01-06"),
        created_by: 11,
        updated_on: new Date("2024-02-06"),
        updated_by: 12,
        deleted_on: null,
        deleted_by: null,
        deleted: false,
      },
      {
        id: 7,
        brand_id: 107,
        name_arabic: "لوحة مفاتيح ميكانيكية",
        name_english: "Mechanical Keyboard",
        description_english: "Durable mechanical keyboard with customizable RGB lighting.",
        description_arabic: "لوحة مفاتيح ميكانيكية متينة بإضاءة RGB قابلة للتخصيص.",
        short_description_arabic: "لوحة مفاتيح ميكانيكية.",
        short_description_english: "Mechanical keyboard.",
        price: 89.99,
        weight_kg: 1.2,
        length_cm: 45,
        width_cm: 15,
        height_cm: 3,
        sold_individually: false,
        allow_customer_reviews: true,
        tags: "electronics, keyboard, peripherals",
        gender: 2,
        photos: [product3, product2],
        created_on: new Date("2024-01-07"),
        created_by: 13,
        updated_on: new Date("2024-02-07"),
        updated_by: 14,
        deleted_on: null,
        deleted_by: null,
        deleted: false,
      },
      {
        id: 8,
        brand_id: 108,
        name_arabic: "ماوس لاسلكي",
        name_english: "Wireless Mouse",
        description_english: "Ergonomic wireless mouse with adjustable DPI.",
        description_arabic: "ماوس لاسلكي مريح مع DPI قابل للتعديل.",
        short_description_arabic: "ماوس لاسلكي.",
        short_description_english: "Wireless mouse.",
        price: 39.99,
        weight_kg: 0.1,
        length_cm: 10,
        width_cm: 6,
        height_cm: 4,
        sold_individually: false,
        allow_customer_reviews: true,
        tags: "electronics, mouse, peripherals",
        gender: 2,
        photos: [product1, product4],
        created_on: new Date("2024-01-08"),
        created_by: 15,
        updated_on: new Date("2024-02-08"),
        updated_by: 16,
        deleted_on: null,
        deleted_by: null,
        deleted: false,
      },
      {
        id: 9,
        brand_id: 109,
        name_arabic: "شاشة ألعاب",
        name_english: "Gaming Monitor",
        description_english: "27-inch 4K UHD gaming monitor with 144Hz refresh rate.",
        description_arabic: "شاشة ألعاب مقاس 27 بوصة بدقة 4K UHD ومعدل تحديث 144Hz.",
        short_description_arabic: "شاشة ألعاب 4K.",
        short_description_english: "4K gaming monitor.",
        price: 499.99,
        weight_kg: 6.8,
        length_cm: 62,
        width_cm: 35,
        height_cm: 5,
        sold_individually: false,
        allow_customer_reviews: true,
        tags: "electronics, monitor, gaming",
        gender: 2,
        photos: [product1, product4],
        created_on: new Date("2024-01-09"),
        created_by: 17,
        updated_on: new Date("2024-02-09"),
        updated_by: 18,
        deleted_on: null,
        deleted_by: null,
        deleted: false,
      },
      {
        id: 10,
        brand_id: 110,
        name_arabic: "ميكروفون USB",
        name_english: "USB Microphone",
        description_english: "Professional USB microphone for streaming and recording.",
        description_arabic: "ميكروفون USB احترافي للبث والتسجيل.",
        short_description_arabic: "ميكروفون احترافي.",
        short_description_english: "Professional microphone.",
        price: 119.99,
        weight_kg: 0.7,
        length_cm: 20,
        width_cm: 5,
        height_cm: 5,
        sold_individually: false,
        allow_customer_reviews: true,
        tags: "electronics, microphone, audio",
        gender: 2,
        photos: [product4, product1],
        created_on: new Date("2024-01-10"),
        created_by: 19,
        updated_on: new Date("2024-02-10"),
        updated_by: 20,
        deleted_on: null,
        deleted_by: null,
        deleted: false,
      }
  ];


  export const relatedProducts=[
    {
      id: 1,
      brand_id: 101,
      name_arabic: "هاتف ذكي",
      name_english: "Smartphone",
      description_english: "A high-performance smartphone with a sleek",
      description_arabic: "هاتف ذكي عالي الأداء مع تصميم أنيق.",
      short_description_arabic: "هاتف ذكي رائع.",
      short_description_english: "Amazing smartphone.",
      price: 999.99,
      weight_kg: 0.2,
      length_cm: 15,
      width_cm: 7,
      height_cm: 0.8,
      sold_individually: false,
      allow_customer_reviews: true,
      tags: "electronics, smartphone, mobile",
      gender: 2,
      photos: [product1, product2],
      created_on: new Date("2024-01-01"),
      created_by: 1,
      updated_on: new Date("2024-02-01"),
      updated_by: 2,
      deleted_on: null,
      deleted_by: null,
      deleted: false,
    },
    {
      id: 2,
      brand_id: 102,
      name_arabic: "ساعة ذكية",
      name_english: "Smartwatch",
      description_english: "A smartwatch with fitness tracking and notifications.",
      description_arabic: "ساعة ذكية مع تتبع اللياقة والإشعارات.",
      short_description_arabic: "ساعة ذكية رائعة.",
      short_description_english: "Amazing smartwatch.",
      price: 299.99,
      weight_kg: 0.1,
      length_cm: 4,
      width_cm: 4,
      height_cm: 1,
      sold_individually: false,
      allow_customer_reviews: true,
      tags: "electronics, smartwatch, wearables",
      gender: 2,
      photos: [product3, product4],
      created_on: new Date("2024-01-02"),
      created_by: 3,
      updated_on: new Date("2024-02-02"),
      updated_by: 4,
      deleted_on: null,
      deleted_by: null,
      deleted: false,
    },
    {
      id: 3,
      brand_id: 103,
      name_arabic: "كمبيوتر محمول",
      name_english: "Laptop",
      description_english: "A lightweight laptop with powerful features.",
      description_arabic: "كمبيوتر محمول خفيف الوزن مع ميزات قوية.",
      short_description_arabic: "كمبيوتر محمول عالي الجودة.",
      short_description_english: "High-quality laptop.",
      price: 1299.99,
      weight_kg: 1.5,
      length_cm: 35,
      width_cm: 25,
      height_cm: 2,
      sold_individually: false,
      allow_customer_reviews: true,
      tags: "electronics, laptop, computer",
      gender: 2,
      photos: [product1, product4],
      created_on: new Date("2024-01-03"),
      created_by: 5,
      updated_on: new Date("2024-02-03"),
      updated_by: 6,
      deleted_on: null,
      deleted_by: null,
      deleted: false,
    },
    {
      id: 4,
      brand_id: 104,
      name_arabic: "كاميرا",
      name_english: "Camera",
      description_english: "A high-resolution digital camera for photography enthusiasts.",
      description_arabic: "كاميرا رقمية عالية الدقة لعشاق التصوير.",
      short_description_arabic: "كاميرا رقمية.",
      short_description_english: "Digital camera.",
      price: 499.99,
      weight_kg: 0.5,
      length_cm: 12,
      width_cm: 8,
      height_cm: 7,
      sold_individually: false,
      allow_customer_reviews: true,
      tags: "electronics, camera, photography",
      gender: 2,
      photos: [product4, product1],
      created_on: new Date("2024-01-04"),
      created_by: 7,
      updated_on: new Date("2024-02-04"),
      updated_by: 8,
      deleted_on: null,
      deleted_by: null,
      deleted: false,
    },
  ]


  export const orders = [
    {
      id: 1,
      description: "Topicrem HYDRA + Rich Ultra Moisturizing Cream, 40ml",
      image: product1,
      number: 3,
      price: 150
    },
    {
      id: 2,
      description: "Cetaphil Gentle Skin Cleanser, 500ml",
      image: product2,
      number: 2,
      price: 200
    },
    {
      id: 3,
      description: "La Roche-Posay Toleriane Ultra Soothing Repair Moisturizer, 40ml",
      image: product3,
      number: 1,
      price: 250
    }
  ];