import { useEffect, useState, FC } from "react";

type Props = {
  id: number;
  name: string;
  order: number;
  isChecked: boolean;
};

export const UserTable: FC<Props> = (props) => {
  const [items, setItems] = useState([]);
  const [dragIndex, setDragIndex] = useState(null);

  useEffect(() => {
    const getItems = async () => {
      setItems(props.props);
    };
    getItems();
  }, [props]);

  const dragStart = (index) => {
    setDragIndex(index);
  };

  const dragEnter = (index) => {
    if (index === dragIndex) return;
    setItems((prevState) => {
      let newItems = JSON.parse(JSON.stringify(prevState));
      const deleteElement = newItems.splice(dragIndex, 1)[0];
      newItems.splice(index, 0, deleteElement);
      return newItems;
    });
    setDragIndex(index);
  };

  const dragEnd = (index) => {
    console.log("ここにサーバへの並び替え後のデータ送信処理を追加");
    // ここでorderを入れ替える
    setDragIndex(null);
  };

  const dataSend = () => {
    console.log(items);
  };

  return (
    <div className="itemTable">
      <h3>項目の並び替え</h3>
      {/* <form> */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>isChecked</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr
              key={item.id}
              draggable={true}
              onDragStart={() => dragStart(index)}
              onDragEnter={() => dragEnter(index)}
              onDragOver={(e) => e.preventDefault()}
              onDragEnd={dragEnd}
              className={index === dragIndex ? "dragging" : ""}
            >
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.isChecked ? "true" : "false"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={dataSend}>適用ボタン</button>
      {/* </form> */}
    </div>
  );
};

export default UserTable;
