const crypto=require("crypto");
const products=[
 {name:"Ruby Zari Designer Blouse",category:"Designer Blouses",price:1499,image:"/assets/catalog-user-1.jpg",description:"Rich ruby-pink blouse with ornate zari embroidery and a statement festive finish.",stock:50,rating:4.9},
 {name:"Royal Blue Embroidered Blouse",category:"Embroidered Blouses",price:1299,image:"/assets/catalog-user-2.jpg",description:"Elegant royal-blue blouse with gold detailing for sarees and special occasions.",stock:50,rating:4.8},
 {name:"Blush Pink Party Blouse",category:"Party Wear Blouses",price:999,image:"/assets/catalog-user-3.jpg",description:"Soft blush-pink blouse with delicate embellishment for a refined party look.",stock:50,rating:4.7},
 {name:"Classic Wine Designer Blouse",category:"Saree Blouses",price:1399,image:"/assets/catalog-glowwear-1.jpg",description:"A classic deep-wine silhouette designed to pair beautifully with silk sarees.",stock:50,rating:4.8},
 {name:"Elegant Blue Gold Blouse",category:"Premium Blouses",price:1599,image:"/assets/catalog-glowwear-2.jpg",description:"Premium blue-and-gold styling with a polished boutique finish.",stock:50,rating:4.8},
 {name:"Modern Pink Statement Blouse",category:"Party Wear Blouses",price:1799,image:"/assets/catalog-glowwear-3.jpg",description:"A contemporary pink statement blouse with an elevated festive aesthetic.",stock:50,rating:4.9},
 {name:"Emerald Festive Blouse",category:"Designer Blouses",price:1699,image:"/assets/catalog-glowwear-4.jpg",description:"Rich emerald styling for weddings, celebrations and designer saree looks.",stock:50,rating:4.8},
 {name:"Ivory Embroidered Blouse",category:"Premium Blouses",price:1899,image:"/assets/catalog-glowwear-5.jpg",description:"Elegant ivory embroidery-inspired styling for premium occasions.",stock:50,rating:4.8}
].map((p,i)=>({_id:`demo-${i+1}`,createdAt:new Date(Date.now()-i*86400000),...p}));
function all(){return products}
function get(id){return products.find(p=>p._id===id)}
function add(p){const x={_id:crypto.randomUUID(),createdAt:new Date(),rating:4.7,stock:0,...p};products.push(x);return x}
function remove(id){const i=products.findIndex(p=>p._id===id);if(i<0)return false;products.splice(i,1);return true}
module.exports={all,get,add,remove};
