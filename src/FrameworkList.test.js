import React from "react";
import {render,cleanup,screen} from "@testing-library/react";
import FrameworkList from "./FrameworkList";


// ListComponentテスト
//継承先でしっかりとレンダリングされているかのテスト


afterEach(()=>cleanup());


describe("Rendering the list with props",()=>{

    // h1タグが出力されるか
    it("shild render no data! when no data propped",()=>{
        render(<FrameworkList />)

        // toBeInTheDocumentはhtmlの中にNo data!のテキスト構造が含まれあるか？を確かめる
        expect(screen.getByText("No data!")).toBeInTheDocument();
    })

    it("Shoud render list item correctly",()=>{
        // ダミーデータの生成
        const dummyData=[
            {id:1,item:"React dummy"},
            {id:2,item:"Angular dummy"},
            {id:3,item:"Vue dummy"},
        ]

        render(<FrameworkList frameworks={dummyData}  />)
        // 渡った先で内容を格納している
        const frameworkItems =screen.getAllByRole("listitem").map((ele)=>
        ele.textContent)

        // 元々のdummydateを直で配列で入れた
        const dummyItems=dummyData.map((ele)=>ele.item)

        // 上二つが一致するか
        expect(frameworkItems).toEqual(dummyItems)

        // Nodataがレンダリングされていないことを調べる
        expect(screen.queryByText("No data !")).toBeNull()
    })

})