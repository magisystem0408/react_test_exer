import React from "react";
import {render, screen, cleanup} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import RenderInput from "./RenderInput";


// テストケースの直後にテストを実行する時は
// itが何個もある場合はcleanupを実行する必要がある。
// cleanupでテスト間の依存が排除されてテストがしっかり行われるようになる


afterEach(()=> cleanup())



// しっかりとレンダリングされているか確認するためのテスト群
describe('Rendering', () => {

    it("shold render all the elements correctly", () => {
        render(<RenderInput/>)
        // ボタンが入ってるかをテストしている
        expect(screen.getByRole("button")).toBeTruthy()
        expect(screen.getByPlaceholderText("Enter")).toBeTruthy()
    })
});

describe("Input form onChange event", () => {
    it("Shodld update input value correctly", () => {
        render(<RenderInput />)
        const inputValue =screen.getByPlaceholderText("Enter");

        // ユーザーがシュミレートしている
        userEvent.type(inputValue,"test")
        expect(inputValue.value).toBe("test")
    })
})


describe("Console button conditionally triggerd",()=>{
    // 関数としてmockが呼び出されるか呼び出されないか
    it("sould not trigger output function",()=>{
        const outputConsole =jest.fn()

        // inputステートがからの時に何も呼び出されないかをテストするテストケース
        render(<RenderInput  outputConsole={outputConsole}/>)
        userEvent.click(screen.getByRole("button"))
        expect(outputConsole).not.toHaveBeenLastCalledWith()
    })

    // if分の中に入ることができるのか
    it("Should trigger output function",()=>{
        const outputConsole =jest.fn();
        render(<RenderInput  outputConsole={outputConsole}/>)
        const inputValue =screen.getByPlaceholderText("Enter");
        userEvent.type(inputValue,"test");
        userEvent.click(screen.getByRole("button"));
        expect(outputConsole).toHaveBeenCalledTimes(1)

    })

})