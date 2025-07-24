import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [
        { id: '1', name: 'Nike Air Max', price: 120, image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/e783e052-9360-4afb-adb8-c4e9c0f5db07/NIKE+AIR+MAX+NUAXIS.png' },
        { id: '2', name: 'Adidas Ultraboost', price: 150, image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/778d1c14b94648c18a79e4db3915b78d_9366/Ultraboost_5_Shoes_Black_JH9633_01_standard.jpg' },
        { id: '3', name: 'Puma RS-X', price: 90, image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/369666/02/sv01/fnd/IND/fmt/png/RS-X-Shoes' },
        { id: '4', name: 'Reebok Classic', price: 80, image: 'https://www.superkicks.in/cdn/shop/files/2-2025-01-20T211622.605.jpg?v=1737388060' },
        { id: '5', name: 'Converse Chuck Taylor', price: 65, image: 'https://www.converse.in/media/catalog/product/5/6/568497c_01_1.jpg' },
        { id: '6', name: 'Vans Old Skool', price: 70, image: 'https://crepdogcrew.com/cdn/shop/files/vansred.png?v=1752770668' },
        { id: '7', name: 'New Balance 574', price: 85, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhU_7Vb001ZJ3YGNtYjVp-_GHie-auH6Nn-A&s' },
        { id: '8', name: 'Asics Gel-Kayano 29', price: 160, image: 'https://m.media-amazon.com/images/I/61F3NwpIapL._UY1000_.jpg' },
        { id: '9', name: 'Brooks Adrenaline GTS 23', price: 130, image: 'https://brooksrunningindia.com/cdn/shop/files/110391_006_L_Adrenaline_GTS_23.jpg?v=1715846373' },
        { id: '10', name: 'Hoka Clifton 9', price: 140, image: 'https://gambol.in/cdn/shop/files/8_ec22e6b3-4e45-4f76-b7f9-0fb399f9de74.png?v=1725342808' },
        { id: '11', name: 'Salomon Speedcross 6', price: 135, image: 'https://m.media-amazon.com/images/I/81+-1FJuZeL._UY1000_.jpg' },
        { id: '12', name: 'Saucony Kinvara 14', price: 110, image: 'https://m.media-amazon.com/images/I/71xxm+74osL._UY1000_.jpg' },
        { id: '13', name: 'Mizuno Wave Rider 27', price: 125, image: 'https://mizuno.com.au/cdn/shop/files/SH_J1GC230352_00.jpg?v=1751324614' },
        { id: '14', name: 'Under Armour HOVR Phantom 3', price: 100, image: 'https://www.underarmour.in/media/catalog/product/cache/a6c9600f6d89dc76028bfa07e5e1eb9a/3/0/3026652-120231117185556674.jpg' },
        { id: '15', name: 'Fila Disruptor 2', price: 75, image: 'https://images-cdn.ubuy.co.in/6540815a8c06d472760a50da-fila-men-39-s-strada-disruptor.jpg' },
        { id: '16', name: 'Skechers Go Walk Arch Fit', price: 60, image: 'https://www.skechers.in/on/demandware.static/-/Sites-skechers_india/default/dw0a3a0418/images/large/197976062825-5.jpg' },
        { id: '17', name: 'Dr. Martens 1460 Smooth', price: 150, image: 'https://m.media-amazon.com/images/I/81jdFht2c5L._UY1000_.jpg' },
        { id: '18', name: 'Timberland 6-Inch Premium Boot', price: 190, image: 'https://m.media-amazon.com/images/I/718pL8pw8OL.jpg' },
        { id: '19', name: 'Clarks Desert Boot 2', price: 130, image: 'https://m.media-amazon.com/images/I/71IJ3J28z3L._UY1000_.jpg' },
        { id: '20', name: 'Birkenstock Arizona EVA', price: 100, image: 'https://www.birkenstock.in/cdn/shop/products/129423_f1f883f0-b19a-4600-aa7f-1c9e08c59849.jpg?v=1685373453&width=1500' },
        { id: '21', name: 'Crocs Classic Clog', price: 50, image: 'https://m.media-amazon.com/images/I/61QXxSlFv6L._UY1000_.jpg' },
        { id: '22', name: 'Merrell Moab 3', price: 120, image: 'https://m.media-amazon.com/images/I/51uL9FhYuRL._SL1000_.jpg' },
        { id: '23', name: 'Keen Newport H2', price: 110, image: 'https://m.media-amazon.com/images/I/61Cx9QbU7xL._UY1000_.jpg' },
        { id: '24', name: 'Columbia Newton Ridge Plus II', price: 95, image: 'https://www.columbiasportswear.co.in/cdn/shop/files/BM2812-288_1.jpg?v=1743236744' },
        { id: '25', name: 'Nike Blazer Mid 77 Vintage', price: 95, image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/fb7eda3c-5ac8-4d05-a18f-1c2c5e82e36e/BLAZER+MID+%2777+VNTG.png' },
        { id: '26', name: 'Adidas Stan Smith', price: 80, image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/69721f2e7c934d909168a80e00818569_9366/Stan_Smith_Shoes_White_M20324_01_standard.jpg' },
        { id: '27', name: 'Puma Suede Classic XXI', price: 70, image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/374915/01/sv01/fnd/IND/fmt/png/Suede-Classic-XXI-Sneakers' },
        { id: '28', name: 'Reebok Club C 85 Vintage', price: 75, image: 'https://photos6.spartoo.eu/photos/248/24817291/24817291_1200_A.jpg' },
        { id: '29', name: 'Converse Jack Purcell', price: 70, image: 'https://www.converse.in/media/catalog/product/1/6/164224c_a_107x1.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover' },
        { id: '30', name: 'Vans Sk8-Hi', price: 80, image: 'https://m.media-amazon.com/images/I/51HcekcqQ+L._UY1000_.jpg' },
        { id: '31', name: 'New Balance 990v6', price: 175, image: 'https://extrabutterny.in/cdn/shop/files/M990BK6-1.jpg?v=1693977399' },
        { id: '32', name: 'Asics Gel-Lyte III OG', price: 100, image: 'https://www.asics.co.in/media/catalog/product/1/2/1203a330_100_sr_rt_glb-base.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=&width=' },
        { id: '33', name: 'Brooks Ghost 15', price: 130, image: 'https://m.media-amazon.com/images/I/71XjYtwZNRL._SL1500_.jpg' },
        { id: '34', name: 'Hoka Bondi 8', price: 165, image: 'https://i8.amplience.net/i/jpl/jd_560043_a?v=1' },
        { id: '35', name: 'Salomon XT-6', price: 200, image: 'https://images-cdn.ubuy.co.in/63ea50116bc6d743736c60b5-salomon-xt-6-unisex-sportstyle-trail.jpg' },
        { id: '36', name: 'Saucony Jazz Original', price: 60, image: 'https://images-cdn.ubuy.co.in/633c52bc46b284674c442664-saucony-women-s-jazz-original-sneaker.jpg' },
        { id: '37', name: 'Mizuno Wave Sky 6', price: 150, image: 'https://m.media-amazon.com/images/I/81icWdquKaL._UY1000_.jpg' },
        { id: '38', name: 'Under Armour Charged Assert 9', price: 90, image: 'https://m.media-amazon.com/images/I/51PgLKADR9L._SL1000_.jpg' },
        { id: '39', name: 'Fila Classic Kicks B', price: 55, image: 'https://down-id.img.susercontent.com/file/id-11134207-7qul7-lfhq592fwzf105' },
        { id: '40', name: 'Skechers D\'Lites', price: 65, image: 'https://www.skechers.in/on/demandware.static/-/Sites-skechers_india/default/dw6f2afbba/images/large/195969081051-5.jpg' },
        { id: '41', name: 'Dr. Martens Chelsea Boot 2976', price: 160, image: 'https://m.media-amazon.com/images/I/61Sil7KHrOL._SL1500_.jpg' },
        { id: '42', name: 'Timberland Chukka Boot', price: 140, image: 'https://m.media-amazon.com/images/I/61dNKQJlMGL._UY300_.jpg' },
        { id: '43', name: 'Clarks Wallabee', price: 145, image: 'https://www.superkicks.in/cdn/shop/files/1_c8985949-1f7a-4097-9aba-f35a9b42c805.jpg?v=1697794967&width=1946' },
        { id: '44', name: 'Birkenstock Gizeh', price: 110, image: 'https://www.birkenstock.in/cdn/shop/products/143623_pair_aede888d-14b5-4a61-a76a-2cffb20499fd.jpg?v=1685382873' },
        { id: '45', name: 'Crocs LiteRide 360 Clog', price: 60, image: 'https://www.crocs.in/media/catalog/product/2/0/206708_060_alt100_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=' },
        { id: '46', name: 'Merrell Trail Glove 7', price: 105, image: 'https://m.media-amazon.com/images/I/614VlmpIrjL._UY1000_.jpg' },
        { id: '47', name: 'Keen Targhee III Waterproof', price: 150, image: 'https://m.media-amazon.com/images/I/71bCp7fBsrL._UY1000_.jpg' },
        { id: '48', name: 'Columbia Facet 60 Outdry', price: 120, image: 'https://m.media-amazon.com/images/I/61JJcIlferL._UY1000_.jpg' },
        { id: '49', name: 'Nike Dunk Low Retro', price: 110, image: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/14528176/2024/2/14/4f37c906-ac35-4f0d-96d7-bda5cd72c8f51707885563000-Nike-Men-White--Black-Dunk-Low-Retro-Colourblocked-Leather-P-7.jpg' },
        { id: '50', name: 'Adidas Forum Low', price: 90, image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/09c5ea6df1bd4be6baaaac5e003e7047_9366/Forum_Low_Shoes_White_FY7756_01_00_standard.jpg' },
    ],
    searchTerm: '',
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
    },
});

export const { setSearchTerm } = productsSlice.actions;

export default productsSlice.reducer;