//*Actiondan once reducer'i olusturduk

import { DECREASE_COUNTER, INCREASE_COUNTER, RESET } from "../types/counterTypes";


const initialState = {
  counter: 10,
};

//* state = initialState means that if there is no state from the user work with initial state
const counterReducer = (state = initialState, action) => {
  //*  actionin typei benim 'case' imdeki kine uyuyor mu?
  switch (action.type) {
    case INCREASE_COUNTER:
      //* Eger type 'imiz increase_counter ise islemi return'den sonra yapiyoruz!
      //* '...state ' demek onceki statelerim aynen kalsin demek! KArmasik projeler icin gerekli!
      //* counter : state.counter +1 de ana parca
      return { ...state, counter: state.counter + 1 };
    case DECREASE_COUNTER:
      return { ...state, counter: state.counter - 1 };
    case RESET:
      return { ...state, counter: 0 };
      //*default kullanmamizin sebebi ise eger kullanici yukarida olmayan bir durum gonderirse bana default dondursun diye
    default:
      return state;
  }
};

//* Action dedigimiz sey ise bize front-end den yani kullanicidan gelen kisim. Ornegin action ile incear counter geliyorsa artirma islemi yapiliyor!


export default counterReducer;



// 1) ReducerA gel reducer olustur! (Biz counterReducerFonksiyonunu olusturduk)
// 2) redux 'in icindeki index.js dosyasina git!
// 3) Birden fazla reducer kullanacaksak bunu index.js de combine reducer ile tanimlamamiz gerekiyor
// 4)Combine islemini yaptiktan sonra App.js veya index.js(baslangicta olan) icinde hangi componenetlarda kullanacaksan onlari sarmallama!
// 5) index.js icerine provider'i import et ve componentlari sarmalla! 
// 6)  <Provider store={store}>  --> const { persistor, store } = configureStore() --> Burada providerin icerisinde store' u cagiriyoruz. Yani store bizim redux closorunun icerisinde olusturdugumuz index.js klosorunun icerisindeki fonksiyon!
// 7) Simdi reducerimizi olusturduk ve consume etme kismina geldik!
// 8)Counter componetinin icerisine gidiyoruz ve orada useDispatch ve useSelectoru cagiriyoruz
// 9) useSelector sayasinde store da olusturgugumuz bir state i alabiliriz! Bizim sadece 1 tane counterimiz var --> o da counter. Onu useSelector ile istedigimiz bir component'in icinde cagirip kullanabiliririz!
//10) Su sekilde yapabiliriz --> const {counter} = useSelector((state) => state.counterReducer)


