import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosInstanse.js";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true" || false,
  role: localStorage.getItem("role") || "",
  data: localStorage.getItem("data") || {}
}

export const login = createAsyncThunk("auth/login", async (data) => {
  try {
    let res = axiosInstance.post("/user/login", data);

    await toast.promise(res, {
      loading: "Loading...",
      success: (data) => {
        return data?.data?.message;
      },
      error: "Failed to log in",
    });
    // getting response resolved here
    res = await res;
    return res.data;
  } catch (error) {
    toast.error(error.message);
  }
});

export const createAccount = createAsyncThunk("/auth/signup", async (data) => {
    const waitmessage =toast.loading('Please wait.. your account is creating')
  try {
    const response = await axiosInstance.post("user/register", data);
    toast.success(response?.data?.message ,{id:waitmessage});
    return await response.data;
  } catch (error) {
    toast.error(error?.response?.data?.message || "Failed to create account");
    throw error; 
  }
});

export const updateProfile = createAsyncThunk(
  "/auth/updateProfile",
  async (data) => {
    try {
      const response = await axiosInstance.put(
        `user/update/${data[0]}`,
        data[1]
      );
      toast.promise(response, {
        loading: "Wait! updating your account",
        success: (data) => {
          return data?.data?.message;
        },
        error: "Failed to update your account",
      });
      return (await response).data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

export const getUserData = createAsyncThunk("/auth/getData", async () => {
  try {
    const response = await axiosInstance.get("/user/me");
    return (await response).data;
  } catch (error) {
    toast.error(error?.message);
  }
});

export const logout = createAsyncThunk("/auth/logout", async () => {
  const logmessage= toast.loading('Logout Successfull..!')
  try {
    const response = await axiosInstance.post("user/logout");
    toast.success(response?.data?.message,{id:logmessage})
    return await response.data;
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(login.fulfilled, (state, action) => {
      localStorage.setItem("data", JSON.stringify(action?.payload?.user));
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("role", action?.payload?.user?.role);
      state.isLoggedIn = true;
      state.data = action?.payload?.user;
      state.role = action?.payload?.user?.role;
    })
      .addCase(logout.fulfilled, (state) => {
        localStorage.clear();
        state.isLoggedIn = false;
        state.role = "";
        state.data = {};
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        if (!action?.payload?.user) return;
        localStorage.setItem("data", JSON.stringify(action?.payload?.user));
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("role", action?.payload?.user?.role);
        state.isLoggedIn = true;
        state.role = action?.payload?.user?.role;
        state.data = action?.payload?.user;
      });
  },
});

export default authSlice.reducer;
