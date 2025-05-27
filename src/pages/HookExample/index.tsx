import React, { useState } from "react";
import { Button } from 'antd';

import UseStateExample from "./components/UseStateExample";
import UseEffectExample from "./components/UseEffectExample";

interface HookExampleItem {
    name: string,
    Component: React.FC  // 修正类型名称
}

const HookExample: React.FC = () => {

    const [CurrentComponent, setCurrentComponent] = useState<React.ReactElement>(<UseStateExample />)

    const exampleList: HookExampleItem[] = [
        {
            name: 'useState',
            Component: UseStateExample  // 直接使用组件引用
        },
        {
            name: 'useEffect',
            Component: UseEffectExample  // 直接使用组件引用
        }
    ]

    return (
        <div className="p-[20px]">
            <div className="flex items-center gap-[20px]">
                {
                    exampleList.map((item) => (
                        <div key={item.name}>
                            <Button
                                type="primary"
                                onClick={() => setCurrentComponent(<item.Component />)}
                            >
                                {item.name}
                            </Button>
                        </div>
                    ))
                }
            </div>

            <div className="mt-[20px]">
                { CurrentComponent }
            </div>
        </div>
    )
}

export default HookExample;