import { setNewsList } from "../actions/newsAction";
import { setLoading, clearLoading } from "../actions/appAction";
import axios from "axios";

const url =
  "https://newsapi.org/v2/everything?" +
  "q=Apple&" +
  "from=2022-04-18&" +
  "sortBy=popularity&" +
  "apiKey=e976e06d3d034c2b9bb5a8cdd60a9fe5";
// ?parametre varsa boyle yaz
//! getNews fonksiyonu başka bir fonksiyonu döndürüyor. Bu durumda çağırırken dispatch(getNews()) şeklinde kullanmak gerekir.
export const getNews = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading());
      const { data } = await axios.get(url);
      dispatch(setNewsList(data.articles));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(clearLoading());
    }
  };
};

// ?parametre yoksa boyle yaz

//! bu kullanımda getNew bir değişken gibi düşünülebilir. Dolayısıyla, View tarafında dispatch(getNews) şeklinde çağrılır.
// export const getNews = async (dispatch) => {
//   try {
//     dispatch(setLoading());
//     const { data } = await axios.get(url);
//     dispatch(setNewsList(data.articles));
//   } catch (error) {
//     console.log(error);
//   } finally {
//     dispatch(clearLoading());
//   }
// };

// const store = createStore(rootReducer,composeWithDevTools());
