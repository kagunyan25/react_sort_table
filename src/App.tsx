import "./styles.css";
import CheckTable from "./components/CheckTable";

// orderは配列そのものの順番とする ex)DefaultItemListProps[0]

// 最終的に出力したものを送信する。
// 追加したい項目において、ローカルストレージ存在するものについてチェック済みにする

export const DefaultItemListProps = [
  {
    id: 0,
    name: "名前",
    isChecked: false
  },
  {
    id: 1,
    name: "メールアドレス",
    isChecked: false
  },
  {
    id: 2,
    name: "性別",
    isChecked: false
  },
  {
    id: 3,
    name: "学校",
    isChecked: false
  },
  {
    id: 4,
    name: "電話番号",
    isChecked: false
  }
];

function App() {
  return (
    <div className="App">
      <CheckTable props={DefaultItemListProps} />
    </div>
  );
}

export default App;
