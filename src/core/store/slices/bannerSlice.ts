import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Banner } from "../../types/types";

interface BannerState {
  heroBanner: Banner[];
  isBannerUpdated:boolean;
}

const initialState: BannerState = {
  heroBanner: [],
    isBannerUpdated:false
};

const bannerSlice = createSlice({
  name: "banners",
  initialState,
  reducers: {
    setBanners: (state: BannerState, action: PayloadAction<Banner[]>) => {
      state.heroBanner=action.payload
    },
    setIsBannerUpdated:(state:BannerState,action:PayloadAction<boolean>)=>{
        state.isBannerUpdated=action.payload
    }

  },
});

export const { setBanners } = bannerSlice.actions;

export default bannerSlice.reducer;
