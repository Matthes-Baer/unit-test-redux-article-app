import { useSelector, useDispatch } from "react-redux";
import { testAddReducer } from "../features/ListSlice";

const List = () => {
  const listState = useSelector((state) => state.listReducers.value);
  const dispatch = useDispatch();

  return (
    <div
      style={{ marginLeft: "auto", marginTop: "500px", marginBottom: "500px" }}
    >
      <h1>This is a list</h1>
      <ul style={{ listStyleType: "none" }}>
        {listState.map((listItem) => {
          return (
            <li key={listItem.id} data-testid="list-item">
              {listItem.description}
            </li>
          );
        })}
      </ul>
      <button
        onClick={() =>
          dispatch(
            testAddReducer({
              id: `${new Date().getSeconds()}1`,
              description: "This is added",
              significance: 5,
            })
          )
        }
      >
        This button can add a new entry to the list
      </button>
    </div>
  );
};

export default List;
