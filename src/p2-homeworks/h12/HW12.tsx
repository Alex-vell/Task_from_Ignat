import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, ThemesType, ThemeType} from "./bll/themeReducer";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";

//const themes = ['dark', 'red', 'some', 'blue', 'violet'];

function HW12() {
    const theme = useSelector<AppStoreType, ThemeType>(state => state.theme.theme)
    const themes = useSelector<AppStoreType, ThemesType>(state => state.theme.themes)
    const dispatch = useDispatch()

    const onChangeTheme = (theme: ThemeType) => {
      dispatch(changeThemeC(theme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            <SuperSelect options={themes}
                         value={theme}
                         onChangeOption={onChangeTheme}/>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
