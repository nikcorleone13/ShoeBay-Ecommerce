import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Old Skool",
    brand: "Vans",
    price: "5600",
    type: "sneaker",
    img: [
      { _id: uuid(), img: 'https://images.vans.com/is/image/Vans/VN000D3H_Y28_ALT1?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0' },
      { _id: uuid(), img: 'https://images.vans.com/is/image/Vans/VN000D3H_Y28_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0' },
      { _id: uuid(), img: 'https://images.vans.com/is/image/Vans/VN000D3H_Y28_ALT2?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0' },
      { _id: uuid(), img: 'https://images.vans.com/is/image/Vans/VN000D3H_Y28_ALT3?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0' },
      {
        img: 'https://m.media-amazon.com/images/I/81I8fSOAXkL._AC_UX675_.jpg'
      }]
  },
  {
    _id: uuid(),
    name: "Originals Superstars",
    brand: "Adidas",
    price: "8899",
    type: "sneaker",
    img: [{ _id: uuid(), img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3d0933f855c445fea224aad600bac8b7_9366/SUPERSTAR_SHOES_White_EG4958_09_standard.jpg' },
    { _id: uuid(), img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/SUPERSTAR_SHOES_White_EG4958_01_standard.jpg' },
    { _id: uuid(), img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ff2e419f1eda4ebab23faad6009a3a9e_9366/SUPERSTAR_SHOES_White_EG4958_04_standard.jpg' },
    { _id: uuid(), img: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/31cf91f6e16c4f0aa11caad6009a4590_9366/SUPERSTAR_SHOES_White_EG4958_05_standard.jpg' },
    {
      _id: uuid(), img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a540f36ec2c446f198c0aad6009a620e_9366/SUPERSTAR_SHOES_White_EG4958_43_detail.jpg'
    }]
  },
  {
    _id: uuid(),
    name: "Yeezy Boost 350",
    brand: "Adidas",
    price: "22000",
    type: "sneaker",
    img: [
      { _id: uuid(), img: 'https://cdn.shopify.com/s/files/1/0015/6123/1434/products/AdidasYeezyBoost350V2Zebra_768x.png?v=1650495820' },
      { _id: uuid(), img: 'https://cdn.shopify.com/s/files/1/0015/6123/1434/products/AdidasYeezyBoost350V2Zebra_2_1440x.png?v=1650495820' },
      { _id: uuid(), img: 'https://cdn.shopify.com/s/files/1/0015/6123/1434/products/AdidasYeezyBoost350V2Zebra_4_768x.png?v=1650495820' },
      { _id: uuid(), img: 'https://cdn.shopify.com/s/files/1/0015/6123/1434/products/AdidasYeezyBoost350V2Zebra_5_768x.png?v=1650495820' },
      {
        _id: uuid(), img: 'https://cdn.fashdirect.com/webadmin/items/website/2631011/pi_quality_10_image_2_195214434238_7.jpg'
      }]
  },
  {
    _id: uuid(),
    name: "Air Max 90",
    brand: "Nike",
    price: "10975",
    type: "sneaker",
    img: [
      { _id: uuid(), img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/95866fe5-75ed-433e-bd16-601b50883dbe/air-max-90-shoes-kRsBnD.png' },
      { _id: uuid(), img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4676c27f-44c8-405f-a36c-606bd1e14584/air-max-90-shoes-kRsBnD.png' },
      { _id: uuid(), img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4913123f-2224-4f1e-a889-396237223d69/air-max-90-shoes-kRsBnD.png' },
      { _id: uuid(), img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1212b5f1-7642-41c7-acd9-07906090ead3/air-max-90-shoes-kRsBnD.png' },
      {
        _id: uuid(), img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/55648911-3f33-42f6-ba73-e4f41c9e8a26/air-max-90-shoes-kRsBnD.png'
      }]
  },
  {
    _id: uuid(),
    name: "Air Jordan 2 Retro Low Titan",
    brand: "Nike",
    price: "17247",
    type: "sneaker",
    img: [
      { _id: uuid(), img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/616cc9a9-dc24-47c3-b903-c94ca0a713d5/air-jordan-2-retro-low-titan-shoes-753NG3.png' },
      { _id: uuid(), img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fec7649b-7347-40ac-a897-edc21a66a83d/air-jordan-2-retro-low-titan-shoes-753NG3.png' },
      { _id: uuid(), img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/412105ec-98f2-46dc-b058-c72531461ba1/air-jordan-2-retro-low-titan-shoes-753NG3.png' },
      { _id: uuid(), img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e1dd9c80-b8c6-4077-9d4e-cbdde7301801/air-jordan-2-retro-low-titan-shoes-753NG3.png' },
      {
        _id: uuid(), img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/06ddd79a-fb54-49fb-851a-6b5f1a77fd2a/air-jordan-2-retro-low-titan-shoes-753NG3.png'
      }]
  },
  {
    _id: uuid(),
    name: "Deviate Nitro 2",
    brand: "Puma",
    price: "12759",
    type: "running",
    img: [
      { _id: uuid(), img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/377484/02/fnd/IND/fmt/png/Deviate-Nitro-2-Men's-Wide-Running-Shoes" },
      { _id: uuid(), img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1350,h_1350/global/377484/02/sv01/fnd/IND/fmt/png/Deviate-Nitro-2-Men's-Wide-Running-Shoes" },
      { _id: uuid(), img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/377484/02/dt01/fnd/IND/fmt/png/Deviate-Nitro-2-Men's-Wide-Running-Shoes" },
      { _id: uuid(), img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/377484/02/sv04/fnd/IND/fmt/png/Deviate-Nitro-2-Men's-Wide-Running-Shoes" },
      { _id: uuid(), img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/377484/02/sv02/fnd/IND/fmt/png/Deviate-Nitro-2-Men's-Wide-Running-Shoes" }
    ]
  },
  {
    _id: uuid(),
    name: "FuelCell SuperComp",
    brand: "New Balance",
    price: "16299",
    type: "running",
    img: [

      { _id: uuid(), img: 'https://nb.scene7.com/is/image/NB/mrcxlw2_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880' },
      { _id: uuid(), img: 'https://nb.scene7.com/is/image/NB/mrcxlw2_nb_04_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880' },
      { _id: uuid(), img: 'https://nb.scene7.com/is/image/NB/mrcxlw2_nb_06_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880' },
      { _id: uuid(), img: 'https://nb.scene7.com/is/image/NB/mrcxlw2_nb_05_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880' },
      { _id: uuid(), img: 'https://nb.scene7.com/is/image/NB/mrcxlw2_nb_03_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880' }
    ]
  },
  {
    _id: uuid(),
    name: "GO RUN SPEED FREEK",
    brand: "Skechers",
    price: "17999",
    type: "running",
    img: [

      { _id: uuid(), img: 'https://www.skechers.in/on/demandware.static/-/Sites-skechers_india/default/dw2f53942b/images/large/195204248805-1.jpg' },
      { _id: uuid(), img: 'https://www.skechers.in/on/demandware.static/-/Sites-skechers_india/default/dw8eff7ea3/images/large/195204248805-2.jpg' },
      { _id: uuid(), img: 'https://www.skechers.in/on/demandware.static/-/Sites-skechers_india/default/dw5d8b6031/images/large/195204248805-5.jpg' },
      { _id: uuid(), img: 'https://www.skechers.in/on/demandware.static/-/Sites-skechers_india/default/dwb6eaa9d0/images/large/195204248805-3.jpg' },
      { _id: uuid(), img: 'https://rukminim1.flixcart.com/image/832/832/kx50gi80/shoe/m/p/l/7-246006-8-skechers-bkrd-original-imag9nvegtzmftbm.jpeg?q=70' }
    ]
  },
  {
    _id: uuid(),
    name: "Pegasus Trail 4 GORE-TEX",
    brand: "Nike",
    price: "12995",
    type: "running",
    img: [

      { _id: uuid(), img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1163a010-7440-4b9c-9b5b-0dfbf691b237/pegasus-trail-4-gore-tex-waterproof-trail-running-shoes-pQ2Pzs.png' },
      { _id: uuid(), img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f5bf37de-8cd3-4ce4-9b37-93e63264e4e9/pegasus-trail-4-gore-tex-waterproof-trail-running-shoes-pQ2Pzs.png' },
      { _id: uuid(), img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/33443e3d-ff4b-415b-b226-5803b1db2c24/pegasus-trail-4-gore-tex-waterproof-trail-running-shoes-pQ2Pzs.png' },
      { _id: uuid(), img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d6354db9-41c7-4212-9d59-aeb68a033c1c/pegasus-trail-4-gore-tex-waterproof-trail-running-shoes-pQ2Pzs.png' },
      { _id: uuid(), img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ae18cb97-2bf1-4ed4-8748-5224b90e25b8/pegasus-trail-4-gore-tex-waterproof-trail-running-shoes-pQ2Pzs.png' }
    ]
  },
  {
    _id: uuid(),
    name: "Fresh Foam X Hierro v7 GTX",
    brand: "New Balance",
    price: "13995",
    type: "running",
    img: [

      { _id: uuid(), img: 'https://nb.scene7.com/is/image/NB/mthierx7_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880' },
      { _id: uuid(), img: 'https://nb.scene7.com/is/image/NB/mthierx7_nb_05_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880' },
      { _id: uuid(), img: 'https://nb.scene7.com/is/image/NB/mthierx7_nb_06_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880' },
      { _id: uuid(), img: 'https://nb.scene7.com/is/image/NB/mthierx7_nb_04_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880' },
      { _id: uuid(), img: 'https://nb.scene7.com/is/image/NB/mthierx7_nb_03_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880' }
    ]
  },
  {
    _id: uuid(),
    name: "Casual Sandal",
    brand: "Sparx",
    price: "700",
    type: "casual",
    img: [

      { _id: uuid(), img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/sandal/h/i/l/9-ss-101-black-43-sparx-original-imafvw97bfdjbzph-bb.jpeg?q=70' },
      { _id: uuid(), img: 'https://rukminim1.flixcart.com/image/128/128/xif0q/sandal/l/y/7/-original-imaghxfhjerkufyh.jpeg?q=70' },
      { _id: uuid(), img: 'https://rukminim1.flixcart.com/image/832/832/kfbfr0w0pkrrdj-0/sandal/p/g/5/9-ss-101-black-43-sparx-original-imafvw97xkzqm4h6.jpeg?q=70' },
      { _id: uuid(), img: 'https://rukminim1.flixcart.com/image/832/832/kfbfr0w0pkrrdj-0/sandal/j/h/1/9-ss-101-black-43-sparx-original-imafvw97sduhgbck.jpeg?q=70' },
      { _id: uuid(), img: 'https://rukminim1.flixcart.com/image/832/832/kfbfr0w0pkrrdj-0/sandal/u/r/p/9-ss-101-black-43-sparx-original-imafvw97rgzmvkgz.jpeg?q=70' }
    ]
  },
  {
    _id: uuid(),
    name: "Clogs Sandal",
    brand: "Crocs",
    price: "2500",
    type: "casual",
    img: [

      { _id: uuid(), img: 'https://rukminim1.flixcart.com/image/832/832/kg2l47k0-0/sandal/p/g/c/205089-4cc-crocs-navy-pepper-original-imafwe5hggsd5kzm.jpeg?q=70' },
      { _id: uuid(), img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/sandal/g/n/l/-original-imagf4fmyzmkcxcf-bb.jpeg?q=70' },
      { _id: uuid(), img: 'https://rukminim1.flixcart.com/image/832/832/kg2l47k0-0/sandal/o/t/c/205089-4cc-crocs-navy-pepper-original-imafwe5hegq72nah.jpeg?q=70' },
      { _id: uuid(), img: 'https://rukminim1.flixcart.com/image/832/832/kg2l47k0-0/sandal/l/z/m/205089-4cc-crocs-navy-pepper-original-imafwe5hrzhzgjnz.jpeg?q=70' },
      { _id: uuid(), img: 'https://rukminim1.flixcart.com/image/832/832/kg2l47k0-0/sandal/p/m/r/205089-4cc-crocs-navy-pepper-original-imafwe5hsxfkyehh.jpeg?q=70' }
    ]
  },
  {
    _id: uuid(),
    name: "SPONGEBOB RS SLIDE",
    brand: "Puma",
    price: "5599",
    type: "casual",
    img: [

      { _id: uuid(), img: 'https://images.vegnonveg.com/resized/700X573/9317/rs-slide-spongebob-vivid-violet-lucent-yellow-hero-blue-64390c82bb9ff.jpg' },
      { _id: uuid(), img: 'https://images.vegnonveg.com/resized/700X573/9317/rs-slide-spongebob-vivid-violet-lucent-yellow-hero-blue-64390c82a7260.jpg' },
      { _id: uuid(), img: 'https://images.vegnonveg.com/resized/700X573/9317/rs-slide-spongebob-vivid-violet-lucent-yellow-hero-blue-64390c824e71d.jpg' },
      { _id: uuid(), img: 'https://images.vegnonveg.com/resized/700X573/9317/rs-slide-spongebob-vivid-violet-lucent-yellow-hero-blue-64390c8285315.jpg' },
      { _id: uuid(), img: 'https://images.vegnonveg.com/resized/700X573/9317/rs-slide-spongebob-vivid-violet-lucent-yellow-hero-blue-64390c82928a9.jpg' }
    ]
  },
  {
    _id: uuid(),
    name: "Air Max 1 Slides",
    brand: "Nike",
    price: "6290",
    type: "casual",
    img: [

      { _id: uuid(), img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4a24b5b4-e9c8-4e6a-88b3-c36c442608d5/air-max-1-slides-TSMTS4.png' },
      { _id: uuid(), img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/721c5a41-1352-4f13-8840-3b10f1fa1718/air-max-1-slides-TSMTS4.png' },
      { _id: uuid(), img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/0d1cf122-a57f-41fa-8210-42652c06f32e/air-max-1-slides-TSMTS4.png' },
      { _id: uuid(), img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/0c024a76-c2e8-413d-8cd0-756bae357c0b/air-max-1-slides-TSMTS4.png' },
      { _id: uuid(), img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/424a93c6-35f8-4392-b850-e4586ac26811/air-max-1-slides-TSMTS4.png' }
    ]
  },

];
