import React from "react";
import {render, screen, cleanup} from "@testing-library/react";
import userEvent from "@testing-library/user-event";


import {rest} from "msw";
import {setupServer} from "msw/node";
import MockServer from "./MockServer";


//Mockテスト用

const server = setupServer(
    rest.get("https://jsonplaceholder.typicode.com/users/1", (req, res, ctx) => {
        // ctxには取得したデータが入っている

        // 擬似的なエンドポイントを定義してくれる
        return res(ctx.status(200), ctx.json({username: "bred dummy"}));
    })
)

// 最初に一回だけ実行されるbeforeAll()
beforeAll(() => server.listen())

// テストケース終わると毎回呼び出す
afterEach(() => {
    server.restoreHandlers()
    cleanup()
})


// 最後に一回だけ
// サーバーを閉じる
afterAll(() => server.close())


describe("Mocking API", () => {

    // fetchが成功した場合
    it("[Fetch success]Shold display fetched data correctly and button disable", async () => {
        render(<MockServer/>)

        // ボタンを取得してクリックする
        userEvent.click(screen.getByRole("button"))

        // テキストが入っているかテスト
        expect(await screen.findByText("bred dummy")).toBeInTheDocument()

        //toHaveAttribute：属性があるかないかを判定してくれる
        expect(screen.getByRole("button")).toHaveAttribute("disabled")

    })

    // fetchが失敗した場合
    it("[Fetch failure]should display error msg,no render heading and button abled", async () => {
        // これはitのなかで有効になる
        server.use(
            rest.get(
                "https://jsonplaceholder.typicode.com/users/1",
                (req,res,ctx) =>{
                    return res(ctx.status(404))
                }
            )
        )
        return(<MockServer />)
        userEvent.click(screen.getByRole("button"))
        expect(await screen.findByTestId("error")).toHaveTextContent(
         "Fetching Failed !"
        )

        // ボタン
        expect(screen.queryByRole("heading")).toBeNull()
        expect(screen.getByRole("button")).not.toHaveAttribute("disabled")
    })

})