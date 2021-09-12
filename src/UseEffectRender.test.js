import React from "react";
import {render,screen} from "@testing-library/react";
import UseEffectRender from "./UseEffectRender";

describe("useEffect rendering",()=>{
    it("Should render only after async function resolevd",async ()=>{

        render(<UseEffectRender />)
        // スラッシュ二つで正規表現になる
        expect(screen.queryByText(/I am/)).toBeNull()

        //findを使うと非同期で結果が反映するまで待ってくれる
        //I amが含まれるテキストを探してくれる
        expect(await screen.findByText(/I am/)).toBeInTheDocument()

    })
})