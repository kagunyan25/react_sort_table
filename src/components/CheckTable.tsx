import { useEffect, useState, FC } from "react";
import UserTable from "./UserTable";

type Props = {
  id: number;
  name: string;
  order: number;
  isChecked: boolean;
};

const CheckBox = ({ id, value, checked, onChange }) => {
  return (
    <input
      id={id}
      type="checkbox"
      name="inputNames"
      checked={checked}
      onChange={onChange}
      value={value}
    />
  );
};

const CheckTable: FC<Props> = (props) => {
  const [items, setItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      // propsをItemsにsetする（ロード時）
      setItems(props.props);
    };
    getItems();
  }, []);

  useEffect(() => {
    const getCheckedItems = async () => {
      setCheckedItems(items.filter((item) => item.isChecked));
    };
    getCheckedItems();
  }, []);

  const handleChange = (index) => {
    const click_item_id = Number(index.target.id);
    if (checkedItems.includes(items[click_item_id])) {
      // すでにチェックが入っている場合はcheckedItemsからitemを削除する
      setCheckedItems(checkedItems.filter((item) => item.id !== click_item_id));
    } else {
      setCheckedItems([...checkedItems, items[click_item_id]]);
    }
  };

  const findChecked = (item_id: number) => {
    checkedItems.map((checkedItem) => {
      if (Number(checkedItem.id) === item_id) {
        return Number(checkedItem.id);
      } else {
        return false;
      }
    });
  };

  return (
    <div className="tables">
      <div className="itemTable">
        <h3>追加したい項目</h3>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>ID</th>
              <th>name</th>
              <th>isChecked</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr>
                <td>
                  <CheckBox
                    id={item.id}
                    value={item}
                    onChange={handleChange}
                    checked={checkedItems[findChecked(item.id)]}
                  />
                </td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.isChecked ? "true" : "false"}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <button onClick={deleteCheckedItems}>一括削除</button> */}
      </div>
      <UserTable props={checkedItems} />
    </div>
  );
};

export default CheckTable;
