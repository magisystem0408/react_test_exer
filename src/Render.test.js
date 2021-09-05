import React from "react";

import {render,screen} from "@testing-library/react"
import Render from "./Render";


describe("Rendering",  () => {

    // それぞれのコンポーネントがまず存在しているかをテストする
    it("Shold render all the elements correctly",()=>{
        render(<Render />);

        // screen.debug(screen.getByRole("heading"));

        // (h1タグ)headingの内容が存在するかを判定する
        expect(screen.getByRole("heading")).toBeTruthy()

        expect(screen.getByRole("textbox")).toBeTruthy()

        // ボタンが存在するか
        // expect(screen.getAllByRole("button")).toBeTruthy()

        expect(screen.getAllByRole("button")[0]).toBeTruthy()

        // expect(screen.getByText("Udemy")[0]).toBeTruthy()


        // expect(screen.queryByText("fasf]j")).toBeNull()


        // idを使用して、取得する場合
        expect(screen.getByTestId("copyright")).toBeTruthy()

        screen.debug(screen.getByText("Udemy"))

    })
});