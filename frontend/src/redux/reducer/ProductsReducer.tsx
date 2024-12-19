import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface ProductsState {
  value: number;
}

// Define the initial state using that type
const initialState: ProductsState = {
  value: 0,
  categoryDetails: [],
  currentCategory: "",
  currentProductId: null,
  // products: [],
  products: [
        {
            "_id": "6755b218a72c2e1d2df7c489",
            "name": "Methyl 2-Amino-4,6-dihydroxy Nicotinate",
            "category": "Pharmaceutical Chemical",
            "price": "400000",
            "minimumQuantity": 1,
            "specification": {
                "Packagining Size": "1 kg",
                "Packaging Type": "Can",
                "CAS No": "523992-26-9",
                "Chemical Name": "C7H8N2O4",
                "Physical State/Form": "Solid",
                "Grade": "Reagent Grade",
                "Country of Origin": "Made in India"
            },
            "description": "We can supply this product small as well as large quantitiy as per customers requirement. HPLC purity will be >98%",
            "additionalInformation": {
                "Production Capacity": "10 kg/month",
                "Delivery Time": "As per quantity",
                "Packaging Details": "Material packed in HDPE Can"
            },
            "images": [
                "https://res.cloudinary.com/dr5kay5i6/image/upload/v1733669399/iznnecw7ntnv0dfs9vq1.jpg"
            ],
            "__v": 0
        },
        {
            "_id": "67571ea2da2439302f9dcfb8",
            "name": "6-Chloro Uracil",
            "category": "Pharmaceutical Chemical",
            "price": "50000",
            "minimumQuantity": 1,
            "specification": {
                "Purity": "98%",
                "Packaging details": "As per customers requirement",
                "CAS No": "4270-27-3",
                "Grade": "Industrial",
                "Form": "Powder",
                "Appearance": "White to Off white solid",
                "Country of Origin": "Made in India"
            },
            "description": "We are manufacturing this product. We can supply this product as per customer requirements. \n\n",
            "images": [
                "https://res.cloudinary.com/dr5kay5i6/image/upload/v1733762719/owfpuoru2qvjqhfi2a9e.jpg",
                "https://res.cloudinary.com/dr5kay5i6/image/upload/v1733762720/lawsiog07iotwu139uhe.webp"
            ],
            "__v": 0
        },
        {
            "_id": "675721c5fcb87ad2b322514f",
            "name": "4-Acetyl-2-Methyl Benzonitrile",
            "category": "Pharmaceutical Chemical",
            "minimumQuantity": 1,
            "specification": {
                "Purity": ">98%",
                "Grade": "Reagent",
                "CAS No": "1138444-80-0",
                "Grade Standard": "Reagent Grade",
                "Packaging Size": "1 kg",
                "Physical Form": "Liquid",
                "Chemical Formula": "C10H9NO",
                "Molecular Weight": "159",
                "Country of Origin": "Made in India"
            },
            "description": "We can supply this product small as well as large quantity as per customers requirement. GC purity will be >95% \n\n",
            "additionalInformation": {
                "Production Capacity": "5 kg/month",
                "Delivery Time": "As per quantity",
                "Packaging Details": "Material packed in HDPE Can"
            },
            "images": [
                "https://res.cloudinary.com/dr5kay5i6/image/upload/v1733763524/a5uaxxbnugdwb7naxiqt.jpg"
            ],
            "__v": 0
        },
        {
            "_id": "67572c0bfcb87ad2b3225151",
            "name": "Ethyl-4-Chloro-3-Hydroxy-5-Nitrobenzoate",
            "category": "Pharmaceutical Chemical",
            "minimumQuantity": 1,
            "specification": {
                "Purity": "99%",
                "Grade Standard": "Lab Grade",
                "Form": "Powder",
                "Packaging Size": "1 kg",
                "Usage/Application": "Laboratory",
                "Country of Origin": "Made in India"
            },
            "description": "We are manufacturing this product and can supply as per customer requirements. Send your queries to this mai \n\n",
            "images": [
                "https://res.cloudinary.com/dr5kay5i6/image/upload/v1733766154/gtvfvucdsmzaz80jhd0i.png"
            ],
            "__v": 0
        },
        {
            "_id": "675730e0fcb87ad2b3225153",
            "name": "Tert-Butyl-4-Chloro-3-Hydroxy-5-Nitrobenzoate",
            "category": "Pharmaceutical Chemical",
            "price": "300000",
            "minimumQuantity": 1,
            "specification": {
                "Purity": "99%",
                "Usage/Application": "Pharmaceutical",
                "Physical State": "Powder",
                "Color": "Off white",
                "Packaging Type": "Loose",
                "Minimum Order Quantity": "1 kg",
                "Country of Origin": "Made in India"
            },
            "description": "We can supply this small as well as large quantities. More than 500 gm product in stock. Send your queries to this\n\n",
            "additionalInformation": {
                "Production Capacity": "10 kg/month",
                "Delivery Time": "As per quantity"
            },
            "images": [
                "https://res.cloudinary.com/dr5kay5i6/image/upload/v1733767389/ls9ancyopspnz7mh8dms.png",
                "https://res.cloudinary.com/dr5kay5i6/image/upload/v1733767391/vzuhqv5rikpeo7sdy7qk.jpg"
            ],
            "__v": 0
        },
        {
            "_id": "675732c2fcb87ad2b3225155",
            "name": "Barbituric Acid",
            "category": "Pharmaceutical Chemical",
            "price": "5000",
            "minimumQuantity": 1,
            "specification": {
                "Features": "White solid Purity = >98%",
                "Usage": "Industrial chemical",
                "Color": "White",
                "Minimum Order Quantity": "1 kg",
                "Country of Origin": "Made in India"
            },
            "description": "White soild, Purity = 99%, Quantity as per customer requirement. Send your queries to this mail id\n\n",
            "additionalInformation": {
                "Delivery Time": "As per quantity"
            },
            "images": [
                "https://res.cloudinary.com/dr5kay5i6/image/upload/v1733767868/cjyo3u6xfxy0zlzoqdca.png",
                "https://res.cloudinary.com/dr5kay5i6/image/upload/v1733767873/eppl06ecug5f5dsygqyd.png"
            ],
            "__v": 0
        },
        {
            "_id": "675734c2fcb87ad2b3225157",
            "name": "2-Chloro-6-Trifluoromethyl Nicotinic Acid",
            "category": "Pharmaceutical Chemical",
            "minimumQuantity": 1,
            "specification": {
                "Purity": "99%",
                "Grade": "Technical Grade",
                "Melting Point": "128-131 Degree C",
                "Chemical Formula": "C6H5NO2",
                "Molecular Weight": "122.13 g/mol",
                "Cas No": "280566-45-2",
                "color": "Off white solid",
                "Minimum Order Quantity": "1 kg",
                "Country of Origin": "Made in India"
            },
            "description": "We can supply this product as per customer requirements. Send your queries to this mail id, info@sinnchem.com\n\n",
            "additionalInformation": {
                "Delivery Time": "As per quantity"
            },
            "images": [
                "https://res.cloudinary.com/dr5kay5i6/image/upload/v1733768370/ihgvshvuvxylynnsyint.png",
                "https://res.cloudinary.com/dr5kay5i6/image/upload/v1733768385/avr2rtxhz3urprwfnao4.png"
            ],
            "__v": 0
        },
        {
            "_id": "6757370ffcb87ad2b3225159",
            "name": "Dimethyl 2-Methoxymalonate",
            "category": "Speciality Chemical",
            "minimumQuantity": 5,
            "specification": {
                "Purity": ">96%",
                "Grade": "Reagent Grade",
                "Usage/Application": "Industrial",
                "Packaging Type": "Bottle",
                "Physical State": "Liquid",
                "Cas No": "1830-54-2",
                "Grade Standard": "Industrial Grade",
                "Minimum Order Quantity": "5 kg",
                "Country of Origin": "Made in India"
            },
            "description": "We can supply this product as per customer requirements. Send your queries to this mail id, info@sinnchem.com\n\n",
            "additionalInformation": {
                "Production Capacity": "500 kg/month",
                "Delivery Time": "As per quantity",
                "Packaging Details": "Material packed in HDPE Can in 1 kg, 5 kg and 25 kg quantity"
            },
            "images": [
                "https://res.cloudinary.com/dr5kay5i6/image/upload/v1733768974/watvlp6luyodebq9xsoc.jpg"
            ],
            "__v": 0
        },
        {
            "_id": "67573898fcb87ad2b322515d",
            "name": "Dimethylacetone Dicarboxylate",
            "category": "Speciality Chemical",
            "price": "9000",
            "minimumQuantity": 1,
            "specification": {
                "Purity": "98%",
                "Grade": "Reagent Grade",
                "Usage/Application": "Industrial",
                "Packaging Details": "Material packed in HDPE Can",
                "Physical State": "Liquid",
                "Cas No": "1830-54-2",
                "Minimum Order Quantity": "1 kg",
                "Country of Origin": "Made in India"
            },
            "description": "We can supply small as well as large quantity, as per customers requirement. GC purity will be >98%\n\n",
            "additionalInformation": {
                "Delivery Time": "As per quantity",
                "Packaging Details": "Material packed in HDPE Can"
            },
            "images": [
                "https://res.cloudinary.com/dr5kay5i6/image/upload/v1733769367/liwhhqqcgvhphchszir4.jpg"
            ],
            "__v": 0
        },
        {
            "_id": "67573a0dfcb87ad2b322515f",
            "name": "N-Acetyl Thiazolidine-4-Carboxylic Acid",
            "category": "Plant Growth Regulator",
            "price": "3000",
            "minimumQuantity": 1,
            "specification": {
                "Purity": ">99%",
                "Grade": "Reagent Grade",
                "Grade Standard": "Industrial Grade",
                "Usage/Application": "Commercial",
                "Physical State": "Powder",
                "Cas No": "5025-82-1",
                "Minimum Order Quantity": "1 kg",
                "Country of Origin": "Made in India"
            },
            "description": "We are manufacturing N-Acetyl Thiazolidine-4-carboxylic acid(NATCA, Cas no 5025-82-1) in bulk quantities. It is detected NATCA, HPLC purity will be >99%. Made in India. Ready stocks. We can provide free samples to the customers. We can supply any quantity as per customer requirements.\n\n",
            "additionalInformation": {
                "Delivery Time": "As per quantity"
            },
            "images": [
                "https://res.cloudinary.com/dr5kay5i6/image/upload/v1733769732/txjjuaaltlbwz2ujom5z.jpg",
                "https://res.cloudinary.com/dr5kay5i6/image/upload/v1733769740/fdsjkfv5jaw6inja8e4z.png"
            ],
            "__v": 0
        },
        {
            "_id": "67573df8fcb87ad2b3225161",
            "name": "N-Acetyl Thiazolidine-4-Carboxylic Acid",
            "category": "Agriculture Herbicide",
            "minimumQuantity": 1,
            "specification": {
                "Form": "Powder",
                "Packaging Size": "As per customers requirement",
                "Grade Standard": "Chemical Grade",
                "Material": "Glass",
                "Cas Number": "72179-84-1",
                "Minimum Order Quantity": "1 kg",
                "Country of Origin": "Made in India"
            },
            "description": "We are manufacturing this product and can supply as per customer requirements. Since it is low melting solid, so we can give our customer clean NMR data.",
            "additionalInformation": {
                "Production Capacity": "5 kg/month",
                "Delivery Time": "As per quantity"
            },
            "images": [
                "https://res.cloudinary.com/dr5kay5i6/image/upload/v1733770730/uvhprtzgnit8aqi6l1at.png",
                "https://res.cloudinary.com/dr5kay5i6/image/upload/v1733770743/qzdlfy5qguebpzyd0bux.png"
            ],
            "__v": 0
        },
        {
            "_id": "675846ec4bee26a3d6cbe9fb",
            "name": "2,8-Dichloroquinoxaline",
            "category": "New Items",
            "specification": {
                "Purity": "98%",
                "Physical State": "Solid",
                "Grade": "Reagent Grade",
                "Cas Number": "120258-69-7",
                "Chemical Formula": "C8H4N2Cl2",
                "Country of Origin": "Made in India"
            },
            "description": "This chemical we are making in gm scale but we can supply as per customer requirement.",
            "additionalInformation": {
                "Delivery Time": "Depends of quantity"
            },
            "images": [
                "https://res.cloudinary.com/dr5kay5i6/image/upload/v1733838570/aapuclifm6lpicgswbqq.jpg"
            ],
            "__v": 0
        },
        {
            "_id": "675847dc4bee26a3d6cbe9fd",
            "name": "6-Bromo-3-Chloroisoquinoline",
            "category": "New Items",
            "price": "4000 /Gram",
            "specification": {
                "Purity": "98%",
                "Grade Standard": "LabGrade",
                "Cas Number": "552331-06-3",
                "Chemical Formula": "C9H5NBrCl",
                "Country of Origin": "Made in India"
            },
            "description": "This chemical we are making in gm scale but we can supply as per customer requirement.",
            "additionalInformation": {
                "Delivery Time": "Depends of quantity"
            },
            "images": [
                "https://res.cloudinary.com/dr5kay5i6/image/upload/v1733838810/e9khawjrtegbnqbyw0v3.jpg"
            ],
            "__v": 0
        },
        {
            "_id": "67584a894bee26a3d6cbea01",
            "name": "6-Bromo-3-Chloroisoquinoline",
            "category": "New Items",
            "specification": {
                "Purity": "95%",
                "Grade Standard": "Reagent Grade",
                "Cas Number": "1250999-05-3",
                "Grade": "Lab",
                "Usage/Application:": "R&D use",
                "Minimum Quantity": "1 gm",
                "Country of Origin": "Made in India"
            },
            "description": "This chemical we are making in gram scale but we can supply as per customer requirement.",
            "additionalInformation": {
                "Delivery Time": "Depends of quantity"
            },
            "images": [
                "https://res.cloudinary.com/dr5kay5i6/image/upload/v1733839495/yrzajv6nv6be2hy13j9n.jpg"
            ],
            "__v": 0
        },
        {
            "_id": "67584e9f4bee26a3d6cbea03",
            "name": "2,5-Dichloroquinoxaline",
            "category": "New Items",
            "price": "4000 /Gram",
            "specification": {
                "Purity": "98%",
                "Grade Standard": "Lab Grade",
                "Cas Number": "55687-05-3",
                "Usage/Application:": "Laboratory",
                "Packaging Details": "gram",
                "Chemical Formula": "C8H4N2Cl2",
                "Country of Origin": "Made in India"
            },
            "description": "This chemical we are making in gram scale but we can supply as per customer requirement.",
            "additionalInformation": {
                "Delivery Time": "Depends of quantity"
            },
            "images": [
                "https://res.cloudinary.com/dr5kay5i6/image/upload/v1733840541/xn3ncddr3etsz72kr8zl.jpg"
            ],
            "__v": 0
        },
        {
            "_id": "67584fc04bee26a3d6cbea05",
            "name": "3,6-Dichloro-2,7-Naphthyridine",
            "category": "New Items",
            "price": "30000 /Gram",
            "specification": {
                "Form": "Solid",
                "Grade Standard": "Reagent Grade",
                "Cas Number": "2313539-44-3",
                "Minimum Order": "1 gm",
                "Country of Origin": "Made in India"
            },
            "description": "This chemical we are making in gram scale but we can supply as per customer requirement.",
            "additionalInformation": {
                "Delivery Time": "Depends of quantity"
            },
            "images": [
                "https://res.cloudinary.com/dr5kay5i6/image/upload/v1733840830/zzigmtazd1ehy3ufxy2r.jpg"
            ],
            "__v": 0
        },
        {
            "_id": "675853784bee26a3d6cbea07",
            "name": "Methyl Acetimidate Hydrochloride",
            "category": "Pharmaceutical Chemical",
            "specification": {
                "Form": "Crystal",
                "Grade Standard": "Lab Grade",
                "Cas Number": "14777-27-6",
                "Color": "White",
                "Packaging Type": "Loose",
                "Country of Origin": "Made in India"
            },
            "description": "We can supply small as well as large quantity as per customer requirements. Send your queries to this mail id",
            "additionalInformation": {
                "Delivery Time": "Depends of quantity"
            },
            "images": [
                "https://res.cloudinary.com/dr5kay5i6/image/upload/v1733841782/c68d0kbronlqafjoduif.png"
            ],
            "__v": 0
        }
    ],
};

export const productsSlice = createSlice({
  name: "products", //a string name to identify the slice
  initialState, //an initial state value
  reducers: {
    //one or more reducer functions to define how the state can be updated.
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },

    updateCategoryDetails: (state, action)=>{
      state.categoryDetails = action.payload
    },
    updateProductIdAndCategory: (state, action)=>{
      state.currentCategory = action.payload.category
      state.currentProductId = action.payload.productId
    },
    addProducts: (state, action)=>{
      state.products = action.payload
    },
  },
});

//we can export the generated Redux action creators
//and the reducer function for the whole slice.

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, updateCategoryDetails, updateProductIdAndCategory, addProducts } =
  productsSlice.actions;

//exporting the reducer function
export default productsSlice.reducer;

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.products.value
