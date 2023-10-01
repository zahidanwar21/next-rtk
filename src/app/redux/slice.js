const {
  createSlice,
  nanoid,
  current,
  createAsyncThunk,
} = require("@reduxjs/toolkit");

const initialState = {
  apiUserData: [],
  users: JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [],
};

export const fetchApiUsers = createAsyncThunk("fetchApiUsers", async () => {

  const result = await fetch("https://jsonplaceholder.typicode.com/users");

  return result.json();
});

const Slice = createSlice({
  name: "addUserSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      // console.log("action in slice", action)
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.users.push(data);
      let localData = JSON.stringify(current(state.users));
      localStorage.setItem("users", localData);
    },

    removeUser: (state, action) => {
      //   console.log("removing user",action);

      const data = state.users.filter((item) => item.id !== action.payload);
      state.users = data;
      localStorage.setItem("users", JSON.stringify(data));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiUsers.fulfilled, (state, action) => {
      // console.log("extraRed",action)

      (state.isloading = false), (state.apiUserData = action.payload);


    });
  },
});

export const { addUser, removeUser } = Slice.actions;
export default Slice.reducer;
